
import "../css/product.css";


const Product = () => {
  return (
    <>
      <section className="section1">
        <div className="section-content display">
        <h2>product</h2>
         <div className="row">

               <div className="col-md-12 col-lg-3 mb-5 mb-lg-0 card">
            <div className='anime'>
                <span>+</span>
               </div>
                <div className="img">
                    <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" />
                </div>
                <h3 className="product-title">Nordic Chair</h3>
                    <strong className="product-price">$50.00</strong>
            </div>





            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0 card">
            <div className='anime'>
                <span>+</span>
               </div>
                <div className="img">
                    <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" />
                </div>
                <h3 className="product-title">Nordic Chair</h3>
                    <strong className="product-price">$50.00</strong>
            </div>

            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0 card">
               <div className='anime'>
                <span>+</span>
               </div>
                <div className="img">
                    <img src="https://themewagon.github.io/furni/images/product-2.png" alt="" />
                </div>
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>
            </div>

            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0 card">
            <div className='anime'>
                <span>+</span>
               </div>
                <div className="img">
                    <img src="https://themewagon.github.io/furni/images/product-3.png" alt="" />
                </div>
                <h3 className="product-title">Ergonomic Chair</h3>
                    <strong className="product-price">$43.00</strong>
            </div>
            
            
         </div>
        </div>

    </section>
    </>
  )
}

export default Product