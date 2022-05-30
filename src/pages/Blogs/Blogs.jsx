import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-base-200 w-1/2 mx-auto rounded-lg p-5 m-5'>
                <h1 className='text-2xl'>How will you improve the performance of a React Application?</h1>
                <p className='bg-base-100 p-2 rounded-lg my-2'>Performance of react application can be improved by - <br />
                    <ol>
                        <li>1) By less using props drilling</li>
                        <li>2) By controlling re-rendering</li>
                        <li>3) Using lazy loading</li>
                    </ol></p>
            </div>
            <div className='bg-base-200 w-1/2 mx-auto rounded-lg p-5 m-5'>
                <h1 className='text-2xl'>What are the different ways to manage a state in a React application?</h1>
                <p className='bg-base-100 p-2 rounded-lg my-2'>There are many ways to manage state​s in React- <br />
                    1) Hooks <br />
                    2) Context API <br />
                    3) Apollo Link State <br /></p>
            </div>
            <div className='bg-base-200 w-1/2 mx-auto rounded-lg p-5 m-5'>
                <h1 className='text-2xl'>How does prototypical inheritance work?</h1>
                <p className='bg-base-100 p-2 rounded-lg my-2'>An javascript can inherit the property and method of another object.</p>
            </div>
            <div className='bg-base-200 w-1/2 mx-auto rounded-lg p-5 m-5'>
                <h1 className='text-2xl'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <p className='bg-base-100 p-2 rounded-lg my-2'>Because react use re-rendering the dom tree.It compares the state with previous state.</p>
            </div>
           
            <div className='bg-base-200 w-1/2 mx-auto rounded-lg p-5 m-5'>
                <h1 className='text-2xl'>What is a unit test? Why should write unit tests?</h1>
                <p className='bg-base-100 p-2 rounded-lg my-2'>Unit testing means to test a small unit of code.We use it because it helps to control the data flow.</p>
            </div>
        </div>
    );
};

export default Blogs;