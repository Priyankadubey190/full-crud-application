import {useState} from "react";
import "./signup.css";
export const Signup = ()=>{
 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        const payload = {
            email,
            password
        }
       
        fetch("http://localhost:8080/signup", {
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log("signErr",err))
    }

    return(
        <div className="container">
            <div>
                <input type="text" placeholder="Enter your name"/>
                <input type="email" placeholder="Enter your email" onChange={(e) =>setEmail(e.target.value)}/>
                <br />
                <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <button className="btn" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}