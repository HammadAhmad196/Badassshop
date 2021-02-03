import React from 'react'
import img7 from '../assets/img7.png';
import girl from '../assets/girl.png';




class Footer extends React.Component {
    render() {
        return (
            <div className="py-8 md:py-16 bg-gray-200">
                <div className="float-right">
                    <img className="w-8 md:w-32 lg:w-40 xl:w-48 mr-4" src={img7} alt="img" />
                </div>
                <div className="flex px-8 ">
                    <div className="w-1/2 py-8 px-4" style={{ border: "1px solid", borderRight: "0px" }}>
                        <p className="md:text-left text-left font-Oswald font-bold w-48 md:w-48 md:text-xl">Send a gift certificate</p>
                        <p className="md:text-left text-left font-Oswald font-bold text-4xl w-48 md:w-64 md:text-5xl">to a friend</p>
                        <p className="md:text-left text-left md:mt-4 font-Oswald font-bold w-56 text-xs md:w-64">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmodtempor invidunt ut labore
                        et dolore magna aliquyam erat, sed diam voluptua. </p>
                        <p className="md:text-left text-left font-Oswald font-bold  text-xs mt-4">Give a Voucher!</p>
                    </div>
                    <div className="-mr-16 md:-mt-12 md:mr-24 xl:-ml-40 md:-ml-12">
                        <div className="-ml-8 md:-ml-56 xl:mr-56 xl:-mt-4">
                            <img className="xl:-ml-56 lg:-ml-32 lg-mt-16" src={girl} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;