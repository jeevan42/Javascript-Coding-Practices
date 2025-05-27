/**
 * Cluster in Node.js (ES Modules)
 * 
 * Definition:
 * Cluster module allows you to create child processes (workers) that 
 * share the same server port. It helps in taking advantage of multi-core 
 * systems by spawning multiple Node.js processes to handle the load.
 * 
 * Explanation:
 * Node.js runs on a single thread by default. To utilize multi-core CPUs 
 * effectively and improve the performance of applications, the cluster 
 * module is used. It creates multiple worker processes, each running 
 * its own event loop, but all workers share the same server port.
 * 
 * This way, the application can handle more requests concurrently by 
 * distributing the workload across multiple CPU cores.
 * 
 * Example usage:
 * - The master process forks workers.
 * - Workers listen on the same port.
 * - If a worker crashes, the master can spawn a new one.
 * 
 * This improves scalability and fault tolerance in Node.js apps.
 */

import cluster from 'node:cluster';
import http from 'node:http';
import os from 'node:os';

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Starting a new worker...`);
    cluster.fork();
  });

} else {
  // Workers can share any TCP connection
  // Here, an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello from worker ${process.pid}\n`);
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
