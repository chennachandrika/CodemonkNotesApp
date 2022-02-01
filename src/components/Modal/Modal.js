import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { noteDataEdited } from "../../store/notesReducer";

import "./Modal.css";

const Modal = (props) => {
  const { noteTitle, noteText } = props.note.title;
  const [title, setTitle] = useState(noteTitle);
  const [text, setText] = useState(noteText);
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.entities.theme.isDarkMode);
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };
  const updateTitle = (event) => {
    setTitle(event.target.value);
  };
  const updateText = (event) => {
    setText(event.target.value);
  };
  const noteDataUpadate = () => {
    dispatch(
      noteDataEdited({ id: props.note.id, noteTitle: title, noteText: text })
    );
    props.onClose();
  };
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div
          className={`modal-content ${theme ? "darkMode" : "lightMode"} `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <input
              style={{ fontSize: "25px", fontWeight: "bold" }}
              value={title}
              onChange={updateTitle}
              className="modal-title"
            />
          </div>
          <div className="modal-body">
            <textarea
              style={{ fontSize: "16px" }}
              value={text}
              onChange={updateText}
              className="modal-title note-text"
            />
          </div>
          <div className="modal-footer">
            <button
              onClick={props.onClose}
              className={`button ${theme ? `whiteButton` : `darkButton`}`}
            >
              Close
            </button>
            <button
              onClick={noteDataUpadate}
              className={`button ${theme ? `whiteButton` : `darkButton`}`}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
