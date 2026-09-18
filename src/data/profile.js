export const PROFILE_DATA = {
  name: "SALMAN",
  initials: "S_",
  title: "SOFTWARE ARCHITECT & CREATIVE ENGINEER",
  location: "UTC+05:30 [ONLINE]",
  status: "AVAILABLE FOR SELECT CONTRACTS",
  bio: "Engineering high-throughput distributed systems and sculpting radical, high-contrast digital experiences. Focused on hyper-minimal interfaces, zero unnecessary abstractions, and enduring software aesthetics.",
  
  metrics: [
    { label: "Years in Production", value: "08+" },
    { label: "Systems Engineered", value: "34" },
    { label: "Active Nodes Reached", value: "2.4M" },
    { label: "Design System Purity", value: "100%" }
  ],

  philosophies: [
    {
      index: "01",
      title: "Radical Subtraction",
      description: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to strip away. Every element must justify its screen presence."
    },
    {
      index: "02",
      title: "Sub-Millisecond Speed",
      description: "Latency is the ultimate anti-feature. We build systems that respond instantaneously, eliminating intermediate state loaders and synthetic delays."
    },
    {
      index: "03",
      title: "Deterministic Code",
      description: "Complex architectures fail in unpredictable modes. Resilient software relies on pure functions, strict typing, and fault-tolerant boundaries."
    }
  ],

  projects: [
    {
      id: "aether-kernel",
      index: "01",
      title: "AETHER KERNEL",
      category: "SYSTEMS",
      tagline: "Low-latency streaming engine processing 1.2M events/sec with sub-millisecond p99 jitter.",
      year: "2026",
      client: "Autonomous Fleet Systems",
      stack: ["Rust", "Tokio", "WebAssembly", "ZeroMQ", "ClickHouse"],
      metrics: "1.2M evt/sec • 0.8ms p99 • 0 alloc hot-path",
      githubUrl: "https://github.com/salmanwnl44/aether-kernel",
      liveUrl: "https://aether.example.org",
      deepDive: {
        problem: "Legacy ingestion pipelines choked under synchronized bursts of vehicle telemetry data, causing cascading head-of-line blocking and memory saturation during fleet surges.",
        solution: "Engineered a custom asynchronous memory ring-buffer in Rust with lockless ring dispatchers. Offloaded analytical indexing to specialized WebAssembly compute threads, eliminating memory churn and GC spikes completely.",
        architecture: `[Telematics Ingest] ──TCP/mTLS──► [Zero-Copy Ring Buffer]
                                         │
                   ┌─────────────────────┴─────────────────────┐
                   ▼                                           ▼
         [Wasm Stream Filter]                        [Direct Disk WAL]
                   │                                           │
                   ▼                                           ▼
        [Real-time Alert Bus]                       [Parquet Chunk Store]`,
        impact: "Reduced infrastructure costs by 68% while scaling ingestion capacity from 150k to 1.2M events/sec without dropped packets."
      }
    },
    {
      id: "monolith-ui",
      index: "02",
      title: "MONOLITH OS",
      category: "CREATIVE TECH",
      tagline: "Ultra-minimalist web workspace designed around keyboard-first commands and Swiss typography.",
      year: "2025",
      client: "Studio Monolith",
      stack: ["TypeScript", "WebGL", "Vanilla CSS", "IndexedDB", "Web Audio API"],
      metrics: "60 FPS rendering • 0 dependencies • 38KB gzip",
      githubUrl: "https://github.com/salmanwnl44/monolith-os",
      liveUrl: "https://monolith.example.org",
      deepDive: {
        problem: "Modern web tools are congested with floating modals, popups, and cognitive noise that disrupt sustained creative flow states.",
        solution: "Designed and built an exaggerated monochrome workspace featuring zero third-party UI libraries, a custom WebGL line shader engine, and physical audio-haptic feedback.",
        architecture: `[User Input: Keyboard / Command Palette]
                   │
                   ▼
         [Event Dispatcher & Command Parser]
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
  [Virtual DOM Diff]   [Synthesized Audio FX Engine]
         │                   │
         ▼                   ▼
  [GPU Screen Buffer]  [Low-Latency Output]`,
        impact: "Adopted by 14,000+ engineers and designers seeking distraction-free coding and writing workflows."
      }
    },
    {
      id: "hyper-cache",
      index: "03",
      title: "HYPERCACHE KV",
      category: "SYSTEMS",
      tagline: "Distributed in-memory key-value mesh with Raft consensus and cryptographic tamper verification.",
      year: "2025",
      client: "Decentralized Financial Layer",
      stack: ["Go", "gRPC", "Raft", "RocksDB", "OpenTelemetry"],
      metrics: "99.999% uptime • 4.2ms global consensus",
      githubUrl: "https://github.com/salmanwnl44/hyper-cache",
      liveUrl: "https://hypercache.example.org",
      deepDive: {
        problem: "Cross-region financial state replication suffered from split-brain scenarios under volatile transatlantic network partitions.",
        solution: "Implemented an optimized Raft quorum consensus algorithm with adaptive leader leases and cryptographic state verification trees.",
        architecture: `[Global Edge Ingress] ───► [Leader Node Election]
                                      │
                   ┌──────────────────┼──────────────────┐
                   ▼                  ▼                  ▼
             [Follower A]        [Follower B]       [Follower C]
             (Frankfurt)           (Virginia)         (Tokyo)`,
        impact: "Zero reconciliation errors recorded over 18 months of continuous production execution across 6 AWS availability zones."
      }
    },
    {
      id: "glitch-craft",
      index: "04",
      title: "SPECTRE SHADER ENGINE",
      category: "CREATIVE TECH",
      tagline: "Experimental fragment shader playground for monochrome generative art and audio visualizers.",
      year: "2024",
      client: "Generative Art Collective",
      stack: ["GLSL", "Three.js", "Web Audio API", "Vite"],
      metrics: "120 FPS capable • Realtime FFT analysis",
      githubUrl: "https://github.com/salmanwnl44/spectre-engine",
      liveUrl: "https://spectre.example.org",
      deepDive: {
        problem: "Standard web audio visualizers rely on CPU-heavy canvas drawing, causing significant frame drops during complex geometric morphs.",
        solution: "Built a pure GPU fragment shader pipeline that translates frequency FFT arrays into floating-point textures directly mapped to mathematical distortion functions.",
        architecture: `[Audio Stream Source] ──► [Fast Fourier Transform]
                                     │ (Float32 Array)
                                     ▼
                           [GPU Texture Uniform]
                                     │
                                     ▼
                      [Fragment Shader Raymarcher]
                                     │
                                     ▼
                          [Full-Canvas Canvas Output]`,
        impact: "Enabled buttery 120 FPS visualizations even on low-power mobile devices and older laptops."
      }
    }
  ],

  articles: [
    {
      id: "deconstructing-monolith",
      index: "01",
      title: "Deconstructing the Monolith: Lessons from 10x Scale",
      date: "SEPTEMBER 2026",
      category: "ENGINEERING",
      readTime: "7 MIN READ",
      summary: "Why breaking up a monolith prematurely is the costliest mistake a team can make, and how we finally knew it was time.",
      content: `
### The Seduction of Premature Microservices

Every growing engineering team eventually hits a inflection point where the monolith feels slow. Deploys take twenty minutes. Pull requests conflict. Someone introduces a deadlock in an unmaintained billing worker that crashes the customer checkout pipeline.

The instinctive reaction is almost always: *"Let's rewrite everything into microservices."*

Here is the inconvenient truth: Microservices do not fix broken organizational discipline or tangled domain boundaries. In fact, they transform compile-time type errors into runtime distributed partition failures over flaky network sockets.

\`\`\`rust
// What you think you are doing:
async fn process_order(id: Uuid) -> Result<Order, ServiceError> {
    inventory_service.reserve(id).await?;
    billing_service.charge(id).await?;
    notification_service.dispatch(id).await?;
    Ok(Order::new(id))
}
\`\`\`

When network timeouts strike between service two and three, you are suddenly wrestling with two-phase commits, saga orchestrators, and outbox reconciliation tables.

### The Modular Monolith Alternative

Before splitting repositories or deploying Kubernetes clusters, enforce hard boundary isolation in a single process. By structuring code into strictly decoupled domain crates with well-defined APIs and private internal schemas, you achieve:

1. **Instant builds & atomic commits**: Zero schema drift across separate version tags.
2. **Zero network hop latency**: In-process function calls execute in 4 nanoseconds rather than 4 milliseconds.
3. **Effortless refactoring**: Your compiler refactors across the entire application domain with zero downtime.

When traffic finally mandates independent horizontal scaling, the module boundary is already clean enough to detach into a dedicated microservice in hours, not months.
      `
    },
    {
      id: "case-for-radical-minimalism",
      index: "02",
      title: "The Case for Radical UI Minimalism in an Overstimulated Web",
      date: "AUGUST 2026",
      category: "DESIGN",
      readTime: "5 MIN READ",
      summary: "Modern software has become visual junk food. Why exaggerated typography, stark monochrome, and ruthless subtraction command true focus.",
      content: `
### The Modern Visual Cacophony

Open any mainstream SaaS product today. You will encounter:
- Floating chatbot avatars asking if you need assistance
- Banner banners warning about cookie policies
- Notification bells with arbitrary red dots
- Gradients containing six contradictory neon hues
- Skeleton loaders shimmering simultaneously in four cards

Every pixel screams for attention. The result is cognitive fatigue. Users are not empowered by this visual clutter; they are disoriented by it.

### The Power of Exaggerated Minimalism

Exaggerated minimalism is not about sterility; it is about intentionality and tension. It replaces decorative ornaments with **monumental typographic scale** and **unforgiving negative space**.

> "A design is finished when every superfluous stroke is erased and the core statement reverberates across the canvas like a solitary chord in an empty cathedral."

When you strip away color accents, shadow blurs, and gradient cards, what remains is the naked integrity of your content and architecture.

### Implementation Principles
1. **Typography as Architecture**: Make titles large enough to serve as structural anchors.
2. **Hairline Precision**: Use 1px borders to define regions rather than drop shadows.
3. **Monochrome Contrast**: Black and white create the highest optical legibility known to human vision.
4. **Intentional Micro-Glitch**: Introduce subtle digital artifacts (like scanlines, subtle slice displacements, or text scrambles) only to signal interactive physics.
      `
    },
    {
      id: "debugging-heisenbugs",
      index: "03",
      title: "Debugging Heisenbugs in Asynchronous Distributed Systems",
      date: "JUNE 2026",
      category: "ENGINEERING",
      readTime: "8 MIN READ",
      summary: "A forensic analysis of a concurrency race condition that only manifested under specific thread scheduling in production.",
      content: `
### The Bug That Disappeared When Looked At

In distributed systems lore, a **Heisenbug** is a defect that vanishes or alters its characteristics when an attempt is made to isolate or log it.

In our streaming ingestion engine, once every 4 million messages, an analytical session would fail to close, leaking memory across a 72-hour window. Adding tracing logs? The bug stopped reproducing. Running under GDB with breakpoints? Perfectly green test suite.

\`\`\`go
// The deceptively innocent snippet:
type SessionTracker struct {
    mu       sync.RWMutex
    sessions map[string]*Session
}

func (st *SessionTracker) Heartbeat(id string) {
    st.mu.RLock()
    session, ok := st.sessions[id]
    st.mu.RUnlock()
    
    if ok {
        session.Touch() // RACE: Session could be terminated right here!
    }
}
\`\`\`

### The Root Cause: Memory Barrier & Cache Line Invalidation

The logging mechanism altered thread timing just enough to prevent the interleaving required for the race condition between the heartbeat dispatcher and the session collector.

The fix required converting the heartbeat timestamp into an atomic integer (\`atomic.Int64\`) and applying lockless CAS (Compare-And-Swap) routines to verify heartbeat recency without mutex contention.

**Key Takeaways**:
- Never rely on timing assumptions in multithreaded runtimes.
- Use race detectors in CI with randomized execution delays.
- Treat every unexplainable intermittent error as a critical structural hint.
      `
    },
    {
      id: "craft-of-software",
      index: "04",
      title: "What 8 Years in Tech Taught Me About Code Craftsmanship",
      date: "MARCH 2026",
      category: "CAREER",
      readTime: "6 MIN READ",
      summary: "Reflections on ego, code aesthetics, staying curious, and why writing less code is the ultimate badge of seniority.",
      content: `
### Junior vs. Senior vs. Principal Mindsets

- **Junior Engineer**: Writes 500 lines of clever code to solve a problem. Excited by using 10 new library abstractions.
- **Senior Engineer**: Writes 100 lines of clear, maintainable code using boring, proven tools.
- **Principal Engineer**: Asks three questions during design review, deletes 2,000 lines of obsolete logic, and proves the problem shouldn't exist in the first place.

### The Fallacy of Complexity as Status

In many engineering cultures, complex systems are mistakenly equated with intelligence. When an engineer presents an architecture diagram with 25 separate microservices, Kafka topics, and serverless lambdas, people nod in awe.

In reality, complexity is debt. Every component added is another failure domain, another deploy pipeline to break, and another cognitive tax on new contributors.

### The Enduring Rules
1. **Prefer Code That Can Be Deleted**: Design systems with clear, independent lifecycle boundaries.
2. **Master the Fundamentals**: TCP, operating system processes, memory layouts, and data structures outlive every trendy frontend framework.
3. **Aesthetics Matter**: Code formatting, variable clarity, and interface ergonomics reflect how deeply you care about the humans who will read your work tomorrow.
      `
    }
  ],

  contact: {
    email: "salman@example.com",
    github: "https://github.com/salmanwnl44",
    linkedin: "https://linkedin.com/in/salman",
    twitter: "https://x.com/salman",
    timezone: "UTC +05:30 (IST)",
    availability: "Available for Q3/Q4 2026 architectural advisories, creative tech, and senior engineering roles.",
    pgpKey: "4A9F 83B2 018C E829 55BF D210 932B C184 7A29 4F10"
  }
};
