// Intl.RelativeTimeFormat Example
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log(rtf.format(-1, "day")); // "yesterday"
console.log(rtf.format(1, "day"));  // "tomorrow"
