import React, { useState, useRef, useMemo } from "react";
import "./BlogsForms.css";
import Button from "react-bootstrap/Button";
import { Link} from "react-router-dom";
import axios from 'axios';
import moment from "moment";

// joeditor
import JoditEditor from "jodit-react";

const BlogsForms = ({ placeholder, username, email }) => {
 
  // img upload function
  const [coverImg, setCoverImg] = useState(null);
  const uploadImages = async () => {
    try {
      const formData = new FormData();
      formData.append("coverImg", coverImg);
      console.log("coverimg", coverImg);
      const res = await axios.post(
        "http://localhost:8000/api/upload",
        formData
      );
      console.log("Upload successful:", res.data);
      return res.data;
    } catch (err) {
      console.error("Error uploading images:", err);
    }
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await uploadImages();
    console.log("imgurl", imgUrl);
    try {
      await axios.post("http://localhost:8000/api/posts/", {
        username: username,
        email: email,
        title,
        content: content,
        category: category,
        coverImage: imgUrl,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("robotics");
  // const [username, setUserName] = useState("");
  // const [email, setEmail] = useState("");

  console.log("content", content);
  const editor = useRef(null);
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder]
  );
  return (
    <>
      <section className="blogsf d-flex justify-content-center align-items-center height">
        <div className="container mar-t">
          <div className="row">
            {/* user details */}
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column">
              <div className="d-flex gap-5">
                <div>Username</div>
                <input
                  type="text"
                  // onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column">
              <div className="d-flex gap-5">
                <div>Email</div>
                <input type="text" value={username} />
              </div>
            </div>
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column">
              <div className="d-flex gap-5">
                <div>TITLE</div>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
              </div>
            </div>
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-4">
              <div className="d-flex gap-5 w-100 justify-content-center">
                <div>Category</div>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  <option value="robotics">Robotics</option>
                  <option value="design">3D Design</option>
                  <option value="diyProjects">DiyProjects</option>
                  <option value="softwaredev">SOFTWARE DEVELOPMENT</option>
                  <option value="iot">IOT</option>
                  <option value="webapp">WEB APP AND DESIGING</option>
                  <option value="others">OTHERS</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-4">
              <div className="d-flex gap-5">
                <label htmlFor="cfile">CoverImage</label>
                <input
                  type="file"
                  id="cfile"
                  name="compimg"
                  onChange={(e) => setCoverImg(e.target.files[0])}
                />
              </div>
            </div>
            <div className="editor mt-4 p-4">
              {/* <div className="d-flex gap-5"> */}
              <div>Short Description.</div>
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
              />
              {/* </div> */}
            </div>
          </div>
          <div className="d-flex justify-content-center gap mt-4">
            <Button variant="success" onClick={HandleSubmit}>
              Save and Exit
            </Button>

            {/* <Link to="/blogspage">
              <Button variant="danger">Preview and publish</Button>{" "}
            </Link> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsForms;
