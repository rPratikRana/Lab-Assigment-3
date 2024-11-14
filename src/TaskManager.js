import React, { Component } from 'react';
import TaskList from './TaskList';

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskText: '',  // To store the current task input
    };
  }

  handleInputChange = (event) => {
    this.setState({ taskText: event.target.value });
  };

  handleAddTask = () => {
    const { taskText, tasks } = this.state;
    if (taskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,  // By default, the task is not completed
      };
      this.setState({
        tasks: [...tasks, newTask],
        taskText: '',  // Reset input field after adding task
      });
    }
  };

  handleDeleteTask = (taskId) => {
    const updatedTasks = this.state.tasks.filter((task) => task.id !== taskId);
    this.setState({ tasks: updatedTasks });
  };

  handleToggleCompletion = (taskId) => {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const { tasks, taskText } = this.state;
    return (
      <div>
        <h1>Task Manager</h1>
        <div>
          <input
            type="text"
            value={taskText}
            onChange={this.handleInputChange}
            placeholder="Enter a task"
          />
          <button onClick={this.handleAddTask}>Add Task</button>
        </div>
        <TaskList
          tasks={tasks}
          onDeleteTask={this.handleDeleteTask}
          onToggleCompletion={this.handleToggleCompletion}
        />
      </div>
    );
  }
}

export default TaskManager;

