import UsersStyle from './Users.module.css';
import UserPhoto from './../../Images/pepega.jpg';
import { NavLink } from 'react-router-dom';

export default function Users(props) {

  const {
    onPageChange,
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    followingInProgress,
    follow,
    unfollow
  } = props

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {
          pages.map((page) => {
            return (
              <span
                key={page}
                className={currentPage === page ? UsersStyle.selectedPage : UsersStyle.page}
                onClick={() => { onPageChange(page) }}
              >
                {page}
              </span>
            )
          })
        }
      </div>
      {
        users.map((user) => {
          return (
            <div key={user.id}>
              <span>
                <div>
                  <NavLink to={"/profile/" + user.id}>
                    <img
                      alt=''
                      className={UsersStyle.userPhotoStyle}
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
        })
      }
    </div>
  )
}
