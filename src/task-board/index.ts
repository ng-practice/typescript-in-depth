import { Mutator } from './lib/mutator';
import { Task, TaskList, TaskPriority } from './models';

const taskList = new TaskList();
const id = '1234-234-23423-4324';
const title = 'title';
const text = 'text';
const isDone = true;

taskList.addTaskToList({
  guid: '1',
  isDone,
  priority: TaskPriority.Low,
  text,
  title
});
taskList.addTaskToList({
  guid: '2',
  isDone,
  priority: TaskPriority.High,
  text,
  title
});
taskList.addTaskToList({
  guid: '3',
  isDone,
  priority: TaskPriority.Medium,
  text,
  title
});

taskList.addUrgentTask(
  { guid: '4', title, text, isDone, priority: TaskPriority.Low },
  TaskPriority.VeryHigh
);

// console.log('Sorted:', taskList.getSortedDescByPriority());
// console.log('Due Dates:', taskList.dueDates());

const mutator = new Mutator<Task>({ getIdentifier: task => task.guid });

const task1 = { title, text, isDone, guid: '4', priority: TaskPriority.Low };
const task2 = { title, text, isDone, guid: '5', priority: TaskPriority.Low };
const task3 = { title, text, isDone, guid: '6', priority: TaskPriority.Low };

taskList.tasks = mutator.addOne(task1, taskList.tasks);
taskList.tasks = mutator.addMany([task2, task3], taskList.tasks);

// tslint:disable-next-line:no-any
console.log((taskList as any)['additionalData'], taskList.tasks);
