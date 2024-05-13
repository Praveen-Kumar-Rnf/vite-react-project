import React from 'react';
import Bike from '../../assets/images/ninja.jpg';
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className='banner-slider'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Bike} className="d-block w-100" alt="..."></img>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Bike} className="d-block w-100" alt="..."></img>
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Bike} className="d-block w-100" alt="..."></img>
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="client-logo">
        <div className="container pt-5 pb-5">
          <div className="row align-items-center h-100">
            <div className="container rounded">
              <h1 className="text-center">Featured in:</h1>
              <div className="slider mt-5">
                <div className="logos">
                  <i className="fab fa-js fa-4x"></i>
                  <i className="fab fa-linkedin-in fa-4x"></i>
                  <i className="fab fa-dribbble fa-4x"></i>
                  <i className="fab fa-medium-m fa-4x"></i>
                  <i className="fab fa-github fa-4x"></i>
                </div>
                <div className="logos">
                  <i className="fab fa-js fa-4x"></i>
                  <i className="fab fa-linkedin-in fa-4x"></i>
                  <i className="fab fa-dribbble fa-4x"></i>
                  <i className="fab fa-medium-m fa-4x"></i>
                  <i className="fab fa-github fa-4x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
          <div className="about-col">
          <img src={Bike} className="d-block w-100" alt="..."></img>
          </div>
          <div className="about-col">
            <div className="about-heading">
              <h2>About Us</h2>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto deleniti provident enim tempore distinctio obcaecati ipsam amet magnam accusantium? Expedita ipsa suscipit impedit obcaecati vitae repudiandae deserunt corporis. Eius et minus nisi facilis, rem doloremque non laborum sed vero iusto iure ad neque iste molestiae delectus amet id eaque deleniti voluptatem dicta? Qui facilis neque quam, itaque eum voluptatibus aspernatur assumenda iure sequi impedit excepturi nulla minus quasi, quaerat dicta dolores. Quibusdam maiores temporibus velit quia qui saepe, illum delectus sunt quaerat expedita esse consequatur eos nihil! Error corrupti repellendus voluptatibus odio perferendis in eos quam magnam nihil eveniet?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto deleniti provident enim tempore distinctio obcaecati ipsam amet magnam accusantium? Expedita ipsa suscipit impedit obcaecati vitae repudiandae deserunt corporis. Eius et minus nisi facilis, rem doloremque non laborum sed vero iusto iure ad neque iste molestiae delectus amet id eaque deleniti voluptatem dicta? Qui facilis neque quam, itaque eum voluptatibus aspernatur assumenda iure sequi impedit excepturi nulla minus quasi, quaerat dicta dolores. Quibusdam maiores temporibus velit quia qui saepe, illum delectus sunt quaerat expedita esse consequatur eos nihil! Error corrupti repellendus voluptatibus odio perferendis in eos quam magnam nihil eveniet?</p>
            <button type="button" class="btn btn-outline-primary">Read More</button>
          </div>
      </section>
      <section className="card-section mt-5" >
        <div className="container">
          <h2 className='card-heading mb-5 text-center'>Header Title</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card text-bg-success mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Success card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-bg-success mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Success card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-bg-success mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Success card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='blog-section mb-5 mt-5'>
        <div className="container">
        <h2 className='card-heading mb-5 text-center'>Blog Title</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src={Bike} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Bike} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Bike} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Bike} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Bike} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Bike} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}