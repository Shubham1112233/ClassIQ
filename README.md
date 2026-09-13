# ClassIQ — EdTech Website

A responsive and performance-optimized EdTech website implemented from the [ClassIQ Figma design](https://www.figma.com/) using plain HTML, CSS, and JavaScript.

## Live Demo

* **Landing Page:** https://class-iq-ten.vercel.app/
* **Course Dashboard:** https://class-iq-ten.vercel.app/dashboard.html
* **Source Code:** https://github.com/Shubham1112233/ClassIQ

## Overview

ClassIQ is a static EdTech website designed to provide a clean, modern, and responsive learning experience. The implementation focuses on accurately translating the Figma design into a functional website while maintaining a lightweight codebase, optimized assets, accessibility, and fast page loading.

## Requirements

* Accurately implement the design provided in the Figma file.
* Ensure responsive layouts across desktop and mobile devices.
* Optimize page-load performance, asset sizes, and code efficiency.
* Maintain a clean, organized, and maintainable codebase.

## Features

* Responsive landing page based on the Figma design.
* Course dashboard interface.
* Sign-in and sign-up pages.
* Mobile navigation with menu toggle functionality.
* Subscription form validation.
* Authentication form validation.
* Accessible navigation and form controls.
* Responsive layouts for desktop and mobile screen sizes.
* Reduced-motion support for improved accessibility.

## Technology Stack

* **HTML5** — Semantic page structure.
* **CSS3** — Responsive layouts, styling, and animations.
* **JavaScript** — Navigation functionality and form validation.
* **SVG** — Interface icons exported from Figma.
* **WebP and PNG** — Optimized image assets.
* **Vercel** — Deployment and hosting.

The website does not use a JavaScript framework, build step, or runtime dependencies.

## Project Structure

```text
ClassIQ/
├── index.html              # Landing page
├── dashboard.html          # Course dashboard
├── signin.html             # Login page
├── signup.html             # Registration page
├── css/
│   └── style.css           # Shared stylesheet
├── js/
│   └── main.js             # Navigation and form validation
└── assets/
    ├── icons/              # Figma-exported SVG icons
    └── images/             # Optimized website images
```

## Performance and Optimization

Performance was a key consideration during implementation. The website was optimized to reduce asset sizes, minimize unnecessary browser work, improve loading behavior, and maintain a stable layout.

### Image Optimization

* Converted PNG images to WebP to reduce image file sizes.
* Retained PNG fallback support through the `<picture>` element for compatible image delivery.
* Reduced image assets from approximately **490 KB to 66 KB**.
* Applied `loading="lazy"` and `decoding="async"` to below-the-fold images.
* Used `fetchpriority="high"` for the hero image because it is the primary visual element.
* Added explicit `width` and `height` attributes to images to reserve layout space and reduce cumulative layout shift.

### Font Optimization

* Removed unused font weights.
* Consolidated font loading across the website to improve browser caching.
* Added `preconnect` to the font host.
* Used `display=swap` to allow text to render using a fallback font while web fonts load.

### SVG and Code Optimization

* Removed unnecessary SVG filter definitions from exported icons.
* Used shared CSS and JavaScript files across all pages.
* Kept the implementation lightweight with no framework, build step, or runtime dependencies.
* Retained static header and footer markup in each HTML page to avoid JavaScript-based content injection and preserve immediately available navigation markup.

### Accessibility and Motion

* Added a skip-navigation link.
* Implemented visible focus indicators.
* Added accessible labels for form fields.
* Used `aria-expanded` for mobile navigation state.
* Added `aria-live` regions for form validation messages.
* Implemented `prefers-reduced-motion` support to respect users' motion preferences.

## Performance Metrics

The landing page was tested using **GTmetrix**, powered by Lighthouse.

### GTmetrix Report

| Metric                         |                            Result |
| ------------------------------ | --------------------------------: |
| GTmetrix Grade                 |                             **A** |
| Performance Score              |                          **100%** |
| Structure Score                |                          **100%** |
| Largest Contentful Paint (LCP) |                        **365 ms** |
| Total Blocking Time (TBT)      |                          **0 ms** |
| Cumulative Layout Shift (CLS)  |                             **0** |
| Total Page Size                |          **Approximately 116 KB** |
| Compressed Page Size           | **Approximately 76 KB over gzip** |

### Loading Timeline

| Metric                         | Result |
| ------------------------------ | -----: |
| Time to First Byte (TTFB)      |  75 ms |
| Redirect Time                  |   0 ms |
| Connection Time                |  48 ms |
| Backend Processing             |  27 ms |
| First Contentful Paint (FCP)   | 366 ms |
| Largest Contentful Paint (LCP) | 366 ms |
| Time to Interactive (TTI)      | 366 ms |
| Onload Time                    | 354 ms |
| Fully Loaded Time              | 436 ms |

### Test Environment

* **Test URL:** https://class-iq-ten.vercel.app/
* **Test Server Location:** Seattle, USA
* **Browser:** Google Chrome 142.0.0.0
* **Lighthouse Version:** 12.6.1
* **Report Date:** September 13, 2026

> Performance results may vary depending on the test location, network conditions, browser, and server response time.

## Design and Implementation

The website was developed based on the *ClassIQ — EdTech Web Design* Figma community file by Raunak Mishra.

The implementation prioritizes:

* Accurate design reproduction.
* Responsive behavior across screen sizes.
* Reusable styling through a shared stylesheet.
* Minimal JavaScript for interactive functionality.
* Optimized assets for efficient loading.
* Semantic HTML and accessible user interactions.

## Deployment

The website is deployed on Vercel and is available at:

https://class-iq-ten.vercel.app/

## License

This project was created as an implementation of the provided ClassIQ Figma design.
