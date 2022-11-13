/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext, useRef } from "react";
import Categories from "../components/Categories";
import Sort, { sortBy } from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/index";
import Skeleton from "../components/PizzaBlock/skeleton";
import Pagination from "../components/Pagination";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { searchContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  const sortType = sort.sortName;
  const { searchValue } = useContext(searchContext);
  // const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const getPizzas = () => {
    setIsLoading(true);

    axios
      .get(
        `https://634c6231317dc96a30975abf.mockapi.io/pizzas?page=${currentPage}&limit=4&${
          categoryId > 0 ? `category=${categoryId}&` : ""
        }sortBy=${sortType}&order=desc&search=${searchValue}`
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  useEffect(() => {
    if (isMounted.current) {
      const query = qs.stringify({
        sortProperty: sort.sortName,
        categoryId,
        currentPage,
      });

      navigate(`?${query}`);
    }

    isMounted.current = true;
  }, [categoryId, sortType, currentPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortBy.find((obj) => obj.sortName === params.sortProperty);
      dispatch(setFilters({ ...params, sort }));

      isSearch.current = true;
    }
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          id={categoryId}
          changeCategory={(i) => onClickCategory(i)}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
      </div>
      <Pagination
        currentPage={currentPage}
        onChangePage={(number) => dispatch(setCurrentPage(number))}
      />
    </div>
  );
}

export default Home;
