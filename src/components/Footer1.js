import React from 'react'
import Input from '../assets/Input.png';
import Promo from '../assets/Promo.png';
import img7 from '../assets/img7.png';
import Social from '../assets/Social.png';
import Rectangle43 from '../assets/Rectangle43.png';
import bg from '../assets/bg.png';

class Footer extends React.Component {
    render() {
        return (
            <div className="h-screen" style={{ backgroundImage: `url(${Rectangle43})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                {/* <div className="h-screen" style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}> */}
                    <div className=" h-screen" style={{ backgroundImage: `url(${img7})`, backgroundPosition: "left", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                    {/* <img className=""  src={bg} alt="img" /> */}
                        <div className="h-screen md:-mt-8 px-8 ">
                            <div className="" style={{ border: "1px solid", borderLeft: "0px", borderBottom: "0px", borderTop: "0px" }}>
                                <div className="md:-mt-32 float-right md:float-right md:mr-20 lg:mr-32 xl:mr-40 mt-4 mr-4">
                                    <p className=" xl:text-4xl md:-mr-4 xl:mr-24 text-2xl md:text-4xl font-Oswald font-extrabold">BADASS</p>
                                    <p className=" md:-mr-4 xl:mr-24  text-base md:text-xs font-Oswald font-extrabold">S H O P</p>
                                    <img className="md:-mr-4 xl:mr-24 md:w-32 w-20" src={Social} alt="img" />
                                </div>
                                <div className="md:w-full md:h-screen">
                                    <div className="container mx-auto">
                                        <div className="flex py-8 md:py-12 xl:py-20">
                                            <div className=" md:mt-0 md:h-full md:w-full flex flex-col md:flex-row justify-between" style={{ textAlign: "left" }}>
                                                <div className="flex flex-col md:px-16 lg:px-24 xl:px-32">
                                                    <span className="font-bold text-Oswald uppercase mb-2">SUPPORT</span>
                                                    <span className=""><a href="#" className="text-Oswald font-Oswald text-xs">Payment methods</a></span>
                                                    <span className=""><a href="#" className="text-Oswald font-Oswald text-xs" >Delivery methods</a></span>
                                                    <span className=""><a href="#" className="text-Oswald font-Oswald text-xs" >Postage and shipping</a></span>
                                                    <span className=""><a href="#" className="text-Oswald font-Oswald text-xs" >Returns and complaints</a></span>
                                                    <span className=""><a href="#" className="text-Oswald font-Oswald text-xs" >Wholesale</a></span>
                                                    <span className=""><a href="#" className="text-Oswald font-Oswald text-xs" >Privacy policy</a></span>
                                                    <span className=""><a href="#" className="text-Oswald font-Oswald text-xs" >Cookie policy</a></span>
                                                    <span className=""><a href="#" className="text-Oswald font-Oswald text-xs" >User registration</a></span>
                                                    <span className=""><a href="#" className="text-Oswald font-Oswald text-xs" >Terms of use</a></span>
                                                </div>
                                                <div className="flex flex-col md:px-20 lg:px-32 xl:px-40">
                                                    <span className="font-Oswald font-bold uppercase mt-4 md:mt-0 mb-2 text-xs">NEWSLETTER</span>
                                                    <span className=""><a href="#" className="text-Oswald font-Oswald font-extrabold">You want extra</a></span>
                                                    <span className=""><a href="#" className="text-Oswald font-Oswald  font-extrabold">discounts?</a></span>
                                                    <span className=""><a href="#" className="text-Oswald font-Oswald text-xs">Read more about the processing of your</a></span>
                                                    <span className=""><a href="#" className="text-Oswald font-Oswald text-xs"> personal data on the PRIVACY POLICY page.</a></span>
                                                    <img className="my-4" src={Input} alt="img" />
                                                    <img className="my-4" src={Promo} alt="img" />
                                                </div>
                                                <div className="flex flex-col md:px-24 lg:px-40 xl:px-48">
                                                    <span className=""><a href="#" className="text-xs text-Oswald font-Oswald ">About us</a></span>
                                                    <span className=""><a href="#" className="text-xs text-Oswald font-Oswald ">Blog</a></span>
                                                    <span className=""><a href="#" className="text-xs text-Oswald font-Oswald ">general conditions</a></span>
                                                    <span className=""><a href="#" className="text-xs text-Oswald font-Oswald ">BADASSshop Club</a></span>
                                                    <span className=""><a href="#" className="text-xs text-Oswald font-Oswald ">Contact</a></span>
                                                    <span className=""><a href="#" className="text-xs text-Oswald font-Oswald ">Imprint</a></span>
                                                    <span className=""><a href="#" className="text-xs text-Oswald font-Oswald ">Complaints and objections</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            // </div>
        )
    }
}
export default Footer;