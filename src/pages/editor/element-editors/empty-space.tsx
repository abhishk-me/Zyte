import React, { FC } from 'react';
import { ElementEditorProps, BaseElementProps, Elements } from '../types';
import { HeightWidth } from '../../../components/style-editors/height-width';
import { ElementIconMap } from '../consts';

export const EmptySpaceEditor: FC<ElementEditorProps<BaseElementProps>> = ({ data, onChange }) => {
  const { styles } = data;
  return (
    <>
      <p className='font-semibold flex items-center p-4 border-b border-contrast-8 text-base'>
        {ElementIconMap[Elements.EMPTY_SPACE]}
        <span className='ml-2 pb-0.5'>Edit empty space</span>
      </p>
      <div className='px-4'>
        <div className='border-b border-contrast-8'>
          <p className='pt-5 pb-3 flex items-center justify-between'>
            <span className='font-semibold'>Dimensions</span>
          </p>
          <HeightWidth
            disable="FULL"
            label='Height'
            value={styles.height || 100}
            type={styles.heightType || "AUTO"}
            onChange={(height, heightType) => onChange({
              ...data,
              styles: {
                ...styles,
                height,
                heightType
              }
            })}
          />
          <div className='pb-4' />
        </div>
      </div>
    </>
  )
}

