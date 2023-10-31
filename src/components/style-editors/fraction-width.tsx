import React, { FC } from 'react';
import { CustomInputNumber } from './input-number';

interface Props {
  value: number;
  onChange: (height: number) => void
}

export const FractionWidth: FC<Props> = ({ value, onChange }) => {
  return (
    <>
      <div className='pl-2 py-1 flex flex-row items-center'>
        <p className='w-20 opacity-60 font-medium'>{"Width"}</p>
        <CustomInputNumber
          min={1}
          max={6}
          step={1}
          value={value || 1}
          onChange={(val) => {
            onChange(val)
          }}
        />
        <span className='mx-1' />
        <div className='pl-1 flex self-stretch rounded-lg border border-light-10 flex-1 bg-light-3 items-center overflow-hidden'>
          <p className='font-medium text-sm pl-2'>Fraction</p>
        </div>
      </div>
    </>
  )
}