import React, { useEffect, useState } from 'react';
import "./RoboticsFirst.css";
import Category from '../../Category/Category';
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectCard from '../../ProjectCard/ProjectCard';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"; 

const RoboticsFirst = () => {
  
  const [data, setData] = useState([]);
  console.log("Data:", data);
  useEffect(() => {
    loadBlogsData();
  }, [])
  
  const loadBlogsData = async () => {    
    try {
      const res = await axios.get("http://localhost:8000/api/posts");
      if (res.status === 200) {
      setData(res.data); 
      } else {
      toast.error("Something went wrong")
      }    
    } catch(err) {
    toast(err)
    } 
   
  }
  console.log("dta", data)
    
  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]*>?/gm, "");
  };

  const excerpt = (str, maxLength) => {
    // Remove HTML tags from the content
    const plainText = stripHtmlTags(str);

    // Truncate the plain text to the desired length
    if (plainText.length > maxLength) {
      return plainText.substring(0, maxLength) + "...";
    }
    return plainText;
  };

  

  
    return (
      <>
        <section className="projectbg height">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <Category />
              </div>
              <div className="col-md-8">
                <Row xs={1} md={3}>
                  {data &&
                    data.map((item, index) =>
                      item.category === "roboticsprojects" ? (
                        <Col key={index} className="mb-4 robo mt-5">
                          {/* Add margin bottom for spacing */}
                          <ProjectCard
                            {...item}
                            excerpt={(str) => excerpt(str, 100)}
                          />
                        </Col>
                      ) : null
                    )}
                </Row>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default RoboticsFirst;
