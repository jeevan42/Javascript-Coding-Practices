// 🧠 Proxy for intercepting property access

const obj = { a: 1 };
const proxied = new Proxy(obj, {
  get(target, key) {
    return key in target ? target[key] : "Not found";
  }
});

console.log(proxied.a);     // ✅ 1
console.log(proxied.b);     // ✅ "Not found"

// 🧠 Proxies enable custom behavior on object operations