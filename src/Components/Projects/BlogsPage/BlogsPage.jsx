import React, { useContext, useEffect, useState } from 'react';
import "./BlogsPage.css";
import { useParams } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
  import { notify } from '../../../utils/toastUtils';

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
        console.log("setpost", res.data);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
  };
  
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/posts/${id}`, {
        withCredentials: true,
      });
      notify("Blog is Deleted!", "success");
      setTimeout(() => {
        navigate(`/${posts[0].category}`);
      }, 1800); //
    } catch (err) {
    notify("Error deleting blog: " + err.message, "error");
  }
  }
    return (
      <>
        <section className="tbg height d-flex justify-content-center align-items-center">
          {posts.map((post) => (
            <div key={post.id}>
              {currentUser && currentUser.username === post.username && (
                <div className="text">
                  <div className="crud d-flex justify-content-between align-items-center p-2">
                    <div>
                      <span className="title me-5">
                        Blog Title :{post.title}
                      </span>
                      <p className='mt-3'>
                        project/{post.category}/{post.title}
                      </p>
                    </div>

                    <div className="blogtag">
                      <span className="username me-5">
                        Blog is Created by {post.username}
                      </span>

                      <Link to={`/blogsform/${post.id}`}>
                        <span className="me-5">Edit</span>
                      </Link>
                      <span onClick={handleDelete}>Delete</span>
                    </div>
                  </div>
                </div>
              )}

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
