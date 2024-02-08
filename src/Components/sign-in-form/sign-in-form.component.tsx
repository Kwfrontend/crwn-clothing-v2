import { useState,FormEvent,ChangeEvent } from "react";



import { useDispatch } from "react-redux";


import FormInput from "../form-input/form-input.component.tsx";
import Button, {BUTTON_TYPES_CLASSES} from "../button/button.component.tsx";



import {SignUpContainer,ButtonsContainer} from './sign-in-form.styles.tsx';
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action.ts";
 

const defaultFormFields = {
    email:'',
    password:'',
}

const SignInForm = ()  => { 

     const [formFields, setFormFields] = useState (defaultFormFields);
     const {email, password} = formFields;
     const dispatch = useDispatch();  

     const resetFormFields = () => {
        setFormFields(defaultFormFields);
     }

     const signInWithGoogle  = () => {
         dispatch (googleSignInStart());
    };

    const handleSubmit =  (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault ();  

        try { 
            dispatch (emailSignInStart(email,password));
            resetFormFields();

        } catch (error) {
            console.log (error);
        }
    }
     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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