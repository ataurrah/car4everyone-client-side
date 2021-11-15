// import { stringify } from '@firebase/util';
import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../footer/Footer';
import Header from '../header/Header';

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
        <div>
            <Header/>
            <div className="row row-cols-sm-1 col-12 row-cols-md-2 g-4">
                <div className="col">
                   
                

                </div>
                <div className="col">
                    <h3>ADD PRODUCT</h3>
                    <form className=" my-3 bg-success" onSubmit={handleSubmit(onSubmit)}>
                        <input className=" mt-5" placeholder="Product Name" {...register("productName")} /> <br /> <br />
                        <input placeholder="short Title" {...register("shoreTitle")} /> <br /> <br />
                        <input placeholder="Description" {...register("Description")} /> <br /> <br />
                        <input placeholder="$ price" {...register("price")} /> <br /> <br />
                        <input placeholder="img url" {...register("img")} /> <br /> <br />

                        <input className=" mb-3" type="submit" />
                    </form>


                </div>
            </div>


<Footer></Footer>
        </div>
    );
};

export default AddProduct;