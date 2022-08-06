import React from "react";

function Categories() {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [activeIndex, setActiveIndex] = React.useState(3);

  const handleCategoryClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCategoryClick(index)}
            className={activeIndex === index ? "active" : ""}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
