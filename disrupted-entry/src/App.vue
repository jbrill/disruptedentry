<template>
  <div>
    <h1 class="title">Tracking Global Mobility</h1>
    <h2 class="subtitle">Each country's passport strength today</h2>
    <div>
        <div class="legend-contain">
          <div id="legend_1" class="legend"><p>Very Mobile</p></div>
          <div id="legend_2" class="legend"><p>Somewhat Mobile</p></div>
          <div id="legend_3" class="legend"><p>Somewhat Limited</p></div>
          <div id="legend_4" class="legend"><p>Very Limited</p></div>
        </div>
        <div class="map-contain">
          <GChart
            class="world-map"
            type="GeoChart"
            style="width: 100%; height: 600px;"
            :data="chartData"
            :options="chartOptions"
            :settings="{packages: ['geochart'], mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'}"
          />
        </div>
    </div>
    <div class="mapContain">
        <div>
            <h2>POST COVID</h2>
            <h6 style="color: red">JULY 2020</h6>
        </div>
        <div id="regions_div_2" class="world-map"></div>
        <GChart
          type="GeoChart"
          :data="chartData"
          :options="chartOptions"
          :settings="{packages: ['geochart'], mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'}"
        />
    </div>
    <div class="measure-contain">
        <h2 class="title-small">Global Rankings</h2>
    </div>
    <div class="measure-contain">
        <h2 class="title-small">How is my country measured?</h2>
    </div>
    <div class="measure-contain">
        <h2 class="title-small">What did mobility look like before COVID?</h2>
    </div>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  },
  data () {
    return {
      chartData: [
        ['Country', 'Passport Index'],
        ["Japan", 125],
        ["Singapore", 88],
        ["Germany", 124],
        ["South Korea", 123],
        ["Finland", 123],
        ["Italy", 123],
        ["Luxembourg", 124],
        ["Spain", 123],
        ["Austria", 124],
        ["Denmark", 122],
        ["Greenland", 122],
        ["Iceland", 122],
        ["France", 123],
        ["Ireland", 124],
        ["Netherlands", 122],
        ["Portugal", 122],
        ["Sweden", 123],
        ["Belgium", 124],
        ["Norway", 122],
        ["Switzerland", 124],
        ["United Kingdom", 122],
        ["United States", 88],
        ["Czech Republic", 120],
        ["Greece", 120],
        ["Malta", 170],
        ["New Zealand", 125],
        ["Australia", 124],
        ["Canada", 122],
        ["Hungary", 120],
        ["Lithuania", 122],
        ["Poland", 120],
        ["Slovakia", 119],
        ["Iceland", 122],
        ["Latvia", 121],
        ["Slovenia", 121],
        ["Estonia", 120],
        ["Liechtenstein", 121],
        ["Malaysia", 90],
        ["Monaco", 117],
        ["Chile", 80],
        ["Cyprus", 117],
        ["Romania", 116],
        ["Bulgaria", 116],
        ["Argentina", 81],
        ["Brazil", 83],
        ["Crotia", 117],
        ["Hong Kong", 81],
        ["United Arab Emirates", 100],
        ["San Marino", 112],
        ["Andorra", 111],
        ["Brunei", 78],
        ["Barbados", 83],
        ["Israel", 75],
        ["Mexico", 78],
        ["St. Kitts and Nevis", 78],
        ["Bahamas", 80],
        ["Uruguay", 111],
        ["Antigua and Barbuda", 76],
        ["Seychelles", 79],
        ["Costa Rica", 75],
        ["Trinidad and Tobago", 75],
        ["Vatican City", 104],
        ["Mauritius", 76],
        ["St. Vincent and the Grenadines", 75],
        ["St. Lucia", 71],
        ["Tawain", 65],
        ["Macao", 75],
        ["Grenada", 68],
        ["Paraguay", 70],
        ["Panama", 69],
        ["Dominica", 68],
        ["Peru", 72],
        ["El Salvador", 65],
        ["Honduras", 61],
        ["Serbia", 99],
        ["Guatemala", 62],
        ["Samoa", 64],
        ["Solomon Islands", 68],
        ["Vanuatu", 66],
        ["Nicaragua", 64],
        ["Ukraine", 109],
        ["Venezuela", 67],
        ["Colombia", 65],
        ["Tuvalu", 65],
        ["Tonga", 65],
        ["Montenegro", 93],
        ["North Macedonia", 96],
        ["Kiribati", 63],
        ["Marshall Islands", 61],
        ["Moldova", 91],
        ["Palau Islands", 57],
        ["Micronesia", 58],
        ["Russia", 83],
        ["Bosnia and Herzegovina", 92],
        ["Georgia", 97],
        ["Albania", 94],
        ["Turkey", 82],
        ["Belize", 68],
        ["South Africa", 70],
        ["Kuwait", 71],
        ["Qatar", 72],
        ["Timor-Leste", 52],
        ["Ecuador", 65],
        ["Nauru", 61],
        ["Fiji", 67],
        ["Guyana", 62],
        ["Jamaica", 67],
        ["Botswana", 64],
        ["Maldives", 65],
        ["Papua New Guinea", 56],
        ["Bahrain", 66],
        ["Oman", 63],
        ["Bolivia", 59],
        ["Suriname", 58],
        ["Thailand", 58],
        ["Namibia", 58],
        ["Saudi Arabia", 63],
        ["Kazakhstan", 62],
        ["Belarus", 63],
        ["Lesotho", 61],
        ["China", 61],
        ["eSwatini", 59],
        ["Malawi", 59],
        ["Kenya", 59],
        ["Indonesia", 59],
        ["Tanzania", 58],
        ["Zambia", 59],
        ["Tunisia", 61],
        ["Gambia", 53],
        ["Azerbaijan", 58],
        ["Philippines", 49],
        ["Uganda", 55],
        ["Cape Verde Islands", 54],
        ["Dominican Republic", 51],
        ["Ghana", 58],
        ["Zimbabwe", 54],
        ["Cuba", 57],
        ["Morocco", 56],
        ["Armenia", 55],
        ["Kyrgyzstan", 54],
        ["Sierra Leone", 52],
        ["Benin", 51],
        ["Mongolia", 50],
        ["Mozambique", 53],
        ["Sao Tome and Principe", 53],
        ["Rwanda", 59],
        ["Burkina Faso", 52],
        ["Mauritania", 49],
        ["India", 51],
        ["Tajikistan", 51],
        ["Cote d'Ivoire", 55],
        ["Gabon", 51],
        ["Uzbekistan", 53],
        ["Senegal", 54],
        ["Equatorial Guinea", 49],
        ["Guinea", 49],
        ["Madagascar", 49],
        ["Togo", 48],
        ["Cambodia", 48],
        ["Mali", 48],
        ["Niger", 50],
        ["Vietnam", 46],
        ["Bhutan", 49],
        ["Chad", 46],
        ["Comoro Islands", 45],
        ["Guinea-Bissau", 50],
        ["Turkmenistan", 48],
        ["Central African Republic", 46],
        ["Algeria", 51],
        ["Jordan", 51],
        ["Angola", 48],
        ["Burundi", 48],
        ["Egypt", 49],
        ["Laos", 45],
        ["Cameroon", 49],
        ["Haiti", 44],
        ["Liberia", 47],
        ["Congo", 45],
        ["Djibouti", 44],
        ["Myanmar", 40],
        ["Nigeria", 44],
        ["Ethiopia", 41],
        ["South Sudan", 43],
        ["Congo, The Democratic Republic of The", 44],
        ["Eritrea", 41],
        ["Sri Lanka", 44],
        ["Bangladesh", 42],
        ["Iran", 36],
        ["Kosovo", 44],
        ["Lebanon", 41],
        ["North Korea", 40],
        ["Nepal", 41],
        ["Libya", 41],
        ["Sudan", 43],
        ["Palestinian Territories", 36],
        ["Somalia", 34],
        ["Yemen", 35],
        ["Pakistan", 37],
        ["Syria", 33],
        ["Iraq", 30],
        ["Afghanistan", 30]
      ],
      chartOptions: {
        sizeAxis: { minValue: 0, maxValue: 100 },
        backgroundColor: 'white',
        colorAxis: {colors: ['#e31b23', 'yellow', '#00853f']},
        datalessRegionColor: 'white',
        defaultColor: '#f5f5f5',
        tooltip: { trigger: "focus", isHtml: true },
        legend: 'none'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Solway:wght@700&display=swap');


html {
    background: white;
}

body {
    margin: 0 auto;
    font-family: 'Helvetica';
    text-align: center;
}
.title {
    padding-top: 2%;
    color: black;
    font-size: 4rem;
    font-family: 'Righteous', cursive;
}
.subtitle {
    color: grey;
    font-weight: lighter;
}
.author {
    color: steelblue;
}
.map-contain {
  margin: 0 auto;
  width: 65vw;
}
.world-map {
  margin-top: 5vh;
}
.legend-contain {
  display: flex;
  width: 65vw;
  margin: 0 auto;
  justify-content: space-around;
}
.legend {
  margin-top: 3vh;
  width: 14vw;
  height: 5vh;
  padding: 4px;
}
.legend p {
  color: white;
  font-family: 'Helvetica';
}
.legend p:hover {
  cursor: default;
}
#legend_1 {
  background-color: #00853f;
}
#legend_2 {
  background-color: #C9E04A;
}
#legend_3 {
  background-color: #EAB841;
}
#legend_4 {
  background-color: #e31b23;
}
.title-small {
  font-family: 'Righteous', cursive;
  font-size: 2rem;
}
</style>