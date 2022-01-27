import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${(props) => (props.isDark ? "black" : "white")};
  color: ${(props) => (props.isDark ? "white" : "black")};
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
