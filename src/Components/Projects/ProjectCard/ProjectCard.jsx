import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";
const ProjectCard = ({ title, category, content, id, coverImage, excerpt }) => {
  const ImageDisplay = ({ imageName }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const state = useLocation().state
    
    console.log("state", state);
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
      <img src={imageUrl} alt="img" className="card-img-p" />
    ) : (
      "Loading..."
    );
  };
  return (
    <>
      <Card className="dark_blur_bg">
        <div className="dark_blur_bg text-center">
          <Card.Title>{title}</Card.Title>
        </div>
        <ImageDisplay imageName={coverImage} />
        <Card.Body className="dark_blur_bg d-flex flex-column align-items-center justify-content-center">
          <Card.Text dangerouslySetInnerHTML={{ __html: excerpt(content) }} />
        </Card.Body>
        <Card.Footer className="text-muted dark_blur_bg d-flex justify-content-between">
          
            <Link to={`/blogspage/${id}`}>Read More</Link>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ProjectCard;
