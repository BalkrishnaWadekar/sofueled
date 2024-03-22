import React, { useState } from 'react'

const Footer = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    const currentTiming = () => {
        const nowTime = new Date().toLocaleTimeString();
        setTime(nowTime)
    }

    setInterval(currentTiming, 1000);

    return <>
        <div>
            <div className="container-fluid bg-dark text-light my-5">
                <div className="row py-5">
                    <div className='col-sm-3 col-md-3 col-12 d-flex justify-content-center'>
                        <h4>{time}</h4>
                    </div>
                    <div className='col-sm-3 col-md-3 col-12'>
                        <p>
                            "Hello.."
                            <br />
                            My name is
                            <strong> wadekar balkrishna suresh </strong>
                            , I lives in Aurangabad and have Completed my bachelor degree. I am passionate about coding
                            and always excited to learn new skills and technologies.
                        </p>
                    </div>
                    <div className='col-sm-3 col-md-3 col-12'>
                        <h5>AMAZO</h5>
                        <p>
                            We envisaged an enterprise-grade system to work with you on accountable partnerships to deliver accelerated results. Since our inception, we have delivered solutions through industry-defining experience, bespoke strategies, and close-knit service industry integrations
                        </p>
                    </div>
                    <div className='col-sm-3 col-md-3 col-12 d-flex justify-content-center'>
                        <h5>BRAND SHOP AMAZO</h5>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Footer