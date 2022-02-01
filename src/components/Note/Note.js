import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteRemoved, noteStarModified } from "../../store/notesReducer";
import Del from "../../assests/Delete.png";
import OutlineStar from "../../assests/OutlineStar.png";
import FilledStar from "../../assests/FilledStar.png";
import Modal from "../Modal";
import {
  NotesCard,
  Icon,
  Title,
  Text,
  Options,
  Content,
  OnHoverIcon
} from "./styledComponents";

const Note = ({ note }) => {
  const [show, setShow] = useState(false);
  const [isStarred, setIsStarred] = useState(note.title.isStarred);
  const despatch = useDispatch();
  const theme = useSelector((store) => store.entities.theme.isDarkMode);
  const deleteNote = (id) => () => {
    despatch(noteRemoved({ id: id }));
  };
  const alterStar = (event) => {
    event.stopPropagation();
    const { id } = note;
    setIsStarred(!isStarred);
    despatch(noteStarModified({ id: id, isStarred: isStarred }));
  };
  return (
    <>
      <NotesCard onClick={() => setShow(true)} isDark={theme ? 1 : 0}>
        <Content>
          <OnHoverIcon
            onClick={alterStar}
            isDark={theme ? 1 : 0}
            src={note.title.isStarred ? FilledStar : OutlineStar}
          />
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
