import React from 'react';
import Banner from '../../components/Banner/Banner';
import Faq from '../../components/Faq/Faq';
import FlashSale from '../../components/FlashSale/FlashSale';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Review from '../../components/Review/Review';
import Summary from '../../components/Summary/Summary';
import Tools from '../../components/Tools/Tools';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner></Banner>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 place-items-center my-10	">
                <Tools></Tools>
                <Tools></Tools>
                <Tools></Tools>
            </div>
            <Summary></Summary>
            <Review></Review>
            <FlashSale></FlashSale>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;