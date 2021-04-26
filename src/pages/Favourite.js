import React from "react";
import { useSelector } from "react-redux";

import { Card } from "../components";

export default function Favourite() {
  const favourites = useSelector((state) => state.favourites.data);

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center break-words px-4 my-6">
        {favourites.length === 0
          ? "We're not sure you not like this guys yet"
          : "Here your favourite"}
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 content-center">
        {favourites.length !== 0 &&
          favourites.map((cat, idx) => <Card cat={cat} key={idx} />)}
      </div>
    </div>
  );
}
