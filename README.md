
# secure-sand-box

This repository is a frontend monorepo for the Sandbox platform, designed for experimentation, prototyping, and validating UX concepts without affecting production systems. It includes Angular and React (Next.js) implementations, with automated workflows for quality, accessibility, and deployment.

## Repository Structure

- `pablo-sand-box/`  
  - Main Angular project.
  - Subfolder `checkbox-ui/`: React (Next.js) project exported as static site.

## Developer Instructions

### Angular

1. **Install dependencies**
	```bash
	cd pablo-sand-box
	npm ci
	```

2. **Development server**
	```bash
	ng serve
	```
	Visit [http://localhost:4200](http://localhost:4200)

3. **Production build**
	```bash
	ng build --output-path docs --base-href /secure-sand-box/
	```

### React (Next.js)

1. **Install dependencies**
	```bash
	cd pablo-sand-box/checkbox-ui
	npm ci
	```

2. **Development server**
	```bash
	npm run dev
	```
	Visit [http://localhost:3000](http://localhost:3000)

3. **Build and static export**
	```bash
	npm run build
	npx next export
	```

## Automated Deployment (GitHub Actions)

### Main Workflows

- `.github/workflows/deploy-ghpages.yml`  
  - Builds Angular and React projects.
  - Exports React as static and copies `index.html` to `404.html` to support client-side routing on GitHub Pages.
  - Publishes both projects to the `gh-pages` branch under `/docs` for GitHub Pages hosting.
  - **Production React URL:**  
	 `https://pablosanchezleytr.github.io/secure-sand-box/checkbox-ui/index.html`

- `.github/workflows/PullRequest.yml`  
  - Runs quality checks on every Pull Request:
	 - Prohibits use of `!important` in CSS/SCSS.
	 - Lints TypeScript and HTML code.
	 - Runs accessibility linter (axe-linter) on Angular.
	 - Performs UX and accessibility review assisted by AI (GitHub Copilot Models).

### Release Instructions

1. Push to the `main` branch.
2. The workflow will automatically build and publish both projects to GitHub Pages.
3. Static content is served from the `gh-pages` branch.

## Accessibility & Best Practices

See [`copilot-instructions.md`](.github/copilot-instructions.md) for:
- Accessibility rules (WCAG 2.1 AA).
- Use of design tokens and color contrast best practices.
- Coding and workflow recommendations.

> **Note:** There is no `agent.md` file in this repository, but you can document agent/AI instructions in `.md` files and reference them in the README and workflows to improve collaboration and onboarding.
