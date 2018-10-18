import { TaskPriority, Task } from '../task-board/models';

class UrgentTaskImpl implements Task {
  id: string;
  title: string;
  text: string;
  priority: TaskPriority;
  isDone: boolean;

  runNow() {}
}

class MandatoryTaskImpl implements Task {
  id: string;
  title: string;
  text: string;
  priority: TaskPriority;
  isDone: boolean;

  runLater() {}
}

function isUrgent(
  task: UrgentTaskImpl | MandatoryTaskImpl
): task is UrgentTaskImpl {
  return task instanceof UrgentTaskImpl;
}

let myTask: UrgentTaskImpl | MandatoryTaskImpl;
myTask = new UrgentTaskImpl();

// if (isUrgent(myTask)) {
//   myTask.runNow();
// } else {
//   myTask.runLater();
// }
