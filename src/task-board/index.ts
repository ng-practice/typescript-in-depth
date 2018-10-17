enum TaskPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High'
}

interface Task {
  id: string;
  title: string;
  text: string;
  priority: TaskPriority;
  isDone: boolean;
}

const tasks: Task[] = [];
const id = '1234-234-23423-4324';
const title = 'title';
const text = 'text';
const priority = TaskPriority.Low;
const isDone = true;

function addTaskToList(task: Task): void {
  tasks.push(task);
}

function getSortedDescByPriority(tasks: Task[]): Task[] {
  return tasks.sort((a, b) => a.priority.localeCompare(b.priority));
  // return tasks.sort(function compareFn(a, b) {
  //   return b.priority - a.priority;
  // });
}

function assertNever(value: never): never {
  throw new Error(`Expected never to be called but got ${value}`);
}

function dueDates(tasks: Task[]) {
  return tasks.map((task: { priority: TaskPriority }) => {
    switch (task.priority) {
      case TaskPriority.Low:
        return 'Sometimes';
      case TaskPriority.Medium:
        return 'Today';
      case TaskPriority.High:
        return 'Now';
      default:
        assertNever(task.priority);
    }
  });
}

addTaskToList({ id, title, text, priority: TaskPriority.Low, isDone });
addTaskToList({ id, title, text, priority: TaskPriority.High, isDone });
addTaskToList({ id, title, text, priority: TaskPriority.Medium, isDone });

// console.log(getSortedDescByPriority(tasks));
console.log(dueDates(tasks));
