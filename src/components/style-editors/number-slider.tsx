import { ConfigProvider, Slider } from 'antd';
import React, { FC } from 'react';
import { CustomInputNumber } from './input-number';

interface Props {
  label: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void
}

export const SliderWithInput: FC<Props> = ({ label, min, max, step, value, onChange }) => {
  return (
    <div className='pl-2 py-1 flex flex-row items-center'>
      <p className='w-20 opacity-60 font-medium'>{label}</p>
      <CustomInputNumber
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
      <div className='flex flex-1 pl-2'>
        <ConfigProvider
          theme={{
            components: {
              Slider: {
                dotSize: 0,
                handleSize: 6,
                handleSizeHover: 5,
                railSize: 2,
                railBg: "#d0d0d0",
                railHoverBg: "#d0d0d0",
                trackBg: "#666bff",
                trackHoverBg: "#666bff",
                handleColor: "#666bff",
                handleActiveColor: "#666bff",
                dotBorderColor: "red",
                dotActiveBorderColor: "red"
              }
            }
          }}
        >
          <Slider
            onChange={onChange}
            step={step || 1}
            className='w-full'
            value={value}
            min={min}
            max={max}
          />
        </ConfigProvider>
      </div>
    </div>
  )
}