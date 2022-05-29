import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Faq from '../../components/Faq/Faq';
import Footer from '../../components/Footer/Footer';
import Review from '../../components/Review/Review';
import Summary from '../../components/Summary/Summary';
import Tools from '../../components/Tools/Tools';
import Vision from '../../components/Vision/Vision';

const Home = () => {
    const [tools,setTools] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/product")
        .then(res=>res.json())
        .then(data=>setTools(data))
      },[tools]);
    return (
        <div>
            <Banner></Banner>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 place-items-center m-10	">
                {
                    tools.map(tool=><Tools key={tool._id} tool={tool}></Tools>)
                }
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