import { useState } from "react";

function Categories() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categories = [
    `Всі`,
    `М'ясні`,
    `Вегетаріанські`,
    `Гриль`,
    `Гострі`,
    `Закриті`,
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            onClick={() => setActiveCategoryIndex(i)}
            className={activeCategoryIndex === i ? "active" : ""}
            key={`category-${i}`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
