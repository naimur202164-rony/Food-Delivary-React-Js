import React, { useEffect, useState, useHistory } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
import { signInWithPopup } from 'firebase/auth';
const Home = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/delivaryfoods/')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);



    return (
        <div>
            {/* Part-1 */}
            <div>
                <div className="background-img ">
                    <div className="row my-5">
                        <div className="col-lg-6 mt-5 ">
                            <h1 className="text-center text-muted">
                                Healthy
                            </h1>
                            <h1 className="text-center text-muted"><span className="text-info">inside</span> , fresh</h1>
                            <h1 className="text-center text-muted">outside</h1>
                            <p className="text-center text-muted">We deliver healthy food that are ready <br />to eat. Just choose your own menu you like.</p>
                            <div className="text-center mb-5" >
                                <Button variant="light"> Learn More</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Part-2 */}
            <div className="container">
                <h4 className="text-muted text-center my-5">HOW IT WORKS</h4>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 text-center align-center my-3">
                        <img src="http://madang.kenzap.com/wp-content/themes/madang/images/meal.svg" />
                        <h2 className="text-muted">Choose Your Favorite</h2>
                        <p className="text-muted">Choose your favorite meals and order online or by phone. It's easy to customize your order.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 text-center align-center my-3">
                        <img src="http://madang.kenzap.com/wp-content/themes/madang/images/delivery.svg" />
                        <h2 className="text-muted">We Deliver Your Meals</h2>
                        <p className="text-muted">We prepared and delivered meals arrive at your door. Duis autem vel eum iriure dolor in hendrerit </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 text-center align-center my-3">
                        <img src="http://madang.kenzap.com/wp-content/themes/madang/images/meal.svg" />
                        <h2 className="text-muted">Choose Your Favorite</h2>
                        <p className="text-muted">Choose your favorite meals and order online or by phone. It's easy to customize your order.</p>
                    </div>
                </div>

            </div>
            {/* Part-3 */}
            <h2 className="text-muted text-center my-5" >OUR FEATURED DELIVARY SERVICES</h2>
            <div className="container">
                <div className="row">
                    {
                        foods?.map(food =>
                            <div class="col-sm-12 col-lg-4 my-2 ">
                                <div class="card">
                                    <div><img className="rounded mx-auto d-block mt-4" src={food.img} /></div>
                                    <div class="card-body">
                                        <h5 class="card-title text-muted">{food.name}</h5>
                                        <h4 class="card-title text-muted">{food.price}$</h4>

                                        <p class="card-text">{food.discription.slice(20)}</p>
                                        {/* <Link to={`/orderdetails/${food._id}`}>
                                            <button className="btn btn-success m-2">update</button>
                                        </Link> */}
                                        <Link to={`/myorder/${food._id}`}>
                                            <button className="btn btn-success m-2">Order Now</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* part-4 */}
            <div>
                <div className="background-img2 ">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12"></div>
                        <div className="col-lg-6 col-sm-12 my-5">
                            <div>
                                <h3 className="text-muted text-center my-5">Madang is Awesome!! Delicious meals that are healthy and fresh!</h3>
                                <p className="text-muted text-center my-5">Madang has fundamentally changed the way my family eat. Previously, dinner meant picking a restaurant on seamless and waiting for food to arrive. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero</p>
                                <button className="btn btn-info  my-5">Learn more</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* part-5 */}
            <div className="container my-5">
                <div><h2 className="text-muted text-center">OUR PASSIONATE <span className="text-danger">TEAM</span>  MEMBER</h2>
                    <p className="text-muted text-center">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <img className="rounded mx-auto d-block" src="http://madang.kenzap.com/wp-content/uploads/2016/11/member1.jpg" />
                        <h2 className="text-muted text-center">MARINKA <span className="text-danger">SULIS</span></h2>
                        <p className="text-muted text-center">Founder & CEO</p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <img className="rounded mx-auto d-block" src="http://madang.kenzap.com/wp-content/uploads/2016/11/member2.jpg" />
                        <h2 className="text-muted text-center">ROY COLEMAN</h2>
                        <p className="text-muted text-center">Chief</p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <img className="rounded mx-auto d-block" src="http://madang.kenzap.com/wp-content/uploads/2016/11/member3.jpg" />
                        <h2 className="text-muted text-center">TERESA <span className="text-info">MAYER</span> </h2>
                        <p className="text-muted text-center">Marketing Director</p>
                    </div>
                </div>
            </div>
            {/* part-6 */}
            <div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <img className="img-fluid ms-5 ps-5" src="http://madang.kenzap.com/wp-content/uploads/2016/11/mobile-phone-big.png" />
                    </div>
                    <div className="col-lg-6 col-sm-12 my-5">
                        <div>
                            <h3 className=" text-info ms-2 my-3">Download the app</h3>
                            <h1 className="text-muted ms-2 my-3">Choose. Eat. Enjoy</h1>
                            <p className="text-muted ms-2 my-4">Nam liber tempor csoluta nobis eleifnd option congue nihil imperdiet doming iquod mazim placerat facer possim assum lorem ipsum dolor possim assum lorem ipsum dolor.</p>
                            <div className="mx-2 ms-4 ">
                                <img className="mx-2" src="http://madang.kenzap.com/wp-content/themes/madang/images/app-store.png" />
                                <img className="mx-2" src="http://madang.kenzap.com/wp-content/themes/madang/images/google-play.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
