import { TaskList, TaskPriority } from './models';
import { create } from 'lib/create';

const taskList = new TaskList();
const id = '1234-234-23423-4324';
const title = 'title';
const text = 'text';
const isDone = true;

taskList.addTaskToList({
  id: '1',
  title,
  text,
  priority: TaskPriority.Low,
  isDone
});
taskList.addTaskToList({
  id: '2',
  title,
  text,
  priority: TaskPriority.High,
  isDone
});
taskList.addTaskToList({
  id: '3',
  title,
  text,
  priority: TaskPriority.Medium,
  isDone
});

taskList.addUrgentTask(
  { id: '4', title, text, isDone, priority: TaskPriority.Low },
  TaskPriority.VeryHigh
);

console.log('Sorted:', taskList.getSortedDescByPriority());
console.log('Due Dates:', taskList.dueDates());

// type protocols = 'HTTP' | 'HTTPS' | 'FTP';

// const protocol: protocols = 'WS'

interface GenericIdentityFn<T> {
  (arg: T): T;
  prop: string;
}

// let iFullfilInterface: GenericIdentityFn<number>;
// iFullfilInterface = function(arg: number) {
//   return arg * 2;
// } as any;

// iFullfilInterface.prop = '213123';

const list = create(TaskList);
console.log(list instanceof TaskList);
