export class BaseModel {
  [key: string]: any;

  protected fields: string[] = [];

  public populate(json: any) {
    this.fields.forEach((field: string) => {
      if (json[field] === undefined) {
        return;
      }
      this[field] = json[field];
    });
  }
}