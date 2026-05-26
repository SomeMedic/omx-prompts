"use client";

import type { CSSProperties } from "react";
import {
  Activity,
  ArrowRight,
  Boxes,
  Check,
  CheckCircle2,
  Copy,
  Cpu,
  FileCode2,
  GitBranch,
  Github,
  Layers3,
  Network,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  TestTube2,
  WandSparkles,
  X,
  Zap
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type BuilderModuleKey =
  | "deepInterview"
  | "design"
  | "team"
  | "ralph"
  | "ultraqa"
  | "security"
  | "performance"
  | "wiki";

type BuilderModeKey = "expert" | "fast" | "guided";

const navItems = [
  { id: "quickstart", label: "Quick start" },
  { id: "builder", label: "Builder" },
  { id: "prompts", label: "Prompts" },
  { id: "workflow", label: "Workflow" },
  { id: "examples", label: "Examples" }
];

const heroTerminalScenarios = [
  {
    key: "empty",
    label: "empty repo",
    lines: [
      "$ ultragoal detect --project ./repo --mode autonomous",
      "state: empty project -> interview -> docs -> implementation",
      "docs: PRD.md DESIGN.md ARCHITECTURE.md TEST_PLAN.md",
      "team: PM + designer + frontend + backend + QA",
      "done: product, tests, browser evidence, final report"
    ]
  },
  {
    key: "docs",
    label: "docs ready",
    lines: [
      "$ ultragoal $team $ralph $ultraqa --source docs/",
      "read: PRD, architecture notes, acceptance criteria",
      "map: requirement -> task -> verification evidence",
      "repair: failing checks loop back into implementation",
      "done: every documented requirement has evidence"
    ]
  },
  {
    key: "existing",
    label: "existing app",
    lines: [
      "$ ultragoal $code-review $team --repo existing-app",
      "scan: architecture, conventions, tests, risk surfaces",
      "ask: only blockers that change implementation",
      "ship: feature/module inside existing patterns",
      "prove: regression checks and final traceability"
    ]
  },
  {
    key: "redesign",
    label: "redesign",
    lines: [
      "$design $visual-ralph $ultraqa --target frontend",
      "extract: style direction, layout density, states",
      "apply: responsive UI without breaking behavior",
      "verify: browser screenshots, dead actions, overflow",
      "done: polished frontend with visual QA notes"
    ]
  }
];

const agents = [
  {
    role: "Manager",
    icon: Network,
    task: "Owns mission, scope, task graph, handoffs",
    states: ["triaging", "sequencing", "unblocking", "verifying"]
  },
  {
    role: "Product",
    icon: Sparkles,
    task: "Turns ambiguity into PRD and acceptance criteria",
    states: ["interviewing", "mapping flows", "checking gaps", "signing scope"]
  },
  {
    role: "Design",
    icon: WandSparkles,
    task: "Creates UI direction, states, responsive behavior",
    states: ["moodboarding", "wireframing", "polishing", "visual QA"]
  },
  {
    role: "Architect",
    icon: Cpu,
    task: "Finds existing patterns and protects boundaries",
    states: ["scanning", "designing", "reviewing", "risk-checking"]
  },
  {
    role: "Developers",
    icon: Boxes,
    task: "Implement frontend, backend, integrations, docs",
    states: ["building", "refactoring", "integrating", "typing"]
  },
  {
    role: "QA",
    icon: TestTube2,
    task: "Attacks flows, edge cases, empty states, regressions",
    states: ["probing", "breaking", "retesting", "approving"]
  }
];

const promptCards = [
  {
    key: "super",
    category: "Build",
    icon: Rocket,
    title: "Super Universal",
    path: "prompts/omx-super-universal-autonomous-delivery-prompt.md",
    copy:
      "One contract for empty folders, docs-first builds, existing apps, features, integrations, redesigns, QA, security, and release work."
  },
  {
    key: "design",
    category: "Design",
    icon: WandSparkles,
    title: "Frontend Redesign",
    path: "prompts/omx-frontend-redesign-apply-prompt.md",
    copy:
      "Apply a desired style to a real frontend while preserving behavior, responsive states, accessibility, and verification evidence."
  },
  {
    key: "feature",
    category: "Build",
    icon: Boxes,
    title: "Feature From Spec",
    path: "prompts/omx-feature-from-spec-prompt.md",
    copy:
      "Plan, implement, test, QA, and report a complete feature in an existing codebase with traceability back to the spec."
  },
  {
    key: "qa",
    category: "QA",
    icon: TestTube2,
    title: "QA Hardening",
    path: "prompts/omx-test-and-qa-hardening-prompt.md",
    copy:
      "Add tests, smoke checks, browser/API verification, failure reproduction, and a compact evidence report."
  }
];

const promptFilters = ["All", "Build", "Design", "QA"] as const;

const quickStartCommands = [
  "npm install -g @openai/codex oh-my-codex",
  "omx setup --scope user --merge-agents",
  "cd /path/to/your-project && codex",
  "paste prompts/omx-super-universal-autonomous-delivery-prompt.md"
];

const projectModes = [
  {
    key: "empty",
    label: "Empty folder",
    copy: "Interview, create docs, then build.",
    instruction:
      "If the repo is empty, start with a short blocking interview, create PRD/DESIGN/ARCHITECTURE/TEST_PLAN, then implement."
  },
  {
    key: "docs",
    label: "Docs ready",
    copy: "Use docs as the source of truth.",
    instruction:
      "If documentation exists, read it first, map every requirement to implementation tasks, then build and verify."
  },
  {
    key: "existing",
    label: "Existing app",
    copy: "Inspect code, then integrate safely.",
    instruction:
      "If this is an existing app, study architecture and conventions first, ask only blocking questions, then implement inside current patterns."
  }
];

const missionTypes = [
  {
    key: "product",
    label: "Full product",
    prompt: "prompts/omx-super-universal-autonomous-delivery-prompt.md",
    result: "production-ready app with docs, tests, QA report"
  },
  {
    key: "feature",
    label: "Feature/module",
    prompt: "prompts/omx-feature-from-spec-prompt.md",
    result: "integrated feature with acceptance criteria and regression checks"
  },
  {
    key: "design",
    label: "Frontend redesign",
    prompt: "prompts/omx-frontend-redesign-apply-prompt.md",
    result: "applied visual system, responsive UI, browser verification"
  },
  {
    key: "api",
    label: "API integration",
    prompt: "prompts/omx-api-integration-prompt.md",
    result: "integrated API, error handling, typed contracts, tests"
  },
  {
    key: "database",
    label: "Database/model",
    prompt: "prompts/omx-database-data-model-prompt.md",
    result: "schema/model changes, migrations, validation, data-safety notes"
  },
  {
    key: "bugfix",
    label: "Bugfix/root cause",
    prompt: "prompts/omx-bugfix-root-cause-prompt.md",
    result: "reproduced root cause, fixed behavior, regression coverage"
  },
  {
    key: "qa",
    label: "QA hardening",
    prompt: "prompts/omx-test-and-qa-hardening-prompt.md",
    result: "tests, bug fixes, security review, evidence trail"
  },
  {
    key: "security",
    label: "Security review",
    prompt: "prompts/omx-security-review-hardening-prompt.md",
    result: "threat review, hardening patches, residual risk report"
  },
  {
    key: "performance",
    label: "Performance",
    prompt: "prompts/omx-performance-optimization-prompt.md",
    result: "measured bottlenecks, optimizations, before/after evidence"
  },
  {
    key: "release",
    label: "Release readiness",
    prompt: "prompts/omx-release-readiness-prompt.md",
    result: "release checklist, blockers fixed, deploy notes"
  },
  {
    key: "docs",
    label: "Docs/runbook",
    prompt: "prompts/omx-docs-onboarding-runbook-prompt.md",
    result: "clear docs, onboarding, runbook, examples"
  },
  {
    key: "audit",
    label: "Audit/refactor",
    prompt: "prompts/omx-codebase-audit-and-refactor-plan-prompt.md",
    result: "ranked audit, scoped refactor plan, safe improvements"
  }
];

const orchestrationSwitches: Array<{
  key: BuilderModuleKey;
  label: string;
  command: string;
  copy: string;
}> = [
  {
    key: "deepInterview",
    label: "Interview",
    command: "$deep-interview",
    copy: "Clarify only blockers"
  },
  {
    key: "design",
    label: "Design",
    command: "$design",
    copy: "Product/UI direction"
  },
  {
    key: "team",
    label: "$team",
    command: "$team",
    copy: "Parallel specialist crew"
  },
  {
    key: "ralph",
    label: "$ralph",
    command: "$ralph",
    copy: "Repair loop until accepted"
  },
  {
    key: "ultraqa",
    label: "$ultraqa",
    command: "$ultraqa",
    copy: "Adversarial verification"
  },
  {
    key: "security",
    label: "Review",
    command: "$code-review",
    copy: "Bugs, risks, regressions"
  },
  {
    key: "performance",
    label: "Perf",
    command: "$performance-goal",
    copy: "Measure and optimize"
  },
  {
    key: "wiki",
    label: "Wiki",
    command: "$wiki",
    copy: "Persist decisions"
  }
];

const builderTabs = [
  { key: "brief", label: "Brief" },
  { key: "scope", label: "Scope" },
  { key: "crew", label: "Crew" },
  { key: "prompt", label: "Prompt" }
] as const;

type BuilderTabKey = (typeof builderTabs)[number]["key"];

const builderScenarios = [
  {
    key: "empty",
    label: "Empty repo",
    command: "$ultragoal $deep-interview $design $team $ralph $ultraqa",
    rows: ["interview -> PRD/DESIGN/ARCHITECTURE", "build product -> test -> final evidence"]
  },
  {
    key: "docs",
    label: "Docs ready",
    command: "$ultragoal $team $ralph $ultraqa $wiki",
    rows: ["read docs -> map requirements", "implement every acceptance item"]
  },
  {
    key: "existing",
    label: "Existing app",
    command: "$ultragoal $code-review $team $ralph $ultraqa",
    rows: ["scan architecture -> ask blockers", "ship feature inside existing patterns"]
  },
  {
    key: "design",
    label: "Redesign",
    command: "$design $visual-ralph $ultraqa",
    rows: ["extract style -> apply UI system", "browser screenshots -> fix visual drift"]
  }
];

const builderModes: Array<{
  copy: string;
  key: BuilderModeKey;
  label: string;
}> = [
  {
    key: "guided",
    label: "Guided",
    copy: "step-by-step interview"
  },
  {
    key: "fast",
    label: "Fast",
    copy: "preset + one brief"
  },
  {
    key: "expert",
    label: "Expert",
    copy: "all controls open"
  }
];

const workflowSteps = [
  {
    key: "detect",
    title: "Detect",
    copy: "empty, docs-first, existing app, maintenance",
    command: "$ultragoal",
    signal: "project state, docs, stack, risk"
  },
  {
    key: "interview",
    title: "Interview",
    copy: "only when important facts are missing",
    command: "$deep-interview",
    signal: "blocking questions only"
  },
  {
    key: "plan",
    title: "Plan",
    copy: "PRD, design, architecture, test plan",
    command: "$ralplan",
    signal: "assumptions, milestones, acceptance"
  },
  {
    key: "team",
    title: "Team",
    copy: "parallel lanes for product, design, code, tests",
    command: "$team",
    signal: "manager, PM, designer, engineers, QA"
  },
  {
    key: "repair",
    title: "Repair",
    copy: "Ralph-style loops for stubborn failures",
    command: "$ralph",
    signal: "implement -> verify -> fix"
  },
  {
    key: "prove",
    title: "Prove",
    copy: "UltraQA, traceability, final report",
    command: "$ultraqa",
    signal: "hostile scenarios and evidence"
  }
];

const evidenceItems = [
  {
    key: "requirements",
    label: "requirements mapped to implementation",
    title: "Traceability map",
    lines: ["REQ-01 -> app/dashboard/page.tsx", "REQ-02 -> billing webhook tests", "REQ-03 -> responsive empty states"]
  },
  {
    key: "checks",
    label: "lint, typecheck, build, tests where applicable",
    title: "Verification suite",
    lines: ["npm run typecheck -> PASS", "npm run build -> PASS", "playwright smoke -> PASS"]
  },
  {
    key: "browser",
    label: "browser/API checks for critical flows",
    title: "Runtime proof",
    lines: ["login flow: checked", "CTA dead-action scan: clean", "mobile overflow: none"]
  },
  {
    key: "report",
    label: "final report with traceability",
    title: "Final report",
    lines: ["changed files", "evidence links", "remaining risks", "next actions"]
  }
];

const examples = [
  ["Empty project", "examples/empty-project-to-product.md"],
  ["Docs to full product", "examples/docs-to-full-product.md"],
  ["Existing app feature", "examples/existing-app-feature.md"],
  ["Frontend redesign", "examples/frontend-redesign.md"],
  ["API integration", "examples/api-integration.md"],
  ["Security hardening", "examples/security-hardening.md"]
];

function SiteHeader({ onOpenBuilder }: { onOpenBuilder: () => void }) {
  const [activeId, setActiveId] = useState("top");
  const [compact, setCompact] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      setCompact(scrollTop > 110);
      setProgress(maxScroll > 0 ? Math.min(1, scrollTop / maxScroll) : 0);

      if (scrollTop < 640) {
        setActiveId("top");
      } else {
        const current =
          [...navItems]
            .reverse()
            .find((item) => {
              const element = document.getElementById(item.id);
              return element ? element.offsetTop <= scrollTop + 180 : false;
            }) ?? navItems[0];

        setActiveId(current.id);
      }
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const activeLabel = navItems.find((item) => item.id === activeId)?.label ?? "Start";

  return (
    <header className={compact ? "topbar compact" : "topbar"}>
      <span className="topbar-progress" style={{ width: `${progress * 100}%` }} />
      <a className="brand" href="#top" aria-label="OMX Prompts home">
        <span className="brand-mark">$</span>
        <span>OMX Prompts</span>
      </a>
      <nav className="nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a className={item.id === activeId ? "active" : ""} href={`#${item.id}`} key={item.id}>
            {item.label}
          </a>
        ))}
        <a href="https://github.com/SomeMedic/omx-prompts">GitHub</a>
      </nav>
      <span className="active-section-pill">{activeLabel}</span>
      <button className="nav-build" onClick={onOpenBuilder} type="button">
        <Terminal size={15} />
        Build
      </button>
      <a
        className="nav-github"
        href="https://github.com/SomeMedic/omx-prompts"
        aria-label="Open GitHub repository"
      >
        <Github size={17} />
      </a>
    </header>
  );
}

