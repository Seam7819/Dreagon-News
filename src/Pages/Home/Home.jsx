import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import Header from "../../Components/Shared/Header/Header";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import NewsCard from "./NewsCard";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 mt-10">
                <div className="">
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="col-span-2 ">
                    <NewsCard></NewsCard>
                </div>
                <div className="">
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;