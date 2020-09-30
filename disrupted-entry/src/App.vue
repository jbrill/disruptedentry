<template>
  <div>
    <h1 class="title">Tracking Global Mobility</h1>
    <h2 class="subtitle">Exploring the global citizen in a time of uncertainty</h2>
    <div class="mapContain">
        <div>
            <h2>PRE COVID</h2>
            <h6 style="color: green">JULY 2019</h6>
        </div>
        <div id="regions_div" class="world-map"></div>
        <GChart
          type="GeoChart"
          :data="chartData"
          :options="chartOptions"
          :settings="{packages: ['geochart'], mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'}"
        />
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
        <h2 class="subtitle">How is the passport index score calculated?</h2>
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
        ["Japan", 171],
        ["Singapore", 169],
        ["Germany", 172],
        ["South Korea", 171],
        ["Finland", 172],
        ["Italy", 171],
        ["Luxembourg", 172],
        ["Spain", 172],
        ["Austria", 171],
        ["Denmark", 171],
        ["Greenland", 171],
        ["Iceland", 171],
        ["France", 170],
        ["Ireland", 171],
        ["Netherlands", 171],
        ["Portugal", 171],
        ["Sweden", 170],
        ["Belgium", 170],
        ["Norway", 170],
        ["Switzerland", 171],
        ["United Kingdom", 169],
        ["United States", 171],
        ["Czech Republic", 169],
        ["Greece", 170],
        ["Malta", 170],
        ["New Zealand", 169],
        ["Australia", 168],
        ["Canada", 169],
        ["Hungary", 169],
        ["Lithuania", 169],
        ["Poland", 169],
        ["Slovakia", 169],
        ["Iceland", 168],
        ["Latvia", 167],
        ["Slovenia", 168],
        ["Estonia", 168],
        ["Liechtenstein", 164],
        ["Malaysia", 165],
        ["Monaco", 164],
        ["Chile", 161],
        ["Cyprus", 166],
        ["Romania", 166],
        ["Bulgaria", 165],
        ["Argentina", 160],
        ["Brazil", 161],
        ["Crotia", 164],
        ["Hong Kong", 157],
        ["United Arab Emirates", 179],
        ["San Marino", 154],
        ["Andorra", 154],
        ["Brunei", 153],
        ["Barbados", 149],
        ["Israel", 150],
        ["Mexico", 159],
        ["St. Kitts and Nevis", 142],
        ["Bahamas", 145],
        ["Uruguay", 153],
        ["Antigua and Barbuda", 139],
        ["Seychelles", 139],
        ["Costa Rica", 141],
        ["Trinidad and Tobago", 138],
        ["Vatican City", 146],
        ["Mauritius", 136],
        ["St. Vincent and the Grenadines", 140],
        ["St. Lucia", 134],
        ["Taiwan", 135],
        ["Macao", 139],
        ["Grenada", 132],
        ["Paraguay", 137],
        ["Panama", 135],
        ["Dominica", 131],
        ["Peru", 140],
        ["El Salvador", 126],
        ["Honduras", 128],
        ["Serbia", 134],
        ["Guatemala", 128],
        ["Samoa", 127],
        ["Solomon Islands", 131],
        ["Vanuatu", 130],
        ["Nicaragua", 122],
        ["Ukraine", 141],
        ["Venezuela", 129],
        ["Colombia", 129],
        ["Tuvalu", 125],
        ["Tonga", 124],
        ["Montenegro", 124],
        ["North Macedonia", 124],
        ["Kiribati", 124],
        ["Marshall Islands", 121],
        ["Moldova", 120],
        ["Palau Islands", 117],
        ["Micronesia", 116],
        ["Russia", 122],
        ["Bosnia and Herzegovina", 119],
        ["Georgia", 123],
        ["Albania", 116],
        ["Turkey", 121],
        ["Belize", 97],
        ["South Africa", 103],
        ["Kuwait", 102],
        ["Qatar", 102],
        ["Timor-Leste", 101],
        ["Ecuador", 91],
        ["Nauru", 89],
        ["Fiji", 96],
        ["Guyana", 90],
        ["Jamaica", 94],
        ["Botswana", 84],
        ["Maldives", 91],
        ["Papua New Guinea", 83],
        ["Bahrain", 91],
        ["Oman", 88],
        ["Bolivia", 86],
        ["Suriname", 82],
        ["Thailand", 89],
        ["Namibia", 75],
        ["Saudi Arabia", 88],
        ["Kazakhstan", 88],
        ["Belarus", 87],
        ["Lesotho", 80],
        ["China", 80],
        ["eSwatini", 79],
        ["Malawi", 77],
        ["Kenya", 74],
        ["Indonesia", 85],
        ["Tanzania", 74],
        ["Zambia", 74],
        ["Tunisia", 77],
        ["Gambia", 68],
        ["Azerbaijan", 79],
        ["Philippines", 75],
        ["Uganda", 72],
        ["Cape Verde Islands", 72],
        ["Dominican Republic", 76],
        ["Ghana", 68],
        ["Zimbabwe", 70],
        ["Cuba", 76],
        ["Morocco", 73],
        ["Armenia", 76],
        ["Kyrgyzstan", 74],
        ["Sierra Leone", 64],
        ["Benin", 65],
        ["Mongolia", 75],
        ["Mozambique", 65],
        ["Sao Tome and Principe", 70],
        ["Rwanda", 69],
        ["Burkina Faso", 64],
        ["Mauritania", 62],
        ["India", 71],
        ["Tajikistan", 70],
        ["Cote d'Ivoire", 64],
        ["Gabon", 64],
        ["Uzbekistan", 70],
        ["Senegal", 64],
        ["Equatorial Guinea", 60],
        ["Guinea", 59],
        ["Madagascar", 66],
        ["Togo", 60],
        ["Cambodia", 66],
        ["Mali", 59],
        ["Niger", 59],
        ["Vietnam", 65],
        ["Bhutan", 66],
        ["Chad", 59],
        ["Comoro Islands", 61],
        ["Guinea-Bissau", 57],
        ["Turkmenistan", 63],
        ["Central African Republic", 57],
        ["Algeria", 63],
        ["Jordan", 62],
        ["Angola", 61],
        ["Burundi", 59],
        ["Egypt", 60],
        ["Laos", 61],
        ["Cameroon", 57],
        ["Haiti", 61],
        ["Liberia", 49],
        ["COG", 52],
        ["Djibouti", 56],
        ["Myanmar", 54],
        ["Nigeria", 50],
        ["Ethiopia", 50],
        ["South Sudan", 52],
        ["Congo, The Democratic Republic of The", 52],
        ["Eritrea", 50],
        ["Sri Lanka", 53],
        ["Bangladesh", 50],
        ["Iran", 49],
        ["Kosovo", 54],
        ["Lebanon", 53],
        ["North Korea", 51],
        ["Nepal", 53],
        ["Libya", 49],
        ["Sudan", 48],
        ["Palestinian Territories", 48],
        ["Somalia", 40],
        ["Yemen", 44],
        ["Pakistan", 42],
        ["Syria", 29],
        ["Iraq", 37],
        ["Afghanistan", 35],
      ],
      chartOptions: {
        chart: {
          backgroundColor: 'white',
          colorAxis: {colors: ['#e31b23', 'yellow', '#00853f']},
          datalessRegionColor: '#f8bbd0',
          defaultColor: '#f5f5f5',
          tooltip: { trigger: "focus", isHtml: true } 
        }
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
.world-map {
    width: 100%;
}
</style>
