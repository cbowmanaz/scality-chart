    var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
    var lineChartData = {
        labels : ["1","2","3","4","5"],
        datasets : [
            {
                strokeColor : "rgba(220,220,220,0.8)",
                highlightStroke: "rgba(220,220,220,1)",
                data : ["1","2","3","4","5"]
            },
            {
                strokeColor : "rgba(151,187,205,0.8)",
                highlightStroke : "rgba(151,187,205,1)",
                data : ["5","3","4","1","2"]
            }
        ]
    }
    window.onload = function(){
        var ctx = document.getElementById("canvas").getContext("2d");
        window.myLine = new Chart(ctx).Line(lineChartData, {
            responsive : true,
            datasetFill : false
        });
    }

    function company(a, b) {
        // Amount of space needed  current and expansion
        var current = a; // Current amount of space used
        var expansion = b; // Extra space added each year
        var combinedTb = parseInt(a, 10) + parseInt(b, 10);

        // Amount of total Price, Price per tb and price per tb warranty support
        var tbPrice = 525  // Price per terabyte fee
        var supportPrice = 35 // Price per terabyte support fee
        var combinedPrice = tbPrice + supportPrice;

        // Doing the math per year price
        var result = combinedTb * combinedPrice;

        // Debug
        // console.log (combinedPrice + " Combo Price");
        // console.log (combinedTb + " Combo Space");
        // console.log (result);

        // Return final calculated output
        return result;
    }

    function yearCalcCompany() {
        // Total number of years we want to iterate through
        var years = 5;
        var arr = new Array(years);

        for (var i = 0; i < years; i++) {
            arr[i] = (i + 1);
        }
        console.log(arr);
        return arr;
    };

    $(".submit").on( "click", function() {
        var current = $("#currentStorage option:selected").val();
        var expansion = $("#expansionStorage option:selected").val();
        var result = company(current, expansion);
        yearCalcCompany();
    });

