import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="container mb-5 pt-5 footer-menu links">
        <div className="row footer-nav">
          <div className="col-md-3">
            <div className="logos">
              <i className="fab fa-medium-m fa-4x"></i><br/>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, veritatis?</span>
            </div>
          </div>
          <div className="col-md-3 footer-menu">
          <h3>Quick Links</h3>
            <ul>
            <li><i class="fa fa-angle-right"></i> Home</li>
              <li><i class="fa fa-angle-right"></i> About Us</li>
              <li><i class="fa fa-angle-right"></i> Blog</li>
              <li><i class="fa fa-angle-right"></i> Services</li>
              <li><i class="fa fa-angle-right"></i> Contact Us</li>
            </ul>
          </div>
          <div className="col-md-3 footer-menu">
            <h3>Useful Links</h3>
            <ul>
              <li><i class="fa fa-angle-right"></i> Home</li>
              <li><i class="fa fa-angle-right"></i> About Us</li>
              <li><i class="fa fa-angle-right"></i> Blog</li>
              <li><i class="fa fa-angle-right"></i> Services</li>
              <li><i class="fa fa-angle-right"></i> Contact Us</li>
            </ul>
          </div>
          <div className="col-md-3 footer-menu">
            <h3>Contact Info</h3>
            <ul>
              <li><i class="fa fa-phone" aria-hidden="true"></i><br/><a href="tel:567-891-2563">567-891-2563</a></li>
              <li><i className="fa fa-envelope"></i><br/><a href="mailto:info@gmail.com">info@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="text-center">
            <span>© 2024 Copyright. All Rights Reserved</span>
        </div>
      </div>
    </section>
  );
}
