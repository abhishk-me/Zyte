import React, { FC } from 'react';
import { Padding } from '../../../components/style-editors/padding';
import { Radius } from '../../../components/style-editors/radius';
import { Border } from '../../../components/style-editors/border';
import { ElementEditorProps, BaseElementProps, Elements, CommonStyles } from '../types';
import { ImageUploader } from '../../../components/style-editors/image-uploader';
import { HeightWidth } from '../../../components/style-editors/height-width';
import { TextAlign } from '../../../components/style-editors/text-align';
import { Image } from 'react-feather';

// Editor for Image element. 
export const ImageWidgetEditor: FC<ElementEditorProps<BaseElementProps>> = ({ data, onChange }) => {
  const { styles } = data;
  const updateStyles = (_styles: CommonStyles) => {
    onChange({
      ...data,
      styles: {
        ...styles,
        ..._styles
      }
    })
  }
  return (
    <>
      <p className='font-semibold flex items-center p-4 border-b border-contrast-8 text-base'>
        <Image size={16} />
        <span className='ml-2 text-xl'>Edit Image</span>
      </p>
      <div className='px-4'>
        <div className='border-b border-contrast-8 py-5'>
          <p className=' pb-2 flex items-center justify-between'>
            <span className='font-semibold px-1'>{data.image ? 'Update' : 'Add'} Image</span>
          </p>
          <ImageUploader
            onRemove={() => { }}
            image={data.image?.url || ""}
            onChange={(image) => {
              onChange({
                ...data,
                image
              });
            }}
          />
        </div>
        <div className='border-b border-contrast-8'>
          <p className='pt-5 pb-3 flex items-center justify-between'>
            <span className='font-semibold'>Dimensions</span>
          </p>
          <HeightWidth
            disable="RELATIVE"
            label='Width'
            value={styles.width || 100}
            type={styles.widthType || "FULL"}
            onChange={(width, widthType) => updateStyles({ width, widthType })}
          />
          <HeightWidth
            label='Height'
            value={styles.height || 100}
            type={styles.heightType || "AUTO"}
            onChange={(height, heightType) => updateStyles({ height, heightType })}
          />
          <div className='pb-4' />
        </div>
        <div className='border-b border-contrast-8'>
          <p className='pt-5 pb-3 flex items-center justify-between'>
            <span className='font-semibold'>Styles</span>
          </p>
          <Border
            width={styles.borderWidth || [0, 0, 0, 0]}
            color={styles.borderColor || "#000"}
            style={styles.borderStyle || "solid"}
            onChange={(properties) => updateStyles({
              borderColor: properties.color,
              borderWidth: properties.width,
              borderStyle: properties.style
            })} />
          <Radius
            values={styles.radius || [0, 0, 0, 0]}
            onChange={(radius) => updateStyles({ radius })}
          />
          <Padding
            values={styles.padding || [0, 0, 0, 0]}
            onChange={(padding) => updateStyles({ padding })}
          />
          {(styles.widthType === "PIXELS" || styles.widthType === "PERCENTAGE") && <TextAlign
            value={styles.textAlign || "left"}
            onChange={(textAlign) => updateStyles({ textAlign })}
          />}
          <div className='pb-4' />
        </div>
      </div>
    </>
  )
}

