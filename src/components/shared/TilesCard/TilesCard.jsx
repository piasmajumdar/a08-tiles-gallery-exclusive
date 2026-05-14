import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TilesCard = ({tile}) => {
    // console.log(tile)
    const {title, image, description, category, price} = tile;
    return (
        <div className="card bg-base-100 hover:scale-105 hover:shadow-amber-700 hover:shadow-md shadow-sm">
            <figure className='h-[200px]'>
                <Image
                    src={image[0]}
                    alt={title}
                    height={400}
                    width={400}
                    className='w-full h-full'/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                <p className='font-bold text-lg'>${price}</p>
                <div className="card-actions">
                    <Link href={`/tile-details/${tile.id}`} className="btn w-full hover:border-amber-700 rounded-full">View Details</Link>
                </div>
            </div>
        </div>

    );
};

export default TilesCard;