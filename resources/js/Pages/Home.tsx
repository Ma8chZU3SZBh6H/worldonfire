import { usePage } from "@inertiajs/inertia-react";
import Navbar from "../Components/Navbar";
import Main from "../Layouts/Main";

const Home = () => {
    const props = usePage().props;
    console.log(props);
    return (
        <Main>
            <div>Home</div>
        </Main>
    );
};

export default Home;
