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
    <MainContainer isdark={theme}>
      <Header />
      <ContentContainer>
        <HeadingOfPage>Hey!!! You Can Explore Apps Here!!!</HeadingOfPage>
        <AppsContainer>
          <CustomLink isdark={theme} to="/notes-app">
            <AppCard isdark={theme}>
              <AppName>Notes App</AppName>
            </AppCard>
          </CustomLink>
        </AppsContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default HomePage;
