import React from 'react'

import '../styles/service.css'
const Services = () => {
  return (
    <>
<section id="services" className="services section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Services</h2>
      <p>Check our Services</p>
    </div>
    <div className="row" data-aos="fade-up" data-aos-delay={200}>
      <div className="col-md-6">
        <div className="icon-box">
        <i class='bx bx-home-heart' />
          <h4><a href="#">Home Loan</a></h4>
          <p>Giving Futures to your living,Lets you live Better🏠</p>
        </div>
      </div>
      <div className="col-md-6 mt-4 mt-md-0">
        <div className="icon-box">
          <i className="bi bi-bar-chart" />
          <h4><a href="#">Internet Banking</a></h4>
          <p>The honest advice and honest rates💹💱</p>
        </div>
      </div>
      <div className="col-md-6 mt-4 mt-md-0">
        <div className="icon-box">
        <i class='bx bx-money-withdraw' />
          <h4><a href="#">Gold Loan</a></h4>
          <p>Here for your lending needs.🪙</p>
        </div>
      </div>
      <div className="col-md-6 mt-4 mt-md-0">
        <div className="icon-box">
          <i className="bi bi-briefcase" />
          <h4><a href="#">Digital accounts</a></h4>
          <p>Safe, trustworthy, excellent.🔐</p>
        </div>
      </div>
      <div className="col-md-6 mt-4 mt-md-0">
        <div className="icon-box">
          <i className="bi bi-card-checklist" />
          <h4><a href="#">Mobile Banking</a></h4>
          <p>Your number one banking option.📶</p>
        </div>
      </div>
      <div className="col-md-6 mt-4 mt-md-0">
        <div className="icon-box">
          <i className="bi bi-clock" />
          <h4><a href="#">Apply Online Lock</a></h4>
          <p>Trusting banking Partner 🛅</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Services