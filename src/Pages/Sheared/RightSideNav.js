import React, { useContext } from "react";
import { ImFacebook2, ImWhatsapp, ImTwitter, ImTwitch } from "react-icons/im";
import { AiOutlineGoogle } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { FaFacebookF} from "react-icons/fa";
import Carousel from "./Carousel";
import brand1 from "../../assets/Brand1.png";
import brand2 from "../../assets/Brand2.png";
import { AuthContext } from "../../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

  const provider = new GoogleAuthProvider();

const RightSideNav = () => {
  const { LoginFunction } = useContext(AuthContext);

  const handleGoogleLogin = () => { // login function 
    LoginFunction(provider)
      .then(result => {
      console.log(result)
      })
      .catch(err => {
      console.log(err)
    })
  }
  const slides = [brand1, brand2];
  return (
    <div>
      <div className="mb-6">
        <button onClick={handleGoogleLogin} className="btn bg-gray-400 mx-3 text-white p-2 w-56 rounded hover:bg-gray-500 duration-300 flex items-center">
          <AiOutlineGoogle size={30}/> &nbsp; Login with Google
        </button>{" "}
        <br />
        <button className="btn bg-blue-500 mx-3 text-white p-2 w-56 rounded hover:bg-blue-600 duration-300 flex items-center">
          <FaFacebookF size={ 27} /> &nbsp; Login with Facebook
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
