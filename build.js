module.export = class test {
   constructor(x, y) {
      this.x = x;
      this.y = y;
   }

   sum() { return this.x + this.y; }
   
   *components() {
      yield this.x;
      yield this.y;
   }
}
