import UserStyle from './User.module.css';
import UserPhoto from './../../Images/pepega.jpg';
import { NavLink } from 'react-router-dom';

export default function User(props) {

  const {
    user,
    followingInProgress,
    follow,
    unfollow
  } = props;

  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              alt=''
              className={UserStyle.userPhotoStyle}
              src={
                user.photos.small !== null
                  ? user.photos.small
                  : UserPhoto
              }
            />
          </NavLink>
        </div>
        <div>
          {
            user.followed ?
              <button
                disabled={followingInProgress.some(id => id === user.id)}
                onClick={() => { unfollow(user.id) }}
              >
                Unfollow
              </button>
              :
              <button
                disabled={followingInProgress.some(id => id === user.id)}
                onClick={() => { follow(user.id) }}
              >
                Follow
              </button>
          }
        </div>
      </span>

      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  )
}
