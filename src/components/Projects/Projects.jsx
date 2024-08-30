import './Projects.css';
import {ProjectsData} from './ProjectsData';
import {Link} from 'react-router-dom';

const Projects = () => {

    return(
        <>
            <section className='projects-section'>
                    <h1 className='projects-heading'>
                            My Projects
                    </h1>
                    <div className='projects-blocks'>
                            {
                                ProjectsData.map(({id, img, name, description}) => {
                                    return (
                                            <div className='projects-block' key={id}>
                                                    <img src={img} alt='not found' className='projects-image'/>
                                                    <h2 className='projects-name'>{name}</h2>
                                                    <p className='projects-description'>{description}</p>
                                                    <Link className='projects-link' key={id} to={`/projects/${id}`}>View Details</Link>
                                            </div>
                                    )
                                })
                            }
                    </div>
            </section>
        </>
    )
}

export default Projects;