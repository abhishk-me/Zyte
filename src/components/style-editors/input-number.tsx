import { InputNumber } from 'antd';
import React, { FC } from 'react';

interface Props {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  fullWidth?: boolean;
  onChange: (value: number) => void;
  disabled?: boolean
}

export const CustomInputNumber: FC<Props> = ({ value, disabled, min = 0, max, step = 1, fullWidth, onChange }) => {
  return (
    <div className={`${fullWidth ? 'w-full' : 'w-[70px]'}`}>
      <InputNumber
        disabled={disabled}
        value={value}
        min={min}
        max={max}
        step={step}
        className='peer py-0.5 text-sm w-full'
        onChange={(value) => value != null && onChange(value)}
      />

    </div>
  )
}