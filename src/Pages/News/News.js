import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaBookmark, FaShareAlt, FaRegEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const News = () => {
  const singleNews = useLoaderData();
  const { title, author, image_url, rating, details } = singleNews;

  return (
    <div className="bg-gray-200 rounded-lg mb-10">
      <div>
        {/*title and picture section */}
        <img src={image_url} alt="news__cover__photo" />
        <h1 className="text-center text-2xl font-semibold text-gray-700 my-2">
          {title}
        </h1>
      </div>
      <div className="md:flex justify-between p-3 md:px-20">
        <div className="flex">
          <p className="font-bold px-1">Author:</p> <span>{author.name }</span>
        </div>
        <div className="flex">
          <p className="font-bold px-1">Publish Date:</p> <span> {author.published_date }</span>
        </div>
        <div className=" items-center hidden md:flex">
          <AiFillStar className="text-yellow-500"> </AiFillStar> <p className="px-1"> { rating.number }</p>
        </div>
      </div>
      <div className="p-4">
        {/* demoarticle section section */}
        <p className=" text-gray-500 text-xl font-serif">{details}</p>
      </div>
    </div>
  );
};

export default News;
