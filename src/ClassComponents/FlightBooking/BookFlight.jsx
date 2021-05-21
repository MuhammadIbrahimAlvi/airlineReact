import React from 'react';
import classes from './BookFlight.scss';
const BookFlight = () => {
    return (
        <div className={classes.container}>

       <h2 className={classes.heading}>Booking</h2>
                <label className={classes.heading} htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" id="f-name" /><br /><br />
                <label className={classes.heading} htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" id="l-name" /><br /><br />
                <label className={classes.heading} htmlFor="dob">Date Of Birth</label>
                <input type="date" name="dob" id="id-dob" />


                <fieldset className={classes.heading}>
                    <legend>Flight Class</legend>
                    <input type="radio" name="firstclass" id="fclass" value="First Class" />
                    <label htmlFor="txt">First Class</label><br />
                    <input type="radio" name="businessclass" id="bclass" value="Business Class" />
                    <label htmlFor="">Business Class</label><br />
                    <input type="radio" name="economyclass" id="eclass" value="Economy Class" />
                    <label htmlFor="">Economy Class</label>
                    
                </fieldset>

                <h4 className={classes.heading}>Payment</h4>
                <input type="radio" name="dcard" id="dcard" value="Debit Card" />
                <label className={classes.heading} htmlFor="dcard">Debit Card</label><br />
                <input type="radio" name="ccard" id="ccard" value="Credit Card" />
                <label className={classes.heading} htmlFor="ccard">Credit Card</label><br />
      
                <input className={classes.heading} type="submit" value="Book" />
        
        </div>
    )
}

export default BookFlight;