import React, { useContext, useEffect, useState } from 'react';
import "./BlogsPage.css";
import { useParams } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import { Link} from "react-router-dom";

import { AuthContext } from '../../../context/authContext';

const BlogsPage = () => {
  
  const { currentUser} = useContext(AuthContext);
const navigate = useNavigate();
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
    
  useEffect(() => {
    if (id) {
      fetchBlogData();
    }
  }, [id]);
  
    const fetchBlogData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/posts/${id}`);
        console.log("setpost", res);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
  };
  
  const handleDelete = async () => {
    try {
    console.log("delete")
    await axios.delete(`http://localhost:8000/api/posts/${id}`, {
      withCredentials: true,
    });
     navigate("/diyprojects");
  } catch (err) {
    console.log(err);
  }
  }
    return (
      <>
        <section className="tbg height d-flex justify-content-center align-items-center">
          {posts.map((post) => (
            <div key={post.id}>
              {currentUser && currentUser.username === post.username && (
                <div className="d-flex justify-content-between">
                  <Link to={`/blogsform/${post.id}`}>
                    <span>Edit</span>
                  </Link>
                  <span onClick={handleDelete}>Delete</span>
                </div>
              )}

              <div className="username">{post.username}</div>
              <div className="container mar-t">
                {/* blog content */}
                <div className="container w-100">
                  <div
                    className="text-white"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      </>
    );
}

export default BlogsPage;
