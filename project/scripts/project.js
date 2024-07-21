document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("lastModified");

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    const hamburger = document.getElementById("hamburger");
    const navUl = document.querySelector("nav ul");

    hamburger.addEventListener("click", function() {
        navUl.classList.toggle("show");
        hamburger.textContent = navUl.classList.contains("show") ? "X" : "☰";
    });
});

dataList = [
    {'country': 'Afghanistan', 'population': 37172386, 'continent': 'Asia', 'area': 652090.0, 'expectancy': 45.9, 'temperature': 13.37} ,
{'country': 'Albania', 'population': 2866376, 'continent': 'Europe', 'area': 28748.0, 'expectancy': 71.6, 'temperature': 12.44} ,
{'country': 'Algeria', 'population': 42228429, 'continent': 'Africa', 'area': 2381741.0, 'expectancy': 69.7, 'temperature': 23.6} ,
{'country': 'American Samoa', 'population': 55465, 'continent': 'Oceania', 'area': 199.0, 'expectancy': 75.1, 'temperature': 27.38} ,
{'country': 'Andorra', 'population': 77006, 'continent': 'Europe', 'area': 468.0, 'expectancy': 83.5, 'temperature': 8.27} ,
{'country': 'Angola', 'population': 30809762, 'continent': 'Africa', 'area': 1246700.0, 'expectancy': 38.3, 'temperature': 21.77} ,
{'country': 'Anguilla', 'population': 15094, 'continent': 'North America', 'area': 96.0, 'expectancy': 76.1, 'temperature': 27.71} ,
{'country': 'Antarctica', 'population': 1106, 'continent': 'Antarctica', 'area': 13120000.0, 'expectancy': null, 'temperature': null} ,
{'country': 'Antigua and Barbuda', 'population': 96286, 'continent': 'North America', 'area': 442.0, 'expectancy': 70.5, 'temperature': 27.2} ,
{'country': 'Argentina', 'population': 44494502, 'continent': 'South America', 'area': 2780400.0, 'expectancy': 75.1, 'temperature': 15.11} ,
{'country': 'Armenia', 'population': 2951776, 'continent': 'Asia', 'area': 29800.0, 'expectancy': 66.4, 'temperature': 7.82} ,
{'country': 'Aruba', 'population': 105845, 'continent': 'North America', 'area': 193.0, 'expectancy': 78.4, 'temperature': 29.17} ,
{'country': 'Australia', 'population': 24982688, 'continent': 'Oceania', 'area': 7741220.0, 'expectancy': 79.8, 'temperature': 22.05} ,
{'country': 'Austria', 'population': 8840521, 'continent': 'Europe', 'area': 83859.0, 'expectancy': 77.7, 'temperature': 7.44} ,
{'country': 'Azerbaijan', 'population': 9939800, 'continent': 'Asia', 'area': 86600.0, 'expectancy': 62.9, 'temperature': 12.96} ,
{'country': 'Bahamas', 'population': 385640, 'continent': 'North America', 'area': 13878.0, 'expectancy': 71.1, 'temperature': 25.58} ,
{'country': 'Bahrain', 'population': 1569439, 'continent': 'Asia', 'area': 694.0, 'expectancy': 73, 'temperature': 27.69} ,
{'country': 'Bangladesh', 'population': 161356039, 'continent': 'Asia', 'area': 143998.0, 'expectancy': 60.2, 'temperature': 25.71} ,
{'country': 'Barbados', 'population': 286641, 'continent': 'North America', 'area': 430.0, 'expectancy': 73, 'temperature': 26.61} ,
{'country': 'Belarus', 'population': 9483499, 'continent': 'Europe', 'area': 207600.0, 'expectancy': 68, 'temperature': 7.45} ,
{'country': 'Belgium', 'population': 11433256, 'continent': 'Europe', 'area': 30518.0, 'expectancy': 77.8, 'temperature': 10.67} ,
{'country': 'Belize', 'population': 383071, 'continent': 'North America', 'area': 22696.0, 'expectancy': 70.9, 'temperature': 25.7} ,
{'country': 'Benin', 'population': 11485048, 'continent': 'Africa', 'area': 112622.0, 'expectancy': 50.2, 'temperature': 28.02} ,
{'country': 'Bermuda', 'population': 63973, 'continent': 'North America', 'area': 53.0, 'expectancy': 76.9, 'temperature': 21.67} ,
{'country': 'Bhutan', 'population': 754394, 'continent': 'Asia', 'area': 47000.0, 'expectancy': 52.4, 'temperature': 10.38} ,
{'country': 'Bolivia', 'population': 11353142, 'continent': 'South America', 'area': 1098581.0, 'expectancy': 63.7, 'temperature': 20.76} ,
{'country': 'Bosnia and Herzegovina', 'population': 3323929, 'continent': 'Europe', 'area': 51197.0, 'expectancy': 71.5, 'temperature': 10.35} ,
{'country': 'Botswana', 'population': 2254126, 'continent': 'Africa', 'area': 581730.0, 'expectancy': 39.3, 'temperature': 22.09} ,
{'country': 'Bouvet Island', 'population': 0, 'continent': 'Antarctica', 'area': 59.0, 'expectancy': null, 'temperature': null} ,
{'country': 'Brazil', 'population': 209469333, 'continent': 'South America', 'area': 8547403.0, 'expectancy': 62.9, 'temperature': 25.44} ,
{'country': 'British Indian Ocean Territory', 'population': 0, 'continent': 'Africa', 'area': 78.0, 'expectancy': null, 'temperature': 27.61} ,
{'country': 'British Virgin Islands', 'population': null, 'continent': null, 'area': 151.0, 'expectancy': null, 'temperature': null} ,
{'country': 'Brunei', 'population': 428962, 'continent': 'Asia', 'area': 5765.0, 'expectancy': 73.6, 'temperature': 26.95} ,
{'country': 'Bulgaria', 'population': 7025037, 'continent': 'Europe', 'area': 110994.0, 'expectancy': 70.9, 'temperature': 11.35} ,
{'country': 'Burkina Faso', 'population': 19751535, 'continent': 'Africa', 'area': 274000.0, 'expectancy': 46.7, 'temperature': 29.26} ,
{'country': 'Burundi', 'population': 11175378, 'continent': 'Africa', 'area': 27834.0, 'expectancy': 46.2, 'temperature': 20.51} ,
{'country': 'Cabo Verde', 'population': 555987, 'continent': null, 'area': null, 'expectancy': null, 'temperature': null} ,
{'country': 'Cambodia', 'population': 16249798, 'continent': 'Asia', 'area': 181035.0, 'expectancy': 56.5, 'temperature': 27.41} ,
{'country': 'Cameroon', 'population': 25216237, 'continent': 'Africa', 'area': 475442.0, 'expectancy': 54.8, 'temperature': 24.8} ,
{'country': 'Canada', 'population': 37057765, 'continent': 'North America', 'area': 9970610.0, 'expectancy': 79.4, 'temperature': -4.03} ,
{'country': 'Cape Verde', 'population': 543767, 'continent': 'Africa', 'area': 4033.0, 'expectancy': 68.9, 'temperature': 22.53} ,
{'country': 'Cayman Islands', 'population': 64174, 'continent': 'North America', 'area': 264.0, 'expectancy': 78.9, 'temperature': 27.82} ,
{'country': 'Central African Republic', 'population': 4666377, 'continent': 'Africa', 'area': 622984.0, 'expectancy': 44, 'temperature': 25.47} ,
{'country': 'Chad', 'population': 15477751, 'continent': 'Africa', 'area': 1284000.0, 'expectancy': 50.5, 'temperature': 27.63} ,
{'country': 'Chile', 'population': 18729160, 'continent': 'South America', 'area': 756626.0, 'expectancy': 75.7, 'temperature': 9.39} ,
{'country': 'China', 'population': 1392730000, 'continent': 'Asia', 'area': 9572900.0, 'expectancy': 71.4, 'temperature': 7.59} ,
{'country': 'Christmas Island', 'population': 1402, 'continent': 'Oceania', 'area': 135.0, 'expectancy': null, 'temperature': 26.06} ,
{'country': 'Cocos (Keeling) Islands', 'population': 596, 'continent': 'Oceania', 'area': 14.0, 'expectancy': null, 'temperature': 26.79} ,
{'country': 'Colombia', 'population': 49648685, 'continent': 'South America', 'area': 1138914.0, 'expectancy': 70.3, 'temperature': 25} ,
{'country': 'Comoros', 'population': 832322, 'continent': 'Africa', 'area': 1862.0, 'expectancy': 60, 'temperature': 23.73} ,
{'country': 'Congo', 'population': 5244363, 'continent': 'Africa', 'area': 342000.0, 'expectancy': 47.4, 'temperature': 24.74} ,
{'country': 'Cook Islands', 'population': 17379, 'continent': 'Oceania', 'area': 236.0, 'expectancy': 71.1, 'temperature': 24.71} ,
{'country': 'Costa Rica', 'population': 4999441, 'continent': 'North America', 'area': 51100.0, 'expectancy': 75.8, 'temperature': 24.83} ,
{'country': 'Croatia', 'population': 4087843, 'continent': 'Europe', 'area': 56538.0, 'expectancy': 73.7, 'temperature': 11.96} ,
{'country': 'Cuba', 'population': 11338138, 'continent': 'North America', 'area': 110861.0, 'expectancy': 76.2, 'temperature': 25.81} ,
{'country': 'Cyprus', 'population': 1189265, 'continent': 'Asia', 'area': 9251.0, 'expectancy': 76.7, 'temperature': 18.95} ,
{'country': 'Czech Republic', 'population': 10629928, 'continent': 'Europe', 'area': 78866.0, 'expectancy': 74.5, 'temperature': 8.6} ,
{'country': 'Denmark', 'population': 5793636, 'continent': 'Europe', 'area': 43094.0, 'expectancy': 76.5, 'temperature': 8.9} ,
{'country': 'Djibouti', 'population': 958920, 'continent': 'Africa', 'area': 23200.0, 'expectancy': 50.8, 'temperature': 28.49} ,
{'country': 'Dominica', 'population': 71625, 'continent': 'North America', 'area': 751.0, 'expectancy': 73.4, 'temperature': 26.83} ,
{'country': 'Dominican Republic', 'population': 10627165, 'continent': 'North America', 'area': 48511.0, 'expectancy': 73.2, 'temperature': 24.55} ,
{'country': 'East Timor', 'population': 1267972, 'continent': 'Asia', 'area': 14874.0, 'expectancy': 46, 'temperature': 24.57} ,
{'country': 'Ecuador', 'population': 17084357, 'continent': 'South America', 'area': 283561.0, 'expectancy': 71.1, 'temperature': 21.43} ,
{'country': 'Egypt', 'population': 98423595, 'continent': 'Africa', 'area': 1001449.0, 'expectancy': 63.3, 'temperature': 23.14} ,
{'country': 'El Salvador', 'population': 6420744, 'continent': 'North America', 'area': 21041.0, 'expectancy': 69.7, 'temperature': 25.23} ,
{'country': 'England', 'population': 55619400, 'continent': 'Europe', 'area': null, 'expectancy': null, 'temperature': null} ,
{'country': 'Equatorial Guinea', 'population': 1308974, 'continent': 'Africa', 'area': 28051.0, 'expectancy': 53.6, 'temperature': 24.66} ,
{'country': 'Eritrea', 'population': 6213972, 'continent': 'Africa', 'area': 117600.0, 'expectancy': 55.8, 'temperature': 26.63} ,
{'country': 'Estonia', 'population': 1321977, 'continent': 'Europe', 'area': 45227.0, 'expectancy': 69.5, 'temperature': 6.34} ,
{'country': 'Eswatini', 'population': 1136191, 'continent': 'Africa', 'area': 17364.0, 'expectancy': 40.4, 'temperature': 20.64} ,
{'country': 'Ethiopia', 'population': 109224559, 'continent': 'Africa', 'area': 1104300.0, 'expectancy': 45.2, 'temperature': 23.37} ,
{'country': 'Falkland Islands', 'population': 2840, 'continent': 'South America', 'area': 12173.0, 'expectancy': null, 'temperature': null} ,
{'country': 'Faroe Islands', 'population': 48497, 'continent': 'Europe', 'area': 1399.0, 'expectancy': 78.4, 'temperature': 6.6} ,
{'country': 'Federated States of Micronesia', 'population': null, 'continent': null, 'area': 702.0, 'expectancy': null, 'temperature': null} ,
{'country': 'Fiji Islands', 'population': 883483, 'continent': 'Oceania', 'area': 18274.0, 'expectancy': 67.9, 'temperature': 24.68} ,
{'country': 'Finland', 'population': 5515525, 'continent': 'Europe', 'area': 338145.0, 'expectancy': 77.4, 'temperature': 2.46} ,
{'country': 'France', 'population': 66977107, 'continent': 'Europe', 'area': 551500.0, 'expectancy': 78.8, 'temperature': 11.65} ,
{'country': 'French Guiana', 'population': 290691, 'continent': 'South America', 'area': 90000.0, 'expectancy': 76.1, 'temperature': null} ,
{'country': 'French Polynesia', 'population': 277679, 'continent': 'Oceania', 'area': 4000.0, 'expectancy': 74.8, 'temperature': 24.3} ,
{'country': 'French Southern territories', 'population': 0, 'continent': 'Antarctica', 'area': 7780.0, 'expectancy': null, 'temperature': 4.11} ,
{'country': 'Gabon', 'population': 2119275, 'continent': 'Africa', 'area': 267668.0, 'expectancy': 50.1, 'temperature': 25.2} ,
{'country': 'Gambia', 'population': 2280102, 'continent': 'Africa', 'area': 11295.0, 'expectancy': 53.2, 'temperature': 28.38} ,
{'country': 'Georgia', 'population': 3726549, 'continent': 'Asia', 'area': 69700.0, 'expectancy': 64.5, 'temperature': 9.01} ,
{'country': 'Germany', 'population': 82905782, 'continent': 'Europe', 'area': 357022.0, 'expectancy': 77.4, 'temperature': 9.59} ,
{'country': 'Ghana', 'population': 29767108, 'continent': 'Africa', 'area': 238533.0, 'expectancy': 57.4, 'temperature': 27.66} ,
{'country': 'Gibraltar', 'population': 33718, 'continent': 'Europe', 'area': 6.0, 'expectancy': 79, 'temperature': 18.15} ,
{'country': 'Greece', 'population': 10731726, 'continent': 'Europe', 'area': 131626.0, 'expectancy': 78.4, 'temperature': 14.26} ,
{'country': 'Greenland', 'population': 56025, 'continent': 'North America', 'area': 2166090.0, 'expectancy': 68.1, 'temperature': -18.68} ,
{'country': 'Grenada', 'population': 111454, 'continent': 'North America', 'area': 344.0, 'expectancy': 64.5, 'temperature': 26.49} ,
{'country': 'Guadeloupe', 'population': 395700, 'continent': 'North America', 'area': 1705.0, 'expectancy': 77, 'temperature': null} ,
{'country': 'Guam', 'population': 165768, 'continent': 'Oceania', 'area': 549.0, 'expectancy': 77.8, 'temperature': 27.81} ,
{'country': 'Guatemala', 'population': 17247807, 'continent': 'North America', 'area': 108889.0, 'expectancy': 66.2, 'temperature': 23.65} ,
{'country': 'Guinea', 'population': 12414318, 'continent': 'Africa', 'area': 245857.0, 'expectancy': 45.6, 'temperature': 25.86} ,
{'country': 'Guinea-Bissau', 'population': 1874309, 'continent': 'Africa', 'area': 36125.0, 'expectancy': 49, 'temperature': 27.98} ,
{'country': 'Guyana', 'population': 779004, 'continent': 'South America', 'area': 214969.0, 'expectancy': 64, 'temperature': 26.12} ,
{'country': 'Haiti', 'population': 11123176, 'continent': 'North America', 'area': 27750.0, 'expectancy': 49.2, 'temperature': 24.95} ,
{'country': 'Heard Island and McDonald Islands', 'population': 0, 'continent': 'Antarctica', 'area': 359.0, 'expectancy': null, 'temperature': 2.46} ,
{'country': 'Holy See (Vatican City State)', 'population': 825, 'continent': 'Europe', 'area': 0.4, 'expectancy': null, 'temperature': 16.34} ,
{'country': 'Honduras', 'population': 9587522, 'continent': 'North America', 'area': 112088.0, 'expectancy': 69.9, 'temperature': 24.72} ,
{'country': 'Hong Kong', 'population': 7451000, 'continent': 'Asia', 'area': 1075.0, 'expectancy': 79.5, 'temperature': null} ,
{'country': 'Hungary', 'population': 9775564, 'continent': 'Europe', 'area': 93030.0, 'expectancy': 71.4, 'temperature': 11.5} ,
{'country': 'Iceland', 'population': 352721, 'continent': 'Europe', 'area': 103000.0, 'expectancy': 79.4, 'temperature': 1.85} ,
{'country': 'India', 'population': 1352617328, 'continent': 'Asia', 'area': 3287263.0, 'expectancy': 62.5, 'temperature': 24.94} ,
{'country': 'Indonesia', 'population': 267663435, 'continent': 'Asia', 'area': 1904569.0, 'expectancy': 70.1, 'temperature': 25.96} ,
{'country': 'Iran', 'population': 81800269, 'continent': 'Asia', 'area': 1648195.0, 'expectancy': 69.7, 'temperature': 18.34} ,
{'country': 'Iraq', 'population': 38433600, 'continent': 'Asia', 'area': 438317.0, 'expectancy': 66.5, 'temperature': 22.95} ,
{'country': 'Ireland', 'population': 4867309, 'continent': 'Europe', 'area': 70273.0, 'expectancy': 76.8, 'temperature': 9.73} ,
{'country': 'Israel', 'population': 8882800, 'continent': 'Asia', 'area': 21056.0, 'expectancy': 78.6, 'temperature': 19.99} ,
{'country': 'Italy', 'population': 60421760, 'continent': 'Europe', 'area': 301316.0, 'expectancy': 79, 'temperature': 13.22} ,
{'country': 'Ivory Coast', 'population': 25069229, 'continent': 'Africa', 'area': 322463.0, 'expectancy': 45.2, 'temperature': 26.8} ,
{'country': 'Jamaica', 'population': 2934855, 'continent': 'North America', 'area': 10990.0, 'expectancy': 75.2, 'temperature': 25.91} ,
{'country': 'Japan', 'population': 126529100, 'continent': 'Asia', 'area': 377829.0, 'expectancy': 80.7, 'temperature': 11.78} ,
{'country': 'Jordan', 'population': 9956011, 'continent': 'Asia', 'area': 88946.0, 'expectancy': 77.4, 'temperature': 19.52} ,
{'country': 'Kazakhstan', 'population': 18272430, 'continent': 'Asia', 'area': 2724900.0, 'expectancy': 63.2, 'temperature': 7.11} ,
{'country': 'Kenya', 'population': 51393010, 'continent': 'Africa', 'area': 580367.0, 'expectancy': 48, 'temperature': 25.08} ,
{'country': 'Kiribati', 'population': 115847, 'continent': 'Oceania', 'area': 726.0, 'expectancy': 59.8, 'temperature': 27.77} ,
{'country': 'Kuwait', 'population': 4137309, 'continent': 'Asia', 'area': 17818.0, 'expectancy': 76.1, 'temperature': 26.31} ,
{'country': 'Kyrgyzstan', 'population': 6322800, 'continent': 'Asia', 'area': 199900.0, 'expectancy': 63.4, 'temperature': 2.65} ,
{'country': 'Laos', 'population': 7061507, 'continent': 'Asia', 'area': 236800.0, 'expectancy': 53.1, 'temperature': 24.16} ,
{'country': 'Latvia', 'population': 1927174, 'continent': 'Europe', 'area': 64589.0, 'expectancy': 68.4, 'temperature': 6.87} ,
{'country': 'Lebanon', 'population': 6848925, 'continent': 'Asia', 'area': 10400.0, 'expectancy': 71.3, 'temperature': 15.45} ,
{'country': 'Lesotho', 'population': 2108132, 'continent': 'Africa', 'area': 30355.0, 'expectancy': 50.8, 'temperature': 12.38} ,
{'country': 'Liberia', 'population': 4818977, 'continent': 'Africa', 'area': 111369.0, 'expectancy': 51, 'temperature': 25.45} ,
{'country': 'Libya', 'population': 6678567, 'continent': 'Africa', 'area': 1759540.0, 'expectancy': 75.5, 'temperature': 22.81} ,
{'country': 'Liechtenstein', 'population': 37910, 'continent': 'Europe', 'area': 160.0, 'expectancy': 78.8, 'temperature': 7.55} ,
{'country': 'Lithuania', 'population': 2801543, 'continent': 'Europe', 'area': 65301.0, 'expectancy': 69.1, 'temperature': 7.38} ,
{'country': 'Luxembourg', 'population': 607950, 'continent': 'Europe', 'area': 2586.0, 'expectancy': 77.1, 'temperature': 10.02} ,
{'country': 'Macao', 'population': 631636, 'continent': 'Asia', 'area': 18.0, 'expectancy': 81.6, 'temperature': null} ,
{'country': 'Madagascar', 'population': 26262368, 'continent': 'Africa', 'area': 587041.0, 'expectancy': 55, 'temperature': 22.64} ,
{'country': 'Malawi', 'population': 18143315, 'continent': 'Africa', 'area': 118484.0, 'expectancy': 37.6, 'temperature': 22.66} ,
{'country': 'Malaysia', 'population': 31528585, 'continent': 'Asia', 'area': 329758.0, 'expectancy': 70.8, 'temperature': 26.38} ,
{'country': 'Maldives', 'population': 515696, 'continent': 'Asia', 'area': 298.0, 'expectancy': 62.2, 'temperature': 28.11} ,
{'country': 'Mali', 'population': 19077690, 'continent': 'Africa', 'area': 1240192.0, 'expectancy': 46.7, 'temperature': 29.21} ,
{'country': 'Malta', 'population': 484630, 'continent': 'Europe', 'area': 316.0, 'expectancy': 77.9, 'temperature': 19.58} ,
{'country': 'Marshall Islands', 'population': 58413, 'continent': 'Oceania', 'area': 181.0, 'expectancy': 65.5, 'temperature': 28.01} ,
{'country': 'Martinique', 'population': 376480, 'continent': 'North America', 'area': 1102.0, 'expectancy': 78.3, 'temperature': null} ,
{'country': 'Mauritania', 'population': 4403319, 'continent': 'Africa', 'area': 1025520.0, 'expectancy': 50.8, 'temperature': 28.82} ,
{'country': 'Mauritius', 'population': 1265303, 'continent': 'Africa', 'area': 2040.0, 'expectancy': 71, 'temperature': 23.33} ,
{'country': 'Mayotte', 'population': 270372, 'continent': 'Africa', 'area': 373.0, 'expectancy': 59.5, 'temperature': null} ,
{'country': 'Mexico', 'population': 126190788, 'continent': 'North America', 'area': 1958201.0, 'expectancy': 71.5, 'temperature': 21.31} ,
{'country': 'Micronesia, Federated States of', 'population': 112640, 'continent': 'Oceania', 'area': null, 'expectancy': null, 'temperature': 27.28} ,
{'country': 'Moldova', 'population': 2706049, 'continent': 'Europe', 'area': 33851.0, 'expectancy': 64.5, 'temperature': 10.89} ,
{'country': 'Monaco', 'population': 38682, 'continent': 'Europe', 'area': 1.5, 'expectancy': 78.8, 'temperature': 13.53} ,
{'country': 'Mongolia', 'population': 3170208, 'continent': 'Asia', 'area': 1566500.0, 'expectancy': 67.3, 'temperature': 1.07} ,
{'country': 'Montenegro', 'population': 631219, 'continent': 'Europe', 'area': null, 'expectancy': null, 'temperature': null} ,
{'country': 'Montserrat', 'population': 5900, 'continent': 'North America', 'area': 102.0, 'expectancy': 78, 'temperature': 25.75} ,
{'country': 'Morocco', 'population': 36029138, 'continent': 'Africa', 'area': 446550.0, 'expectancy': 69.1, 'temperature': 18.14} ,
{'country': 'Mozambique', 'population': 29495962, 'continent': 'Africa', 'area': 801590.0, 'expectancy': 37.5, 'temperature': 24.41} ,
{'country': 'Myanmar', 'population': 53708395, 'continent': 'Asia', 'area': 676578.0, 'expectancy': 54.9, 'temperature': 23.82} ,
{'country': 'Namibia', 'population': 2448255, 'continent': 'Africa', 'area': 824292.0, 'expectancy': 42.5, 'temperature': 20.45} ,
{'country': 'Nauru', 'population': 12704, 'continent': 'Oceania', 'area': 21.0, 'expectancy': 60.8, 'temperature': 27.83} ,
{'country': 'Nepal', 'population': 28087871, 'continent': 'Asia', 'area': 147181.0, 'expectancy': 57.8, 'temperature': 14.17} ,
{'country': 'Netherlands', 'population': 17231624, 'continent': 'Europe', 'area': 41526.0, 'expectancy': 78.3, 'temperature': 10.49} ,
{'country': 'Netherlands Antilles', 'population': 227049, 'continent': 'North America', 'area': 800.0, 'expectancy': 74.7, 'temperature': null} ,
{'country': 'New Caledonia', 'population': 284060, 'continent': 'Oceania', 'area': 18575.0, 'expectancy': 72.8, 'temperature': 22.69} ,
{'country': 'New Zealand', 'population': 4841000, 'continent': 'Oceania', 'area': 270534.0, 'expectancy': 77.8, 'temperature': 10.46} ,
{'country': 'Nicaragua', 'population': 6465513, 'continent': 'North America', 'area': 130000.0, 'expectancy': 68.7, 'temperature': 25.88} ,
{'country': 'Niger', 'population': 22442948, 'continent': 'Africa', 'area': 1267000.0, 'expectancy': 41.3, 'temperature': 28.04} ,
{'country': 'Nigeria', 'population': 195874740, 'continent': 'Africa', 'area': 923768.0, 'expectancy': 51.6, 'temperature': 27.3} ,
{'country': 'Niue', 'population': 1624, 'continent': 'Oceania', 'area': 260.0, 'expectancy': null, 'temperature': 25.03} ,
{'country': 'Norfolk Island', 'population': 2169, 'continent': 'Oceania', 'area': 36.0, 'expectancy': null, 'temperature': 19.01} ,
{'country': 'North Korea', 'population': 25549819, 'continent': 'Asia', 'area': 120538.0, 'expectancy': 70.7, 'temperature': 6.98} ,
{'country': 'North Macedonia', 'population': 2084367, 'continent': 'Europe', 'area': 25713.0, 'expectancy': 73.8, 'temperature': 10.79} ,
{'country': 'Northern Ireland', 'population': 1885400, 'continent': 'Europe', 'area': null, 'expectancy': null, 'temperature': null} ,
{'country': 'Northern Mariana Islands', 'population': 56882, 'continent': 'Oceania', 'area': 464.0, 'expectancy': 75.5, 'temperature': 27.6} ,
{'country': 'Norway', 'population': 5311916, 'continent': 'Europe', 'area': 323877.0, 'expectancy': 78.7, 'temperature': 2.21} ,
{'country': 'Oman', 'population': 4829483, 'continent': 'Asia', 'area': 309500.0, 'expectancy': 71.8, 'temperature': 27.64} ,
{'country': 'Pakistan', 'population': 212215030, 'continent': 'Asia', 'area': 796095.0, 'expectancy': 61.1, 'temperature': 21.38} ,
{'country': 'Palau', 'population': 17907, 'continent': 'Oceania', 'area': 459.0, 'expectancy': 68.6, 'temperature': 27.9} ,
{'country': 'Palestine', 'population': 4569087, 'continent': 'Asia', 'area': 6257.0, 'expectancy': 71.4, 'temperature': 19.5} ,
{'country': 'Panama', 'population': 4176873, 'continent': 'North America', 'area': 75517.0, 'expectancy': 75.5, 'temperature': 25.6} ,
{'country': 'Papua New Guinea', 'population': 8606316, 'continent': 'Oceania', 'area': 462840.0, 'expectancy': 63.1, 'temperature': 24.74} ,
{'country': 'Paraguay', 'population': 6956071, 'continent': 'South America', 'area': 406752.0, 'expectancy': 73.7, 'temperature': 23.92} ,
{'country': 'Peru', 'population': 31989256, 'continent': 'South America', 'area': 1285216.0, 'expectancy': 70, 'temperature': 19.72} ,
{'country': 'Philippines', 'population': 106651922, 'continent': 'Asia', 'area': 300000.0, 'expectancy': 67.5, 'temperature': 26.27} ,
{'country': 'Pitcairn', 'population': 67, 'continent': 'Oceania', 'area': 49.0, 'expectancy': null, 'temperature': 20.56} ,
{'country': 'Poland', 'population': 37974750, 'continent': 'Europe', 'area': 323250.0, 'expectancy': 73.2, 'temperature': 8.78} ,
{'country': 'Portugal', 'population': 10283822, 'continent': 'Europe', 'area': 91982.0, 'expectancy': 75.8, 'temperature': 15.85} ,
{'country': 'Puerto Rico', 'population': 3195153, 'continent': 'North America', 'area': 8875.0, 'expectancy': 75.6, 'temperature': 25.04} ,
{'country': 'Qatar', 'population': 2781677, 'continent': 'Asia', 'area': 11000.0, 'expectancy': 72.4, 'temperature': 28.02} ,
{'country': 'Reunion', 'population': 859959, 'continent': 'Africa', 'area': 2510.0, 'expectancy': 72.7, 'temperature': null} ,
{'country': 'Romania', 'population': 19466145, 'continent': 'Europe', 'area': 238391.0, 'expectancy': 69.9, 'temperature': 10.18} ,
{'country': 'Russia', 'population': 144478050, 'continent': 'Europe', 'area': 17075400.0, 'expectancy': 67.2, 'temperature': -3.79} ,
{'country': 'Rwanda', 'population': 12301939, 'continent': 'Africa', 'area': 26338.0, 'expectancy': 39.3, 'temperature': 19.2} ,
{'country': 'Saint Helena', 'population': 6600, 'continent': 'Africa', 'area': 314.0, 'expectancy': 76.8, 'temperature': 18.1} ,
{'country': 'Saint Kitts and Nevis', 'population': 52441, 'continent': 'North America', 'area': 261.0, 'expectancy': 70.7, 'temperature': 27.47} ,
{'country': 'Saint Lucia', 'population': 181889, 'continent': 'North America', 'area': 622.0, 'expectancy': 72.3, 'temperature': 27} ,
{'country': 'Saint Pierre and Miquelon', 'population': 5888, 'continent': 'North America', 'area': 242.0, 'expectancy': 77.6, 'temperature': 5.72} ,
{'country': 'Saint Vincent and the Grenadines', 'population': 110210, 'continent': 'North America', 'area': 388.0, 'expectancy': 72.3, 'temperature': 26.17} ,
{'country': 'Samoa', 'population': 196130, 'continent': 'Oceania', 'area': 2831.0, 'expectancy': 69.2, 'temperature': 27.58} ,
{'country': 'San Marino', 'population': 33785, 'continent': 'Europe', 'area': 61.0, 'expectancy': 81.1, 'temperature': 12.83} ,
{'country': 'Sao Tome and Principe', 'population': 211028, 'continent': 'Africa', 'area': 964.0, 'expectancy': 65.3, 'temperature': 24.49} ,
{'country': 'Saudi Arabia', 'population': 33699947, 'continent': 'Asia', 'area': 2149690.0, 'expectancy': 67.8, 'temperature': 25.94} ,
{'country': 'Scotland', 'population': 5424800, 'continent': 'Europe', 'area': null, 'expectancy': null, 'temperature': null} ,
{'country': 'Senegal', 'population': 15854360, 'continent': 'Africa', 'area': 196722.0, 'expectancy': 62.2, 'temperature': 28.9} ,
{'country': 'Serbia', 'population': 6963764, 'continent': 'Europe', 'area': 88361.0, 'expectancy': 76.05, 'temperature': 11.4} ,
{'country': 'Seychelles', 'population': 96762, 'continent': 'Africa', 'area': 455.0, 'expectancy': 70.4, 'temperature': 27.09} ,
{'country': 'Sierra Leone', 'population': 7650154, 'continent': 'Africa', 'area': 71740.0, 'expectancy': 45.3, 'temperature': 26.54} ,
{'country': 'Singapore', 'population': 5638676, 'continent': 'Asia', 'area': 618.0, 'expectancy': 80.1, 'temperature': 27.68} ,
{'country': 'Slovakia', 'population': 5446771, 'continent': 'Europe', 'area': 49012.0, 'expectancy': 73.7, 'temperature': 8.83} ,
{'country': 'Slovenia', 'population': 2073894, 'continent': 'Europe', 'area': 20256.0, 'expectancy': 74.9, 'temperature': 9.86} ,
{'country': 'Solomon Islands', 'population': 652858, 'continent': 'Oceania', 'area': 28896.0, 'expectancy': 71.3, 'temperature': 25.92} ,
{'country': 'Somalia', 'population': 15008154, 'continent': 'Africa', 'area': 637657.0, 'expectancy': 46.2, 'temperature': 26.95} ,
{'country': 'South Africa', 'population': 57779622, 'continent': 'Africa', 'area': 1221037.0, 'expectancy': 51.1, 'temperature': 18.23} ,
{'country': 'South Georgia and the South Sandwich Islands', 'population': 30, 'continent': 'Antarctica', 'area': 3903.0, 'expectancy': null, 'temperature': null} ,
{'country': 'South Korea', 'population': 51606633, 'continent': 'Asia', 'area': 99434.0, 'expectancy': 74.4, 'temperature': 12.22} ,
{'country': 'South Sudan', 'population': 10975920, 'continent': 'Africa', 'area': 619745.0, 'expectancy': null, 'temperature': 27.97} ,
{'country': 'Spain', 'population': 46796540, 'continent': 'Europe', 'area': 505992.0, 'expectancy': 78.8, 'temperature': 14.07} ,
{'country': 'Sri Lanka', 'population': 21670000, 'continent': 'Asia', 'area': 65610.0, 'expectancy': 75.5, 'temperature': 27.25} ,
{'country': 'Sudan', 'population': 41801533, 'continent': 'Africa', 'area': 1886068.0, 'expectancy': 56.6, 'temperature': 27.95} ,
{'country': 'Suriname', 'population': 575991, 'continent': 'South America', 'area': 163265.0, 'expectancy': 71.4, 'temperature': 26.58} ,
{'country': 'Svalbard and Jan Mayen', 'population': 2572, 'continent': 'Europe', 'area': 62422.0, 'expectancy': null, 'temperature': -6.78} ,
{'country': 'Sweden', 'population': 10175214, 'continent': 'Europe', 'area': 449964.0, 'expectancy': 79.6, 'temperature': 3.23} ,
{'country': 'Switzerland', 'population': 8513227, 'continent': 'Europe', 'area': 41284.0, 'expectancy': 79.6, 'temperature': 6.47} ,
{'country': 'Syria', 'population': 16906283, 'continent': 'Asia', 'area': 185180.0, 'expectancy': 68.5, 'temperature': 18.75} ,
{'country': 'Taiwan', 'population': null, 'continent': null, 'area': 36188.0, 'expectancy': null, 'temperature': null} ,
{'country': 'Tajikistan', 'population': 9100837, 'continent': 'Asia', 'area': 143100.0, 'expectancy': 64.1, 'temperature': 3.85} ,
{'country': 'Tanzania', 'population': 56318348, 'continent': 'Africa', 'area': 883749.0, 'expectancy': 52.3, 'temperature': 22.92} ,
{'country': 'Thailand', 'population': 69428524, 'continent': 'Asia', 'area': 513115.0, 'expectancy': 68.6, 'temperature': 26.85} ,
{'country': 'The Democratic Republic of Congo', 'population': 84068091, 'continent': 'Africa', 'area': null, 'expectancy': null, 'temperature': 24.35} ,
{'country': 'The Democratic Republic of the Congo', 'population': null, 'continent': null, 'area': 2344858.0, 'expectancy': null, 'temperature': null} ,
{'country': 'Togo', 'population': 7889094, 'continent': 'Africa', 'area': 56785.0, 'expectancy': 54.7, 'temperature': 27.33} ,
{'country': 'Tokelau', 'population': 1411, 'continent': 'Oceania', 'area': 12.0, 'expectancy': null, 'temperature': 28.71} ,
{'country': 'Tonga', 'population': 103197, 'continent': 'Oceania', 'area': 650.0, 'expectancy': 67.9, 'temperature': 25.01} ,
{'country': 'Trinidad and Tobago', 'population': 1389858, 'continent': 'North America', 'area': 5130.0, 'expectancy': 68, 'temperature': 26.55} ,
{'country': 'Tunisia', 'population': 11565204, 'continent': 'Africa', 'area': 163610.0, 'expectancy': 73.7, 'temperature': 20.53} ,
{'country': 'Turkey', 'population': 82319724, 'continent': 'Asia', 'area': 774815.0, 'expectancy': 71, 'temperature': 11.66} ,
{'country': 'Turkmenistan', 'population': 5850908, 'continent': 'Asia', 'area': 488100.0, 'expectancy': 60.9, 'temperature': 16.66} ,
{'country': 'Turks and Caicos Islands', 'population': 37665, 'continent': 'North America', 'area': 430.0, 'expectancy': 73.3, 'temperature': 26.29} ,
{'country': 'Tuvalu', 'population': 11508, 'continent': 'Oceania', 'area': 26.0, 'expectancy': 66.3, 'temperature': 28.62} ,
{'country': 'U.S. Virgin Islands', 'population': null, 'continent': null, 'area': 347.0, 'expectancy': null, 'temperature': null} ,
{'country': 'Uganda', 'population': 42723139, 'continent': 'Africa', 'area': 241038.0, 'expectancy': 42.9, 'temperature': 23.25} ,
{'country': 'Ukraine', 'population': 44622516, 'continent': 'Europe', 'area': 603700.0, 'expectancy': 66, 'temperature': 9.27} ,
{'country': 'United Arab Emirates', 'population': 9630959, 'continent': 'Asia', 'area': 83600.0, 'expectancy': 74.1, 'temperature': 28.17} ,
{'country': 'United Kingdom', 'population': 66460344, 'continent': 'Europe', 'area': 242900.0, 'expectancy': 77.7, 'temperature': 9.24} ,
{'country': 'United States', 'population': 326687501, 'continent': 'North America', 'area': 9363520.0, 'expectancy': 77.1, 'temperature': 9.46} ,
{'country': 'United States Minor Outlying Islands', 'population': 300, 'continent': 'Oceania', 'area': 16.0, 'expectancy': null, 'temperature': 24.97} ,
{'country': 'Uruguay', 'population': 3449299, 'continent': 'South America', 'area': 175016.0, 'expectancy': 75.2, 'temperature': 17.97} ,
{'country': 'Uzbekistan', 'population': 32955400, 'continent': 'Asia', 'area': 447400.0, 'expectancy': 63.7, 'temperature': 13.69} ,
{'country': 'Vanuatu', 'population': 292680, 'continent': 'Oceania', 'area': 12189.0, 'expectancy': 60.6, 'temperature': 24.44} ,
{'country': 'Venezuela', 'population': 28870195, 'continent': 'South America', 'area': 912050.0, 'expectancy': 73.1, 'temperature': 25.71} ,
{'country': 'Vietnam', 'population': 95540395, 'continent': 'Asia', 'area': 331689.0, 'expectancy': 69.3, 'temperature': 24.79} ,
{'country': 'Virgin Islands, British', 'population': 29802, 'continent': 'North America', 'area': null, 'expectancy': null, 'temperature': 26.7} ,
{'country': 'Virgin Islands, U.S.', 'population': 106977, 'continent': 'North America', 'area': null, 'expectancy': null, 'temperature': 26.98} ,
{'country': 'Wales', 'population': 3139000, 'continent': 'Europe', 'area': null, 'expectancy': null, 'temperature': null} ,
{'country': 'Wallis and Futuna', 'population': 15289, 'continent': 'Oceania', 'area': 200.0, 'expectancy': null, 'temperature': 27.3} ,
{'country': 'Western Sahara', 'population': 652271, 'continent': 'Africa', 'area': 266000.0, 'expectancy': 49.8, 'temperature': null} ,
{'country': 'Yemen', 'population': 28498687, 'continent': 'Asia', 'area': 527968.0, 'expectancy': 59.8, 'temperature': 25.54} ,
{'country': 'Zambia', 'population': 17351822, 'continent': 'Africa', 'area': 752618.0, 'expectancy': 37.2, 'temperature': 22.23} ,
{'country': 'Zimbabwe', 'population': 14439018, 'continent': 'Africa', 'area': 390757.0, 'expectancy': 37.8, 'temperature': 21.9}
]



