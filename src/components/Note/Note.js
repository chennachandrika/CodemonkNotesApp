import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteRemoved } from "../../store/notesReducer";
import Del from "../../assests/Delete.png";
import Modal from "../Modal";
import {
  NotesCard,
  Icon,
  Title,
  Text,
  Options,
  Content
} from "./styledComponents";

const Note = ({ note }) => {
  const [show, setShow] = useState(false);
  const despatch = useDispatch();
  const theme = useSelector((store) => store.entities.theme.isDarkMode);
  const deleteNote = (id) => () => {
    despatch(noteRemoved({ id: id }));
  };
  return (
    <>
      <NotesCard onClick={() => setShow(true)} isDark={theme ? 1 : 0}>
        <Content>
          <Title isDark={theme ? 1 : 0}>{note.title.noteTitle}</Title>
          <Text isDark={theme ? 1 : 0}>{note.title.noteText}</Text>
        </Content>
        <Options>
          <Icon
            onClick={deleteNote(note.id)}
            isDark={theme ? 1 : 0}
            src={Del}
          />
        </Options>
      </NotesCard>
      <Modal note={note} onClose={() => setShow(false)} show={show} />
    </>
  );
};

export default Note;
