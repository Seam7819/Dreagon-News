import { useParams } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";

const NewsDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <Navbar></Navbar>
            <h1>News Details</h1>
            <p>{id}</p>
        </div>
    );
};

export default NewsDetails;