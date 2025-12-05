import restaurantList from "../utils/data.js";
import { CardComponent } from "./CardComponent";

function CardLayout() {
  console.log(restaurantList);
  return (
    <>
      <div className="d-flex flex-wrap justify-content-around">
        {restaurantList.map((restaurant, index) => (
          <CardComponent key={index} props={restaurant} />
        ))}
      </div>
    </>
  );
}

export default CardLayout;
