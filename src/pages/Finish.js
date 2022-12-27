import { useContext} from "react";
import AppContext from "../context/AppContext";
import Modal from "../components/Modal";
const Finish = ({ onClose }) => {
  const ctx = useContext(AppContext);
  return (
    <>
      <Modal onClose={onClose}>
        <p style={{ textAlign: "center" }}>
          {ctx.totalResults} Ball Topladingiz
        </p>
        <div className="div-select">
          <button className="btn" onClick={onClose}>
            Testga Qaytmoq
          </button>
          <button className="btn" onClick={() => ctx.onReset()}>
            Yangi test boshlamoq
          </button>
        </div>
      </Modal>
    </>
  );
};
export default Finish;
