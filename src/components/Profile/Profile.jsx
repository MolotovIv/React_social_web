import MyPosts from './My Posts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";



const Profile = (props) => {

       return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.postsData}
                     addPost={props.addPost}
                     newPost={props.profilePage.newPostText}
                     updatePost={props.updatePost}
                      />
        </div>
    )
}

export default Profile;