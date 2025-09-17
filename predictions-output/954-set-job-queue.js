// Job Queue with Set
// Problem: Ensure jobs run only once.
// Solution:
const jobs = new Set();
function addJob(j) {
  if (jobs.has(j)) return "Already queued";
  jobs.add(j);
  return "Added";
}
console.log(addJob("job1"));
console.log(addJob("job1"));
// Conclusion: Prevents duplicate job scheduling.
