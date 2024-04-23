class Uber {
    constructor(rate, distance){
      this.rate = rate;
      this.distance = distance;
    }
    get Amount() {
      return this.rate * this.distance;
    }
  }
  let uberPrice = new Uber(52,7);
  console.log('Uber Price:', uberPrice.Amount);

  