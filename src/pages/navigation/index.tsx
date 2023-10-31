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
          <div className='pr-4'>
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="0.013 0 70.987 19.309" xmlns="http://www.w3.org/2000/svg" viewBox="0.013 0 70.987 19.309" height="20" width="71" data-type="color" role="presentation" aria-hidden="true">
              <g>
                <path fill="#4633d7" d="M17.117 13.12a6.188 6.188 0 1 1-12.377 0 6.188 6.188 0 0 1 12.377 0ZM8 13.12a2.927 2.927 0 1 0 5.855 0 2.927 2.927 0 0 0-5.855 0Z" data-color="1"></path>
                <path fill="#4633d7" d="M.463 5.536a12.926 12.926 0 0 1 20.914-.025l-.007.005a1.822 1.822 0 1 1-2.924 2.13l-.007.005a9.29 9.29 0 0 0-15.032.018l-.005-.004A1.82 1.82 0 1 1 .468 5.539l-.005-.003Z" clipRule="evenodd" fillRule="evenodd" data-color="1"></path>
                <path fill="#4633d7" d="M32.84 8.908h-1.776V6.282h1.777v-.824c0-.755.12-1.459.36-2.111a5.432 5.432 0 0 1 1.082-1.725A4.842 4.842 0 0 1 36.008.438C36.694.146 37.467 0 38.325 0A7.744 7.744 0 0 1 41.8.798c.533.258 1.039.55 1.52.875l-1.365 2.575a5.338 5.338 0 0 0-1.57-.953 4.89 4.89 0 0 0-1.828-.36c-.498 0-.919.112-1.262.335a2.11 2.11 0 0 0-.773.875 2.98 2.98 0 0 0-.231 1.184v.953h3.027v2.626h-3.027v10.144h-3.45V8.908Zm7.235.89v9.254h3.45V6.282h-3.448v3.517h-.002Zm14.247 9.511c-1.03 0-1.948-.231-2.755-.695a5.075 5.075 0 0 1-1.905-1.905v2.343H46.65V.257h3.45V7.93a5.403 5.403 0 0 1 1.88-1.906c.789-.463 1.707-.695 2.754-.695.875 0 1.673.19 2.394.567a5.44 5.44 0 0 1 1.854 1.519 6.889 6.889 0 0 1 1.21 2.24 8.19 8.19 0 0 1 .438 2.703c0 .961-.163 1.862-.49 2.703a7.132 7.132 0 0 1-1.312 2.24 6.146 6.146 0 0 1-2.009 1.493c-.755.344-1.587.515-2.497.515Zm-.953-2.935a3.52 3.52 0 0 0 1.494-.309 3.799 3.799 0 0 0 1.184-.875c.343-.36.6-.781.772-1.262a4.32 4.32 0 0 0 .284-1.544c0-.738-.155-1.416-.464-2.034a3.728 3.728 0 0 0-1.236-1.52c-.514-.377-1.124-.566-1.828-.566-.497 0-.978.12-1.441.36-.447.224-.85.533-1.21.928a4.852 4.852 0 0 0-.824 1.338v3.219c.103.343.266.652.489.927.24.274.515.514.824.72.309.19.626.344.952.464.344.103.678.154 1.005.154Zm14.825-7.209c.823-.411 1.759-.617 2.806-.617V5.407a1.083 1.083 0 0 0-.258-.026h-.437c-.824.051-1.605.343-2.343.875s-1.347 1.262-1.828 2.189V5.56h-3.167v13.49h3.45v-8.16c.36-.756.953-1.33 1.777-1.726Z" clipRule="evenodd" fillRule="evenodd" data-color="1"></path>
              </g>
            </svg>
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