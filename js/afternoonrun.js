/**
 * Created by Alek Ivanovski on 9/14/2017.
 */

var speedChart;
var donutChart;
var elevChart;
$(document).ready(function() {

    speedChart = c3.generate({
        bindto: '#speed-chart',
        data: {
            columns: [
                ['Speed', 15.4, 14.9, 15.1, 16.1, 14.9, 14.3, 15.0, 15.2, 13.9, 14.8],
            ],
            types: {
                Speed: 'bar',
            },
            colors: {
                'Speed': '#ffda44',
            },
            size: {
                height: 280 //to set the height of the bar graph
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                },
            }
        }
    });

    elevChart = c3.generate({
        bindto: '#elev-chart',
        data: {
            columns: [
                ['Elevation', 40, 42, 42, 44, 50, 45, 49, 54, 56, 60],
            ],
            types: {
                Elevation: 'area',
            },
            colors: {
                'Elevation': '#ffda44',
            },
            size: {
                height: 280 //to set the height of the bar graph
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                },
            }
        }
    });

    $('#add_comment').click(function () {
        var comment = $('#comment_value').val();
        alert(comment);
        if (comment != "") {
            alert("Vlaga vo if");
            $('#append-here').append("<div class='media'>" +
                "<div class='media-left media-top'>" +
                "<img src='img/alek.jpg' class='media-object profile_picture img-circle'>" +
                "</div>" +
                "<div class='media-body'>" +
                "<h5 class='media-heading profile_name'>Alek Ivanovski</h5>" +
                "<p class='comment'>" + comment + "</p>" +
                "</div>" +
                "</div>");
            $('#comment_value').val("");
        }
    });
})