import React from 'react';
import img2 from '../assets/img2.png';
import img7 from '../assets/img7.png';
import bag from '../assets/bag.png';
import plus1 from '../assets/plus1.png';
import words from '../assets/words.png';

class Wholesales extends React.Component {
    render() {
        return (
            <div className="bg-gray-200 py-64 md:py-0 xl:-mt-20">
                <div class="py-64 mt-64 md:py-0 md:mt-0 flex flex-col md:flex-row px-8 md:px-12 xl:px-24 w-full">
                    <div className="md:w-7/12 md:h-64 xl:h-screen flex" style={{ border: "1px solid", borderLeft: "0px", textAlign: "left" }}>
                        <div className="-ml-8 md:-ml-12 xl:-ml-20 mt-16 lg:mt-20 md:mt-24 flex justify-start items-start">
                            <div className="xl:mt-64 ">
                                <img className="absolute w-1/2 md:w-1/4 xl:w-1/3" src={img7} alt="img7" />
                            </div>
                            <div className="xl:mt-64">
                                <img className="absolute w-1/2 md:w-1/4 xl:w-1/3" src={img2} alt="img4" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="md:-mt-2  md:font-bold flex flex-col w-1/2 justify-items-end ml-40 md:ml-56 lg:ml-56 xl:ml-64 xl:text-xl lg:text-lg">
                                <p className="mt-2 xl:ml-48 xl:mt-24 xl:w-48 xl:text-2xl lg:ml-20 md:mt-8 font-Oswald xl:text-left text-left">WHOLESALE USER?</p>
                                <p className="xl:mt-8  xl:ml-48 xl:w-56  xl:text-base mr-4 md:mt-4 xl:text-left lg:mt-4 lg:ml-20 md:text-xs font-Oswald text-left">Do you have a company and need to buy a larger quantity of products?
                                Register and log in as a wholesale user and secure access to a special part of the store.</p>
                                <p className="md:mt-12 xl:mt-32 md:ml-8 text-center mr-8 lg:ml-20 xl:ml-56 font-Oswald w-24 xl:text-center" style={{ backgroundColor: "#EEFF00" }}>REGISTER</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0 md:ml-4 flex md:w-7/12 xl:h-screen md:h-64" style={{ border: "1px solid black", borderRight: "0" }}>
                        <div className="xl:-mt-32 md:text-sm md:font-bold flex flex-col w-1/2 justify-items-end ">
                            <div className="">
                                <img className=" lg:ml-64 xl:mt-24 lg:-mt-32 xl:ml-64 xl:mr-16 ml-48 md:ml-40 md:-mt-20 md:w-full w-20 -mt-10" src={plus1} alt="img" />
                            </div>
                            <div>
                            <p className=" mt-2 md:-mt-20 xl:ml-10 xl:text-xl xl:-mt-48 font-Oswald xl:text-left text-left ml-8 font-bold">BADASS Club</p>
                            <img className=" w-4 ml-2 xl:ml-4 -mt-5" src={bag} alt="img" />
                            <p className="mt-8 md:mt-2 md:ml-4 xl:text-lg xl:w-48 xl:ml-4 lg:ml-2 font-Oswald w-24 xl:text-left text-left font-bold ml-2">Join our benefits club.</p>
                            <p className="text-xs md:w-64 md:ml-2 md:text-left md:text-xs mt-4 xl:ml-4 ml-2 w-40 font-Oswald xl:text-left text-left xl:mt-4 xl:text-sm ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus estemated. .</p>
                            <p className="xl:mt-32 xl:text-xl lg:ml-2 xl:ml-4 md:ml-2 md:mt-2 font-extrabold text-base font-Oswald w-24 xl:text-center text-center" style={{ backgroundColor: "#EEFF00" }}>REGISTER</p>
                            </div>
                        </div>
                        <div className="">
                            <img className="ml-6 xl:w-48 md:w-20 md:ml-20 md-mt-10 mt-12" src={words} alt="img" />
                            <p className="text-xs ml-12 md:text-base md:ml-4 md:mt-4 lg:ml-16 xl:ml-20 xl:text-xl font-extrabold font-Oswald mt-2">Satisfied Customers!</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Wholesales;
