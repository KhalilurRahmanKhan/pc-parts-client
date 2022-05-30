function MyPortfolio() {
    return (
        <div className="bg-base-300 w-1/2 mx-auto rounded-lg p-10 m-10">
            <div className='flex bg-base-200 p-5 rounded m-2'>
                <p className='w-[20%]'><b>Name</b></p>
                <p className='w-[80%]'>Khalilur Rahman Khan</p>
            </div>
            <div className='flex bg-base-200 p-5 rounded m-2'>
                <p className='w-[20%]'><b>Email</b></p>
                <p className='w-[80%]'>khanjahid373@gmail.com</p>
            </div>
            <div className='flex bg-base-200 p-5 rounded m-2'>
                <p className='w-[20%]'><b>Education</b></p>
                <p className='w-[80%]'><b>Bachelor of Computer Science & Engineering (BCSE)</b><br />
                    Institution : International University of Business Agriculture and Technology <br />
                    Passing Year: 2020(Fall) <br /> <br />
                    <b>
                    Higher Secondary school Certificate</b> <br />
                    Institution : Abdul Kadir Molla City College <br />
                    Department : Science <br />
                    Passing year : 2016 <br />
                    Board : Dhaka <br /><br />
                

                   <b> Secondary School Certificate</b> <br />
                    Institution : Panchdona Sir K.G. Gupta High School <br />
                    Department : Science <br />
                    Passing year : 2014 <br />
                    Board : Dhaka <br />
                    Result : 5.00</p>
            </div>
            <div className='flex bg-base-200 p-5 rounded m-2'>
                <p className='w-[20%]'><b>Skills</b></p>
                <p className='w-[80%]'><ool>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    </ool></p>
            </div>
            <div className='flex bg-base-200 p-5 rounded m-2'>
                <p className='w-[20%]'><b>My projects</b></p>
                <p className='w-[80%]'>
                    <ol>
                        <li className="text-[blue]"><a href="https://book-stock-edae9.web.app/" target="_blank">Book Stock</a></li>
                        <li className="text-[blue]"><a href="https://learn-with-john.web.app/" target="_blank">Learn With John</a></li>
                        <li className="text-[blue]"><a href="https://star-convention-center.netlify.app/" target="_blank">Star Convention Center</a></li>
                    </ol>
                </p>
            </div>


        </div>
    );
}

export default MyPortfolio;