import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="section">
        <div className="foot-grid">
          {/* MakerSpace address in a box */}
          <div>
            <div className="address-card">
              <div className="address-title">MakerSpace</div>
              <address className="address-text">
                ICF 1300<br/>
                Engineering Service Rd.<br/>
                Irvine, CA 92617
              </address>
            </div>
          </div>

          {/* Email pill (like the social links) */}
          <div>
            <div className="small"><strong>Contact</strong></div>
            <div className="social-links" aria-label="Contact links">
              <a
                className="social-pill"
                href="mailto:zotbotics.uci@gmail.com"
                aria-label="Email zotbotics.uci@gmail.com"
              >
                <span className="pill-emoji" aria-hidden="true">✉️</span>
                <span>Email</span>
                <span className="handle">zotbotics.uci@gmail.com</span>
                <span className="ext">↗</span>
              </a>
            </div>
          </div>

          {/* Socials */}
          <div>
            <div className="small"><strong>Follow for Updates</strong></div>
            <div className="social-links" aria-label="Social links">
              <a
                className="social-pill"
                href="https://www.instagram.com/zims.uci/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @zims.uci (opens in new tab)"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className="pill-icon">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
                <span>Instagram</span>
                <span className="handle">@zims.uci</span>
                <span className="ext">↗</span>
              </a>

              <a
                className="social-pill"
                href="https://discord.gg/5D5c28wd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord invite (opens in new tab)"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className="pill-icon">
                  <path d="M3 5h18v10a2 2 0 0 1-2 2H9l-6 4V5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
                <span>Discord</span>
                <span className="ext">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* fineprint removed */}
      </div>
    </footer>
  )
}
