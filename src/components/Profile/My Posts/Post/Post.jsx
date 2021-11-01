import classes from './Post.module.css'

const Post = (props) => {

    return (
        <div>
            <div className={classes.item}>
                <img src="https://pbs.twimg.com/media/EyhdKXdWYAAwAhi.jpg"/>
                {props.message}
            </div>
            <span>{props.likescount}</span>
        </div>
    )
}

export default Post;