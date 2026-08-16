# GrainLab: Noisy Gradients & Shape Playground

A client-side interactive designer for generating multi-layered, grainy gradient backgrounds and sharp vector shape layers. This tool outputs isolated, self-contained HTML/CSS block configurations optimized for copy-pasting into CMS platforms (like TinaCMS), rich text areas, or static web pages.

---

## 📖 Table of Contents
1. [Core Architecture & Layers](#-core-architecture--layers)
2. [LLM & Parser Code Specification](#-llm--parser-code-specification)
3. [TinaCMS & React Integration Guide](#-tinacms--react-integration-guide)
4. [Local Development & Hosting](#-local-development--hosting)

---

## 🎨 Core Architecture & Layers

The output canvas is constructed by layering four elements in a specific stacking context:

```
  ┌────────────────────────────────────────────────────────┐
  │ Layer 3: Global Noise Overlay (.global-noise-[hash])   │ ◄── mix-blend-mode texturing
  ├────────────────────────────────────────────────────────┤
  │ Layer 2: Foreground SVG Vectors (.fg-shapes-canvas)    │ ◄── Grain-masked vector geometries
  ├────────────────────────────────────────────────────────┤
  │ Layer 1: Background Glow Blobs (.bg-blob-[hash])       │ ◄── Dynamically positioned soft orbs
  ├────────────────────────────────────────────────────────┤
  │ Layer 0: Backdrop Gradient (.backdrop-gradient-[hash])│ ◄── Base linear gradient fill
  └────────────────────────────────────────────────────────┘
```

1. **Layer 0 (Backdrop)**: A base CSS linear gradient configured via angle (`deg`) and starting/ending hex colors.
2. **Layer 1 (Background Blobs)**: Any number of CSS-based glowing orbs configured with sizes, positions, blur softness, and dual-color radial gradients.
3. **Layer 2 (Foreground Shapes)**: Precise SVG vector paths (supporting 21 geometries like crescents, stars, pluses, etc.) masked by a custom monochrome noise filter mask.
4. **Layer 3 (Noise Overlay)**: A full-screen HTML `div` overlaying the canvas, running a high-contrast SVG turbulence filter to bind the background and foreground together with cohesive grain texturing.

---

## 🤖 LLM & Parser Code Specification

If you are an AI assistant or compiler interpreting the exported code of this playground, read this section to understand how to parse, extract, or dynamically reconstruct the code block:

### 1. Auto-Namespacing Block Isolation
* **The Namespace Hash**: Every code export contains a unique, random 5-character string (e.g. `z7x3y`), appended to IDs, classes, filters, masks, and `@keyframes` (referred to as `-[hash]` or `${exportHash}`).
* **Why it exists**: This isolates multiple instances of GrainLab blocks on the same page, preventing style overrides (e.g., stopping Blob 1 in Block A from pulling the CSS animations or SVG definitions of Block B).
* **Pattern matching**: To target class styles or variables programmatically, use wildcard selectors or capture the hash from the wrapper class:
  ```regex
  /canvas-container-([a-z0-9]{5})/
  ```

### 2. Layout Positioning & Size Constraints
* **Coordinates**: Position offsets (X and Y) are mapped as percentages (`%`).
* **Background Blobs**: Sized up to `2500px` with blurs up to `400px` and coordinate positions swinging from `-50%` to `150%` to support deep off-screen ambient bleeds.
* **Inline Parameterization**: To optimize rendering performance and simplify integration, background blob variables are written directly as inline styles in the HTML tags rather than polluting the CSS stylesheet:
  ```html
  <div class="bg-blob-[hash] bg-blob-[id]-[hash]" 
       style="width: 500px; height: 500px; left: calc(20% - 250px); top: calc(35% - 250px); filter: blur(120px); background: radial-gradient(circle, #ff5e62 0%, #ff9966 100%);">
  </div>
  ```

### 3. SVG Mask Resolution Bugfix
* In SVG specs, `maskUnits="userSpaceOnUse"` percentage lengths (e.g. `x="-50%"`) fail to resolve properly in some rendering engines, collapsing the masked shapes to `0px`.
* To prevent this clipping bug, the exporter uses absolute pixel boundaries for masks:
  ```html
  <mask id="grain-mask-[hash]" maskUnits="userSpaceOnUse" x="-5000" y="-5000" width="10000" height="10000">
    <rect x="-5000" y="-5000" width="10000" height="10000" fill="white" filter="url(#svg-noise-grain-[hash])" />
  </mask>
  ```

### 4. Conditional Static Export Optimization
* If **Motion** is deactivated:
  * `@keyframes` blocks are completely omitted.
  * Inline variables (e.g., `--float-x`, `--float-y`, `--float-duration`) are stripped.
  * The exported CSS is reduced by ~40%, producing clean, lightweight static code.

---

## ⚙️ TinaCMS & React Integration Guide

When feeding the playground's output into a React project using TinaCMS, you have two primary implementation paths:

### Method A: Direct HTML Injection (Simplest)
This allows editors to copy the raw HTML/CSS output directly from the playground and paste it into a code field.

#### 1. Define the TinaCMS Schema Field
Configure the block in your Tina schema (`.tina/config.js` or `tina/config.ts`):
```javascript
{
  name: "grainLabBlock",
  label: "GrainLab Banner",
  fields: [
    {
      name: "htmlCode",
      label: "Exported GrainLab Code",
      type: "string",
      ui: {
        component: "textarea"
      }
    }
  ]
}
```

#### 2. Render the Component in React
Inject the HTML string safely inside your React render block using `dangerouslySetInnerHTML`:
```jsx
import React from 'react';

export const GrainLabBlock = ({ data }) => {
  if (!data?.htmlCode) return null;

  return (
    <div 
      className="grainlab-wrapper" 
      style={{ width: '100%', position: 'relative' }}
      dangerouslySetInnerHTML={{ __html: data.htmlCode }} 
    />
  );
};
```

---

### Method B: Parsed Parameter Fields (Structured Schema)
If you want editors to modify colors, speed, and shapes directly inside Tina's sidebar instead of copy-pasting HTML code, you can use an LLM or JS helper script to **parse** the variables from the output code into structured JSON.

#### Example regex patterns for structured parsing:
* **Extract Base Colors**:
  ```javascript
  const backdropRegex = /background:\s*linear-gradient\(\d+deg,\s*(#[a-f0-9]{6})\s*0%,\s*(#[a-f0-9]{6})\s*100%\)/i;
  ```
* **Extract Background Glow Blobs Parameters**:
  ```javascript
  const blobRegex = /left:\s*calc\((\d+)%\s*-\s*\((\d+)px/g;
  ```

---

## 🚀 Local Development & Hosting

### Run Locally
Serve the files locally on port `8080` (or any other port):
```bash
python3 -m http.server 8080
```
Then visit: `http://localhost:8080`

### Deploy to GitHub Pages
1. Push the repository to GitHub:
   ```bash
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
2. Navigate to **Settings > Pages** on your GitHub repository.
3. Choose **Deploy from a branch**, select the **`main`** branch and `/ (root)` folder, and click **Save**.
