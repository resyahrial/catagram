import React from "react";
import { useParams, useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";
import { useSelector } from "react-redux";

const Container = styled.div`
  animation: 0.3s ${keyframes`${fadeInUp}`};
`;

export default function Detail() {
  const { id } = useParams();
  const history = useHistory();

  const cats = useSelector((state) => state.cats.data);
  const cat = cats.filter((cat) => cat.id === id)[0];
  const breedId = cat.breeds.length !== 0 ? cat.breeds[0].id : "rand";
  const breed = useSelector((state) => state.breeds.data).filter(
    (breed) => breed.id === breedId
  );

  return (
    <Container className="fixed bottom-0 w-full h-full z-40 bg-white">
      <div
        className="container max-h-screen md:w-3/4 mx-auto overflow-y-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-2xl font-medium">
            {breed.length === 0 ? "Random Cat" : breed[0].name}
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700 hover:text-gray-900"
            onClick={() => history.push("/")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <img
          className="object-cover object-center h-64 md:h-80 w-full my-6"
          src={cat.url}
          alt={id}
        />
        <p className="text-lg text-justify text-gray-800 tracking-wide p-4">
          {breed.length !== 0
            ? breed[0].description
            : "Just random cat who try to exist. Normally, you can't just call him 'kitty kitty' or 'pssh pssh'. You must call him 'Stardenburdenhardenbart'"}
        </p>
        <h3 className="p-4 text-xl font-medium">You may also like :</h3>
        <div className="w-full overflow-x-auto flex flex-nowrap px-4 lg:grid lg:grid-cols-4 lg:gap-4">
          {cats
            .sort(() => Math.floor(0.5 - Math.random()))
            .slice(0, 4)
            .map((cat, idx) => {
              return (
                <img
                  className="object-cover object-center h-40 w-40 lg:h-48 lg:w-48 mr-4 mb-16 cursor-pointer"
                  src={cat.url}
                  alt={idx}
                  key={idx}
                  onClick={() => history.push(`/${cat.id}`)}
                />
              );
            })}
        </div>
      </div>
    </Container>
  );
}
