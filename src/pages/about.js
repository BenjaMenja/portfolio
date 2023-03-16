import Description from "../components/about/description";
import Languages from "../components/about/langs";
import DevTools from "../components/about/devtools";


function About() {
    return (
     <div>
        <Description margin="15rem"/>
         <Languages margin="10rem"/>
         <DevTools margin="10rem"/>
     </div>
    )
}

export default About;