import Lottie from 'lottie-react';
import loadingWave from '../../assets/wave.json';

const Home2 = () => {
    return (
        <div className="grid place-items-center min-h-screen">
            <div>
                <h2 className="md:text-6xl text-2xl text-center" >Welcome to <span className='text-[#ff0b34] font-semibold' >incogniChat</span></h2>
                <div className='w-[10rem] mx-auto text-black'>
                    <Lottie animationData={loadingWave} className='' />
                </div>
                <div className='grid place-content-center' >
                    {/* Open the modal using ID.showModal() method */}
                    <button className="btn btn-lg font-bold btn-primary px-20" onClick={() => window.my_modal_5.showModal()}>{"Let's Go"}</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <form method="dialog" className="modal-box">
                            <h3 className="font-bold text-lg">Hello! User</h3>
                            <p className="py-4">
                                Get ready for a sizzling online experience! Our website is cooking up something extraordinary just for you. Please bear with us as we, at IncogniChat, whip up a delectable blend of flavors, features, and functionality. We are passionate about creating an anonymous chat platform that will leave you craving for more!
                                <br />
                                <span className='inline-block mt-2 font-semibold' >Thank You</span>
                            </p>
                            <div className='flex justify-end' >
                                <p className='badge badge-outline text-[9px]' >This is only a prototype</p>
                            </div>
                            <div className="modal-action">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </div>
                        </form>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Home2;