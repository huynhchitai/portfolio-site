"use client";

import { projects } from "@/lib/projects";

const ROMAN = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"];

export default function ProjectIndex() {
  return (
    <section
      id="work"
      style={{
        padding: `var(--section-pad-y) var(--section-pad-x)`,
        borderTop: "1px solid var(--border)",
        position: "relative",
      }}
    >
      {/* Chapter callout */}
      <div className="chapter-num" style={{ marginBottom: "1.25rem" }}>
        Chapter <strong>I</strong> &nbsp;·&nbsp; Selected Work
      </div>

      {/* Section header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) auto",
          alignItems: "end",
          gap: "2rem",
          marginBottom: "clamp(3rem, 6vw, 5rem)",
          paddingBottom: "clamp(1.5rem, 3vw, 2.25rem)",
          borderBottom: "1px solid var(--border-strong)",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.045em",
              lineHeight: 0.95,
              color: "var(--ink)",
            }}
          >
            A working{" "}
            <span className="editorial-italic">index</span>
            <br />
            of recent work.
          </h2>
        </div>

        <div
          className="hidden sm:flex"
          style={{
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.5rem",
            flexShrink: 0,
            paddingBottom: "0.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
              fontStyle: "italic",
              letterSpacing: "-0.04em",
              color: "var(--accent)",
              lineHeight: 1,
            }}
          >
            xi
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.5rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--ink-4)",
              fontWeight: 500,
            }}
          >
            Entries
          </span>
        </div>
      </div>

      {/* Column headers */}
      <div
        style={{
          padding: "0.625rem 0",
          display: "grid",
          gridTemplateColumns: "4rem 1fr auto",
          gap: "1rem",
          alignItems: "center",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <span className="mono-label">№</span>
        <span className="mono-label">Project / Pitch</span>
        <span className="mono-label hidden sm:block">View</span>
      </div>

      {/* Project rows */}
      <div>
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="project-row reveal"
            style={{
              animationDelay: `${300 + i * 40}ms`,
              ["--row-accent" as string]: project.accent,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor =
                project.accentLight;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor =
                "transparent";
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "stretch",
                gap: 0,
                padding: "clamp(1.5rem, 3vw, 2.25rem) 0",
              }}
            >
              {/* Accent bar */}
              <div
                className="accent-bar"
                style={{
                  background: project.accent,
                  marginRight: "clamp(1rem, 2.5vw, 1.75rem)",
                }}
              />

              {/* Roman numeral */}
              <div style={{ width: "3rem", flexShrink: 0, paddingTop: "5px" }}>
                <span className="project-num" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", letterSpacing: "0.04em" }}>
                  {ROMAN[i] ?? String(project.id).padStart(2, "0")}
                </span>
              </div>

              {/* Main content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(1.0625rem, 2vw, 1.35rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.025em",
                    color: "var(--ink)",
                    lineHeight: 1.15,
                    marginBottom: "0.55rem",
                  }}
                >
                  {project.title}
                </h3>

                {/* Pitch */}
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
                    fontWeight: 400,
                    lineHeight: 1.65,
                    color: "var(--ink-3)",
                    marginBottom: "0.9rem",
                    maxWidth: "var(--measure-base)",
                  }}
                >
                  {project.pitch}
                </p>

                {/* Skill tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1rem" }}>
                  {project.demonstrates.map((tag) => (
                    <span key={tag} className="tag" style={{ color: project.accent }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="row-cta-primary"
                      style={{
                        background: project.accent,
                        borderColor: project.accent,
                      }}
                    >
                      Try demo
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="row-cta-secondary"
                    style={{ color: project.accent, borderColor: `${project.accent}55` }}
                  >
                    Code
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer link */}
      <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span className="marginalia" style={{ fontStyle: "italic", fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "var(--ink-4)" }}>
          End of selected work — Chapter I.
        </span>
        <a
          href="https://github.com/huynhchitai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.5625rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--ink-3)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: 600,
            transition: "color 0.18s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-3)")}
        >
          All repositories on GitHub
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
            <path d="M1.5 6.5L6.5 1.5M6.5 1.5H3M6.5 1.5V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
