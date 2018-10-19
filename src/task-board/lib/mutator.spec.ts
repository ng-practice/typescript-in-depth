import { Mutator, Dictionary } from './mutator';
import { Task } from '../models';

describe('Mutator<T>', () => {
  describe('addOne', () => {
    describe('When no id is given', () => {
      it('should raise an error', () => {
        // Arrange
        const mutator = new Mutator<Task>({ getIdentifier: task => task.guid });
        const malformedTask = {} as Task;

        // Act & Assert
        expect(() => mutator.addOne(malformedTask, {})).toThrowError();
      });

      it('should not perform a mutation', () => {
        const mutator = new Mutator<Task>({ getIdentifier: task => task.guid });
        const malformedTask = {} as Task;
        const emptyDictionary: Dictionary<Task> = {};

        try {
          mutator.addOne(malformedTask, emptyDictionary);
        } catch {}

        expect(emptyDictionary).toEqual({});
      });
    });

    describe('When the passed Dictionary is null', () => {
      let mutator: Mutator<Task>;
      let task: Task;
      beforeAll(() => console.log('BEFORE ALL'));

      beforeEach(() => {
        console.log('BEFORE EACH');
        mutator = new Mutator<Task>({ getIdentifier: task => task.guid });
        task = { guid: '79248-0234' } as Task;
      });

      afterEach(() => console.log('AFTER EACH'));
      afterAll(() => console.log('AFTER ALL'));

      it('should not raise an error', () => {
        // tslint:disable-next-line:no-any
        expect(() => mutator.addOne(task, null as any)).not.toThrow();
      });

      it('should create and use an empty object', () => {
        // tslint:disable-next-line:no-any
        expect(mutator.addOne(task, null as any)).toBeDefined();
      });

      it('should add the passed model to the dictionary', () => {
        // tslint:disable-next-line:no-any
        const result = mutator.addOne(task, null as any);

        expect(result[task.guid]).toBeDefined();
      });
    });
  });

  describe('addMany', () => {
    describe('When two tasks are added to the dictionary', () => {
      it('should call addOne two times', () => {
        const mutator = new Mutator<Task>({ getIdentifier: task => task.guid });
        const addOne = jest.spyOn(mutator, 'addOne');

        const tasksToBeAdded: Task[] = [
          { guid: '79248-0234' } as Task,
          { guid: '79248-0231' } as Task
        ];

        mutator.addMany(tasksToBeAdded, {});

        expect(addOne).toHaveBeenCalledTimes(2);
      });
    });
  });
});
