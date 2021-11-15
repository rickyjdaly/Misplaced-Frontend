import React, {useState} from 'react';
import Button from '../../Components/Buttons/Button';
import Input from '../../Components/FormElements/Input';
import Title from '../../Components/Title/Title';

import classes from './ContactContainer.module.css';


const ContactContainer = (props) => {

    const [formData, setFormData] = useState({
        title: '',
        email: '',
        message: ''
    });

    const updateForm = e =>{
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    };

    const submitForm = e => {
        e.preventDefault();
        console.log(formData);
    }
 
    return ( 
        <div className={classes.Container}>

            

            <div className={classes.ContactDetails}>
                <Title title="Contact Us"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel, culpa numquam doloribus nobis deleniti enim ipsam mollitia nihil dignissimos? Nisi tempore culpa hic pariatur commodi asperiores dolor aperiam repellat, qui id explicabo natus. Deserunt aspernatur, ipsum eum odio voluptatum eveniet dignissimos impedit praesentium atque nemo sunt dolores voluptas debitis eligendi nobis asperiores aut natus officiis vel exercitationem alias consequuntur, adipisci fugiat. Itaque error eos dicta soluta nostrum necessitatibus natus inventore enim cumque, cupiditate a sunt optio totam magni architecto minima? Accusamus dolor in itaque expedita id minima exercitationem est laudantium velit? Enim amet saepe aperiam minima, vero est accusamus! Unde quis assumenda, eius accusantium quasi nesciunt. Voluptate praesentium, assumenda minima pariatur sequi hic aliquam molestiae adipisci. Asperiores debitis veniam possimus aperiam ut voluptates illo unde beatae voluptatibus aliquam sapiente accusamus quisquam nesciunt eos, quod quis. Fugiat quasi a aspernatur hic vero optio corporis reiciendis temporibus sed! Ipsum dignissimos optio, labore deleniti dolorem repellat totam unde distinctio dicta consequatur! Quasi quisquam, quae sed sapiente earum eos laboriosam repellat esse nobis, odio dolores aut facilis soluta asperiores dolor ex adipisci obcaecati eius molestias officiis optio eligendi qui. Eaque error ut blanditiis architecto saepe dolorum consectetur, hic praesentium explicabo aliquam, itaque earum!</p>
            </div>

            <div className={classes.FormContainer}>
                <form action="#" className={classes.ContactForm} onSubmit={submitForm}>
                    <div className={classes.ContactFormTop}>
                        <Input 
                            elType="Form"
                            placeholder="Title"
                            type='text'
                            name="title"
                            value={formData.title}
                            onInput={updateForm}
                            required='true'

                        />
                        <Input 
                            elType="Form"
                            placeholder="Email Address"
                            type='text'
                            name="email"
                            value={formData.email}
                            onInput={updateForm}
                            required='true'

                        />
                    </div>
                
                <Input 
                    elType="Textarea"
                    placeholder="Message"
                    type='text'
                    name="message"
                    value={formData.message}
                    onInput={updateForm}
                    required='true'

                />

                <Button elType='Form' title='Submit' />
                </form>
            </div>
            
            
        </div>
     );
}
 
export default ContactContainer;