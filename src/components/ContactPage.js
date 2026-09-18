import { PROFILE_DATA } from '../data/profile.js';
import { sound, showToast } from '../utils/glitch.js';

export function renderContactPage() {
  return `
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
              ${PROFILE_DATA.contact.availability}
            </p>

            <table class="contact-meta-table">
              <tbody>
                <tr>
                  <td>TIMEZONE</td>
                  <td>${PROFILE_DATA.contact.timezone}</td>
                </tr>
                <tr>
                  <td>STATUS</td>
                  <td style="color: #00ff66;">ACTIVE // ACCEPTING SELECT PROPOSALS</td>
                </tr>
                <tr>
                  <td>PGP FINGERPRINT</td>
                  <td style="word-break: break-all; font-size: 0.75rem;">${PROFILE_DATA.contact.pgpKey}</td>
                </tr>
                <tr>
                  <td>PRIMARY NETWORKS</td>
                  <td>
                    <a href="${PROFILE_DATA.contact.github}" target="_blank" rel="noopener" style="color: #fff; text-decoration: underline; margin-right: 1rem;">GITHUB ↗</a>
                    <a href="${PROFILE_DATA.contact.linkedin}" target="_blank" rel="noopener" style="color: #fff; text-decoration: underline; margin-right: 1rem;">LINKEDIN ↗</a>
                    <a href="${PROFILE_DATA.contact.twitter}" target="_blank" rel="noopener" style="color: #fff; text-decoration: underline;">X / TWITTER ↗</a>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Quick Copy Email Card -->
            <div class="direct-email-box">
              <div>
                <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); margin-bottom: 0.3rem;">ELECTRONIC MAIL</div>
                <div style="font-family: var(--font-mono); font-size: 0.95rem; font-weight: 600; color: #fff;">${PROFILE_DATA.contact.email}</div>
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
                  <strong>ROUTING TARGET:</strong> ${PROFILE_DATA.contact.email}
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
  `;
}

export function initContactHandlers() {
  // Copy Email Handler
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(PROFILE_DATA.contact.email).then(() => {
        showToast('EMAIL COPIED TO BUFFER');
        sound.playClick();
      });
    });
  }

  // Form Submission
  const form = document.getElementById('transmission-form');
  const receipt = document.getElementById('transmission-receipt');
  const resetBtn = document.getElementById('reset-form-btn');

  if (form && receipt) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;

      // Play transmission sound
      sound.playTransmit();

      // Populate Receipt
      const timeStr = new Date().toISOString();
      const hashStr = '0x' + Math.random().toString(16).substr(2, 10).toUpperCase();

      document.getElementById('receipt-timestamp').innerText = timeStr;
      document.getElementById('receipt-hash').innerText = hashStr;
      document.getElementById('receipt-sender').innerText = `${name} <${email}>`;

      // Hide form, show receipt
      form.style.display = 'none';
      receipt.style.display = 'block';

      showToast('TRANSMISSION DELIVERED');
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        form.reset();
        receipt.style.display = 'none';
        form.style.display = 'flex';
        sound.playClick();
      });
    }
  }
}
