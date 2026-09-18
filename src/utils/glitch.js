/**
 * GLITCH & AUDIO-VISUAL UTILITIES
 * Black & White Text Scrambler, Canvas Grain, and Web Audio Micro-Clicks
 */

const GLITCH_GLYPHS = '!<>-_\\/[]{}—=+*^?#01';

/**
 * Scramble text effect on an HTML element
 */
export function scrambleText(element, finalString = null, speed = 20) {
  if (!element || element._isScrambling) return;
  element._isScrambling = true;

  const original = finalString || element.dataset.originalText || element.innerText;
  element.dataset.originalText = original;

  let iteration = 0;
  clearInterval(element._scrambleTimer);

  element._scrambleTimer = setInterval(() => {
    element.innerText = original
      .split('')
      .map((char, index) => {
        if (index < iteration) {
          return original[index];
        }
        if (char === ' ') return ' ';
        return GLITCH_GLYPHS[Math.floor(Math.random() * GLITCH_GLYPHS.length)];
      })
      .join('');

    if (iteration >= original.length) {
      clearInterval(element._scrambleTimer);
      element.innerText = original;
      element._isScrambling = false;
    }

    iteration += 1.5;
  }, speed);
}

/**
 * Synthesized Web Audio API Micro-Click Sound Generator
 * Zero audio file dependencies, pure programmatic sound design
 */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // Soft mechanical micro-tick on navigation hover
  playHover() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(820, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.025);

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.025);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.025);
    } catch (e) {
      // Ignore if user hasn't interacted with page yet
    }
  }

  // Crisp digital shutter click on button press
  playClick() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  // High-tech terminal transmission blip
  playTransmit() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      [440, 880, 1760].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, now + i * 0.05);

        gain.gain.setValueAtTime(0.02, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.05 + 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.04);
      });
    } catch (e) {}
  }
}

export const sound = new SoundEngine();

/**
 * Animated High-Performance Film Grain Canvas
 */
export function initFilmGrain(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let isRunning = true;

  const resize = () => {
    canvas.width = Math.min(window.innerWidth, 1920) / 2; // Render at half res for crisp performance
    canvas.height = Math.min(window.innerHeight, 1080) / 2;
  };

  resize();
  window.addEventListener('resize', resize, { passive: true });

  const renderGrain = () => {
    if (!isRunning) return;
    const w = canvas.width;
    const h = canvas.height;
    if (w > 0 && h > 0) {
      const imgData = ctx.createImageData(w, h);
      const data = imgData.data;
      const len = data.length;

      for (let i = 0; i < len; i += 4) {
        const val = (Math.random() * 255) | 0;
        data[i] = val;
        data[i + 1] = val;
        data[i + 2] = val;
        data[i + 3] = 18; // Subtle grain density
      }

      ctx.putImageData(imgData, 0, 0);
    }
    // Throttle to every other frame for smooth cinematic 30-60fps
    animationFrameId = requestAnimationFrame(renderGrain);
  };

  renderGrain();

  return {
    destroy: () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    }
  };
}

/**
 * Toast Notification Utility
 */
export function showToast(message, duration = 2400) {
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.classList.add('show');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}
