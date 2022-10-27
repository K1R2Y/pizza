function Categories({ id, changeCategory }) {
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
            onClick={() => {
              changeCategory(i);
            }}
            className={id === i ? "active" : ""}
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
