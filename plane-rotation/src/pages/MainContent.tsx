import MainPage from "../components/MainPage";
import Template from "./PageTemplate";

function MainContent() {
  return (
    <Template activeNavItem="plane">
      <MainPage />
    </Template>
  );
}

export default MainContent;
