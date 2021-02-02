import React from 'react';
import img1 from '../assets/img1.png';
import img3 from '../assets/img3.png';
import laptop from '../assets/laptop.png';
import laptop1 from '../assets/laptop1.png';


class Offers extends React.Component {
    render() {
        return (
            <div className=" bg-gray-200 -mt-64 md:mt-32 xl:px-8 xl:mt-48">
                <div className="md:py-12 xl:py-24 xl:px-56 px-16 md:px-8 lg:px-16 bg-gray-200 w-full flex flex-col md:justify-between md:flex-row">
                    <div className="flex justify-start w-3/4">
                        <h1 className="-mt-40 md:-mt-1 xl:text-2xl font-extrabold font-Oswald">Specials Offers</h1>
                    </div>
                    <div className="-mt-32 md:-mt-1 md:text-base xl:text-xl font-bold  font-Oswald w-1/4 md:flex md:justify-between ">
                        <h1>Kitchen</h1>
                        <h1>Tools</h1>
                        <h1>Child's Corner</h1>
                    </div>
                </div>
                <div className="xl:ml-40 bg-gray-200 md:py-0 xl:-mt-8">
                    <div class="container xl:px-0 px-10 lg:px-0 mx-auto">
                        <div class="flex flex-col md:flex-row">
                            <div class="lg:ml-8 lg:w-1/5 md:w-1/2 mt-2" >
                                <div class="block relative h-48 xl:w-full rounded overflow-hidden border-l-2 border-t-2 border-r-2 border-gray-300">
                                    <img alt="img" class="object-cover object-center" src={img1} alt="img" />
                                </div>
                                <div class="mt-4" style={{border: "1px solid gray", borderTop: "0"}}>
                                    <h3 class="text-base font-extrabold mb-1 font-Oswald">Chef Master Kitchen 400W</h3>
                                    <h1 className="text-xs font-bold font-Oswald">6-Volt Battery Operated Ride-On Car</h1>
                                    <div>
                                        <h2 class="my-2 w-1/2 ml-16 md:ml-10 title-font text-lg font-medium font-Oswald">1.390,00 kn</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="lg:ml-4 md:ml-4 lg:w-1/5 md:w-1/2  w-full mt-2">
                                <div class="relative h-48 rounded overflow-hidden border-l-2 border-t-2 border-r-2 border-gray-300">
                                    <div className="">
                                        <p className="w-10 md:w-10 font-extrabold text-xs float-right py-3 px-3 mr-2 rounded-full" style={{ backgroundColor: "#EEFF00" }}>35%</p>
                                    </div>
                                    <img alt="img" class="object-cover object-center w-full  block" src={img3} alt="img" />
                                </div>
                                <div class="mt-4" style={{border: "1px solid gray", borderTop: "0"}}>
                                    <h3 class="text-base font-extrabold mb-1 font-Oswald">Chef Master Kitchen 400W</h3>
                                    <h1 className="text-xs font-bold font-Oswald">6-Volt Battery Operated Ride-On Car</h1>
                                    <div>
                                        <h2 class="my-2 w-1/2 ml-16 md:ml-10 title-font text-lg font-medium font-Oswald">1.390,00 kn</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="lg:ml-4 lg:w-1/5  md:ml-4 md:w-1/2 mt-2 w-full">
                                <div class="block relative h-48 rounded overflow-hidden border-l-2 border-t-2 border-r-2 border-gray-300">
                                    <img alt="img" class="object-cover object-center block" src={laptop} alt="img" />
                                </div>
                                <div class="mt-4 " style={{border: "1px solid gray", borderTop: "0"}}>
                                    <h3 class="text-base font-extrabold mb-1 font-Oswald">Chef Master Kitchen 300W</h3>
                                    <h1 className="text-xs font-bold font-Oswald">6-Volt Battery Operated Ride-On Car</h1>
                                    <div>
                                        <h1 class="my-2 w-1/2 ml-16 md:ml-10 title-font text-lg font-medium font-Oswald">1.390,00 kn</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="lg:ml-4 lg:w-1/5  md:ml-4 md:w-1/2 mt-2 w-full">
                                <div class="block relative h-48 rounded overflow-hidden border-l-2 border-t-2 border-r-2 border-gray-300">
                                    <div className="">
                                        <p className="w-10 md:w-10 font-extrabold text-xs float-right py-3 px-3 mr-2 rounded-full font-Oswald" style={{ backgroundColor: "#EEFF00" }}>35%</p>
                                    </div>
                                    <img alt="img" class="object-cover object-center w-11/12 block" src={laptop1} alt="img" />
                                </div>
                                <div class="mt-4  border-t-0" style={{border: "1px solid gray", borderTop: "0"}}>
                                    <h3 class="text-base font-extrabold mb-1 font-Oswald">Chef Master Kitchen 300W</h3>
                                    <h1 className="text-xs font-bold font-Oswald">6-Volt Battery Operated Ride-On Car</h1>
                                    <div>
                                        <h1 class="my-2 w-1/2 ml-16 md:ml-10 title-font text-lg font-medium font-Oswald">1.390,00 kn</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <center><p class="mt-8 w-40 md:ml-10 font-Oswald font-bold" style={{backgroundColor: "#EEFF00"}}>Review the entire offer</p></center>
                    </div>
                </div>
            </div>
        );
    }
}
export default Offers;