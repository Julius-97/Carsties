import { Pagination } from 'flowbite-react';
import React from 'react';

type Props = {
  currentPage: number;
  pageCount: number;
  pageChanged: (page: number) => void;
};

export default function AppPagination({
  currentPage,
  pageCount,
  pageChanged,
}: Props) {
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={pageChanged}
      totalPages={pageCount}
      layout='pagination'
      showIcons
      className='text-blue-500 mb-5'
    />
  );
}
