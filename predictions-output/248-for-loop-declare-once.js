// 🧠 Declaring loop variable with `let` limits it to loop scope

for (let i = 0; i < 2; i++) {
  setTimeout(() => console.log(i), 0); // ✅ 0 then 1
}