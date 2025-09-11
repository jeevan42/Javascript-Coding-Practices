// Set Size Limit
// Problem: Enforce maximum size for a set.
// Solution:
class LimitedSet extends Set {
  constructor(limit, ...args) {
    super(...args);
    this.limit = limit;
  }
  add(val) {
    if (this.size >= this.limit) {
      throw new Error("Set size exceeded");
    }
    return super.add(val);
  }
}
const ls = new LimitedSet(2);
ls.add(1); ls.add(2);
// ls.add(3); // Error
// Conclusion: Extend Set to add custom rules.
