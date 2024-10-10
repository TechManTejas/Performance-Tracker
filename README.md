# Performance Tracker Widget

A real-time performance tracking widget for websites that displays network resource usage, page load times, and memory usage on a floating UI.

## Installation

```bash
npm install performance-tracker-widget


Here’s the markdown documentation for your project. This will cover an introduction, setup, usage, and build instructions.

---

# Performance Tracker Widget

A package to track and display real-time resource usage on websites. The performance tracker widget shows CPU, memory, and other relevant metrics, using `chart.js` for visualizations. The widget is built using Vite for fast development and optimized builds.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Build](#build)
- [License](#license)

## Installation

To get started with the `performance-tracker-widget`, clone the repository and install the dependencies.

### Clone the Repository

```bash
git clone https://github.com/your-username/performance-tracker-widget.git
cd performance-tracker-widget
```

### Install Dependencies

Run the following command to install the required dependencies.

```bash
npm install
```

This will install:

- `chart.js` for creating charts to display performance data.
- `vite` as a bundler for development and production builds.

## Usage

To use the performance tracker widget on your website:

1. **Add the Widget to Your Website**: Include the bundled JavaScript file in your web application.
2. **Initialize the Widget**: Call the function to display real-time resource usage metrics.

Here’s how you can integrate it into your project:

1. **Import the Widget**:

```javascript
import PerformanceTracker from 'performance-tracker-widget';
```

2. **Initialize the Tracker**:

```javascript
PerformanceTracker.init({
  container: '#performance-container', // The DOM element where the widget will be rendered
  chartType: 'line',                    // The type of chart (e.g., 'line', 'bar')
});
```

Make sure to include a `div` with the ID `performance-container` in your HTML.

```html
<div id="performance-container"></div>
```

This will render the widget inside the container and display real-time performance data, such as memory usage and CPU stats.

## Development

To start developing with the widget, you can run the development server provided by Vite.

### Start the Development Server

```bash
npm run dev
```

This command will start Vite in development mode, allowing you to make changes and see live updates in the browser.

### Vite Configuration

The `vite.config.js` file is set up to bundle the project with the following configuration:

```javascript
// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/main.js',
      output: {
        format: 'es',
        entryFileNames: 'index.js',
      },
    },
  },
});
```

The configuration builds the project using the `es` module format and specifies the entry file as `src/main.js`.

## Build

To create a production-ready build, run:

```bash
npm run build
```

This will bundle the code and output the production files in the `dist/` directory. You can then deploy the widget by including the generated files in your web application.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

### Author

**Tejas Vaij**
