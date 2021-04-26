import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router";

import { Card, Detail } from "../components";
import { fetchCats } from "../store/actions/cats";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data: cats, isLoading, error } = useSelector((state) => state.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats(page));
    window.onscroll = function () {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !isLoading
      ) {
        setPage(page + 1);
      }
    };
  }, [page]);

  if (error) {
    return (
      <div>
        <div className="grid p-4 content-center">
          <h3>Uppss.. Something wrong</h3>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center break-words px-4 my-6">
        Stop code, this guys will make you relax again
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 content-center">
        {cats.length !== 0 &&
          cats.map((cat) => <Card cat={cat} key={cat.id} />)}
      </div>
      {isLoading && (
        <svg
          className="animate-spin mx-auto my-8 h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      <Switch>
        <Route path="/:id">
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}
