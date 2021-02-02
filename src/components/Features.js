import React from 'react';
import img from '../assets/img.png';
import x1 from '../assets/x1.png';


class Features extends React.Component {
    render() {
        return (
            <div className="md:py-48 lg:py-64 xl:py-56 py-40">
            {/* <div className="bg-gray-200 md:py-20 lg:py-56 h-screen" style={{ backgroundImage: `url(${x1})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}> */}
                <p className="xl:mt-8 lg:py-48 xl:py-64 md:py-8 text-xl uppercase font-extrabold font-Oswald text-black">The best from the offer</p>
                <div className="lg:-mt-40 xl:-mt-56 md:-mt-12 bg-gray-200 h-screen" style={{ backgroundImage: `url(${x1})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                <div class="container xl:px-40 px-10 lg:px-16 mx-auto py-12 md:py-32 lg:py-24 xl:py-32">
                    <div class="flex flex-col md:flex-row">
                        <div class="lg:ml-8 lg:w-1/5 md:w-1/2 mt-2" >
                            <div class="block relative h-48 rounded overflow-hidden border-l-2 border-t-2 border-r-2 border-gray-400">
                                <img alt="img" class="object-cover object-center w-full h-full block" src={img} alt="img" />
                            </div>
                            <div class="mt-4 border-2 border-t-0">
                                <h3 class="text-base font-extrabold mb-1">BMW i8 Hybrid Concept</h3>
                                <div>
                                    <h2 class="my-2 w-1/2 ml-16 md:ml-10 title-font text-lg font-medium bg-yellow-300">1.390,00 kn</h2>
                                </div>
                            </div>
                        </div>
                        <div class="lg:ml-4 md:ml-4 lg:w-1/5 md:w-1/2  w-full mt-2">
                            <div class="block relative h-48 rounded overflow-hidden border-l-2 border-t-2 border-r-2 border-gray-400">
                                <img alt="img" class="object-cover object-center w-full h-full block" src={img} alt="img" />
                            </div>
                            <div class="mt-4 border-2 border-t-0">
                                <h3 class="text-base font-extrabold mb-1">BMW i8 Hybrid Concept</h3>
                                <div>
                                    <h2 class="my-2 w-1/2 ml-16 md:ml-10 title-font text-lg font-medium bg-yellow-300">1.390,00 kn</h2>
                                </div>
                            </div>
                        </div>
                        <div class="lg:ml-4 lg:w-1/5  md:ml-4 md:w-1/2 mt-2 w-full">
                            <div class="block relative h-48 rounded overflow-hidden border-l-2 border-t-2 border-r-2 border-gray-400">
                                <img alt="img" class="object-cover object-center w-full h-full block" src={img} alt="img" />
                            </div>
                            <div class="mt-4 border-2 border-t-0">
                                <h3 class="text-base font-extrabold mb-1">BMW i8 Hybrid Concept</h3>
                                <div>
                                    <h2 class="my-2 w-1/2 ml-16 md:ml-10 title-font text-lg font-medium bg-yellow-300">1.390,00 kn</h2>
                                </div>
                            </div>
                        </div>
                        <div class="lg:ml-4 lg:w-1/5  md:ml-4 md:w-1/2 mt-2 w-full">
                            <div class="block relative h-48 rounded overflow-hidden border-l-2 border-t-2 border-r-2 border-gray-400">
                                <img alt="img" class="object-cover object-center w-full h-full block" src={img} alt="img" />
                            </div>
                            <div class="mt-4 border-2 border-t-0">
                                <h3 class="text-base font-extrabold mb-1">BMW i8 Hybrid Concept</h3>
                                <div>
                                    <h2 class="my-2 w-1/2 ml-16 md:ml-10 title-font text-lg font-medium bg-yellow-300">1.390,00 kn</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="py-16 uppercase font-extrabold text-xs">Review the entire offer</p>
                </div>
            </div>
            </div>
        )
    }
}

export default Features;