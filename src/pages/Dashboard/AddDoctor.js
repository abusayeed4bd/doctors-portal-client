import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
     const {
    register,
    formState: { errors },
    handleSubmit, reset
  } = useForm();
  const {data:services, isLoading} = useQuery('service',()=> fetch('http://localhost:5000/service').then(res=>res.json()) )


const imageStorageKey = 'a774bbfdec3a34a0260065f0872550ae';
const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url,{
        method:'POST',
        body: formData,
    })
    .then(res => res.json())
    .then(result => {
        
        if(result.success){
            const img = result.data.url;
            const doctor = {
                name: data.name,
                email: data.email,
                specialty: data.specialty,
                img: img
            }
            
            fetch('http://localhost:5000/doctor',{
                method: 'POST',
                headers:{
                    "content-type":"application/json",
                    authorization :  `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then(inserted => {
                if(inserted.insertedId){
                    toast.success('Doctor added successfully');
                    reset();
                }else{
                    toast.error('Failed to added Doctor');
                }
            })
        }
    })
  };
  if(isLoading){
    return <Loading></Loading>
  }
    return (
        <div>
            <h2 className="text-3xl text-accent">Add  a new Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Name</span>
              </label>
            <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            {/* email */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please enter a valid email",
                  },
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* specialty */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Specialty</span>
              </label>
              <select {...register('specialty')} class="select input-bordered w-full max-w-xs">
                
                {
                    services.map(service => <option value={service.name} key={service._id}>{service.name}</option>)
                }
                
              </select>
            </div>
            

            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Image</span>
              </label>
            <input
                type="file"
                
                className="input  w-full max-w-xs"
                {...register("image", {
                  required: {
                    value: true,
                    message: "image is required",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            
            <input
              type="submit"
              className="btn btn-accent w-full max-w-xs text-white"
              value="Add"
            />
          </form>
        </div>
    );
};

export default AddDoctor;