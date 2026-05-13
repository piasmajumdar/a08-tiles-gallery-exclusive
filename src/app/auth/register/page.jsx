import Link from 'next/link';
import React from 'react';

const SignUpPage = () => {
    return (
        <div className='h-screen flex justify-center items-center mx-auto'>
            <div className='bg-white rounded-lg shadow-2xl p-6 sm:w-sm space-y-2'>
                <h2 className='text-3xl text-center'>Please Login!</h2>
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input w-full" placeholder="Name" />
                </fieldset>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input w-full" placeholder="Email" />
                </fieldset>
                <fieldset className="fieldset">
                    <label className="label">Password</label>
                    <input type="password" className="input w-full" placeholder="Password" />
                </fieldset>
                <button className="btn btn-neutral mt-4 w-full">Login</button>
                <h2>Already have an account? <Link href={'/auth/login'} className='text-blue-800'>Login</Link></h2>
            </div>
        </div>
    );
};

export default SignUpPage;