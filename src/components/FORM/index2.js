import React,{useState} from 'react'
import './style.css'

export default function FORM2() {

   const [user, setUser] = useState({
       name : '',
       email : '',
       password : ''
   })

   const {name, email, password} = user

    const handleNameChange = (e) =>{
        setUser({name : e.target.value, email, password});
    }

    const handleEmailChange = (e) =>{
        setUser({name, email : e.target.value, password});
    }
    const handlePasswordChange = (e) =>{
        setUser({name, email, password: e.target.value});
    }

    const handleSubmit = (e) =>{
        console.log(user)
        e.preventDefault();
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name : </label>
                    <input
                        onChange={handleNameChange}
                        value={name}
                        type="text"
                        name="name"
                        id="name"
                        required />
                </div>
                <div>
                    <label>Email : </label>
                    <input
                        onChange={handleEmailChange}
                        value={email}
                        type="email"
                        name="email"
                        id="email"
                        required />
                </div>
                <div>
                    <label>Password : </label>
                    <input
                        onChange={handlePasswordChange}
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        required />
                </div>
                <button type="submit">Register</button>
            </form>

           
        </div>
    )
}
