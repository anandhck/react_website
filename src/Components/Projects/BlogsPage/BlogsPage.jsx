import React, { useEffect, useState } from 'react';
import "./BlogsPage.css";
import axios from "axios";
import titleimg from "../../../upload/Human-Intelligence.jpeg";

const ImageDisplay = ({ imageName }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const importedImage = await import(
          `../../../../src/upload/${imageName}`
        );
        setImageUrl(importedImage.default);
      } catch (error) {
        console.error("Error importing image:", error);
      }
    };

    fetchImage();
  }, [imageName]);

  return imageUrl ? (
    <img src={imageUrl} alt="img" className="img-fluid" />
  ) : (
    "Loading..."
  );
};

const BlogsPage = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        const fetchData = async ()=>{
    try {
      const res = await axios.get("http://localhost:8000/api/posts");
      console.log("res.data", res.data);
      console.log("post", res.data[0].titleimg);
        setPosts(res.data);
    } catch(err) {
    console.log(err)
    }
}
fetchData();
    },[])
    return (
      <>
        <section className="tbg height d-flex justify-content-center align-items-center">
          {posts.map((post) => (
            <div key={post.id}>
              <div className="container mar-t">
                <div className="row">
                  <div className="col-md-7">
                    <div className="post">
                      {/* <div className="img-container"> */}
                      <ImageDisplay imageName={post.titleimg} />
                      {/* <ImageDisplay imageName={post.compimg} /> */}
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-md-5 posttitle">
                    <div className="mt-5">
                      <h3 className="text-white">{post.title}</h3>
                      <p>{post.desc}</p>
                    </div>
                  </div>
                </div>
                {/* objectivs section */}
                <div className="obj_sction mt-5">
                  <label htmlFor="object" className="text-white">
                    Objectives:
                  </label>
                  <p>{post.objectives}</p>
                  <ol className="text-white" id="object">
                    <li>
                      Develop a system to remotely control home appliances and
                      devices.
                    </li>
                    <li>
                      Integrate Arduino and Raspberry Pi for sensor data
                      acquisition and control.
                    </li>
                    <li>
                      Implement a user-friendly interface for remote access and
                      control.{" "}
                    </li>
                    <li>Enhance energy efficiency and home security.</li>
                  </ol>
                </div>
                {/* component section */}
                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="post">
                      {/* <div className="img-container"> */}

                      <ImageDisplay imageName={post.compimg} />
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="postdesc">
                      <h3 className="text-white">{post.component}</h3>
                      {/* <p>{post.desc}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </>
    );
}

export default BlogsPage;
