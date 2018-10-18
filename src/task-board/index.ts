import { TaskList } from './models/task-list';
import { TaskPriority } from './models/task-priority';

const taskList = new TaskList();
const id = '1234-234-23423-4324';
const title = 'title';
const text = 'text';
const isDone = true;

taskList.addTaskToList({ id, title, text, priority: TaskPriority.Low, isDone });
taskList.addTaskToList({ id, title, text, priority: TaskPriority.High, isDone });
taskList.addTaskToList({ id, title, text, priority: TaskPriority.Medium, isDone });

console.log('Sorted:', taskList.getSortedDescByPriority());
console.log('Due Dates:', taskList.dueDates());
