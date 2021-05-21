import React from 'react';
import imgs from '../../assets/planeImg1.png'
import classes from './Navbar.scss'
import SearchIcon from '@material-ui/icons/Search';
class Navbar extends React.Component {
    render() {

        return (

            <div className={classes.nav}>
                <div className={classes.logonav}>
                <img src={imgs} alt="Logo" />
                <h4>AirTravels</h4>
                </div>
                <div className={classes.navinput}>
                    <input type="text" placeholder="Search"  />
                    <SearchIcon className={classes.icon}/>
                </div>
            </div>

        );
    }
}

export default Navbar;