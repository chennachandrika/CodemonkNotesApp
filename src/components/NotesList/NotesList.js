import { useSelector } from "react-redux";
import Note from "../Note";

import { Text } from "./styledComponents";

const NotesList = () => {
  const notesList = useSelector((store) => store.entities.notes.list);
  const theme = useSelector((store) => store.entities.theme.isDarkMode);

  const noNotesList = () => (
    <Text isDark={theme ? 1 : 0}>Notes you add appear here</Text>
  );
  const showNotesList = () => {
    const starredOnes = notesList.filter(
      (note) => note.title.isStarred === true
    );
    console.log(starredOnes);
    return (
      <>
        {notesList.map((note) => (
          <Note key={note.id} note={note} />
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
