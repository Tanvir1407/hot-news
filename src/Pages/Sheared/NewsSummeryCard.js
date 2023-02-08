import React from 'react';
import { FaBookmark ,FaShareAlt,FaRegEye} from 'react-icons/fa';
import { AiFillStar} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NewsSummeryCard = ({ news }) => {
    const { title, author, image_url, rating, total_view, details , _id} = news;
    const truncateString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        }
        else {
            return str;
        }
    }
    return (
        <div className='bg-gray-200 rounded-lg mb-10'>
            <div className='flex justify-between p-4 '> {/*header section */}
                <div className='flex items-center'>
                    <img className='h-16 w-16 rounded-full' src={author.img} alt="author_name" />
                    <div className='ml-2'>
                        <h1 className='text-xl text-gray-700 font-bold'>{author.name}</h1>
                        <p className='text-gray-500'>{author.published_date }</p>
                    </div>
                </div>
                <div className='flex item-center'>
                    <FaBookmark className='m-1'></FaBookmark>
                    <FaShareAlt className='m-1'></FaShareAlt>
                </div>
            </div>
            <div className='bg-white p-4'> {/*title and picture section */}
                <h1 className='text-center text-2xl font-semibold text-gray-700 mb-2'>{title}</h1>
                <img src={image_url} alt="news__cover__photo" />
            </div>
            <div className='p-4'> {/* demoarticle section section */}
                <p className='inline text-gray-500 text-xl font-serif'>{truncateString(details, 300)}</p> <Link to={`/news/${_id}`} className='text-blue-500 underline font-semibold'>Learn More</Link>
            </div>
            <div className='p-4 flex justify-between'> {/*footer section */}
                <div className='flex items-center '>
                    <AiFillStar className='text-yellow-500 m-1' size={20}></AiFillStar>
                    <p className='font-semibold'>{rating.number }</p>
                </div>
                <div className='flex items-center'>
                    <FaRegEye size={20} className="m-1"></FaRegEye>
                    <p>{total_view }</p>
                </div>
            </div>
        </div>
    );
};

export default NewsSummeryCard;