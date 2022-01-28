import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  background-color: ${(props) => (props.isdark ? "black" : "white")};
  color: ${(props) => (props.isdark ? "white" : "black")};
  border-bottom: 1px solid ${(props) => (props.isDark ? "white" : "black")};
  width: 100%;
  height: 70px !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeaderOptions = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Heading = styled.h3``;
export const ModeImage = styled.img`
  width: 25px;
  filter: invert(${(props) => (props.isdark ? 1 : 0)});
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.isdark ? "white" : "black")};
`;
