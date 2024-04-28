import React, { useState } from 'react';
import "./BlogsForms.css";
import Button from "react-bootstrap/Button";
import { Link, useSearchParams } from "react-router-dom";
import axios from 'axios';
import moment from "moment";
const BlogsForms = () => {
  const [title, setTitle] = useState("");
  const [shotDes, setSDes] = useState("");
  const [tImg, setTitleImg] = useState(null);
  const [cat, setCat] = useState("robotics");
  const [objectives, setObjectives] = useState("");
  const [component, setComponent] = useState("");
  const [architecturedesc, setArchitecturedesc] = useState("");
  const [systemSetup, setsystemSetup] = useState("");
  const [systemSetupdescription, setsystemSetupdescription] = useState("");
  const [systemSecondSetupdescription, setsystemSecondSetupdescription] =
    useState("");
  const [systemSetupThreedescription, setsystemSetupThreedescription] =
    useState("");
  const [systemImpledescription, setsystemImpledescription] = useState("");
  const [systemImpledescriptionTwo, setsetsystemImpledescriptionTwo] =
    useState("");
  const [systemImpledescriptionThree, setsystemImpledescriptionThree] =
    useState("");
   const [systemImpledescriptionFour, setsystemImpledescriptionFour] =
     useState("");
   const [systemImpledescriptionFive, setsystemImpledescriptionFive] =
    useState(""); 
  const [conclusion, setConclusion] = useState("");
  const [references, setReferences] = useState("");
  const [acknowledment, setAcknowledment] = useState("");


  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", tImg);
      console.log("formdata", formData);
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
    console.log("img", imgUrl)
    try {
      await axios.post("http://localhost:8000/api/posts/", {
        title,
        desc: shotDes,
        img: imgUrl,
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        cat: cat,
        objectives: objectives,
        architecturedesc: architecturedesc,
        component: component,
        systemSetup: systemSetup,
        systemSetupdescription: systemSetupdescription,
        systemSecondSetupdescription: systemSecondSetupdescription,
        systemSetupThreedescription: systemSetupThreedescription,
        systemImpledescription: systemImpledescription,
        systemImpledescriptionTwo: systemImpledescriptionTwo,
        systemImpledescriptionThree: systemImpledescriptionThree,
        systemImpledescriptionFour: systemImpledescriptionFour,
        systemImpledescriptionFive: systemImpledescriptionFive,
        conclusion: conclusion,
        references: references,
        acknowledment: acknowledment, 
      }); 
    } catch (err) {
    console.log(err)
    }
  }
  
    return (
      <>
        <section className="blogsf d-flex justify-content-center align-items-center height">
          <div className="container mt-5">
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
                <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-5">
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
            {/* objective section */}

            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-4">
              <div className="d-flex gap-5 w-100">
                <div>Objectives:</div>
                <input
                  type="text"
                  onChange={(e) => setObjectives(e.target.value)}
                  className="w-100"
                  placeholder="Click and enter the text"
                />
              </div>
            </div>

            {/* component req */}
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-4">
              <div className="d-flex gap-5 w-100">
                <div>Components Required:</div>
                <input
                  type="text"
                  onChange={(e) => setComponent(e.target.value)}
                  className="w-100"
                  placeholder="Click and enter the text"
                />
              </div>
            </div>
            {/* img component */}
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-4">
              <div className="d-flex gap-5">
                <label htmlFor="file">Components img 1</label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  // onChange={(e) => setTitleImg(e.target.files[0])}
                />
              </div>
            </div>
            {/* architecture img */}
            <div className="archi_label gap-5 d-flex justify-content-center align-items-center flex-column mt-4">
              <div className="d-flex gap-5">
                <label htmlFor="file">System Architecture Image</label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  // onChange={(e) => setTitleImg(e.target.files[0])}
                />
              </div>
            </div>
            {/* sys archi desc */}
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-3">
              <div className="d-flex gap-5">
                <div>System architecture description:</div>
                <input
                  type="text"
                  onChange={(e) => setArchitecturedesc(e.target.value)}
                />
              </div>
            </div>
            {/* system setup */}
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-3">
              <div className="d-flex gap-5">
                <div>System Setup:</div>
                <input
                  type="text"
                  onChange={(e) => setsystemSetup(e.target.value)}
                />
              </div>
            </div>
            {/* system setup img 1 */}
            <div className="archi_label gap-5 d-flex justify-content-center align-items-center flex-column mt-4">
              <div className="d-flex gap-5">
                <label htmlFor="file">System setup 1 img</label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  // onChange={(e) => setTitleImg(e.target.files[0])}
                />
              </div>
            </div>
            {/*System  setup 1description: */}
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-3">
              <div className="d-flex gap-5">
                <div>System setup 1 description:</div>
                <input
                  type="text"
                  onChange={(e) => setsystemSetupdescription(e.target.value)}
                />
              </div>
            </div>
            {/*System setup 2 img*/}
            <div className="archi_label gap-5 d-flex justify-content-center align-items-center flex-column mt-4">
              <div className="d-flex gap-5">
                <label htmlFor="file">System setup 2 img</label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  // onChange={(e) => setTitleImg(e.target.files[0])}
                />
              </div>
            </div>
            {/*System  setup 2 description: */}
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-3">
              <div className="d-flex gap-5">
                <div>System setup 2 description:</div>
                <input
                  type="text"
                  onChange={(e) =>
                    setsystemSecondSetupdescription(e.target.value)
                  }
                />
              </div>
            </div>
            {/*System setup 3 img*/}
            <div className="archi_label gap-5 d-flex justify-content-center align-items-center flex-column mt-4">
              <div className="d-flex gap-5">
                <label htmlFor="file">System setup 3 img</label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  // onChange={(e) => setTitleImg(e.target.files[0])}
                />
              </div>
            </div>
            {/*System  setup 3 description: */}
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-3">
              <div className="d-flex gap-5">
                <div>System setup 3 description:</div>
                <input
                  type="text"
                  onChange={(e) =>
                    setsystemSetupThreedescription(e.target.value)
                  }
                />
              </div>
            </div>
            {/* implementation setup img */}
            <div className="d-flex gap">
              <div className="archi_label d-flex justify-content-center align-items-center flex-column mt-4 w-100">
                <div className="d-flex gap-5">
                  <label htmlFor="file">Implementation setup img</label>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    // onChange={(e) => setTitleImg(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="archi_label d-flex justify-content-center align-items-center flex-column mt-4 w-100">
                <div className="d-flex gap-5">
                  <label htmlFor="file">Implementation setup img</label>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    // onChange={(e) => setTitleImg(e.target.files[0])}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex gap">
              {/*Implementation setup description*/}
              <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-3 w-100">
                <div className="d-flex gap-5">
                  <div>Implementation setup description</div>
                  <input
                    type="text"
                    onChange={(e) => setsystemImpledescription(e.target.value)}
                  />
                </div>
              </div>
              {/*Implementation setup description*/}
              <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-3 w-100">
                <div className="d-flex gap-5">
                  <div>Implementation setup description</div>
                  <input
                    type="text"
                    onChange={(e) =>
                      setsetsystemImpledescriptionTwo(e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            {/*Implementation setup description img*/}
            <div className="archi_label gap-5 d-flex justify-content-center align-items-center flex-column mt-4">
              <div className="d-flex gap-5">
                <label htmlFor="file">Implementation setup</label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  // onChange={(e) => setTitleImg(e.target.files[0])}
                />
              </div>
            </div>
            {/*Implementation setup description */}
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-3">
              <div className="d-flex gap-5">
                <div>Implementation setup description</div>
                <input
                  type="text"
                  onChange={(e) =>
                    setsystemImpledescriptionThree(e.target.value)
                  }
                />
              </div>
            </div>

            {/* implementation setup img */}
            <div className="d-flex gap">
              <div className="archi_label d-flex justify-content-center align-items-center flex-column mt-4 w-100">
                <div className="d-flex gap-5">
                  <label htmlFor="file">Implementation setup img</label>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    // onChange={(e) => setTitleImg(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="archi_label d-flex justify-content-center align-items-center flex-column mt-4 w-100">
                <div className="d-flex gap-5">
                  <label htmlFor="file">Implementation setup img</label>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    // onChange={(e) => setTitleImg(e.target.files[0])}
                  />
                </div>
              </div>
            </div>
            {/*Implementation setup description*/}
            <div className="d-flex gap">
              {/*Implementation setup description*/}
              <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-3 w-100">
                <div className="d-flex gap-5">
                  <div>Implementation setup description</div>
                  <input
                    type="text"
                    onChange={(e) =>
                      setsystemImpledescriptionFour(e.target.value)
                    }
                  />
                </div>
              </div>
              {/*Implementation setup description*/}
              <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-3 w-100">
                <div className="d-flex gap-5">
                  <div>Implementation setup description</div>
                  <input
                    type="text"
                    onChange={(e) =>
                      setsystemImpledescriptionFive(e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
            {/* Conclusion */}
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-3 w-100">
              <div className="d-flex gap-5">
                <div>Conclusion</div>
                <input
                  type="text"
                  onChange={(e) => setConclusion(e.target.value)}
                />
              </div>
            </div>
            {/* reference */}

            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-3 w-100">
              <div className="d-flex gap-5">
                <div>References</div>
                <input
                  type="text"
                  onChange={(e) => setReferences(e.target.value)}
                />
              </div>
            </div>
            {/* Acknowledment */}
            <div className="label gap-5 d-flex justify-content-center align-items-center flex-column mt-3 w-100">
              <div className="d-flex gap-5">
                <div>Acknowledment</div>
                <input
                  type="text"
                  onChange={(e) => setAcknowledment(e.target.value)}
                />
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
