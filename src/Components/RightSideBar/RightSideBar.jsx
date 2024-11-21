import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import qzone1 from '../../../public/assets/playground.png'
import qzone2 from '../../../public/assets/swimming.png'
import qzone3 from '../../../public/assets/class.png'
import addsec from '../../../public/assets/bg.png'

const RightSideBar = () => {
    return (
        <div>
            <div className="p-4 ">
                <h1 className="text-2xl font-bold mb-4">LogIn With</h1>
                <button className="btn btn-outline w-full mb-2">
                <FcGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub />
                    Google
                </button>
            </div>
            <div className="p-4 ">
                <h1 className="text-2xl font-bold mb-3">Find Us On</h1>
                <a className="flex items-center text-lg ml-4 gap-2" href=""><FaFacebook /> <span>Facebook</span></a>
                <a className="flex items-center text-lg ml-4 gap-2" href=""><FaTwitter /> <span>Twitter</span></a>
                <a className="flex items-center text-lg ml-4 gap-2" href=""><FaInstagram /> <span>Instagram</span></a>
            </div>
            <div className="p-4 text-2xl font-bold "> 
                <h2>Q-Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
            <div>
                <img className="mx-auto" src={addsec} alt="" />
            </div>
        </div>
    );
};

export default RightSideBar;