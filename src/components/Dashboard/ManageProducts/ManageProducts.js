import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './mp.css'
const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const { user, isLoading } = useAuth()

    useEffect(() => {
        fetch('https://murmuring-inlet-82514.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [products])


    if (isLoading) {
        return <Spinner></Spinner>
    }
    const handleDelete = id => {
        const permistion = window.confirm("are You Want Delete?")

        if (permistion) {
            fetch(`https://murmuring-inlet-82514.herokuapp.com/products/${id}`, { method: "delete" }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaingServices = products.filter(service => service._id !== id)
                        setProducts(remaingServices)

                    }
                })

        } else {
            alert("Not Deleteded!");
        }

    }



    return (
        <div>
            <div className="table-responsive-sm ms-5 mar  manageService" >
                <table className="table table-sm table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">SN</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">title</th>
                            <th scope="col">image</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => (
                                <tr>
                                    <th >{index + 1}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.shoreTitle.slice(0, 20)}</td>
                                    <td>
                                        <img src={product.img} width="100px" alt="" />
                                    </td>
                                    <td >
                                        <button onClick={() => handleDelete(product._id)} className="btn btn-warning mt-2">delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default ManageProducts;