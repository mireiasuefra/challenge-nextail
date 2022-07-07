import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function ConfirmationDialog(props) {


  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"¡Un momento!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          ¿Seguro que quieres eliminar este producto?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Si
        </Button>
        <Button onClick={props.handleClose} color="primary" autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;
