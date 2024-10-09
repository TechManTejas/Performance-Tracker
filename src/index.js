import Chart from 'chart.js/auto';
import './style.css';

export function getResourceUsage() {
    const resources = window.performance.getEntriesByType('resource');
    return {
        networkResources: resources.map(resource => ({
            name: resource.name,
            type: resource.initiatorType,
            duration: resource.duration.toFixed(2),
            transferSize: (resource.transferSize / 1024).toFixed(2)
        })),
        pageLoadMetrics: {
            domContentLoaded: window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart,
            load: window.performance.timing.loadEventEnd - window.performance.timing.navigationStart,
        },
        memoryUsage: window.performance.memory
            ? {
                  usedMemory: (window.performance.memory.usedJSHeapSize / 1024 / 1024).toFixed(2),
                  totalMemory: (window.performance.memory.totalJSHeapSize / 1024 / 1024).toFixed(2),
              }
            : { usedMemory: 0, totalMemory: 0 },
    };
}

export function initPerformanceTracker() {
    createFloatingWidget();
    const charts = initCharts();

    setInterval(() => {
        const resourceUsage = getResourceUsage();
        updateCharts(charts, resourceUsage);
        updateResourceList(resourceUsage);
    }, 2000);
}

function createFloatingWidget() {
    const widget = document.createElement('div');
    widget.id = 'performance-widget';
    widget.style.position = 'fixed';
    widget.style.bottom = '10px';
    widget.style.right = '10px';
    widget.style.backgroundColor = '#fff';
    widget.style.border = '1px solid #ccc';
    widget.style.padding = '10px';
    widget.style.zIndex = '9999';
    widget.innerHTML = `
        <canvas id="networkChart" width="400" height="200"></canvas>
        <canvas id="memoryChart" width="400" height="200"></canvas>
        <ul id="resourceList"></ul>
    `;
    document.body.appendChild(widget);
}

function initCharts() {
    const networkCtx = document.getElementById('networkChart').getContext('2d');
    const memoryCtx = document.getElementById('memoryChart').getContext('2d');

    const networkChart = new Chart(networkCtx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Resource Load Duration (ms)',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    const memoryChart = new Chart(memoryCtx, {
        type: 'bar',
        data: {
            labels: ['Used Memory (MB)', 'Total Memory (MB)'],
            datasets: [{
                label: 'Memory Usage',
                data: [0, 0],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    return { networkChart, memoryChart };
}

function updateCharts(charts, resourceUsage) {
    const { networkResources, memoryUsage } = resourceUsage;

    charts.networkChart.data.labels = networkResources.map(res => res.name);
    charts.networkChart.data.datasets[0].data = networkResources.map(res => res.duration);
    charts.networkChart.update();

    charts.memoryChart.data.datasets[0].data = [
        parseFloat(memoryUsage.usedMemory),
        parseFloat(memoryUsage.totalMemory)
    ];
    charts.memoryChart.update();
}

function updateResourceList(resourceUsage) {
    const resourceList = document.getElementById('resourceList');
    resourceList.innerHTML = ''; // Clear the list before updating

    resourceUsage.networkResources.forEach(resource => {
        const li = document.createElement('li');
        li.textContent = `${resource.name} - ${resource.type} - ${resource.duration} ms - ${resource.transferSize} KB`;
        resourceList.appendChild(li);
    });
}
