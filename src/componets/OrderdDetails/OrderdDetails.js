import React, { useState, useEffect } from 'react';
import useFirebase from './../../hooks/useFirebase';

const OrderdDetails = () => {
    const [orders, setOrders] = useState([]);
    const [isDelete, setIsDelete] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/OrderdDetails')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDelete]);
    const handleDeleteProduct = (id) => {
        console.log(id);

        fetch(`http://localhost:5000/deletitems/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount) {
                    setIsDelete(true);
                } else {
                    setIsDelete(false);
                }
            });
    }
    return (
        <div>
            <div><h1 className="text-muted text-center"> Your <span className="text-info">Orders</span><br />
            </h1></div>
            <div className="row">
                {
                    orders.map(order =>
                        <div className="col-lg-6 col-sm-12 my-2 p-2">
                            <div className="card mb-3" style={{ "max - width": "540px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={order.img} className="img-fluid rounded-start mt-3  ms-2" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 className="card-title">{order.name}</h5>
                                            <p className="card-text">{order.discription}</p>
                                            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            <button onClick={() => handleDeleteProduct(order._id)} className="btn btn-info">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div >
    );
};

export default OrderdDetails;