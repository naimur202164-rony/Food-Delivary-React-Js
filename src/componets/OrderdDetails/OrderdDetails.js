import React, { useState, useEffect } from 'react';

const OrderdDetails = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/OrderdDetails')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <div><h1 className="text-muted text-center"> Your <span className="text-info">Orders</span> </h1></div>
            <div className="row">
                {
                    orders.map(order =>
                        <div className="col-lg-6">
                            <div class="card mb-3" style={{ "max - width": "540px" }}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="..." class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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