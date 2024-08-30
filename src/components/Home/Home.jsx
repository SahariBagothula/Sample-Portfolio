import About from "../About/About";
import Blog from "../Blogs/Blog";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
    return(
        <>
        <Navbar />
        <Header />
        <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="blogs"><Blog /></section>
        <Footer />
        </>
    )
}

export default Home;