import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import  Loader  from './Loader';

const buttonVarians = {

    hover : {
        scale: 1.1,
        textShadow: '0px 0px 8px rgba(255,255,255)',
        boxShadow: '0px 0px 8px rgba(255,255,255)' ,
        transition: {
            yoyo: Infinity
        }
    }
    
}

const containerVariants= {
    hidden : {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition:{ delay: 1.5,duration: 1.5}
    },
    exit : {
        x: '-100vw',
        transition: {ease: 'easeInOut'}
    }
}
const Home = () => {
    const [titleOnClick,setTitleOnClick] = useState(false)

  return (
    <motion.div className="home container" 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
     >
    <motion.h2   drag="x"
    dragConstraints={{ left: -100, right: 100 }}      transition={{ duration: 0.5 }}
    whileTap={{scale: 0.9,color: 'red'}}
    onClick={() =>setTitleOnClick(!titleOnClick)}
    >
      Welcome to Pizza Joint {titleOnClick ? ':)' : ""}
    </motion.h2>
      <Link to="/base">
        <motion.button variants={buttonVarians} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/>
    </motion.div>
  )
}

export default Home;