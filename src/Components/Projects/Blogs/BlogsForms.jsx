import React, { useState, useRef, useMemo, useEffect } from "react";
import "./BlogsForms.css";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import moment from "moment";

// joeditor
import JoditEditor from "jodit-react";
import { notify } from "../../../utils/toastUtils";

const BlogsForms = ({ placeholder}) => {
 
  const state = useLocation();
  const navigate = useNavigate();
  console.log("state", state.state);
  
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [content, setContent] = useState("");
  const [category, setCategory] = useState("robotics");
  // img upload function
  const [coverImg, setCoverImg] = useState(null);
  
  
  
  const { id } = useParams();
  
  useEffect(() => {
    if (id) {
      fetchBlogData();
    }
  }, [id]);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/posts/${id}`);
      const data = response.data[0];
      console.log("datadatadatav", data);
      setTitle(data.title);
      setDescription(data.description);
      setContent(data.content);
      setCategory(data.category);
      setCoverImg(data.coverImage);
    } catch (err) {
      console.log(err);
    }
  };
  
  
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

  // const HandleSubmit = async (e) => {
  //   e.preventDefault();
  //   const imgUrl = await uploadImages();
  //   try {
  //     await axios.post("http://localhost:8000/api/posts/", {
  //       title,
  //       content: content,
  //       category: category,
  //       coverImage: imgUrl,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let imgUrl = coverImg; // Use the existing image URL if no new image is uploaded

    if (coverImg && typeof coverImg === "object") {
      imgUrl = await uploadImages();
    }

    const postData = {
      title,
      description,
      content,
      category,
      coverImage: imgUrl,
    };

    try {
      if (id) {
        // Update existing post
        await axios.put(`http://localhost:8000/api/posts/${id}`, postData, { withCredentials: true });
        notify("Blog is Updated!", "success");
        setTimeout(() => {
          navigate(`/${postData.category}`);
        }, 1800); 
      }
       else {
        // Create new post
        await axios.post("http://localhost:8000/api/posts/", postData, {
          withCredentials: true,
        });
        notify("Blog is Created!", "success");
        setTimeout(() => {
          navigate(`/${postData.category}`);
        }, 1800); //
      }
    } catch (err) {
      notify("Error deleting blog: " + err.message, "error");
    }
  };


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
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column">
              <div className="d-flex gap-5">
                <div>TITLE</div>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column">
              <div className="d-flex gap-5">
                <div>ShortDescription</div>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
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
                  <option value="roboticsprojects">Robotics</option>
                  <option value="design">3D Design</option>
                  <option value="diyprojects">DiyProjects</option>
                  <option value="softwaredev">SOFTWARE DEVELOPMENT</option>
                  <option value="iot">IOT</option>
                  <option value="webapp">WEB APP AND DESIGING</option>
                  <option value="othersprojects">OTHERS</option>
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
            <Button variant="success" onClick={handleSubmit}>
              Save and Exit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsForms;
