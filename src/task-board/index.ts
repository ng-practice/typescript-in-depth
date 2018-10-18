import { TaskList, TaskPriority } from './models';

const taskList = new TaskList();
const id = '1234-234-23423-4324';
const title = 'title';
const text = 'text';
const isDone = true;

taskList.addTaskToList({ id, title, text, priority: TaskPriority.Low, isDone });
taskList.addTaskToList({
  id,
  title,
  text,
  priority: TaskPriority.High,
  isDone
});
taskList.addTaskToList({
  id,
  title,
  text,
  priority: TaskPriority.Medium,
  isDone
});

taskList.addUrgentTask(
  { id, title, text, isDone, priority: TaskPriority.Low },
  TaskPriority.VeryHigh
);

console.log('Sorted:', taskList.getSortedDescByPriority());
console.log('Due Dates:', taskList.dueDates());

// type protocols = 'HTTP' | 'HTTPS' | 'FTP';

// const protocol: protocols = 'WS'
