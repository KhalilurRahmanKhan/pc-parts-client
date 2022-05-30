function Summary() {
    return (
        <div className="stats shadow flex m-20 bg-violet-500 text-white">

            <div className="stat ">
                <div className="stat-figure text-secondary ">
                    <i class="fa-solid fa-computer  text-5xl"></i>
                </div>
                <div className="stat-title">Products</div>
                <div className="stat-value">3000</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <i class="fa-solid fa-users text-5xl"></i>
                </div>
                <div className="stat-title">Users</div>
                <div className="stat-value">4,200</div>
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <i class="fa-solid fa-building text-5xl"></i>
                </div>
                <div className="stat-title">Company</div>
                <div className="stat-value">200</div>
            </div>


        </div>
    );
}

export default Summary;