import { FC } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

import { teal, grey } from "@mui/material/colors";

export const AurDialog: FC<any> = ({ open, onClose, title, content }) => {

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Grid container direction="row">
          <Grid item xs={10}>
            <Typography variant="h5">{title}</Typography>
          </Grid>
          <Grid item xs={2} textAlign="right">
            <IconButton aria-label="close" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h3">Image</Typography>
          </Grid>
          <Grid item xs={8} >
            {content}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
      </DialogActions>
    </Dialog>
  );
};

export default AurDialog;
