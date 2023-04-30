import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const PostsComponent = () => {

    const {postReducer: posts, userReducer: users} = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                dispatch({type: 'LOAD_POSTS', payload: value});
            });

    }, [])
    console.log(posts);
    return (
        <div>
            {
                posts.map(value => <div key={value.id}>{value.title}</div>)

            }
        </div>
    );
};

export default PostsComponent;
