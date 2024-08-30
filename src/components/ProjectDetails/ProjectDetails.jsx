import {useParams} from 'react-router-dom';
import {ProjectsData} from '../Projects/ProjectsData';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './ProjectDetails.css';

const ProjectDetails = () => {

    const {projectId} = useParams();

    const projectDetails = ProjectsData.find(({id}) => id === Number(projectId));

    return(
        <>
        <Navbar />
        <div className='project-details-section'>
        {
                projectDetails ? (
                    <section className='project-details'>
                        <h1 className='project-details-heading'>{projectDetails.name}</h1>
                        <img className='project-details-image' src={projectDetails.img} alt='Not found' />
                        <a className='project-details-link' href={projectDetails.link}>{projectDetails.link ? <p>Watch it Live</p> : <p>Not live yet</p>}</a>
                        <div className='project-details-technologies'>
                            <p className='project-details-technologies-heading'>Technologies Used</p>
                            <ul className='project-details-techList'>
                            {projectDetails.technologies.map((technology, index) => (
                                    <li  className='project-details-tech'key={index}>{technology}</li>
                                ))}
                            </ul>
                        </div>
                        <p className='project-details-description'>{projectDetails.description}</p>
                    </section>
                ) : (
                    <p> Project Details not found </p>
                )
            }
        </div>  
            <Footer />
        </>
    )
}

export default ProjectDetails;