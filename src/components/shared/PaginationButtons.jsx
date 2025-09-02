import React from 'react';

import { useTranslation } from 'react-i18next';

import {
  Box,
  IconButton,
} from '@mui/material';

import PropTypes from 'prop-types';
import { ArrowLeft as ArrowLeftIcon } from '../../icons/arrow-left';
import { ArrowRight as ArrowRightIcon } from '../../icons/arrow-right';

export default function PaginationButtons(props) {
  const {
    arrLastEvaluatedKeys,
    setArrLastEvaluatedKeys,
    nextLastEvaluatedKey,
    getNextBatchOfItems, // e.g. getIngredients(), getMenuItems(), etc.
    ariaLabelForPreviousButton, // e.g. 'Go to the previous list of ingredients'
    ariaLabelForNextButton, // e.g. 'Go to the next list of ingredients'
    optionalSearchTerm = null,
  } = props;

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 2,
      }}
    >
      <IconButton
        disabled={arrLastEvaluatedKeys.length <= 1}
        color="primary"
        size="large"
        onClick={(evt) => {
          evt.preventDefault();
          getNextBatchOfItems(arrLastEvaluatedKeys[arrLastEvaluatedKeys.length - 2], true, optionalSearchTerm);
          setArrLastEvaluatedKeys(arrLastEvaluatedKeys.slice(0, arrLastEvaluatedKeys.length - 1));
        }}
        aria-label={t(ariaLabelForPreviousButton)}
      >
        <ArrowLeftIcon />
      </IconButton>
      <IconButton
        disabled={!nextLastEvaluatedKey}
        color="primary"
        size="large"
        onClick={(evt) => {
          evt.preventDefault();
          getNextBatchOfItems(nextLastEvaluatedKey, false, optionalSearchTerm);
        }}
        aria-label={t(ariaLabelForNextButton)}
      >
        <ArrowRightIcon />
      </IconButton>
    </Box>
  );
}

PaginationButtons.propTypes = {
  arrLastEvaluatedKeys: PropTypes.array.isRequired,
  setArrLastEvaluatedKeys: PropTypes.func.isRequired,
  nextLastEvaluatedKey: PropTypes.string,
  getNextBatchOfItems: PropTypes.func.isRequired,
  ariaLabelForPreviousButton: PropTypes.string.isRequired,
  ariaLabelForNextButton: PropTypes.string.isRequired,
  optionalSearchTerm: PropTypes.string,
};

PaginationButtons.defaultProps = {
  nextLastEvaluatedKey: '',
  optionalSearchTerm: null,
};
