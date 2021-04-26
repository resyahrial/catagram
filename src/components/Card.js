import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { like, dislike } from "../store/actions/favourite";

export default function Card({ cat }) {
  const favourites = useSelector((state) => state.favourites.data);
  const dispatch = useDispatch();

  const { id, url, breeds } = cat;
  const isLiked = favourites.findIndex((cat) => cat.id === id) >= 0;

  const handleClick = () => {
    if (isLiked) {
      dispatch(dislike(cat));
    } else {
      dispatch(like(cat));
    }
  };

  return (
    <div className="relative">
      <Link
        className="absolute top-0 left-0 right-0 bottom-0 bg-gray-400 opacity-10 cursor-pointer"
        to={`/${id}`}
      />
      <img
        className="object-cover object-center rounded-md h-48 w-full"
        src={url}
        alt={id}
      />
      <div className="flex justify-between p-2">
        <p className="text-xl md:text-lg">
          {breeds.length === 0 ? "Random Cat" : breeds[0].name}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-8 md:h-6 w-8 md:w-6 z-10 cursor-pointer text-${
            isLiked ? "red" : "gray"
          }-500`}
          onClick={() => handleClick()}
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
