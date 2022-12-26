import Paginator from '../Common/Paginator/Paginator';
import User from './User';

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
  } = props;

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <Paginator 
        onPageChange={onPageChange}
        pageSize={pageSize}
        totalItemsCount={totalUsersCount}
        currentPage={currentPage}
        portionSize={10}
      />
      {
        users.map((user) => {
          return (
            <User 
              key={user.id} 
              user={user} 
              followingInProgress={followingInProgress} 
              follow={follow} 
              unfollow={unfollow} 
            />
          )
        })
      }
    </div>
  )
}