function TerminalPreview() {
  const [activeKey, setActiveKey] = useState(heroTerminalScenarios[0].key);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const activeScenario =
    heroTerminalScenarios.find((scenario) => scenario.key === activeKey) ?? heroTerminalScenarios[0];
  const terminalFrames = activeScenario.lines;

  useEffect(() => {
    const currentLine = terminalFrames[lineIndex];
    const delay = charIndex >= currentLine.length ? 560 : 18;

    const timer = window.setTimeout(() => {
      if (charIndex >= currentLine.length) {
        setHistory((items) => {
          const next = [...items, currentLine].slice(-7);
          return lineIndex === terminalFrames.length - 1 ? [] : next;
        });
        setLineIndex((index) => (index + 1) % terminalFrames.length);
        setCharIndex(0);
      } else {
        setCharIndex((index) => index + 1);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [charIndex, lineIndex, terminalFrames]);

  useEffect(() => {
    setCharIndex(0);
    setHistory([]);
    setLineIndex(0);
  }, [activeKey]);

  const typed = terminalFrames[lineIndex].slice(0, charIndex);

  return (
    <div className="terminal-preview" aria-label="Animated terminal preview">
      <div className="terminal-chrome">
        <span />
        <span />
        <span />
        <strong>omx-prompts/run</strong>
      </div>
      <div className="terminal-scenario-tabs" aria-label="Terminal scenario selector">
        {heroTerminalScenarios.map((scenario) => (
          <button
            className={scenario.key === activeKey ? "active" : ""}
            key={scenario.key}
            onClick={() => setActiveKey(scenario.key)}
            type="button"
          >
            {scenario.label}
          </button>
        ))}
      </div>
      <div className="terminal-body">
        {history.map((line, index) => (
          <p key={`${line}-${index}`}>{line}</p>
        ))}
        <p>
          {typed}
          <span className="cursor">█</span>
        </p>
      </div>
    </div>
  );
}

function AgentConsole() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setTick((value) => value + 1), 1200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="agent-console" aria-label="Animated agent orchestration panel">
      <div className="console-header">
        <div>
          <p className="eyebrow">Live crew loop</p>
          <h2>Manager routes. Agents ship. QA pushes back.</h2>
        </div>
        <div className="pulse-meter">
          <Activity size={18} />
          <span>running</span>
        </div>
      </div>

      <div className="agent-grid">
        {agents.map((agent, index) => {
          const Icon = agent.icon;
          const active = tick % agents.length === index;
          const state = agent.states[(tick + index) % agent.states.length];
          const progress = 34 + ((tick * 13 + index * 11) % 58);

          return (
            <article className={active ? "agent-card active" : "agent-card"} key={agent.role}>
              <div className="agent-topline">
                <Icon size={18} />
                <strong>{agent.role}</strong>
                <span>{state}</span>
              </div>
              <p>{agent.task}</p>
              <div className="progress-track" aria-hidden="true">
                <span style={{ width: `${progress}%` }} />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function CommandCopy({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1300);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className="command-button" onClick={copyCommand} type="button">
      <code>{command}</code>
      <span>{copied ? <Check size={17} /> : <Copy size={17} />}</span>
    </button>
  );
}

function BuilderTeaser({ onOpen }: { onOpen: () => void }) {
  const [active, setActive] = useState(builderScenarios[0]);

  return (
    <section className="builder-teaser" id="builder">
      <div className="teaser-copy">
        <p className="eyebrow">Prompt builder</p>
        <h2>Build a mission-ready Codex prompt in seconds.</h2>
        <p>
          Open the builder, choose the task shape, add constraints, enable OMX
          modules, and copy a complete launch contract.
        </p>
      </div>
      <div className="teaser-console">
        <div className="teaser-scenario-grid" aria-label="Builder scenario preview">
          {builderScenarios.map((scenario) => (
            <button
              className={scenario.key === active.key ? "active" : ""}
              key={scenario.key}
              onClick={() => setActive(scenario)}
              type="button"
            >
              {scenario.label}
            </button>
          ))}
        </div>
        <div className="teaser-preview" aria-live="polite">
          <p>
            <span>$</span> {active.command}
          </p>
          {active.rows.map((row) => (
            <p key={row}>
              <span>run</span> {row}
            </p>
          ))}
        </div>
        <div className="teaser-actions">
          <button className="button primary" onClick={onOpen} type="button">
            <Terminal size={18} />
            Open builder
          </button>
          <div className="teaser-tags" aria-label="Builder capabilities">
            <span>12 task types</span>
            <span>8 OMX modules</span>
            <span>copy-ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionBuilder({
  onClose,
  open
}: {
  onClose: () => void;
  open: boolean;
}) {
  type TextQuestionKey =
    | "acceptance"
    | "constraints"
    | "designStyle"
    | "docsPath"
    | "objective"
    | "productName"
    | "stack"
    | "users";
  type QuestionKey = TextQuestionKey | "missionKey" | "modeKey" | "modules";
  type PromptPreviewRow = {
    id: string;
    muted?: boolean;
    spacer?: boolean;
    text: string;
  };
  type TerminalQuestion =
    | {
        key: TextQuestionKey;
        prompt: string;
        short: string;
        placeholder?: string;
        kind: "text";
        multiline?: boolean;
        suggestions?: string[];
      }
    | {
        key: "missionKey" | "modeKey";
        prompt: string;
        short: string;
        kind: "choice";
      }
    | {
        key: "modules";
        prompt: string;
        short: string;
        kind: "modules";
      };

  const [modeKey, setModeKey] = useState(projectModes[0].key);
  const [missionKey, setMissionKey] = useState(missionTypes[0].key);
  const [productName, setProductName] = useState("");
  const [objective, setObjective] = useState("");
  const [docsPath, setDocsPath] = useState("");
  const [stack, setStack] = useState("");
  const [users, setUsers] = useState("");
  const [designStyle, setDesignStyle] = useState("");
  const [constraints, setConstraints] = useState("");
  const [acceptance, setAcceptance] = useState("");
  const [autonomy, setAutonomy] = useState(5);
  const [qaDepth, setQaDepth] = useState(4);
  const [enabled, setEnabled] = useState<Record<BuilderModuleKey, boolean>>({
    deepInterview: true,
    design: true,
    performance: false,
    ralph: true,
    security: true,
    team: true,
    ultraqa: true,
    wiki: true
  });
  const [builderMode, setBuilderMode] = useState<BuilderModeKey>("guided");
  const [copied, setCopied] = useState(false);
  const [currentInput, setCurrentInput] = useState("");
  const [openChipKey, setOpenChipKey] = useState<QuestionKey | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [promptPreview, setPromptPreview] = useState<{
    activeRowId: string | null;
    rows: PromptPreviewRow[];
  }>({ activeRowId: null, rows: [] });
  const [answeredKeys, setAnsweredKeys] = useState<QuestionKey[]>([]);
  const chipDockRef = useRef<HTMLDivElement | null>(null);

  const terminalQuestions: TerminalQuestion[] = useMemo(
    () => [
      {
        key: "objective",
        kind: "text",
        multiline: true,
        prompt: "What should Codex build, fix, redesign, integrate, or audit?",
        short: "Mission",
        placeholder:
          "Build a production-ready analytics dashboard from docs/, redesign the frontend, add billing integration, tests, QA evidence, and final report.",
        suggestions: [
          "Build a full product from scratch after a short interview.",
          "Implement a feature in an existing app and prove it works.",
          "Apply a polished frontend redesign and verify it in browser.",
          "Audit, harden, test, and prepare the project for release."
        ]
      },
      {
        key: "productName",
        kind: "text",
        prompt: "What is the project or product name?",
        short: "Project",
        placeholder: "Clypse, AI editor, internal CRM...",
        suggestions: ["AI SaaS dashboard", "Internal CRM", "Creator tool", "Developer platform"]
      },
      {
        key: "modeKey",
        kind: "choice",
        prompt: "Where is the project starting from?",
        short: "State"
      },
      {
        key: "missionKey",
        kind: "choice",
        prompt: "What kind of mission is this?",
        short: "Type"
      },
      {
        key: "stack",
        kind: "text",
        prompt: "What stack, platform, or framework should Codex expect?",
        short: "Stack",
        placeholder: "Next.js, React Native, Laravel, FastAPI, Supabase...",
        suggestions: ["Next.js + TypeScript", "React + Node.js", "FastAPI + Postgres", "Use existing stack"]
      },
      {
        key: "docsPath",
        kind: "text",
        prompt: "Where are the docs, tickets, designs, or specs?",
        short: "Docs",
        placeholder: "docs/, PRD.md, GitHub issue, Figma URL...",
        suggestions: ["docs/", "README.md + issues", "Figma + PRD.md", "No docs yet"]
      },
      {
        key: "designStyle",
        kind: "text",
        multiline: true,
        prompt: "Any design direction or visual references?",
        short: "Style",
        placeholder: "Linear-style, Raycast-like command UI, Stripe dashboard density...",
        suggestions: ["Linear-style SaaS UI", "Raycast-like command interface", "Stripe dashboard density", "Use existing design system"]
      },
      {
        key: "constraints",
        kind: "text",
        multiline: true,
        prompt: "Any constraints, non-goals, security rules, or deadlines?",
        short: "Rules",
        placeholder: "No paid services, preserve auth, do not change public API...",
        suggestions: ["Preserve existing APIs", "No paid services", "Do not change auth behavior", "Ask only blocking questions"]
      },
      {
        key: "acceptance",
        kind: "text",
        multiline: true,
        prompt: "How should Codex prove the work is done?",
        short: "Done",
        placeholder: "Critical flows, screenshots, tests, build, deploy notes...",
        suggestions: ["Typecheck, build, tests, and final report", "Browser QA screenshots and no dead actions", "Acceptance criteria mapped to evidence", "Production-ready release checklist"]
      },
      {
        key: "modules",
        kind: "modules",
        prompt: "Which OMX modules should be active?",
        short: "Crew"
      }
    ],
    []
  );

  const mode = projectModes.find((item) => item.key === modeKey) ?? projectModes[0];
  const mission = missionTypes.find((item) => item.key === missionKey) ?? missionTypes[0];

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (openChipKey) {
          setOpenChipKey(null);
        } else {
          onClose();
        }
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose, open, openChipKey]);

  const selectedModules = useMemo(
    () => orchestrationSwitches.filter((item) => enabled[item.key]),
    [enabled]
  );

  function getTextValue(key: TextQuestionKey) {
    return {
      acceptance,
      constraints,
      designStyle,
      docsPath,
      objective,
      productName,
      stack,
      users
    }[key];
  }

  function setTextValue(key: TextQuestionKey, value: string) {
    const setters = {
      acceptance: setAcceptance,
      constraints: setConstraints,
      designStyle: setDesignStyle,
      docsPath: setDocsPath,
      objective: setObjective,
      productName: setProductName,
      stack: setStack,
      users: setUsers
    };

    setters[key](value);
  }

  function updateTextAnswer(key: TextQuestionKey, value: string) {
    setTextValue(key, value);

    if (value.trim()) {
      markAnswered(key);
    }
  }

  function getAnswerLabel(question: TerminalQuestion) {
    if (question.key === "modeKey") {
      return mode.label;
    }

    if (question.key === "missionKey") {
      return mission.label;
    }

    if (question.key === "modules") {
      return selectedModules.map((item) => item.command).join(" ");
    }

    return getTextValue(question.key).trim();
  }

  function truncateAnswer(value: string) {
    return value.length > 42 ? `${value.slice(0, 42)}...` : value;
  }

  function markAnswered(key: QuestionKey) {
    setAnsweredKeys((keys) => (keys.includes(key) ? keys : [...keys, key]));
  }

  function stepPreviewText(current: string, target: string) {
    if (current === target) {
      return current;
    }

    let commonPrefix = 0;
    const limit = Math.min(current.length, target.length);

    while (commonPrefix < limit && current[commonPrefix] === target[commonPrefix]) {
      commonPrefix += 1;
    }

    if (current.length > commonPrefix) {
      return current.slice(0, Math.max(commonPrefix, current.length - 12));
    }

    return target.slice(0, Math.min(target.length, current.length + 14));
  }

  const launchPrompt = useMemo(() => {
    const commands = [
      "$ultragoal",
      ...selectedModules
        .map((item) => item.command)
        .filter((command, index, items) => items.indexOf(command) === index)
    ];

    const valueOrPlaceholder = (value: string, placeholder: string) =>
      value.trim() || `<${placeholder}>`;

    return [
      `${commands.join(" ")}: universal autonomous Codex mission`,
      "",
      "## Use this prompt contract",
      `Primary prompt file: ${mission.prompt}`,
      `Project/product: ${valueOrPlaceholder(productName, "PROJECT_NAME")}`,
      `Current state: ${mode.label}`,
      `Mission type: ${mission.label}`,
      `Main objective: ${valueOrPlaceholder(objective, "WHAT_SHOULD_CODEX_BUILD_OR_FIX")}`,
      `Target users: ${valueOrPlaceholder(users, "WHO_WILL_USE_THIS")}`,
      `Stack/platform: ${valueOrPlaceholder(stack, "TECH_STACK_OR_PLATFORM")}`,
      `Docs/spec paths: ${valueOrPlaceholder(docsPath, "PATHS_TO_DOCS_OR_SPEC")}`,
      `Design direction: ${valueOrPlaceholder(designStyle, "STYLE_REFERENCES_OR_DESIGN_DIRECTION")}`,
      `Constraints/non-goals: ${valueOrPlaceholder(constraints, "LIMITS_SECURITY_RULES_DEADLINES_NON_GOALS")}`,
      `Acceptance criteria: ${valueOrPlaceholder(acceptance, "MEASURABLE_DONE_CRITERIA")}`,
      `Expected result: ${mission.result}`,
      "",
      "## Operating mode",
      mode.instruction,
      `Autonomy level: ${autonomy}/5. Work independently after blocking questions are answered.`,
      `QA depth: ${qaDepth}/5. Increase adversarial checks when user-facing, auth, data, payments, security, or deployment surfaces are touched.`,
      `Enabled OMX modules: ${selectedModules.map((item) => item.command).join(", ") || "none"}`,
      "Ask concise questions only when missing information would materially change architecture, UX, data model, security, or acceptance criteria.",
      "Do not stop at planning. Continue through documentation, implementation, verification, repair, and final reporting.",
      "",
      "## Required deliverables",
      "- Product/implementation plan with explicit assumptions.",
      "- Updated docs when docs are missing, stale, or changed by the work.",
      "- Code implementation following the repository's existing stack and conventions.",
      "- Tests, type checks, lint/build checks, browser/API checks, or justified substitutes.",
      "- UltraQA-style issue hunt for dead actions, broken states, edge cases, empty states, auth/data/security regressions, and overclaims.",
      "- Final report with completed work, changed files, verification evidence, remaining risks, and next recommended actions.",
      "",
      "## Completion rule",
      "Continue looping through implement -> verify -> fix until the acceptance criteria are satisfied or a real blocker is documented with evidence."
    ].join("\n");
  }, [
    acceptance,
    autonomy,
    constraints,
    designStyle,
    docsPath,
    mission,
    mode,
    objective,
    productName,
    qaDepth,
    selectedModules,
    stack,
    users
  ]);

  const terminalPromptRows = useMemo<PromptPreviewRow[]>(() => {
    const commands = [
      "$ultragoal",
      ...selectedModules
        .map((item) => item.command)
        .filter((command, index, items) => items.indexOf(command) === index)
    ];

    const row = (id: string, label: string, value: string, fallback = "pending") => {
      const filled = value.trim();

      return {
        id,
        muted: !filled,
        text: `${label}: ${filled || fallback}`
      };
    };

    return [
      {
        id: "command",
        text: `${commands.join(" ")}: universal autonomous Codex mission`
      },
      { id: "space-1", spacer: true, text: "" },
      { id: "prompt-file", text: `Primary prompt file: ${mission.prompt}` },
      { id: "project-state", text: `Project state: ${mode.label}` },
      { id: "mission-type", text: `Mission type: ${mission.label}` },
      row("objective", "Main objective", objective),
      row("product", "Project/product", productName),
      row("stack", "Stack/platform", stack),
      row("docs", "Docs/spec paths", docsPath),
      row("users", "Target users", users),
      row("style", "Design direction", designStyle),
      row("constraints", "Constraints/non-goals", constraints),
      row("acceptance", "Acceptance criteria", acceptance),
      { id: "space-2", spacer: true, text: "" },
      { id: "autonomy", text: `Autonomy level: ${autonomy}/5` },
      { id: "qa-depth", text: `QA depth: ${qaDepth}/5` },
      {
        id: "completion",
        text: "Completion rule: implement -> verify -> fix until accepted."
      }
    ];
  }, [
    acceptance,
    autonomy,
    constraints,
    designStyle,
    docsPath,
    mission,
    mode,
    objective,
    productName,
    qaDepth,
    selectedModules,
    stack,
    users
  ]);

  async function copyLaunchPrompt() {
    try {
      await navigator.clipboard.writeText(launchPrompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1300);
    } catch {
      setCopied(false);
    }
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const timer = window.setInterval(() => {
      setPromptPreview((current) => {
        const currentById = new Map(current.rows.map((row) => [row.id, row.text]));
        let activeRowId: string | null = null;
        let changed = false;

        const rows = terminalPromptRows.map((targetRow) => {
          const currentText = currentById.get(targetRow.id) ?? "";

          if (!activeRowId && currentText !== targetRow.text) {
            const nextText = stepPreviewText(currentText, targetRow.text);
            activeRowId = targetRow.id;
            changed = changed || nextText !== currentText;

            return {
              ...targetRow,
              text: nextText
            };
          }

          return {
            ...targetRow,
            text: currentText
          };
        });

        if (!changed && !current.activeRowId && current.rows.length === rows.length) {
          return current;
        }

        return {
          activeRowId,
          rows
        };
      });
    }, 18);

    return () => window.clearInterval(timer);
  }, [open, terminalPromptRows]);

  useEffect(() => {
    if (open) {
      setPromptPreview({ activeRowId: null, rows: [] });
      setQuestionIndex(0);
      setCurrentInput(getTextValue("objective"));
    }
  }, [open]);

  useEffect(() => {
    const question = terminalQuestions[questionIndex];

    if (question?.kind === "text") {
      setCurrentInput(getTextValue(question.key));
    }
  }, [questionIndex, terminalQuestions]);

  useEffect(() => {
    if (!openChipKey) {
      return;
    }

    function closeChipOnOutsidePointer(event: PointerEvent) {
      const target = event.target;

      if (target instanceof Node && chipDockRef.current?.contains(target)) {
        return;
      }

      setOpenChipKey(null);
    }

    document.addEventListener("pointerdown", closeChipOnOutsidePointer, true);

    return () => {
      document.removeEventListener("pointerdown", closeChipOnOutsidePointer, true);
    };
  }, [openChipKey]);

  function advanceQuestion() {
    setQuestionIndex((index) => Math.min(index + 1, terminalQuestions.length));
  }

  function retreatQuestion() {
    setQuestionIndex((index) => Math.max(index - 1, 0));
  }

  function jumpToQuestion(key: QuestionKey) {
    const nextIndex = terminalQuestions.findIndex((question) => question.key === key);

    if (nextIndex >= 0) {
      setQuestionIndex(nextIndex);
    }
  }

  function submitAnswerValue(value: string) {
    const question = terminalQuestions[questionIndex];

    if (!question || question.kind !== "text") {
      return;
    }

    setCurrentInput(value);
    setTextValue(question.key, value);
    if (value.trim()) {
      markAnswered(question.key);
    }
    advanceQuestion();
  }

  function submitCurrentAnswer() {
    const question = terminalQuestions[questionIndex];

    if (!question) {
      return;
    }

    if (question.kind === "text") {
      setTextValue(question.key, currentInput);
      if (currentInput.trim()) {
        markAnswered(question.key);
      }
    }

    advanceQuestion();
  }

  function resetBuilder() {
    setModeKey(projectModes[0].key);
    setMissionKey(missionTypes[0].key);
    setProductName("");
    setObjective("");
    setDocsPath("");
    setStack("");
    setUsers("");
    setDesignStyle("");
    setConstraints("");
    setAcceptance("");
    setAutonomy(5);
    setQaDepth(4);
    setEnabled({
      deepInterview: true,
      design: true,
      performance: false,
      ralph: true,
      security: true,
      team: true,
      ultraqa: true,
      wiki: true
    });
    setBuilderMode("guided");
    setCopied(false);
    setCurrentInput("");
    setOpenChipKey(null);
    setQuestionIndex(0);
    setPromptPreview({ activeRowId: null, rows: [] });
    setAnsweredKeys([]);
  }

  if (!open) {
    return null;
  }

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        aria-labelledby="builder-title"
        aria-modal="true"
        className="terminal-builder-modal"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="terminal-window-chrome">
          <span />
          <span />
          <span />
          <strong id="builder-title">omx prompt builder</strong>
          <button className="modal-close" onClick={onClose} type="button" aria-label="Close builder">
            <X size={18} />
          </button>
        </div>

        <div className="terminal-builder-grid">
          <div className="terminal-interview">
            <div className="terminal-statusline">
              <span>interactive interview</span>
              <span>
                {Math.min(questionIndex + 1, terminalQuestions.length)}/{terminalQuestions.length}
              </span>
            </div>
            <div className="interview-progress" aria-hidden="true">
              <span
                style={{
                  width: `${(Math.min(questionIndex + 1, terminalQuestions.length) / terminalQuestions.length) * 100}%`
                }}
              />
            </div>
            <div className="builder-mode-switch" aria-label="Builder mode">
              {builderModes.map((item) => (
                <button
                  className={item.key === builderMode ? "active" : ""}
                  key={item.key}
                  onClick={() => setBuilderMode(item.key)}
                  type="button"
                >
                  <strong>{item.label}</strong>
                  <span>{item.copy}</span>
                </button>
              ))}
            </div>

            <div className="terminal-lines">
              <p>
                <span>$</span> omx-prompt-builder --mode {builderMode}
              </p>
              <p>
                <span>system</span> answer questions; each answer becomes an editable chip and rewrites the prompt.
              </p>
              {terminalQuestions
                .filter((question, index) => index < questionIndex && answeredKeys.includes(question.key))
                .map((question) => (
                  <p key={question.key}>
                    <span>saved</span> {question.short}: {truncateAnswer(getAnswerLabel(question))}
                  </p>
                ))}
            </div>

            <div className="answer-chip-dock" ref={chipDockRef}>
              {terminalQuestions
                .filter((question) => answeredKeys.includes(question.key) && getAnswerLabel(question))
                .map((question) => (
                  <div className="answer-chip-menu" key={question.key}>
                    <button
                      className="answer-chip-trigger"
                      onClick={() =>
                        setOpenChipKey((value) => (value === question.key ? null : question.key))
                      }
                      type="button"
                    >
                      {question.short}: {truncateAnswer(getAnswerLabel(question))}
                    </button>

                    {openChipKey === question.key && (
                      <div className="answer-menu-panel">
                        {question.kind === "text" && (
                          <textarea
                            onChange={(event) => setTextValue(question.key, event.target.value)}
                            value={getTextValue(question.key)}
                          />
                        )}

                        {question.key === "modeKey" && (
                          <div className="mini-option-grid">
                            {projectModes.map((item) => (
                              <button
                                className={item.key === modeKey ? "active" : ""}
                                key={item.key}
                                onClick={() => {
                                  setModeKey(item.key);
                                  setOpenChipKey(null);
                                }}
                                type="button"
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>
                        )}

                        {question.key === "missionKey" && (
                          <div className="mini-option-grid">
                            {missionTypes.map((item) => (
                              <button
                                className={item.key === missionKey ? "active" : ""}
                                key={item.key}
                                onClick={() => {
                                  setMissionKey(item.key);
                                  setOpenChipKey(null);
                                }}
                                type="button"
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>
                        )}

                        {question.key === "modules" && (
                          <div className="mini-option-grid">
                            {orchestrationSwitches.map((item) => (
                              <button
                                className={enabled[item.key] ? "active" : ""}
                                key={item.key}
                                onClick={() =>
                                  setEnabled((value) => ({
                                    ...value,
                                    [item.key]: !value[item.key]
                                  }))
                                }
                                type="button"
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>
                        )}

                        <button
                          className="edit-in-terminal"
                          onClick={() => {
                            setOpenChipKey(null);
                            jumpToQuestion(question.key);
                          }}
                          type="button"
                        >
                          edit in terminal
                        </button>
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {builderMode === "guided" ? (
              <div className="question-console">
              {terminalQuestions[questionIndex] ? (
                <>
                  <p className="question-label">
                    <span>?</span> {terminalQuestions[questionIndex].prompt}
                  </p>

                  {terminalQuestions[questionIndex].kind === "text" && (
                    <div className="terminal-input-block">
                      {terminalQuestions[questionIndex].suggestions && (
                        <div className="quick-answer-grid">
                          {terminalQuestions[questionIndex].suggestions.map((suggestion) => (
                            <button
                              key={suggestion}
                              onClick={() => submitAnswerValue(suggestion)}
                              type="button"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                      {terminalQuestions[questionIndex].multiline ? (
                        <textarea
                          autoFocus
                          onChange={(event) => setCurrentInput(event.target.value)}
                          onKeyDown={(event) => {
                            if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
                              submitCurrentAnswer();
                            }
                          }}
                          placeholder={terminalQuestions[questionIndex].placeholder}
                          value={currentInput}
                        />
                      ) : (
                        <input
                          autoFocus
                          onChange={(event) => setCurrentInput(event.target.value)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter") {
                              submitCurrentAnswer();
                            }
                          }}
                          placeholder={terminalQuestions[questionIndex].placeholder}
                          type="text"
                          value={currentInput}
                        />
                      )}
                      <div className="terminal-input-actions">
                        {questionIndex > 0 && (
                          <button onClick={retreatQuestion} type="button">
                            back
                          </button>
                        )}
                        <button onClick={submitCurrentAnswer} type="button">
                          save answer
                        </button>
                        <button onClick={advanceQuestion} type="button">
                          skip
                        </button>
                      </div>
                    </div>
                  )}

                  {terminalQuestions[questionIndex].key === "modeKey" && (
                    <div className="terminal-option-grid">
                      {projectModes.map((item) => (
                        <button
                          className={item.key === modeKey ? "active" : ""}
                          key={item.key}
                          onClick={() => {
                            setModeKey(item.key);
                            markAnswered("modeKey");
                            advanceQuestion();
                          }}
                          type="button"
                        >
                          <strong>{item.label}</strong>
                          <span>{item.copy}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {terminalQuestions[questionIndex].key === "missionKey" && (
                    <div className="terminal-option-grid dense">
                      {missionTypes.map((item) => (
                        <button
                          className={item.key === missionKey ? "active" : ""}
                          key={item.key}
                          onClick={() => {
                            setMissionKey(item.key);
                            markAnswered("missionKey");
                            advanceQuestion();
                          }}
                          type="button"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {terminalQuestions[questionIndex].key === "modules" && (
                    <div className="terminal-input-block">
                      <div className="terminal-option-grid dense">
                        {orchestrationSwitches.map((item) => (
                          <button
                            aria-pressed={enabled[item.key]}
                            className={enabled[item.key] ? "active" : ""}
                            key={item.key}
                            onClick={() =>
                              setEnabled((value) => ({
                                ...value,
                                [item.key]: !value[item.key]
                              }))
                            }
                            type="button"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                      <div className="terminal-sliders">
                        <label>
                          <span>autonomy {autonomy}/5</span>
                          <input
                            max="5"
                            min="1"
                            onChange={(event) => setAutonomy(Number(event.target.value))}
                            type="range"
                            value={autonomy}
                          />
                        </label>
                        <label>
                          <span>qa {qaDepth}/5</span>
                          <input
                            max="5"
                            min="1"
                            onChange={(event) => setQaDepth(Number(event.target.value))}
                            type="range"
                            value={qaDepth}
                          />
                        </label>
                      </div>
                      <div className="terminal-input-actions">
                        <button onClick={retreatQuestion} type="button">
                          back
                        </button>
                        <button
                          onClick={() => {
                            markAnswered("modules");
                            advanceQuestion();
                          }}
                          type="button"
                        >
                          finish interview
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="question-complete">
                  <p>
                    <span>✓</span> Prompt contract is ready.
                  </p>
                  <button onClick={copyLaunchPrompt} type="button">
                    {copied ? <Check size={17} /> : <Copy size={17} />}
                    {copied ? "Copied" : "Copy full prompt"}
                  </button>
                </div>
              )}
              </div>
            ) : builderMode === "fast" ? (
              <div className="question-console control-console">
                <p className="question-label">
                  <span>?</span> Fast launch pad
                </p>
                <div className="terminal-input-block">
                  <div className="quick-answer-grid">
                    {terminalQuestions[0].kind === "text" &&
                      terminalQuestions[0].suggestions?.map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => updateTextAnswer("objective", suggestion)}
                          type="button"
                        >
                          {suggestion}
                        </button>
                      ))}
                  </div>
                  <textarea
                    onChange={(event) => updateTextAnswer("objective", event.target.value)}
                    placeholder={terminalQuestions[0].kind === "text" ? terminalQuestions[0].placeholder : ""}
                    value={objective}
                  />
                  <div className="fast-row">
                    <input
                      onChange={(event) => updateTextAnswer("productName", event.target.value)}
                      placeholder="Project name"
                      type="text"
                      value={productName}
                    />
                    <input
                      onChange={(event) => updateTextAnswer("docsPath", event.target.value)}
                      placeholder="docs/, PRD.md, issue URL..."
                      type="text"
                      value={docsPath}
                    />
                  </div>
                  <div className="terminal-option-grid dense">
                    {projectModes.map((item) => (
                      <button
                        className={item.key === modeKey ? "active" : ""}
                        key={item.key}
                        onClick={() => {
                          setModeKey(item.key);
                          markAnswered("modeKey");
                        }}
                        type="button"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <div className="terminal-input-actions">
                    <button onClick={copyLaunchPrompt} type="button">
                      {copied ? "copied" : "copy full prompt"}
                    </button>
                    <button
                      onClick={() => {
                        markAnswered("modules");
                        setQuestionIndex(terminalQuestions.length);
                      }}
                      type="button"
                    >
                      mark ready
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="question-console control-console">
                <p className="question-label">
                  <span>?</span> Expert control panel
                </p>
                <div className="expert-grid">
                  <label>
                    <span>Project</span>
                    <input
                      onChange={(event) => updateTextAnswer("productName", event.target.value)}
                      placeholder="Product name"
                      type="text"
                      value={productName}
                    />
                  </label>
                  <label>
                    <span>Stack</span>
                    <input
                      onChange={(event) => updateTextAnswer("stack", event.target.value)}
                      placeholder="Next.js, Laravel, FastAPI..."
                      type="text"
                      value={stack}
                    />
                  </label>
                  <label>
                    <span>Docs</span>
                    <input
                      onChange={(event) => updateTextAnswer("docsPath", event.target.value)}
                      placeholder="docs/, PRD.md..."
                      type="text"
                      value={docsPath}
                    />
                  </label>
                  <label>
                    <span>Users</span>
                    <input
                      onChange={(event) => updateTextAnswer("users", event.target.value)}
                      placeholder="Target users"
                      type="text"
                      value={users}
                    />
                  </label>
                  <label className="wide">
                    <span>Mission</span>
                    <textarea
                      onChange={(event) => updateTextAnswer("objective", event.target.value)}
                      placeholder="What should Codex build, fix, redesign, integrate, or audit?"
                      value={objective}
                    />
                  </label>
                  <label className="wide">
                    <span>Design/style</span>
                    <textarea
                      onChange={(event) => updateTextAnswer("designStyle", event.target.value)}
                      placeholder="Visual references, density, interaction feel..."
                      value={designStyle}
                    />
                  </label>
                  <label className="wide">
                    <span>Constraints</span>
                    <textarea
                      onChange={(event) => updateTextAnswer("constraints", event.target.value)}
                      placeholder="Non-goals, security rules, deadlines..."
                      value={constraints}
                    />
                  </label>
                  <label className="wide">
                    <span>Acceptance</span>
                    <textarea
                      onChange={(event) => updateTextAnswer("acceptance", event.target.value)}
                      placeholder="Tests, screenshots, flows, deployment expectations..."
                      value={acceptance}
                    />
                  </label>
                </div>
                <div className="terminal-option-grid dense">
                  {missionTypes.slice(0, 8).map((item) => (
                    <button
                      className={item.key === missionKey ? "active" : ""}
                      key={item.key}
                      onClick={() => {
                        setMissionKey(item.key);
                        markAnswered("missionKey");
                      }}
                      type="button"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="terminal-option-grid dense">
                  {orchestrationSwitches.map((item) => (
                    <button
                      aria-pressed={enabled[item.key]}
                      className={enabled[item.key] ? "active" : ""}
                      key={item.key}
                      onClick={() =>
                        setEnabled((value) => ({
                          ...value,
                          [item.key]: !value[item.key]
                        }))
                      }
                      type="button"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="terminal-sliders">
                  <label>
                    <span>autonomy {autonomy}/5</span>
                    <input
                      max="5"
                      min="1"
                      onChange={(event) => setAutonomy(Number(event.target.value))}
                      type="range"
                      value={autonomy}
                    />
                  </label>
                  <label>
                    <span>qa {qaDepth}/5</span>
                    <input
                      max="5"
                      min="1"
                      onChange={(event) => setQaDepth(Number(event.target.value))}
                      type="range"
                      value={qaDepth}
                    />
                  </label>
                </div>
                <div className="terminal-input-actions">
                  <button onClick={copyLaunchPrompt} type="button">
                    {copied ? "copied" : "copy full prompt"}
                  </button>
                </div>
              </div>
            )}
          </div>

          <aside className="terminal-prompt-preview">
            <div className="prompt-preview-top">
              <span>generated prompt</span>
              <div>
                <button onClick={resetBuilder} type="button">
                  reset
                </button>
                <button onClick={copyLaunchPrompt} type="button">
                  {copied ? "copied" : "copy"}
                </button>
              </div>
            </div>
            <div className="terminal-prompt-scroll">
              {promptPreview.rows.map((row) => (
                <div
                  className={[
                    "prompt-line",
                    row.muted ? "muted" : "",
                    row.spacer ? "spacer" : "",
                    row.id === promptPreview.activeRowId ? "active" : ""
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  key={row.id}
                >
                  {row.text}
                  {row.id === promptPreview.activeRowId && <span className="cursor">█</span>}
                </div>
              ))}
              {!promptPreview.activeRowId && <span className="cursor">█</span>}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function PromptDeck() {
  const [active, setActive] = useState(promptCards[0].key);
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState<(typeof promptFilters)[number]>("All");
  const visibleCards = useMemo(
    () => promptCards.filter((card) => filter === "All" || card.category === filter),
    [filter]
  );
  const activeCard = useMemo(
    () => visibleCards.find((card) => card.key === active) ?? visibleCards[0] ?? promptCards[0],
    [active, visibleCards]
  );

  useEffect(() => {
    if (!visibleCards.some((card) => card.key === active)) {
      setActive(visibleCards[0]?.key ?? promptCards[0].key);
    }
  }, [active, visibleCards]);

  async function copyPromptReference() {
    try {
      await navigator.clipboard.writeText(
        [
          `Primary prompt file: ${activeCard.path}`,
          `Prompt: ${activeCard.title}`,
          activeCard.copy,
          `Repository: https://github.com/SomeMedic/omx-prompts/blob/main/${activeCard.path}`
        ].join("\n")
      );
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1300);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="prompt-deck">
      <div className="prompt-catalog-controls">
        <div className="prompt-filter-row" aria-label="Prompt category filters">
          {promptFilters.map((item) => (
            <button
              className={item === filter ? "active" : ""}
              key={item}
              onClick={() => setFilter(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="prompt-list" role="tablist" aria-label="Prompt selector">
          {visibleCards.map((card) => {
            const Icon = card.icon;
            const selected = card.key === activeCard.key;
            return (
              <button
                aria-selected={selected}
                className={selected ? "prompt-tab active" : "prompt-tab"}
                key={card.key}
                onClick={() => setActive(card.key)}
                role="tab"
                type="button"
              >
                <Icon size={18} />
                <span>{card.title}</span>
                <small>{card.category}</small>
              </button>
            );
          })}
        </div>
      </div>

      <div className="prompt-output" role="tabpanel">
        <div className="prompt-path">
          <FileCode2 size={18} />
          <code>{activeCard.path}</code>
        </div>
        <h3>{activeCard.title}</h3>
        <p>{activeCard.copy}</p>
        <div className="prompt-actions">
          <button onClick={copyPromptReference} type="button">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy prompt"}
          </button>
          <a
            className="inline-link"
            href={`https://github.com/SomeMedic/omx-prompts/blob/main/${activeCard.path}`}
          >
            Open prompt <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

function WorkflowExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = workflowSteps[activeIndex];

  return (
    <div className="workflow-explorer">
      <div className="flow-grid" role="tablist" aria-label="Workflow stages">
        {workflowSteps.map((step, index) => (
          <button
            aria-selected={index === activeIndex}
            className={index === activeIndex ? "flow-card active" : "flow-card"}
            key={step.key}
            onClick={() => setActiveIndex(index)}
            role="tab"
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </button>
        ))}
      </div>
      <div className="workflow-detail" role="tabpanel">
        <div>
          <p className="eyebrow">Active stage</p>
          <h3>{activeStep.title}</h3>
        </div>
        <div className="workflow-terminal">
          <p>
            <span>$</span> {activeStep.command}
          </p>
          <p>
            <span>signal</span> {activeStep.signal}
          </p>
          <p>
            <span>next</span>{" "}
            {workflowSteps[(activeIndex + 1) % workflowSteps.length].title.toLowerCase()}
          </p>
        </div>
      </div>
    </div>
  );
}

function EvidencePanel() {
  const [activeKey, setActiveKey] = useState(evidenceItems[0].key);
  const activeItem = evidenceItems.find((item) => item.key === activeKey) ?? evidenceItems[0];

  return (
    <div className="proof-panel">
      <div>
        <p className="eyebrow">Completion standard</p>
        <h2>Not just a plan. Evidence.</h2>
      </div>
      <div className="evidence-stack">
        <div className="evidence-list" aria-label="Evidence selector">
          {evidenceItems.map((item) => (
            <button
              className={item.key === activeKey ? "active" : ""}
              key={item.key}
              onClick={() => setActiveKey(item.key)}
              type="button"
            >
              <CheckCircle2 size={18} />
              {item.label}
            </button>
          ))}
        </div>
        <div className="evidence-preview" aria-live="polite">
          <strong>{activeItem.title}</strong>
          {activeItem.lines.map((line) => (
            <p key={line}>
              <span>ok</span> {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function StarCta() {
  return (
    <section className="star-cta">
      <div>
        <p className="eyebrow">Save the toolkit</p>
        <h2>Star the repo, keep the prompt library one command away.</h2>
      </div>
      <a className="button primary" href="https://github.com/SomeMedic/omx-prompts">
        <Github size={18} />
        Star on GitHub
      </a>
    </section>
  );
}

export default function Home() {
  const [builderOpen, setBuilderOpen] = useState(false);

  return (
    <main>
      <div className="scanline" aria-hidden="true" />
      <SiteHeader onOpenBuilder={() => setBuilderOpen(true)} />

      <section className="hero" id="top">
        <div className="matrix" aria-hidden="true">
          {Array.from({ length: 34 }, (_, index) => (
            <span
              key={index}
              style={{ "--i": index, "--x": `${(index * 37) % 100}%` } as CSSProperties}
            >
              {index % 4 === 0
                ? "$ ultragoal"
                : index % 4 === 1
                  ? "$ team"
                  : index % 4 === 2
                    ? "$ ralph"
                    : "$ ultraqa"}
            </span>
          ))}
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Codex + oh-my-codex prompt library</p>
            <h1>Turn Codex into a product delivery crew.</h1>
            <p className="lede">
              Terminal-style operating prompts for building from empty folders,
              shipping from docs, improving existing apps, redesigning frontends,
              hardening QA, reviewing security, and proving completion.
            </p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => setBuilderOpen(true)} type="button">
                <Terminal size={18} />
                Build prompt
              </button>
              <a className="button secondary" href="https://github.com/SomeMedic/omx-prompts">
                <Github size={18} />
                Star on GitHub
              </a>
            <a className="button secondary" href="#quickstart">
              <Terminal size={18} />
              Quick start
            </a>
          </div>
        </div>

          <div className="hero-stage">
            <TerminalPreview />
            <div className="signal-strip" aria-label="Workflow signals">
              <span>
                <Zap size={15} />
                ultragoal
              </span>
              <span>
                <Network size={15} />
                team
              </span>
              <span>
                <Play size={15} />
                ralph
              </span>
              <span>
                <ShieldCheck size={15} />
                ultraqa
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="quickstart" id="quickstart">
        <div className="section-heading">
          <p className="eyebrow">Quick start</p>
          <h2>Install. Open a repo. Paste one prompt.</h2>
        </div>
        <div className="command-grid" aria-label="Quick start commands">
          {quickStartCommands.map((command) => (
            <CommandCopy command={command} key={command} />
          ))}
        </div>
      </section>

      <BuilderTeaser onOpen={() => setBuilderOpen(true)} />
      <MissionBuilder open={builderOpen} onClose={() => setBuilderOpen(false)} />

      <section className="orchestration">
        <AgentConsole />
      </section>

      <section className="prompts" id="prompts">
        <div className="section-heading">
          <p className="eyebrow">Prompt catalog</p>
          <h2>Choose the workflow. Paste the contract.</h2>
        </div>
        <PromptDeck />
      </section>

      <section className="workflow" id="workflow">
        <div className="section-heading">
          <p className="eyebrow">Orchestration model</p>
          <h2>Ultragoal owns the mission. Team ships lanes. Ralph repairs. UltraQA attacks.</h2>
        </div>
        <WorkflowExplorer />
      </section>

      <section className="proof">
        <EvidencePanel />
      </section>

      <StarCta />

      <section className="examples" id="examples">
        <div className="section-heading">
          <p className="eyebrow">Examples</p>
          <h2>Filled placeholders for real starting points.</h2>
        </div>
        <div className="example-grid">
          {examples.map(([label, path]) => (
            <a href={`https://github.com/SomeMedic/omx-prompts/blob/main/${path}`} key={path}>
              <GitBranch size={18} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>MIT licensed prompt library.</span>
        <div>
          <a href="https://github.com/SomeMedic/omx-prompts/blob/main/INSTRUCTIONS.md">
            Full guide
          </a>
          <a href="https://github.com/SomeMedic/omx-prompts">
            <Layers3 size={16} />
            Repository
          </a>
          <a href="https://github.com/SomeMedic/omx-prompts/blob/main/SECURITY.md">
            <ShieldCheck size={16} />
            Safety
          </a>
        </div>
      </footer>
    </main>
  );
}
