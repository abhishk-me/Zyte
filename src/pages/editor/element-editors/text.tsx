import React, { FC } from 'react';
import { Input, } from 'antd';
import { Padding } from '../../../components/style-editors/padding';
import { ColorSelect } from '../../../components/style-editors/color-picker';
import { TextAlign } from '../../../components/style-editors/text-align';
import { Radius } from '../../../components/style-editors/radius';
import { FontWeight } from '../../../components/style-editors/font-weight';
import { FontSize } from '../../../components/style-editors/font-size';
import { Border } from '../../../components/style-editors/border';
import { ElementEditorProps, BaseElementProps, Elements, CommonStyles } from '../types';
import { Type } from 'react-feather';

export const TextWidgetEditor: FC<ElementEditorProps<BaseElementProps>> = ({ data, onChange }) => {
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
      <p className='font-semibold flex items-center p-4 border-b border-light-5 text-base'>
        <Type size={16} />
        <span className='ml-2 text-xl'>Edit text block</span>
      </p>
      <div className='px-4'>
        <div className='border-b border-contrast-8 py-5'>
          <p className=' pb-2 flex items-center justify-between'>
            <span className='font-semibold'>Text content</span>
          </p>
          <Input.TextArea
            value={data.text || ""}
            autoSize
            placeholder='Enter text here'
            rows={4}
            className='w-full'
            onChange={(e) => onChange({
              ...data,
              text: e.target.value
            })}
          />
        </div>
        <div className='border-b border-contrast-8'>
          <p className='pt-5 pb-3 flex items-center justify-between '>
            <span className='font-semibold'>Text styles</span>
          </p>
          <TextAlign
            value={styles.textAlign || "left"}
            onChange={(textAlign) => updateStyles({ textAlign })}
          />
          <ColorSelect
            value={styles.color || "#000"}
            onSelect={(color) => updateStyles({ color })}
            label='Colour'
          />
          <FontWeight
            value={styles.fontWeight || 400}
            onChange={(fontWeight) => updateStyles({ fontWeight })}
          />
          <FontSize
            size={styles.fontSize || 14}
            sizeMobile={styles.fontSizeMobile}
            onChange={(fontSize, fontSizeMobile) => updateStyles({ fontSize, fontSizeMobile })}
          />
          <div className='pb-4' />
        </div>
        <div className='border-b border-contrast-8'>
          <p className='pt-5 pb-3 flex items-center justify-between'>
            <span className='font-semibold'>Styles</span>
          </p>
          <ColorSelect
            value={styles.background}
            onSelect={(background) => updateStyles({ background })}
            label='Fill'
          />
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
          <div className='pb-4' />
        </div>
      </div>
    </>
  )
}