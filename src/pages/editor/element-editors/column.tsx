import React, { FC } from 'react';
import { SliderWithInput } from '../../../components/style-editors/number-slider';
import { Padding } from '../../../components/style-editors/padding';
import { ColorSelect } from '../../../components/style-editors/color-picker';
import { Radius } from '../../../components/style-editors/radius';
import { JustifyContent } from '../../../components/style-editors/justify';
import { Border } from '../../../components/style-editors/border';
import { Column, ElementEditorProps, CommonStyles } from '../types';
import { Columns as ColumnsIcon } from 'react-feather'
import { ImageUploader } from '../../../components/style-editors/image-uploader';
import { MaxWidth } from '../../../components/style-editors/max-width';
import { FractionWidth } from '../../../components/style-editors/fraction-width';

export const ColumnEditor: FC<ElementEditorProps<Column>> = ({ data, onChange }) => {
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
        <ColumnsIcon size={16} />
        <span className='ml-1.5'>Edit {"Column"}</span>
      </p>
      <div className='px-4'>
        <div className='border-b border-contrast-8 py-4'>
          <p className='flex items-center justify-between cursor-pointer'>
            <span className='font-semibold'>Background image</span>
            <i className='icon-PlusMinor text-base' />
          </p>

          <>
            <div className='mt-2' />
            <ImageUploader
              onRemove={() => {
                onChange({
                  ...data,
                  props: {
                    ...data.props,
                    backgroundImage: undefined
                  }
                })
              }}
              image={data.props.backgroundImage?.url || ""}
              onChange={(image) => {
                onChange({
                  ...data,
                  props: {
                    ...data.props,
                    backgroundImage: image
                  }
                });
              }}
            />
            <div className='mt-2' />
            {data.props.backgroundImage && <SliderWithInput
              min={0}
              max={1}
              step={0.01}
              value={styles.overlayOpacity || 0}
              onChange={(overlayOpacity) => updateStyles({ overlayOpacity })}
              label='Overlay'
            />}
          </>
        </div>
        <div className='border-b border-contrast-8'>
          <p className='pt-5 pb-3 flex items-center justify-between'>
            <span className='font-semibold'>Column Width</span>
          </p>
          <FractionWidth
            value={data.props.width || 1}
            onChange={(width) => onChange({
              ...data,
              props: {
                ...data.props,
                width
              }
            })}
          />
          <div className='pb-4' />
        </div>
        <div className='border-b border-contrast-8'>
          <p className='pt-5 pb-3 flex items-center justify-between'>
            <span className='font-semibold'>Content Styles</span>
          </p>
          <MaxWidth value={styles.maxWidth || 6} onChange={(maxWidth) => updateStyles({ maxWidth })} />
          <ColorSelect
            value={styles.background}
            onSelect={(background) => updateStyles({ background })}
            label='Fill'
          />
          <JustifyContent
            value={styles.justify || "flex-start"}
            onChange={(justify) => updateStyles({ justify })}
            showHorizontal
            horizonalAlign={styles.horizontalAlign}
            onHorizontalAlighChange={(horizontalAlign) => updateStyles({ horizontalAlign })}
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
