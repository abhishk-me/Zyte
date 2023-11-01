import React, { FC } from 'react';
import { Button, Input, Popover, } from 'antd';
import { SliderWithInput } from '../../../components/style-editors/number-slider';
import { Padding } from '../../../components/style-editors/padding';
import { ColorSelect } from '../../../components/style-editors/color-picker';
import { TextAlign } from '../../../components/style-editors/text-align';
import { Radius } from '../../../components/style-editors/radius';
import { FontWeight } from '../../../components/style-editors/font-weight';
import { FontSize } from '../../../components/style-editors/font-size';
import { Border } from '../../../components/style-editors/border';
import { ElementEditorProps, ButtonGroupProps, ButtonElement, ClickTarget, Elements } from '../types';
import { HeightWidth } from '../../../components/style-editors/height-width';
import { ElementIconMap } from '../consts';
import { Sliders } from 'react-feather';

// Editor for button group. 
export const ButtonWidgetEditor: FC<ElementEditorProps<ButtonGroupProps>> = ({ data, onChange }) => {
  const updateStyles = (_styles: ButtonElement, index: number) => {
    onChange({
      ...data,
      buttons: data.buttons.map((b, i) => i === index ? ({
        ...b,
        ..._styles
      }) : b)
    })
  }
  return (
    <>
      <p className='font-semibold flex items-center p-4 border-b border-light-5 text-base'>
        {ElementIconMap[Elements.BUTTONS]}
        <span className='ml-2 text-xl'>Edit Buttons</span>
      </p>
      <div className='border-b border-contrast-8 py-5 px-4'>
        <p className=' pb-2 flex items-center justify-between'>
          <span className='font-semibold'>Gap between buttons</span>
        </p>
        <SliderWithInput
          label='Gap'
          value={data.gap}
          min={0}
          max={100}
          step={1}
          onChange={(gap) => onChange({
            ...data,
            gap
          })}
        />
        <TextAlign
          value={data.align || "left"}
          onChange={(align) => onChange({
            ...data,
            align
          })}
        />
      </div>
      {data.buttons.map((button, index) => (
        <div key={index} className='px-4 pt-4 pb-8 border-b border-b-contrast-10'>
          <div className='px-1 pb-2 mt-2 flex items-center justify-between'>
            <span className='font-medium flex flex-1'>Button {index + 1} text</span>
            <p
              onClick={() => onChange({
                ...data,
                buttons: [...data.buttons, button]
              })}
              className='px-1 bg-light-5 text-accent rounded text-purple-600 cursor-pointer'>Clone</p>
            {data.buttons.length > 1 && <p
              onClick={() => onChange({
                ...data,
                buttons: data.buttons.filter((b, i) => i !== index)
              })}
              className='px-1 bg-light-5 rounded text-red-400 cursor-pointer ml-2'>Delete</p>}
          </div>
          <Input
            value={button.text || ""}
            placeholder='Button'
            className='py-2'
            onChange={(e) => updateStyles({ text: e.target.value }, index)}
          />
          <Popover
            trigger={["click"]}
            content={<div className='text-sm pr-2'>
              <HeightWidth
                type={button.widthType || "AUTO"}
                value={button.width || 100}
                label='Width'
                disable='RELATIVE'
                onChange={(width, widthType) => updateStyles({ width, widthType }, index)}
              />
              <ColorSelect
                value={button.background || "#000"}
                onSelect={(background) => updateStyles({ background }, index)}
                label='Fill'
              />
              <FontSize
                desktopOnly
                size={button.fontSize || 14}
                onChange={(fontSize) => updateStyles({ fontSize }, index)}
              />
              <FontWeight
                value={button.fontWeight || 400}
                onChange={(fontWeight) => updateStyles({ fontWeight }, index)}
              />
              <ColorSelect
                value={button.color || "#fff"}
                onSelect={(color) => updateStyles({ color }, index)}
                label='Colour'
              />
              <TextAlign
                value={button.textAlign || "left"}
                onChange={(textAlign) => updateStyles({ textAlign }, index)}
              />
              <Border
                width={button.borderWidth || [0, 0, 0, 0]}
                color={button.borderColor || "#000"}
                style={button.borderStyle || "solid"}
                onChange={(properties) => updateStyles({
                  borderColor: properties.color,
                  borderWidth: properties.width,
                  borderStyle: properties.style
                }, index)} />
              <Radius
                values={button.radius || [0, 0, 0, 0]}
                onChange={(radius) => updateStyles({ radius }, index)}
              />
              <Padding
                values={button.padding || [8, 12, 8, 12]}
                onChange={(padding) => updateStyles({ padding }, index)}
              />
            </div>}
          >
            <div className='py-2.5 px-3 mt-2 w-full flex items-center justify-start bg-light-5 hover:bg-light-8 cursor-pointer rounded-lg'>
              <Sliders size={12} className='opacity-60' />
              <span className='opacity-70 font-medium ml-2'>Button styles</span>
            </div>
          </Popover>
        </div>
      ))}
      <div className='text-center p-4'>
        <Button
          onClick={() => onChange({
            ...data,
            buttons: [...data.buttons, { text: "button" }]
          })}
          className='w-full'
        >
          Add Button
        </Button>
      </div>
    </>
  )
}