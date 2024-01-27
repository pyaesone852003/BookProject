import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { GetBookData } from "../service/Book.service";
import { BookListComponents } from "../components";

const HomePage = () => {
  const { loading, error, data } = useFetch(GetBookData, "book");
  //   console.log(data);
  return (
    <div className="">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-wrap bg-zinc-100">
          {data.map((i) => (
            <Link key={i.id} to={`/detail/${i.id}`}>
              <BookListComponents data={i} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
