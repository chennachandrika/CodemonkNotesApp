import { useSelector } from "react-redux";
import Header from "../Header";
import { CustomLink } from "../Header/styledComponents";
import {
  MainContainer,
  ContentContainer,
  HeadingOfPage,
  AppsContainer,
  AppCard,
  AppName
} from "./styledComponents";

const HomePage = () => {
  const theme = useSelector((store) => store.entities.theme.isDarkMode);
  return (
    <MainContainer isDark={theme}>
      <Header />
      <ContentContainer>
        <HeadingOfPage>Hey!!! You Can Explore Apps Here!!!</HeadingOfPage>
        <AppsContainer>
          <CustomLink isDark={theme} to="/notes-app">
            <AppCard isDark={theme}>
              <AppName>Notes App</AppName>
            </AppCard>
          </CustomLink>
        </AppsContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default HomePage;
