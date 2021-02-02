import React from 'react'
import img4 from '../assets/img4.png';
import img7 from '../assets/img7.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';



class Blogs extends React.Component {
    render() {
        return (
            <div className="flex flex-col md:flex-row md:px-10 xl:px-12 lg:px-16 px-4 xl:py-16 md:py-32">
                <div className="">
                    {/* <p className="py-4 ml-12 text-left font-extrabold font-Oswald">Blogs</p> */}
                </div>
                <div class="w-full md:w-3/5 xl:w-6/12 flex md:flex-row md:py-12 py-16">
                    <div className="flex" style={{ border: "1px solid" }}>
                        <div className="mt-8">
                            <img className="xl:mr-16 md:mt-32" src={img4} alt="img4" />
                        </div>
                        <div className="flex items-center">
                            <div className="xl:mr-24 w-48">
                                <p className="font-extrabold font-Oswald mt-2 text-xl mr-4">An ideal gift for wine lovers and collectors</p>
                                <p className="font-Roboto text-xs mt-2 mr-4">If you choose wine by food, the basic rules say that white wines go well with fish, chicken, salads and pasta.</p>
                                <p className="font-Oswald text-xs mt-2 ml-6" style={{ backgroundColor: "#EEFF00", width: "80px" }}>FIND OUT MORE</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img className="md:hidden ml-4 md:ml-8 md:-mt-16 -mt-24 w-2/12 md:w-16 h-12" src={img7} alt="img7" />
                </div>
                <div className="md:py-4 flex flex-col xl:-ml-4 md:-ml-4">
                    <div class="md:w-full  flex md:px-8 md:py-8">
                        <div className="flex" style={{ border: "1px solid", borderLeft: "0px solid" }}>
                            <div className="mt-8">
                                <img className="xl:mr-16" src={img5} alt="img5" />
                            </div>
                            <div className="flex items-center">
                                <div className="xl:mr-24 w-48">
                                    <p className="font-extrabold font-Oswald mt-2 text-xl mr-4">An ideal gift for car lovers and collectors</p>
                                    <p className="font-Roboto text-xs mt-2 mr-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-full mt-8 w-full md:-mt-8 xl:-mt-4 flex md:px-8 md:py-8">
                        <div className="flex" style={{ border: "1px solid", borderLeft: "0px" }}>
                            <div className="mt-8">
                                <img className="xl:mr-16" src={img6} alt="img5" />
                            </div>
                            <div className="flex items-center">
                                <div className="xl:mr-24 w-48">
                                    <p className="font-extrabold font-Oswald mt-2 text-xl mr-4">An ideal gift for car lovers and collectors</p>
                                    <p className="font-Roboto text-xs mt-2 mr-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Blogs;