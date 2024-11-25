import React from 'react'
import "../style/service.css"
import serviceArray from "../json/services.json"

function Services() {
    return (
        <>
            <section className="all-sections">
                <div className="container">
                    <div className="services-container">
                        {
                            serviceArray.map((i, index) => (
                                <div key={index} className='services-card'>
                                    <img src={require(`../assets/svg/${i.img}`)} alt='service' />
                                    <h3>{i.heading}</h3>
                                    <p>{i.para}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
