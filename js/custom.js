/**
 * Created by Alek Ivanovski on 5/16/2017.
 */
var chart1, chart2, donutchart;
$(document).ready(function(){

    chart1 = c3.generate({
        bindto: '#chart1',
        data: {
            columns: [
                ['data1', 76, 1, 4, 22, 29, 49, 8, 63, 27, 62, 61, 75, 59, 9, 34, 63, 53, 4, 42, 15, 9, 96, 66, 9, 68, 56, 5, 92, 87, 70],
                ['data2', 65, 54, 14, 78, 39, 90, 62, 31, 12, 44, 1, 88, 44, 55, 61, 81, 94, 3, 96, 48, 79, 36, 27, 39, 74, 8, 36, 63, 68, 94],
                ['data3', 42, 7, 42, 65, 63, 71, 19, 8, 30, 100, 24, 7, 81, 91, 20, 9, 22, 38, 31, 83, 70, 47, 6, 22, 64, 37, 21, 82, 6, 88]
            ],
            types: {
                data1: 'bar',
                data2: 'bar',
                data3: 'spline'
            },
            axes: {
                data1: 'y',
                data2: 'y',
                data3: 'y2'
            },
            colors: {
                data1: '#ff0000',
                data2: '#00ff00',
                data3: '#0000ff'
            }
        },
        axis: {
            y2: {
                show: true
            }
        }
    });


    chart2 = c3.generate({
        bindto: '#chart2',
        data: {
            columns: [
                ['data1',76,1,4,22,29,49,8,63,27,62,61,75,59,9,34,63,53,4,42,15,9,96,66,9,68,56,5,92,87,70],
                ['data2',65,54,14,78,39,90,62,31,12,44,1,88,44,55,61,81,94,3,96,48,79,36,27,39,74,8,36,63,68,94]
            ],
            types: {
                data1: 'area-step',
                data2: 'area-step'
            }
        },
        grid: {
            x: {
                show: true
            },
            y: {
                show: true
            }
        },
        axis: {
            rotated: true
        }
    });

    donutchart = c3.generate({
        bindto: '#donutchart',
        data: {
            columns:[
                ['data1',76,1,4,22,29,49,8,63,27,62,61,75,59,9,34,63,53,4,42,15,9,96,66,9,68,56,5,92,87,70],
                ['data2',65,54,14,78,39,90,62,31,12,44,1,88,44,55,61,81,94,3,96,48,79,36,27,39,74,8,36,63,68,94]
            ],
            type: 'donut'
        },
        donut: {
            title: "Donut chart"
        }
    });

});
