import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Header";
import Plus from "../../assests/Plus.png";
import {
  AppContainer,
  NotesContainer,
  InputText,
  ViewNotes,
  AddNoteCard,
  AddIcon,
  AddNoteForm,
  SubmitButton,
  FormButtons
} from "./styledComponents";

const NotesAppPage = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [isFormVisible, setFormVisible] = useState(false);
  const theme = useSelector((store) => store.entities.theme.isDarkMode);
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
  };
  const renderAddNoteForm = () => (
    <AddNoteForm isDark={theme} onSubmit={addNoteToList}>
      <InputText
        isVisible={true}
        isDark={theme}
        onClick={viewForm}
        onChange={onChangeNoteTitle}
        type="text"
        value={noteTitle}
        placeholder={isFormVisible ? "Add Note Title" : "Add Your Note"}
      />
      <InputText
        isDark={theme}
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
          isDark={theme}
          type="button"
        >
          Add Note
        </SubmitButton>
        <SubmitButton
          isVisible={isFormVisible}
          isDark={theme}
          type="button"
          onClick={closeForm}
        >
          Close
        </SubmitButton>
      </FormButtons>
    </AddNoteForm>
  );
  return (
    <AppContainer isDark={theme}>
      <Header />
      <NotesContainer>
        {renderAddNoteForm()}
        <ViewNotes>
          <AddNoteCard isDark={theme}>
            <AddIcon isDark={theme} src={Plus} />
          </AddNoteCard>
        </ViewNotes>
      </NotesContainer>
    </AppContainer>
  );
};

export default NotesAppPage;
