import { React, useState } from "react";

import Paragraph from "./Paragraph";
import { ParagraphStyle } from "./styles/Paragraph.style ";
import { IconStyled } from "./styles/Icon.styled";
import { IconActions } from "./styles/IconActions";
import { TaskContainerWrapper } from "./styles/TaskContainer.style";

const TaskContainer = ({ id, task, date, time, completed, ondelete, marktaskcompleted }) => {
  let [iconAction, setIconAction] = useState(false);

  // function to show icon actions
  let showIconAction = () => {
    setIconAction(!iconAction);
  };

  // function to delete task
  let deleteTask = () => {
    ondelete(id);
    showIconAction();
  };

  // function to delete task
  let markTaskCompleted = () => {
    marktaskcompleted(id);
    showIconAction();
  };

  return (
    <TaskContainerWrapper completed={completed}>
      <div>
        <Paragraph text={task} />
        <Paragraph text={date} time={time} />
      </div>
      <IconStyled title="click for action" onClick={showIconAction}>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </IconStyled>
      {iconAction && (
        <IconActions>
          <ParagraphStyle>
            <i className="fa-solid fa-pen-to-square" title="edit"></i>
          </ParagraphStyle>
          <ParagraphStyle>
            <i
              className="fa-sharp fa-solid fa-trash"
              title="delete"
              onClick={deleteTask}
            ></i>
          </ParagraphStyle>
          <ParagraphStyle>
            <i
              className="fa-solid fa-check"
              title="done"
              onClick={markTaskCompleted}
            ></i>
          </ParagraphStyle>
        </IconActions>
      )}
    </TaskContainerWrapper>
  );
};

export default TaskContainer;
