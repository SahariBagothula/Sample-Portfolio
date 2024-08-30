import {useTheme} from '../ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const {darkMode, switchTheme} = useTheme();

    return(
        <>
            <nav className='navbar-section'>
                  <Link to='/'  classname='navbar-link' style={{  textDecoration: 'none' }}> <div className='name'>
                    <span className='firstname'>Sahari</span>  <span className='lastname'>Bagothula</span>
                    </div></Link> 
                    <div className='nav-items'>
                    <a href="#about" className='nav-item'>About</a>
                    <a href="#skills" className='nav-item'>Skills</a>
                    <a href="#projects" className='nav-item'>Projects</a>
                    <a href="#blogs" className='nav-item'>Blogs</a>
                    </div>
                    <div>
                        <button onClick={switchTheme} className='theme-icon'>
                            {darkMode ? <FaMoon className='moon-icon'/> : <FaSun className='sun-icon'/>} 
                        </button>
                    </div>
            </nav>
        </>
    )
}

export default Navbar;