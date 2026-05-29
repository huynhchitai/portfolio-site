"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: `var(--section-pad-y) var(--section-pad-x)`,
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Heading */}
      <div style={{ marginBottom: "clamp(2.75rem, 5vw, 4.5rem)" }}>
        <div className="section-label" style={{ marginBottom: "1rem" }}>
          Contact
        </div>
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2.75rem, 8vw, 7rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.92,
            color: "var(--ink)",
          }}
        >
          Let&apos;s build
          <br />
          <span
            style={{
              color: "var(--ink-3)",
              fontStyle: "italic",
            }}
          >
            something.
          </span>
        </h2>
      </div>

      {/* Contact links */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
          maxWidth: "44rem",
          borderTop: "1px solid var(--border)",
        }}
      >
        {/* Email */}
        <a
          href="mailto:huynhchitai.070306@gmail.com"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "2.25rem 2rem 2.25rem 0",
            borderBottom: "1px solid var(--border)",
            textDecoration: "none",
            color: "inherit",
            transition: "background 0.15s ease",
          }}
        >
          <span className="mono-label">Email</span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(0.9375rem, 2vw, 1.125rem)",
              letterSpacing: "-0.015em",
              color: "var(--ink)",
              transition: "color 0.15s ease",
              wordBreak: "break-all",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--ink-3)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--ink)")
            }
          >
            huynhchitai.070306@gmail.com
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.5rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-4)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            Send a message
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <path
                d="M1.5 6.5L6.5 1.5M6.5 1.5H3M6.5 1.5V5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/huynhchitai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "2.25rem 0",
            borderBottom: "1px solid var(--border)",
            textDecoration: "none",
            color: "inherit",
            transition: "background 0.15s ease",
          }}
          className="sm:pl-8"
        >
          <span className="mono-label">GitHub</span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(0.9375rem, 2vw, 1.125rem)",
              letterSpacing: "-0.015em",
              color: "var(--ink)",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--ink-3)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--ink)")
            }
          >
            huynhchitai
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.5rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-4)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            View repositories
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <path
                d="M1.5 6.5L6.5 1.5M6.5 1.5H3M6.5 1.5V5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>

      {/* Footer — identity only, no domain brand */}
      <footer
        style={{
          marginTop: "clamp(3rem, 6vw, 5.5rem)",
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
            fontSize: "0.6875rem",
            letterSpacing: "0.04em",
            color: "var(--ink)",
          }}
        >
          Tai Huynh
        </span>

        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.5rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink-4)",
          }}
        >
          AI &amp; Full-Stack · Production-grade · Security-reviewed
        </span>
      </footer>
    </section>
  );
}
