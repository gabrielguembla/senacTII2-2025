
import './loginPage.css';
import { useState, useEffect, useRef } from 'react';

function LoginPage() {

    const loginInput = useRef();
    const passwordInput = useRef();

    const [user, setUser] = useState(null);

    function handleLogin(event) {
        event.preventDefault();
        
        setUser({
            login: loginInput.current.value,
            password: passwordInput.current.value

        });

    }

    return (
        <section>
            <form action="">
                <label htmlFor="login">Login</label>
                <input type="text" name="login" id="login" placeholder="Type your login..." ref={loginInput} />

                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" placeholder="Type your password..." ref={passwordInput} />

                <button type="submit" onClick={handleLogin}>Log In</button>

                { user && <p>Welcome, {user.login}!</p> }


            </form>


        </section>


    )
}


export default LoginPage;