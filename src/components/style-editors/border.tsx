import { Input, InputNumber, Popover, Select, Slider } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { CustomInputNumber } from './input-number';
import { SegmentedTab } from '../segmented';
import { useDebounce } from '../../utils/use-debounce';
import { nanoid } from 'nanoid';

interface Props {
  width: number[];
  color: string;
  style: "solid" | "dashed" | "dotted"
  onChange: (properties: {
    width: number[], color: string, style: "solid" | "dashed" | "dotted"
  }) => void;
}

export const Border: FC<Props> = ({ width, color, style, onChange }) => {
  const [_color, setColor] = useState(color);
  const debouncedValue = useDebounce(_color, 200);
  const [borderWidthType, setBorderWidthType] = useState<string>(width.every(v => v === width[0]) ? "ALL" : "INDIVIDUAL")
  const hasBorder = !width.every(w => w <= 0);
  useEffect(() => {
    onChange({
      width,
      style,
      color: debouncedValue
    });
  }, [debouncedValue])
  return (
    <div className='pl-2 py-1 flex flex-row items-center'>
      <p className='w-20 opacity-60 font-medium'>Border</p>
      <div className='flex flex-1'>
        <Popover
          content={<div className='w-80 flex flex-wrap flex-row items-center px-1'>
            <p className='font-medium w-full pb-2 mb-4 border-b border-b-contrast-8 text-lg'>Border</p>
            <p className='w-20 text-sm font-medium'>Colour</p>
            <div className='flex flex-1'>
              <Input
                value={color}
                onChange={(e) => {
                  onChange({
                    width,
                    style,
                    color: e.target.value
                  });
                }}
                className='w-full'
                addonBefore={<div className='h-5 w-8 border-2 border-white rounded shadow-md overflow-hidden relative'>
                  <label className='absolute inset-0 block' style={{ backgroundColor: color, cursor: "pointer" }} >
                    <input
                      value={color}
                      onChange={(e) => {
                        setColor(e.target.value)
                      }}
                      type='color'
                      className='absolute h-0 w-0 opacity-0 cursor-pointer'
                    />
                  </label>
                </div>}
              />
            </div>
            <div className='w-full flex items-center mt-3'>
              <p className='w-20 font-medium text-sm'>Width</p>
              <CustomInputNumber
                step={1}
                min={0}
                value={width.every(v => v === width[0]) ? width[0] : undefined}
                onChange={(val) => {
                  onChange({
                    width: [val, val, val, val],
                    color,
                    style
                  });
                  borderWidthType === "INDIVIDUAL" && setBorderWidthType("ALL");
                }}
              />
              <div className='pl-2 flex-1'>
                <SegmentedTab
                  roundedlg
                  bg='rgba(0,0,0,0.05)'
                  onChange={(val) => setBorderWidthType(val)}
                  value={borderWidthType}
                  options={[{
                    value: "ALL",
                    label: <span className='opacity-50'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 24 24">
                        <g id="Group_20" data-name="Group 20" transform="translate(-250 -298)">
                          <rect id="Rectangle_28" data-name="Rectangle 28" width="24" height="24" transform="translate(250 298)" fill="none" />
                          <g id="Rectangle_29" data-name="Rectangle 29" transform="translate(253 301)" fill="none" stroke="#fff" strokeWidth="2">
                            <rect width="18" height="18" rx="6" stroke="none" />
                            <rect x="1" y="1" width="16" height="16" rx="5" fill="none" />
                          </g>
                        </g>
                      </svg>
                    </span>
                  },
                  {
                    value: "INDIVIDUAL",
                    label: <span className='opacity-60'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24">
                        <g id="Group_24" data-name="Group 24" transform="translate(-264 -334)">
                          <rect id="Rectangle_30" data-name="Rectangle 30" width="24" height="24" transform="translate(264 334)" fill="none" />
                          <g id="Group_18" data-name="Group 18" transform="translate(16.035 38.035)">
                            <line id="Line_5" data-name="Line 5" y2="6" transform="translate(250.965 304.965)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2.5" />
                            <line id="Line_6" data-name="Line 6" y2="6" transform="translate(268.965 304.965)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2.5" />
                            <line id="Line_7" data-name="Line 7" y2="6.52" transform="translate(263.068 299.002) rotate(90)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2.5" />
                            <line id="Line_8" data-name="Line 8" y2="6.52" transform="translate(263.381 316.928) rotate(90)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2.5" />
                          </g>
                        </g>
                      </svg>
                    </span>
                  }]}
                />
              </div>
            </div>
            {borderWidthType === "INDIVIDUAL" && <div className='py-1 w-full flex flex-row items-center'>
              <p className='w-20 opacity-60 font-medium'></p>
              <div className='flex flex-row flex-1 rounded-lg overflow-hidden'>
                {width.map((pv, index) => (
                  <>
                    <div className={`border border-light-10 overflow-hidden ${index === 3 ? 'rounded-r-lg border-l-0' : index === 0 ? 'rounded-l-lg border-l' : 'border-l-0'}`} key={index}>
                      <InputNumber
                        min={0}
                        bordered={false}
                        className='text-sm w-full py-1'
                        value={pv}
                        controls={false}
                        onChange={(val) => {
                          if (val != null) {
                            const _width = [...width];
                            _width[index] = val;
                            onChange({
                              color,
                              style,
                              width: _width
                            })
                          }
                        }}
                      />
                    </div>
                  </>
                ))}
              </div>
            </div>}
            <div className='w-full flex items-center mt-3'>
              <p className='w-20 font-medium text-sm'>Style</p>
              <div className='flex-1'>
                <Select
                  onChange={(val) => onChange({
                    color,
                    style: val,
                    width
                  })}
                  value={style}
                  bordered={false}
                  suffixIcon={<i className='icon-ChevronDownMinor text-lg' />}
                  className='w-full bg-contrast-5 rounded-lg text-sm py-0.5'
                  options={[{
                    value: "solid",
                    label: <span className='text-sm'>Solid</span>
                  },
                  {
                    value: "dashed",
                    label: <span className='text-sm'>Dashed</span>
                  },
                  {
                    value: "dotted",
                    label: <span className='text-sm'>Dotted</span>
                  }]}
                />
              </div>
            </div>
          </div>}
          trigger={["click"]}
          placement="bottomRight"
          overlayClassName=" drop-shadow-2xl"
        >
          <button className='w-full flex flex-1 items-center bg-[#141414] text-white border border-light-15 rounded-lg p-1 cursor-pointer relative'>
            <div className='h-7 w-7 rounded-lg overflow-hidden border-4 border-[#262626] shadow mr-2 flex justify-center' style={{ backgroundColor: hasBorder ? color : 'unset' }} >
              {!hasBorder && <div className='h-9 border-l -m-2 border-red-400 transform rotate-45' />}
            </div>
            <span className='opacity-60'>{hasBorder ? style : ''}</span>
          </button>
        </Popover>
      </div>
    </div>
  )
}