import React from 'react';
import './footer.css';

const Footer = (props) => {
    return(
        <footer id="footer">
            <p id="footText">&copy; Developer Chetna</p>
            <hr/>
            <div id="social">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src="https://i.ibb.co/dtzG625/facebook.png" alt="fb" className="slogo"/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="https://i.ibb.co/19H5LvT/insta.png" alt="fb" className="slogo"/>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank">
                        <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="fb" className="slogo"/>
                    </a>
            </div>
        </footer>
    )
}

export default Footer;