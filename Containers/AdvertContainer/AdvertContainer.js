import React, {useEffect, useState} from 'react';

import axios from 'axios';

import classes from './AdvertContainer.module.css';
import Card from '../../Components/Cards/Card';
import Button from '../../Components/Buttons/Button';


const AdvertContainer = (props) => {

    const [getAdverts, setAdverts] = useState([]);
    const [getUserFavourites, setUserFavourites] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/")
        .then(response => {
            console.log(response.data);
            setAdverts(response.data);
            // getUserDetails();
            
        }).catch(err => {
            console.log(err);
        })
    }, [])



    const getUserDetails = () => {
        axios.get(`http://localhost:3000/users/loggedIn/${localStorage.getItem('token')}`)
        .then(response => {
            // alert(response.data._id);
            setUserFavourites(response.data.favourites);

            
        }).catch(err => {
            // console.log(err);
        })
    }
    

    const likeHandler = (id) => {
        console.log(id);

        var result = isLiked(id);

        const nad = getAdverts.filter(st => st._id == id);

        const myData = {
            userId : nad[0].postedBy._id,
            postId: nad[0]._id,
            likedResult: result
        }

        // console.log(getAdverts[0].postedBy._id);
        axios.post("http://localhost:3000/users/like", myData).then(response => {
            console.log(response.data);
            getUserDetails();
        }).catch(err => {
            console.log(err);
        })
    }

    const isLiked = (advertId) => {
        return getUserFavourites.includes(advertId);
    }

    
    return ( 
        

        <div className={classes.Container}>

            
            {getAdverts.map(advert => (
                <Card 
                    elType='Advert'
                    adId={advert._id}
                    // userId={advert.postedBy._id}
                    title={advert.title}
                    image={advert.image}
                    // price={advert.price}
                    town={advert.town}
                    county={advert.county}
                    type={advert.type}
                    // likeClicked={(e) => (e.preventDefault(), likeHandler(advert._id))}
                    // liked={isLiked(advert._id)}
                />
                
            ))}

            {/* <Card elType='Advert' />
            <Card elType='Advert' />
            <Card elType='Advert' />
            <Card elType='Advert' />
            <Card elType='Advert' />
            <Card elType='Advert' />
            <Card elType='Advert' /> */}

            
        </div>
     );
}
 
export default AdvertContainer;