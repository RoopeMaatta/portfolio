# Portfolio and Component Playground

Welcome to my personal portfolio and component playground! This site serves as an introduction to who I am, showcasing my work, skills, and CV across full-stack development, architecture, and crafts.

Using custom React components powered by [styled-components](https://styled-components.com/) and a centralized theme object, this site establishes a start for the **Saana Design System**. It's also a sandbox for testing and experimenting with new components.



<div style="display: flex; justify-content: center; gap: 36px; ">
  <img src="https://res.cloudinary.com/dbm0udwcq/image/upload/v1730905733/IMG_2150_h1adtt.jpg" alt="Image 1" width="45%">
  <img src="https://res.cloudinary.com/dbm0udwcq/image/upload/v1730905737/IMG_2151_xgrxhc.jpg" alt="Image 2" width="45%">
  
  ---
  <img src="https://res.cloudinary.com/dbm0udwcq/image/upload/v1730905734/IMG_2149_v8nlt9.jpg" alt="Image 3" width="45%">
  <img src="https://res.cloudinary.com/dbm0udwcq/image/upload/v1730905734/IMG_2154_jtaorp.jpg" alt="Image 4" width="45%">
  
  ---
  <img src="https://res.cloudinary.com/dbm0udwcq/image/upload/v1730905733/IMG_3031_gdi4mq.jpg" alt="Image 5" width="45%">
  <img src="https://res.cloudinary.com/dbm0udwcq/image/upload/v1730905732/IMG_3032_uausaj.jpg" alt="Image 6" width="45%">
</div>

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Upcoming Features](#upcoming-features)
- [Known Issues](#known-issues)
- [Technologies Used](#technologies-used)
- [Development](#development)
- [Contact](#contact)

## Live Demo

Check out the live site here: [roopemaatta.github.io/portfolio](https://roopemaatta.github.io/portfolio/)

## Features

- **A CV & Portfolio**: Showcases my expertise in full-stack development, architecture, and crafts such as silver jewelry, digital painting, and watercolors, among others.

- **A Site Built With Custom React Components**: Built from scratch to establish a unique design system using styled-components and a centralized theme object as a base.

- **A Centralized Theme Object That Listens**: The theme object is constructed to detect whether the user has light mode or dark mode enabled and adapts the colors accordingly. It also responds to screen size, adapting typography so that larger fonts scale appropriately on smaller screens.

- **Responsive Sizing Based on a Grid**: Depending on screen size, we use a 4-8-12 column grid. You can see the grid in action by pressing the "Show Grid" button in the footer of the page.

- **Spacing With a Spacer Component**: For clear code readability and easier visual representation of element spacing, a custom spacer component was used. You can see it in action by pressing the "Show Spacer" button in the footer of the page.

## Upcoming Features

- **Internationalization (i18n)**: Implementing [i18next](https://www.i18next.com/) to support English and Finnish language options.

- **Expanded Component Pages**: Adding more pages for Saana Design System component presentation.

- **Foundation Pages Update**: Reworking and updating the existing design system foundation pages (spacing, breakpoints, and radius).

## Known Issues

- **PDF Rendering on iOS Safari**: When `ImageComponent` sources a PDF file, it uses an `iframe`, causing inconsistencies in iOS Safari browsers.

- **Masonry Columns Rendering**: The masonry columns wrapper renders children twice—first hidden to calculate height, then again to place elements into proper columns. Seeking a more efficient solution.

- **Nested Unknown Routes Do Not Redirect Correctly**: Currently, unknown routes that are deeply nested redirect to a blank homepage instead of the intended custom 404 page. This is due to GitHub Pages' handling of non-existent paths in SPA deployments. A custom 404.html redirect setup was tested to resolve this, but I coundn't get it to work yet.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **styled-components**: For styling React components using CSS-in-JS.
- **React Router DOM**: Declarative routing for React web applications.
- **Lodash**: Utility library for JavaScript.
- **Feather Icons / React Feather**: Icon components for React.
- **React Select**: Select component for React.
- **Vite**: Next Generation Frontend Tooling.
- **ESLint**: Linting utility for JavaScript and JSX.
- **Prettier**: Code formatter.
- **GitHub Pages**: For deploying the site.

For a full list of dependencies, refer to the [package.json](https://github.com/RoopeMaatta/portfolio/blob/main/package.json).

## Development

To set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/RoopeMaatta/portfolio.git
   ```

2. **Install dependencies**:

   Navigate to the project directory:

   ```bash
   cd portfolio
   ```

   Install the necessary packages:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

## Contact

Feel free to reach out:

**Email:** [roopemaatta(at)gmail.com](mailto:roopemaatta@gmail.com)

**Portfolio:** [roopemaatta.github.io/portfolio](https://roopemaatta.github.io/portfolio/)

*Cheers! It was nice of you to read all the way here. 😊*

*As a bonus tidbit, 95% of this project was completed on my iPad using GitHub Codespaces and VSCode online.*

