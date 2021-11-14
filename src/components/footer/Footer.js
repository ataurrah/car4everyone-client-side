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
                            <li><Link className="link" to="/">BMW</Link></li>
                            <li><Link className="link" to="/">TOYOTA</Link></li>
                            <li><Link className="link" to="/">HONDA </Link></li>
                            <li><Link className="link" to="/">NISSAN </Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul className='dot'>
                            <li><Link className="link" to="/">BANGLADESH TOURISM</Link></li>
                            <li><Link className="link" to="/">VISIT BD</Link></li>
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
                        <p className="copyright">VISITBD © 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>

</div>
  );
};

export default Footer;