import React, { useState } from 'react';
import "./BlogsForms.css";
import Button from "react-bootstrap/Button";
import { Link, useSearchParams } from "react-router-dom";
import axios from 'axios';
import moment from "moment";
const BlogsForms = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [shotDes, setSDes] = useState("");
  const [tImg, setTitleImg] = useState(null);
  const [cat, setCat] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", tImg);
      const res = await axios.post(
        "http://localhost:8000/api/upload",
        formData
      );
      console.log("blgresdata", res.data)
      return res.data
    } catch (err) {
    console.log(err)
    }
  }
  
  const HandleSubmit =async e => {
    e.preventDefault()
    const imgUrl = await upload();
    try {
      await axios.post("http://localhost:8000/api/posts/", {
        title,
        desc: shotDes,
        // cat,
        // img: tImg ? imgUrl : "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      }); 
    } catch (err) {
    console.log(err)
    }
  }
  
    return (
      <>
        <section className="blogsf d-flex justify-content-center align-items-center height">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="label gap-5 d-flex justify-content-center align-items-center flex-column h-100">
                  <div className="d-flex gap-5">
                    <label htmlFor="file">Title image</label>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      id="file"
                      onChange={(e) => setTitleImg(e.target.files[0])}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="label gap-5 d-flex justify-content-center align-items-center flex-column">
                  <div className="d-flex gap-5">
                    <div>TITLE</div>
                    <input
                      type="text"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-4">
                  <div className="d-flex gap-5">
                    <div>Short Description.</div>
                    <input
                      type="text"
                      onChange={(e) => setSDes(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* button section */}
            <div className="d-flex justify-content-center gap mt-4">
              <Button variant="success" onClick={HandleSubmit}>
                Save and Exit
              </Button>

              <Link to="/blogspage">
                <Button variant="danger">Preview and publish</Button>{" "}
              </Link>
            </div>
          </div>
        </section>
      </>
    );
}

export default BlogsForms;
