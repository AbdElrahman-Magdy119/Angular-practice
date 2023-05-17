export class DataService {
  private data = '';

  getData() {
    return this.data;
  }

  setName(newName: string) {
    this.data = newName;
  }
}
