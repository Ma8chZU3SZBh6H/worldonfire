import { Link, usePage } from "@inertiajs/inertia-react";
import Navbar from "../Components/Navbar";
import Main from "../Layouts/Main";

const Home = () => {
    const props = usePage().props;
    console.log(props);
    return (
        <Main>
            <div className="grid grid-cols-auto-auto-1fr gap-3">
                <div className="flex flex-col gap-3 py-4">
                    <Link href="" className="nav-link-selected">
                        Home
                    </Link>
                    <Link href="" className="nav-link-unselected">
                        Favorites
                    </Link>
                </div>
                <div className="py-8">auto</div>
                <div className="py-8">1fr</div>
            </div>
        </Main>
    );
};

export default Home;
