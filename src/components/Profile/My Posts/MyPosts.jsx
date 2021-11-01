import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from "react";


const MyPosts = (props) => {

    let posts =
        props.posts.map(p => <Post message={p.message} likescount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
             let text = newPostElement.current.value;
               props.addPost(text);
            }

    let onChangeClick=() =>{
        let text = newPostElement.current.value;
        props.updatePost(text);
    };

    return (
        <div className={classes.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea onChange={onChangeClick} ref={newPostElement} value={props.newPost}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;