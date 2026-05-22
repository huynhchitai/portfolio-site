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
      }}
    >
      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
          gap: "clamp(3rem, 7vw, 7rem)",
        }}
      >
        {/* Left — narrative */}
        <div>
          <div className="section-label" style={{ marginBottom: "1rem" }}>
            Approach
          </div>

          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "var(--ink)",
              marginBottom: "1.75rem",
            }}
          >
            Built for the{" "}
            <span
              style={{
                color: "var(--ink-3)",
                fontStyle: "italic",
              }}
            >
              real world.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.9375rem, 1.75vw, 1.0625rem)",
              fontWeight: 400,
              lineHeight: 1.75,
              color: "var(--ink-3)",
              marginBottom: "1.25rem",
              maxWidth: "44ch",
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
              maxWidth: "44ch",
              marginBottom: "2.75rem",
            }}
          >
            All 11 projects are security-reviewed and built on a consistent
            stack so patterns are reusable and integration is predictable.
          </p>

          {/* Stats callout */}
          <div
            style={{
              display: "inline-block",
              padding: "1.375rem 1.75rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderLeft: "3px solid var(--ink)",
              borderRadius: "2px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "var(--ink)",
                lineHeight: 1.7,
                letterSpacing: "0.01em",
              }}
            >
              11 projects · 211 passing tests
              <br />
              security-reviewed
            </p>
          </div>
        </div>

        {/* Right — principles */}
        <div>
          {principles.map((p, i) => (
            <div
              key={p.number}
              style={{
                padding: "1.625rem 0",
                borderBottom:
                  i < principles.length - 1
                    ? "1px solid var(--border)"
                    : undefined,
                display: "flex",
                gap: "1.5rem",
              }}
            >
              <span className="principle-num">{p.number}</span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)",
                    letterSpacing: "-0.015em",
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
                    fontSize: "0.875rem",
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
          marginTop: "clamp(3.5rem, 7vw, 6rem)",
          paddingTop: "clamp(2rem, 4vw, 3.5rem)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="section-label" style={{ marginBottom: "1.5rem" }}>
          Shared Stack
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4375rem" }}>
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
