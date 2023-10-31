import { InputNumber } from 'antd';
import React, { FC, useState } from 'react';
import { CustomInputNumber } from './input-number';
import { SegmentedTab } from '../segmented';

interface Props {
  values: number[];
  onChange: (values: number[]) => void
  disableIndividual?: boolean
}

export const Padding: FC<Props> = ({ values, onChange, disableIndividual }) => {
  const [paddingType, setPaddingType] = useState<string>(values.every(v => v === values[0]) ? "ALL" : "INDIVIDUAL");
  const paddingMap = ["T", "R", "B", "L"]
  return (
    <>
      <div className='pl-2 py-1 flex flex-row items-center'>
        <p className={`w-20 opacity-60 font-medium`}>Padding</p>
        <div className={`${disableIndividual ? 'flex flex-1' : ''}`}>
          <CustomInputNumber
            min={0}
            step={1}
            fullWidth={disableIndividual}
            value={values.every(v => v === values[0]) ? values[0] : undefined}
            onChange={(val) => {
              onChange([val, val, val, val]);
              paddingType === "INDIVIDUAL" && setPaddingType("ALL");
            }}
          />
        </div>
        {!disableIndividual && <div className='pl-2 flex-1'>
          <SegmentedTab
            roundedlg
            onChange={(val) => setPaddingType(val)}
            value={paddingType}
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
        </div>}
      </div>
      {paddingType === "INDIVIDUAL" && <div className='pl-2 py-1 flex flex-row items-center'>
        <p className='w-20 opacity-60 font-medium'></p>
        <div className='flex flex-row flex-1 items-center overflow-hidden'>
          {values.map((pv, index) => (
            <React.Fragment key={index}>
              <div className='flex flex-1 flex-col overflow-hidden'>
                <div className={`border border-light-10 overflow-hidden ${index === 3 ? 'rounded-r-lg border-l-0' : index === 0 ? 'rounded-l-lg border-l' : 'border-l-0'}`}>
                  <InputNumber
                    bordered={false}
                    className='text-sm -ml-1 w-[50px] py-0.5'
                    value={pv}
                    min={0}
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
                <p className='pl-2.5 text-[9px] opacity-80'>{paddingMap[index]}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>}
    </>
  )
}