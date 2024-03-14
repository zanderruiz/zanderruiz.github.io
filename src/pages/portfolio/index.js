import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  const handleImageLoad = (index) => {
    setLoadedImages(prevLoadedImages => {
      if (!prevLoadedImages.includes(index)) {
        return [...prevLoadedImages, index];
      }
      return prevLoadedImages;
    });
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            const isEven = i % 2 === 0; // Check if the index is even
            return (
              <div
                key={i}
                className={`po_item ${isEven ? "even" : "odd"} ${
                  loadedImages.includes(i) ? "loaded" : ""
                }`}
              >
                <div className="content">
                  <h1>{data.proj_title}</h1>
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
                <img
                  src={data.img}
                  alt=""
                  onLoad={() => handleImageLoad(i)}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};