const continents = [
    {
      name: "Africa",
      imageUrl:
      "images/africa.png"
    },
    {
      name: "Antarctica",
      imageUrl:
      "images/Antarctica.jpeg"
    },
    {
      name: "Asia",
      imageUrl:
      "images/asia.png"
    },
    {
      name: "Europe",
      imageUrl:
      "images/europe.png"
    },
    {
      name: "North America",
      imageUrl:
      "images/north-america.jpg"
    },
    {
        name: "Oceania",
      imageUrl:
      "images/oceania.jpeg"
    },
    {
      name: "South America",
      imageUrl:
      "images/south-america.png"
    }
  ];



  
const gallery = document.getElementById('photoGallery');
const container = document.getElementById('charts-container');
const generalHeading = document.getElementById('general-heading');
const countriesCountainer = document.getElementById('countries-container');



function displayJs(pageParam) {
    gallery.innerHTML = ''; // Clear the gallery
    container.innerHTML = ''; // clear container
    generalHeading.textContent = "Home";
    countriesCountainer.innerHTML = '';

    let filteredCountries = continents;
    if(pageParam === "home"){
        filteredCountries.forEach(temple => {
            const figure = document.createElement('figure');
            const aElement = document.createElement('a');
            figure.classList.add('figure');
    
            const figcaption = document.createElement('figcaption');
            figcaption.innerHTML = `<h2 class="fig-heading"><strong>${temple.name}</strong></h2>`;
            figure.appendChild(figcaption);

    
            const img = document.createElement('img');
            img.src = temple.imageUrl;
            img.alt = `${temple.name}`;
            img.loading = "lazy";
            figure.appendChild(img);
            
            aElement.href= "#";
            aElement.onclick = function() {
                showCountries(temple.name);
            };
            aElement.appendChild(figure)

            gallery.appendChild(aElement);
        });

    }
    else if (pageParam === 'population') {
        createBarChart(dataList,pageParam);
        generalHeading.textContent = "Population";
    } else if (pageParam === 'landmass') {
        createBarChart(dataList,"area");
        generalHeading.textContent = "Landmass";
    } else if (pageParam === 'lifeExpectancy') {
        createBarChart(dataList,"expectancy");
        generalHeading.textContent = "Life Expectancy";
    } else if (pageParam === 'temperature') {
        createBarChart(dataList,pageParam);
        generalHeading.textContent = "Temperature";
    }

}

