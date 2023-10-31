import { Select } from 'antd';
import React, { FC } from 'react';

interface Props {
  value: "FULL_WIDTH" | "CONTAINER";
  onChange: (value: "FULL_WIDTH" | "CONTAINER") => void
}

export const ContainerType: FC<Props> = ({ value, onChange }) => {
  return (
    <div className='pl-2 py-1 flex flex-row items-center'>
      <p className='w-20 opacity-60 font-medium'>Width</p>
      <div className='flex-1'>
        <Select
          value={value}
          onChange={onChange}
          suffixIcon={<i className='icon-ChevronDownMinor text-lg' />}
          className='w-full text-sm'
          options={[{
            value: "FULL_WIDTH",
            label: <span className='text-sm'>Full width</span>
          },
          {
            value: "CONTAINER",
            label: <span className='text-sm'>Contained</span>
          }]}
        />
      </div>
    </div>
  )
}