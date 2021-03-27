import React,{useState} from 'react';
import {motion,AnimatePresence} from 'framer-motion'

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
            mass: 0.4,
            damping: 8,
            when: "beforeChildren",
            staggerChildren: 0.4
        }
    },
    exit : {
        x: '-100vw',
        transition: {ease: 'easeInOut'}
    }
}

const childVariants = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1
    }
}
const Order = ({ pizza }) => {
    const [showTitle,setShowTitle] = useState(true)

    setTimeout(() =>{
        setShowTitle(false);
    },4000)
  return (
    <motion.div  variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="container order">
    <AnimatePresence>
        {
            
            showTitle && (
                <motion.h2 exit={{y: '-1000px'}}>Thank you for your order :)</motion.h2>

            )
        }  
    </AnimatePresence>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div  variants={childVariants}>
         {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}

      </motion.div>
    </motion.div>
  )
}

export default Order;