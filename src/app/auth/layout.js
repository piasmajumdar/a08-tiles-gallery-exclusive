import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import bgTiles from "../../../public/bg-tiles.jpg"

const layout = ({children}) => {
    return (
        <div className={`bg-[url(/bg-tiles.jpg)] bg-cover`}>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;