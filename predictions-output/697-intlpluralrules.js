// Intl.PluralRules Example
const pr = new Intl.PluralRules("en-US");
console.log(pr.select(1)); // "one"
console.log(pr.select(2)); // "other"
