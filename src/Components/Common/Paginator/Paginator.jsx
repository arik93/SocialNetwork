import { useState } from 'react';
import PaginatorStyle from './Paginator.module.css';

export default function Paginator(props) {

  const {
    onPageChange,
    pageSize,
    totalItemsCount,
    currentPage,
    portionSize
  } = props;

  const pagesAmount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesAmount; i++) {
    pages.push(i);
  };

  const portionAmount = Math.ceil(pagesAmount / portionSize);
  const [portionIndex, setPortionIndex] = useState(1);
  const portionLeftIndex = (portionIndex - 1) * portionSize + 1;
  const portionRightIndex = portionIndex * portionSize;

  const groupedPages = pages.filter((pageIndex) => {
    return (
      pageIndex >= portionLeftIndex && pageIndex <= portionRightIndex
    )
  });

  return (
    <div>
      {
        portionIndex > 1 ?
          <button onClick={() => { setPortionIndex(portionIndex - 1) }}>
            Prev
          </button>
          :
          null
      }

      {
        groupedPages.map((page) => {
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

      {
        portionAmount > portionIndex ?
          <button onClick={() => { setPortionIndex(portionIndex + 1) }}>
            Next
          </button>
          :
          null
      }
    </div>
  )
}