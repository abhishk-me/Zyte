import { Button, Dropdown } from 'antd';
import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, Columns, Plus, Square, Trash2 } from 'react-feather';
import { BaseElementProps, Column, CommonStyles, Element, Elements, LayoutType, PageSection } from '../types';
import { ElementIconMap, addElementOptions } from '../consts';
import { arrayEquals } from '../../../utils/common';
import { elementDefinitions } from './element-definitions';
import { cloneDeep } from 'lodash';
import { Drag, DragAndDrop, Drop } from '../../../components/drag-n-drop';
import { DropResult } from 'react-beautiful-dnd';
import { SliderWithInput } from '../../../components/style-editors/number-slider';
import { ContainerType } from '../../../components/style-editors/container-type';
import { ColorSelect } from '../../../components/style-editors/color-picker';
import { Padding } from '../../../components/style-editors/padding';

interface Props {
  selectedElementId: number[];
  section: PageSection;
  onChange: (section: PageSection, selectedElementId: number[]) => void;
  onExit: () => void
}

const SectionContext = React.createContext<{
  selectedElementId: number[];
  section?: PageSection;
  updateSection: (section: PageSection, selectedElementId: number[]) => void;
}>({ selectedElementId: [], updateSection: () => { } });

// editor for a section
export const SectionEditor: FC<Props> = ({ section, onChange, onExit, selectedElementId }) => {
  const sectionIndex = selectedElementId[0] || 0;

  // drag and drop handler
  const handleDragEnd = (result: DropResult) => {
    const { type, source, destination } = result;
    if (!destination) return;

    const sourceId = source.droppableId;
    const destinationId = destination.droppableId;
    const sourceIdArr = sourceId.split("_");

    // Reordering elements
    if (type === "DROPPABLE_ELEMENT") {
      if (sourceId === destinationId && sourceIdArr.length === 2) {
        const _columnIndex = parseInt(sourceIdArr[1]);
        const _section = cloneDeep(section);
        const _elements = _section.layout.children[_columnIndex].children;
        const newOrder = Array.from(_elements);
        const [removed] = newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, removed);
        _section.layout.children[_columnIndex].children = newOrder
        onChange(_section, [sectionIndex, _columnIndex, destination.index]);
      }
    }
    // Reordering columns
    if (type === "DROPPABLE_COLUMN") {
      if (sourceId === destinationId && sourceIdArr.length === 1) {
        const _section = cloneDeep(section);
        const _columns = _section.layout.children
        const newOrder = Array.from(_columns);
        const [removed] = newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, removed);
        _section.layout.children = newOrder
        onChange(_section, [sectionIndex, destination.index]);
      }
    }
  };

  // update section styles.
  const updateStyles = (_styles: CommonStyles) => {
    onChange({
      layout: {
        ...section.layout,
        styles: {
          ...styles,
          ..._styles
        }
      }
    }, selectedElementId)
  }

  const { props, styles } = section.layout

  return (
    <>
      <div className='flex flex-col flex-1 text-white select-none overflow-hidden'>
        <div className='flex flex-row items-center px-3 py-3 border-b border-b-light-5'>
          <div className='pr-2'>
            <div onClick={() => onExit()} className='h-10 w-10 rounded-full bg-light-10 hover:bg-light-15 flex items-center justify-center cursor-pointer'>
              <ArrowLeft size={18} />
            </div>
          </div>
          <div>
            <p className='text-sm opacity-60'>Section</p>
            <p className='font-bold'>{section.layout.displayName}</p>
          </div>
        </div>
        <div className='flex flex-col flex-1 overflow-y-auto py-4 px-3 pb-20'>
          {/* <p className='mt-4 mb-2 font-medium px-1'>Layout type</p>
          <div>
            <Select
              defaultValue={LayoutType.DEFAULT}
              value={section.layout.props.type}
              className='w-full rounded-lg'
              suffixIcon={<ChevronDown size={14} />}
              options={[
                {
                  value: LayoutType.DEFAULT,
                  label: <div className='flex items-center'>
                    <svg fill="none" height="16" viewBox="0 0 24 24" width="16" className='rotate-90'><path d="M5.74609 3C4.7796 3 3.99609 3.7835 3.99609 4.75V19.25C3.99609 20.2165 4.7796 21 5.74609 21H9.24609C10.2126 21 10.9961 20.2165 10.9961 19.25V4.75C10.9961 3.7835 10.2126 3 9.24609 3H5.74609Z" fill="#b0b0b0" /><path d="M14.7461 3C13.7796 3 12.9961 3.7835 12.9961 4.75V19.25C12.9961 20.2165 13.7796 21 14.7461 21H18.2461C19.2126 21 19.9961 20.2165 19.9961 19.25V4.75C19.9961 3.7835 19.2126 3 18.2461 3H14.7461Z" fill="#b0b0b0" /></svg>
                    <span className='pl-1'>Default</span>
                  </div>
                },
                {
                  value: LayoutType.COLUMNS,
                  label: <div className='flex items-center'>
                    <Columns size={14} className='opacity-50' />
                    <span className='pl-1'>Columns</span>
                  </div>
                }
              ]}
            />
          </div> */}
          <p className='mt-4 mb-3 font-medium px-1'>{section.layout.children.length > 1 && "Columns"}</p>
          {/* pass down section data and update section method down the tree for easy access */}
          <SectionContext.Provider
            value={{
              section,
              selectedElementId,
              updateSection: (_sec, elementId) => onChange(_sec, elementId),
            }}
          >
            <DragAndDrop onDragEnd={handleDragEnd}>
              <Drop key={`${sectionIndex}`} id={`${sectionIndex}`} type='DROPPABLE_COLUMN'>
                {section.layout.children.map((column, index) => {
                  return (
                    // section renders columns inside
                    <ColumnCard
                      noOfColumns={section.layout.children.length}
                      column={column}
                      columnIndex={index}
                      sectionIndex={sectionIndex}
                      key={index}
                    />
                  )
                })}
              </Drop>
            </DragAndDrop>
          </SectionContext.Provider>
          {/* button to add new column */}
          {section.layout.props.type === LayoutType.COLUMNS &&
            <Button
              onClick={() => {
                const _section = cloneDeep(section);
                _section.layout.children.push(section.layout.children[section.layout.children.length - 1]);
                onChange(_section, [sectionIndex, section.layout.children.length])
              }}
              className='mt-4 h-10'
            >Add Column</Button>
          }
          <Button onClick={() => console.log(section)}>log</Button>
          {/* Section style editors */}
          <div className='p-3 pb-2 mt-16 text-sm border border-light-5 rounded-xl'>
            <label htmlFor='SECTION_STYLE_TOGGLE' className='pt-1 pb-2 flex items-center cursor-pointer opacity-60'>
              <svg viewBox="0 0 256 256" height={16}><rect fill="none" height="256" width="256" /><path d="M225,23c-21.3,0-45.3,11.8-71.1,34.9-18.1,16.2-33.6,34.7-44.3,48.7A60.1,60.1,0,0,0,32,164c0,31.2-16.2,45.1-17,45.8a7.7,7.7,0,0,0-2.5,8.8A7.8,7.8,0,0,0,20,224H92a60.1,60.1,0,0,0,57.4-77.6c14-10.7,32.5-26.2,48.7-44.3C221.2,76.3,233,52.3,233,31A8,8,0,0,0,225,23ZM124.4,113.6c2.9-3.7,6.3-7.9,10.2-12.5a75.4,75.4,0,0,1,20.3,20.3c-4.6,3.9-8.8,7.3-12.5,10.2A59.4,59.4,0,0,0,124.4,113.6Zm42.6-2.9A93.1,93.1,0,0,0,145.3,89c19.6-21.2,46-44.4,70.8-49.1C211.4,64.7,188.2,91.1,167,110.7Z" fill='#fff' /></svg>
              <span className='font-semibold text-sm flex flex-1 pl-1.5'>Section Styles</span>
              <Plus size={14} />
            </label>
            <input id='SECTION_STYLE_TOGGLE' type='checkbox' className='hidden h-0 w-0 peer' />
            <div className='hidden peer-checked:block pt-4'>
              {/* switches between containers widths - FULL or CONTAINED */}
              <ContainerType
                value={styles.containerType || "FULL_WIDTH"}
                onChange={(containerType) => updateStyles({ containerType })}
              />
              {section.layout.props.type === LayoutType.COLUMNS && <SliderWithInput
                min={0}
                max={160}
                step={1}
                value={props.gap || 0}
                onChange={(gap) => onChange({
                  layout: {
                    ...section.layout,
                    props: {
                      ...props,
                      gap
                    }
                  }
                }, selectedElementId)}
                label='Gap'
              />}
              {/* Section's background colour */}
              <ColorSelect
                value={styles.background}
                onSelect={(background) => updateStyles({ background })}
                label='Fill'
              />
              {/* Section' padding */}
              <Padding
                values={styles.padding || [0, 0, 0, 0]}
                onChange={(padding) => updateStyles({ padding })}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

interface ColumnCardProps {
  noOfColumns: number;
  column: Column;
  columnIndex: number;
  sectionIndex: number;
}

export const ColumnCard: FC<ColumnCardProps> = ({ column, columnIndex, sectionIndex, noOfColumns }) => {
  const singleColumn = noOfColumns === 1;
  const [expanded, setExpanded] = useState(singleColumn);
  const context = useContext(SectionContext);
  const selected = arrayEquals(context.selectedElementId, [sectionIndex, columnIndex]);

  // Renders text's value in case of text block and name of the element otherwise
  const renderLabel = useCallback((element: Element) => {
    if (element.name === Elements.TEXT) {
      const _props = element.props as BaseElementProps
      return _props.text || element.displayName || element.altName
    }
    return element.displayName || element.altName
  }, []);

  // if an element inside the column is selected, it will be expanded by default
  useEffect(() => {
    if (!expanded && context.selectedElementId[1] === columnIndex) {
      setExpanded(true)
    }
  }, [context.selectedElementId])

  return (
    <Drag
      disabled={singleColumn}
      id={`${sectionIndex}_${columnIndex}`}
      index={columnIndex}
    >
      <div className={`rounded-xl mb-2 bg-[#1f1f21]`}>
        <div
          onClick={() => {
            context.section && context.updateSection(context.section, [sectionIndex, columnIndex])
            !expanded && setExpanded(true);
          }}
          className={`flex items-center py-2 pl-3 pr-1 cursor-pointer rounded-xl group/column  ${selected ? 'bg-light-5' : 'hover:bg-light-5'}`}
        >
          {/* column's name and a delete button if no of columns is more than one */}
          <p className={`flex flex-1 items-center ${selected ? 'text-accent' : ''}`}>
            {singleColumn ? <Square size={16} className='pt-0.5 opacity-60' /> : (
              <div>
                <div className={`${noOfColumns > 1 ? 'group-hover/column:hidden' : ''}`}>
                  <Columns size={16} className='pt-0.5 opacity-60' />
                </div>
                {noOfColumns > 1 &&
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      if (context.section) {
                        const _section = cloneDeep(context.section);
                        _section.layout.children.splice(columnIndex, 1);
                        context.updateSection(_section, [sectionIndex])
                      }
                    }}
                    className='hidden group-hover/column:block text-red-500'
                  >
                    <Trash2 size={16} className='' />
                  </div>
                }
              </div>
            )}
            {singleColumn ? <span className='pl-2'>Content box</span> : <span className='pl-2'>Column {columnIndex + 1}</span>}
            {!singleColumn && <span className='text-sm pl-2 pt-0.5 opacity-50'> - {column.props.width}fr</span>}
          </p>
          <p
            className={`p-2 ${singleColumn ? 'invisible' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(prev => !prev)
            }}
          >
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </p>
        </div>
        {/* renders list of elements inside the column */}
        {expanded &&
          <div className='px-3 pb-3'>
            <Drop key={`${sectionIndex}_${columnIndex}`} id={`${sectionIndex}_${columnIndex}`} type='DROPPABLE_ELEMENT'>
              {column.children.map((element, elementIndex) => {
                // Id of the element
                const elementId = [sectionIndex, columnIndex, elementIndex];
                // checks if the element is selected
                const elementSelected = arrayEquals(context.selectedElementId, elementId);
                return (
                  <Drag
                    id={[sectionIndex, columnIndex, elementIndex].join("_")}
                    index={elementIndex}
                    key={elementIndex}
                  >
                    <div
                      // select the element to open the editor on the right pan. it passes the element id. 
                      onClick={() => context.section && context.updateSection(context.section, elementId)}
                      className={`flex flex-row items-center mt-0.5 pr-2 pl-2 ml-4 cursor-pointer rounded-lg group overflow-hidden whitespace-nowrap ${elementSelected ? 'bg-light-5 text-accent' : 'hover:bg-light-5'}`}
                    >
                      <div className={`h-5 w-5 flex items-center justify-center`}>
                        {ElementIconMap[element.name]}
                      </div>
                      <div className={`p-1 py-3 flex flex-1 overflow-hidden`}>
                        <p className='text-ellipsis overflow-hidden'>{renderLabel(element)}</p>
                      </div>
                      <p
                        // Remove the element
                        onClick={(e) => {
                          e.stopPropagation();
                          if (context.section) {
                            const _section = cloneDeep(context.section);
                            _section.layout.children[columnIndex].children.splice(elementIndex, 1);
                            context.updateSection(_section, [sectionIndex, columnIndex]);
                          }
                        }}
                        className='h-8 w-8 -mr-1 flex items-center justify-center text-red-500 rounded-full invisible group-hover:visible hover:bg-light-3'
                      >
                        <Trash2 size={14} />
                      </p>
                    </div>
                  </Drag>
                )
              })}
            </Drop>
            {/* A Button to add new element */}
            <Dropdown
              arrow={false}
              placement='bottom'
              menu={{
                items: addElementOptions,
                onClick: ({ key }) => {
                  const elementDefs = elementDefinitions.find(w => w.name === key);
                  if (elementDefs && context.section) {
                    const { Editor, ...element } = elementDefs;
                    const _section = cloneDeep(context.section);
                    _section.layout.children[columnIndex].children.push(element);
                    // Updates the section with new element inside selected column. passes the elementId of the new element
                    context.updateSection(_section, [sectionIndex, columnIndex, column.children.length])
                  }
                }
              }}
              dropdownRender={(menu) => (
                <div className='bg-[#141414] rounded-xl shadow-xl overflow-hidden border-2 border-contrast-10'>
                  <p className={`pr-3 pl-4 ml-0.5 py-2`}>
                    <span className='ml-1.5 text-sm font-medium text-white'>Add new element</span>
                  </p>
                  <div className='border-t border-t-contrast-8' />
                  {React.cloneElement(menu as React.ReactElement, { style: { boxShadow: "none" } })}
                </div>
              )}
              trigger={["click"]}
            >
              <div className={`flex flex-row items-center mt-0.5 pr-2 pl-2 ml-4 cursor-pointer rounded-lg hover:bg-light-5`}>
                <div className={`h-5 w-5 bg-light-5 flex items-center justify-center rounded-full`}>
                  <Plus size={12} />
                </div>
                <p className={`font-medium p-1 py-3 flex flex-1 opacity-50 whitespace-nowrap`}>
                  Add Element
                </p>
              </div>
            </Dropdown>
          </div>
        }
      </div >
    </Drag>
  )
}