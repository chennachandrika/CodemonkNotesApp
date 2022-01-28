import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${(props) => (props.isdark ? "black" : "white")};
  color: ${(props) => (props.isdark ? "white" : "black")};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const HeadingOfPage = styled.h3``;
export const AppsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 700px;
  padding: 20px 10px;
`;

export const AppCard = styled.div`
  width: 200px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => (props.isdark ? "white" : "black")};
`;

export const AppName = styled.h4``;
