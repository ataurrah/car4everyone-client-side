// import { stringify } from '@firebase/util';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("successfully Added")
                    reset()
                }
            })
    };

    return (
        <div className="container">
            <div className="row row-cols-sm-1 col-12 row-cols-md-2 g-4">
                <div className="col">
                   
                

                </div>
                <div className="col mt-5 mb-5 border my-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="place Name" {...register("productName")} /> <br /> <br />
                        <input placeholder="short Title" {...register("shoreTitle")} /> <br /> <br />
                        <input placeholder="Description" {...register("Description")} /> <br /> <br />
                        <input placeholder="cost" {...register("price")} /> <br /> <br />
                        <input placeholder="img url" {...register("img")} /> <br /> <br />

                        <input type="submit" />
                    </form>


                </div>
            </div>



        </div>
    );
};

export default AddProduct;