import React from 'react'
import CardGrid from './CardGrid'
import Footer from '../components/Footer'
const Carousel = () => {
    return (
        <>

            <div id="carouselExampleControls" className="carousel slide" data-mdb-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img height={"500rem"} src="https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg" className="d-block w-100" alt="Wild Landscape" />
                    </div>
                    <div className="carousel-item">
                        <img height={"500rem"} src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" className="d-block w-100" alt="Camera" />
                    </div>
                    <div className="carousel-item">
                        <img height={"500rem"} src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" className="d-block w-100" alt="Exotic Fruits" />
                    </div>
                    <div className="carousel-item">
                        <img height={"500rem"} src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" className="d-block w-100" alt="Exotic Fruits" />
                    </div>
                    <div className="carousel-item">
                        <img height={"500rem"} src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" className="d-block w-100" alt="Exotic Fruits" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel