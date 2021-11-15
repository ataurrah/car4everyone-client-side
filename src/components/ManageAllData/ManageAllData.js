import React, { useEffect, useState } from 'react';

const ManageAllData = () => {

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://murmuring-inlet-82514.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [orders])

    const handleDelete = id => {
        const permition = window.confirm("are you want to delete?")
        if (permition) {
            fetch(`https://murmuring-inlet-82514.herokuapp.com/orders/${id}`, { method: "delete" })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("delete successfully")
                        const remainningOrders = orders.filter(order => order._id !== id)
                        setOrders(remainningOrders)
                    }
                })

        }

    }
    const handleApproved = id => {
        alert(id)

        fetch(`https://murmuring-inlet-82514.herokuapp.com/orders/${id}`, { method: "put" })



    }

    return (
        <div>
            <h1>Manage alll data</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Adress</th>
                        <th scope="col">Approved</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{order.clientName}</td>
                                <td>{order.emial}</td>
                                <td>{order.address}</td>
                                <td>
                                    {order.approved == 'pending' ?
                                        <spna className="text-danger">pending...</spna> : <span className="text-success">Approved</span>
                                    }
                                </td>
                                <td>
                                    <button className="btn btn-danger " onClick={() => { handleDelete(order._id) }}>Delete</button>

                                    <button onClick={() => { handleApproved(order._id) }} className="btn btn-success">Approv</button>
                                </td>
                            </tr>
                        </>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageAllData;