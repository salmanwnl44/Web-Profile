import { PROFILE_DATA } from '../data/profile.js';
import { sound } from '../utils/glitch.js';

const COMMANDS = {
  whoami: `NAME:        ${PROFILE_DATA.name}
ROLE:        ${PROFILE_DATA.title}
STATUS:      ${PROFILE_DATA.status}
LOCATION:    ${PROFILE_DATA.location}
ACTIVE TIME: 8+ Years Production Engineering
MOTTO:       "Radical Subtraction • Zero Unnecessary Abstractions"`,

  bio: `${PROFILE_DATA.bio}

SYSTEM SPECIALIZATION:
- Low-latency event streaming (Rust, Tokio, Wasm, ClickHouse)
- Distributed consensus & storage meshes (Go, Raft, RocksDB)
- Exaggerated minimalist digital monographs & WebGL shader tools`,

  stack: `[ CORE SYSTEMS ]
  • Rust, Tokio, WebAssembly, Go, C++
  • ClickHouse, PostgreSQL, RocksDB, Redis

[ INTERFACE & CREATIVE ]
  • Vanilla HTML5 / CSS3 / ES Modules
  • WebGL, GLSL Shaders, Three.js, Web Audio API
  • Strict Typography-Driven Design Systems

[ PROTOCOLS & INFRA ]
  • gRPC, ZeroMQ, TCP/mTLS, Docker, Linux eBPF`,

  philosophy: `// ENGINEERING AXIOMS
01. RADICAL SUBTRACTION
    Strip every ornament until only pure architecture remains.
02. SUB-MILLISECOND SPEED
    Latency is the ultimate anti-feature. Zero loading spinners.
03. DETERMINISTIC BOUNDARIES
    Resilient systems fail gracefully through pure functions.`
};

export function renderTerminalMarkup() {
  return `
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
  `;
}

export function initTerminal() {
  const logEl = document.getElementById('terminal-log');
  const inputEl = document.getElementById('terminal-command-input');
  const bodyEl = document.getElementById('terminal-body');
  if (!logEl || !inputEl || !bodyEl) return;

  let isTyping = false;

  const typeAndExecute = async (cmdName) => {
    if (isTyping) return;
    isTyping = true;

    inputEl.innerText = '';
    const textToType = cmdName.trim();

    // Type character by character
    for (let i = 0; i < textToType.length; i++) {
      inputEl.innerText += textToType[i];
      await new Promise(r => setTimeout(r, 45));
    }

    await new Promise(r => setTimeout(r, 120));

    // Execute command
    if (textToType === 'clear') {
      logEl.innerHTML = '<div class="term-line welcome-line">// TERMINAL CLEARED.</div>';
    } else {
      const outputText = COMMANDS[textToType] || `Command not found: ${textToType}. Available: whoami, bio, stack, philosophy, clear`;
      
      const entry = document.createElement('div');
      entry.className = 'term-entry';
      entry.innerHTML = `
        <div class="term-line term-history-prompt">
          <span class="term-prompt">guest@salman:~$</span> <span class="term-history-cmd">${escapeHtml(textToType)}</span>
        </div>
        <pre class="term-output">${escapeHtml(outputText)}</pre>
      `;
      logEl.appendChild(entry);
    }

    inputEl.innerText = '';
    isTyping = false;
    bodyEl.scrollTop = bodyEl.scrollHeight;
  };

  // Bind command buttons
  const buttons = document.querySelectorAll('.term-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.dataset.cmd;
      if (cmd) {
        sound.playClick();
        typeAndExecute(cmd);
      }
    });
  });

  // Run initial default command: whoami
  setTimeout(() => {
    typeAndExecute('whoami');
  }, 400);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
