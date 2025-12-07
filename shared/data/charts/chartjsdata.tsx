
import { Chart, ArcElement, Tooltip, Legend, registerables } from "chart.js";
Chart.register(...registerables, ArcElement, Tooltip, Legend);

//Chartjs Line Chart
export const Option = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		y: {
			beginAtZero: true,
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		},
		x: {
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		}
	},
	cutout: 90,
};
export const Data = {
	type: "line",
	labels: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
	],
	datasets: [{
		label: 'My First dataset',
		backgroundColor: 'rgb(152, 95, 253)',
		borderColor: 'rgb(152, 95, 253)',
		data: [0, 10, 5, 2, 20, 30, 45],
	}]
};

//Chartjs Bar Chart
export const Option1 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		y: {
			beginAtZero: true,
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		},
		x: {
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		}
	}
};
export const Data1 = {
	type: "bar",
	labels: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
	],
	datasets: [{
		label: 'My First Dataset',
		data: [65, 59, 80, 81, 56, 55, 40],
		backgroundColor: [
			'rgba(152, 95, 253, 0.2)',
			'rgba(255, 73, 205, 0.2)',
			'rgba(253, 175, 34, 0.2)',
			'rgba(50, 212, 132, 0.2)',
			'rgba(0, 201, 255, 0.2)',
			'rgba(255, 103, 87, 0.2)',
			'rgba(10, 10, 10, 0.2)'
		],
		borderColor: [ 
			'rgb(152, 95, 253)',
			'rgb(255, 73, 205)',
			'rgb(253, 175, 34)',
			'rgb(50, 212, 132)',
			'rgb(0, 201, 255)',
			'rgb(255, 103, 87)',
			'rgb(10, 10, 10)'
		],
		borderWidth: 1
	}]
};

//Chartjs Pie Chart
export const Option2 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
};
export const Data2 = {
	type: "pie",
	labels: [
		"Cornflower Blue",
		"Orchid",
		"Hot Pink"
	],
	datasets: [{
		label: "My First Dataset",
		data: [300, 50, 100],
		backgroundColor: [
			'rgb(132, 90, 223)',
			'rgb(255, 73, 205)',
			'rgb(245, 184, 73)'
		],
		hoverOffset: 4
	}]
};

//Chartjs Doughnut Chart
export const Option3 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
};
export const Data3 = {
	type: "donut",
	labels: [
		"Cornflower Blue",
		"Orchid",
		"Hot Pink"
	],
	datasets: [{
		label: "My First Dataset",
		data: [300, 50, 100],
		backgroundColor: [
			'rgb(132, 90, 223)',
			'rgb(255, 73, 205)',
			'rgb(245, 184, 73)'
		],
		hoverOffset: 4
	}]
};

//Chartjs Polar Chart
export const Option5 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		y: {
			beginAtZero: true,
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		},
		x: {
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		}
	}


};
export const Data5 = {
	type: "polarArea",
	labels: [
		"Cornflower Blue",
		"Green",
		"Yellow",
		"Grey",
		"Blue"
	],
	datasets: [{
		label: "My First Dataset",
		data: [11, 16, 7, 3, 14],
		backgroundColor: [
			'rgb(132, 90, 223)',
			'rgb(75, 192, 192)',
			'rgb(245, 184, 73)',
			'rgb(201, 203, 207)',
			'rgb(255, 73, 205)'
		]
	}]
};

//Chartjs Radial Chart
export const Option6 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		r: { // Radial scale
			grid: {
				color: "rgba(142, 156, 173, 0.1)", // Grid line color
				circular: true // Makes the grid lines circular
			},
			angleLines: {
				color: "rgba(142, 156, 173, 0.2)", // Lines radiating from the center
			},
		}
	},

};
export const Data6 = {
	type: "radar",
	labels: [
		"Eating",
		"Drinking",
		"Sleeping",
		"Designing",
		"Coding",
		"Cycling",
		"Running"
	],
	datasets: [{
		label: 'My First Dataset',
		data: [65, 59, 90, 81, 56, 55, 40],
		fill: true,
		backgroundColor: 'rgba(132, 90, 223, 0.2)',
		borderColor: 'rgb(132, 90, 223)',
		pointBackgroundColor: 'rgb(132, 90, 223)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgb(132, 90, 223)'
	}, {
		label: 'My Second Dataset',
		data: [28, 48, 40, 19, 96, 27, 100],
		fill: true,
		backgroundColor: 'rgba(255, 73, 205, 0.2)',
		borderColor: 'rgb(255, 73, 205)',
		pointBackgroundColor: 'rgb(255, 73, 205)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgb(255, 73, 205)'
	}]
};

//Chartjs Scatter Chart
export const Option7: any = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					color: "rgba(142, 156, 173,0.1)"
				}
			},
			x: {
				grid: {
					color: "rgba(142, 156, 173,0.1)"
				}
			}
		}
	},
	scales: {
		x: {
			type: "linear",
			position: "bottom",
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		},
		y: {
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		}
	}

};
export const Data7 = {
	type: "scatter",
	datasets: [{
		label: "Scatter Dataset",
		data: [{
			x: -10,
			y: 0
		}, {
			x: 0,
			y: 10
		}, {
			x: 10,
			y: 5
		}, {
			x: 0.5,
			y: 5.5
		}],
		backgroundColor: 'rgb(132, 90, 223)'
	}],
};

//Chartjs Bubble Chart
export const Option8: any = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		x: {
			type: "linear",
			position: "bottom",
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		},
		y: {
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		}
	}

};
export const Data8 = {
	type: "bubble",
	datasets: [{
		label: "First Dataset",
		data: [{
			x: 20,
			y: 30,
			r: 15
		}, {
			x: 40,
			y: 10,
			r: 10
		}],
		backgroundColor: 'rgb(132, 90, 223)'
	}]
};