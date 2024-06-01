import React, { useState } from "react";
import axios from "axios";

const Taskform = () => {
    const [data, setData] = useState({
        empName: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            empName: data.empName,

        };
        axios.post("https://localhost:7263/api/Employess", userData).then((response) => {
            console.log(response.status, response.data.token);
        });
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Name
                    <input
                        type="text"
                        name="empName"
                        value={data.empName}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Taskform