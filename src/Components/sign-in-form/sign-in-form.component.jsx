import { useState } from "react";


import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPES_CLASSES} from "../button/button.component";


import { signInWithGooglePopup,
        createUserDocumentFromAuth,
        SignInAuthUserWithEmailAndPassword
        } from "../../utils/firebase/firebase.utils";

import {SignUpContainer,ButtonsContainer} from './sign-in-form.styles.jsx';
 

const defaultFormFields = {
    email:'',
    password:'',
}

const SignInForm = ()  => { 

     const [formFields, setFormFields] = useState (defaultFormFields);
     const {email, password} = formFields;  

     const resetFormFields = () => {
        setFormFields(defaultFormFields);
     }

     const signInWithGoogle  = async () => {
         await signInWithGooglePopup(); 
    };

    const handleSubmit = async (event) => {
        event.preventDefault ();  

        try { 
            const {user} = await SignInAuthUserWithEmailAndPassword(email,password
            );   
            resetFormFields ();

        }catch (error) {
            switch(error.code){
            case ('auth/wrong-password'):
                alert ( 'Wrong password or email')
                break;
            case ('auth/user-not-found'):
                alert ('No account with this email')
                break;
            default:
                console.log (error);

            }
        }
        
    }
     const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields,[name]:value});
     };

    return(
        <SignUpContainer>
            <h2>Already have a account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label = 'Email' type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label = 'Password' type="password" required onChange={handleChange} name="password" value={password}/>
                <ButtonsContainer>  
                <Button  type='submit' >Sign In</Button>
                <Button type='button' buttonType={BUTTON_TYPES_CLASSES.google} onClick = {signInWithGoogle} >Google sign in</Button>
                    
                </ButtonsContainer>

            </form>

        </SignUpContainer>
 )
}   

export default SignInForm;