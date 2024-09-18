import { Image } from "../SingleComponents";

function CardComponent () {
    return (
        <div className="CardComponent">
            <div className="card" style={{ width: '18rem' }}>
                <Image />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="go-somewhere" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;