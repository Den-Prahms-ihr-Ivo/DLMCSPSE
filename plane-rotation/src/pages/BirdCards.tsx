import BirdCard from "../components/birdCards/BirdCard";
import Template from "./PageTemplate";

function BirdCards() {
  return (
    <Template activeNavItem="birds">
      <BirdCard />
    </Template>
  );
}

export default BirdCards;
