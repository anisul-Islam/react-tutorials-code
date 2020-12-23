import React,{useState} from 'react'
import './style.css'

export default function FORM1() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) =>{
        setName(e.target.value)
    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }

    const handleSubmit = (e) =>{
        console.log(name, email, password)
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
                        onChange={(e) => setPassword(e.target.value)}
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
