import React, { FC } from 'react';
import { PageDataType } from './types';
import { cloneDeep } from 'lodash';
import { elementDefinitions } from './element-editors/element-definitions';
import { ColumnEditor } from './element-editors/column';

interface Props {
  page: PageDataType;
  elementId: number[];
  onChange: (page: PageDataType) => void;
  websiteId?: string
}

// renders corresponding editors for selected elements. 
export const ElementEditorPan: FC<Props> = ({ page, elementId, onChange, websiteId }) => {
  // find the section based on elementId
  const Section = elementId.length >= 1 ? page.sections[elementId[0]].layout : undefined;

  // find the column based on elementId
  const Column = elementId.length >= 2 && Section ? Section.children[elementId[1]] : undefined;

  // find the column based on elementId
  const Element = elementId.length >= 3 && Column ? Column.children[elementId[2]] : undefined;

  // if an element was selected it will render element editor
  if (Element) {
    const ElementEditor = elementDefinitions.find(d => d.name === Element.name)?.Editor;
    if (ElementEditor) {
      return (
        <ElementEditor
          data={Element.props}
          onChange={(data) => {
            const _page: PageDataType = cloneDeep(page);
            // pass the element's data to the editor.
            _page.sections[elementId[0]].layout.children[elementId[1]].children[elementId[2]].props = data;
            onChange(_page);
          }}
        />
      )
    } else return null
  }
  // if a column was selected it will render column editor
  else if (Column) {
    return (
      <ColumnEditor
        data={Column}
        onChange={(data) => {
          const _page: PageDataType = cloneDeep(page);
          // pass the columns's data to the editor.
          _page.sections[elementId[0]].layout.children[elementId[1]] = data;
          onChange(_page)
        }}
      />
    )
  }
  return (
    null
  )
}
