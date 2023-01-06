import Paginator from '../Common/Paginator/Paginator';
import User from './User';

export default function Users(props) {

  const {
    onPageChange,
    users,
    pageSize,
    totalUsersAmount,
    currentPage,
    followingInProgress,
    follow,
    unfollow
  } = props;

  return (
    <div>
      <Paginator 
        onPageChange={onPageChange}
        pageSize={pageSize}
        totalItemsAmount={totalUsersAmount}
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
