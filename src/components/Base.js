import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
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

const containerVariants ={
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible:{
        x: 0,
        opacity: 1,
        transition:{
            type: 'spring',
            delay: 0.5
        }
    },
    exit : {
        x: '-100vw',
        transition: {ease: 'easeInOut'}
    }
}

const NextVariants ={
    hidden: {
        x: '-100vw'
    },
    visible:{
        x: 0,
        transition:{
            type: 'spring',
            stiffness: 120,
        }
    }
}
const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container" 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
   >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)} whileHover={{scale: 1.3,originX: 0,color: '#f8e112'}} transition={{type: 'spring',stiffness: 300}} >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div variants={NextVariants} className="next">
          <Link to="/toppings">
            <motion.button  variants={buttonVarians} whileHover="hover">Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;