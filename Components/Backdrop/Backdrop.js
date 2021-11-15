import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    if(props.elType === 'White'){
        return(
            <section className={classes.White}>
                {props.children}
            </section>
        )
    }
    if(props.elType === 'Grey'){

        if(props.fill){
            return(
                <section className={classes.Full}>
                    {props.children}
                </section>
            )
        } if(props.NoPadding){
            return(
                <section className={classes.NoPadding}>
                    {props.children}
                </section>
            )
        } else{
            return(
                <section className={classes.Grey}>
                    {props.children}
                </section>
            )
        }

        
    }

    
}
 
export default Backdrop;