import { FC, ReactNode } from 'react';
import { Droppable } from "react-beautiful-dnd";

interface DropProps {
  id: string;
  type: "DROPPABLE_SECTION" | "DROPPABLE_COLUMN" | "DROPPABLE_ELEMENT";
  children: ReactNode
}
export const Drop: FC<DropProps> = ({ id, type, children }) => {
  return (
    <Droppable droppableId={id} type={type}>
      {(provided) => {
        return (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {children}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
