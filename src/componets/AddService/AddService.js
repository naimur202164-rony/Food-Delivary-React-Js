import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch("https://polar-ocean-70274.herokuapp.com/uploadProducts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };
    return (
        <div>
            <h2 className=" text-muted text-center my-5">Wellcome To Our Add Service</h2 >
            <h1 className="text-muted text-center my-4">Pls Order Sir</h1>
            <form className="text-center my-5" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                    className="p-2 m-2"
                    {...register("name")}
                    required
                    placeholder="Product name"
                />
                <br />
                {/* include validation with required or other standard HTML validation rules */}
                <input
                    className="p-2 m-2"
                    type="number"
                    {...register("price", { required: true })}
                    required
                    placeholder="Price"
                />
                <br />
                <input
                    className="p-2 m-2"
                    type="text"
                    {...register("description", { required: true })}
                    required
                    placeholder="Description"
                />
                {/* <input type="file"
                    className="p-2 m-2"
                    {...register("image")}
                    required
                    placeholder="image"
                /> */}

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className="p-1 mt-3 btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddService;