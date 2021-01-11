import { useState } from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const BoardForm = (props) => {
  const [title, setTitle] = useState();

  const localStorageUser = JSON.parse(localStorage.getItem("user"));

  let userId = null;
  if (localStorageUser === null) {
    userId = 1;
  } else {
    userId = localStorageUser._id;
  }

  const body = {
    author: userId, //hardcoded //localStorage.getItem("userInfo"), //puedo obtener el usuario. Le pasa todo el JSON y por eso no sirve la validacion(no lo crea.)
    title: title,
  };

  console.log(body);

  const handleSubmit = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:5001/api/boards", options).then((response) =>
      response.json()
    );
  }; // Ya hace el POST de lo qe tu le mandes.
  return (
    <form>
      <label>
        <input
          type="text"
          name="name"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit} type="submit">
        Create board!
      </button>
    </form>
  );
};

const BoardFormModal = ({ open, handleOnClose, children, id }) => {
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
        <BoardForm id={id} />
      </div>
    </Modal>
  );
};

export default BoardFormModal;
