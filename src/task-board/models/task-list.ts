import { MandatoryTask, UrgentTask } from '../types';
import { Task } from './task';
import { TaskPriority } from './task-priority';
import { Log, WhatIsIt } from '../lib/log.decorator';

export type ReadonlyTask = { readonly [prop in keyof Task]: Task[prop] };

export interface ReadonlyTasks {
  [key: string]: ReadonlyTask;
}

@Log('Managing Tasks is fun 🤷‍.')
export class TaskList {
  public tasks: ReadonlyTasks = {};

  public addTaskToList(@WhatIsIt('Huhuhuhuhu 👨‍🏫') task: Task | undefined): void {
    if (task) {
      this.tasks = {
        ...this.tasks,
        [task.guid]: task
      };
    }
  }

  public addUrgentTask(task: Task, priority: UrgentTask) {
    const urgentTask = { ...task, priority };
    this.addTaskToList(urgentTask);
  }

  public getSortedDescByPriority(): Task[] {
    return Object.values(this.tasks).sort((a, b) =>
      a.priority.localeCompare(b.priority)
    );
    // return tasks.sort(function compareFn(a, b) {
    //   return b.priority - a.priority;
    // });
  }

  public dueDates(): string[] {
    return Object.values(this.tasks).map((task: { priority: TaskPriority }) => {
      switch (task.priority) {
        case TaskPriority.Low:
          return 'Sometimes';
        case TaskPriority.Medium:
          return 'Today';
        case TaskPriority.High:
          return 'Now';
        case TaskPriority.VeryHigh:
          return 'Yesterday';
        default:
          this._assertNever(task.priority);
          return '';
      }
    });
  }

  public getUrgent(): Task[] {
    return Object.values(this.tasks).filter(task =>
      this._isUrgent(task.priority)
    );
  }

  private _sample() {
    return Object.values(this.tasks).filter(task => {
      const priority = task.priority;
      if (this._isUrgent(priority)) {
        priority; // infers UrgentTask
        return true;
      } else {
        priority; // infers MandatoryTask
        return false;
      }
    });
  }

  private _assertNever(value: never): never {
    throw new Error(`Expected never to be called but got ${value}`);
  }

  private _isUrgent(
    priority: MandatoryTask | UrgentTask
  ): priority is UrgentTask {
    return priority === TaskPriority.High || priority === TaskPriority.VeryHigh;
  }
}
