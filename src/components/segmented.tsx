import React, { FC, ReactNode } from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  options: {
    value: string,
    label: ReactNode
  }[];
  bg?: string;
  activeBg?: string;
  border?: string;
  roundedlg?: boolean
}

export const SegmentedTab: FC<Props> = ({ options, value, onChange, bg, border, activeBg, roundedlg }) => {

  const activeIndex = options.findIndex(o => o.value === value);
  return (
    <div
      // style={{ ...bg ? { backgroundColor: bg } : {}, ...border ? { borderWidth: 1, borderColor: border } : {} }}
      className={`flex flex-row items-center bg-light-8 relative ${roundedlg ? 'rounded-lg' : 'rounded-xl'}`}>
      {options.map((option, index) => {
        return (
          <div
            key={index}
            className={`px-1.5 py-2.5 flex items-center justify-center cursor-pointer z-10 ${value === option.value ? 'opacity-100' : ' opacity-50'}`}
            style={{ width: `${100 / options.length}%` }}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </div>
        )
      })}
      <div
        className='absolute inset-y-0 left-0 p-1 z-0 transition-transform duration-300'
        style={{
          width: `${100 / options.length}%`,
          transform: activeIndex > 0 ? `translateX(${100 * activeIndex}%)` : 'translateX(0)'
        }}
      >
        <div
          style={activeBg ? { backgroundColor: activeBg, boxShadow: "none" } : {}}
          className={`h-full w-full bg-light-10 shadow ${roundedlg ? 'rounded-md' : 'rounded-lg'}`}></div>
      </div>
    </div>
  )
}