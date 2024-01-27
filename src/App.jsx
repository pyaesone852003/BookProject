import React from "react";
import { Route, Routes } from "react-router-dom";
import { DetailBookPage, HomePage } from "./page";
import { NavComponents } from "./components";
import NotFound from "./NotFound";

const App = () => {
  return (
    <div className="main">
      <NavComponents />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailBookPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

// const { loading, data, error } = useFetch(GetAuthorData, "author");

{
  /* {loading ? (
        <h1>loading...</h1>
      ) : (
        <>{data ? <> {JSON.stringify(data)} </> : <h1>{error}</h1>}</>
      )} */
}

export default App;
