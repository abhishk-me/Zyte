import React, { FC } from 'react';
import { SegmentedTab } from '../segmented';
import { AlignCenter, AlignLeft, AlignRight } from 'react-feather';

interface Props {
  value: "left" | "center" | "right";
  onChange: (value: "left" | "center" | "right") => void
}

export const TextAlign: FC<Props> = ({ value, onChange }) => {
  return (
    <>
      <div className='pl-2 py-1 flex flex-row items-center'>
        <p className='w-20 opacity-60 font-medium'>Align</p>
        <div className='flex-1'>
          <SegmentedTab
            roundedlg
            onChange={(val: "left" | "center" | "right") => onChange(val)}
            value={value}
            options={[{
              value: "left",
              label: <AlignLeft size={16} />
            },
            {
              value: "center",
              label: <AlignCenter size={16} />
            },
            {
              value: "right",
              label: <AlignRight size={16} />
            }]}
          />
        </div>
      </div>
    </>
  )
}