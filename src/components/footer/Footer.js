import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
const Footer = () => {
  return (
    <div>
        <div className="footer-clean pt-3">
        <footer>
            <div className="">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Top Brand</h3>
                        <ul className='dot'>
                            <li><Link className="link" to="/product">BMW</Link></li>
                            <li><Link className="link" to="/product">TOYOTA</Link></li>
                            <li><Link className="link" to="/product">HONDA </Link></li>
                            <li><Link className="link" to="/product">NISSAN </Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul className='dot'>
                            <li><Link className="link" to="/product">top brand car</Link></li>
                            <li><Link className="link" to="/">Privacy Policy</Link></li>
                            <li><Link className="link" to="/Advertising"></Link></li>
                            <li><Link className="link" to="/">Promotion</Link></li>
                            <li><Link className="link" to="/">Terms & Conditions</Link></li>
                            <li><Link className="link" to="/">Promotion</Link></li>
                            <li><Link className="link" to="/">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Quick Links</h3>
                        <ul className='dot'>
                            <li><Link className="link" to="/">My Orders</Link></li>
                            <li><Link className="link" to="/">Need Help</Link></li>
                            <li><Link className="link" to="/">Online Service</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 item social">
                        <Link to="/">
                        <i className="fab fa-facebook mx-3"></i>
                            </Link>
                        <Link to="/">
                        <i className="fab fa-twitter-square mx-3"></i>
                            </Link>
                        <Link to="/">
                        <i className="fab fa-snapchat mx-3"></i>
                            </Link>
                        <Link to="/">
                         <i className="fab fa-instagram mx-3"></i>
                            </Link>
                        <Link to="/">
                        <i className="fab fa-youtube mx-3"></i>
                            </Link>
                        <p className="copyright">Care4Everyone © 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>

</div>
  );
};

export default Footer;