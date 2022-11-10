import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
const Backdrop = (props) => {
  return <div onClick={props.onClose} className={styles.backdrop}></div>;
};

const Overlay = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const portalElement = document.getElementById("overlay");

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
