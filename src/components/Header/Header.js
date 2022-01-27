import { useDispatch, useSelector } from "react-redux";
import LightMode from "../../assests/LightMode.png";
import DarkMode from "../../assests/DarkMode.png";
import { changeMode } from "../../store/themeReducer";
import {
  HeaderContainer,
  HeaderOptions,
  Heading,
  ModeImage,
  CustomLink
} from "./styledComponents";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.entities.theme.isDarkMode);
  const changeTheme = () => {
    dispatch(changeMode());
  };
  return (
    <HeaderContainer isDark={theme}>
      <HeaderOptions>
        <CustomLink isDark={theme} to="/">
          <Heading>CODEMONK</Heading>
        </CustomLink>
        <ModeImage
          isDark={theme}
          onClick={changeTheme}
          src={theme ? LightMode : DarkMode}
        />
      </HeaderOptions>
    </HeaderContainer>
  );
};

export default Header;
