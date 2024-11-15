import React from 'react'

function Content() {
    return (
        <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-10'>
                            <span className='fs-1'> Popular Programs for <span style={{color:'#cf2e2e'}}>Study In Italy</span> </span>
                            <br />
                            <span className='fs-5'> Whether it’s a Bachelor’s degree in Arts or Science, a Master’s program, or an MBA, Italy offers a plethora of courses that are
                                <br /> globally recognized. </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-4 '>
                <div className='col-md-5 border rounded mx-5' >
                    <img src='Bachelors-Degree.webp' height={'100px'} className='bg-warning rounded border' />
                    <span className='fs-2'>Bachelor’s Degree in Italy</span> <br />
                    <span className=''>A <span style={{color:'#cf2e2e'}}>Bachelors degree</span> in Italy offers a strong foundation in your chosen field of study. The country’s universities are known for their comprehensive
                        undergraduate programs that combine theoretical knowledge with practical experience, preparing students for the global job market.</span>
                    <br />
                    <button type='submit' style={{ backgroundColor: '#cf2e2e', color: 'white' }} className="btn  mt-1 mx-1 py-2">Learn More</button>
                </div>

                <div className='col-md-5 border rounded mx-5'>
                    <img src='MBA-in-Italy.webp' height={'100px'} className='bg-warning rounded border' />
                    <span className='fs-2'>Master’s Degree in Italy</span> <br />
                    <span>Pursuing a <span style={{color:'#cf2e2e'}}>Master’s degree</span> in Italy can be a transformative experience. Italian universities offer a wide range of specialized Master's programs
                        recognized globally. These programs provide an in-depth understanding of the subject, fostering critical thinking and research skills.</span>
                    <br />
                    <button type='submit' style={{ backgroundColor: '#cf2e2e', color: 'white' }} className="btn  mt-1 mx-1 py-2">Learn More</button>
                </div>
            </div>

            <div className='row my-4'>
                <div className='col-md-5 border rounded mx-5' >
                    <img src='MBA-in-Italy.webp' height={'100px'} className='bg-warning rounded border' />
                    <span className='fs-2'>MBA in Italy</span> <br />
                    <span className=''>An <span style={{color:'#cf2e2e'}}>MBA in Italy</span> is a gateway to global business opportunities. Italian business schools are renowned for their rigorous MBA programs
                        focusing on strategic management, entrepreneurship, and innovation. An MBA from Italy equips students with leadership skills and a global business perspective.
                        Whether it’s a Bachelor’s, Master’s, or an MBA, studying abroad in Italy offers a unique blend of high-quality education and rich cultural experience.</span>
                    <br />
                    <button type='submit' style={{ backgroundColor: '#cf2e2e', color: 'white' }} className="btn  mt-1 mx-1 py-2">Learn More</button>
                </div>
                <div className='col-md-5 border rounded mx-5'>
                    <img src='Prepare-for-IELTS.webp' height={'100px'} className='bg-warning rounded border' />
                    <span className='fs-2'>Prepare for IELTS</span> <br />
                    <span><span style={{color:'#cf2e2e'}}>IELTS exam preparation</span> incorporates thorough guidance and flawless strategies. Therefore, we have an array of resources that ensure perfect support to help
                        you prepare. Reach out to us to make your IELTS preparation journey easier and convenient with personalized tips.</span>
                    <br />
                    <button type='submit' style={{ backgroundColor: '#cf2e2e', color: 'white' }} className="btn  mt-1 mx-1 py-2">Learn More</button>
                </div>
            </div>

            <div className='row my-4 justify-content-center'>
                <div className='col-md-5 border rounded mx-5'>
                <img src='Prepare-for-IELTS.webp' height={'100px'} className='bg-warning rounded border' />
                <span className='fs-2'>Learn Italian Culture & Language</span> <br />
                <span>We at YES Italy focus on making you acquainted with the Italian language and culture through our innovative way of guidance. Join our <span style={{color:'#cf2e2e'}}>Italian language training centre</span> where we provide a complete course
                     to familiarize our students with <span style={{color:'#cf2e2e'}}>Italian languages and cultures</span>.
                </span>
                <br />
                <button type='submit' style={{ backgroundColor: '#cf2e2e', color: 'white' }} className="btn  mt-1 mx-1 py-2">Learn More</button>
                </div>
            </div>
        </div>

        <div className='bg-info scholarship pt-5 '>   
        <h1 className='ms-5'>Grab upto <span style={{color:'#cf2e2e'}}>100% Scholarship</span></h1>  
        <p className='text-white fs-4 pt-3 ms-5'>Find the opportunities for Scholarships in Italy with our comprehensive guidance to ensure your academic convenience</p>  
        <br />
        <button type='submit' style={{ backgroundColor: '#cf2e2e', color: 'white' }} className="btn  mt-1 mx-1 py-2 ms-5">Learn More</button>
         </div>


        </div>
    )
}

export default Content