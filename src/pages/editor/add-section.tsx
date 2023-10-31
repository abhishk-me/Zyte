import { Popover } from 'antd';
import React, { FC, useState } from 'react';
import { Plus } from 'react-feather';
import { sectionTemplates } from './consts';
import { PageSection } from './types';

interface Props {
  onAddSection: (section: PageSection) => void
}

export const AddSection: FC<Props> = ({ onAddSection }) => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  return (
    <Popover
      open={popoverOpen}
      onOpenChange={(open) => setPopoverOpen(open)}
      content={<div className='w-[260px]'>
        <div className='flex flex-row flex-wrap'>
          {sectionTemplates.map((template, index) => (
            <div
              key={index}
              onClick={() => {
                onAddSection(template.section);
                setPopoverOpen(false)
              }}
              className={`w-1/2 p-2 hover:bg-light-3 border-b border-light-5 cursor-pointer ${index === 0 || index === 1 ? 'border-t' : ''} ${index % 2 === 0 ? 'border-r border-l' : 'border-r'}`}
            >
              <div className='px-4 pt-3'>
                {template.thumb}
              </div>
              <p className='text-center text-xs font-medium mt-3 mb-2'>{template.name}</p>
            </div>
          ))}
        </div>
      </div>}
      trigger={["click"]}
      placement="bottom"
      overlayClassName=" drop-shadow-2xl"
    >
      <button className='h-8 w-8 flex items-center justify-center rounded-xl bg-accent cursor-pointer hover:opacity-80'>
        <Plus size={18} color='#fff' />
      </button>
    </Popover>
  )
}