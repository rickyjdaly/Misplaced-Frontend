import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useRouter} from 'next/router'
import Card from '../../Components/Cards/Card';
import classes from './GalleryContainer.module.css';

const GalleryContainer = (props) => {
    const router = useRouter();
    const {pid} = router.query;

    console.log(router.query.pid);

    const [getAdverts, setAdverts] = useState({});
    const [getPostedBy, setPostedBy] = useState({});
    const [getUserFavourites, setUserFavourites] = useState([]);
    

    useEffect(()=>{
        if(!router.isReady) return;
        
      
        axios.get(`http://localhost:3001/${router.query.pid}`).then(response => {
            setAdverts(response.data);
            setPostedBy(response.data.postedBy);
            getUserDetails();
            
        }).catch(err => {
            // console.log(err);
        })

        
    }, [router])


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

        // const nad = getAdverts.filter(st => st._id == id);

        const myData = {
            userId:  getPostedBy._id,
            postId: getAdverts._id,
            likedResult: result
        }

        // const myData = {
        //     userId : nad[0].postedBy._id,
        //     postId: nad[0]._id,
        //     likedResult: result
        // }

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
        <section className={classes.Container}>


                    <Card 
                        elType='Gallery'
                        adId={getAdverts._id}
                        title={getAdverts.title}
                        description={getAdverts.description}
                        image={getAdverts.image}
                        price={getAdverts.price}
                        town={getAdverts.town}
                        county={getAdverts.county}
                        type={getAdverts.type}
                        
                    />

                    {/* <Card 
                        elType='Author' 
                        firstName={getPostedBy.firstName}
                        userId={getPostedBy._id}
                        town={getPostedBy.town}
                        county={getPostedBy.county}
                        contact={getPostedBy.contactNumber}

                    /> */}


          

            
           
        </section>
     );
}
 
export default GalleryContainer;