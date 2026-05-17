'use client'

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const UpdateProfileForm = ({user}) => {

    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleUpdate = async (formData) => {
        // console.log(formData)
        const { name, photo } = formData;
        // console.log(name, email, photo, password)

        const { data: res, error } = await authClient.updateUser({
            name: name, // required
            image: photo, // required
        });

        if (error) {
            toast.error(error.message)
        }
        if (res) {
            toast.success("Profile Information Updated Successful")
            router.push('/profile')
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(handleUpdate)} className='space-y-2'>

                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input
                        type="text"
                        className="input w-full"
                        placeholder="Name"
                        defaultValue={user?.name}
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <small className='text-red-500'>{errors.name.message}</small>}

                </fieldset>

                <fieldset className="fieldset">
                    <label className="label">Photo URL</label>
                    <input
                        type="text"
                        className="input w-full"
                        placeholder="photo"
                        defaultValue={user?.image}
                        {...register("photo", { required: "Photo URL is Required" })} />

                </fieldset>

                <button className="btn w-full text-white bg-green-700 rounded-lg mt-6"><FaUser /> Update Profile</button>

            </form>
        </div>
    );
};

export default UpdateProfileForm;