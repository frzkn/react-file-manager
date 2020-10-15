import React from "react";
import "./footer.scss";
import Plus from "../../assets/svg/plus";
import { useHistory } from "react-router-dom";
import AddFileModal from "../AddFileFolderModal";
const Footer = (props) => {
  const { showAddFileModal, setShowAddFileModal } = props;
  const history = useHistory();
  return (
    <>
      <footer
        className="footer"
        onClick={() => {
          setShowAddFileModal((s) => !s);
        }}
      >
        <div
          className={`footer__add-button ${
            showAddFileModal && "footer__add-button--close"
          }`}
        >
          <Plus />
        </div>
      </footer>
      {console.log(showAddFileModal)}
      {showAddFileModal && (
        <AddFileModal
          pathname={history.location.pathname}
          setShowAddFileModal={setShowAddFileModal}
        />
      )}
    </>
  );
};

export default Footer;
