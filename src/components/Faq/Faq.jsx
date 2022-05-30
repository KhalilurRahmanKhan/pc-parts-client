function Faq() {
    return (
        <div className="w-2/3 mx-auto m-10 text-white">
            <h1 className="text-3xl m-10 text-center">Frequently Asked Question</h1>
            <div className="collapse collapse-plus w-full bg-violet-500 border-2  ">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    How to Purchase a product?
                </div>
                <div className="collapse-content">
                    <p className="bg-violet-400 rounded-lg p-2">First of all, choose a product and click buy now button for further process.</p>
                </div>
            </div>
            <div className="collapse collapse-plus w-full bg-violet-500 border-2">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Can I buy without login?
                </div>
                <div className="collapse-content">
                    <p className="bg-violet-400 rounded-lg p-2">No you can not. You need to log in to buy a product.</p>
                </div>
            </div>
            <div className="collapse collapse-plus w-full bg-violet-500 border-2 border">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Why can't i choose the quantity as my wish?
                </div>
                <div className="collapse-content">
                    <p className="bg-violet-400 rounded-lg p-2">This is the rule here. you need to choose at least min  quantity and at most avilable quantity.</p>
                </div>
            </div>
        </div>
    );
}

export default Faq;