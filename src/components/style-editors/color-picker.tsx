import { Input, Popover } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { useDebounce } from '../../utils/use-debounce';

interface Props {
  value?: string;
  onSelect: (value?: string) => void;
  label: string
}

export const ColorSelect: FC<Props> = ({ value, onSelect, label }) => {
  const [_value, setValue] = useState(value)
  const debouncedValue = useDebounce(_value, 200);
  useEffect(() => {
    onSelect(debouncedValue)
  }, [debouncedValue])
  return (
    <div className='pl-2 py-1 flex flex-row items-center'>
      <p className='w-20 opacity-60 font-medium'>{label}</p>
      <div className='flex flex-1'>
        <Popover
          content={<div className='w-60 p-1'>
            <div className='flex flex-row items-center flex-wrap'>
              {["#000000", "#ffffff", ""].map((color, idx) => (
                <div
                  role='button'
                  onClick={() => onSelect(color)}
                  className='h-8 w-8 mx-1 rounded-full overflow-hidden border-2 border-black shadow-lg cursor-pointer hover:border-black flex justify-center'
                  style={{ backgroundColor: color }}
                  key={idx}
                >
                  {!color && <div className='h-8 border-l-2 -ml-0.5 border-red-400 transform rotate-45' />}
                </div>
              ))}
            </div>
            <div className='px-1 pt-2'>
              <p className='p-1 text-sm font-medium'>Colour Picker</p>
              <Input
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)
                }}
                className='w-full'
                addonBefore={<div className='h-5 w-8 border-2 border-white rounded shadow-md overflow-hidden relative'>
                  <label className='absolute inset-0 block' style={{ backgroundColor: value || "transparent", cursor: "pointer" }} >
                    <input
                      value={value}
                      onChange={(e) => {
                        setValue(e.target.value)
                      }}
                      type='color'
                      className='absolute h-0 w-0 opacity-0 cursor-pointer'
                    />
                  </label>
                </div>}
              />
            </div>
          </div>}
          trigger={["click"]}
          placement="bottomRight"
          overlayClassName=" drop-shadow-2xl"
        >
          <button className='w-full flex flex-1 items-center bg-[#141414] text-white border border-light-15 rounded-lg p-1 cursor-pointer relative'>
            <div className='h-7 w-7 rounded-lg overflow-hidden border-4 border-[#262626] shadow mr-2 flex justify-center' style={{ backgroundColor: value }} >
              {!value && <div className='h-9 border-l -m-2 border-red-400 transform rotate-45' />}
            </div>
            <span className='opacity-60'>{value}</span>
          </button>
        </Popover>
      </div>
    </div>
  )
}