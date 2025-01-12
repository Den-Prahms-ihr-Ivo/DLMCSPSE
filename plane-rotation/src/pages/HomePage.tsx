import Home from "../components/home/Home";
import Template from "./PageTemplate";

function HomePage() {
  return (
    <Template activeNavItem="home">
      <Home />
    </Template>
  );
}

export default HomePage;
