import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import CardGroup from "react-bootstrap/CardGroup";
import Category from "../Category/Category";
import "./Others.css";
const Others = () => {
  const [data, setData] = useState([]);
  console.log("Data:", data);
  useEffect(() => {
    loadBlogsData();
  }, []);

  const loadBlogsData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/posts");
      if (res.status === 200) {
        setData(res.data);
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      toast(err);
    }
  };
  console.log("dta", data);

  const excerpt = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 80) + "...";
    }
    return str;
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
              <CardGroup className="pcard pcardothers flex-column align-items-center ">
                <div className="title">
                  <h4 className="text-white">Uploaded Projects</h4>
                </div>
                <div className="row">
                  {data &&
                    data.map(
                      (item, index) =>
                        item.category === "othersprojects" ? (
                          <ProjectCard
                            key={index}
                            {...item}
                            excerpt={excerpt}
                          />
                        ) : null // or render another component
                    )}
                </div>
              </CardGroup>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Others;
