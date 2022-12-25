import PaginatorStyle from './Paginator.module.css';

export default function Paginator(props) {

  const {
    onPageChange,
    pageSize,
    totalUsersCount,
    currentPage,
  } = props;

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {
        pages.map((page) => {
          return (
            <span
              key={page}
              className={currentPage === page ? PaginatorStyle.selectedPage : PaginatorStyle.page}
              onClick={() => { onPageChange(page) }}
            >
              {page}
            </span>
          )
        })
      }
    </div>
  )
}
