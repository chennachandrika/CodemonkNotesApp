import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import NotesList from "../NotesList";
import { addNote } from "../../store/notesReducer";

import {
  AppContainer,
  NotesContainer,
  InputText,
  ViewNotes,
  AddNoteForm,
  SubmitButton,
  FormButtons,
  Text
} from "./styledComponents";

const NotesAppPage = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [isFormVisible, setFormVisible] = useState(false);
  const dispatch = useDispatch();
  const notesList = useSelector((store) => store.entities.notes.list);
  const theme = useSelector((store) => store.entities.theme.isDarkMode);
  const isRequesting = useSelector((store) => store.entities.notes.loading);
  const haveStarredNotes = notesList.filter(
    (note) => note.title.isStarred === true
  );
  const haveNonStarredNotes = notesList.filter(
    (note) => note.title.isStarred === false
  );
  const viewForm = () => {
    setFormVisible(true);
  };
  const closeForm = () => {
    setFormVisible(false);
    setNoteTitle("");
    setNoteText("");
  };
  const onChangeNoteTitle = (event) => {
    setNoteTitle(event.target.value);
  };
  const onChangeNoteText = (event) => {
    setNoteText(event.target.value);
  };
  const addNoteToList = (event) => {
    event.preventDefault();
    setFormVisible(false);
    const noteInfo = {
      noteTitle,
      noteText,
      isStarred: false
    };
    if (noteTitle && noteText) {
      dispatch(addNote({ title: JSON.stringify(noteInfo) }));
    }
    setNoteTitle("");
    setNoteText("");
  };
  const renderAddNoteForm = () => (
    <AddNoteForm isDark={theme} onSubmit={addNoteToList}>
      <InputText
        isVisible={true}
        isDark={theme ? 1 : 0}
        onClick={viewForm}
        onChange={onChangeNoteTitle}
        type="text"
        value={noteTitle}
        placeholder={isFormVisible ? "Add Note Title" : "Add Your Note"}
      />
      <InputText
        isDark={theme ? 1 : 0}
        isVisible={isFormVisible}
        onChange={onChangeNoteText}
        type="text"
        value={noteText}
        placeholder="Add Note Text"
      />
      <FormButtons>
        <SubmitButton
          onClick={addNoteToList}
          isVisible={isFormVisible}
          isDark={theme ? 1 : 0}
          type="button"
        >
          Add Note
        </SubmitButton>
        <SubmitButton
          isVisible={isFormVisible}
          isDark={theme ? 1 : 0}
          type="button"
          onClick={closeForm}
        >
          Close
        </SubmitButton>
      </FormButtons>
      <Text>{isRequesting && "Adding Your Note..."}</Text>
    </AddNoteForm>
  );
  return (
    <AppContainer isDark={theme ? 1 : 0}>
      <Header />
      <NotesContainer>
        {renderAddNoteForm()}
        {haveStarredNotes.length !== 0 && (
          <>
            <Text style={{ marginTop: "30px" }}>Starred Notes:</Text>
            <ViewNotes>
              <NotesList starred={true} />
            </ViewNotes>
          </>
        )}
        <Text style={{ marginTop: "30px" }}>
          {haveNonStarredNotes.length !== 0 &&
            haveStarredNotes.length !== 0 &&
            "Other Notes:"}
        </Text>
        <ViewNotes>
          <NotesList starred={false} />
        </ViewNotes>
      </NotesContainer>
    </AppContainer>
  );
};

export default NotesAppPage;
