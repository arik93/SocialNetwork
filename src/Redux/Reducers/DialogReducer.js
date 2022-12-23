const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  dialogUsers: [
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
};

const DialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 5, messagetext: action.newMessageBody }]
      };

    default:
      return state;
  }
};

export const sendMessage = (newMessageBody) => {
  return ({
    type: SEND_MESSAGE,
    newMessageBody
  });
};

export default DialogReducer;