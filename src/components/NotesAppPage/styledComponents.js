import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: ${(props) => (props.isDark ? "black" : "white")};
  color: ${(props) => (props.isDark ? "white" : "black")};
  min-height: 100vh;
  height: 100%;
`;

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  max-width: 1400px;
`;

export const AddNoteForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => (props.isDark ? "white" : "black")};
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
`;

export const FormButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  align-self: flex-end;
`;

export const SubmitButton = styled.button`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  background-color: ${(props) => (props.isDark ? "white" : "black")};
  color: ${(props) => (props.isDark ? "black" : "white")};
  outline: none;
  border-radius: 10px;
  border: none;
  margin: 10px;
  padding: 10px;
  font-weight: bold;
  align-self: flex-end;
`;

export const InputText = styled.input`
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border: none;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  background-color: ${(props) => (props.isDark ? "black" : "white")};
  color: ${(props) => (props.isDark ? "white" : "black")};
  @media screen and (min-width: 768px) {
    width: 500px;
    font-size: 15px;
  }
`;

export const ViewNotes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
  max-width: 1000px;
`;

export const AddNoteCard = styled.div`
  background-color: ${(props) => (props.isDark ? "black" : "white")};
  color: ${(props) => (props.isDark ? "white" : "black")};
  border: 1px solid ${(props) => (props.isDark ? "white" : "black")};
  width: 200px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddIcon = styled.img`
  filter: invert(${(props) => (props.isDark ? 1 : 0)});
`;
