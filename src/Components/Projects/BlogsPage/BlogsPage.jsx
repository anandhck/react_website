import React, { useEffect, useState } from 'react';
import "./BlogsPage.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BlogsPage = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
   console.log("idddddd", id)
    
  useEffect(() => {

    if (id) {
      fetchBlogData();
    }    
    
  }, [id])
  
    const fetchBlogData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/posts/${id}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <>
        <section className="tbg height d-flex justify-content-center align-items-center">
          {posts.map((post) => (
            <div key={post.id}>
              <div className="container mar-t">
                {/* blog content */}
                <div className="container w-100">
                  <div className='text-white'  dangerouslySetInnerHTML={{ __html: post.content }} />
                </div> 
              </div>
            </div>
          ))}
        </section>
      </>
    );
}

export default BlogsPage;
