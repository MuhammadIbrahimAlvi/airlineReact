import React from 'react';
import imgs from '../../assets/planeImg1.png'
import classes from'./../Navbar/Navbar.scss'
class Navbar extends React.Component {
    render() {
        console.log(classes.nav)
        return (
            
            <div className={classes.nav}>
                <img src={imgs} alt=""  />
                <h4>AirTravels</h4>
            </div>
        );
    }
}

export default Navbar;