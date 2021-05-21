import React from 'react';
import Plane from '../../assets/animeplane.png';
import Cloud from '../../assets/CloudsPng.png';
import classes from './Slider.scss'
const Slider=()=>{
    return(
        <div className={classes.slider}>
                 <h1 className={classes.heading} >Come Fly With Us!!!</h1>
                 <h4 className={classes.heading}>For Booking and Detail Contact Us..!</h4>
            <img src={Plane} alt="Plane Png" className={classes.img1}/>
            <img src={Cloud} alt="Cloud Png" className={classes.img2}/>
            <img src={Cloud} alt="Cloud Png" className={classes.img3}/>
    
        </div>
     
    )
}

export default Slider;