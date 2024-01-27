import React from "react";

const BookListComponents = ({ data }) => {
  return (
    <div
      className=" border-2 flex justify-evenly border-slate-50 bg-white m-5 hover:shadow-md shadow-sm scale-95 hover:scale-100 duration-300 shadow-slate-500 w-[370px] p-3 h-[398px] rounded-lg
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
  );
};

export default BookListComponents;
