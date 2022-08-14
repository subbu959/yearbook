import React from 'react';
import {useState} from 'react';
import {motion} from 'framer-motion';
export default function Card(props) {
    const [isOpen, setIsOpen] = useState(false);
    return(
        
        // <div className="card">
        //     <img src={props.item.image} className="card--image" alt="profile_pic"/>
        //     <div className="card-content">
        //         <span className="card-location">{props.item.name}</span><br/>
        //         <span classname="card-spot">{props.item.rollno}</span>
        //     </div>
        // </div>
        <div>
            <motion.div 
            onClick={() => setIsOpen(!isOpen) }
            className="card"
                style={{borderRadium: "1 rem"}}
            >
                <motion.h2 Layout="position">{props.item.rollno}</motion.h2>
                {isOpen &&(
                   <motion.div>
                    <span className="card-location">{props.item.name}</span><br/>
                    <img src={props.item.image} className="card--image" alt="profile_pic"/>
                </motion.div>
                 )}
                </motion.div>
        </div>
        );
    }