# AGENT.md

## Purpose

This file provides AI agents (such as GitHub Copilot Chat, Copilot Code Review, and other tools) with contextual instructions for working within the Pablo Sandbox repository. It mirrors the content of `copilot-instructions.md` to ensure consistent behavior across all AI integrations.

# Copilot Coding Agent Instructions for Pablo Sandbox

## Repository Overview

This repository, **Pablo Sandbox**, serves as a frontend module within the Sandbox platform. It is a large-scale JavaScript monorepo that supports multiple legal products through a shared platform codebase and product-specific implementations.

**Pablo Sandbox** is a module responsible for the frontend in Sandbox
It is large-scale JavaScript monorepo that serves multiple legal products with the shared Platform codebase and product-specific implementations.

## Development Workflow

1. **Branching Strategy**: Follow the Git branching strategy outlined in the [repository wiki](https://github.com/your-org/your-repo/wiki/Branching-Strategy).
2. **Code Reviews**: All changes must be reviewed by at least one other developer before merging.
3. **Testing**: Write unit tests for new features and ensure all tests pass before submitting a pull request.
4. **Documentation**: Update documentation to reflect any changes in functionality or API.

## Tools and Technologies

- **Frameworks**: Next.js, React, Angular
- **Styling**: Tailwind CSS
- **State Management**: Redux, Zustand
- **Testing**: Jest, React Testing Library

### Accessibility Requirements

**Thomson Reuters Digital Accessibility Policy**

We prioritize creating and maintaining products, services, and websites that are accessible and usable by all people.

**Compliance Levels:**

- **[WCAG 2.1 AA Compliance](https://www.w3.org/TR/WCAG21/)** - Baseline requirements (Must-have)
- **Thomson Reuters Standard** – Accessibility UX best practices beyond WCAG 2.1 AA (Should-have)
- **Thomson Reuters Ideal** – Advanced accessibility enhancements for new products (Nice-to-have)

### Visual Accessibility Validation: Color Contrast

To ensure visual accessibility compliance, all CSS and SCSS styles must maintain sufficient contrast between text and background colors.

#### Validation Rule: `color-contrast`

All visible text must meet WCAG 2.1 AA contrast ratios:

- **Normal text**: Minimum contrast ratio of **4.5:1**
- **Large text** (≥18pt or bold ≥14pt): Minimum contrast ratio of **3:1**

#### Recommended Practices

- Use design tokens from `@saffron/core-styles` for consistent and accessible color usage.
- Avoid low-contrast combinations such as light gray text on white backgrounds.

```scss
.my-label {
    color: var(--saf-color-background-inverse); // Example: #1A1A1A
    background-color: var(--saf-color-interactive-on-secondary-active); // Example: #FFFFFF
}
```

### Reference

- **[WCAG 2.1 AA Contrast Guidelines](https://www.w3.org/TR/WCAG21/#contrast-minimum)**