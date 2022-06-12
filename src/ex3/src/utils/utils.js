class Utils {
  isNumber(value) {
    return !isNaN(Number(value));
  }
  isList(value) {
    return value.split(",").every(this.isNumber); // this looks like a mouthful - but take it step by step, it's pretty cool
  }
}

export default new Utils();
