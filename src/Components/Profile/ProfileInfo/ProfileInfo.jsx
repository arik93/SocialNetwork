import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import UserPhoto from './../../../Images/pepega.jpg';
import UserStyle from './../../Users/User.module.css';
import ProfileStatus from './ProfileStatus'

export default function ProfileInfo(props) {
  const {
    profile,
    status,
    updateUserStatus
  } = props;

  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <ProfileStatus status={status} updateUserStatus={updateUserStatus} />

      <img className={UserStyle.userPhotoStyle} src={profile.photos.small || UserPhoto} alt="" />
      <br />
      <span>О Себе: {profile.aboutMe}</span>
      <br />
      <span>Имя: {profile.fullName}</span>
      <br />
      <span>Ищу работу: {profile.lookingForAJob ? "да" : "нет"}</span>
      <br />
      <span>Статус работы: {profile.lookingForAJobDescription}</span>
    </div>
  )
}
