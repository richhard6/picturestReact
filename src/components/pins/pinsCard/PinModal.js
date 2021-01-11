import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PinInfo from "./PinInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    transform: "translateZ(0)",
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    "@media all and (-ms-high-contrast: none)": {
      display: "none",
    },
  },
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 5,
    "&:focus": {
      outline: "none",
    },
  },
}));

const PinModal = ({ open, handleOnClose }) => {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={handleOnClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modal}
      data-testid="modal"
    >
      <div className={classes.paper}>
        <div>hola</div>
      </div>
    </Modal>
  );
};

export default PinModal;
