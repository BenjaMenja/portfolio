
import NameDesc from "../components/home/NameDesc";
import Connect from "../components/home/connect";
import FeaturedProjects from "../components/home/featuredprojects";
function Home() {
    return (
        <div>
            <NameDesc margin={'15rem'}/>
            {/*<Introduction margin={'20rem'}/>*/}
            <FeaturedProjects margin={'10rem'}/>
            <Connect margin={'5rem'}/>
        </div>
    )
}

export default Home;