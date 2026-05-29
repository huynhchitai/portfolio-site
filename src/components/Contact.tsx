"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: `var(--section-pad-y) var(--section-pad-x)`,
        borderTop: "1px solid var(--border)",
        position: "relative",
      }}
    >
      {/* Chapter callout */}
      <div className="chapter-num" style={{ marginBottom: "1.25rem" }}>
        Chapter <strong>III</strong> &nbsp;·&nbsp; Correspondence
      </div>

      {/* Heading */}
      <div style={{ marginBottom: "clamp(3rem, 5vw, 4.5rem)", maxWidth: "60rem" }}>
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2.75rem, 9vw, 8rem)",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            lineHeight: 0.9,
            color: "var(--ink)",
          }}
        >
          Let&apos;s build
          <br />
          <span className="editorial-italic" style={{ display: "inline-block", paddingRight: "0.05em" }}>
            something
          </span>
          <span style={{ color: "var(--ink)" }}>.</span>
        </h2>
        <p
          style={{
            marginTop: "clamp(1.5rem, 3vw, 2.25rem)",
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "var(--ink-3)",
            maxWidth: "var(--measure-base)",
          }}
        >
          Available for freelance AI work — RAG, structured extraction,
          embeddable widgets, MCP servers, internal tools. Typical turnaround
          2–7 days.
        </p>
      </div>

      {/* Contact links — two-column editorial */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 19rem), 1fr))",
          maxWidth: "48rem",
          borderTop: "1px solid var(--border-strong)",
        }}
      >
        {/* Email */}
        <a
          href="mailto:huynhchitai.070306@gmail.com"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
            padding: "2.5rem 2rem 2.5rem 0",
            borderBottom: "1px solid var(--border)",
            textDecoration: "none",
            color: "inherit",
            transition: "background 0.18s ease",
          }}
        >
          <span className="mono-label">Email · primary</span>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.0625rem, 2.2vw, 1.3125rem)",
              letterSpacing: "-0.01em",
              color: "var(--ink)",
              transition: "color 0.18s ease",
              wordBreak: "break-all",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink)")}
          >
            huynhchitai.070306@gmail.com
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.5rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink-4)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontWeight: 500,
            }}
          >
            Send a message
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <path d="M1.5 6.5L6.5 1.5M6.5 1.5H3M6.5 1.5V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
            gap: "0.625rem",
            padding: "2.5rem 0",
            borderBottom: "1px solid var(--border)",
            textDecoration: "none",
            color: "inherit",
            transition: "background 0.18s ease",
          }}
          className="sm:pl-8"
        >
          <span className="mono-label">GitHub · code</span>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.0625rem, 2.2vw, 1.3125rem)",
              letterSpacing: "-0.01em",
              color: "var(--ink)",
              transition: "color 0.18s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink)")}
          >
            @huynhchitai
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.5rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink-4)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontWeight: 500,
            }}
          >
            View repositories
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <path d="M1.5 6.5L6.5 1.5M6.5 1.5H3M6.5 1.5V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>

      {/* Colophon — editorial footer */}
      <footer
        style={{
          marginTop: "clamp(4rem, 8vw, 7rem)",
          paddingTop: "1.75rem",
          borderTop: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 14rem), 1fr))",
          gap: "1.5rem",
          alignItems: "start",
        }}
      >
        <div>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-mono)",
              fontSize: "0.5rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--ink-4)",
              fontWeight: 500,
              marginBottom: "0.4rem",
            }}
          >
            Colophon
          </span>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "1rem",
              color: "var(--ink-2)",
              lineHeight: 1.55,
            }}
          >
            Set in Instrument Serif &amp; Schibsted Grotesk. Typeset on a warm
            cream ground.
          </span>
        </div>

        <div>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-mono)",
              fontSize: "0.5rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--ink-4)",
              fontWeight: 500,
              marginBottom: "0.4rem",
            }}
          >
            Issued by
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              color: "var(--ink)",
            }}
          >
            Tai Huynh
          </span>
        </div>

        <div>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-mono)",
              fontSize: "0.5rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--ink-4)",
              fontWeight: 500,
              marginBottom: "0.4rem",
            }}
          >
            Mark
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-3)",
            }}
          >
            AI · Full-Stack · Production
          </span>
        </div>
      </footer>
    </section>
  );
}
