let rerenderEntireTree=()=> {
    console.log('state was changed')
}
let state = {

    profilePage: {
        postsData: [
            {id: 1, message: 'Hello how are you', likesCount: 12},
            {id: 2, message: 'Its mine first message', likesCount: 11},
            {id: 3, message: 'Red-black number 1', likesCount: 88},
            {id: 4, message: 'ACA..', likesCount: 0},
        ],
        newPostText: 'Molotov Developer'

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Ivan', avatar: 'https://pbs.twimg.com/media/EyhdKXdWYAAwAhi.jpg'},
            {id: 2, name: 'Anna', avatar: 'https://misanec.ru/wp-content/uploads/2018/05/nec.jpg'},
            {
                id: 3,
                name: 'Budzeggg',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqx63LDV58Ua4vYQBdYiOe1AVsu696MKcjw&usqp=CAU'
            },
            {
                id: 4,
                name: 'Barsuk',
                avatar: 'https://yt3.ggpht.com/ytc/AKedOLT6lDubs9sE9gflMmjdmbUPbaA20gIYUBAbaGDn=s900-c-k-c0x00ffffff-no-rj'
            },
            {id: 5, name: 'Murovei', avatar: 'https://sun1-18.userapi.com/c846122/v846122234/1c9624/YRcpmR-aDNE.jpg'},
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'i want to be react developer'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yo'},
        ],
        newMessageText: 'mo lotReact'
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updatePost = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = ' ';
    rerenderEntireTree();
}
export const updateMessage = (Message) => {
    state.dialogsPage.newMessageText = Message;
    rerenderEntireTree(state);
}

export default state

export const subscribe=(observer)=> {
    rerenderEntireTree=observer;
};