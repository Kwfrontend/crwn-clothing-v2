import SignUpForm from "../../Components/sign-up-form/sign-up-form.component.tsx";
import SignInForm from "../../Components/sign-in-form/sign-in-form.component.tsx";
import {AuthenticationContainer} from "./authentication.styles.tsx";

const Authentication = () => {

    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    );
};

export default Authentication;