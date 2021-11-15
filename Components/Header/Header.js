import React, {useState} from 'react';
import {useRouter} from 'next/router';
import classes from './Header.module.css';
import Input from '../FormElements/Input';

import counties from '../../counties';
import categories from '../../cata';
import Button from '../Buttons/Button';


const Header = () =>{
    const router = useRouter();

    const [getData, setData] = useState('');


    const [getCounty, setCounty] = useState();
    const [getCategories, setCategories] = useState();


    const changeCounty = event =>{
        setCounty(event.target.value);
    }

    const changeCategory = event => {
        setCategories(event.target.value);
    }

    const handleChange = e => {
        setData(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newData = {
            keyword: getData.keyword,
            category: getCategories,
            county: getCounty
        }; 
        router.push({pathname: '/search', query: newData});

    }

    return(
        <header className={classes.Header}>
        
        <form onSubmit={handleSubmit} className={classes.Form}>


            <Input 
                elType='Header'
                placeholder='Keyword'
                icon='fas fa-laptop'
                type='text'
                name='keyword'
                onInput={handleChange}
                
            />
            <Input 
                elType='HeaderDropdown'
                placeholder='Category'
                icon='fas fa-tags'
                type='text'
                name='category'
                list={categories}
                onInput={changeCategory}
                // onInput={handleChange}
            />
            <Input 
                    elType="HeaderDropdown"
                    placeholder="County"
                    icon='fas fa-map-marker-alt'
                    type='text'
                    list={counties}
                    onInput={changeCounty}
                    
                />
            

            <Button elType='Header' />
            

        </form>

    </header>
    );
}

export default Header;