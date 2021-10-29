import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, } from 'react-router';
import useFirebase from './../../hooks/useFirebase';

import { Link } from 'react-router-dom';
const MyOrder = () => {
    const { item } = useParams();

    const [orders, setOrders] = useState([]);
    const { user } = useFirebase()
    useEffect(() => {
        fetch(`http://localhost:5000/delivaryfoods`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);


    const EaxctItem = orders?.filter(food => food._id == item);
    // Posting Data to server
    const handleButton = () => {
        // console.log(data);
        fetch("http://localhost:5000/addProducts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(EaxctItem[0]),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };
    return (
        <div className="container">


            <div class="row">
                <div className="col-lg-7 col-sm-12">
                    <div className="details my-5  justify-content-center">

                        <h2 className="text-info">{EaxctItem[0]?.name}</h2>
                        <hr />
                        <h3><img className="img-fluid img-rounded" src={EaxctItem[0]?.img} /></h3>
                        <h3 className="text-muted">{EaxctItem[0]?.type}</h3>
                        <h4 className="text-muted">Price : {EaxctItem[0]?.price}$</h4>
                        <p>{EaxctItem[0]?.discription}</p>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-12 my-5" >
                    <div className="my-5">
                        <h2>Order Now</h2>
                        <div className="mx-auto my-5">
                            <button onClick={handleButton} className="btn btn-info">Order Now</button>
                            <Link to="/orderdetails"> <button className="btn btn-info">My-orders</button>
                            </Link>

                        </div>
                    </div>
                </div>


            </div>



        </div >
    );
};

export default MyOrder;