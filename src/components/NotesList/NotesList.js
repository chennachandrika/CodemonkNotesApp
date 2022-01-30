import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  NotesCard,
  Icon,
  Title,
  Text,
  Options,
  Content
} from "./styledComponents";
import Del from "../../assests/Delete.png";

const NotesList = () => {
  const despatch = useDispatch();
  const notesList = useSelector((store) => store.entities.notes.list);
  const theme = useSelector((store) => store.entities.theme.isDarkMode);
  const noNotesList = () => (
    <Text isDark={theme ? 1 : 0}>Notes you add appear here</Text>
  );
  const showNotesList = () => {
    return (
      <>
        {notesList.map((note) => (
          <NotesCard isDark={theme ? 1 : 0} key={note.id}>
            <Content>
              <Title isDark={theme ? 1 : 0}>{note.title.noteTitle}</Title>
              <Text isDark={theme ? 1 : 0}>{note.title.noteText}</Text>
            </Content>
            <Options>
              <Icon isDark={theme ? 1 : 0} src={Del} />
            </Options>
          </NotesCard>
        ))}
      </>
    );
  };
  const renderNotesList = () => {
    if (notesList.length > 0) {
      return showNotesList();
    } else {
      return noNotesList();
    }
  };
  return <>{renderNotesList()}</>;
};

export default NotesList;
