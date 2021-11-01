import React from "react";
import Logo from "../components/Logo";

import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";

const Home = () => {

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: { 
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    }
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Navigation />
        <div className="home-main">
          <div className="main-content">
            <motion.h1 drag onDragEnd   dragConstraints={{ left: -250, right: 950, top: -200, bottom: 250 }}>

            </motion.h1>
            <img src="./assets/img/logo.GIF"/>
            
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Home;
