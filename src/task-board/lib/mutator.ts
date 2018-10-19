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

  addOne(model: T, entities: Dictionary<T>): Dictionary<T> {
    return {
      ...entities,
      [this.options.getIdentifier(model)]: model
    };
  }

  addMany(models: T[], entities: Dictionary<T>): Dictionary<T> {
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
