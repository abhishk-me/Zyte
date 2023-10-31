import { Select } from 'antd';
import React, { FC } from 'react';

interface Props {
  value: number;
  onChange: (value: number) => void
}

export const MaxWidth: FC<Props> = ({ value, onChange }) => {
  return (
    <div className='pl-2 py-1 flex flex-row items-center'>
      <p className='w-20 opacity-60 font-medium'>Width</p>
      <div className='flex-1'>
        <Select
          value={`${value}`}
          onChange={(val) => onChange(parseInt(val))}
          suffixIcon={<i className='icon-ChevronDownMinor text-lg' />}
          className='w-full text-sm'
          options={[{
            value: "1",
            label: <span className='text-sm'>Max width - SM</span>
          },
          {
            value: "2",
            label: <span className='text-sm'>Max width - MD</span>
          },
          {
            value: "3",
            label: <span className='text-sm'>Max width - LG</span>
          },
          {
            value: "4",
            label: <span className='text-sm'>Max width - XL</span>
          },
          {
            value: "5",
            label: <span className='text-sm'>Max width - 2XL</span>
          },
          {
            value: "6",
            label: <span className='text-sm'>Max width - FULL</span>
          },]}
        />
      </div>
    </div>
  )
}