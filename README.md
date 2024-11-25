# Web Data Extractor

A powerful web scraping application that allows you to extract structured JSON data from any website. This tool enables users to define custom data attributes and process multiple URLs efficiently.

## Features

- 🎯 Define custom attributes to extract from web pages
- 📑 Batch URL processing
- 🔄 Export data in structured JSON format
- 🎨 Clean and intuitive user interface
- ⚡ Built with Next.js and TypeScript for optimal performance

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm
- PostgreSQL database

### TODO

- [x] Make it deploy (vercel)
- [ ] Add basic UI with mock data
- [ ] Adjust build config
- [ ] Setup a database (supabase)
- [ ] Attach database to the UI
- [ ] Add auth (clerk)
- [ ] Add creation of the JSON schemas
- [ ] Add error handling (sentry)
- [ ] Add UI to view, edit and delete the JSON schemas
- [ ] Add UI to view and delete extracted data for the selected schema
- [ ] Add actual extraction of the data
- [ ] Add exporting the extracted data in CSV and JSON formats
- [ ] Add Analytics (posthog)
- [ ] Add templates for the JSON schemas (e.g. for the websites with the tables) with the ability to copy and use and edit them
- [ ] Add API access and API_KEYs for the users
- [ ] Add rate limiting (upstash)
- [ ] Add cron jobs for scheduled extractions (optional)

