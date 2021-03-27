import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <motion.div className="home container" initial={{rotateZ: 180,opacity: 0}}     transition={{ duration: 1 }}
     animate={{rotateZ: 0,opacity: 1 }}>
    <motion.h2    animate={{ fontSize: '50px',color: '#ff2994',  }} drag="x"
    dragConstraints={{ left: -100, right: 100 }}      transition={{ duration: 0.5 }}
     whileHover={{scale: 2.4}} whileTap={{scale: 0.9}}
    >
      Welcome to Pizza Joint
    </motion.h2>
      <Link to="/base">
        <motion.button whileHover={{scale: 1.1,textShadow: '0px 0px 8px rgba(255,255,255)',boxShadow: '0px 0px 8px rgba(255,255,255)' }}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;