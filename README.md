# minions-projects

**Project definitions, variants, goals, status, and ownership**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-projects/sdk minions-sdk

# Python
pip install minions-projects

# CLI (global)
npm install -g @minions-projects/cli
```

---

## CLI

```bash
# Show help
projects --help
```

---

## Python SDK

```python
from minions_projects import create_client

client = create_client()
```

---

## Project Structure

```
minions-projects/
  packages/
    core/           # TypeScript core library (@minions-projects/sdk on npm)
    python/         # Python SDK (minions-projects on PyPI)
    cli/            # CLI tool (@minions-projects/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [projects.minions.help](https://projects.minions.help)
- Blog: [projects.minions.blog](https://projects.minions.blog)
- App: [projects.minions.wtf](https://projects.minions.wtf)

---

## License

[MIT](LICENSE)
