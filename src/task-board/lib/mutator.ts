export interface Dictionary<T> {
  [id: string]: T;
}

export interface Entity {
  id: string;
}

export interface ModelMutator<T> {
  addOne(model: T, entities: Dictionary<T>): Dictionary<T>;
  addMany(model: T[], entities: Dictionary<T>): Dictionary<T>;
}

export interface ModelMutatorOptions<T> {
  getIdentifier: (entity: T) => string | number;
}

export class Mutator<T> implements ModelMutator<T> {
  constructor(private options: ModelMutatorOptions<T>) {}

  public addOne(model: T, entities: Dictionary<T>): Dictionary<T> {
    const identifier = this.options.getIdentifier(model);

    if (!identifier) {
      throw new Error(`Mutator: "${identifier}" is not a valid identifier.`);
    }

    return {
      ...entities,
      [identifier]: model
    };
  }

  public addMany(models: T[], entities: Dictionary<T>): Dictionary<T> {
    return models.reduce(
      (entityCollector, model) => this.addOne(model, entityCollector),
      entities
    );

    // for (let model of models) {
    //   entities = this.addOne(model, entities);
    // }

    // models.forEach(model => entities = this.addOne(model, entities));
    // return entities;
  }
}
