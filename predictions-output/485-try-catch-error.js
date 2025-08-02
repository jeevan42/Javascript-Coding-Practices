try {
  throw new Error("Something went wrong");
} catch (e) {
  console.log("Caught error:", e.message);
}