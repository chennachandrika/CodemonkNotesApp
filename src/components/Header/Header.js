import { useDispatch, useSelector } from "react-redux";
import LightMode from "../../assests/LightMode.png";
import DarkMode from "../../assests/DarkMode.png";
import { modeChanged } from "../../store/themeReducer";
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
    dispatch(modeChanged());
  };
  return (
    <HeaderContainer isdark={theme ? 1 : 0}>
      <HeaderOptions>
        <CustomLink isdark={theme ? 1 : 0} to="/">
          <Heading>CODEMONK</Heading>
        </CustomLink>
        <ModeImage
          isdark={theme ? 1 : 0}
          onClick={changeTheme}
          src={theme ? LightMode : DarkMode}
        />
      </HeaderOptions>
    </HeaderContainer>
  );
};

export default Header;
