import React, { useState } from 'react';

const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState('')
    const hanldeEmail = (e) => {
        e.preventDefault()
        setAdminEmail(e.target.value)
        e.target.value = ""

    }
    const handlSubmit = (e) => {
        const user = { adminEmail }
        fetch(`https://murmuring-inlet-82514.herokuapp.com/users/admin`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("add successfully")
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handlSubmit}>
                <input type="email" onBlur={hanldeEmail} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;