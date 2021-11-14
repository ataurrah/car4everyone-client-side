import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
// import "./details.css"
const Details = () => {
    const [serviceDetails, setServiceDetails] = useState([])
    const { user } = useAuth()
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        let url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])

    const onSubmit = data => {

        const newData = {
            clientName: user.displayName,
            productName: serviceDetails.productName,
            emial: user.email,
            address: data.Address,
            price: serviceDetails.price,
            approved: "pending"
        }
        console.log(newData)
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newData)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("order send successfully,thank you")
                    reset()
                }
            })
    };

    return (
        <div>
            <div className="row row-cols-sm-1 col-12 row-cols-md-2 g-4">
                <div className="col">
                    <img src={serviceDetails.img} className='ps-1 w-100' alt="" />
                    <h4>{serviceDetails.productName}</h4>
                    <p>
                        {serviceDetails.Description}
                    </p>

                </div>
                <div className="col mt-5 mb-5 border">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input disabled value={user.displayName} placeholder="place Name" {...register("productName")} /> <br /> <br />
                        <input disabled value={user.email} placeholder="short Title" {...register("shoreTitle")} /> <br /> <br />
                        <input placeholder="Address" {...register("Address")} /> <br /> <br />
                        <input disabled value={serviceDetails.price} placeholder="cost" {...register("price")} /> <br /> <br />


                        <input type="submit" />
                    </form>


                </div>
            </div>



        </div>
    );
};

export default Details;