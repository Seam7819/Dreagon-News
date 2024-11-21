import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

const LeftSideBar = () => {

    const [categories, setCategories] = useState([])
    const [newses, setNewses] = useState([])

    useEffect(() => {
        fetch('/public/demo-data/news.json')
            .then(res => res.json())
            .then(data => setNewses(data))
    }, [])

    useEffect(() => {
        fetch('/public/demo-data/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold p-1 mb-4">All Category</h1>
            </div>

            {
                categories.map(category => <Link to={`/category/${category.id}`} className="block ml-6 mb-7 text-lg font-bold" key={category.id}>{category.name}</Link>)
            }

            <div>
                {
                    newses.map(news => <>
                        <div className="card card-compact bg-base-100 shadow-xl p-2 ">
                            <figure>
                                <img
                                    src={news.image_url}
                                    alt="news" />
                            </figure>
                        
                                <h2 className="card-title my-3">{news.title}</h2>
                                <div className="flex gap-2 my-3">
                                    <p>Sports</p><span>{moment().format(" MMMM D YYYY")}</span>
                                </div>
                                
                            
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default LeftSideBar;