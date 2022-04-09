import React from 'react';
import useFirebase from '../../Hooks/useFirebase.js';

const Login = () => {
    const{signInWithGoogle}=useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin:"20px"}}>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
            <form action="" >
                <input type="email"  placeholder='Your Email'/><br />
                <input type="password" placeholder='Your Password' /> <br />
                <input type="submit" value='Login' />

            </form>
        </div>
    );
};

export default Login;