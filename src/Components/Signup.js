import React,{useState} from "react";
import {Link} from 'react-router-dom';
import {authentication, database} from '../Config/Config'

/*props is nothing but a session variable to store the data*/
export const Signup = (props) => {

    const [fullName, setFullName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [registerationError, setRegisterationError]=useState('');
    
    /*After Creating Credentials of User Create users database*/
    const handleRegister=(e)=>{
        e.preventDefault();
        authentication.createUserWithEmailAndPassword(email, password).then((cred)=>{
            database.collection('users').doc(cred.user.uid).set({
                FullName: fullName,
                Email: email,
                Password: password
            }).then(()=>{
                setFullName('');
                setEmail('');
                setPassword('');
                setRegisterationError('');
                props.history.push('/login');
            }).catch(error=>setRegisterationError(error.message))
        })
    }

    return (
        <div className='container'>
        <br></br>
        <br></br>
        <h2>REGISTER HERE</h2>
        <br></br>

        <form autoComplete="off" className='form-group'
        onSubmit={handleRegister}>
            <label>Enter Full Name</label>
            <input type="text" className='form-control'
                required onChange={(e)=>setFullName(e.target.value)}
                value={fullName}
            />
            <br></br>
            <label>Enter Email</label>
            <input type="email" className='form-control'
                required onChange={(e)=>setEmail(e.target.value)}
                value={email}
            />
            <br></br>
            <label>Enter Password</label>
            <input type="password" className='form-control'
                required onChange={(e)=>setPassword(e.target.value)}
                value={password}
            />
            <br></br>
            <button type="submit" className='btn btn-success mybtn2'>
               REGISTER
            </button>
        </form>
        
        {registerationError&&<div className='error-msg'>
                {registerationError}
                </div>}
           
           <span>Already have an account? Login
           <Link to="login"> here</Link></span>
       </div>
    )
}