import React from "react";
import TerminalModule from "react-console-emulator";
import githubData from "../../assets/github.json";
import MacWindow from "./MacWindow";
import "./cli.scss";

const Terminal = TerminalModule?.default ?? TerminalModule;

const projectList = githubData
  .map((project, index) => `${index + 1}. ${project.title}`)
  .join("\n");

const commandList = [
  "about",
  "skills",
  "projects",
  "project <number>",
  "contact",
  "socials",
  "status",
  "echo <text>",
  "help",
  "clear",
];

const commands = {
  about: {
    description: "Short intro about the portfolio owner.",
    usage: "about",
    fn: () =>
      [
        "Veeresh Pasare",
        "Frontend-focused developer building polished, interactive web experiences.",
        "This portfolio is presented as a macOS-style desktop with projects, resume, notes, music, and a terminal.",
      ].join("\n"),
  },
  skills: {
    description: "Show the core stack.",
    usage: "skills",
    fn: () =>
      [
        "Frontend: React, JavaScript, SCSS, responsive UI",
        "Backend: Node.js, Express, REST APIs",
        "Tools: Git, Vite, Figma, Docker",
      ].join("\n"),
  },
  projects: {
    description: "List featured projects.",
    usage: "projects",
    fn: () => `Featured projects:\n${projectList}`,
  },
  project: {
    description: "Show details for a featured project.",
    usage: "project <number>",
    fn: (index) => {
      const project = githubData[Number(index) - 1];

      if (!project) {
        return "Project not found. Try: project 1";
      }

      return [
        project.title,
        project.description,
        `Stack: ${project.tags.join(", ")}`,
        `Repo: ${project.repoLink}`,
        project.demoLink ? `Demo: ${project.demoLink}` : "Demo: private / unavailable",
      ].join("\n");
    },
  },
  contact: {
    description: "Show contact information.",
    usage: "contact",
    fn: () =>
      [
        "Email: veeresh@example.com",
        "Location: India",
        "Availability: Open to freelance and full-time roles",
      ].join("\n"),
  },
  socials: {
    description: "List public profile links.",
    usage: "socials",
    fn: () =>
      [
        "GitHub: https://github.com/veereshpasare",
        "LinkedIn: https://linkedin.com/in/veereshpasare",
        "Portfolio: /",
      ].join("\n"),
  },
  status: {
    description: "Current work status.",
    usage: "status",
    fn: () =>
      [
        "Status: Building smooth UI experiences.",
        "Focus: React interfaces, frontend engineering, and portfolio projects.",
      ].join("\n"),
  },
  echo: {
    description: "Echo a passed string.",
    usage: "echo <text>",
    fn: (...args) => args.join(" "),
  },
};

const welcomeMessage = [
  "Welcome to my portfolio CLI.",
  "Type one of the available commands below.",
  `Commands: ${commandList.join(", ")}`,
];

const Cli = ({ onClose }) => {
  return (
    <MacWindow onClose={onClose}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"VeereshP:~$"}
          promptLabelStyle={{ color: "green" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
