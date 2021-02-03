import React from 'react';
import auction from '../assets/auction.png';
import white from '../assets/white.png';
import chair3 from '../assets/chair3.png';
import line from '../assets/line.png';
import action from '../assets/action.png';
import chair1 from '../assets/chair1.png';
import plus from '../assets/plus.png';
import text from '../assets/text.png';




class Chairs extends React.Component {
    render() {
        return (
            <div className="bg-gray-200 md:py-8 py-16">
                <div className="flex flex-col justify-center items-center">
                    <img src={auction} alt="img" />
                    <h1 className="text-xl text-center font-extrabold font-Oswald absolute">CHAIR HALS</h1>
                </div>
                <div className="xl:py-24 xl:ml-20 lg:-mt-56 md:-mt-64 md:flex md:flex-row -mt-12">
                    <div className="lg:-ml-12 xl:-ml-1 md:-ml-40 flex flex-col md:flex-row justify-center items-center">
                        <img src={white} alt="img" />
                        <img src={chair3} className=" absolute" alt="img" />
                        <img src={line} className="absolute w-16 md:w-32 md:-ml-32 -ml-24" alt="img" />
                        <img src={action} className="absolute ml-24 w-10 md:w-40 md:ml-32" alt="img" />
                    </div>
                    <div className="py-16 -mt-8 md:-mt-1 flex md:flex-row justify-center items-center lg:mr-40 xl:mr-64">
                        <img src={chair1} className="absolute xl:w-56 lg:-ml-16 xl:ml-8 md:-ml-24  md:w-1/6 lg:w-1/6" alt="img" />
                    </div>
                    <div className="py-64 flex md:flex-row xl:ml-32 lg:-ml-8 md:w-32 flex-col justify-center items-center ">
                        <img className="absolute md:w-2/6 xl:w-1/4 lg:w-1/4" src={plus} alt="img" />
                        <img className="absolute" src={chair3} alt="img" />
                        <img src={text} className="absolute w-20 md:-ml-16 xl:-ml-24 -ml-24" alt="img" />
                        <img src={line} className="absolute w-16 md:w-16 md:ml-16 xl:ml-20  ml-20" alt="img" />
                    </div>
                </div>
                <div className="-mt-16 flex md:-mt-56 xl:-mt-64 md:flex md:flex-col flex-col justify-center items-center">
                    <p className="xl:text-xl font-extrabold font-Oswald">Reserve price</p>
                    <p className="xl:text-lg text-xl font-extrabold font-Oswald">1.390,00 USD</p>
                    <p className="xl:text-base font-extrabold font-Oswald">BID NOW</p>
                    <p className="xl:text-sm font-Roboto">Register to bid!</p>
                </div>
            </div>
        )
    }
}
export default Chairs;