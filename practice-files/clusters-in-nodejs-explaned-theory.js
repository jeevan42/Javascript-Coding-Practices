/**
 * 🔧 Real-life Analogy: Cluster as a Restaurant
 * 
 * 🍽️ Imagine you own a restaurant.
 * - You (👨‍🍳 master process) are the **manager**.
 * - You have 4 waiters (🧍‍♂️🧍‍♂️🧍‍♂️🧍‍♂️ worker processes) to serve customers.
 * - All customers (clients) come to the **same front door (port 8000)**.
 * 
 * As a manager:
 * - You hire waiters → `cluster.fork()`
 * - You monitor waiters → If one quits, you hire another → `cluster.on('exit')`
 * - Waiters take orders (handle HTTP requests) independently.
 * 
 * ⚡ Instead of 1 waiter doing everything (slow), 4 waiters can serve **4x more customers** concurrently.
 * 
 * 🧠 Why Node.js Needs Cluster?
 * - Node.js is **single-threaded** by default — only one task runs at a time per process.
 * - On multi-core CPUs, most of the power is unused.
 * 
 * 🔥 Cluster Module Solves This:
 * ✅ Use all CPU cores
 * ✅ Run requests in **parallel**
 * ✅ Load is shared automatically on same port
 * ✅ Fault tolerance: If 1 worker dies, it restarts
 * 
 * 💻 Real-life Server Use Case:
 * - You build a chat app or API server getting 1000+ requests/sec.
 * - Without cluster: One process handles everything → slow or crash.
 * - With cluster:
 *    - You spawn 4–8 worker processes (based on CPU)
 *    - Each one handles part of the traffic
 *    - Result: **Fast**, **Stable**, and **Scalable**
 * 
 * 🔄 What Happens in the Code:
 * | Code Part                    | What It Does                                      |
 * |-----------------------------|---------------------------------------------------|
 * | if (cluster.isMaster)       | This is the boss/master process                   |
 * | cluster.fork()              | Starts a new Node.js worker process               |
 * | cluster.on('exit')          | Restarts worker if one crashes                    |
 * | else { http.createServer() }| Worker creates server on same port (8000)         |
 * 
 * 🧪 How to See Cluster Benefits:
 * - Add a `setTimeout` inside the server to simulate delay.
 * - Fire multiple requests using Postman or browser.
 * - Notice: Different requests handled by **different workers**.
 */
