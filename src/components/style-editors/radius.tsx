import { InputNumber } from 'antd';
import React, { FC, useState } from 'react';
import { CustomInputNumber } from './input-number';
import { SegmentedTab } from '../segmented';


interface Props {
  values: number[];
  onChange: (values: number[]) => void
}

export const Radius: FC<Props> = ({ values, onChange }) => {
  const [radiusType, setRadiusType] = useState<string>(values.every(v => v === values[0]) ? "ALL" : "INDIVIDUAL")
  return (
    <>
      <div className='pl-2 py-1 flex flex-row items-center'>
        <p className='w-20 opacity-60 font-medium'>Radius</p>
        <CustomInputNumber
          min={0}
          step={1}
          value={values.every(v => v === values[0]) ? values[0] : undefined}
          onChange={(val) => {
            onChange([val, val, val, val]);
            radiusType === "INDIVIDUAL" && setRadiusType("ALL");
          }}
        />
        <div className='pl-2 flex-1'>
          <SegmentedTab
            roundedlg
            onChange={(val) => setRadiusType(val)}
            value={radiusType}
            options={[{
              value: "ALL",
              label: <span className='opacity-50 scale-110'>
                <svg xmlns="http://www.w3.org/2000/svg" height="13" viewBox="0 0 24 24">
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
              label: <span className='opacity-60 scale-110'>
                <svg xmlns="http://www.w3.org/2000/svg" height="13" viewBox="0 0 24 24">
                  <g id="Group_19" data-name="Group 19" transform="translate(-310 -322)">
                    <path id="Path_81" data-name="Path 81" d="M199.293,7803.307v-4.027h4" transform="translate(115.161 -7472.838)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    <path id="Path_82" data-name="Path 82" d="M203.294,7803.307v-4.027h-4" transform="translate(126.252 -7472.838)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    <path id="Path_83" data-name="Path 83" d="M199.293,7799.279v4.027h4" transform="translate(115.161 -7461.748)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    <path id="Path_84" data-name="Path 84" d="M203.294,7799.279v4.027h-4" transform="translate(126.252 -7461.748)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    <rect id="Rectangle_31" data-name="Rectangle 31" width="24" height="24" transform="translate(310 322)" fill="none" />
                  </g>
                </svg>
              </span>
            }]}
          />
        </div>
      </div>
      {radiusType === "INDIVIDUAL" && <div className='pl-2 py-1 flex flex-row items-center'>
        <p className='w-20 opacity-60 font-medium'></p>
        <div className='flex flex-row flex-1 rounded-lg overflow-hidden'>
          {values.map((pv, index) => (
            <>
              <div className={`border border-light-10 overflow-hidden ${index === 3 ? 'rounded-r-lg border-l-0' : index === 0 ? 'rounded-l-lg border-l' : 'border-l-0'}`}>
                <InputNumber
                  bordered={false}
                  className='text-sm -ml-1 w-[50px] py-0.5'
                  value={pv}
                  controls={false}
                  onChange={(val) => {
                    if (val != null) {
                      const _values = [...values];
                      _values[index] = val;
                      onChange(_values)
                    }
                  }}
                />
              </div>
            </>
          ))}
        </div>
      </div>}
    </>
  )
}