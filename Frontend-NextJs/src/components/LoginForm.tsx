import { doSocialLogin } from "@/app/actions";
import { Button } from "./ui/button";


const LoginForm = () => {
    return (
        <form action={doSocialLogin}>
            
            <Button variant="outline" type="submit" name="action" value="google" className="flex items-center my-2 px-4 py-2 rounded-md text-base bg-white text-black border border-black-600 shadow transition-transform transform hover:scale-105"
     >
            <img
            src="google.png" // Path relative to the public directory
            alt="Logo"
            width={25}
            height={25}
        />
            &nbsp;&nbsp;Sign In with Google
            </Button>
        </form>
    );
};

export default LoginForm;