Number.prototype.isPrime = function () {
  if (this.valueOf() <= 1) return false;
  if (this.valueOf() === 2) return true;
  if (this.valueOf() % 2 === 0) return false;
  for (let i = 3; i * i <= this.valueOf(); i += 2) {
    if (this.valueOf() % i === 0) return false;
  }
  return true;
};

let num = 97;
for (let i = 0; i < num; i++) {
  if (i.isPrime()) console.log(i, "is prime");
}
