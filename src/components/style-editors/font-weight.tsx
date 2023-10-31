import { Select } from 'antd';
import React, { FC } from 'react';
import { ChevronDown } from 'react-feather';

interface Props {
  value: 400 | 500 | 600 | 700 | 800;
  onChange: (value: 400 | 500 | 600 | 700 | 800) => void
}

export const FontWeight: FC<Props> = ({ value, onChange }) => {
  return (
    <div className='pl-2 py-1 flex flex-row items-center'>
      <p className='w-20 opacity-60 font-medium'>Weight</p>
      <div className='flex-1'>
        <Select
          value={value}
          onChange={onChange}
          suffixIcon={<ChevronDown size={14} />}
          className='w-full text-sm'
          options={[{
            value: 400,
            label: <span className='text-sm'>Regular</span>
          },
          {
            value: 500,
            label: <span className='text-sm'>Medium</span>
          },
          {
            value: 600,
            label: <span className='text-sm'>Semibold</span>
          },
          {
            value: 700,
            label: <span className='text-sm'>Bold</span>
          },
          {
            value: 800,
            label: <span className='text-sm'>Black</span>
          }]}
        />
      </div>
    </div>
  )
}