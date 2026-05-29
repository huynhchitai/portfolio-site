"use client";

import { stack } from "@/lib/projects";

const principles = [
  {
    number: "01",
    title: "Ship to production",
    body: "Every project runs in a real environment with real constraints. No toys, no demos. Auth, rate-limiting, error handling, observability — in by default.",
  },
  {
    number: "02",
    title: "Security by default",
    body: "SSRF defense, prompt injection mitigation, input validation via zod, secrets-free build. Each repo ships with a SECURITY.md — not as an afterthought.",
  },
  {
    number: "03",
    title: "Tested and observable",
    body: "211 passing Vitest tests across the portfolio. Logging and structured errors everywhere. CI runs on every push.",
  },
  {
    number: "04",
    title: "One stack, deep craft",
    body: "Consistent tooling across all 11 projects means transferable context, faster debugging, and a codebase that reads the same way every time.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      style={{
        padding: `var(--section-pad-y) var(--section-pad-x)`,
        borderTop: "1px solid var(--border)",
        background: "var(--bg-subtle)",
        position: "relative",
      }}
    >
      {/* Chapter callout */}
      <div className="chapter-num" style={{ marginBottom: "1.25rem" }}>
        Chapter <strong>II</strong> &nbsp;·&nbsp; Method
      </div>

      {/* Two-column editorial layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
          gap: "clamp(3rem, 7vw, 7rem)",
          paddingTop: "clamp(1rem, 2vw, 1.5rem)",
        }}
      >
        {/* Left — narrative */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-0.045em",
              lineHeight: 0.95,
              color: "var(--ink)",
              marginBottom: "2rem",
            }}
          >
            Built for the{" "}
            <span className="editorial-italic">real world.</span>
          </h2>

          <p
            className="drop-cap"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1rem, 1.85vw, 1.125rem)",
              fontWeight: 400,
              lineHeight: 1.75,
              color: "var(--ink-2)",
              marginBottom: "1.5rem",
              maxWidth: "var(--measure-base)",
            }}
          >
            Production-grade isn&apos;t a marketing phrase. It means features
            that can be deployed by someone else&apos;s team, survive a security
            review, and keep running at 3 AM without a phone call.
          </p>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.9375rem, 1.75vw, 1.0625rem)",
              fontWeight: 400,
              lineHeight: 1.75,
              color: "var(--ink-3)",
              maxWidth: "var(--measure-base)",
              marginBottom: "2.75rem",
            }}
          >
            All 11 projects are security-reviewed and built on a consistent
            stack so patterns are reusable and integration is predictable.
          </p>

          {/* Pull quote — editorial callout */}
          <figure
            style={{
              padding: "1.75rem 1.875rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderLeft: "3px solid var(--accent)",
              borderRadius: "1px",
              maxWidth: "32rem",
              boxShadow: "0 1px 0 rgba(0,0,0,0.02), 0 12px 24px -18px rgba(122,34,24,0.18)",
            }}
          >
            <blockquote
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "1.0625rem",
                color: "var(--ink-2)",
                lineHeight: 1.55,
                letterSpacing: "-0.005em",
              }}
            >
              “Eleven projects · two hundred eleven tests · one stack, one craft.”
            </blockquote>
            <figcaption
              style={{
                marginTop: "1rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.5625rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--ink-4)",
                fontWeight: 500,
              }}
            >
              — house style
            </figcaption>
          </figure>
        </div>

        {/* Right — principles list */}
        <div>
          <div
            className="marginalia"
            style={{ marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}
          >
            Four operating principles.
          </div>
          {principles.map((p, i) => (
            <div
              key={p.number}
              style={{
                padding: "1.75rem 0",
                borderBottom:
                  i < principles.length - 1
                    ? "1px solid var(--border)"
                    : undefined,
                display: "flex",
                gap: "1.75rem",
              }}
            >
              <span className="principle-num">{p.number}</span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
                    letterSpacing: "-0.02em",
                    color: "var(--ink)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    fontWeight: 400,
                    lineHeight: 1.7,
                    color: "var(--ink-3)",
                  }}
                >
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shared stack */}
      <div
        style={{
          marginTop: "clamp(4rem, 8vw, 7rem)",
          paddingTop: "clamp(2rem, 4vw, 3.5rem)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "1.75rem",
          }}
        >
          <div className="section-label">Shared Stack</div>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "1rem",
              color: "var(--ink-4)",
            }}
          >
            one toolchain, eleven products
          </span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {stack.map((tech) => (
            <span key={tech} className="stack-chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
