import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '..//build/css/Tienda.css';


const Tienda = () => {
  return (
    <div className='contenido'>
        <div className="featured-events-title text-center mb-4">
            <h1>TIENDA</h1>
        </div>
    
    <div>
      <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 show-card">
                        <img src='https://store.acmilan.com/cdn/shop/files/775052-A82_01.png?v=1733386048&width=500' className="card-img-top" alt="Show 1"/>
                        <div className="card-body">
                            <h5 className="card-title"> MILAN AUTHENTIC 125th ANNIVERSARY JERSEY
                            <br/>$106.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 show-card">
                        <img src="https://store.acmilan.com/cdn/shop/files/775061-B64_01_400x.png?v=1733386349" className="card-img-top" alt="Show 2" />
                        <div className="card-body">
                            <h5 className="card-title"> MILAN AUTHENTIC 125th ANNIVERSARY SHORTS
                            <br/>$58.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 show-card">
                        <img src="https://store.acmilan.com/cdn/shop/files/775052-A93_01_400x.png?v=1733386164" className="card-img-top" alt="Show 3" />
                        <div className="card-body">
                            <h5 className="card-title"> MILAN AUTHENTIC GOALKEEPER 125th ANNIVERSARY JERSEY
                            <br/>$106.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 show-card">
                        <img src="https://store.acmilan.com/cdn/shop/files/775061-B63_01_400x.png?v=1733386278" className="card-img-top" alt="Show 4" />
                        <div className="card-body">
                            <h5 className="card-title"> MILAN AUTHENTIC GOALKEEPER 125th ANNIVERSARY SHORTS
                            <br/>$58.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 show-card">
                        <img src="https://store.acmilan.com/cdn/shop/files/775052125-A82_01_400x.jpg?v=1733320882" className="card-img-top" alt="Show 5" />
                        <div className="card-body">
                            <h5 className="card-title"> MILAN 125TH ANNIVERSARY SIGNED JERSEY
                            <br/>$1,815.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 show-card">
                        <img src="https://store.acmilan.com/cdn/shop/files/774949-A81_01_2738c450-dc7c-49a3-a94f-92f287d6bd98.jpg?v=1716443193&width=500" className="card-img-top" alt="Show 6" />
                        <div className="card-body">
                            <h5 className="card-title"> MILAN HOME AUTHENTIC 2024/25 JERSEY
                            <br/>$134.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
);
};

export default Tienda;