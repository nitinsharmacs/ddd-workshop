const WeightUnit = {
  GM: 'gm',
};

module.exports = class Weight {
  constructor(value) {
    this.value = value;
    this.unit = WeightUnit.GM;
  }
};
