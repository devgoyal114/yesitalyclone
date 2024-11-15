import React from 'react'

function Hero() {
    return (
        <div className='container-fluid herosize '>
            <div className='row '>
                <section className='col-6 align-items-center' style={{ height: '100%' }}>
                    <div className='fs-1 row my-5 justify-content-center'>
                        Gateway to <br /> Education in Italy
                    </div>
                    <div className='row my-5 ms-4'>
                        <div className='fs-4 col-4'>
                            50+ <br /> University Partners
                        </div>
                        <div className='fs-4 col-4'>
                            10k+ <br /> Careers Transformed
                        </div>
                    </div>
                    <div className='my-3 ms-4'>
                        <button type="button" style={{ backgroundColor: '#cf2e2e', color: 'white' }} className="btn fs-5 p-2">Explore Courses</button>
                    </div>
                </section>

                <section className='col-6 p-3 '>
                    <div className='formsize bg-white ' >
                        <form>
                            <div className='row justify-content-center'>
                                <div className='col-md-12'>
                                    <div className='container-fluid' >
                                        <div className='row '>
                                            <div>
                                                <button type="button" style={{ backgroundColor: '#cf2e2e', color: 'white' }} className="btn fs-6 mt-2 ms-5">BOOK YOUR FREE CONSULTATION</button>
                                            </div>
                                            <div className='mx-1 mt-3'>
                                                <img src='education.svg' style={{ height: '25px', width: '25px' }} alt=''/>100+ Courses
                                                <img src='meeting.svg' style={{ height: '25px', width: '25px' }} alt=''/> 10K+ Counseled
                                                <hr />
                                            </div>
                                            
                                            <div className='col-md-6'>
                                                <div className="mb-2">
                                                    <label className="form-label text-black">Full Name*</label>
                                                    <input type="text" placeholder='Enter Full Name' style={{ width: '150px', height: '40px' }} className='rounded' />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="mb-2">
                                                    <label className="form-label text-black">Mobile No.*</label>
                                                    <input type="number" placeholder='Enter Mobile Number' style={{ width: '150px', height: '40px' }} className='rounded' />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="mb-2">
                                                    <label className="form-label text-black">Email Id*</label>
                                                    <input type="email" placeholder='Enter Email Id' style={{ width: '150px', height: '40px' }} className='rounded' />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="mb-2">
                                                    <label className="form-label text-black">Degree*</label>
                                                    <select className='rounded' style={{ width: '150px', height: '40px' }}>
                                                        <option>Select Degree*</option>
                                                        <option>Bachelors</option>
                                                        <option>Masters</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-check mx-2 mt-3">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                <label class="form-check-label " for="exampleCheck1">I agree to receive information from Yes Italy.*</label>
                                            </div>
                                            <div className='col-12 text-center'>
                                                <button type='submit' style={{ backgroundColor: '#cf2e2e', color: 'white' }} className="btn form-control mt-4 mx-1 py-2">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero