import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import BookCard from './BookCard';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({book}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MenuBookOutlinedIcon onClick={handleClickOpen}>
      </MenuBookOutlinedIcon>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
  
        <DialogContent>
        <BookCard book={book}/>
        </DialogContent>
        <DialogActions sx={{display:"flex", justifyContent: 'center'}}>
          <Button color="info" onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
