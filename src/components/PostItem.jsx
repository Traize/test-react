import React from 'react';
import MyButton from './UI/button/MyButton';
import {useHistory} from "react-router-dom";

const PostItem = (props) => {
    const history = useHistory()
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className='post__btns'>
                <MyButton onClick={() => history.push(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
