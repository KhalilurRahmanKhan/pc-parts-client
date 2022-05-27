function Faq() {
    return (
        <div className="w-2/3 mx-auto m-10">
            <h1 class="text-3xl m-10 text-center">Frequently Asked Question</h1>
            <div class="collapse collapse-plus w-full bg-violet-500 border-2  ">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    Click me to show/hide content
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div class="collapse collapse-plus w-full bg-violet-500 border-2">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    Click me to show/hide content
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div class="collapse collapse-plus w-full bg-violet-500 border-2 border">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    Click me to show/hide content
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
}

export default Faq;