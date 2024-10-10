# Performance Tracker Widget

A real-time performance tracking widget for websites that displays network resource usage, page load times, and memory usage on a floating UI.

## Installation

```bash
npm install performance-tracker-widget

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


