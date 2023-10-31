import React, { FC } from 'react';
import { Dropdown, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store/config';
import { authSignOutAction } from '../store/auth/action';

export const AccountButton: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((state: IState) => state.authReducer.user);
  const accountOptons: MenuProps['items'] = [
    {
      key: '3',
      label: (
        <p className='flex items-center font-medium text-red-600'>
          <i className='icon-ExitMajor transform rotate-180 mr-2' />
          <span>Log out</span>
        </p>
      ),
      onClick: () => {
        dispatch(authSignOutAction());
      }
    }
  ];

  if (!user) {
    return null
  }

  return (
    <>
      <div className='fixed inset-y-0 left-0 w-[80px] z-40 flex flex-col justify-end items-start p-4 cursor-pointer'>
        <Dropdown
          trigger={["click"]}
          placement='topRight'
          menu={{ items: accountOptons }}
          dropdownRender={(menu) => (
            <div className='bg-white rounded-xl shadow-xl border-contrast-10'>
              <div className='w-60 flex items-center px-3 py-3 border-b border-b-contrast-10'>
                <div className='h-12 w-12 rounded-xl flex items-center justify-center bg-red-100'>
                  <span className='uppercase'>{user.firstName[0]}{user.lastName[0]}</span>
                </div>
                <div className='flex flex-1 flex-col pl-3'>
                  <p className='font-medium'>{user.firstName} {user.lastName}</p>
                </div>
              </div>
              {React.cloneElement(menu as React.ReactElement, { style: { boxShadow: "none" } })}
            </div>
          )}
        >
          <div className='h-12 w-12 flex items-center justify-center bg-black border-2 border-white shadow-xl rounded-full'>
            <span className='text-sm capitalize font-bold opacity-80 text-white'>{user?.firstName[0] || "A"}{user?.lastName[0] || "B"}</span>
          </div>
        </Dropdown>
      </div>
    </>
  )
}