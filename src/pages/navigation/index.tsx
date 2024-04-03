import React, { FC } from 'react';
import { IState } from '../../store/config';
import { useSelector } from 'react-redux';
import { Grid, List, Plus } from 'react-feather';
import { Button } from 'antd';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { PageStatus } from '../../types/common';
import { PageStatusChip } from '../../components/page-status-chip';
import { AccountButton } from '../../components/account-button';

const landingPages = [{
  thumb: "https://i.pinimg.com/474x/be/0e/9e/be0e9e81ee73ed0c82c7b489f6203a40.jpg",
  displayName: "Nike renew 2023",
  status: PageStatus.DRAFT
},
{
  thumb: "https://i.pinimg.com/474x/3b/0a/73/3b0a73a23c98102318b3875a932f5f35.jpg",
  displayName: "Nike renew 2023",
  status: PageStatus.DRAFT
},
{
  thumb: "https://i.pinimg.com/474x/f2/68/f8/f268f83eb4d4d4c1ceebb114c2b7682a.jpg",
  displayName: "Nike renew 2023",
  status: PageStatus.LIVE
},
{
  thumb: "https://i.pinimg.com/474x/af/ba/bd/afbabdc077b545aca45dccb4d19d1bb2.jpg",
  displayName: "Nike renew 2023",
  status: PageStatus.LIVE
},
{
  thumb: "https://i.pinimg.com/474x/f6/b3/47/f6b347e1efab567ce7c01c66eb215ce9.jpg",
  displayName: "Nike renew 2023",
  status: PageStatus.DRAFT
},
{
  thumb: "https://i.pinimg.com/474x/9b/93/c8/9b93c87d683a2095d464474898c552d0.jpg",
  displayName: "Nike renew 2023",
  status: PageStatus.ARCHIVED
}]

export const MainNavigation: FC = () => {
  const user = useSelector((state: IState) => state.authReducer.user);
  return (
    <>
      <AccountButton />
      <div className='fixed top-0 h-20 left-0 right-[360px] bg-white z-50'>
        <div className='flex flex-row items-center h-full px-4 bg-contrast-5'>
          <div className='pr-10 flex items-center'>
            <svg width="24" height="24" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M40 0H0V40C0 62.1 17.9 80 40 80H80V40C80 17.9 62.1 0 40 0ZM73.3 73.3H40C21.6 73.3 6.7 58.3 6.7 40V6.7H40C58.4 6.7 73.3 21.7 73.3 40V73.3Z" fill="black" />
                <path d="M40 13.3C25.3 13.3 13.3 25.2 13.3 40C13.3 54.8 25.3 66.7 40 66.7C54.7 66.7 66.7 54.7 66.7 40C66.7 25.3 54.7 13.3 40 13.3ZM40 60C29 60 20 51 20 40C20 29 29 20 40 20C51 20 60 29 60 40C60 51 51 60 40 60Z" fill="black" />
                <path d="M40 26.7C32.6 26.7 26.7 32.7 26.7 40C26.7 47.3 32.7 53.3 40 53.3C47.3 53.3 53.3 47.3 53.3 40C53.3 32.7 47.4 26.7 40 26.7ZM40 46.7C36.3 46.7 33.3 43.7 33.3 40C33.3 36.3 36.3 33.3 40 33.3C43.7 33.3 46.7 36.3 46.7 40C46.7 43.7 43.7 46.7 40 46.7Z" fill="black" />
              </g>
            </svg>
            <p className='text-2xl ml-2 font-semibold'>zyte</p>
          </div>
          <div className='flex flex-row items-center flex-1'>
            <div className='flex flex-row p-1.5'>
              <NavLink
                to={"/"}
                className={({ isActive }) => `w-36 py-2.5 cursor-pointer rounded-lg relative text-black no-underline ${isActive ? 'bg-contrast-8' : ' opacity-60 hover:opacity-100'}`}
              >
                <p className='text-center font-medium no-underline'>Landing pages</p>
              </NavLink>
              <NavLink
                to={"/analytics"}
                className={({ isActive }) => `w-28 py-2.5 cursor-pointer rounded-lg relative text-black no-underline ${isActive ? 'bg-contrast-8' : ' opacity-60 hover:opacity-100'}`}
              >
                <p className='text-center font-medium'>Analytics</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}