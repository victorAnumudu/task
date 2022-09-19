import { useState } from "react";
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import ButtonAdd from "./components/ButtonAdd";
import ButtonAction from "./components/ButtonAction";
import Form from "./components/Form";
import TaskContainer from "./components/TaskContainer";

// styled components
import { Application } from "./components/styles/App.styled";
import { Container } from "./components/styles/Container.styled";

function App() {
  let [formIsVisible, setFormIsVisible] = useState(false);

  // Tasks todo array
  let [tasks, setTasks] = useState([
    {
      id: "1",
      task: "Cook and Work",
      date: "2022-09-19",
      time: "12:00",
      completed: false,
    },
    {
      id: "2",
      task: "Wash dishes",
      date: "2022-12-19",
      time: "12:00",
      completed: true,
    },
    {
      id: "3",
      task: "Take Children home",
      date: "2022-11-29",
      time: "12:00",
      completed: false,
    },
  ]);

  // function to handle form visibility
  let handleFormIsVisible = () => {
    setFormIsVisible(!formIsVisible);
  };

  // add task to tasks array
  let addTask = (input) => {
    let id = Math.random() + Math.random();
    let completed = Math.round(Math.random());
    let task = { ...input, id: id, completed: completed };
    setTasks((tasks) => [...tasks, task]);

    // function for closing the form
    handleFormIsVisible();
  };

  // clearing all task
  let handleClearAllTask = () => {
    setTasks([]);
  };

  // marking all task donne
  let handleMarkAllTaskDone = () => {
    setTasks((prev) =>
      tasks.map((task) => {
        return { ...task, completed: true };
      })
    );
  };

  // function to delete task from list of tasks
  let deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // function to toggle task completed
  let markTaskCompleted = (taskId) => {
    setTasks(prev => {
      return tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : { ...task }
      );
    });
  };

  return (
    <Application>
      <Header />

      <Paragraph text="Designed by Anumudu" font="var(--monotype)" />

      {/*formIsVisible &&*/ <Form showform={formIsVisible} addtask={addTask} />}

      <ButtonAdd
        text={formIsVisible ? "CLOSE" : "ADD"}
        color="#fff"
        bg="var(--purple)"
        hover="var(--dark-purple)"
        onclick={handleFormIsVisible}
      />
      <Paragraph text={"Tasks are as follows"} />

      {tasks.map((task) => (
        <TaskContainer
          key={task.id}
          {...task}
          ondelete={deleteTask}
          marktaskcompleted={markTaskCompleted}
        />
      ))}

      <Container display="flex">
        <ButtonAction
          text="MARK ALL DONE"
          color="#fff"
          bg="var(--green)"
          hover="var(--dark-green)"
          onclick={handleMarkAllTaskDone}
        />

        <ButtonAction
          text="CLEAR ALL TASK"
          color="#fff"
          bg="var(--red)"
          hover="var(--dark-red)"
          onclick={handleClearAllTask}
        />
      </Container>
    </Application>
  );
}

export default App;
