import styled from "styled-components";
export const NotesCard = styled.div`
  background-color: ${(props) => (props.isDark ? "black" : "white")};
  color: ${(props) => (props.isDark ? "white" : "black")};
  border: 1px solid ${(props) => (props.isDark ? "white" : "black")};
  width: 250px;
  max-width: 250px;
  height: 150px;
  border-radius: 10px;
  padding: 20px 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Icon = styled.img`
  filter: invert(${(props) => (props.isDark ? 1 : 0)});
  cursor: pointer;
`;
export const Title = styled.h2`
  color: ${(props) => (props.isDark ? "white" : "black")};
  margin-bottom: 10px;
  max-height: 28px;
  overflow: hidden;
`;
export const Text = styled.p`
  color: ${(props) => (props.isDark ? "white" : "black")};
  max-height: 70px;
  overflow: hidden;
`;
export const Options = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
