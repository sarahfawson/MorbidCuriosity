// ###############################
// BUILD RADAR CHART WITH CHARTS.JS
// ###############################

// ####################
// radar numero 1
// ####################
function buildRadar1() {

  var url = `/genderData`;
  d3.json(url).then((data) => {

    var diseaseType = Object.values(data.Cause_of_Death);
    // console.log(diseaseType);

    var deathRate = Object.values(data.Percent);
    // console.log(deathRate);

    // select id to place chart
    var ctx = document.getElementById('radar1').getContext('2d');
    // build chart
    var radarChart1 = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [diseaseType[0], diseaseType[1], diseaseType[2], diseaseType[3], diseaseType[4]],
        datasets: [{
          label: 'Males',
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgb(18,94,227)',
          borderWidth: 4,
          pointBackgroundColor:'rgb(18,94,227)', 
          pointRadius: 1,
          data: [deathRate[0], deathRate[1], deathRate[2], deathRate[3], deathRate[4]]
        }, {
          label: 'Females',
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgb(72, 209, 204)',
          borderWidth: 4,
          pointBackgroundColor:'rgb(72, 209, 204)',
          pointRadius: 1,
          data: [deathRate[5], deathRate[6], deathRate[7], deathRate[8], deathRate[9]]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRadio: true,
        scale: hide=false,
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: 'rgb(0, 0, 0)'
          }
        },
        title: {
          display: true,
          text: 'Female vs. Male',
          fontSize: 16
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
                var label = data.datasets[tooltipItem.datasetIndex].label || '';
                if (label) {
                    label += ': ';
                }
                label += Math.round(tooltipItem.yLabel * 100) / 100;
                return label;
            }
          }
        }
      }
    });
  });
};

// ####################
// radar numero 2 
// ####################
function buildRadar2() {
  var url = `/denseData`;
  d3.json(url).then((data) => {
    console.log(data)

    var diseaseType = Object.values(data.Cause_of_Death);
    // console.log(diseaseType)

    var deathRate = Object.values(data.Rate_per_100k);
    // console.log(deathRate)

    var densityType = Object.values(data.Density);
    // console.log(densityType)

    // build chart
    var ctx = document.getElementById('radar2').getContext('2d');
    var radarChart1 = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [densityType[0], densityType[6], densityType[12], densityType[18], densityType[24], densityType[30]],
        datasets: [{
          label: 'Mortality Rate per 100K',
          backgroundColor: 'rgba(235, 45, 31,.5)',
          borderColor: 'rgb(235, 45, 31)',
          borderWidth: 4,
          pointBackgroundColor:'rgb(235, 45, 31)',
          pointRadius: 1,
          data: [deathRate[36], deathRate[37], deathRate[38], deathRate[39], deathRate[40], deathRate[41]]
        }
      ]
      },
      options: {
        responsive: true,
        maintainAspectRadio: true,
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: 'rgb(0, 0, 0)'
          }
        },
        title: {
          display: true,
          text: 'Urban vs Rural Living',
          fontSize: 16
        },
        scale: {
          beginAtZero: false,
          min: 500,
          max: 1300,
          stepSize: 200,
          labels: {
            fontColor: 'rgb(0, 0, 0)'
          }
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';
              if (label) {
                  label += ': ';
              }
              label += Math.round(tooltipItem.yLabel * 100) / 100;
              return label;
            }
          }
        }
      }
    });
  });
};

buildRadar1();
buildRadar2();