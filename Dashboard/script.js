var sidebarOpen = false;

var siderbar = document.getElementById("sidebar");

function openSidebar() {
    if (!sidebarOpen) {
        sidebarOpen.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebarOpen.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

const barChartOptions = {
    series: [
        {
            data: [10, 8, 6, 4, 2],
            name: 'Products',
        },
    ],
    chart: {
        type: 'bar',
        background: 'transparent',
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: '40%',
        },
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        borderColor: '#55596e',
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: '#f5f7ff',
        },
        show: true,
        position: 'top',
    },
    stroke: {
        colors: ['transparent'],
        show: true,
        width: 2,
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: 'dark',
    },
    xaxis: {
        categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
        title: {
            style: {
                color: '#f5f7ff',
            },
        },
        axisBorder: {
            show: true,
            color: '#55596e',
        },
        axisTicks: {
            show: true,
            color: '#55596e',
        },
        labels: {
            style: {
                colors: '#f5f7ff',
            },
        },
    },
    yaxis: {
        title: {
            text: 'Count',
            style: {
                color: '#f5f7ff',
            },
        },
        axisBorder: {
            color: '#55596e',
            show: true,
        },
        axisTicks: {
            color: '#55596e',
            show: true,
        },
        labels: {
            style: {
                colors: '#f5f7ff',
            },
        },
    },
};

const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
);
barChart.render();

const areaChartOptions = {
    series: [
        {
            name: 'Purchase Orders',
            data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
            name: 'Sales Orders',
            data: [11, 32, 45, 32, 34, 52, 41],
        },
    ],
    chart: {
        type: 'area',
        background: 'transparent',
        height: 350,
        stacked: false,
        toolbar: {
            show: false,
        },
    },
    colors: ['#00ab57', '#d50000'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    dataLabels: {
        enabled: false,
    },
    fill: {
        gradient: {
            opacityFrom: 0.4,
            opacityTo: 0.1,
            shadeIntensity: 1,
            stops: [0, 100],
            type: 'vertical',
        },
        type: 'gradient',
    },
    grid: {
        borderColor: '#55596e',
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: '#f5f7ff',
        },
        show: true,
        position: 'top',
    },
    markers: {
        size: 6,
        strokeColors: '#1b2635',
        strokeWidth: 3,
    },
    stroke: {
        curve: 'smooth',
    },
    xaxis: {
        axisBorder: {
            color: '#55596e',
            show: true,
        },
        axisTicks: {
            color: '#55596e',
            show: true,
        },
        labels: {
            offsetY: 5,
            style: {
                colors: '#f5f7ff',
            },
        },
    },
    yaxis: [
        {
            title: {
                text: 'Purchase Orders',
                style: {
                    color: '#f5f7ff',
                },
            },
            labels: {
                style: {
                    colors: ['#f5f7ff'],
                },
            },
        },
        {
            opposite: true,
            title: {
                text: 'Sales Orders',
                style: {
                    color: '#f5f7ff',
                },
            },
            labels: {
                style: {
                    colors: ['#f5f7ff'],
                },
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
        theme: 'dark',
    },
};

const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
);
areaChart.render();

var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
        width: 480,
        type: 'pie',
    },
    labels: ['Phone', 'Laptop', 'Camera', 'Headphone', 'Monitor'],
    colors: ['#e04a4aff', '#276c68ff', '#31b214ff', '#5767d0ff', '#fa970cff'],
    stroke: {
                show: true,
                width: 0,       
                colors: ['#1d2634'] // or match your background color
            },
    dataLabels: {
        enabled: true,
        style: {
            fontSize: '16px',  // bigger text
            colors: ['#fff']
        }
    },
    legend: {
        labels: {
            colors: '#ffffffff',
        },
        position: 'left',
        horizontalAlign: 'center',
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                colors: '#000000ff',
                position: 'bottom'
            },
            

        }
    }]
};

var chart = new ApexCharts(document.querySelector("#pie-chart"), options);
chart.render();


var series = {
    monthDataSeries1: {
        prices: [7000.85, 7326.0, 8122.9, 8165.5, 7300.7, 7800.7],
        dates: ["2025-01-01", "2025-01-02", "2025-01-03", "2025-01-04", "2025-01-05", "2025-01-06"]
    }
};

var Stockoptions = {
    series: [{
        name: "STOCKS",
        data: series.monthDataSeries1.prices
    }],
    chart: {
        type: 'area',
        height: 350,
        background: 'transparent',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    colors: ['#00E396'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 100]
        }
    },
    title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left',
        style: {
            color: '#f5f7ff',
            fontSize: '16px'
        }
    },
    subtitle: {
        text: 'Price Movements',
        align: 'left',
        style: {
            color: '#aaa',
            fontSize: '12px'
        }
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
        type: 'datetime',
        labels: {
            style: {
                colors: '#f5f7ff'
            }
        },
        axisBorder: {
            color: '#55596e'
        },
        axisTicks: {
            color: '#55596e'
        }
    },
    yaxis: {
        opposite: true,
        labels: {
            style: {
                colors: '#f5f7ff'
            }
        }
    },
    grid: {
        borderColor: '#55596e'
    },
    tooltip: {
        theme: 'dark'
    },
    legend: {
        horizontalAlign: 'left',
        labels: {
            colors: '#f5f7ff'
        }
    }
};

var Stockchart = new ApexCharts(document.querySelector("#stock-chart"), Stockoptions);
Stockchart.render();

