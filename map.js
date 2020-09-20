google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
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
        ["Congo", 52],
        ["Djibouti", 56],
        ["Myanmar", 54],
        ["Nigeria", 50],
        ["Ethiopia", 50],
        ["South Sudan", 52],
        ["Democratic Republic of the Congo", 52],
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
    ]);

    var data2 = google.visualization.arrayToDataTable([
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
        ["Democratic Republic of the Congo", 44],
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
    ]);

    var options = {
        backgroundColor: '#f2f2f2',
        colorAxis: {colors: ['#e31b23', 'yellow', '#00853f']},
        datalessRegionColor: '#f8bbd0',
        defaultColor: '#f5f5f5',
        tooltip: { trigger: "focus", isHtml: true } 
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    var chart2 = new google.visualization.GeoChart(document.getElementById('regions_div_2'));

    chart.draw(data, options);
    chart2.draw(data2, options);
  }
