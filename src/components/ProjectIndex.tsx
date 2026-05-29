"use client";

import { projects } from "@/lib/projects";

export default function ProjectIndex() {
  return (
    <section
      id="work"
      style={{
        padding: `var(--section-pad-y) var(--section-pad-x)`,
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "clamp(2.5rem, 5vw, 4rem)",
          gap: "1rem",
        }}
      >
        <div>
          <div className="section-label" style={{ marginBottom: "1rem" }}>
            Selected Work
          </div>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "var(--ink)",
            }}
          >
            Projects
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.375rem",
            flexShrink: 0,
          }}
          className="hidden sm:flex"
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "var(--ink)",
              lineHeight: 1,
            }}
          >
            11
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
            Projects
          </span>
        </div>
      </div>

      {/* Column headers */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "0.5rem 0",
          display: "grid",
          gridTemplateColumns: "3.5rem 1fr auto",
          gap: "1rem",
          alignItems: "center",
          marginBottom: "0",
        }}
      >
        <span className="mono-label">#</span>
        <span className="mono-label">Project / Description</span>
        <span className="mono-label hidden sm:block">Link</span>
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
                padding: "clamp(1.125rem, 2.5vw, 1.75rem) 0",
              }}
            >
              {/* Accent bar — project color marker */}
              <div
                className="accent-bar"
                style={{
                  background: project.accent,
                  marginRight: "clamp(0.875rem, 2.5vw, 1.75rem)",
                }}
              />

              {/* Number */}
              <div style={{ width: "2.75rem", flexShrink: 0, paddingTop: "3px" }}>
                <span className="project-num">
                  {String(project.id).padStart(2, "0")}
                </span>
              </div>

              {/* Main content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(1rem, 2vw, 1.25rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.025em",
                    color: "var(--ink)",
                    lineHeight: 1.15,
                    marginBottom: "0.45rem",
                  }}
                >
                  {project.title}
                </h3>

                {/* Pitch */}
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(0.8125rem, 1.5vw, 0.9375rem)",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: "var(--ink-3)",
                    marginBottom: "0.7rem",
                    maxWidth: "54ch",
                  }}
                >
                  {project.pitch}
                </p>

                {/* Skill tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.85rem" }}>
                  {project.demonstrates.map((tag) => (
                    <span key={tag} className="tag" style={{ color: project.accent }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action links — Try demo (primary) + Code (secondary) */}
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
                        <path
                          d="M2 8L8 2M8 2H3.5M8 2V6.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
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
                      <path
                        d="M2 8L8 2M8 2H3.5M8 2V6.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer link */}
      <div style={{ marginTop: "2.25rem", display: "flex", justifyContent: "flex-end" }}>
        <a
          href="https://github.com/huynhchitai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.5625rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink-4)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            transition: "color 0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-4)")}
        >
          All repositories on GitHub
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
            <path
              d="M1.5 6.5L6.5 1.5M6.5 1.5H3M6.5 1.5V5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
