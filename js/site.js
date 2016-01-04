// Shorthand for $( document ).ready()
$(function() {



    $.fn.digits = function(){
        return this.each(function(){
            $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
        })
    }

    var $currentTb = $("#currentTb");
    $currentTb.ionRangeSlider({
        min: 0,
        max: 5000,
        from: 500,
        step: 100,
        prettify_enabled: false,
        grid: true,
        postfix: "TB"
    });

    $currentTb.on("change", function () {
        priceCalc();
    });

    var $expansionTb = $("#expansionTb");
    $expansionTb.ionRangeSlider({
        min: 0,
        max: 5000,
        from: 100,
        step: 100,
        prettify_enabled: false,
        grid: true,
        postfix: "TB"
    });

    $expansionTb.on("change", function () {
        priceCalc();
    });

    priceCalc();

    function priceCalc() {

            /*----------  Utility Vars  ----------*/

                // Current Tb's Used - Slider
                var current = $('#currentTb');
                var current = $currentTb.prop("value");
                var current = parseInt(current, 10);
                // console.log(current + ' current tb');

                // Expected Expansion Tb's - Slider
                var expansion = $('#expansionTb');
                var expansion = $expansionTb.prop("value");
                var expansion = parseInt(expansion, 10);
                // console.log(expansion + ' expansion tb');

                // Support Fee
                var supportFee = 35;
                // console.log(supportFee + ' Support Fee');

                // Per Tb Fee
                var tbFee = 525;
                // console.log(tbFee + ' Per TB Fee');

                // Competition Multipler
                var compMultiply = 3.07;
                // console.log(compMultiply + ' competition multiplier');

            /*----------  END Utility Vars  ----------*/

            /*----------  Space Calculations  ----------*/

                // First Year TB's
                var intiTb = current;
                // console.log(intiTb + ' First Year TB Usage');

                // Second Year TB's
                var longTbSecond = current + expansion;
                // console.log(longTb + ' Five Year TB Usage');

                // Third Year TB's
                var longTbThird = current + expansion * 2;
                // console.log(longTb + ' Five Year TB Usage');

                // Fourth Year TB's
                var longTbFourth = current + expansion * 3;
                // console.log(longTb + ' Five Year TB Usage');

                // Fifth Year TB's
                var longTb = current + expansion * 4;
                // console.log(longTb + ' Five Year TB Usage');

            /*----------  END Space Calculations  ----------*/

            /*----------  Price Calculations  ----------*/

                // Total Per / TB price Scality
                var priceTb = supportFee + tbFee;
                // console.log(priceTb + ' Total TB Price - Scality');

                // Total Per / TB price Competition
                var priceTbComp = priceTb * 3.07;
                var priceTbComp = Math.round(priceTbComp);
                // console.log(priceTbComp + ' Total TB Price - Competition');

                // Scality 1 year Cost
                var costShort = intiTb * priceTb;
                // console.log(costShort + ' One Year Cost - Scality');

                // Scality 2 year Cost
                var costShortTwo = longTbSecond * priceTb;
                // console.log(costShortTwo + ' Two Year Cost - Scality');

                // Scality 3 year Cost
                var costShortThree = longTbThird * priceTb;
                // console.log(costShortThree + ' Three Year Cost - Scality');

                // Scality 4 year Cost
                var costShortFour = longTbFourth * priceTb;
                // console.log(costShortFour + ' Four Year Cost - Scality');

                // Scality 5 year Cost
                var costLong = longTb * priceTb;
                // console.log(costLong + ' Five Year Cost - Scality');


                // Competitor 1 year Cost
                var costShortComp = intiTb * priceTbComp;
                // console.log(costShortComp + ' One Year Cost - Competition');

                // Competitor 2 year Cost
                var costShortTwoComp = longTbSecond * priceTbComp;
                // console.log(costShortTwoComp + ' Two Year Cost - Competition');

                // Competitor 3 year Cost
                var costShortThreeComp = longTbThird * priceTbComp;
                // console.log(costShortThreeComp + ' Three Year Cost - Competition');

                // Competitor 4 year Cost
                var costShortFourComp = longTbFourth * priceTbComp;
                // console.log(costShortComp + ' Four Year Cost - Competition');

                // Competitor 5 year Cost
                var costLongComp = longTb * priceTbComp;
                // console.log(costLong + ' Five Year Cost - Competition');

                // COST DIFFERENCES

                // Scality 1 year Cost Difference
                var costShortDiff =  costShort - costShortComp;
                // console.log(costShortDiff + ' One Year Cost Difference - Scality');

                // Scality 5 year Cost Difference
                var costLongDiff =  costLong - costLongComp;
                // console.log(costLongDiff + ' Five Year Cost Difference - Scality');

                // Competition 1 year Cost Difference
                var costShortCompDiff = costShortComp - costShort;
                // console.log(costShortCompDiff + ' One Year Cost Difference - Competition');

                // Competition 5 year Cost Difference
                var costLongCompDiff = costLongComp - costLong;
                // console.log(costLongCompDiff + ' Five Year Cost Difference - Competition');


            /*----------  END Price Calculations  ----------*/

            // TESTING OUTPUT

             $('.fee-support').text('$' + supportFee + ' Support Fee - Scality');
             $('.fee-singletb').text('$' + tbFee + ' Raw TB Cost');
             $('.fee-scality').text('$' + priceTb + ' Total Cost Per TB - Scality');
             $('.fee-competition').text('$' + priceTbComp + ' Total Cost Per TB - Competition');
             $('.tb-current').text(current + ' Current Yearly TB Usage - Slider');
             $('.tb-expansion').text(expansion + ' Yearly Expansion TBs');
             $('.tb-first-year').text(intiTb + ' First year used total TBs');
             $('.tb-last-year').text(longTb + ' Five Year total TBs');

             $('.price-scality-short').html('$' + costShort + ' First Year Cost - Scality');
             $('.price-scality-long').text('$' + costLong + ' Five Year Cost - Scality');
             $('.price-scality-difference-short').text('$' + costShortDiff + ' Cost difference One Year - Scality');
            $('.price-scality-difference-long').text('$' + costLongDiff + ' Cost difference Five Year - Scality');

             $('.price-comp-short').text('$' + costShortComp + ' First Year Cost - Competition');
             $('.price-comp-long').text('$' + costLongComp + ' Five Year Cost - Competition');
             $('.price-comp-difference-short').text('$' + costShortCompDiff + ' Cost difference One Year - Competion');
             $('.price-comp-difference-long').text('$' + costLongCompDiff + ' Cost difference Five Year - Competion');

             $(".number").digits();

            /*----------  Chart System  ----------*/
            var data = {
                labels: ["1 Year", "2nd Year", "3rd Year", "4th Year", "5th Year"],
                datasets: [
                    {
                        label: "Scality",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [costShort, costShortTwo, costShortThree, costShortFour, costLong]
                    },
                    {
                        label: "Competition",
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [costShortComp, costShortTwoComp, costShortThreeComp, costShortFourComp, costLongComp]
                    }
                ]
            };
            options = {
                responsive: true,
                showScale: true,
                datasetFill : false
            };
            var ctx = $("#chart").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            var myLineChart = new Chart(ctx).Line(data, options).generateLegend();


            /*----------  END Chart System  ----------*/

    }

});