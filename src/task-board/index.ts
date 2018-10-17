enum TaskPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High'
}

const tasks = [];
const id = '1234-234-23423-4324';
const title = 'title';
const text = 'text';
const priority = TaskPriority.Low;
const isDone = true;

function addTaskToList(
  id: string,
  title: string,
  text: string,
  priority: TaskPriority,
  isDone: boolean
): void {
  // ES2015
  tasks.push({
    id,
    title,
    text,
    priority,
    isDone
  });
}

function getSortedDescByPriority(tasks: any[]): any[] {
  return tasks.sort((a, b) => a.priority.localeCompare(b.priority));
  // return tasks.sort(function compareFn(a, b) {
  //   return b.priority - a.priority;
  // });
}

addTaskToList(id, title, text, TaskPriority.Low, isDone);
addTaskToList(id, title, text, TaskPriority.High, isDone);

console.log(getSortedDescByPriority(tasks));
