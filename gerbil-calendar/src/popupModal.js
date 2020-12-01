import React from "react";

/* from: https://webomnizz.com/create-simple-modal-pop-up-with-react/
handleClose = close popup window
show = show or hide popup
children: used for external HTML / components / etc

*/

const popupModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
        <a href="javascript:;" className="modal-close" onClick={handleClose}>
          close
        </a>
      </div>
    </div>
  );
};

export default popupModal;