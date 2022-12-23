import React from 'react';
import DialogsStyle from './Dialogs.module.css';
import SendMessageForm from '../Forms/DialogForm';

const {
  dialogsWrapper,
  user,
  dialogMessages,
  message,
} = DialogsStyle;

export default function Dialogs(props) {

  const {
    sendMessage,
    dialogUsers,
    messages,
  } = props;

  const mapUsersFunc = dialogUsers.map((user) => {
    return (
      <div className={message} key={user.id}>
        {user.username}
      </div>
    )
  });
  const mapMessagesFunc = messages.map((message) => {
    return (
      <div className={user} key={message.id}>
        {message.messagetext}
      </div>
    )
  });

  const onSubmit = (formData) => {
    console.log(formData);
    sendMessage(formData.newMessageBody);
  };

  return (
    <div className={dialogsWrapper}>
      <div className={dialogUsers}>
        {mapUsersFunc}
      </div>
      <div className={dialogMessages}>
        <div>{mapMessagesFunc}</div>
        <SendMessageForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}
