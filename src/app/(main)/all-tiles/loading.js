import React from 'react';

const loader = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <span className="loading loading-bars loading-xl w-[200px]"></span>
        </div>
    );
};

export default loader;