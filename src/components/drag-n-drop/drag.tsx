import { FC, ReactNode } from 'react';
import { Draggable } from "react-beautiful-dnd";

interface DragProps {
  id: string;
  index: number;
  children: ReactNode;
  disabled?: boolean;
}
export const Drag: FC<DragProps> = ({ id, index, children, disabled }) => {
  return (
    <Draggable draggableId={id} index={index} isDragDisabled={disabled}>
      {(provided, snapshot) => {
        return (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            {children}
          </div>
        );
      }}
    </Draggable>
  );
};