function createBarChart(data, pageParam) {
    // Filter out any entries with null values
    const filteredData = data.filter(item => 
        item.population !== null &&
        item.country !== null &&
        item.continent !== null
    );

    // const container = document.getElementById('charts-container');
    const continents = [...new Set(filteredData.map(item => item.continent))];

    continents.forEach(continent => {
        const continentData = filteredData.filter(item => item.continent === continent);
        const chartDiv = document.createElement('div');
        chartDiv.className = 'continent-chart';
        
        // Add continent name
        const titleDiv = document.createElement('div');
        titleDiv.className = 'chart-title';
        titleDiv.textContent = continent;
        chartDiv.appendChild(titleDiv);
        
        const barContainerDiv = document.createElement('div');
        barContainerDiv.className = 'bar-container';

        // Determine maximum population to scale bars
        const maxPopulation = Math.max(...continentData.map(item => item[pageParam]));
        const maxBarHeight = 370; // Adjust to leave space for base offset and title
        const scaleFactor = maxBarHeight / maxPopulation; // Scale to fit the chart height

        continentData.forEach(item => {
            const barDiv = document.createElement('div');
            barDiv.className = 'bar';
            
            const barHeight = item[pageParam] * scaleFactor; // Calculate bar height
            barDiv.style.height = `${barHeight}px`;
            
            const barTextDiv = document.createElement('div');
            barTextDiv.className = 'bar-text';
            barTextDiv.textContent = item.country;
            
            barDiv.appendChild(barTextDiv);
            barContainerDiv.appendChild(barDiv);
        });

        chartDiv.appendChild(barContainerDiv);
        container.appendChild(chartDiv);
    });
}

