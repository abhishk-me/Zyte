import React, { FC, useCallback } from 'react';
import { Plus, Trash2 } from 'react-feather';
import { PageDataType } from './types';
import { DropResult } from 'react-beautiful-dnd';
import { cloneDeep } from 'lodash';
import { Drag, DragAndDrop, Drop } from '../../components/drag-n-drop';
import { AddSection } from './add-section';

interface SectioListProps {
  selectedElementId: number[];
  page: PageDataType;
  onChange: (page: PageDataType) => void;
  onSelect: (selectedElementId: number[]) => void
}

// displays the list of sections
export const SectionList: FC<SectioListProps> = ({ selectedElementId, page, onChange, onSelect }) => {

  const handleDragEnd = (result: DropResult) => {
    const { type, source, destination } = result;
    if (!destination) return;
    const sourceId = source.droppableId;
    const destinationId = destination.droppableId;

    if (sourceId === destinationId) {
      const _page = cloneDeep(page);
      const _sections = _page.sections;
      const newOrder = Array.from(_sections);
      const [removed] = newOrder.splice(source.index, 1);
      newOrder.splice(destination.index, 0, removed);
      _page.sections = newOrder
      onChange(_page);
    }
  };

  return (
    <>
      <div className='py-4 px-4 flex flex-col flex-1 text-white overflow-auto'>
        <div className='flex items-center mb-6 mt-2'>
          <p className='font-bold text-xl px-1 flex flex-1'>Sections</p>
          {/* opens a dialog to add new section */}
          <AddSection onAddSection={(sec) => {
            const _page = cloneDeep(page);
            _page.sections.push(sec);
            onChange(_page)
          }} />
        </div>
        <DragAndDrop onDragEnd={handleDragEnd}>
          <Drop key={"SECTION_LIST"} id="ROOT" type='DROPPABLE_SECTION'>
            {page.sections.map((section, sectionIndex) => {
              return (
                <Drag
                  id={`SECTION_${sectionIndex}`}
                  index={sectionIndex}
                  key={sectionIndex}
                >
                  <div
                    onClick={() => onSelect([sectionIndex, 0])}
                    className='bg-[#18181a] rounded-lg overflow-hidden mb-2 shadow-none hover:shadow-lg transition-shadow'
                  >
                    <div className='flex flex-row items-center bg-light-3 border border-light-3 cursor-pointer rounded-lg group'>
                      <div className='hover:bg-contrast-5 pl-2 pr-1 mr-1 flex items-center'>
                        <svg fill="none" height="15" viewBox="0 0 15 15" width="15"><path clipRule="evenodd" d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z" fill="currentColor" fillRule="evenodd" /></svg>
                      </div>
                      <p className='flex flex-1 font-medium py-4'>
                        {section.layout.displayName}
                      </p>
                      <p
                        onClick={(e) => {
                          e.stopPropagation();
                          onChange({
                            ...page,
                            sections: page.sections.filter((f, i) => i !== sectionIndex)
                          })
                        }}
                        className='h-8 w-8 mr-1 flex items-center justify-center text-red-500 rounded-full invisible group-hover:visible hover:bg-light-3'
                      >
                        <Trash2 size={14} />
                      </p>
                    </div>
                  </div>
                </Drag>
              )
            })}
          </Drop>
        </DragAndDrop>
      </div>
    </>
  )
}