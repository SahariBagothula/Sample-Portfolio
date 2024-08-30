import './Skills.css';
import { FaCss3, FaDatabase, FaHtml5, FaJava, FaReact } from 'react-icons/fa';
import { BiLogoSpringBoot } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {

    const skills = [
        {name: 'Java', icon: FaJava, text: 'Worked on it'},
        {name: 'SpringBoot', icon: BiLogoSpringBoot, text: 'Worked on it'},
        {name: 'ReactJS', icon: FaReact, text: 'Worked on it'},
        {name: 'JavaScript', icon: IoLogoJavascript, text: 'Worked on it'},
        {name: 'PSQL, MongoDB', icon: FaDatabase, text: 'Worked on it'},
        {name: 'HTML5', icon: FaHtml5, text: 'Worked on it'},
        {name: 'CSS3', icon: FaCss3, text: 'Worked on it'},

    ]

    return(
        <>
            <section className='skills-section'>
                <div><h1 className='skills-heading'>My Skills</h1></div>
                <div className='skills-blocks'>
                    {
                        skills.map(({name, icon: Icon, text}) => {
                           return(
                            <li className='skills-block'>
                            <div className='skills-image'>
                                {<Icon className='skills-icon'/>}
                            </div>
                            <div className='skills-content'>
                                <h3 className='skills-name'>{name}</h3>
                                <p className='skills-text'>{text}</p>
                            </div>
                        </li>
                           )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Skills;