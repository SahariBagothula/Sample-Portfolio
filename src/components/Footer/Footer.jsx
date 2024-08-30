import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return(
        <>
            <section className='footer-section'>
                <div className='footer-icons'>
                    <a className='footer-icon' href='https://github.com/SahariBagothula'><FaGithub /></a>
                    <a className='footer-icon' href='https://www.linkedin.com/in/sahari-bagothula-563a551a4/'><FaLinkedin /></a>
                    <a className='footer-icon' href='https://x.com/BagothulaS85027'><FaTwitter /></a>
                </div>
                <p className='footer-text'>Copyright &#169; 2024 Sahari Bagothula. All rights reserved</p>
            </section>
        </>
    )
}

export default Footer;