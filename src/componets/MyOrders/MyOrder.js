import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, } from 'react-router';
import { useForm } from "react-hook-form";
import useFirebase from './../../hooks/useFirebase';

const MyOrder = () => {
    const { item } = useParams();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [orders, setOrders] = useState([]);
    const { user } = useFirebase()
    useEffect(() => {
        fetch(`http://localhost:5000/delivaryfoods`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    const EaxctItem = orders?.filter(food => food._id == item);
    // console.log(EaxctItem)
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
                    <div>
                        <h2>Order Now</h2>
                        <div className="mx-auto">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <input type="text" defaultValue={user.displayName} {...register("email")} placeholder="Enter Your Name" />
                                <br />
                                <input type="email" defaultValue={user.email} {...register("email")} placeholder="Enter Your Email" />
                                <br />
                                <input type="password" defaultValue="test" {...register("email")} placeholder="Enter your Password" />
                                <br />

                                <input {...register("exampleRequired", { required: true })} placeholder="phone" />

                                {errors.exampleRequired && <span>This field is required</span>}
                                <br />
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default MyOrder;