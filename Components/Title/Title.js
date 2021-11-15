import React from 'react';

import classes from './Title.module.css';

const Title = (props) => {
    return ( 
        <h2 className={classes.Title}>{props.title}</h2>
     );
}
 
export default Title;