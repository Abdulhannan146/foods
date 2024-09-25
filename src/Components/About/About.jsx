import React, { useState } from 'react';
import './About.css';
import { profile2 } from '../../images/index';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/pagination'; // Import Swiper pagination styles
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import { Pagination } from 'swiper/modules'; // Updated import from swiper/modules

const data = [
  {
    name: 'Mission Statement',
    review: `At Alpha Food Solutions, we empower the food industry by providing reliable access to high-quality ingredients that meet the evolving demands of consumers. We build partnerships based on trust, transparency, and mutual success, committed to food safety, sustainability, and excellence.`,
  },
  {
    name: 'Vision Statement',
    review: `To be the preferred global partner for food ingredients, fostering innovation and sustainability by consistently delivering exceptional products and services. We envision collaborations that drive advancements in quality and sustainability for positive community and environmental impact.`,
  },
  {
    name: 'Company Commitment',
    review: `We are dedicated to being a transformative partner in the food and beverage industry, building strong relationships with manufacturers and distributors. We ensure access to high-quality ingredients from trusted suppliers, delivering tailored solutions that exceed expectations and uphold sustainable practices.`,
  },
];

const coreValuesData = [
  {
    title: 'Quality',
    description: `Delivering only the highest quality ingredients, sourced from trusted suppliers and subjected to rigorous quality control measures. We believe that quality is the cornerstone of our business and our commitment to excellence ensures that our products meet the highest standards of safety and performance.`,
  },
  {
    title: 'Integrity',
    description: `Upholding the highest standards of ethics and transparency in all our business dealings is paramount. We build trust with our partners and customers through honesty and accountability in every action we take.`,
  },
  {
    title: 'Innovation',
    description: `Continuously evolving our product offerings and services to meet the dynamic needs of the food industry is our priority. By embracing new technologies and ideas, we aim to stay ahead of market trends and drive progress in our field.`,
  },
  {
    title: 'Sustainability',
    description: `Committed to sustainable sourcing practices that protect our environment and communities. We actively seek out suppliers who share our commitment to sustainability, ensuring our impact on the planet is a positive one.`,
  },
  {
    title: 'Customer Focus',
    description: `Building strong, long-term relationships by understanding and exceeding customer expectations is at the heart of what we do. We listen to our clients and adapt our offerings to better serve their needs, ensuring mutual success.`,
  },
];

const About = () => {
  const [activeValueIndex, setActiveValueIndex] = useState(0); // State to track the active button index

  const handleButtonClick = (index) => {
    setActiveValueIndex(index); // Set the active index to the clicked button index
  };

  return (
    <>
      <section id='about'>
        <div className="section_wrapper about_container">
          <div className="me_container blur-effect">
            <div className="photo_container">
              <img src={profile2} alt="Profile" />
            </div>
          </div>
          <div className="section_header">
            <h2 className="primary_title">About Us</h2>
            <h1 className="title">
              We Are <span className="color_primary">Alpha Food Solutions</span>
            </h1>
            <div className="tree_structure">
              <div className="tree_item">
                <p className="text_muted description">
                  Alpha Food Solutions is dedicated to providing reliable access to high-quality, innovative ingredients that meet the ever-evolving demands of consumers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='testimonial'>
        <div className="section__wrapper">
          <div className="section__header">
            <h2 className="primary_title">Mission</h2>
            <p className="text_muted description">
              To empower the food industry by providing high-quality ingredients and building lasting partnerships based on trust, transparency, and mutual success.
            </p>
          </div>
        </div>

        <div className='testimonial_container'>
          {data.map(({ name, review }, index) => (
            <div className='testimonial' key={index}>
              <h3 className="client_name">{name}</h3>
              <small className="client_review">{review}</small>
            </div>
          ))}
        </div>

        <div className="core_values">
          <h3 className="client_name cr">Core Values</h3>
          <nav className="core_values_nav">
            {coreValuesData.map((value, index) => (
              <button
                key={index}
                className="core_value_button"
                onClick={() => handleButtonClick(index)}
              >
                {value.title}
              </button>
            ))}
          </nav>
          <div className="core_value_description">
            <p>{coreValuesData[activeValueIndex].description}</p>
          </div>
        </div>

      </section>
    </>
  );
};

export default About;
