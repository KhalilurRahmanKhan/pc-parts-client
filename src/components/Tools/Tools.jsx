import { Link } from 'react-router-dom';

function Tools({tool}) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={tool.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{tool.name}</h2>
                <p>{tool.description}</p>
                <small><b>Minimum order quantity : </b> {tool.minQuantity}</small>
                <small><b>Available quantity : </b>{tool.quantity}</small>
                <small><b>Price per unit: </b>{tool.price}</small>
                <div className="card-actions">
                    <Link to={`purchase/${tool._id}`} className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
}

export default Tools;