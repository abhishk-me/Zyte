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

export const ElementEditorPan: FC<Props> = ({ page, elementId, onChange, websiteId }) => {
  const layoutElement = elementId.length >= 1 ? page.sections[elementId[0]].layout : undefined;
  const FrameElement = elementId.length >= 2 && layoutElement ? layoutElement.children[elementId[1]] : undefined;
  const WidgetElement = elementId.length >= 3 && FrameElement ? FrameElement.children[elementId[2]] : undefined;

  if (WidgetElement) {
    const ElementEditor = elementDefinitions.find(d => d.name === WidgetElement.name)?.Editor;
    if (ElementEditor) {
      return (
        <ElementEditor
          data={WidgetElement.props}
          onChange={(data) => {
            const _page: PageDataType = cloneDeep(page);
            _page.sections[elementId[0]].layout.children[elementId[1]].children[elementId[2]].props = data;
            onChange(_page);
          }}
        />
      )
    } else return null
  } else if (FrameElement) {
    return (
      <ColumnEditor
        data={FrameElement}
        onChange={(data) => {
          const _page: PageDataType = cloneDeep(page);
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
