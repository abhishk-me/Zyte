import { ElementDefs, Elements } from '../types';
import { widgetDefaultConsts } from '../consts';
import { ImageWidgetEditor } from './image';
import { TextWidgetEditor } from './text';
import { ButtonWidgetEditor } from './buttons';
import { EmptySpaceEditor } from './empty-space';

export const elementDefinitions: ElementDefs[] = [
  {
    name: Elements.TEXT,
    displayName: "Text",
    props: widgetDefaultConsts[Elements.TEXT],
    Editor: TextWidgetEditor,
  },
  {
    name: Elements.IMAGE,
    displayName: "Image",
    props: widgetDefaultConsts[Elements.IMAGE],
    Editor: ImageWidgetEditor,
  },
  {
    name: Elements.BUTTONS,
    displayName: "Buttons",
    props: widgetDefaultConsts[Elements.BUTTONS],
    Editor: ButtonWidgetEditor,
  },
  {
    name: Elements.EMPTY_SPACE,
    displayName: "Empty Space",
    props: widgetDefaultConsts[Elements.EMPTY_SPACE],
    Editor: EmptySpaceEditor,
  },
];

