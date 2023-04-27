import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        emailId: "",
        password: "",
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://127.0.0.1:8080/user/create", user)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    console.log(user)
    return (
        <div className="form">
        <h1>Add New User</h1>
        <input type="text" placeholder="First Name"onChange={handleChange} name="firstName"/>
        <input type="text" placeholder="Last Name"onChange={handleChange} name="lastName"/>
        <input type="text" placeholder="E-mail"onChange={handleChange} name="emailId"/>
            <input type="text" placeholder="Password" onChange={handleChange} name="password" />
            <button onClick={handleClick}>Add</button>
                </div>
    )
}

export default Add