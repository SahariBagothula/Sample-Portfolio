import Equals from '../../assets/Equals.png';
import './Blog.css';

const Blog = () => {
    return(
        <>
            <section className='blogs-page'>
                <h2 className='blog-heading'>Blogs</h2>
               <div className='blog-container'>
               <div className='blog-card'>
                    <a href='https://saharibagothula.hashnode.dev/abstract-equality-operator-and-strict-equality-operator'><img src={Equals} alt='== vs ===' /></a>
                    <p className='blog-text'>Blog on == vs === operator in js</p>
                </div>
               </div>
            </section>
        </>
    )
}

export default Blog;