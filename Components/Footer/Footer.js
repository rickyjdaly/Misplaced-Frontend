import React from 'react';

import classes from './Footer.module.css';


const Footer = (props) => {
    return ( 
        <footer className={classes.Footer}>
            <div className={classes.FooterLinks}>
                <div className={classes.FooterLink}>
                    <i className="fab fa-facebook-square"></i>
                </div>
                <div className={classes.FooterLink}>
                    <i className="fab fa-instagram-square"></i>
                </div>
                <div className={classes.FooterLink}>
                    <i className="fab fa-snapchat-square"></i>
                </div>
                <div className={classes.FooterLink}>
                    <i className="fab fa-twitter-square"></i>
                </div>
            </div>

            <div className={classes.Copy}>
                &copy; MISPLACED 2021
            </div>

        </footer>
     );
}
 
export default Footer;