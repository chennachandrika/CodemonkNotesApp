import { useSelector } from "react-redux";

import { MainContainer } from "./styledComponents";

const HomePage = () => {
  const theme = useSelector((store) => store.entities.theme.isDarkMode);
  return <MainContainer isDark={theme}>Hi</MainContainer>;
};

export default HomePage;
