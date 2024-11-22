import { useEffect, useState } from "react";
import moment from 'moment';
import { BsBookmarksFill } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = () => {

    const [newses, setNewses] = useState([])

    useEffect(() => {
        fetch('/public/demo-data/news.json')
            .then(res => res.json())
            .then(data => setNewses(data))
    }, [])


    return (
        <div>
            <h1 className="text-2xl font-bold pb-5">Dragon News Home</h1>
            <div>
                {
                    newses.map(news => <>
                        <div>

                            {/* card author section */}
                            <div className="flex justify-between py-2 rounded-t-md px-2 my-2">
                                <div className="flex items-center gap-4">
                                    <img className="w-10 rounded-full" src={news.author.img} alt="" />
                                    <div>
                                        <p className="text-base font-bold">
                                            {news.author.name}
                                        </p>
                                        <p>
                                            {moment().format(" MMMM D YYYY")}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <BsBookmarksFill />
                                    <FaShareAlt />
                                </div>

                            </div>

                            {/* news layout section */}

                            <div>
                                <div className="card bg-base-100 px-5 pt-5  shadow-xl">
                                <h1 className="text-2xl font-bold">{news.title}</h1>
                                    <figure className="pt-5">
                                        <img
                                            src={news.image_url}
                                            alt="Shoes"
                                            className="rounded-xl" />
                                    </figure>
                                    
                                        
                                        <p className="py-10">{news.details.slice(0,270)} 
                                        <Link className="underline text-amber-300 font-bold" to={`/news/${news._id}`}>ReadMore</Link>
                                        </p>
                                        
                                        
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default NewsCard;