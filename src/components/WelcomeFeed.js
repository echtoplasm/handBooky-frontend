import React, { useState, useEffect } from "react";


const WelcomeFeed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchPostsByCategory('all');
  }, []);


  const fetchPostsByCategory = async (category) => {
    setLoading(true)
    setError('')


    try {

      const response = await fetch(`http://localhost:5000/posts/${category}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }

      });

      if (response.ok) {
        const posts = await response.json();
        setFilteredPosts(posts);
        setActiveCategory(category)
      }


    } catch (err) {
      console.error(err)
      setError('Server Error Please Try again.')
    }

  };

};

export default WelcomeFeed;
