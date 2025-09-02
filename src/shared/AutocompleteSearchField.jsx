import SearchIcon from '@mui/icons-material/Search';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { debounce } from 'debounce';
import { matchSorter } from 'match-sorter';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDebouncedCallback } from 'use-debounce';
import { validate as uuidValidate } from 'uuid';

import RestartAltIcon from '@mui/icons-material/RestartAlt';
import LoadingButton from '@mui/lab/LoadingButton';

import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  useMediaQuery,
} from '@mui/material';

import {
  AddCircle,
  Save,
  Send
} from '@mui/icons-material';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/use-auth';

import {
  refreshIdTokenAsNeeded
} from '../../utils/aws-cognito-custom';

const filter = createFilterOptions();

export function AutocompleteSearchField(props) {
  const {
    arrSelectedItems, // e.g. arrSelectedMenuItems
    setArrSelectedItems, // e.g. setArrSelectedMenuItems
    setEndpointResponseItems, // e.g. setMenuItems
    setGroup,
    setTotalCountOfItems, // e.g. setTotalCountOfMenuItems
    setPage, // set this to 0 to indicate start with page 0
    // setRowsPerPage,
    // capitalizeFunc,
    setExclusiveStartKeyId, // TODO (mdichirico) -- need to research this one, but for now, it is ok to not worry about it during development.
    setExclusiveStartKeyUserIdOfOwner, // TODO (mdichirico) -- same as above
    resetList,
    searchByKeywordEndpoint, // process.env.NEXT_PUBLIC_MENU_ITEM_GET_MENU_ITEM_BY_NAME_ENDPOINT}/<searchTerm,
    searchByKeywordEndpointQueryStringParams, // ?isApplyIsActiveFlag=false (NOTE: include the leading '?' character)
    fetchByIdEndpoint, // process.env.NEXT_PUBLIC_APPROXIMATE_WEIGHTS_GET_BY_ID_ENDPOINT}/<searchTermId>
    fetchByIdEndpointQueryStringParams, // ?isApplyIsActiveFlag=false (NOTE: include the leading '?' character)
    shortFormSearchFieldPlaceholder, // 'Ingredient name or ID'
    longFormSearchFieldPlaceholder, // 'Enter name of ingredient or the ID of the approximate weight record'
  } = props;

  const { t } = useTranslation();
  const { logout } = useAuth();
  const router = useRouter();

  const activeOrganization = typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('activeOrganization')) : null;
  const ORGANIZATION_ID = activeOrganization?.id || null;

  const [searchTerm, setSearchTerm] = useState('');
  const [open, toggleOpen] = useState(false);
  const [arrAutocompleteOptions, setArrAutocompleteOptions] = useState([]); // this represents the rows coming back from the API (get-approximate-weight-by-keywords)
  const [ingredientObj, setIngredientObj] = useState({});
  const [isQueryingApi, setIsQueryingApi] = useState(false); // when true, we are querying the API for data
  const [isResetButtonDisabled, setIsResetButtonDisabled] = useState(true);

  const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue);

  const xsUp = useMediaQuery(theme => theme.breakpoints.up('xs'));
  const smUp = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const mdUp = useMediaQuery(theme => theme.breakpoints.up('md'));
  const lgUp = useMediaQuery(theme => theme.breakpoints.up('lg'));

  const handleOnChange = (event) => {
    // 'onchange' listener is listening for when a user selects from the dropdown or actually adds a new option from the dialog window
    setSearchTerm(event.target.value);
    if (event.target.value.length === 0) {
      setIsResetButtonDisabled(true);
    } else if (isResetButtonDisabled) {
      setIsResetButtonDisabled(false);
    }
  };
  // This function does the API call that checks for menuItems based on the search term in event.target.value
  const handleOnKeyPress = useDebouncedCallback(async (event) => {
    try {
      setIsQueryingApi(true);
      const SEARCH_TERM = event.target.value?.replace(/\s+/g, ' ').trim();
      let SEARCH_TERM_ID = 0;
      // if the user clicks the 'enter' key, we interpret that to mean that he wishes to keep
      // this current search results and there is no need to do another API call to fetch data.
      if (event.key === 'Enter' || event.keyCode === 13) {
        // stop the loading indicator:
        setIsQueryingApi(false);
        // clear out the search field:
        setSearchTerm('');
        // disable the 'reset' button since the search field is now empty:
        setIsResetButtonDisabled(true);
        // if the user deleted everything in the search field, then 'reset' the list:
        if (!SEARCH_TERM.length) {
          resetList();
        }
        return;
      }

      if (uuidValidate(SEARCH_TERM)) {
        SEARCH_TERM_ID = SEARCH_TERM; // the user entered an the ID (a UUID) in the search field, so let's use it
      }
      if (!SEARCH_TERM_ID && SEARCH_TERM.length >= 3) {
        const hasIdToken = await refreshIdTokenAsNeeded();
        if (!hasIdToken) {
          logout();
          router.push('/').catch(console.error);
        }
        const foo = await axios.get(
          `${searchByKeywordEndpoint}/${SEARCH_TERM}${searchByKeywordEndpointQueryStringParams}`,
          {
            headers: {
              Authorization: getCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN),
              'Organization-Id': ORGANIZATION_ID
            },
          }
        ).catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response.status === 401) {
              logout();
              router.push('/').catch(console.error);
            }
            if (error.response.status === 404) {
              setEndpointResponseItems([]);
              setPage(0);
            }
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
          } else {
            // Something happened in setting up the request that triggered an Error
          }
        });
        setIsQueryingApi(false);
        // enable the 'reset' button
        if (isResetButtonDisabled) {
          setIsResetButtonDisabled(false);
        }

        setArrAutocompleteOptions(foo?.data?.items);
        setEndpointResponseItems(foo?.data?.items);
        if (foo?.data?.items?.length) {
          setPage(0);
        }

        // setTimeout(() => { setIsQueryingApi(false)}, 5000)
      } else if (!SEARCH_TERM_ID && SEARCH_TERM.trim().length === 0) {
        setIsQueryingApi(false);
        // clear out the search field:
        setSearchTerm('');
        // disable the 'reset' button since the search field is now empty:
        setIsResetButtonDisabled(true);

        resetList();
      } else if (SEARCH_TERM_ID) {
        setIsQueryingApi(true);
        const hasIdToken = await refreshIdTokenAsNeeded();
        if (!hasIdToken) {
          logout();
          router.push('/').catch(console.error);
        }
        const response = await axios.get(
          `${fetchByIdEndpoint}/${SEARCH_TERM_ID}${fetchByIdEndpointQueryStringParams}`,
          {
            headers: {
              Authorization: getCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN),
              'Organization-Id': ORGANIZATION_ID
            },

          }
        ).catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response.status === 401) {
              logout();
              router.push('/').catch(console.error);
            }
            if (error.response.status === 404) {
              setEndpointResponseItems([]);
              setArrAutocompleteOptions([]);
              setPage(0);
            }
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
          } else {
            // Something happened in setting up the request that triggered an Error
          }
        });
        setIsQueryingApi(false);
        // BEGIN JIRA AA-653
        if (response?.data?.Item === undefined && response?.data?.item !== undefined) {
          // another world-class hack to get around the fact that the API is returning a lowercase 'item' property:
          response.data.Item = response.data.item;
        }
        // END JIRA AA-653
        // we need to do some post-processing to add some properties that are not normally returned by this endpoint:
        if (response?.data?.Item) {
          response.data.Item.key = response.data.Item.id;
        }

        if (response?.data?.Item) {
          setArrAutocompleteOptions([response?.data?.Item]);
          setEndpointResponseItems([response?.data?.Item]);
          setPage(0);
        }
      }
    } catch (err) {
      // TODO (mdichirico) -- add some error handling here
      setEndpointResponseItems([]);
      setArrAutocompleteOptions([]);
      setPage(0);
    }
  }, process.env.NEXT_PUBLIC_DEBOUNCE_TIME);

  return (
    <Stack direction="row" spacing="2">
      <TextField
        autoFocus
        value={searchTerm}
        onKeyUp={handleOnKeyPress}
        onChange={handleOnChange}
        // filterOptions={(x) => x}
        /*
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              menuItem: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        */
        id="free-solo-dialog-demo"
        options={arrAutocompleteOptions}
        // getOptionLabel={(option) => {

        //   // e.g value selected with enter, right from the input
        //   if (typeof option === 'string') {
        //     return option;
        //   }
        //   if (option.inputValue) {
        //     return option.inputValue;
        //   }
        //   return option.nameOfMenuItem;

        // }}
        //  selectOnFocus
        // clearOnBlur
        // handleHomeEndKeys
        // renderOption={(props, option) => <li {...props}>{option.nameOfMenuItem}</li>}
        fullWidth
        // freeSolo
        label={t('Search')}
        placeholder={xsUp && !smUp ? t(shortFormSearchFieldPlaceholder) : t(longFormSearchFieldPlaceholder)}
        /*
        renderInput={(params) => (
          <TextField
            {...params}
            label={placeholder ? t(placeholder) : t("Ingredient")}
          />
        )}
        */
        sx={{
          mr: 1,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
            >
              {
                  ((!isQueryingApi && isResetButtonDisabled) || (smUp && !isQueryingApi && !isResetButtonDisabled))
                  && (
                    <Tooltip title={t('Clear search terms / reset')}>
                      <IconButton
                        aria-label="search"
                        color="inherit"
                        sx={{
                          backgroundColor: 'none',
                          width: '40px',
                          height: '40px',
                        }}
                        onClick={(evt) => {
                          resetList(evt);
                          setSearchTerm('');
                          setIsResetButtonDisabled(true);
                        }}
                      >
                        <SearchIcon fontSize="large" />
                      </IconButton>
                    </Tooltip>
                  )
                }
              {
                  isQueryingApi && !isResetButtonDisabled
                  && (
                  <Box
                    sx={{
                      '& > button': {
                        m: 0,
                        pl: -1,
                        width: '40px',
                        height: '40px',
                      },
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns: xlink="http://www.w3.org/1999/xlink"
                      style={{
                        margin: 'auto',
                        background: 'none',
                        display: 'block',
                        shapeRendering: 'auto'
                      }}
                      width="40px"
                      height="40px"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="xMidYMid"
                    >
                      <circle cx="50" cy="50" fill="none" stroke="#d3d3d3" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          repeatCount="indefinite"
                          dur="1s"
                          values="0 50 50;360 50 50"
                          keyTimes="0;1"
                        />
                      </circle>
                    </svg>

                  </Box>
                  )
                }
              {
                  xsUp && !smUp
                  && !isQueryingApi && !isResetButtonDisabled && (
                    <Tooltip title={t('Reset')}>
                      <IconButton
                        aria-label="search"
                        sx={{
                          backgroundColor: 'none',
                          width: '40px',
                          height: '40px',
                        }}
                        onClick={(evt) => {
                          resetList(evt);
                          setSearchTerm('');
                          setIsResetButtonDisabled(true);
                        }}
                      >
                        <RestartAltIcon fontSize="large" color="success" />
                      </IconButton>
                    </Tooltip>
                  )
                }
            </InputAdornment>

          ),
          type: 'search',
        }}
      />
      <LoadingButton
        size="small"
        color="secondary"
        onClick={(evt) => {
          resetList(evt);
          setSearchTerm('');
          setIsResetButtonDisabled(true);
        }}
        loading={isQueryingApi}
        loadingPosition="start"
        startIcon={<AddCircleIcon />}
        variant="contained"
        disabled={isResetButtonDisabled}
        sx={{
          display: {
            xs: 'none',
            sm: 'flex',
          },
        }}
      >
        {t('Reset')}
      </LoadingButton>
    </Stack>
  );
}

