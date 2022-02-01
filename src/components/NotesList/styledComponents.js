import styled from "styled-components";
export const Text = styled.p`
  color: ${(props) => (props.isDark ? "white" : "black")};
  max-height: 70px;
  overflow: hidden;
`;
