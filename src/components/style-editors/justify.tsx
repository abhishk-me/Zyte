import React, { FC } from 'react';
import { SegmentedTab } from '../segmented';

interface Props {
  value: "flex-start" | "center" | "flex-end" | "stretch";
  onChange: (value: "flex-start" | "center" | "flex-end" | "stretch") => void;
  showHorizontal?: boolean;
  horizonalAlign?: "left" | "center" | "right";
  onHorizontalAlighChange?: (value: "left" | "center" | "right") => void
}

export const JustifyContent: FC<Props> = ({ value, onChange, horizonalAlign, showHorizontal, onHorizontalAlighChange }) => {
  return (
    <>
      <div className='pl-2 py-1 flex flex-row items-center'>
        <p className='w-20 opacity-60 font-medium'>Align</p>
        <div className='flex-1 flex-col'>
          <SegmentedTab
            roundedlg
            onChange={onChange}
            value={value}
            options={[{
              value: "flex-start",
              label: <span className='opacity-60'>
                <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 24 24">
                  <g id="Group_28" data-name="Group 28" transform="translate(-298 274) rotate(-90)" fill='#fff'>
                    <rect id="Rectangle_28" data-name="Rectangle 28" width="24" height="24" transform="translate(250 298)" fill="none" />
                    <rect id="Rectangle_35" data-name="Rectangle 35" width="14" height="10" rx="3" transform="translate(253 305)" />
                    <rect id="Rectangle_36" data-name="Rectangle 36" width="3" height="20" rx="1.5" transform="translate(268 300)" />
                  </g>
                </svg>
              </span>
            },
            {
              value: "center",
              label: <span className='opacity-60'>
                <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 24 24">
                  <g id="Group_29" data-name="Group 29" transform="translate(-298 274) rotate(-90)" fill='#fff'>
                    <rect id="Rectangle_28" data-name="Rectangle 28" width="24" height="24" transform="translate(250 298)" fill="none" />
                    <rect id="Rectangle_35" data-name="Rectangle 35" width="18" height="10" rx="3" transform="translate(253 305)" />
                    <rect id="Rectangle_36" data-name="Rectangle 36" width="3" height="20" rx="1.5" transform="translate(260.5 300)" />
                  </g>
                </svg>
              </span>
            },
            {
              value: "flex-end",
              label: <span className='opacity-60'>
                <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 24 24">
                  <g id="Group_30" data-name="Group 30" transform="translate(-298 274) rotate(-90)" fill='#fff'>
                    <rect id="Rectangle_28" data-name="Rectangle 28" width="24" height="24" transform="translate(250 298)" fill="none" />
                    <rect id="Rectangle_35" data-name="Rectangle 35" width="14" height="10" rx="3" transform="translate(257 305)" />
                    <rect id="Rectangle_36" data-name="Rectangle 36" width="3" height="20" rx="1.5" transform="translate(253 300)" />
                  </g>
                </svg>
              </span>
            }]}
          />
        </div>
      </div>
      {showHorizontal && onHorizontalAlighChange && <div className='pl-2 py-1 flex flex-row items-center'>
        <p className='w-20'></p>
        <div className='flex-1 flex-col'>
          <SegmentedTab
            roundedlg
            onChange={onHorizontalAlighChange}
            value={horizonalAlign || "left"}
            options={[{
              value: "left",
              label: <span className='opacity-60'>
                <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 24 24">
                  <g id="Group_21" data-name="Group 21" transform="translate(-250 -298)" fill='#fff'>
                    <rect id="Rectangle_28" data-name="Rectangle 28" width="24" height="24" transform="translate(250 298)" fill='none' />
                    <rect id="Rectangle_29" data-name="Rectangle 29" width="14" height="10" rx="3" transform="translate(257 305)" />
                    <rect id="Rectangle_32" data-name="Rectangle 32" width="3" height="18" rx="1.5" transform="translate(253 301)" />
                  </g>
                </svg>
              </span>
            },
            {
              value: "center",
              label: <span className='opacity-60'>
                <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 24 24">
                  <g id="Group_23" data-name="Group 23" transform="translate(-250 -298)" fill='#fff'>
                    <rect id="Rectangle_28" data-name="Rectangle 28" width="24" height="24" transform="translate(250 298)" fill='none' />
                    <rect id="Rectangle_29" data-name="Rectangle 29" width="16" height="10" rx="3" transform="translate(254 305)" />
                    <rect id="Rectangle_32" data-name="Rectangle 32" width="3" height="20" rx="1.5" transform="translate(260.5 300)" />
                  </g>
                </svg>
              </span>
            },
            {
              value: "right",
              label: <span className='opacity-60'>
                <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 24 24">
                  <g id="Group_22" data-name="Group 22" transform="translate(-250 -298)">
                    <rect id="Rectangle_28" data-name="Rectangle 28" width="24" height="24" transform="translate(250 298)" fill='none' />
                    <rect id="Rectangle_29" data-name="Rectangle 29" width="14" height="10" rx="3" transform="translate(253 305)" fill='#fff' />
                    <rect id="Rectangle_32" data-name="Rectangle 32" width="3" height="18" rx="1.5" transform="translate(268 301)" fill='#fff' />
                  </g>
                </svg>
              </span>
            }]}
          />
        </div>
      </div>}
    </>
  )
}