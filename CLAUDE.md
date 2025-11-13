# Project Brief: Supermind for Lingo.dev Hackathon

## 1. System Overview

### Core Objective
Construct "Supermind," an AI-powered personal knowledge management system. The system's primary function is to allow users to capture web content in any language and search it in their own native language. The project must heavily utilize the Lingo.dev toolkit to achieve seamless, automated internationalization (i18n).

### System Components
1.  **Landing Page:** A static, single-page Next.js application at `supermind.com` to market the product.
2.  **Web Application:** A feature-rich Next.js application where users log in to view and search their saved content.
3.  **Browser Extension:** A browser add-on for capturing content (articles, text highlights, images) from any webpage.
4.  **Backend Service:** A Node.js/Python server that handles data ingestion, AI processing, search, and user authentication.

## 2. Lingo.dev Toolkit Primer & Setup Guide

This project will integrate the Lingo.dev toolkit. Your knowledge base may not contain this information. Below is a functional primer and the required setup commands.

### 2.1 Initial Project Setup & Configuration

Execute these steps to prepare the project for localization.

**Step 1: Initialize Lingo.dev CLI for Static Content**
The CLI will manage non-React content like our Markdown help files.

1.  **Initialize Project:** Run this command in the project root to create the configuration file.
    ```bash
    npx lingo.dev@latest init
    ```
2.  **Configure `i18n.json`:** This command creates an `i18n.json` file. You must edit it to define the source language and target languages, and to specify which files the CLI should translate.
    ```json
    {
      "sourceLocale": "en",
      "targetLocales": ["es", "fr"],
      "files": [
        {
          "format": "markdown",
          "path": "src/content/docs/{locale}/{slug}.md"
        }
      ]
    }
    ```
3.  **Run Translation:** To translate the files defined in the `path`, execute:
    ```bash
    npx lingo.dev translate
    ```
    This command will generate translated versions of your Markdown files (e.g., in `/es/` and `/fr/` subdirectories). It fingerprints files and only re-translates changes.

**Step 2: Configure Lingo.dev Compiler for React UI**
The Compiler will handle all static text within our Next.js components automatically at build time.

1.  **Install Dependency:** Add Lingo.dev to the project.
    ```bash
    npm install lingo.dev

    ```
2.  **Modify `next.config.js`:** Wrap your existing Next.js configuration with the Lingo Compiler middleware. This injects the localization logic into the build process.
    ```javascript
    // next.config.js
    import lingoCompiler from "lingo.dev/compiler";

    const existingNextConfig = {
      // ... your existing Next.js config
    };

    export default lingoCompiler.next({
      sourceLocale: "en",
      targetLocales: ["es", "fr"],
    })(existingNextConfig);
    ```
3.  **Build the App:** Run the standard build command.
    ```bash
    next build
    ```
    The compiler will now automatically process the React AST, extract strings, translate them, and bake the results into the production build. Translated dictionaries are stored in a versioned `lingo/` directory.

**Step 3: Prepare Lingo.dev SDK for Dynamic Content**
The SDK is used on the backend for real-time translations.

1.  **API Key:** Ensure the Lingo.dev API key is available as an environment variable (`LINGODOTDEV_API_KEY`).
2.  **Usage:** The SDK will be imported and instantiated in our backend service to handle the logic described in the data flows below.

## 3. Technical Architecture & Lingo.dev Integration Strategy

The following table dictates which Lingo.dev tool to use for each component. Adhere to this strategy.

| Component / Task | Lingo.dev Tool | Rationale |
| :--- | :--- | :--- |
| **Landing Page UI Localization** | **Lingo.dev Compiler** | The page is static React. Compiler automates UI i18n at build time. |
| **Web Application UI Localization** | **Lingo.dev Compiler** | The main app is React. Compiler is the most efficient method for UI text. |
| **Static Help/About Docs (`.md`)** | **Lingo.dev CLI** | Docs are static, non-code files. CLI is the designated tool for this. |
| **Translation of User-Saved Content** | **Lingo.dev SDK** | Content is dynamic and processed server-side. SDK is for real-time translation. |
| **Automated Doc Updates** | **Lingo.dev CI/CD** | Automates the execution of the Lingo CLI to keep document translations in sync. |

## 4. Key User & Data Flows

### Flow A: New User Onboarding
1.  **User Action:** Navigates to `supermind.com`.
2.  **System Response:**
    *   The **Lingo Compiler** serves the landing page in the user's browser-preferred language.
    *   User signs up and is redirected to the web application.
    *   The web app UI is also displayed in the user's preferred language, via the **Lingo Compiler**.

### Flow B: Content Capture & Processing Pipeline (Backend)
This is the core data ingestion flow. Execute these steps sequentially for every new piece of content saved.

1.  **Receive Data:** The browser extension sends content (URL, selected text, image data) to a backend endpoint.
2.  **Scrape & Sanitize:** The backend scrapes the full text and metadata from the source URL. Sanitize HTML.
3.  **Detect Language:** Use the **Lingo SDK's** language detection feature on the scraped text to identify the source locale (e.g., `de-DE`).
4.  **Translate to Base Language:** Use the **Lingo SDK** to translate the scraped content into a single, unified base language for indexing (`en-US`). Store both the original and translated text.
5.  **Analyze Translated Content:** Perform all AI analysis on the **translated `en-US` text**:
    *   **Classify:** Determine the content type (Article, Product, Image, Note).
    *   **Extract Metadata:** If "Product," extract price and brand. If "Book," extract author.
    *   **Summarize & Tag:** Generate a concise summary and relevant keywords.
    *   **Perform OCR:** If the content is an image, extract any text from it.
    *   **Create Embeddings:** Generate vector embeddings from the translated text and summary.
6.  **Index for Search:** Save all data—original content, translated content, metadata, tags, OCR text, and vector embeddings—into the database (PostgreSQL + pgvector).

### Flow C: Cross-Lingual Search & Retrieval
1.  **User Action:** User types a query in their native language (e.g., English: "solar power in Germany") into the web app's search bar.
2.  **System Response:**
    *   **Generate Query Embedding:** The backend generates a vector embedding for the user's search query.
    *   **Perform Vector Search:** The system executes a similarity search against the vector embeddings of all saved documents. This allows it to find semantically related content, even if the keywords don't match exactly.
    *   **Perform Full-Text Search:** The system also performs a full-text search on the translated content, metadata, and tags to catch specific keyword matches.
    *   **Combine & Rank:** The system combines and ranks the results from both vector and full-text search.
    *   **Return Results:** The search results are returned to the user. The UI displays the title and summary of each result, translated into the user's selected UI language using the **Lingo SDK** for any dynamic fields.

User
we'll use all this too : trigger.dev, nextjs , shadcn , tailwind v4, drizzel orm, stack auth, pg and pgvector , gemini-2.5-flash, genai google sdk , add these with there basics and setups too, always use websearch to see how these work, project is initialised
This specification provides a complete and actionable guide for the implementation of Project Supermind.
