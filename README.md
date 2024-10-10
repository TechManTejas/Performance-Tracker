# Performance Tracker Widget

A real-time performance tracking widget for websites that displays network resource usage, page load times, and memory usage on a floating UI.

Here’s a rewritten and well-formatted version of the installation section:

---

## Performance Tracker Widget

The **Performance Tracker Widget** is an npm package designed to track and display real-time resource usage on websites. It visualizes metrics such as CPU and memory usage using `Chart.js` and leverages **Vite** for fast development and optimized builds.

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Build](#build)
- [License](#license)

## Installation

Follow the steps below to install and set up the **Performance Tracker Widget**:

### Step 1: Install the package

You can install the package from npm by running the following command in your terminal:

```bash
npm install performance-tracker-widget
```

### Step 2: Clone the repository

Alternatively, you can clone the project repository and manually install the dependencies:

```bash
git clone https://github.com/your-username/performance-tracker-widget.git
cd performance-tracker-widget
```

Once you’re inside the project directory, install the required dependencies:

```bash
npm install
```

---

This version enhances readability, adds clarity, and maintains a professional tone while ensuring technical accuracy.

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


