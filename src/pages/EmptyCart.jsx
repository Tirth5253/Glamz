import { Link } from "react-router-dom";


const EmptyCart = () => {
    return (
    
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5" style={{color:'#ff33b8'}}>Your Cart is Empty</h4>
            <Link to="/" className="btn   mx-4" style={{border:'1px solid #ff33b8',color:'#ff33b8'}}>
              <i className="fa fa-arrow-left" ></i> Continue Shopping
            </Link>
          </div>
        </div>
      
    );
  };
  export default EmptyCart;