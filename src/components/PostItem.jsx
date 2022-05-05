import React from 'react';
// import './styles/App.css';

const PostItem = (props) => {
    // console.log(props)

    return (

            <div className="post">
                <div className="post_content" >
                    <strong>{props.post.id}{props.post.title}</strong>
                      <div>{props.post.body}</div>
                      <div className="post_button">
                        <button>delete</button>
                    </div>
                </div>
            </div>

    );
};

export default PostItem;