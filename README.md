# Minimalist Astro CV

A simple Astro CV inspired by [Minimalist CV by Bartosz Jarocki](https://github.com/BartoszJarocki/cv) with some extra features.

Built with Astro 7 and Tailwind CSS 4.

## Features

- i18n
- JSON Resume support
- Responsive

## Content

[Astro content collections](https://docs.astro.build/en/guides/content-collections/) were used to define the content, however the pages have to be assembled *manually*. I decided to do so to have more control over how each page looks. After all this is just a starting template which should be further customized.

## JSON Resume

The content collection schema for the resume basically matches the [JSON Resume schema](https://jsonresume.org/schema/) and under `/api/{locale}.json` one can find a json representation of your resume. 

The path to the image gets replaced but you have to set the `site` config value in [`astro.config.mjs`](./astro.config.mjs)(for example `https://example.com` is going to result in  `https://example.com/_astro/photo.MK1hhBVF.jpg`)

## Development

Requires Node.js 22.12 or newer. The project pins pnpm through Corepack so local development and CI use the same package manager version.

1. Enable Corepack and install dependencies
	```sh
	corepack enable
	pnpm install
	```
1. Start the dev server
	```sh
	pnpm dev
	```
1. Run the full validation and production build
	```sh
	pnpm build
	pnpm lint
	pnpm format:check
	```

## Deployment

Pushes to `main` are automatically built and deployed to GitHub Pages by [the deployment workflow](./.github/workflows/deploy.yml). In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
