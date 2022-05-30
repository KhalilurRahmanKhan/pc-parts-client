function Faq() {
    return (
        <div className="w-2/3 mx-auto m-10 text-white">
            <h1 className="text-3xl m-10 text-center">Frequently Asked Question</h1>
            <div className="collapse collapse-plus w-full bg-violet-500 border-2  ">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Click me to show/hide content
                </div>
                <div className="collapse-content">
                    <p className="bg-violet-400 rounded-lg p-2">tabIndex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div className="collapse collapse-plus w-full bg-violet-500 border-2">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Click me to show/hide content
                </div>
                <div className="collapse-content">
                    <p className="bg-violet-400 rounded-lg p-2">tabIndex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div className="collapse collapse-plus w-full bg-violet-500 border-2 border">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Click me to show/hide content
                </div>
                <div className="collapse-content">
                    <p className="bg-violet-400 rounded-lg p-2">tabIndex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
}

export default Faq;