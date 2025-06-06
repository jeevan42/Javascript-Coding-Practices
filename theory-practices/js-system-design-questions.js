// js-system-design-questions.js

/*
📦 System Design-Level JavaScript Interview Questions
These questions test how you architect, scale, and maintain large JavaScript applications (frontend/backend).

---
❓ Q1: How would you structure a large-scale React application?
✅ A:
- Feature-based folder structure
- Code splitting (React.lazy, Suspense)
- State management (Redux/Zustand/Context)
- Component reusability, Atomic Design
- Environment-specific config
- Linting + Prettier + Testing setup

---
❓ Q2: How would you optimize frontend performance in JS apps?
✅ A:
- Lazy load components and routes
- Debounce user inputs
- Use memoization (`useMemo`, `useCallback`)
- Avoid unnecessary re-renders
- Tree-shaking, bundle analyzer
- Minify assets, use CDN

---
❓ Q3: How does the backend scale with Node.js?
✅ A:
- Use **clustering** to utilize all CPU cores
- Load balancer (e.g., NGINX) in front of multiple instances
- Stateless services
- Caching (Redis), Queues (RabbitMQ)
- Use environment variables and configuration management

---
❓ Q4: How would you design an authentication system in JS?
✅ A:
- JWT for stateless auth
- bcrypt for password hashing
- Refresh tokens + access tokens
- Role-based access control (RBAC)
- Use secure HTTP-only cookies or authorization headers

---
❓ Q5: How would you handle millions of requests in a Node.js app?
✅ A:
- Use clustering with `os.cpus()`
- Async I/O (non-blocking)
- Load balancer in front
- Use caching layers (Redis, CDN)
- Rate limiting, queueing, retry mechanism

---
❓ Q6: How would you structure a monorepo for a JS project?
✅ A:
- Tools like Nx or Turborepo
- Separate folders for each package (frontend, backend, shared utils)
- Shared config and lint rules
- Version control via workspaces (pnpm, yarn)

---
❓ Q7: How to implement logging in a large-scale app?
✅ A:
- Use Winston, Morgan, or Bunyan for structured logging
- Separate logs by level (info, warn, error)
- Store logs in ELK stack, Datadog, or Sentry
- Log HTTP requests, responses, errors

---
❓ Q8: How would you handle error boundaries in React?
✅ A:
- Create error boundary components using `componentDidCatch`
- Log errors to monitoring service (e.g., Sentry)
- Show fallback UI

---
🧠 Bonus:
- Understand SSR, hydration in Next.js
- Understand CDN caching vs API caching
- Design frontend for real-time (WebSocket, SSE)
- Use Web Workers for heavy computation
*/
