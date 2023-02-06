import React from 'react';
import { ImFacebook2,ImWhatsapp, ImTwitter,ImTwitch } from 'react-icons/im';
import { FcGoogle} from 'react-icons/fc';

const RightSideNav = () => {
    return (
        <div>
            <div className='mb-6'>
                <button className='btn bg-gray-400 mx-3 text-white p-2 w-60 text-xl rounded hover:bg-gray-500 duration-300 flex items-center'><FcGoogle />  &nbsp; Login with Google</button> <br />
                <button className='btn bg-blue-500 mx-3 text-white p-2 w-60 text-xl rounded hover:bg-blue-600 duration-300 flex items-center'><ImFacebook2 />  &nbsp; Login with Facebook</button>
            </div>
            <div>
                <h1 className='m-3 text-2xl font-semibold border-b-2 text-gray-600'>Find us on</h1>
                <div>
                    <button className='btn my-2 mx-3 border border-2 rounded  p-2 w-60 text-xl rounded flex items-center'><ImFacebook2 />  &nbsp;  Facebook</button>
                    <button className='btn my-2 mx-3 border border-2 rounded  p-2 w-60 text-xl rounded flex items-center'><ImWhatsapp/>  &nbsp;  WhatsApp</button>
                    <button className='btn my-2 mx-3 border border-2 rounded  p-2 w-60 text-xl rounded flex items-center'><ImTwitter />  &nbsp;  Twitter</button>
                    <button className='btn my-2 mx-3 border border-2 rounded  p-2 w-60 text-xl rounded flex items-center'><ImTwitch />  &nbsp;  Twitch</button>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;