
import Introduction from "../components/home/introduction";
import NameDesc from "../components/home/NameDesc";
import Connect from "../components/home/connect";
function Home() {
    return (
        <div>
            <NameDesc margin={'20rem'}/>
            <Introduction margin={'20rem'}/>
            <Connect margin={'5rem'}/>
        </div>
    )
}

export default Home;