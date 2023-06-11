import React from "react";
import "./portfolio.css";
import ProjectModal from './ProjectModal';
import { useState } from "react";
import FilterButtons from "./FilterButtons";
import { motion } from "framer-motion";

import { data } from "./data.jsx"


data.forEach(function (value, i) {
  data[i].id = i
  console.log(data[i].id = i);
});


const Portfolio = () => {

  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [currentFilter, setCurrentFilter] = useState("")

  const handleClose = () => setShow(false);

  const handleShow = (modalData) => {
    setModalData(modalData);
    setShow(true);
  }


  const filteredData = (currentFilter==="") ? data : data.filter((item) => item.tags.includes(currentFilter))


  return (
    <>
      <section id="portfolio">

        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <FilterButtons applyFilter={setCurrentFilter}/>

        <div className="container portfolio__container">

          {filteredData.map(({images, title, github_link, live_link, tags, description, id}, i) =>

              <motion.div className="image-card portfolio__item"
                          key={id} layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{duration: 0.5 }}
                          onClick={() => handleShow({images, title, github_link, live_link, tags, description})}>

                <img className="portfolio__item-image" src={images[0]} alt={title} />

                <h3>{title}</h3>

              </motion.div>

          )}
        </div>

      </section>


      {modalData &&
        <ProjectModal modalData={modalData} show={show} handleClose={handleClose} />
      }
      
    
    </>
  );
};

export default Portfolio;
