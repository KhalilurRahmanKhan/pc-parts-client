import React from 'react';
import Banner from '../../components/Banner/Banner';
import Faq from '../../components/Faq/Faq';
import Footer from '../../components/Footer/Footer';
import Review from '../../components/Review/Review';
import Summary from '../../components/Summary/Summary';
import Tools from '../../components/Tools/Tools';
import Vision from '../../components/Vision/Vision';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 place-items-center m-10	">
                <Tools></Tools>
                <Tools></Tools>
                <Tools></Tools>
            </div>
            <Summary></Summary>
            <Review></Review>
            <Vision />
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;