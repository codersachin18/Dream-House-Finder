import React from "react";
import "./AboutPage.css";

// Import Images
import villaImg from "../assets/img1.jpg";
import houseImg from "../assets/img2.jpg";
import cabinImg from "../assets/img3.jpg";
import jungleHouseImg from "../assets/img4.jpg";

const AboutPage = () => {
  const properties = [
    { title: "Villas", description: "Luxurious villas with spacious living areas and elegant architecture. Perfect for a premium lifestyle.", image: villaImg },
    { title: "Houses", description: "A variety of houses, from cozy homes to large estates, designed to meet every need.", image: houseImg },
    { title: "Cabins", description: "Charming rustic cabins nestled in serene locations, ideal for a peaceful getaway.", image: cabinImg },
    { title: "Jungle Houses", description: "Nature-inspired homes that offer a blend of adventure and comfort in the wild.", image: jungleHouseImg },
  ];

  return (
    <div className="about-page">
      <h1 className="about-title">About Our Properties</h1>

      <div className="property-grid">
        {properties.map((property, index) => (
          <div className="property-card" key={index}>
            <img src={property.image} alt={property.title} className="property-image" />
            <div className="property-content">
              <h2>{property.title}</h2>
              <p>{property.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Articles Section */}
      <div className="articles-section">
        <h2 className="article-title">Latest Articles</h2>

        <div className="articles">
          <article className="article-card">
            <h3>Why Choose a Villa?</h3>
            <p>Villas offer luxurious living with privacy, space, and breathtaking views. Learn why they are a perfect choice for upscale living.</p>
            <a href="#">Read More</a>
          </article>

          <article className="article-card">
            <h3>Top Features of Modern Homes</h3>
            <p>Discover the latest trends in house designs, including smart home technology and energy efficiency.</p>
            <a href="#">Read More</a>
          </article>

          <article className="article-card">
            <h3>Escape to Nature: Cabins & Jungle Houses</h3>
            <p>Explore how cabins and jungle houses provide a peaceful retreat while keeping you close to nature.</p>
            <a href="#">Read More</a>
          </article>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
