import { Select } from 'antd';
import React, { FC } from 'react';
import { CustomInputNumber } from './input-number';
import { HeightWidthType } from '../../pages/editor/types';
import { ChevronDown } from 'react-feather';

interface Props {
  disable?: HeightWidthType
  label: string
  type: HeightWidthType
  value: number;
  onChange: (height: number, type: HeightWidthType) => void
}

export const HeightWidth: FC<Props> = ({ label, value, type, onChange, disable }) => {

  const onChangeHandler = (_val: number, _type: HeightWidthType) => {
    if (_type === "RELATIVE") {
      const _h = Math.max(Math.min((_val || 1), 2), 0.5);
      onChange(_h, "RELATIVE")
    }
    else if (_type === "PIXELS") {
      onChange(_val || 1, "PIXELS")
    }
    else {
      onChange(_val || 1, _type)
    }
  }
  return (
    <>
      <div className='pl-2 py-1 flex flex-row items-center'>
        <p className='w-20 opacity-60 font-medium'>{label}</p>
        <CustomInputNumber
          disabled={type === "AUTO" || type === "FULL"}
          min={type === "RELATIVE" ? 0.4 : 0}
          max={type === "RELATIVE" ? 2 : undefined}
          step={type === "RELATIVE" ? 0.05 : 1}
          value={value || 50}
          onChange={(val) => {
            onChangeHandler(val, type)
          }}
        />
        <div className='pl-2 flex-1 overflow-hidden'>
          <Select
            dropdownStyle={{ minWidth: 120 }}
            value={type}
            onChange={(val) => onChangeHandler(value, val)}
            suffixIcon={<ChevronDown size={14} />}
            className='w-full text-sm'
            options={[{
              disabled: disable === "FULL",
              value: "FULL",
              label: <span className='text-sm'>Full</span>
            },
            {
              disabled: disable === "AUTO",
              value: "AUTO",
              label: <span className='text-sm'>Auto</span>
            },
            {
              disabled: disable === "PIXELS",
              value: "PIXELS",
              label: <span className='text-sm'>Fixed</span>
            },
            {
              disabled: disable === "PERCENTAGE",
              value: "PERCENTAGE",
              label: <span className='text-sm'>Percentage</span>
            },
            {
              disabled: disable === "RELATIVE",
              value: "RELATIVE",
              label: <span className='text-sm over'>Aspect Ratio</span>
            }]}
          />
        </div>
      </div>
    </>
  )
}