import { TaskList, TaskPriority, Task } from './models';
import { Mutator } from './lib/mutator';

const taskList = new TaskList();
const id = '1234-234-23423-4324';
const title = 'title';
const text = 'text';
const isDone = true;

taskList.addTaskToList({
  guid: '1',
  title,
  text,
  priority: TaskPriority.Low,
  isDone
});
taskList.addTaskToList({
  guid: '2',
  title,
  text,
  priority: TaskPriority.High,
  isDone
});
taskList.addTaskToList({
  guid: '3',
  title,
  text,
  priority: TaskPriority.Medium,
  isDone
});

taskList.addUrgentTask(
  { guid: '4', title, text, isDone, priority: TaskPriority.Low },
  TaskPriority.VeryHigh
);

// console.log('Sorted:', taskList.getSortedDescByPriority());
// console.log('Due Dates:', taskList.dueDates());

const mutator = new Mutator<Task>({ getIdentifier: task => task.guid });

const task1 = { guid: '4', title, text, isDone, priority: TaskPriority.Low };
const task2 = { guid: '5', title, text, isDone, priority: TaskPriority.Low };
const task3 = { guid: '6', title, text, isDone, priority: TaskPriority.Low };

taskList.tasks = mutator.addOne(task1, taskList.tasks);
taskList.tasks = mutator.addMany([task2, task3], taskList.tasks);

console.log(taskList.tasks);
