import React from "react";
import useFetch from "../../hook/useFetch";
import { GetBookData } from "../../service/Book.service";
import { useNavigate, useParams } from "react-router-dom";

const DetailBookPage = () => {
  const { id } = useParams();
  const { loading, data, error } = useFetch(GetBookData, `book/${id}`);
  const nav = useNavigate();

  const handleBack = () => {
    nav(-1);
  };
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : (
            <div
              className=" border-2  flex mx-auto border-slate-50 bg-white m-5 shadow shadow-slate-500 w-[370px] p-3 h-[398px] rounded-lg
          "
            >
              <div className="">
                <div className="">
                  <img
                    className=" w-[350px] h-[180px] mb-5 rounded-lg"
                    src={data.book_image_url}
                    alt="myImg"
                  />
                </div>
                <div className="">
                  <h1 className="text-2xl font-bold">{data.book}</h1>
                  <h2 className="text-md text-gray-600">{data.author}</h2>
                </div>
                <div className="p-1">
                  <p className="text-lg font-medium">{data.description}</p>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      <button
        onClick={handleBack}
        className="bg-blue-700 hover:ring-2  ring-blue-500 shadow  hover:text-slate-100 font-bold text-slate-300  text-xl duration-300 hover:bg-blue-600 px-3 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default DetailBookPage;
