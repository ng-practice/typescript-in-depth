import { Task } from './task';
import { TaskPriority } from './task-priority';

export class TaskList {
  tasks: Task[] = [];

  addTaskToList(task: Task): void {
    this.tasks.push(task);
  }

  getSortedDescByPriority(): Task[] {
    return this.tasks.sort((a, b) => a.priority.localeCompare(b.priority));
    // return tasks.sort(function compareFn(a, b) {
    //   return b.priority - a.priority;
    // });
  }

  dueDates(): string[] {
    return this.tasks.map((task: { priority: TaskPriority }) => {
      switch (task.priority) {
        case TaskPriority.Low:
          return 'Sometimes';
        case TaskPriority.Medium:
          return 'Today';
        case TaskPriority.High:
          return 'Now';
        default:
          this._assertNever(task.priority);
      }
    });
  }

  private _assertNever(value: never): never {
    throw new Error(`Expected never to be called but got ${value}`);
  }
}
