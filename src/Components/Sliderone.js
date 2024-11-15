import React from 'react'

function Sliderone() {
    return (
        <div className='container-fluid'>
            <div className='row mt-5' style={{ marginLeft: '250px' }}>
                <div className='fs-1'>Applying For <span style={{ color: '#cf2e2e' }}>Top Universities in Italy</span></div>
                <div className='fs-5 mt-2'>Applying to top universities in Italy is a step towards quality education and a
                    vibrant cultural experience. It usually takes a time<br /> of 3-6 months and involves
                    exploring courses, meeting eligibility criteria, and preparing for entrance exams.</div>
            </div>

            <div className='row mt-5'>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators bg-info">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="card" >
                                <img src="University-of-bologna.webp" class="card-img-top" style={{height:'300px'}} alt="..." />
                                <div class="card-body">
                                <button type='submit' style={{ backgroundColor: '#cf2e2e', color: 'white' }} className="btn  mt-1 mx-1 py-2">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div class="card" >
                                <img src="University-of-bologna.webp" class="card-img-top" style={{height:'300px'}} alt="..." />
                                <div class="card-body">
                                <button type='submit' style={{ backgroundColor: '#cf2e2e', color: 'white' }} className="btn  mt-1 mx-1 py-2">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div class="card" >
                                <img src="University-of-bologna.webp" class="card-img-top" style={{height:'300px'}} alt="..." />
                                <div class="card-body">
                                <button type='submit' style={{ backgroundColor: '#cf2e2e', color: 'white' }} className="btn  mt-1 mx-1 py-2">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Sliderone