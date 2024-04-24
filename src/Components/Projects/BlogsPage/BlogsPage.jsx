import React, { useEffect, useState } from 'react';
import "./BlogsPage.css";
import axios from "axios";
const BlogsPage = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        const fetchData = async ()=>{
    try {
      const res = await axios.get("http://localhost:8000/api/posts");
      console.log("res.data", res.data);
        setPosts(res.data)
    } catch(err) {
    console.log(err)
    }
}
fetchData();
    },[])
            //   const posts = [
            //     {
            //       id: 1,
            //       title:
            //         "Smart Home Automation System using Arduino and Raspberry Pi",
            //       desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
            //       img: "https://wallpapercave.com/wp/wp6397629.jpg",
            //     },
            //   ];
    return (
      <>
        <section className="tbg height d-flex justify-content-center align-items-center">
          <div className="container">
            {posts.map((post) => (
              <div className="row" key={post.id}>
                <div className="col-md-8">
                  <div className="post">
                    <div className="img-container">
                      <img src={`../../../../public/upload/${post.img}`} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="posttitle">
                    <h3 className="text-white">{post.title}</h3>
                    <p>{post.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
}

export default BlogsPage;