"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ padding: "clamp(1.75rem, 4vw, 3rem) clamp(1.5rem, 5vw, 5rem)" }}
    >
      {/* ── Ghost monogram — signature detail ────────────────────────── */}
      <div
        className="hero-monogram"
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "clamp(-2rem, -4vw, -6rem)",
          top: "50%",
          transform: "translateY(-52%)",
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(14rem, 30vw, 36rem)",
          fontWeight: 900,
          fontStyle: "italic",
          letterSpacing: "-0.07em",
          color: "var(--ink)",
          opacity: 0,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          animation: "revealFade 2s ease 600ms forwards",
        }}
      >
        TH
      </div>

      {/* ── Nav ──────────────────────────────────────────────────────── */}
      <nav
        className="reveal relative z-10 flex items-center justify-between"
        style={{ animationDelay: "0ms" }}
      >
        {/* Name mark — just name, no domain */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.06em",
            color: "var(--ink)",
            fontWeight: 600,
          }}
        >
          Tai Huynh
        </span>

        <div className="flex items-center" style={{ gap: "clamp(1.25rem, 3vw, 2.5rem)" }}>
          {[
            { label: "Work",     href: "#work" },
            { label: "Approach", href: "#approach" },
            { label: "Contact",  href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.5625rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ink-4)",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-4)")}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Hero Body ────────────────────────────────────────────────── */}
      <div
        className="relative z-10"
        style={{
          paddingTop: "clamp(5rem, 12vh, 9rem)",
          paddingBottom: "clamp(2.5rem, 6vh, 4rem)",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Role label */}
        <div
          className="reveal section-label"
          style={{ animationDelay: "80ms", marginBottom: "2.25rem" }}
        >
          AI &amp; Full-Stack Engineer
        </div>

        {/* Name — large, tight, commanding */}
        <h1
          className="reveal"
          style={{
            animationDelay: "160ms",
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(3.75rem, 10.5vw, 10rem)",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            color: "var(--ink)",
            marginBottom: "clamp(1.75rem, 3.5vw, 3rem)",
            position: "relative",
          }}
        >
          Tai
          <br />
          Huynh
        </h1>

        {/* Descriptor — clean, confident */}
        <p
          className="reveal"
          style={{
            animationDelay: "260ms",
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem, 1.75vw, 1.1875rem)",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "var(--ink-3)",
            maxWidth: "46ch",
            marginBottom: "clamp(2.25rem, 5vw, 3.5rem)",
          }}
        >
          I build AI-powered features that ship — RAG pipelines, document
          intelligence, semantic search, MCP servers. Every project
          security-reviewed, tested, and deployable.
        </p>

        {/* Stats — mono, precise */}
        <div
          className="reveal"
          style={{
            animationDelay: "340ms",
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(2rem, 5vw, 4rem)",
            marginBottom: "clamp(2.75rem, 5vw, 4.5rem)",
            paddingBottom: "clamp(2rem, 4vw, 3rem)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {[
            { value: "11",   label: "Projects" },
            { value: "211",  label: "Passing tests" },
            { value: "100%", label: "Security-reviewed" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  color: "var(--ink)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.5rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--ink-4)",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="reveal"
          style={{
            animationDelay: "420ms",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.625rem",
          }}
        >
          <a href="#work" className="btn-primary">
            View work
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M2 5H8M5.5 2.5L8 5L5.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="https://github.com/0CCHacker"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────── */}
      <div
        className="reveal relative z-10"
        style={{
          animationDelay: "560ms",
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
        }}
      >
        <hr className="rule" style={{ flex: 1 }} />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.5rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--ink-4)",
            whiteSpace: "nowrap",
          }}
        >
          Scroll
        </span>
        <svg
          width="12"
          height="16"
          viewBox="0 0 12 16"
          fill="none"
          aria-hidden="true"
          style={{ color: "var(--ink-4)", flexShrink: 0 }}
        >
          <path
            d="M6 2V10M6 10L3 7M6 10L9 7"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 14V13"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>
      </div>
    </section>
  );
}
