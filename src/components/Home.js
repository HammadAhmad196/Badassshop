import React from 'react';
import car from '../assets/car.png';
// import img from '../assets/img.png';
import bg from '../assets/bg.png';
import bg1 from '../assets/bg1.png';
import login from '../assets/login.png';
import nav from '../assets/nav.png';
import Social from '../assets/Social.png';
import Pagination from '../assets/Pagination.png';
import search from '../assets/search.png';


class Home extends React.Component {
    render() {
        return (
            <div className="bg-gray-200 h-full">
                <header className="md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg ">
                    <div className="flex justify-center items-center mb-4 md:mb-0">
                        <button class="font-Oswald bg-black font-bold text-white text-center px-6 py-2 transition mr-6">
                            PRODUCT
                    </button>
                        <button class="font-Oswald border-black  text-white font-bold bg-black text-center px-6 py-2 transition mr-6">
                            CONTACT
                    </button>

                        <a className=" text-black hover:text-orange md:hidden" href="#">
                            <i className="fa fa-2x fa-bars"></i>
                        </a>
                    </div>
                    <div className=" w-full md:mb-0 md:w-1/4">
                        <p className="font-Oswald xl:text-4xl font-extrabold text-2xl">BADASS</p>
                        <p className="font-Oswald xl:text-xl font-extrabold text-sm">S H O P</p>
                        {/* <label className="font-Oswald font-extrabold" placeholder="Search " ></label> */}
                        <div className="md:py-4">
                            <input className="xl:py-2 font-Oswald md:w-full md:py-2 lg:py-2 mt-2 md:-ml-6 text-left  rounded-full w-full placeholder-black placeholder-current px-4 py-3 font-extrabold" placeholder="SEARCH _" style={{ border: "1px solid" }} />
                            <div className="lg:mt-1 xl:px-16 ml-32 lg:ml-48 md:-mt-2 ">
                                <img className="-mt-8 xl: float ml-24 md:ml-0 xl:ml-8" src={search} alt="img" />
                            </div>
                        </div>
                    </div>
                    <nav>
                        <ul className="list-reset md:flex md:items-center">
                            <li className="md:ml-4">
                                <a className="font-Oswald xl:text-xl md:text-sm border-t block py-4 font-extrabold hover:text-black md:border-none md:p-0" href="#">
                                    B2B
                            </a>
                            </li>
                            <li className="md:ml-4">
                                <a className="font-Oswald xl:text-xl md:text-sm border-t block py-2 font-extrabold hover:text-black md:border-none md:p-0" href="#">
                                    CLICK & COLLECT
                            </a>
                            </li>
                            <li className="md:ml-4">
                                <a class="font-Oswald xl:text-xl md:text-sm border-t block py-2 font-extrabold hover:text-black md:border-none md:p-0" href="#">
                                    LOGIN
                            </a>
                            </li>
                        </ul>
                        <div className="mr-20 md:mr-0 md:mt-2 -mt-2 flex-row py-2 m-4">
                            <h6 className="font-Oswald float-right text-base font-extrabold ml-8">0.00 KN</h6>
                            <h6 className="font-Oswald float-right text-base font-extrabold">Wish</h6>
                        </div>
                    </nav>
                </header>
                <div className="h-screen" style={{ backgroundImage: `url(${bg1})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                    <section class="px-8">
                        <div className="h-screen" style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                            <div class="container mx-auto flex items-center justify-center flex-col">
                                <img class="lg:w-full md:w-3/6 w-full object-cover object-center rounded" alt="hero" src={car} atl="car" />
                                <div class="text-center lg:w-2/3 w-full">
                                    <p className="font-Oswald title-font text-sm mb-2 font-extrabold text-black">LICENSED CAR</p>
                                    <h1 class="font-Oswald title-font sm:text-4xl text-2xl mb-2 font-extrabold text-black">Ultra-cool Motherfucker</h1>
                                    <div className="md:px-32">
                                        <img src={nav} alt="img" />
                                        <p className="text-black font-Oswald font-extrabold text-xs">Battery-powered Ride-on Car</p>
                                    </div>
                                    <div>
                                        <nav className="mt-2 flex flex-row justify-center items-center">
                                            <ul className="text-black flex flex-row list-reset md:flex md:items-center">
                                                <li className="md:ml-4">
                                                    <a className="font-Oswald text-xs py-2" href="#">
                                                        Battery
                                    </a>
                                                </li>
                                                <li className="md:ml-4">
                                                    <a className="font-Oswald text-xs py-2" href="#">
                                                        Speeds |
                                    </a>
                                                </li>
                                                <li className="md:ml-4">
                                                    <a class="font-Oswald text-xs py-2 " href="#">
                                                        Adjustable Seats |
                                    </a>
                                                </li>
                                                <li className="md:ml-4">
                                                    <a class="font-Oswald text-xs py-2" href="#">
                                                        Lights |
                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <div className="">
                                            <img className="xl:-mt-4 float-right w-12 md:w-24" src={Pagination} alt="img" />
                                            <img className="mt-6 float-left w-24 md:w-48" src={Social} alt="img" />
                                        </div>
                                        <div className="">
                                            <center><p className="md:mr-8 xl:ml-32 lg:ml-32 md:ml-32 md:mt-24 mt-20 text-center font-Oswald text-black font-extrabold text-xs">PAYMENT BY COD, INTERNET BANKING OR CARD</p></center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
export default Home;
