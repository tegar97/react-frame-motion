import React,{useState} from 'react';
import {motion,AnimatePresence} from 'framer-motion'
import {Link} from 'react-router-dom'
const backdrop = {
    visible: {
        opacity: 1 
    },
    hidden: {
        opacity: 1
    }
}


const modal ={
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible:{
        y: "200px",
        opacity: 1,
        transation: {delay: 0.5}
    }
}
const Modal = ({showModal,setShowModal}) => {
    return(
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className="backdrop" variants={backdrop} animate="visible" initial="hidden">
                    <motion.div  variants={modal}  animate="visible" initial="hidden"  className="modal">
                        <p>Want To Make Another Pizza ?</p>
                        <Link to="/">
                            <button onClick={() => setShowModal(false)}>Start Again</button>
                        </Link>
                    </motion.div>   
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal