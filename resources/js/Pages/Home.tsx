import { Link, usePage } from "@inertiajs/inertia-react";
import Navbar from "../Components/Navbar";
import useNav from "../Hooks/useNav";
import Main from "../Layouts/Main";

const Home = () => {
    const { nav } = useNav();
    const props = usePage().props;
    console.log(props);
    return (
        <Main>
            <div
                className={`grid gap-1 ${
                    nav.expanded
                        ? "grid-cols-auto-1fr-2fr-home"
                        : "grid-cols-1fr-2fr-home"
                }`}
            >
                {nav.expanded && (
                    <div className="flex flex-col gap-3 py-4">
                        <Link href="" className="nav-link-selected">
                            Home
                        </Link>
                        <Link href="" className="nav-link-unselected">
                            Favorites
                        </Link>
                    </div>
                )}
                <div className="py-8 px-4 flex flex-col gap-3">
                    <div className="px-8 py-6 border rounded-md grid grid-cols-1fr-auto gap-y-4 bg-blue-50">
                        <p className="font-medium text-lg">
                            ZipCharge Go Looks Like a Rolling Suitcase but It’s
                            Actually an Electric Vehicle Battery Pack
                        </p>
                        <div className="bg-test bg-cover bg-center h-20 w-20 rounded"></div>
                        <div className="col-span-2 flex justify-between ">
                            Less than a handful of years ago–what feels like
                            yesterday–the “fastest car in the world” placard was
                            a constantly changing achievement that switched
                            hands between the latest and greatest from the
                            German, Italian and even…\nThe post ZipCharge Go
                            Looks Like a R…
                        </div>
                        <div className="col-span-2 flex justify-between ">
                            <div>2021-11-10T15:04:07Z</div>
                            <div>By Ben Dahl</div>
                        </div>
                    </div>
                    <div className="px-8 py-6 border rounded-md grid grid-cols-1fr-auto gap-y-4">
                        <p className="font-medium text-lg">
                            ZipCharge Go Looks Like a Rolling Suitcase but It’s
                            Actually an Electric Vehicle Battery Pack
                        </p>
                        <div className="bg-test bg-cover bg-center h-20 w-20 rounded"></div>
                        <div className="col-span-2 flex justify-between ">
                            Less than a handful of years ago–what feels like
                            yesterday–the “fastest car in the world” placard was
                            a constantly changing achievement that switched
                            hands between the latest and greatest from the
                            German, Italian and even…\nThe post ZipCharge Go
                            Looks Like a R…
                        </div>
                        <div className="col-span-2 flex justify-between ">
                            <div>2021-11-10T15:04:07Z</div>
                            <div>
                                By <span className="font-medium">Ben Dahl</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-8 px-4">
                    <div className=" border rounded-md flex flex-col gap-3">
                        <div className="px-8 py-6 bg-blue-50 grid grid-cols-1fr-auto gap-y-4">
                            <h1 className=" font-medium text-lg ">
                                ZipCharge Go Looks Like a Rolling Suitcase but
                                It’s Actually an Electric Vehicle Battery Pack
                            </h1>
                            <div className="bg-test bg-cover bg-center  h-20 w-20 rounded"></div>
                            <div className="col-span-2 flex justify-between ">
                                Less than a handful of years ago–what feels like
                                yesterday–the “fastest car in the world” placard
                                was a constantly changing achievement that
                                switched hands between the latest and greatest
                                from the German, Italian and even…\nThe post
                                ZipCharge Go Looks Like a R…
                            </div>
                        </div>
                        <div className="px-8 py-6 flex flex-col gap-3">
                            <div>
                                Less than a handful of years ago–what feels like
                                yesterday–the “fastest car in the world” placard
                                was a constantly changing achievement that
                                switched hands between the latest and greatest
                                from the Ge… [+1190 chars] Less than a handful
                                of years ago–what feels like yesterday–the
                                “fastest car in the world” placard was a
                                constantly changing achievement that switched
                                hands between the latest and greatest from the
                                Ge… [+1190 chars] Less than a handful of years
                                ago–what feels like yesterday–the “fastest car
                                in the world” placard was a constantly changing
                                achievement that switched hands between the
                                latest and greatest from the Ge… [+1190 chars]
                                Less than a handful of years ago–what feels like
                                yesterday–the “fastest car in the world” placard
                                was a constantly changing achievement that
                                switched hands between the latest and greatest
                                from the Ge… [+1190 chars] Less than a handful
                                of years ago–what feels like yesterday–the
                                “fastest car in the world” placard was a
                                constantly changing achievement that switched
                                hands between the latest and greatest from the
                                Ge… [+1190 chars] Less than a handful of years
                                ago–what feels like yesterday–the “fastest car
                                in the world” placard was a constantly changing
                                achievement that switched hands between the
                                latest and greatest from the Ge… [+1190 chars]
                                Less than a handful of years ago–what feels like
                                yesterday–the “fastest car in the world” placard
                                was a constantly changing achievement that
                                switched hands between the latest and greatest
                                from the Ge… [+1190 chars] Less than a handful
                                of years ago–what feels like yesterday–the
                                “fastest car in the world” placard was a
                                constantly changing achievement that switched
                                hands between the latest and greatest from the
                                Ge… [+1190 chars] Less than a handful of years
                                ago–what feels like yesterday–the “fastest car
                                in the world” placard was a constantly changing
                                achievement that switched hands between the
                                latest and greatest from the Ge… [+1190 chars]
                            </div>
                        </div>
                        <div className="px-8 py-6 bg-blue-50 flex justify-between">
                            <div>2021-11-10T15:04:07Z</div>
                            <div>
                                By <span className="font-medium">Ben Dahl</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default Home;
