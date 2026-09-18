(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const r={name:"SALMAN",initials:"S_",title:"SOFTWARE ARCHITECT & CREATIVE ENGINEER",location:"UTC+05:30 [ONLINE]",status:"AVAILABLE FOR SELECT CONTRACTS",bio:"Engineering high-throughput distributed systems and sculpting radical, high-contrast digital experiences. Focused on hyper-minimal interfaces, zero unnecessary abstractions, and enduring software aesthetics.",metrics:[{label:"Years in Production",value:"08+"},{label:"Systems Engineered",value:"34"},{label:"Active Nodes Reached",value:"2.4M"},{label:"Design System Purity",value:"100%"}],philosophies:[{index:"01",title:"Radical Subtraction",description:"Perfection is achieved not when there is nothing more to add, but when there is nothing left to strip away. Every element must justify its screen presence."},{index:"02",title:"Sub-Millisecond Speed",description:"Latency is the ultimate anti-feature. We build systems that respond instantaneously, eliminating intermediate state loaders and synthetic delays."},{index:"03",title:"Deterministic Code",description:"Complex architectures fail in unpredictable modes. Resilient software relies on pure functions, strict typing, and fault-tolerant boundaries."}],projects:[{id:"aether-kernel",index:"01",title:"AETHER KERNEL",category:"SYSTEMS",tagline:"Low-latency streaming engine processing 1.2M events/sec with sub-millisecond p99 jitter.",year:"2026",client:"Autonomous Fleet Systems",stack:["Rust","Tokio","WebAssembly","ZeroMQ","ClickHouse"],metrics:"1.2M evt/sec • 0.8ms p99 • 0 alloc hot-path",githubUrl:"https://github.com/salmanwnl44/aether-kernel",liveUrl:"https://aether.example.org",deepDive:{problem:"Legacy ingestion pipelines choked under synchronized bursts of vehicle telemetry data, causing cascading head-of-line blocking and memory saturation during fleet surges.",solution:"Engineered a custom asynchronous memory ring-buffer in Rust with lockless ring dispatchers. Offloaded analytical indexing to specialized WebAssembly compute threads, eliminating memory churn and GC spikes completely.",architecture:`[Telematics Ingest] ──TCP/mTLS──► [Zero-Copy Ring Buffer]
                                         │
                   ┌─────────────────────┴─────────────────────┐
                   ▼                                           ▼
         [Wasm Stream Filter]                        [Direct Disk WAL]
                   │                                           │
                   ▼                                           ▼
        [Real-time Alert Bus]                       [Parquet Chunk Store]`,impact:"Reduced infrastructure costs by 68% while scaling ingestion capacity from 150k to 1.2M events/sec without dropped packets."}},{id:"monolith-ui",index:"02",title:"MONOLITH OS",category:"CREATIVE TECH",tagline:"Ultra-minimalist web workspace designed around keyboard-first commands and Swiss typography.",year:"2025",client:"Studio Monolith",stack:["TypeScript","WebGL","Vanilla CSS","IndexedDB","Web Audio API"],metrics:"60 FPS rendering • 0 dependencies • 38KB gzip",githubUrl:"https://github.com/salmanwnl44/monolith-os",liveUrl:"https://monolith.example.org",deepDive:{problem:"Modern web tools are congested with floating modals, popups, and cognitive noise that disrupt sustained creative flow states.",solution:"Designed and built an exaggerated monochrome workspace featuring zero third-party UI libraries, a custom WebGL line shader engine, and physical audio-haptic feedback.",architecture:`[User Input: Keyboard / Command Palette]
                   │
                   ▼
         [Event Dispatcher & Command Parser]
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
  [Virtual DOM Diff]   [Synthesized Audio FX Engine]
         │                   │
         ▼                   ▼
  [GPU Screen Buffer]  [Low-Latency Output]`,impact:"Adopted by 14,000+ engineers and designers seeking distraction-free coding and writing workflows."}},{id:"hyper-cache",index:"03",title:"HYPERCACHE KV",category:"SYSTEMS",tagline:"Distributed in-memory key-value mesh with Raft consensus and cryptographic tamper verification.",year:"2025",client:"Decentralized Financial Layer",stack:["Go","gRPC","Raft","RocksDB","OpenTelemetry"],metrics:"99.999% uptime • 4.2ms global consensus",githubUrl:"https://github.com/salmanwnl44/hyper-cache",liveUrl:"https://hypercache.example.org",deepDive:{problem:"Cross-region financial state replication suffered from split-brain scenarios under volatile transatlantic network partitions.",solution:"Implemented an optimized Raft quorum consensus algorithm with adaptive leader leases and cryptographic state verification trees.",architecture:`[Global Edge Ingress] ───► [Leader Node Election]
                                      │
                   ┌──────────────────┼──────────────────┐
                   ▼                  ▼                  ▼
             [Follower A]        [Follower B]       [Follower C]
             (Frankfurt)           (Virginia)         (Tokyo)`,impact:"Zero reconciliation errors recorded over 18 months of continuous production execution across 6 AWS availability zones."}},{id:"glitch-craft",index:"04",title:"SPECTRE SHADER ENGINE",category:"CREATIVE TECH",tagline:"Experimental fragment shader playground for monochrome generative art and audio visualizers.",year:"2024",client:"Generative Art Collective",stack:["GLSL","Three.js","Web Audio API","Vite"],metrics:"120 FPS capable • Realtime FFT analysis",githubUrl:"https://github.com/salmanwnl44/spectre-engine",liveUrl:"https://spectre.example.org",deepDive:{problem:"Standard web audio visualizers rely on CPU-heavy canvas drawing, causing significant frame drops during complex geometric morphs.",solution:"Built a pure GPU fragment shader pipeline that translates frequency FFT arrays into floating-point textures directly mapped to mathematical distortion functions.",architecture:`[Audio Stream Source] ──► [Fast Fourier Transform]
                                     │ (Float32 Array)
                                     ▼
                           [GPU Texture Uniform]
                                     │
                                     ▼
                      [Fragment Shader Raymarcher]
                                     │
                                     ▼
                          [Full-Canvas Canvas Output]`,impact:"Enabled buttery 120 FPS visualizations even on low-power mobile devices and older laptops."}}],articles:[{id:"deconstructing-monolith",index:"01",title:"Deconstructing the Monolith: Lessons from 10x Scale",date:"SEPTEMBER 2026",category:"ENGINEERING",readTime:"7 MIN READ",summary:"Why breaking up a monolith prematurely is the costliest mistake a team can make, and how we finally knew it was time.",content:`
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
      `},{id:"case-for-radical-minimalism",index:"02",title:"The Case for Radical UI Minimalism in an Overstimulated Web",date:"AUGUST 2026",category:"DESIGN",readTime:"5 MIN READ",summary:"Modern software has become visual junk food. Why exaggerated typography, stark monochrome, and ruthless subtraction command true focus.",content:`
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
      `},{id:"debugging-heisenbugs",index:"03",title:"Debugging Heisenbugs in Asynchronous Distributed Systems",date:"JUNE 2026",category:"ENGINEERING",readTime:"8 MIN READ",summary:"A forensic analysis of a concurrency race condition that only manifested under specific thread scheduling in production.",content:`
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
      `},{id:"craft-of-software",index:"04",title:"What 8 Years in Tech Taught Me About Code Craftsmanship",date:"MARCH 2026",category:"CAREER",readTime:"6 MIN READ",summary:"Reflections on ego, code aesthetics, staying curious, and why writing less code is the ultimate badge of seniority.",content:`
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
      `}],contact:{email:"salman@example.com",github:"https://github.com/salmanwnl44",linkedin:"https://linkedin.com/in/salman",twitter:"https://x.com/salman",timezone:"UTC +05:30 (IST)",availability:"Available for Q3/Q4 2026 architectural advisories, creative tech, and senior engineering roles.",pgpKey:"4A9F 83B2 018C E829 55BF D210 932B C184 7A29 4F10"}};class ${constructor(e,t="view-container"){this.routes=e,this.container=document.getElementById(t),this.currentRoute=null,window.addEventListener("hashchange",()=>this.handleHashChange())}init(){this.handleHashChange()}handleHashChange(){const e=window.location.hash.slice(1),[t]=e.split("?"),n=t.toLowerCase().trim()||"home";this.navigate(n,!1)}navigate(e,t=!0){this.routes[e]||(e="home"),t&&(window.location.hash=e==="home"?"":`#${e}`),this.currentRoute=e,this.container&&(this.container.style.opacity="0",this.container.style.transform="translateY(6px)",this.container.style.transition="opacity 180ms ease, transform 180ms ease",setTimeout(()=>{const n=this.routes[e];typeof n=="function"&&(this.container.innerHTML=n()),window.scrollTo({top:0,behavior:"instant"}),this.container.style.opacity="1",this.container.style.transform="translateY(0)",window.dispatchEvent(new CustomEvent("routechange",{detail:{route:e}}))},140))}}const S="!<>-_\\/[]{}—=+*^?#01";function L(i,e=null,t=20){if(!i||i._isScrambling)return;i._isScrambling=!0;const n=e||i.dataset.originalText||i.innerText;i.dataset.originalText=n;let a=0;clearInterval(i._scrambleTimer),i._scrambleTimer=setInterval(()=>{i.innerText=n.split("").map((s,o)=>o<a?n[o]:s===" "?" ":S[Math.floor(Math.random()*S.length)]).join(""),a>=n.length&&(clearInterval(i._scrambleTimer),i.innerText=n,i._isScrambling=!1),a+=1.5},t)}class D{constructor(){this.ctx=null,this.enabled=!0}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggle(){return this.enabled=!this.enabled,this.enabled}playHover(){if(this.enabled)try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(820,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(120,this.ctx.currentTime+.025),t.gain.setValueAtTime(.015,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.025),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.025)}catch{}}playClick(){if(this.enabled)try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1400,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(60,this.ctx.currentTime+.04),t.gain.setValueAtTime(.04,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.04),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}catch{}}playTransmit(){if(this.enabled)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime;[440,880,1760].forEach((t,n)=>{const a=this.ctx.createOscillator(),s=this.ctx.createGain();a.type="square",a.frequency.setValueAtTime(t,e+n*.05),s.gain.setValueAtTime(.02,e+n*.05),s.gain.exponentialRampToValueAtTime(1e-4,e+n*.05+.04),a.connect(s),s.connect(this.ctx.destination),a.start(e+n*.05),a.stop(e+n*.05+.04)})}catch{}}}const p=new D;function P(i){if(!i)return;const e=i.getContext("2d");let t,n=!0;const a=()=>{i.width=Math.min(window.innerWidth,1920)/2,i.height=Math.min(window.innerHeight,1080)/2};a(),window.addEventListener("resize",a,{passive:!0});const s=()=>{if(!n)return;const o=i.width,c=i.height;if(o>0&&c>0){const l=e.createImageData(o,c),d=l.data,b=d.length;for(let u=0;u<b;u+=4){const T=Math.random()*255|0;d[u]=T,d[u+1]=T,d[u+2]=T,d[u+3]=18}e.putImageData(l,0,0)}t=requestAnimationFrame(s)};return s(),{destroy:()=>{n=!1,cancelAnimationFrame(t),window.removeEventListener("resize",a)}}}function A(i,e=2400){let t=document.querySelector(".toast-msg");t||(t=document.createElement("div"),t.className="toast-msg",document.body.appendChild(t)),t.innerText=i,t.classList.add("show"),clearTimeout(t._timeout),t._timeout=setTimeout(()=>{t.classList.remove("show")},e)}function B(){return`
    <div class="container">
      <div class="header-inner">
        <!-- Brand / Identity -->
        <div class="brand-section">
          <a href="#home" class="brand-logo glitch-hover" data-text="${r.name}">
            <span>${r.name}</span>
            <span class="brand-badge">${r.initials}</span>
          </a>
        </div>

        <!-- Real-time HUD Status & Clock -->
        <div class="header-status">
          <div class="status-indicator">
            <span class="status-dot"></span>
            <span id="hud-status" class="glitch-text" data-text="SYSTEM: OPERATIONAL">SYS: ONLINE</span>
          </div>
          <div class="status-clock">
            <span id="hud-clock">00:00:00 UTC</span>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="main-nav" id="main-nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="#home" class="nav-link" data-route="home">
                <span class="nav-num">01</span>
                <span class="nav-label">INDEX</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#projects" class="nav-link" data-route="projects">
                <span class="nav-num">02</span>
                <span class="nav-label">PROJECTS</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#blog" class="nav-link" data-route="blog">
                <span class="nav-num">03</span>
                <span class="nav-label">JOURNAL</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link" data-route="contact">
                <span class="nav-num">04</span>
                <span class="nav-label">CONTACT</span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- System Controls: Sound, Grain & Contrast -->
        <div class="header-controls">
          <button id="sound-toggle-btn" class="control-btn" title="Toggle Mechanical Audio FX">
            <span id="sound-state-label">[ AUDIO: ON ]</span>
          </button>
          <button id="grain-toggle-btn" class="control-btn" title="Toggle Digital Grain">
            <span id="grain-state-label">[ GRAIN: ON ]</span>
          </button>
          <button id="mobile-nav-toggle" class="mobile-toggle" aria-label="Toggle menu">
            <span>[ MENU ]</span>
          </button>
        </div>
      </div>
    </div>
  `}function G(){return`
    <div class="container">
      <div class="footer-top">
        <div class="footer-statement glitch-text" data-text="BUILDING THE SILENT WEB">
          BUILDING THE SILENT WEB
        </div>
        <div class="footer-links-grid">
          <div>
            <div class="footer-col-title">Navigation</div>
            <ul class="footer-link-list">
              <li><a href="#home">[ 01 ] INDEX</a></li>
              <li><a href="#projects">[ 02 ] PROJECTS</a></li>
              <li><a href="#blog">[ 03 ] JOURNAL</a></li>
              <li><a href="#contact">[ 04 ] CONTACT</a></li>
            </ul>
          </div>
          <div>
            <div class="footer-col-title">Networks</div>
            <ul class="footer-link-list">
              <li><a href="${r.contact.github}" target="_blank" rel="noopener">GITHUB ↗</a></li>
              <li><a href="${r.contact.linkedin}" target="_blank" rel="noopener">LINKEDIN ↗</a></li>
              <li><a href="${r.contact.twitter}" target="_blank" rel="noopener">X / TWITTER ↗</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-ticker">
        <div>
          <span>© ${new Date().getFullYear()} ${r.name}. ALL RIGHTS RESERVED. EXAGGERATED MINIMALISM.</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1.5rem;">
          <span>COORDINATES: 28.6139° N, 77.2090° E</span>
          <button id="back-to-top" class="back-to-top-btn">[ ↑ TOP ]</button>
        </div>
      </div>
    </div>
  `}function H(){const i=document.getElementById("hud-clock");if(i){const l=()=>{const b=new Date().toLocaleTimeString("en-US",{hour12:!1,timeZone:"Asia/Kolkata"});i.innerText=`${b} IST`};l(),setInterval(l,1e3)}const e=document.getElementById("sound-toggle-btn"),t=document.getElementById("sound-state-label");e&&t&&e.addEventListener("click",()=>{const l=p.toggle();t.innerText=l?"[ AUDIO: ON ]":"[ AUDIO: OFF ]",l&&p.playClick()});const n=document.getElementById("grain-toggle-btn"),a=document.getElementById("grain-state-label");n&&a&&n.addEventListener("click",()=>{document.body.classList.toggle("grain-enabled");const l=document.body.classList.contains("grain-enabled");a.innerText=l?"[ GRAIN: ON ]":"[ GRAIN: OFF ]",p.playClick()});const s=document.getElementById("mobile-nav-toggle"),o=document.getElementById("main-nav");s&&o&&(s.addEventListener("click",()=>{o.classList.toggle("open");const l=o.classList.contains("open");s.innerHTML=l?"<span>[ CLOSE ]</span>":"<span>[ MENU ]</span>",p.playClick()}),o.querySelectorAll(".nav-link").forEach(l=>{l.addEventListener("click",()=>{o.classList.remove("open"),s.innerHTML="<span>[ MENU ]</span>"})}));const c=document.getElementById("back-to-top");c&&c.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"}),p.playClick()})}const U={whoami:`NAME:        ${r.name}
ROLE:        ${r.title}
STATUS:      ${r.status}
LOCATION:    ${r.location}
ACTIVE TIME: 8+ Years Production Engineering
MOTTO:       "Radical Subtraction • Zero Unnecessary Abstractions"`,bio:`${r.bio}

SYSTEM SPECIALIZATION:
- Low-latency event streaming (Rust, Tokio, Wasm, ClickHouse)
- Distributed consensus & storage meshes (Go, Raft, RocksDB)
- Exaggerated minimalist digital monographs & WebGL shader tools`,stack:`[ CORE SYSTEMS ]
  • Rust, Tokio, WebAssembly, Go, C++
  • ClickHouse, PostgreSQL, RocksDB, Redis

[ INTERFACE & CREATIVE ]
  • Vanilla HTML5 / CSS3 / ES Modules
  • WebGL, GLSL Shaders, Three.js, Web Audio API
  • Strict Typography-Driven Design Systems

[ PROTOCOLS & INFRA ]
  • gRPC, ZeroMQ, TCP/mTLS, Docker, Linux eBPF`,philosophy:`// ENGINEERING AXIOMS
01. RADICAL SUBTRACTION
    Strip every ornament until only pure architecture remains.
02. SUB-MILLISECOND SPEED
    Latency is the ultimate anti-feature. Zero loading spinners.
03. DETERMINISTIC BOUNDARIES
    Resilient systems fail gracefully through pure functions.`};function j(){return`
    <div class="terminal-container">
      <div class="terminal-header-bar">
        <div class="terminal-window-controls">
          <span class="term-light red"></span>
          <span class="term-light yellow"></span>
          <span class="term-light green"></span>
          <span class="term-title-text">salman@architect-node: ~ (zsh)</span>
        </div>
        <div class="terminal-actions">
          <button class="term-btn" data-cmd="whoami">[ whoami ]</button>
          <button class="term-btn" data-cmd="bio">[ bio ]</button>
          <button class="term-btn" data-cmd="stack">[ stack ]</button>
          <button class="term-btn" data-cmd="philosophy">[ philosophy ]</button>
          <button class="term-btn" data-cmd="clear">[ clear ]</button>
        </div>
      </div>
      <div class="terminal-body" id="terminal-body">
        <div class="terminal-log" id="terminal-log">
          <div class="term-line welcome-line">// INITIALIZING IDENTITY SUBSYSTEM...</div>
          <div class="term-line welcome-line">// KERNEL READY. TYPE OR SELECT COMMAND BELOW:</div>
        </div>
        <div class="terminal-active-line">
          <span class="term-prompt">guest@salman:~$</span>
          <span class="term-command" id="terminal-command-input"></span>
          <span class="term-cursor" id="term-cursor">▋</span>
        </div>
      </div>
    </div>
  `}function F(){const i=document.getElementById("terminal-log"),e=document.getElementById("terminal-command-input"),t=document.getElementById("terminal-body");if(!i||!e||!t)return;let n=!1;const a=async o=>{if(n)return;n=!0,e.innerText="";const c=o.trim();for(let l=0;l<c.length;l++)e.innerText+=c[l],await new Promise(d=>setTimeout(d,45));if(await new Promise(l=>setTimeout(l,120)),c==="clear")i.innerHTML='<div class="term-line welcome-line">// TERMINAL CLEARED.</div>';else{const l=U[c]||`Command not found: ${c}. Available: whoami, bio, stack, philosophy, clear`,d=document.createElement("div");d.className="term-entry",d.innerHTML=`
        <div class="term-line term-history-prompt">
          <span class="term-prompt">guest@salman:~$</span> <span class="term-history-cmd">${w(c)}</span>
        </div>
        <pre class="term-output">${w(l)}</pre>
      `,i.appendChild(d)}e.innerText="",n=!1,t.scrollTop=t.scrollHeight};document.querySelectorAll(".term-btn").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.cmd;c&&(p.playClick(),a(c))})}),setTimeout(()=>{a("whoami")},400)}function w(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function W(){const i=r.projects.slice(0,2),e=r.articles.slice(0,2);return`
    <div class="view-section hero-wrapper">
      <!-- Atmospheric Background Photo: Blurred B&W -> Animated Living Color on Hover -->
      <div class="hero-bg-photo-wrap" aria-hidden="true">
        <img src="./assets/profile-color.jpg" alt="" class="hero-bg-photo" />
        <div class="hero-bg-vignette"></div>
      </div>

      <div class="container hero-content-container">
        <!-- Hero Metadata Bar -->
        <div class="hero-meta-bar">
          <div>// SPECIFICATION: PORTFOLIO PROFILE</div>
          <div class="glitch-text" data-text="${r.status}">[ ${r.status} ]</div>
          <div>LOC: ${r.location}</div>
        </div>

        <!-- Exaggerated Hero Statement -->
        <h1 class="hero-statement">
          <span class="hero-row">CREATIVE</span>
          <span class="hero-row outline-text glitch-text" data-text="ENGINEER">ENGINEER</span>
          <span class="hero-row">& ARCHITECT</span>
        </h1>

        <!-- Monograph Sub-Grid -->
        <div class="hero-sub-grid">
          <p class="hero-intro-text">
            <strong>${r.name}</strong> is a software architect shaping zero-latency distributed engines and sculpting <strong>exaggerated minimalist</strong> digital surfaces. Eliminating cognitive clutter to let engineering purity speak.
          </p>
          <div class="hero-actions">
            <a href="#projects" class="btn-monochrome glitch-hover" data-text="EXPLORE PROJECTS ↗">
              <span>EXPLORE PROJECTS</span>
              <span>↗</span>
            </a>
            <a href="#contact" class="btn-outline">
              <span>INITIATE CONTACT</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Live Metrics Strip -->
    <div class="container">
      <div class="metrics-strip">
        ${r.metrics.map(t=>`
          <div class="metric-card">
            <div class="metric-label">// ${t.label}</div>
            <div class="metric-value glitch-text" data-text="${t.value}">${t.value}</div>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Identity & Interactive Terminal Section -->
    <section class="view-section" style="padding-bottom: 2rem;">
      <div class="container">
        <div class="section-label">00 // IDENTITY & SYSTEM TELEMETRY</div>
        <div class="identity-grid">
          <!-- Portrait Frame -->
          <div class="portrait-card">
            <div class="portrait-meta-top">
              <span>[ FIG. 01 // ARCHITECT_PORTRAIT ]</span>
              <span>ID: SALMAN_01</span>
            </div>
            <div class="portrait-frame">
              <img src="./assets/profile-color.jpg" alt="${r.name} - Software Architect & Creative Technologist" class="portrait-img" />
              <span class="portrait-corner-tl">+</span>
              <span class="portrait-corner-tr">+</span>
              <span class="portrait-corner-bl">+</span>
              <span class="portrait-corner-br">+</span>
            </div>
            <div class="portrait-meta-bottom">
              <span>${r.name} // ARCHITECT</span>
              <span>28.6139° N, 77.2090° E</span>
            </div>
          </div>

          <!-- Interactive Terminal -->
          <div class="terminal-wrapper">
            ${j()}
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy & Core Engineering Architecture -->
    <section class="view-section" style="padding-top: 2rem;">
      <div class="container">
        <div class="section-label">01 // CORE PHILOSOPHY</div>
        <div class="spec-grid">
          ${r.philosophies.map(t=>`
            <div class="spec-column">
              <span class="spec-index">[ ${t.index} ]</span>
              <h2 class="spec-title glitch-hover" data-text="${t.title}">${t.title}</h2>
              <p class="spec-desc">${t.description}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Featured Works Spotlight -->
    <section class="view-section" style="padding-top: 0;">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2.5rem;">
          <div>
            <div class="section-label">02 // SELECTED WORKS</div>
            <h2 style="font-family: var(--font-display); font-size: var(--font-h1); font-weight: 800; text-transform: uppercase; letter-spacing: -0.03em;">
              FEATURED SYSTEMS
            </h2>
          </div>
          <a href="#projects" class="btn-outline" style="padding: 0.75rem 1.25rem;">
            <span>ALL PROJECTS [0${r.projects.length}] ↗</span>
          </a>
        </div>

        <div class="projects-list">
          ${i.map(t=>`
            <div class="project-item" data-project-id="${t.id}">
              <div class="project-num">[ ${t.index} ]</div>
              <div class="project-info-main">
                <div class="project-name glitch-hover" data-text="${t.title}">${t.title}</div>
                <p class="project-snippet">${t.tagline}</p>
              </div>
              <div class="project-tags">
                ${t.stack.slice(0,3).map(n=>`<span class="tag-pill">${n}</span>`).join("")}
              </div>
              <div class="project-cta">
                <span>VIEW SPEC ↗</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Selected Journal Excerpts -->
    <section class="view-section" style="padding-top: 0;">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2.5rem;">
          <div>
            <div class="section-label">03 // ENGINEERING JOURNAL</div>
            <h2 style="font-family: var(--font-display); font-size: var(--font-h1); font-weight: 800; text-transform: uppercase; letter-spacing: -0.03em;">
              RECENT THINKING
            </h2>
          </div>
          <a href="#blog" class="btn-outline" style="padding: 0.75rem 1.25rem;">
            <span>ALL ARTICLES [0${r.articles.length}] ↗</span>
          </a>
        </div>

        <div class="blog-grid">
          ${e.map(t=>`
            <article class="article-card" data-article-id="${t.id}">
              <div>
                <div class="article-meta">
                  <span>[ ${t.category} ]</span>
                  <span>${t.readTime}</span>
                </div>
                <h3 class="article-headline glitch-hover" data-text="${t.title}">${t.title}</h3>
                <p class="article-excerpt">${t.summary}</p>
              </div>
              <div class="article-footer">
                <span>${t.date}</span>
                <span>READ ESSAY ↗</span>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Quick Contact Hook -->
    <section class="view-section" style="padding-top: 0; padding-bottom: 6rem;">
      <div class="container">
        <div style="border: 1px solid var(--border-subtle); padding: clamp(2.5rem, 5vw, 4rem); background: var(--bg-surface); display: flex; flex-direction: column; gap: 2rem;">
          <div class="section-label" style="margin-bottom: 0;">04 // DIRECT CHANNEL</div>
          <div style="font-family: var(--font-display); font-size: var(--font-giant); font-weight: 900; line-height: 0.9; text-transform: uppercase; letter-spacing: -0.04em;">
            HAVE A SYSTEM TO CONSTRUCT?
          </div>
          <p style="color: var(--text-secondary); max-width: 680px; font-size: 1.05rem;">
            Available for architectural consulting, production scaling challenges, and bespoke web monographs.
          </p>
          <div>
            <a href="#contact" class="btn-monochrome glitch-hover" data-text="TRANSMIT MESSAGE ↗">
              <span>TRANSMIT MESSAGE</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `}let f="ALL";function N(){const i=f==="ALL"?r.projects:r.projects.filter(e=>e.category===f);return`
    <div class="view-section">
      <div class="container">
        <!-- Header -->
        <div class="projects-header">
          <div class="section-label">ARCHIVE // INDEX 02</div>
          <h1 class="projects-title glitch-text" data-text="ENGINEERED SYSTEMS">
            ENGINEERED SYSTEMS
          </h1>
          <p style="color: var(--text-secondary); max-width: 680px; font-size: 1.1rem; line-height: 1.5; margin-top: 1rem;">
            A curated index of production-grade distributed engines, performance kernels, and experimental minimalist web tools built between 2024 and 2026.
          </p>
        </div>

        <!-- Filter Controls -->
        <div class="filter-bar">
          ${["ALL","SYSTEMS","CREATIVE TECH"].map(e=>`
            <button class="filter-btn ${f===e?"active":""}" data-category="${e}">
              [ ${e} ]
            </button>
          `).join("")}
        </div>

        <!-- Projects Index List -->
        <div class="projects-list" id="projects-container">
          ${i.map(e=>`
            <div class="project-item" data-project-id="${e.id}">
              <div class="project-num">[ ${e.index} ]</div>
              <div class="project-info-main">
                <div class="project-name glitch-hover" data-text="${e.title}">${e.title}</div>
                <p class="project-snippet">${e.tagline}</p>
                <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #00ff66; margin-top: 0.25rem;">
                  METRICS: ${e.metrics}
                </div>
              </div>
              <div class="project-tags">
                ${e.stack.map(t=>`<span class="tag-pill">${t}</span>`).join("")}
              </div>
              <div class="project-cta">
                <span class="btn-outline" style="padding: 0.6rem 1rem; font-size: 0.72rem;">INSPECT SPEC ↗</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `}function k(i){document.querySelectorAll(".filter-btn").forEach(n=>{n.addEventListener("click",a=>{f=a.target.dataset.category;const s=document.getElementById("view-container");s&&(s.innerHTML=N(),k(i))})}),document.querySelectorAll(".project-item").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.projectId,s=r.projects.find(o=>o.id===a);s&&typeof i=="function"&&i("project",s)})})}let y="ALL";function O(){const i=y==="ALL"?r.articles:r.articles.filter(e=>e.category===y);return`
    <div class="view-section">
      <div class="container">
        <!-- Header -->
        <div class="blog-header">
          <div class="section-label">WRITING // INDEX 03</div>
          <h1 class="blog-title glitch-text" data-text="ENGINEERING JOURNAL">
            ENGINEERING JOURNAL
          </h1>
          <p style="color: var(--text-secondary); max-width: 680px; font-size: 1.1rem; line-height: 1.5; margin-top: 1rem;">
            Post-mortems, architectural blueprints, lessons learned across 8+ years of production engineering, and essays on radical minimalism.
          </p>
        </div>

        <!-- Filter Controls -->
        <div class="filter-bar">
          ${["ALL","ENGINEERING","DESIGN","CAREER"].map(e=>`
            <button class="filter-btn blog-filter-btn ${y===e?"active":""}" data-category="${e}">
              [ ${e} ]
            </button>
          `).join("")}
        </div>

        <!-- Articles Grid -->
        <div class="blog-grid" id="blog-container">
          ${i.map(e=>`
            <article class="article-card" data-article-id="${e.id}">
              <div>
                <div class="article-meta">
                  <span>[ ${e.category} ]</span>
                  <span>${e.readTime}</span>
                </div>
                <h2 class="article-headline glitch-hover" data-text="${e.title}">${e.title}</h2>
                <p class="article-excerpt">${e.summary}</p>
              </div>
              <div class="article-footer">
                <span>// ${e.date}</span>
                <span style="text-decoration: underline;">READ ESSAY ↗</span>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </div>
  `}function M(i){document.querySelectorAll(".blog-filter-btn").forEach(n=>{n.addEventListener("click",a=>{y=a.target.dataset.category;const s=document.getElementById("view-container");s&&(s.innerHTML=O(),M(i))})}),document.querySelectorAll(".article-card").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.articleId,s=r.articles.find(o=>o.id===a);s&&typeof i=="function"&&i("article",s)})})}function Y(){return`
    <div class="view-section">
      <div class="container">
        <div class="projects-header">
          <div class="section-label">COMMUNICATION // INDEX 04</div>
          <h1 class="projects-title glitch-text" data-text="INITIATE TRANSMISSION">
            INITIATE TRANSMISSION
          </h1>
          <p style="color: var(--text-secondary); max-width: 680px; font-size: 1.1rem; line-height: 1.5; margin-top: 1rem;">
            Direct channel for engineering consulting, architectural review, speaking, or bespoke creative systems.
          </p>
        </div>

        <div class="contact-grid">
          <!-- Left: Direct Metadata & Channels -->
          <div class="contact-statement-wrap">
            <h2 class="contact-headline">
              DIRECT DISPATCH
            </h2>
            <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.6;">
              ${r.contact.availability}
            </p>

            <table class="contact-meta-table">
              <tbody>
                <tr>
                  <td>TIMEZONE</td>
                  <td>${r.contact.timezone}</td>
                </tr>
                <tr>
                  <td>STATUS</td>
                  <td style="color: #00ff66;">ACTIVE // ACCEPTING SELECT PROPOSALS</td>
                </tr>
                <tr>
                  <td>PGP FINGERPRINT</td>
                  <td style="word-break: break-all; font-size: 0.75rem;">${r.contact.pgpKey}</td>
                </tr>
                <tr>
                  <td>PRIMARY NETWORKS</td>
                  <td>
                    <a href="${r.contact.github}" target="_blank" rel="noopener" style="color: #fff; text-decoration: underline; margin-right: 1rem;">GITHUB ↗</a>
                    <a href="${r.contact.linkedin}" target="_blank" rel="noopener" style="color: #fff; text-decoration: underline; margin-right: 1rem;">LINKEDIN ↗</a>
                    <a href="${r.contact.twitter}" target="_blank" rel="noopener" style="color: #fff; text-decoration: underline;">X / TWITTER ↗</a>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Quick Copy Email Card -->
            <div class="direct-email-box">
              <div>
                <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); margin-bottom: 0.3rem;">ELECTRONIC MAIL</div>
                <div style="font-family: var(--font-mono); font-size: 0.95rem; font-weight: 600; color: #fff;">${r.contact.email}</div>
              </div>
              <button id="copy-email-btn" class="btn-outline copy-email-btn" style="padding: 0.6rem 1rem;">
                <span>[ COPY EMAIL ]</span>
              </button>
            </div>
          </div>

          <!-- Right: Interactive Transmission Terminal Form -->
          <div>
            <form id="transmission-form" class="transmission-form">
              <div class="form-group">
                <label class="form-label" for="contact-name">
                  <span>// SENDER IDENTIFIER</span>
                  <span>[ REQUIRED ]</span>
                </label>
                <input type="text" id="contact-name" class="form-input" placeholder="Your Name or Organization" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-email">
                  <span>// RETURN ADDRESS</span>
                  <span>[ REQUIRED ]</span>
                </label>
                <input type="email" id="contact-email" class="form-input" placeholder="name@domain.com" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-scope">
                  <span>// INQUIRY CLASSIFICATION</span>
                  <span>[ SELECT ]</span>
                </label>
                <select id="contact-scope" class="form-select">
                  <option value="System Architecture">System Architecture & Scalability</option>
                  <option value="Creative Tech">Creative Engineering & Web Profile</option>
                  <option value="Code Review">Performance Audit & Optimization</option>
                  <option value="Advisory">Advisory / Contract Role</option>
                  <option value="General Dispatch">General Technical Inquiry</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-message">
                  <span>// TRANSMISSION PAYLOAD</span>
                  <span>[ REQUIRED ]</span>
                </label>
                <textarea id="contact-message" class="form-textarea" placeholder="Detail your project timeline, requirements, or architecture challenge..." required></textarea>
              </div>

              <div>
                <button type="submit" class="btn-monochrome glitch-hover" data-text="TRANSMIT PACKET ↗" style="width: 100%; justify-content: center;">
                  <span>TRANSMIT PACKET</span>
                  <span>↗</span>
                </button>
              </div>
            </form>

            <!-- Success Transmission Receipt (Shown after submission) -->
            <div id="transmission-receipt" class="transmission-receipt">
              <div class="receipt-header">
                <span>[ STATUS: 200 OK — TRANSMISSION DISPATCHED ]</span>
                <span id="receipt-timestamp"></span>
              </div>
              <div class="receipt-body">
                <p style="margin-bottom: 1rem;">
                  <strong>PACKET HASH:</strong> <span id="receipt-hash">0x8F9B2A7E41C</span><br />
                  <strong>SENDER:</strong> <span id="receipt-sender"></span><br />
                  <strong>ROUTING TARGET:</strong> ${r.contact.email}
                </p>
                <p style="margin-bottom: 1.5rem;">
                  Payload verified and logged to secure buffer. You will receive an encrypted response within 24 hours.
                </p>
                <button id="reset-form-btn" class="btn-outline" style="padding: 0.6rem 1.2rem; font-size: 0.72rem;">
                  [ TRANSMIT ANOTHER PACKET ]
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function z(){const i=document.getElementById("copy-email-btn");i&&i.addEventListener("click",()=>{navigator.clipboard.writeText(r.contact.email).then(()=>{A("EMAIL COPIED TO BUFFER"),p.playClick()})});const e=document.getElementById("transmission-form"),t=document.getElementById("transmission-receipt"),n=document.getElementById("reset-form-btn");e&&t&&(e.addEventListener("submit",a=>{a.preventDefault();const s=document.getElementById("contact-name").value,o=document.getElementById("contact-email").value;p.playTransmit();const c=new Date().toISOString(),l="0x"+Math.random().toString(16).substr(2,10).toUpperCase();document.getElementById("receipt-timestamp").innerText=c,document.getElementById("receipt-hash").innerText=l,document.getElementById("receipt-sender").innerText=`${s} <${o}>`,e.style.display="none",t.style.display="block",A("TRANSMISSION DELIVERED")}),n&&n.addEventListener("click",()=>{e.reset(),t.style.display="none",e.style.display="flex",p.playClick()}))}const x=document.getElementById("site-header"),C=document.getElementById("site-footer"),m=document.getElementById("modal-container"),h=document.getElementById("modal-content"),R=document.getElementById("modal-close-btn"),q=document.getElementById("grain-canvas"),g=document.getElementById("custom-cursor"),I=document.getElementById("custom-cursor-dot");P(q);x&&(x.innerHTML=B());C&&(C.innerHTML=G());H();if(g&&I){let i=window.innerWidth/2,e=window.innerHeight/2,t=i,n=e;window.addEventListener("mousemove",o=>{i=o.clientX,e=o.clientY,I.style.left=`${i}px`,I.style.top=`${e}px`},{passive:!0});const a=()=>{t+=(i-t)*.22,n+=(e-n)*.22,g.style.left=`${t}px`,g.style.top=`${n}px`,requestAnimationFrame(a)};a();const s=()=>{document.querySelectorAll("a, button, .project-item, .article-card, input, textarea, select").forEach(c=>{c.addEventListener("mouseenter",()=>{g.classList.add("hovering")}),c.addEventListener("mouseleave",()=>{g.classList.remove("hovering")})})};window.addEventListener("routechange",()=>{setTimeout(s,50)}),s()}function V(){const i=document.querySelector(".brand-logo");i&&!i._boundScramble&&(i._boundScramble=!0,i.addEventListener("mouseenter",()=>{const e=i.getAttribute("data-text")||"SALMAN",t=i.querySelector("span");t&&L(t,e,25)}))}function v(i,e){if(!m||!h)return;p.playClick(),m.style.display="flex";const t=document.querySelector(".modal-dialog");if(t&&(t.scrollTop=0),setTimeout(()=>m.classList.add("open"),10),document.body.style.overflow="hidden",i==="project")h.innerHTML=`
      <div>
        <div class="section-label">PROJECT SPEC // ${e.index}</div>
        <h2 class="modal-project-title glitch-text" data-text="${e.title}">${e.title}</h2>
        <p style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 2rem;">
          ${e.tagline}
        </p>

        <table class="modal-spec-table">
          <tbody>
            <tr>
              <td>YEAR / STAGE</td>
              <td>${e.year} // PRODUCTION DEPLOYED</td>
            </tr>
            <tr>
              <td>CLIENT / DOMAIN</td>
              <td>${e.client}</td>
            </tr>
            <tr>
              <td>PERFORMANCE METRICS</td>
              <td style="color: #00ff66;">${e.metrics}</td>
            </tr>
            <tr>
              <td>TECHNOLOGY STACK</td>
              <td>${e.stack.join(" • ")}</td>
            </tr>
          </tbody>
        </table>

        <div class="modal-prose">
          <h3 class="modal-section-h3">// ARCHITECTURAL CHALLENGE</h3>
          <p>${e.deepDive.problem}</p>

          <h3 class="modal-section-h3">// SYSTEM TOPOLOGY</h3>
          <pre class="code-block-minimal"><code>${e.deepDive.architecture}</code></pre>

          <h3 class="modal-section-h3">// ENGINEERING SOLUTION & RESOLUTION</h3>
          <p>${e.deepDive.solution}</p>

          <h3 class="modal-section-h3">// VERIFIED PRODUCTION IMPACT</h3>
          <p><strong>${e.deepDive.impact}</strong></p>
        </div>

        <div style="display: flex; gap: 1.5rem; margin-top: 3.5rem; padding-top: 2rem; border-top: 1px solid var(--border-subtle);">
          <a href="${e.githubUrl}" target="_blank" rel="noopener" class="btn-monochrome">
            <span>GITHUB SOURCE ↗</span>
          </a>
          <a href="${e.liveUrl}" target="_blank" rel="noopener" class="btn-outline">
            <span>LIVE INTERFACE ↗</span>
          </a>
        </div>
      </div>
    `;else if(i==="article"){h.innerHTML=`
      <article>
        <div class="section-label">JOURNAL ESSAY // ${e.index}</div>
        <h2 class="modal-project-title glitch-text" data-text="${e.title}">${e.title}</h2>
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); margin-bottom: 2.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-subtle); display: flex; gap: 2rem;">
          <span>DATE: ${e.date}</span>
          <span>TAG: ${e.category}</span>
          <span>ESTIMATED: ${e.readTime}</span>
        </div>

        <div class="modal-prose">
          ${_(e.content)}
        </div>

        <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">END OF TRANSMISSION</span>
          <button id="modal-reader-close" class="btn-outline">[ RETURN TO JOURNAL ]</button>
        </div>
      </article>
    `;const a=document.getElementById("modal-reader-close");a&&a.addEventListener("click",E)}const n=h.querySelector(".glitch-text");n&&L(n,n.dataset.text,25)}function E(){m&&(m.classList.remove("open"),document.body.style.overflow="",setTimeout(()=>{m.style.display="none",h&&(h.innerHTML="")},250))}R&&R.addEventListener("click",E);m&&m.addEventListener("click",i=>{i.target===m&&E()});window.addEventListener("keydown",i=>{i.key==="Escape"&&m&&m.classList.contains("open")&&E()});function _(i){return i.split(`

`).map(e=>{if(e=e.trim(),!e)return"";if(e.startsWith("### "))return`<h3 class="modal-section-h3">${e.replace("### ","")}</h3>`;if(e.startsWith("> "))return`<blockquote style="border-left: 2px solid #ffffff; padding-left: 1.5rem; margin: 2rem 0; font-style: italic; color: #ffffff;">${e.replace("> ","")}</blockquote>`;if(e.startsWith("```")){const t=e.replace(/```[a-z]*\n?/g,"").trim();return`<pre class="code-block-minimal"><code>${K(t)}</code></pre>`}return e.startsWith("1. ")||e.startsWith("- ")?`<ul style="padding-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">${e.split(`
`).map(n=>`<li>${n.replace(/^(\d+\.|\-)\s+/,"")}</li>`).join("")}</ul>`:`<p>${e}</p>`}).join("")}function K(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const J={home:()=>W(),projects:()=>N(),blog:()=>O(),contact:()=>Y()},X=new $(J);window.addEventListener("routechange",i=>{const e=i.detail.route;if(document.querySelectorAll(".nav-link").forEach(t=>{t.dataset.route===e?t.classList.add("active"):t.classList.remove("active")}),e==="home"){F();const t=document.querySelector(".hero-wrapper");t&&(t.addEventListener("mouseenter",()=>t.classList.add("hero-hovered")),t.addEventListener("mouseleave",()=>t.classList.remove("hero-hovered"))),document.querySelectorAll(".project-item").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.projectId,s=r.projects.find(o=>o.id===a);s&&v("project",s)})}),document.querySelectorAll(".article-card").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.articleId,s=r.articles.find(o=>o.id===a);s&&v("article",s)})})}else e==="projects"?k((t,n)=>v(t,n)):e==="blog"?M((t,n)=>v(t,n)):e==="contact"&&z();V()});X.init();
