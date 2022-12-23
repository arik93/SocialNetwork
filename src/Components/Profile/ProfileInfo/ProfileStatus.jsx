import React, { useState, useEffect } from 'react';

const ProfileStatus = (props) => {
  const {
    status,
    updateUserStatus
  } = props;

  useEffect(() => {
    setStatusState(status);
  }, [status]);

  const [editMode, setEditMode] = useState(false);
  const [statusState, setStatusState] = useState(status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateUserStatus(statusState);
  };

  const onStatusChange = (e) => {
    setStatusState(e.currentTarget.value)
  };

  return (
    <div>
      {
        editMode === false ?
          <div>
            <span onDoubleClick={activateEditMode}>
              {status || "Нет Статуса"}
            </span>
          </div>
          :
          <div>
            <input autoFocus={true} onBlur={deactivateEditMode} type="text" value={statusState} onChange={onStatusChange} />
          </div>
      }
    </div>
  )
}

export default ProfileStatus;
