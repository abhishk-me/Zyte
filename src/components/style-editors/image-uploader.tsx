import React, { FC, useState } from 'react';
import { Button, Input, Popover } from 'antd';
import { Trash2 } from 'react-feather';
import { nanoid } from 'nanoid';
import { ImageType } from '../../pages/editor/types';

export interface ImageUploaderProps {
  image?: string;
  onChange: (img: ImageType) => void;
  onRemove: () => void
}

export const ImageUploader: FC<ImageUploaderProps> = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [popoveOpen, setPopoverOpen] = useState(false)

  return (
    <>
      <div className='rounded-lg h-40 bg-light-5 overflow-hidden relative group'>
        {props.image && <img className='h-full w-full object-contain' src={props.image} />}
        <div className={`absolute inset-0 bg-light-15 flex items-center justify-center ${props.image ? 'opacity-0' : 'opacity-100'} group-hover:opacity-100`}>
          <Popover
            open={popoveOpen}
            onOpenChange={(open) => setPopoverOpen(open)}
            content={<div className='w-[260px]'>
              <div className='p-4 border border-light-10 rounded'>
                <p className='font-medium text-sm px-1 mb-1 -mt-2'>Image URL</p>
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Button
                  onClick={() => {
                    props.onChange({
                      id: nanoid(),
                      url: inputValue || "",
                      meta: {}
                    });
                    setPopoverOpen(false);
                  }}
                  type='primary'
                  className='w-full mt-3'
                >Confirm</Button>
              </div>
            </div>}
            trigger={["click"]}
            placement="bottom"
            overlayClassName=" drop-shadow-2xl"
          >
            <Button
              shape='round'
            >
              <p className='flex flex-row items-center'>
                <i className='icon-AddImageMajor text-sm -ml-1' />
                <span className='text-sm ml-1 font-medium'>{props.image ? 'Update' : 'Add'} Image</span>
              </p>
            </Button>
          </Popover>
          {props.image && <>
            <span className='mx-0.5' />
            <Button
              onClick={() => props.onRemove()}
              shape='circle'
              danger
              icon={<Trash2 size={16} className='-mb-0.5' />}
            >
            </Button>
          </>}
        </div>
      </div >
    </>
  )
}