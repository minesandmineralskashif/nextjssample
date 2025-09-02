import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

export default function DeleteImageDialog(props) {
  const {
    handleDeleteImage,
    imagesTableId,
    imageUrl,
    ingredientId,
    menuItemId,
    handlePostIngredientDeletionActions,
    isShowDeleteImageDialog,
    setIsShowDeleteImageDialog,
    isConfirmButtonDisabled,
    setIsConfirmButtonDisabled,
    ...rest
  } = props;

  const { t } = useTranslation();

  const handleClose = () => {
    setIsShowDeleteImageDialog(false);
  };

  return (
    <div>
      <Dialog open={isShowDeleteImageDialog} onClose={handleClose}>
        <DialogTitle>{t('Delete image')}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t('Delete image? This action cannot be reversed.')}
            <br />
            {t('To confirm, please type')}
&nbsp;
            <strong>{t('delete')}</strong>
&nbsp;
            {t('in the field below')}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=""
            fullWidth
            variant="standard"
            onChange={text => setIsConfirmButtonDisabled(text.target.value.toLowerCase() !== t('delete'))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('Cancel')}</Button>
          <Button
            color="error"
            variant="contained"
            onClick={handleDeleteImage}
            disabled={isConfirmButtonDisabled}
          >
            {t('Delete')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DeleteImageDialog.propTypes = {
  handleDeleteImage: PropTypes.func,
  imagesTableId: PropTypes.string,
  imageUrl: PropTypes.string,
  ingredientId: PropTypes.string,
  menuItemId: PropTypes.string,
  handlePostIngredientDeletionActions: PropTypes.func,
  isShowDeleteImageDialog: PropTypes.bool,
  setIsShowDeleteImageDialog: PropTypes.func,
  isConfirmButtonDisabled: PropTypes.bool,
  setIsConfirmButtonDisabled: PropTypes.func,
};

DeleteImageDialog.defaultProps = {
  handleDeleteImage: () => {},
  imagesTableId: null,
  imageUrl: '',
  ingredientId: null,
  menuItemId: null,
  handlePostIngredientDeletionActions: () => { },
  isShowDeleteImageDialog: false,
  setIsShowDeleteImageDialog: () => { },
  isConfirmButtonDisabled: true,
  setIsConfirmButtonDisabled: () => { },
};
