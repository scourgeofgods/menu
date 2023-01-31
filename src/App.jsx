import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";

const allcategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allcategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <div className="menu py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <h2>Menu</h2>
            <hr className="w-50 border-bottom border-warning mx-auto  border-2" />
          </div>
        </div>
        <div className="row justify-content-center my-5 text-center">
          <Categories filterItems={filterItems} categories={allcategories} />
        </div>
        <div className="row row-cols-md-2 row-cols-1 row-cols-lg-3 ">
          <Menu items={menuItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
