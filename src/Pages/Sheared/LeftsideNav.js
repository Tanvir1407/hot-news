import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftsideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
        
    }, [])
    console.log(categories);
    return (
        <div className='mx-2'>
            <h1 className='text-2xl font-semibold border-b-2 pb-3'>All Category</h1>
            <div>
            {
                categories.map(category => <p className='text-blue-400 underline my-3'  key={category.id} >
                    <Link to={`category/${category.id}`}>{category.name} </Link>
                </p>)
            }
        </div>
        </div>
    );
};

export default LeftsideNav;