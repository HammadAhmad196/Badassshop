import React from 'react';
import background from '../assets/background.png';
// import purchase from '../assets/purchase.png';

class Navigation extends React.Component {
    render() {
        return (
            <>
                <div style={{ background: `transparent url(${background}) no-repeat scroll center`, backgroundSize: "cover" }}>
                    <div className="py-4">
                        <div className="flex justify-center items-center">
                            <p className="text-">NEW STUFF FOR YOU IN OUR STORE TODAY 25% DISCOUNT</p>
                        </div>
                        {/* <img className="ml-24 -mt-6" src={purchase} alt="purchase" /> */}
                    </div>
                </div>
            </>
        );
    }
}
export default Navigation;