AutocompleteSearchField.propTypes = {
  arrSelectedItems: PropTypes.array,
  setArrSelectedItems: PropTypes.func,
  setEndpointResponseItems: PropTypes.func.isRequired,
  setGroup: PropTypes.func,
  setTotalCountOfItems: PropTypes.func,
  setPage: PropTypes.func,
  setExclusiveStartKeyId: PropTypes.func,
  setExclusiveStartKeyUserIdOfOwner: PropTypes.func,
  resetList: PropTypes.func,
  searchByKeywordEndpoint: PropTypes.string.isRequired,
  searchByKeywordEndpointQueryStringParams: PropTypes.string.isRequired,
  fetchByIdEndpoint: PropTypes.string.isRequired,
  fetchByIdEndpointQueryStringParams: PropTypes.string.isRequired,
  shortFormSearchFieldPlaceholder: PropTypes.string.isRequired,
  longFormSearchFieldPlaceholder: PropTypes.string.isRequired,
};

AutocompleteSearchField.defaultProps = {
  arrSelectedItems: [],
  setArrSelectedItems: () => { },
  setGroup: () => { },
  setTotalCountOfItems: () => { },
  setPage: () => { },
  setExclusiveStartKeyId: () => { },
  setExclusiveStartKeyUserIdOfOwner: () => { },
  resetList: () => { },
};
