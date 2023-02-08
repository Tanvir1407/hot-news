import React from "react";
import { ImFacebook2, ImWhatsapp, ImTwitter, ImTwitch } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { SiDiscord } from "react-icons/si";
import Carousel from "./Carousel";
import brand1 from "../../assets/Brand1.png";
import brand2 from "../../assets/Brand2.png";

const RightSideNav = () => {
  const slides = [brand1, brand2];
  return (
    <div>
      <div className="mb-6">
        <button className="btn bg-gray-400 mx-3 text-white p-2 w-56 rounded hover:bg-gray-500 duration-300 flex items-center">
          <FcGoogle /> &nbsp; Login with Google
        </button>{" "}
        <br />
        <button className="btn bg-blue-500 mx-3 text-white p-2 w-56 rounded hover:bg-blue-600 duration-300 flex items-center">
          <ImFacebook2 /> &nbsp; Login with Facebook
        </button>
      </div>
      <div>
        <h1 className="m-3 text-2xl  border-b-2 text-gray-600">Find us on</h1>
        <div>
          <button className="bg-white my-2 mx-3 border border-2 rounded  p-2 w-60 text-xl rounded flex items-center">
            <ImFacebook2 /> &nbsp; Facebook
          </button>
          <button className="bg-white my-2 mx-3 border border-2 rounded  p-2 w-60 text-xl rounded flex items-center">
            <ImWhatsapp /> &nbsp; WhatsApp
          </button>
          <button className="bg-white my-2 mx-3 border border-2 rounded  p-2 w-60 text-xl rounded flex items-center">
            <ImTwitter /> &nbsp; Twitter
          </button>
          <button className="bg-white my-2 mx-3 border border-2 rounded  p-2 w-60 text-xl rounded flex items-center">
            <ImTwitch /> &nbsp; Twitch
          </button>
          <button className="bg-white my-2 mx-3 border border-2 rounded  p-2 w-60 text-xl rounded flex items-center">
            <SiDiscord /> &nbsp; Discord
          </button>
          <button className="bg-white my-2 mx-3 border border-2 rounded  p-2 w-60 text-xl rounded flex items-center">
            Privacy Policy{" "}
          </button>
          <button className="bg-white my-2 mx-3 border border-2 rounded  p-2 w-60 text-xl rounded flex items-center">
            Teams & Conditions
          </button>
        </div>
      </div>
      <div className="my-6 ml-3">
        <Carousel>{[...slides.map((s) => <img src={s}></img>)]}</Carousel>
      </div>
    </div>
  );
};

export default RightSideNav;