function showCountries(continentToShow){
    countriesCountainer.innerHTML = '';
    let filtCountries = dataList.filter(country =>country.continent == continentToShow);
    gallery.innerHTML = ''; // Clear the gallery
    container.innerHTML = ''; // clear container
    const countryDivs = document.createElement('div');
    const countryUl = document.createElement('ul');
    generalHeading.textContent = `Countries In ${continentToShow}`;

filtCountries.forEach(country=>{
    const countryLi = document.createElement('li');
        countryLi.innerHTML = `<h2 class="fig-heading"><strong>${country.country}</strong></h2>`;
        countryUl.appendChild(countryLi);
})


countryDivs.appendChild(countryUl);
countriesCountainer.appendChild(countryDivs);
}

 // Function to update the displayed click count
 function updateClickCountDisplay() {
    let clickCount = localStorage.getItem('clickcount');
    document.getElementById('clickCountDisplay').textContent = 'Click count: ' + clickCount;
}

// Check if 'clickcount' is already in local storage, if not, initialize it to 0
if (localStorage.getItem('clickcount') === null || localStorage.getItem('clickcount') > 0 ) {
    localStorage.setItem('clickcount', '0');
}

// Function to increment click count
function incrementClickCount() {
    let clickCount = parseInt(localStorage.getItem('clickcount'));
    clickCount += 1;
    localStorage.setItem('clickcount', clickCount.toString());
    updateClickCountDisplay();
}

// Add event listener to document to capture all clicks
document.addEventListener('click', incrementClickCount);
updateClickCountDisplay();

function openStats(username) {
    // Clear the main element
    countriesCountainer.innerHTML = '';
    gallery.innerHTML = ''; // Clear the gallery
    container.innerHTML = ''; // clear container

    // Display the username and a number
    const number = localStorage.getItem('clickcount');
    generalHeading.textContent = "User Click Statistics"
    container.innerHTML = `<P>Name:  ${username},</P><P>Number of Clicks: ${number}</P>`;
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    const username = document.getElementById('username').value;
    openStats(username); // Call the function with the username
    return false; // Prevent the form from submitting
}


// Initially display all Continents
displayJs('home');