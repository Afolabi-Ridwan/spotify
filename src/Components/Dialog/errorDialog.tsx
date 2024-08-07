import { forwardRef } from "react";
import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Button } from "@mui/material";
// clickHandler, innerText

interface errorProps {
    errorMessage: string | null;
    handleClose: () => void;
}

const ErrorDialog:React.FC<errorProps> = forwardRef(({errorMessage, handleClose}) => {


  return (
    <div>
      <Dialog open={!!errorMessage} onClose={handleClose}>
        <DialogTitle >Error</DialogTitle>
        <DialogContent>
          <DialogContentText>{errorMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default ErrorDialog;
