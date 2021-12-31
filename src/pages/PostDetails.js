import {useEffect, useState} from "react";
import ApiService from "../services/api.service";
import {useParams} from "react-router-dom";

export default function PostDetails() {
    let [post, setPost] = useState({});
    let apiService = new ApiService('posts');
    let {id} = useParams();


    useEffect(() => {
        apiService.getSingleData(id).then(value => setPost(value));
    }, [id]);

    return (
        <div>
            {JSON.stringify(post)}


        </div>
    );
}
