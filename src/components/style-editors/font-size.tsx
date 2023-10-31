import React, { FC } from 'react';
import { CustomInputNumber } from './input-number';

interface Props {
  size: number;
  sizeMobile?: number;
  desktopOnly?: boolean;
  onChange: (size: number, sizeMobile?: number) => void
}

export const FontSize: FC<Props> = ({ size, sizeMobile, onChange, desktopOnly }) => {
  return (
    <>
      <div className='pl-2 py-1 flex flex-row items-center'>
        <p className='w-20 opacity-60 font-medium'>Size</p>
        <div className='flex-1 flex-col overflow-hidden'>
          <CustomInputNumber
            onChange={(val) => onChange(val, sizeMobile)}
            fullWidth
            min={0}
            value={size}
          />
        </div>
        {!desktopOnly && <div className='flex-1 flex-col pl-2 overflow-auto'>
          <CustomInputNumber
            onChange={(val) => onChange(size, val)}
            fullWidth
            min={0}
            value={sizeMobile || size}
          />
        </div>}
      </div>
      {!desktopOnly && <div className='pl-2 pb-2 -mt-1 flex flex-row items-center'>
        <p className='w-20'></p>
        <p className='flex-1 pl-3 text-xs opacity-50 overflow-hidden'>
          Desktop
        </p>
        <p className='flex-1 pl-3 text-xs opacity-50 overflow-hidden'>
          Mobile
        </p>
      </div>}
    </>
  )
}