import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/index";
import Skeleton from "../components/PizzaBlock/skeleton";
import Pagination from "../components/Pagination";
import { useContext } from "react";
import { searchContext } from "../App";

function Home() {
  const { searchValue } = useContext(searchContext);

  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: "популярності",
    sortName: "rating",
  });
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://634c6231317dc96a30975abf.mockapi.io/pizzas?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}&` : ""
      }sortBy=${sortType.sortName}&order=desc&search=${searchValue}`
    )
      .then((response) => response.json())
      .then((res) => setItems(res))
      .then(() => setIsLoading(false));

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories id={categoryId} changeCategory={(i) => setCategoryId(i)} />
        <Sort
          value={sortType}
          onClickSort={(sortObj) => setSortType(sortObj)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}

export default Home;
