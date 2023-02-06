import React, { useEffect, useState } from 'react';

const LeftsideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
        
    }, [])
    console.log(categories);
    return (
        <div>
            <h1>This is Left Side</h1>
        </div>
    );
};

export default LeftsideNav;