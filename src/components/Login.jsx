import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
// import { auth } from 'firebase'




const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function login(e){
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push('/')
        })
        .catch(e=>alert(e.message))
    }
    function register(e){
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push('/')
        })
        .catch(e=>alert(e.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img src="https://pluspng.com/img-png/amazon-logo-vector-png-amazon-logo-vector-512.png" alt="" className='login_logo'/>
            </Link>

            <div className="login_container">
                <h1>Sign-In</h1>
                <form action="">
                <h5>Email</h5>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button type='submit' className='login_signin' onClick={login}>Sign in</button>


                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button className='login_register' onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
