import ProfileReducer from './Reducers/ProfileReducer';
import DialogReducer from './Reducers/DialogReducer';

const store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          text: "yoyo",
        },
        {
          id: 2,
          text: "hello world",
        },
        {
          id: 3,
          text: "hello!",
        }
        , {
          id: 4,
          text: "How are you doing?",
        }
      ],
      newPostText: ""
    },
    dialogPage: {
      dialogusers: [
        {
          id: 1,
          username: "Амина"
        },
        {
          id: 2,
          username: "Аркаша"
        },
        {
          id: 3,
          username: "Катя"
        },
        {
          id: 4,
          username: "Денис"
        }
      ],
      messages: [
        {
          id: 1,
          messagetext: "Hey! How are you?"
        },
        {
          id: 2,
          messagetext: "WataFUK"
        },
        {
          id: 3,
          messagetext: "What's up?"
        },
        {
          id: 4,
          messagetext: "Yoyoyo mazafaka!"
        }
      ],
      newMessageBody: "" 
    }
  },
  _callSubscriber() {}, // пустая функция
  

  subscribe(observer) { // функция-подписчик
    this._callSubscriber = observer;
  },
  getState() {
    return this._state
  },


  dispatch(action) { // ACTION example: {type: "UPDATE-TEXT", text: "new text"}

    this._state.profilePage = ProfileReducer(this._state.profilePage, action);
    this._state.dialogPage = DialogReducer(this._state.dialogPage, action);

    this._callSubscriber(this._state);
  }
}

export default store;