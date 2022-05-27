function Faq() {
    return (
        <div className="w-50 flex flex-col items-center m-10">
            <div class="collapse collapse-plus ">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    Click me to show/hide content
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div class="collapse collapse-plus">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    Click me to show/hide content
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div class="collapse collapse-plus">
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