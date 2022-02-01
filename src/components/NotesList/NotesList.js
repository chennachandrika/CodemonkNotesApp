import { useSelector } from "react-redux";
import Note from "../Note";

import { Text } from "./styledComponents";

const NotesList = ({ starred }) => {
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
        {notesList.map((note) => {
          if (starred === note.title.isStarred) {
            return <Note key={note.id} note={note} />;
          }
          return null;
        })}
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
