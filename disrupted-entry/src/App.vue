<template>
  <v-app responsive>
     <v-snackbar
        :timeout="-1"
        :value="true"
        absolute
        top
        centered
        color="deep-purple accent-4"
        elevation="12"
      >
        Email <template>
        <a
          style="color: white; font-weight: bold;"
          :href="`mailto:brilj112@newshool.edu`"
        >
          brilj112@newschool.edu
        </a></template>for updates and feedback.
      </v-snackbar>
    <h1 class="app-title">Tracking Passport Mobility</h1>
    <h2 class="subtitle">What Countries Have the Strongest Passports?</h2>
    <v-container>
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
        <div class="legend-contain">
          <v-card id="legend_1" class="legend"><v-card-text class="justify-center" style="font-weight: bold; height: 100%; color: white">Very Mobile</v-card-text></v-card>
          <v-card id="legend_2" class="legend"><v-card-text class="justify-center" style="font-weight: bold; color: white; height: 100%">Somewhat Mobile</v-card-text></v-card>
          <v-card id="legend_3" class="legend"><v-card-text class="justify-center" style="font-weight: bold; color: white; height: 100%;">Somewhat Limited</v-card-text></v-card>
          <v-card id="legend_4" class="legend"><v-card-text class="justify-center" style="font-weight: bold; color: white; height: 100%;">Very Limited</v-card-text></v-card>
        </div>
    </v-container>
    <v-container class="measure-contain">
        <h2 class="title-small">Global Rankings</h2>
        <v-data-table
          :headers="headers"
          :items="countries"
          class="elevation-1"
          :items-per-page="15"
        ></v-data-table>
    </v-container>
    <v-container class="measure-contain measure-contain-skinny">
        <h2 class="title-small">How is each country measured?</h2>
        <p>We use the ranking model from <a href="https://www.passportindex.org/" target="_blank">Passport Index</a>, which provides updated rankings amongst the pandemic, to gather a hollistic global mobility ranking for different countries.</p>
        <p>According to the organization, "Global Passport Power Rank Passports of the world are sorted by their total <a href="https://www.passportindex.org/faq/" target="_blank">Mobility Score</a>, which includes visa-free and visa on arrival privileges. The higher the MS score, the better global mobility its passport bearer enjoys."</p>
        <p>The following factors go into the Mobility Score calcuation: </p><p>"Mobility Score (MS) is the total number of countries that can be easily accessed with a given passport. It is a calculated total based on Visa-free, Visa-on-arrival, eTA, and eVisa issued within 3 days."</p>
    </v-container>
    <v-container class="measure-contain">
        <h2 class="title-small">What did mobility look like before COVID?</h2>
        <div class="map-contain">
          <GChart
            class="world-map"
            type="GeoChart"
            style="width: 100%; height: 600px;"
            :data="oldCountries"
            :options="chartOptions"
            :settings="{packages: ['geochart'], mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'}"
          />
        </div>
    </v-container>
    <v-footer dark padless>
      <v-card class="flex"
        flat
        tile>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong><a href="jbrill.com" id="footer-text" target="_blank">Jason Brill</a></strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  },
  data () {
    return {
      headers: [
        {
          text: 'Country',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Ranking', value: 'ranking' },
        { text: 'Passport Index Score', value: 'passport_index' },
        { text: 'Change Since 2019', value: 'change' },
      ],
      countries: [
        {'change': 0, 'name': 'Malta', 'passport_index': 170, 'ranking': 1},
        {'change': -46, 'name': 'Japan', 'passport_index': 125, 'ranking': 2},
        {'change': -44, 'name': 'New Zealand', 'passport_index': 125, 'ranking': 3},
        {'change': -48, 'name': 'Germany', 'passport_index': 124, 'ranking': 4},
        {'change': -48, 'name': 'Luxembourg', 'passport_index': 124, 'ranking': 5},
        {'change': -47, 'name': 'Austria', 'passport_index': 124, 'ranking': 6},
        {'change': -47, 'name': 'Ireland', 'passport_index': 124, 'ranking': 7},
        {'change': -46, 'name': 'Belgium', 'passport_index': 124, 'ranking': 8},
        {'change': -47, 'name': 'Switzerland', 'passport_index': 124, 'ranking': 9},
        {'change': -44, 'name': 'Australia', 'passport_index': 124, 'ranking': 10},
        {'change': -48, 'name': 'South Korea', 'passport_index': 123, 'ranking': 11},
        {'change': -49, 'name': 'Finland', 'passport_index': 123, 'ranking': 12},
        {'change': -48, 'name': 'Italy', 'passport_index': 123, 'ranking': 13},
        {'change': -49, 'name': 'Spain', 'passport_index': 123, 'ranking': 14},
        {'change': -47, 'name': 'France', 'passport_index': 123, 'ranking': 15},
        {'change': -47, 'name': 'Sweden', 'passport_index': 123, 'ranking': 16},
        {'change': -49, 'name': 'Denmark', 'passport_index': 122, 'ranking': 17},
        {'change': -49, 'name': 'Greenland', 'passport_index': 122, 'ranking': 18},
        {'change': -46, 'name': 'Iceland', 'passport_index': 122, 'ranking': 19},
        {'change': -49, 'name': 'Netherlands', 'passport_index': 122, 'ranking': 20},
        {'change': -49, 'name': 'Portugal', 'passport_index': 122, 'ranking': 21},
        {'change': -48, 'name': 'Norway', 'passport_index': 122, 'ranking': 22},
        {'change': -47,
          'name': 'United Kingdom',
          'passport_index': 122,
          'ranking': 23},
        {'change': -47, 'name': 'Canada', 'passport_index': 122, 'ranking': 24},
        {'change': -47, 'name': 'Lithuania', 'passport_index': 122, 'ranking': 25},
        {'change': -46, 'name': 'Latvia', 'passport_index': 121, 'ranking': 26},
        {'change': -47, 'name': 'Slovenia', 'passport_index': 121, 'ranking': 27},
        {'change': -43, 'name': 'Liechtenstein', 'passport_index': 121, 'ranking': 28},
        {'change': -49,
          'name': 'Czech Republic',
          'passport_index': 120,
          'ranking': 29},
        {'change': -50, 'name': 'Greece', 'passport_index': 120, 'ranking': 30},
        {'change': -49, 'name': 'Hungary', 'passport_index': 120, 'ranking': 31},
        {'change': -49, 'name': 'Poland', 'passport_index': 120, 'ranking': 32},
        {'change': -48, 'name': 'Estonia', 'passport_index': 120, 'ranking': 33},
        {'change': -50, 'name': 'Slovakia', 'passport_index': 119, 'ranking': 34},
        {'change': -47, 'name': 'Monaco', 'passport_index': 117, 'ranking': 35},
        {'change': -49, 'name': 'Cyprus', 'passport_index': 117, 'ranking': 36},
        {'change': -47, 'name': 'Crotia', 'passport_index': 117, 'ranking': 37},
        {'change': -50, 'name': 'Romania', 'passport_index': 116, 'ranking': 38},
        {'change': -49, 'name': 'Bulgaria', 'passport_index': 116, 'ranking': 39},
        {'change': -42, 'name': 'San Marino', 'passport_index': 112, 'ranking': 40},
        {'change': -43, 'name': 'Andorra', 'passport_index': 111, 'ranking': 41},
        {'change': -42, 'name': 'Uruguay', 'passport_index': 111, 'ranking': 42},
        {'change': -32, 'name': 'Ukraine', 'passport_index': 109, 'ranking': 43},
        {'change': -42, 'name': 'Vatican City', 'passport_index': 104, 'ranking': 44},
        {'change': -79,
          'name': 'United Arab Emirates',
          'passport_index': 100,
          'ranking': 45},
        {'change': -35, 'name': 'Serbia', 'passport_index': 99, 'ranking': 46},
        {'change': -26, 'name': 'Georgia', 'passport_index': 97, 'ranking': 47},
        {'change': -28,
          'name': 'North Macedonia',
          'passport_index': 96,
          'ranking': 48},
        {'change': -22, 'name': 'Albania', 'passport_index': 94, 'ranking': 49},
        {'change': -31, 'name': 'Montenegro', 'passport_index': 93, 'ranking': 50},
        {'change': -27,
          'name': 'Bosnia and Herzegovina',
          'passport_index': 92,
          'ranking': 51},
        {'change': -29, 'name': 'Moldova', 'passport_index': 91, 'ranking': 52},
        {'change': -75, 'name': 'Malaysia', 'passport_index': 90, 'ranking': 53},
        {'change': -81, 'name': 'Singapore', 'passport_index': 88, 'ranking': 54},
        {'change': -83, 'name': 'United States', 'passport_index': 88, 'ranking': 55},
        {'change': -78, 'name': 'Brazil', 'passport_index': 83, 'ranking': 56},
        {'change': -66, 'name': 'Barbados', 'passport_index': 83, 'ranking': 57},
        {'change': -39, 'name': 'Russia', 'passport_index': 83, 'ranking': 58},
        {'change': -39, 'name': 'Turkey', 'passport_index': 82, 'ranking': 59},
        {'change': -79, 'name': 'Argentina', 'passport_index': 81, 'ranking': 60},
        {'change': -76, 'name': 'Hong Kong', 'passport_index': 81, 'ranking': 61},
        {'change': -81, 'name': 'Chile', 'passport_index': 80, 'ranking': 62},
        {'change': -65, 'name': 'Bahamas', 'passport_index': 80, 'ranking': 63},
        {'change': -60, 'name': 'Seychelles', 'passport_index': 79, 'ranking': 64},
        {'change': -75, 'name': 'Brunei', 'passport_index': 78, 'ranking': 65},
        {'change': -81, 'name': 'Mexico', 'passport_index': 78, 'ranking': 66},
        {'change': -64,
          'name': 'St. Kitts and Nevis',
          'passport_index': 78,
          'ranking': 67},
        {'change': -63,
          'name': 'Antigua and Barbuda',
          'passport_index': 76,
          'ranking': 68},
        {'change': -60, 'name': 'Mauritius', 'passport_index': 76, 'ranking': 69},
        {'change': -75, 'name': 'Israel', 'passport_index': 75, 'ranking': 70},
        {'change': -66, 'name': 'Costa Rica', 'passport_index': 75, 'ranking': 71},
        {'change': -63,
          'name': 'Trinidad and Tobago',
          'passport_index': 75,
          'ranking': 72},
        {'change': -65,
          'name': 'St. Vincent and the Grenadines',
          'passport_index': 75,
          'ranking': 73},
        {'change': -64, 'name': 'Macao', 'passport_index': 75, 'ranking': 74},
        {'change': -68, 'name': 'Peru', 'passport_index': 72, 'ranking': 75},
        {'change': -30, 'name': 'Qatar', 'passport_index': 72, 'ranking': 76},
        {'change': -63, 'name': 'St. Lucia', 'passport_index': 71, 'ranking': 77},
        {'change': -31, 'name': 'Kuwait', 'passport_index': 71, 'ranking': 78},
        {'change': -67, 'name': 'Paraguay', 'passport_index': 70, 'ranking': 79},
        {'change': -33, 'name': 'South Africa', 'passport_index': 70, 'ranking': 80},
        {'change': -66, 'name': 'Panama', 'passport_index': 69, 'ranking': 81},
        {'change': -64, 'name': 'Grenada', 'passport_index': 68, 'ranking': 82},
        {'change': -63, 'name': 'Dominica', 'passport_index': 68, 'ranking': 83},
        {'change': -63,
          'name': 'Solomon Islands',
          'passport_index': 68,
          'ranking': 84},
        {'change': -29, 'name': 'Belize', 'passport_index': 68, 'ranking': 85},
        {'change': -62, 'name': 'Venezuela', 'passport_index': 67, 'ranking': 86},
        {'change': -29, 'name': 'Fiji', 'passport_index': 67, 'ranking': 87},
        {'change': -27, 'name': 'Jamaica', 'passport_index': 67, 'ranking': 88},
        {'change': -64, 'name': 'Vanuatu', 'passport_index': 66, 'ranking': 89},
        {'change': -25, 'name': 'Bahrain', 'passport_index': 66, 'ranking': 90},
        {'change': -70, 'name': 'Taiwan', 'passport_index': 65, 'ranking': 91},
        {'change': -61, 'name': 'El Salvador', 'passport_index': 65, 'ranking': 92},
        {'change': -64, 'name': 'Colombia', 'passport_index': 65, 'ranking': 93},
        {'change': -60, 'name': 'Tuvalu', 'passport_index': 65, 'ranking': 94},
        {'change': -59, 'name': 'Tonga', 'passport_index': 65, 'ranking': 95},
        {'change': -26, 'name': 'Ecuador', 'passport_index': 65, 'ranking': 96},
        {'change': -26, 'name': 'Maldives', 'passport_index': 65, 'ranking': 97},
        {'change': -63, 'name': 'Samoa', 'passport_index': 64, 'ranking': 98},
        {'change': -58, 'name': 'Nicaragua', 'passport_index': 64, 'ranking': 99},
        {'change': -20, 'name': 'Botswana', 'passport_index': 64, 'ranking': 100},
        {'change': -61, 'name': 'Kiribati', 'passport_index': 63, 'ranking': 101},
        {'change': -25, 'name': 'Oman', 'passport_index': 63, 'ranking': 102},
        {'change': -25, 'name': 'Saudi Arabia', 'passport_index': 63, 'ranking': 103},
        {'change': -24, 'name': 'Belarus', 'passport_index': 63, 'ranking': 104},
        {'change': -66, 'name': 'Guatemala', 'passport_index': 62, 'ranking': 105},
        {'change': -28, 'name': 'Guyana', 'passport_index': 62, 'ranking': 106},
        {'change': -26, 'name': 'Kazakhstan', 'passport_index': 62, 'ranking': 107},
        {'change': -67, 'name': 'Honduras', 'passport_index': 61, 'ranking': 108},
        {'change': -60,
          'name': 'Marshall Islands',
          'passport_index': 61,
          'ranking': 109},
        {'change': -28, 'name': 'Nauru', 'passport_index': 61, 'ranking': 110},
        {'change': -19, 'name': 'Lesotho', 'passport_index': 61, 'ranking': 111},
        {'change': -19, 'name': 'China', 'passport_index': 61, 'ranking': 112},
        {'change': -16, 'name': 'Tunisia', 'passport_index': 61, 'ranking': 113},
        {'change': -27, 'name': 'Bolivia', 'passport_index': 59, 'ranking': 114},
        {'change': -20, 'name': 'eSwatini', 'passport_index': 59, 'ranking': 115},
        {'change': -18, 'name': 'Malawi', 'passport_index': 59, 'ranking': 116},
        {'change': -15, 'name': 'Kenya', 'passport_index': 59, 'ranking': 117},
        {'change': -26, 'name': 'Indonesia', 'passport_index': 59, 'ranking': 118},
        {'change': -15, 'name': 'Zambia', 'passport_index': 59, 'ranking': 119},
        {'change': -10, 'name': 'Rwanda', 'passport_index': 59, 'ranking': 120},
        {'change': -58, 'name': 'Micronesia', 'passport_index': 58, 'ranking': 121},
        {'change': -24, 'name': 'Suriname', 'passport_index': 58, 'ranking': 122},
        {'change': -31, 'name': 'Thailand', 'passport_index': 58, 'ranking': 123},
        {'change': -17, 'name': 'Namibia', 'passport_index': 58, 'ranking': 124},
        {'change': -16, 'name': 'Tanzania', 'passport_index': 58, 'ranking': 125},
        {'change': -21, 'name': 'Azerbaijan', 'passport_index': 58, 'ranking': 126},
        {'change': -10, 'name': 'Ghana', 'passport_index': 58, 'ranking': 127},
        {'change': -60, 'name': 'Palau Islands', 'passport_index': 57, 'ranking': 128},
        {'change': -19, 'name': 'Cuba', 'passport_index': 57, 'ranking': 129},
        {'change': -27,
          'name': 'Papua New Guinea',
          'passport_index': 56,
          'ranking': 130},
        {'change': -17, 'name': 'Morocco', 'passport_index': 56, 'ranking': 131},
        {'change': -17, 'name': 'Uganda', 'passport_index': 55, 'ranking': 132},
        {'change': -21, 'name': 'Armenia', 'passport_index': 55, 'ranking': 133},
        {'change': -9, 'name': "Cote d'Ivoire", 'passport_index': 55, 'ranking': 134},
        {'change': -18,
          'name': 'Cape Verde Islands',
          'passport_index': 54,
          'ranking': 135},
        {'change': -16, 'name': 'Zimbabwe', 'passport_index': 54, 'ranking': 136},
        {'change': -20, 'name': 'Kyrgyzstan', 'passport_index': 54, 'ranking': 137},
        {'change': -10, 'name': 'Senegal', 'passport_index': 54, 'ranking': 138},
        {'change': -15, 'name': 'Gambia', 'passport_index': 53, 'ranking': 139},
        {'change': -12, 'name': 'Mozambique', 'passport_index': 53, 'ranking': 140},
        {'change': -17,
          'name': 'Sao Tome and Principe',
          'passport_index': 53,
          'ranking': 141},
        {'change': -17, 'name': 'Uzbekistan', 'passport_index': 53, 'ranking': 142},
        {'change': -49, 'name': 'Timor-Leste', 'passport_index': 52, 'ranking': 143},
        {'change': -12, 'name': 'Sierra Leone', 'passport_index': 52, 'ranking': 144},
        {'change': -12, 'name': 'Burkina Faso', 'passport_index': 52, 'ranking': 145},
        {'change': -25,
          'name': 'Dominican Republic',
          'passport_index': 51,
          'ranking': 146},
        {'change': -14, 'name': 'Benin', 'passport_index': 51, 'ranking': 147},
        {'change': -20, 'name': 'India', 'passport_index': 51, 'ranking': 148},
        {'change': -19, 'name': 'Tajikistan', 'passport_index': 51, 'ranking': 149},
        {'change': -13, 'name': 'Gabon', 'passport_index': 51, 'ranking': 150},
        {'change': -12, 'name': 'Algeria', 'passport_index': 51, 'ranking': 151},
        {'change': -11, 'name': 'Jordan', 'passport_index': 51, 'ranking': 152},
        {'change': -25, 'name': 'Mongolia', 'passport_index': 50, 'ranking': 153},
        {'change': -9, 'name': 'Niger', 'passport_index': 50, 'ranking': 154},
        {'change': -7, 'name': 'Guinea-Bissau', 'passport_index': 50, 'ranking': 155},
        {'change': -26, 'name': 'Philippines', 'passport_index': 49, 'ranking': 156},
        {'change': -13, 'name': 'Mauritania', 'passport_index': 49, 'ranking': 157},
        {'change': -11,
          'name': 'Equatorial Guinea',
          'passport_index': 49,
          'ranking': 158},
        {'change': -10, 'name': 'Guinea', 'passport_index': 49, 'ranking': 159},
        {'change': -17, 'name': 'Madagascar', 'passport_index': 49, 'ranking': 160},
        {'change': -17, 'name': 'Bhutan', 'passport_index': 49, 'ranking': 161},
        {'change': -11, 'name': 'Egypt', 'passport_index': 49, 'ranking': 162},
        {'change': -8, 'name': 'Cameroon', 'passport_index': 49, 'ranking': 163},
        {'change': -12, 'name': 'Togo', 'passport_index': 48, 'ranking': 164},
        {'change': -18, 'name': 'Cambodia', 'passport_index': 48, 'ranking': 165},
        {'change': -11, 'name': 'Mali', 'passport_index': 48, 'ranking': 166},
        {'change': -15, 'name': 'Turkmenistan', 'passport_index': 48, 'ranking': 167},
        {'change': -13, 'name': 'Angola', 'passport_index': 48, 'ranking': 168},
        {'change': -11, 'name': 'Burundi', 'passport_index': 48, 'ranking': 169},
        {'change': -2, 'name': 'Liberia', 'passport_index': 47, 'ranking': 170},
        {'change': -19, 'name': 'Vietnam', 'passport_index': 46, 'ranking': 171},
        {'change': -13, 'name': 'Chad', 'passport_index': 46, 'ranking': 172},
        {'change': -11,
          'name': 'Central African Republic',
          'passport_index': 46,
          'ranking': 173},
        {'change': -16,
          'name': 'Comoro Islands',
          'passport_index': 45,
          'ranking': 174},
        {'change': -16, 'name': 'Laos', 'passport_index': 45, 'ranking': 175},
        {'name': 'Congo', 'passport_index': 45, 'ranking': 176},
        {'change': -17, 'name': 'Haiti', 'passport_index': 44, 'ranking': 177},
        {'change': -12, 'name': 'Djibouti', 'passport_index': 44, 'ranking': 178},
        {'change': -6, 'name': 'Nigeria', 'passport_index': 44, 'ranking': 179},
        {'change': -8,
          'name': 'Congo, The Democratic Republic of The',
          'passport_index': 44,
          'ranking': 180},
        {'change': -9, 'name': 'Sri Lanka', 'passport_index': 44, 'ranking': 181},
        {'change': -10, 'name': 'Kosovo', 'passport_index': 44, 'ranking': 182},
        {'change': -9, 'name': 'South Sudan', 'passport_index': 43, 'ranking': 183},
        {'change': -5, 'name': 'Sudan', 'passport_index': 43, 'ranking': 184},
        {'change': -8, 'name': 'Bangladesh', 'passport_index': 42, 'ranking': 185},
        {'change': -9, 'name': 'Ethiopia', 'passport_index': 41, 'ranking': 186},
        {'change': -9, 'name': 'Eritrea', 'passport_index': 41, 'ranking': 187},
        {'change': -12, 'name': 'Lebanon', 'passport_index': 41, 'ranking': 188},
        {'change': -12, 'name': 'Nepal', 'passport_index': 41, 'ranking': 189},
        {'change': -8, 'name': 'Libya', 'passport_index': 41, 'ranking': 190},
        {'change': -14, 'name': 'Myanmar', 'passport_index': 40, 'ranking': 191},
        {'change': -11, 'name': 'North Korea', 'passport_index': 40, 'ranking': 192},
        {'change': -5, 'name': 'Pakistan', 'passport_index': 37, 'ranking': 193},
        {'change': -13, 'name': 'Iran', 'passport_index': 36, 'ranking': 194},
        {'change': -12,
          'name': 'Palestinian Territories',
          'passport_index': 36,
          'ranking': 195},
        {'change': -9, 'name': 'Yemen', 'passport_index': 35, 'ranking': 196},
        {'change': -6, 'name': 'Somalia', 'passport_index': 34, 'ranking': 197},
        {'change': 4, 'name': 'Syria', 'passport_index': 33, 'ranking': 198},
        {'change': -7, 'name': 'Iraq', 'passport_index': 30, 'ranking': 199},
        {'change': -5, 'name': 'Afghanistan', 'passport_index': 30, 'ranking': 200}
      ],
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
      oldCountries: [
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
.app-title {
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
  width: 85vw;
}
.legend-contain {
  display: flex;
  width: 65vw;
  margin: 0 auto;
  justify-content: space-around;
  padding: 1rem;
}
.legend {
  width: 14vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.legend p {
  color: white;
  margin-bottom: 0 !important;
  font-family: 'Helvetica';
}
.legend p:hover {
  cursor: default;
}
#legend_1 {
  background-color: #00853f;
}
#legend_2 {
  background-color: #b8d648;
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
  padding: 1rem;
}
.measure-contain {
  width: 75%;
  margin: 0 auto;
  padding-top: 4vh;
}
.measure-contain-skinny {
  width: 50vw;
}
.v-snack--absolute {
  top: -6vh !important
}
#footer-text {
  color: white !important;
}
</style>
