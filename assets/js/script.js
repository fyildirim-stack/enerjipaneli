// const apiKey = ""; // Artık dinamik olarak yönetiliyor
const years = Array.from({ length: 25 }, (_, i) => 2000 + i);

// --- FULL DATA STORE ---
const data = {
    macro: {
        supply: [3.18, 2.93, 3.10, 3.29, 3.38, 3.52, 3.90, 4.21, 4.12, 4.15, 4.48, 4.70, 4.85, 4.90, 5.05, 5.20, 5.40, 5.80, 5.75, 5.85, 5.80, 6.10, 6.05, 6.15, 6.20],
        co2: [201.2, 182.6, 192.5, 203.1, 207.3, 215.8, 240.2, 266.1, 262.3, 261.2, 267.8, 287.1, 298.4, 285.1, 307.1, 318.9, 338.8, 378.6, 374.7, 366.4, 366.1, 400.7, 389.9, 392.3, 395.0],
        dep: [66.7, 65.7, 69.1, 71.8, 71.9, 73.5, 74.1, 75.0, 74.5, 71.0, 72.0, 72.5, 74.0, 73.5, 75.0, 76.0, 75.5, 76.5, 73.0, 70.0, 69.5, 70.5, 71.0, 70.0, 68.5],
        // Energy Intensity Index (2000=100)
        intensity: [100, 97.4, 97.4, 97.4, 91.0, 87.1, 89.7, 92.3, 89.7, 89.7, 87.1, 87.1, 84.6, 79.4, 76.9, 74.3, 74.3, 76.9, 74.3, 71.7, 69.2, 66.6, 64.1, 61.5, 59.0],
        hydro: [0.11, 0.09, 0.12, 0.13, 0.17, 0.14, 0.16, 0.13, 0.12, 0.13, 0.18, 0.19, 0.21, 0.21, 0.15, 0.24, 0.24, 0.21, 0.22, 0.32, 0.28, 0.20, 0.24, 0.23, 0.27],
        bio: [0.27, 0.26, 0.25, 0.24, 0.23, 0.22, 0.22, 0.21, 0.20, 0.19, 0.18, 0.17, 0.16, 0.15, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.20, 0.22, 0.24, 0.25, 0.26],
        newRenew: [0.04, 0.04, 0.05, 0.05, 0.05, 0.06, 0.06, 0.06, 0.07, 0.08, 0.10, 0.12, 0.15, 0.18, 0.22, 0.30, 0.35, 0.42, 0.50, 0.58, 0.65, 0.75, 0.85, 0.95, 1.05]
    },
    sectoral: {
        industry: [829334, 648232, 786649, 890125, 930450, 946777, 1073801, 1009382, 755939, 809393, 954684, 1012340, 1056780, 1024500, 1089000, 1123400, 1167800, 1245000, 1210000, 1225000, 1260000, 1380000, 1350000, 1360000, 1370000],
        transport: [492303, 470754, 493997, 493471, 551048, 595738, 647610, 667936, 630884, 625046, 612507, 654320, 698450, 745000, 810000, 885000, 945000, 998000, 980000, 1010000, 920000, 1050000, 1100000, 1150000, 1200000],
        residential: [726102, 679356, 688553, 721587, 720072, 745145, 797920, 844900, 844764, 788182, 811246, 825000, 835000, 810000, 805000, 820000, 840000, 860000, 830000, 850000, 890000, 910000, 895000, 900000, 905000],
        services: [104360, 115358, 126598, 158228, 185194, 218228, 241800, 279530, 426666, 409917, 397459, 410000, 435000, 460000, 490000, 520000, 550000, 590000, 600000, 620000, 580000, 650000, 680000, 710000, 740000],
        agriculture: [122110, 122208, 133423, 122179, 143160, 136456, 147610, 162117, 210058, 197845, 206884, 215000, 220000, 210000, 205000, 215000, 225000, 235000, 240000, 245000, 250000, 260000, 255000, 260000, 265000]
    },
    elec: {
        cap: [27264, 28332, 31846, 35587, 36824, 38843, 40565, 40836, 41817, 44761, 49524, 52911, 57059, 64007, 69519, 73147, 78497, 85200, 88550, 91267, 95890, 99819, 103800, 106668, 110000],
        gen: [124922, 122725, 129400, 140581, 150698, 161956, 176300, 191558, 198418, 194813, 211208, 229395, 239497, 240154, 251963, 261783, 274408, 297277, 304802, 303898, 306703, 334723, 326014, 326300, 346208],
        renewShare: [25.0, 19.8, 26.0, 25.3, 30.6, 24.7, 25.1, 19.5, 17.5, 19.5, 26.3, 25.6, 27.0, 28.9, 21.0, 32.2, 32.9, 29.4, 32.4, 44.0, 42.4, 36.0, 42.1, 43.0, 45.7],
        hydro: [30.8, 24.0, 33.6, 35.3, 46.0, 39.5, 44.2, 35.8, 33.2, 35.9, 51.7, 52.3, 57.8, 59.4, 40.6, 67.1, 67.2, 58.2, 59.9, 88.8, 78.0, 55.9, 67.2, 63.8, 74.8],
        wind: [0.03, 0.06, 0.04, 0.06, 0.05, 0.05, 0.12, 0.35, 0.84, 1.49, 2.91, 4.72, 5.86, 7.55, 8.52, 11.6, 15.5, 17.9, 19.9, 21.7, 24.8, 31.4, 35.1, 34.9, 36.6],
        solar: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.2, 1.0, 2.8, 7.8, 9.2, 10.9, 12.9, 15.2, 20.2, 25.8],
        t13HydroCap: [11.2, 11.7, 12.2, 12.6, 12.6, 12.9, 13.1, 13.4, 13.8, 14.6, 15.8, 17.1, 19.6, 22.3, 23.6, 25.9, 26.7, 27.3, 28.3, 28.5, 29.7, 31.4, 31.6, 31.9, 32.2],
        t13RenewCap: [0, 0, 0, 0, 0, 0, 0.1, 0.2, 0.4, 0.9, 1.5, 1.9, 2.5, 3.4, 4.3, 5.6, 7.5, 9.8, 12.1, 14.8, 16.7, 20.1, 23.4, 25.8, 28.5],
        t13HydroGen: [30.9, 24.0, 33.7, 35.3, 46.1, 39.6, 44.2, 35.9, 33.3, 36.0, 51.8, 52.3, 57.8, 59.4, 40.6, 67.1, 67.2, 58.2, 59.9, 88.8, 78.1, 55.9, 67.2, 63.8, 74.8],
        t13RenewGen: [0.1, 0.2, 0.3, 0.3, 0.2, 0.2, 0.2, 0.5, 1.0, 1.9, 3.7, 5.7, 7.3, 8.8, 10.7, 13.7, 18.5, 22.1, 28.2, 33.6, 47.7, 60.1, 68.3, 73.1, 80.5]
    },
    fossil: {
        oilProd: [2749, 2551, 2442, 2375, 2276, 2281, 2176, 2134, 2160, 2237, 2496, 2367, 2338, 2399, 2456, 2516, 2573, 2553, 2851, 2986, 3203, 3442, 3583, 4101, 5310],
        oilImp: [30917, 29518, 31684, 32798, 34143, 34350, 36166, 37060, 35715, 32405, 35002, 34492, 36199, 36188, 36785, 48749, 49626, 52403, 48594, 51947, 47617, 50144, 54066, 56921, 48741],
        oilExp: [1551, 2570, 3030, 3861, 3824, 4858, 6238, 6576, 6547, 5889, 7089, 5179, 5919, 4404, 5293, 6954, 6297, 6683, 4996, 9435, 7730, 7841, 9236, 9580, 5373],
        oilRatio: [8.80, 8.67, 8.17, 7.76, 7.20, 7.34, 6.98, 6.63, 6.98, 8.07, 8.80, 8.17, 7.99, 7.84, 8.14, 6.56, 6.23, 5.89, 6.93, 7.46, 7.82, 8.13, 8.20, 8.87, 9.29],
        gasProd: [0.64, 0.31, 0.34, 0.56, 0.70, 0.89, 0.91, 0.89, 1.02, 0.69, 0.68, 0.76, 0.63, 0.54, 0.48, 0.38, 0.37, 0.35, 0.44, 0.48, 0.46, 0.42, 0.41, 0.85, 2.26],
        gasImp: [14.82, 29.51, 31.69, 32.79, 34.14, 26.49, 30.22, 35.83, 37.15, 35.86, 38.04, 43.87, 45.92, 45.27, 49.26, 48.43, 46.35, 55.25, 50.36, 45.21, 48.13, 58.70, 54.66, 50.48, 52.21],
        gasExp: [0, 2.6, 3.03, 3.86, 3.82, 0.63, 0.56, 0.03, 0.44, 0.71, 0.65, 0.71, 0.61, 0.68, 0.63, 0.62, 0.68, 0.63, 0.67, 0.76, 0.58, 0.38, 0.58, 0.89, 1.78],
        gasRatio: [4.24, 1.05, 1.14, 1.83, 2.21, 3.28, 2.92, 2.43, 2.76, 1.93, 1.78, 1.70, 1.39, 1.18, 0.99, 0.79, 0.80, 0.65, 0.88, 1.07, 0.95, 0.70, 0.78, 1.69, 4.15],
        coalProdHard: [2392, 2493, 2319, 2059, 1945, 2170, 2319, 2462, 2601, 2308, 2619, 2292, 1960, 1820, 1435, 1377, 1234, 1183, 1020, 1066, 1026, 1236, 1416, 1068, 1100],
        coalProdLig: [60854, 59572, 51660, 46168, 43709, 57708, 61484, 72112, 76171, 69698, 71535, 66933, 57525, 62573, 56122, 70239, 71439, 81514, 81043, 71637, 83559, 83559, 92296, 71868, 75000],
        coalImp: [12990, 8028, 11692, 16166, 16427, 17366, 20286, 22296, 19498, 20173, 20683, 29195, 26813, 29119, 28913, 33979, 28251, 37844, 38329, 14381, 47189, 47189, 37619, 40194, 38000],
        lng: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7.2, 7.6, 7.6, 10.7, 11.2, 12.6, 15.0, 15.9, 15.2, 16.0, 16.5]
    },
    geo: {
        gas: {
            russia: [10.5, 11.2, 12.8, 13.5, 14.1, 17.5, 19.3, 22.7, 23.1, 19.4, 17.5, 25.4, 26.4, 26.2, 26.9, 26.7, 24.5, 28.6, 23.6, 15.1, 16.1, 26.3, 21.5, 21.0, 20.0],
            iran: [0, 0.1, 0.8, 3.5, 3.9, 4.2, 5.6, 6.0, 4.1, 5.2, 7.7, 8.2, 8.2, 8.7, 8.9, 7.8, 7.7, 9.2, 7.8, 7.7, 5.3, 9.4, 9.0, 8.5, 8.0],
            aze: [0, 0, 0, 0, 0, 0, 0, 1.2, 4.5, 4.9, 4.5, 3.8, 3.3, 4.2, 6.0, 6.1, 6.4, 6.5, 7.5, 9.6, 11.5, 8.8, 8.7, 10.2, 11.4],
            algeria: [3.3, 3.4, 3.5, 3.6, 3.7, 3.7, 4.1, 4.2, 4.1, 4.4, 3.9, 4.1, 4.0, 3.9, 3.8, 4.2, 4.7, 5.5, 5.8, 5.9, 6.0, 5.9, 6.1, 5.5, 6.0],
            usa: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 1.0, 1.5, 2.5, 3.5, 5.0, 6.0, 5.5, 4.0, 4.5]
        },
        oil: {
            russia: [4500, 4800, 5100, 5300, 5400, 5000, 5500, 9365, 7137, 5762, 3320, 2131, 2113, 1462, 607, 7026, 7764, 5000, 5000, 8000, 8579, 10000, 15000, 12000, 11000],
            iraq: [400, 450, 500, 550, 600, 500, 600, 865, 1874, 1733, 2001, 3071, 3739, 6000, 5483, 11410, 9252, 7058, 6613, 9527, 11784, 13276, 12516, 9874, 4796],
            iran: [6000, 6500, 7000, 7500, 7800, 7000, 7500, 8356, 7800, 3228, 7261, 9287, 7561, 5256, 5195, 5588, 6939, 11493, 7110, 2110, 0, 0, 0, 0, 0],
            kazakh: [0, 0, 0, 0, 0, 0, 0, 0, 636, 522, 1786, 1186, 1414, 1545, 1525, 691, 600, 470, 1214, 3179, 3332, 4519, 4267, 5746, 2981]
        },
        coal: {
            russia: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9115, 8660, 9788, 8574, 8325, 11223, 12428, 14246, 16340, 6497, 15572, 18875, 15047, 16077, 15960],
            colombia: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2656, 5448, 7260, 7156, 8998, 11254, 11624, 12132, 13148, 4764, 11405, 13819, 11015, 11769, 11683],
            usa: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2284, 2643, 4331, 4029, 4135, 2011, 2174, 3024, 3952, 1640, 3982, 4826, 3848, 4111, 4081],
            aus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1286, 1066, 1374, 905, 0, 2793, 2307, 2412, 1406, 595, 1448, 1755, 1399, 1495, 1484],
            other: [12990, 8028, 11692, 16166, 16427, 17366, 20286, 22296, 19498, 20173, 3632, 3042, 2335, 1956, 3397, 1620, 1853, 1742, 1622, 1455, 1600, 1450, 1110, 1110, 1080]
        }
    },
    indices: {
        hhi: [4900, 4850, 4800, 4750, 4700, 4822, 4628, 4400, 4200, 4000, 3500, 2800, 2500, 2097, 2300, 2400, 2500, 2600, 2400, 2200, 2068, 2000, 2100, 2200, 2250],
        swi: [1.35, 1.32, 1.38, 1.40, 1.46, 1.47, 1.41, 1.34, 1.31, 1.32, 1.38, 1.38, 1.41, 1.47, 1.45, 1.49, 1.50, 1.52, 1.55, 1.56, 1.58, 1.60, 1.62, 1.63, 1.65]
    }
};

Chart.defaults.font.family = 'Inter';
Chart.defaults.color = '#64748b';
Chart.defaults.maintainAspectRatio = false;

// --- CHART INITIALIZATIONS ---

// 1. MACRO
const chartMacroSupply = new Chart(document.getElementById('chartMacroSupply'), {
    type: 'line',
    data: {
        labels: years, datasets: [
            { label: 'Toplam Arz (Exajoule)', data: data.macro.supply, borderColor: '#0f172a', yAxisID: 'y' },
            { label: 'CO2 Emisyonu (Mt)', data: data.macro.co2, borderColor: '#ef4444', borderDash: [5, 5], yAxisID: 'y1' }
        ]
    },
    options: { scales: { y: { position: 'left', title: { display: true, text: 'Arz (Exajoule)' } }, y1: { position: 'right', grid: { drawOnChartArea: false }, title: { display: true, text: 'CO2 (Mt)' } } } }
});

const chartMacroEfficiency = new Chart(document.getElementById('chartMacroEfficiency'), {
    type: 'line',
    data: {
        labels: years, datasets: [
            { label: 'Enerji Yoğunluğu Endeksi (2000=100)', data: data.macro.intensity, borderColor: '#2563eb', backgroundColor: 'rgba(37, 99, 235, 0.1)', fill: true }
        ]
    },
    options: { scales: { y: { reverse: true, title: { display: true, text: 'Düşük Değer = Yüksek Verimlilik' } } } }
});

const chartRenewableSupply = new Chart(document.getElementById('chartRenewableSupply'), {
    type: 'line',
    data: {
        labels: years, datasets: [
            { label: 'Biyokütle', data: data.macro.bio, fill: true },
            { label: 'Hidrolik', data: data.macro.hydro, fill: true },
            { label: 'Güneş/Rüzgar/Jeo', data: data.macro.newRenew, fill: true }
        ]
    },
    options: { scales: { y: { stacked: true } } }
});

const chartMacroSectorPie = new Chart(document.getElementById('chartMacroSectorPie'), { type: 'doughnut', data: { labels: ['Sanayi', 'Ulaştırma', 'Mesken', 'Hizmetler', 'Tarım'], datasets: [{ data: [1, 1, 1, 1, 1], backgroundColor: ['#1e293b', '#f59e0b', '#3b82f6', '#10b981', '#64748b'] }] } });
const chartMacroSectorTrend = new Chart(document.getElementById('chartMacroSectorTrend'), { type: 'line', data: { labels: years, datasets: [{ label: 'Sanayi', data: data.sectoral.industry, fill: true }, { label: 'Ulaş.', data: data.sectoral.transport, fill: true }, { label: 'Mesken', data: data.sectoral.residential, fill: true }, { label: 'Hizmet', data: data.sectoral.services, fill: true }] } });

// 2. ELEC
const chartElecMix = new Chart(document.getElementById('chartElecMix'), { type: 'bar', data: { labels: years, datasets: [{ label: 'Kurulu Güç (MW)', data: data.elec.cap }, { label: 'Üretim (GWh)', data: data.elec.gen, type: 'line' }] } });
const chartElecRenew = new Chart(document.getElementById('chartElecRenew'), { type: 'line', data: { labels: years, datasets: [{ label: 'Hydro', data: data.elec.hydro }, { label: 'Wind', data: data.elec.wind }, { label: 'Solar', data: data.elec.solar }] } });
const chartTablo13Renew = new Chart(document.getElementById('chartTablo13Renew'), {
    type: 'bar',
    data: {
        labels: years,
        datasets: [
            { label: 'Total GW', data: data.elec.cap.map(x => x / 1000), bg: '#e2e8f0', yAxisID: 'y' },
            { label: 'Ren GW', data: years.map((_, i) => data.elec.t13HydroCap[i] + data.elec.t13RenewCap[i]), bg: '#10b981', yAxisID: 'y' },
            { label: 'Total TWh', data: data.elec.gen.map(x => x / 1000), borderColor: '#64748b', type: 'line', yAxisID: 'y1' },
            { label: 'Ren TWh', data: years.map((_, i) => data.elec.t13HydroGen[i] + data.elec.t13RenewGen[i]), borderColor: '#2563eb', type: 'line', yAxisID: 'y1' }
        ]
    },
    options: { scales: { y: { position: 'left' }, y1: { position: 'right' } } }
});

// 3. FOSSIL
const createMixed = (id, d1, d2, d3, d4) => new Chart(document.getElementById(id), {
    type: 'bar', data: {
        labels: years, datasets: [
            { label: 'İthalat', data: d1, bg: '#ef4444', stack: '0' }, { label: 'Yerli', data: d2, bg: '#22c55e', stack: '0' },
            { label: 'İhracat', data: d3, type: 'line', borderColor: '#94a3b8' }, { label: 'Yerlilik %', data: d4, type: 'line', borderColor: '#f59e0b', yAxisID: 'y1' }
        ]
    }, options: { scales: { y: { stacked: true }, y1: { position: 'right' } } }
});
const chartFossilOil = createMixed('chartFossilOil', data.fossil.oilImp, data.fossil.oilProd, data.fossil.oilExp, data.fossil.oilRatio);
const chartFossilGas = createMixed('chartFossilGas', data.fossil.gasImp, data.fossil.gasProd, data.fossil.gasExp, data.fossil.gasRatio);
const chartFossilCoal = new Chart(document.getElementById('chartFossilCoal'), { type: 'bar', data: { labels: years, datasets: [{ label: 'İthal', data: data.fossil.coalImp, bg: '#475569', stack: '0' }, { label: 'Linyit', data: data.fossil.coalProdLig, bg: '#16a34a', stack: '0' }] }, options: { scales: { y: { stacked: true } } } });
const chartLNG = new Chart(document.getElementById('chartLNG'), { type: 'bar', data: { labels: years, datasets: [{ label: 'LNG', data: data.fossil.lng, bg: '#f59e0b', stack: '0' }, { label: 'Boru', data: data.fossil.gasImp.map((v, i) => v - data.fossil.lng[i]), bg: '#334155', stack: '0' }] }, options: { scales: { y: { stacked: true } } } });

// 4. GEO
const chartGeoCountryFocus = new Chart(document.getElementById('chartGeoCountryFocus'), { type: 'bar', data: { labels: years, datasets: [] }, options: { scales: { y: { beginAtZero: true } } } });
const createShare = (id) => new Chart(document.getElementById(id), { type: 'bar', data: { labels: years, datasets: [] }, options: { scales: { x: { stacked: true }, y: { stacked: true, max: 100 } }, plugins: { legend: { display: false } } } });
const chartGeoGasShare = createShare('chartGeoGasShare');
const chartGeoOilShare = createShare('chartGeoOilShare');
const chartGeoCoalShare = createShare('chartGeoCoalShare');

// 5. INDICES - SEPARATE CHARTS
const chartHHI = new Chart(document.getElementById('chartHHI'), {
    type: 'line',
    data: { labels: years, datasets: [{ label: 'HHI (Pazar Yoğunlaşması)', data: data.indices.hhi, borderColor: '#b91c1c', tension: 0.3 }] },
    options: { scales: { y: { title: { display: true, text: 'HHI (0-10000)' } } } }
});

const chartSWI = new Chart(document.getElementById('chartSWI'), {
    type: 'line',
    data: { labels: years, datasets: [{ label: 'SWI (Çeşitlilik)', data: data.indices.swi, borderColor: '#059669', tension: 0.3 }] },
    options: { scales: { y: { title: { display: true, text: 'SWI (Skor)' } } } }
});


// --- UPDATE LOGIC ---
let currentYear = 2000;
let isPlaying = false;
let playInterval;

function updateDashboard(year) {
    currentYear = year;
    const idx = year - 2000;
    document.getElementById('displayYear').innerText = year;

    // MACRO
    document.getElementById('macro-supply').innerText = data.macro.supply[idx];
    document.getElementById('macro-dep').innerText = '%' + data.macro.dep[idx];
    document.getElementById('macro-co2').innerText = data.macro.co2[idx];

    const renShare = ((data.macro.hydro[idx] + data.macro.bio[idx] + data.macro.newRenew[idx]) / data.macro.supply[idx] * 100).toFixed(1);
    document.getElementById('macro-renew-share').innerText = '%' + renShare;
    document.getElementById('context-macro').innerText = year < 2005 ? "2000'li yıllar başı: Ekonomik kriz sonrası toparlanma." : (year < 2012 ? "2005-2010: Doğalgazın zirve yapması." : "2012 Sonrası: Yenilenebilir (YEKDEM) atılımı ve Milli Enerji Politikası.");

    renderRenewableTable();

    // ELEC
    document.getElementById('elec-cap').innerText = data.elec.cap[idx].toLocaleString();
    document.getElementById('elec-gen').innerText = data.elec.gen[idx].toLocaleString();
    document.getElementById('elec-renew').innerText = '%' + data.elec.renewShare[idx];
    renderTable13();

    // FOSSIL
    document.getElementById('kpi-oil-supply').innerText = (data.fossil.oilProd[idx] + data.fossil.oilImp[idx]).toLocaleString();
    document.getElementById('txt-oil-ratio').innerText = data.fossil.oilRatio[idx];
    document.getElementById('bar-oil-ratio').style.width = data.fossil.oilRatio[idx] + '%';
    document.getElementById('kpi-gas-supply').innerText = (data.fossil.gasProd[idx] + data.fossil.gasImp[idx]).toFixed(2);
    document.getElementById('txt-gas-ratio').innerText = data.fossil.gasRatio[idx];
    document.getElementById('bar-gas-ratio').style.width = (data.fossil.gasRatio[idx] * 5) + '%';
    document.getElementById('kpi-coal-supply').innerText = (data.fossil.coalImp[idx] + data.fossil.coalProdLig[idx]).toLocaleString();
    const coalRatio = ((data.fossil.coalProdLig[idx] + data.fossil.coalProdHard[idx]) / (data.fossil.coalImp[idx] + data.fossil.coalProdLig[idx] + data.fossil.coalProdHard[idx]) * 100).toFixed(1);
    document.getElementById('txt-coal-ratio').innerText = coalRatio;
    document.getElementById('bar-coal-ratio').style.width = coalRatio + '%';

    // GEO
    const gasSources = { Rusya: data.geo.gas.russia[idx], İran: data.geo.gas.iran[idx] };
    const topGas = Object.entries(gasSources).reduce((a, b) => a[1] > b[1] ? a : b);
    document.getElementById('kpi-geo-gas-name').innerText = topGas[0];
    document.getElementById('kpi-geo-gas-share').innerText = '%' + ((topGas[1] / data.fossil.gasImp[idx]) * 100).toFixed(1);

    const oilSources = { Irak: data.geo.oil.iraq[idx], Rusya: data.geo.oil.russia[idx] };
    const topOil = Object.entries(oilSources).reduce((a, b) => a[1] > b[1] ? a : b);
    document.getElementById('kpi-geo-oil-name').innerText = topOil[0];
    document.getElementById('kpi-geo-oil-share').innerText = '%' + ((topOil[1] / data.fossil.oilImp[idx]) * 100).toFixed(1);

    const coalSources = { Rusya: data.geo.coal.russia[idx], Kolombiya: data.geo.coal.colombia[idx] };
    const topCoal = Object.entries(coalSources).reduce((a, b) => a[1] > b[1] ? a : b);

    // Handle pre-2010 zero data for coal breakdown
    if (data.fossil.coalImp[idx] < 10000 && idx < 10) {
        document.getElementById('kpi-geo-coal-name').innerText = "Veri Yok";
        document.getElementById('kpi-geo-coal-share').innerText = "-";
    } else {
        document.getElementById('kpi-geo-coal-name').innerText = topCoal[0];
        document.getElementById('kpi-geo-coal-share').innerText = '%' + ((topCoal[1] / data.fossil.coalImp[idx]) * 100).toFixed(1);
    }

    // INDICES
    const hhiVal = data.indices.hhi[idx];
    const swiVal = data.indices.swi[idx];
    document.getElementById('kpi-hhi-score').innerText = hhiVal.toFixed(0);
    document.getElementById('kpi-swi-score').innerText = swiVal.toFixed(2);
    document.getElementById('kpi-intensity-score').innerText = data.macro.intensity[idx];
    document.getElementById('txt-hhi').innerText = hhiVal > 2500 ? "Yüksek Yoğunlaşma (Risk)" : "Düşük Yoğunlaşma (Güvenli)";
    document.getElementById('txt-swi').innerText = swiVal > 1.5 ? "Yüksek Çeşitlilik (İyi)" : "Düşük Çeşitlilik";

    // Chart Annotations (Lines)
    [chartMacroSupply, chartMacroEfficiency, chartMacroSectorTrend, chartRenewableSupply, chartElecMix, chartElecRenew, chartTablo13Renew, chartFossilOil, chartFossilGas, chartFossilCoal, chartLNG, chartHHI, chartSWI].forEach(c => {
        if (c.options.plugins.annotation) {
            c.options.plugins.annotation.annotations = { line1: { type: 'line', xMin: idx, xMax: idx, borderColor: 'orange', borderWidth: 2 } };
            c.update('none');
        }
    });

    // Dynamic Pie
    chartMacroSectorPie.data.datasets[0].data = [data.sectoral.industry[idx], data.sectoral.transport[idx], data.sectoral.residential[idx], data.sectoral.services[idx], data.sectoral.agriculture[idx]];
    chartMacroSectorPie.update();

    // Share Charts (Geo)
    updateShareCharts(idx);
}

function renderRenewableTable() {
    const tbody = document.getElementById('renew-table-body');
    tbody.innerHTML = '';
    years.forEach((yr, i) => {
        const tr = document.createElement('tr');
        if (yr === currentYear) tr.className = 'highlight-row';
        const totalRen = (data.macro.hydro[i] + data.macro.bio[i] + data.macro.newRenew[i]).toFixed(2);
        const share = ((data.macro.hydro[i] + data.macro.bio[i] + data.macro.newRenew[i]) / data.macro.supply[i] * 100).toFixed(1);
        tr.innerHTML = `<td class="px-3 py-1">${yr}</td><td class="px-3 py-1 text-right">${totalRen}</td><td class="px-3 py-1 text-right font-bold">%${share}</td>`;
        tbody.appendChild(tr);
    });
    // Removed scrollIntoView to fix jump issue
    const activeRow = tbody.children[currentYear - 2000];
    if (activeRow) {
        // Manually scroll container only
        tbody.parentElement.scrollTop = activeRow.offsetTop - tbody.parentElement.offsetTop - 50;
    }
}

function renderTable13() {
    const tbody = document.getElementById('tablo13-body');
    tbody.innerHTML = '';
    years.forEach((yr, i) => {
        const tr = document.createElement('tr');
        if (yr === currentYear) tr.className = 'highlight-row';
        const renCap = (data.elec.t13HydroCap[i] + data.elec.t13RenewCap[i]).toFixed(1);
        const renGen = (data.elec.t13HydroGen[i] + data.elec.t13RenewGen[i]).toFixed(1);

        const totalCap = data.elec.cap[i] / 1000;
        const renCapShare = ((renCap / totalCap) * 100).toFixed(1);
        const totalGen = data.elec.gen[i] / 1000;
        const renGenShare = ((renGen / totalGen) * 100).toFixed(1);

        tr.innerHTML = `<td class="px-2 py-1 text-center">${yr}</td><td class="px-2 py-1 text-right">%${renCapShare} <span class="text-[10px] text-slate-400">(${renCap} GW)</span></td><td class="px-2 py-1 text-right">%${renGenShare} <span class="text-[10px] text-slate-400">(${renGen} TWh)</span></td>`;
        tbody.appendChild(tr);
    });
    const activeRow = tbody.children[currentYear - 2000];
    if (activeRow) {
        tbody.parentElement.scrollTop = activeRow.offsetTop - tbody.parentElement.offsetTop - 50;
    }
}

function updateShareCharts(idx) {
    // ** FIX: Calculate Percentages Dynamically **
    const calcPerc = (val, total) => total > 0 ? (val / total * 100) : 0;

    // GAS
    const gasTotal = data.geo.gas.russia.map((v, i) => v + data.geo.gas.iran[i] + data.geo.gas.aze[i] + data.geo.gas.algeria[i] + data.geo.gas.usa[i]);
    chartGeoGasShare.data.datasets = [
        { label: 'Rusya', data: data.geo.gas.russia.map((v, i) => calcPerc(v, gasTotal[i])), bg: '#ef4444' },
        { label: 'İran', data: data.geo.gas.iran.map((v, i) => calcPerc(v, gasTotal[i])), bg: '#22c55e' },
        { label: 'Azerbaycan', data: data.geo.gas.aze.map((v, i) => calcPerc(v, gasTotal[i])), bg: '#3b82f6' },
        { label: 'Diğer (LNG)', data: data.geo.gas.algeria.map((v, i) => calcPerc(v + data.geo.gas.usa[i], gasTotal[i])), bg: '#cbd5e1' }
    ];
    chartGeoGasShare.update('none');

    // OIL
    const oilTotal = data.geo.oil.russia.map((v, i) => v + data.geo.oil.iraq[i] + data.geo.oil.iran[i] + data.geo.oil.kazakh[i]);
    chartGeoOilShare.data.datasets = [
        { label: 'Irak', data: data.geo.oil.iraq.map((v, i) => calcPerc(v, oilTotal[i])), bg: '#cbd5e1' },
        { label: 'Rusya', data: data.geo.oil.russia.map((v, i) => calcPerc(v, oilTotal[i])), bg: '#ef4444' },
        { label: 'İran', data: data.geo.oil.iran.map((v, i) => calcPerc(v, oilTotal[i])), bg: '#22c55e' },
        { label: 'Kazakistan', data: data.geo.oil.kazakh.map((v, i) => calcPerc(v, oilTotal[i])), bg: '#0ea5e9' }
    ];
    chartGeoOilShare.update('none');

    // COAL
    const coalTotal = data.geo.coal.russia.map((v, i) => v + data.geo.coal.colombia[i] + data.geo.coal.usa[i] + data.geo.coal.aus[i] + data.geo.coal.other[i]);
    chartGeoCoalShare.data.datasets = [
        { label: 'Rusya', data: data.geo.coal.russia.map((v, i) => calcPerc(v, coalTotal[i])), bg: '#ef4444' },
        { label: 'Kolombiya', data: data.geo.coal.colombia.map((v, i) => calcPerc(v, coalTotal[i])), bg: '#f59e0b' },
        { label: 'ABD', data: data.geo.coal.usa.map((v, i) => calcPerc(v, coalTotal[i])), bg: '#3b82f6' },
        { label: 'Diğer', data: data.geo.coal.other.map((v, i) => calcPerc(v + data.geo.coal.aus[i], coalTotal[i])), bg: '#94a3b8' }
    ];
    chartGeoCoalShare.update('none');
}

function updateGeoCountryChart() {
    const country = document.getElementById('countrySelect').value;
    const ds = [];
    if (data.geo.gas[country]) ds.push({ label: 'Gaz (bcm)', data: data.geo.gas[country], bg: '#3b82f6' });
    if (data.geo.oil[country]) ds.push({ label: 'Petrol (Bin Ton)', data: data.geo.oil[country], bg: '#1e293b' });
    if (data.geo.coal[country]) ds.push({ label: 'Kömür (Bin Ton)', data: data.geo.coal[country], bg: '#475569' });
    chartGeoCountryFocus.data.datasets = ds;
    chartGeoCountryFocus.update();
}

function openTab(id) {
    document.querySelectorAll('.tab-pane').forEach(el => el.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    document.querySelectorAll('nav button').forEach(b => b.className = b.id === 'btn-' + id ? 'tab-active px-4 py-3 text-sm font-bold' : 'tab-inactive px-4 py-3 text-sm font-bold');
    if (id === 'tab-geo') { updateGeoCountryChart(); }
    updateDashboard(currentYear);
}

const slider = document.getElementById('yearSlider');
slider.addEventListener('input', (e) => updateDashboard(parseInt(e.target.value)));

document.getElementById('playBtn').addEventListener('click', () => {
    let isPlaying = document.getElementById('playBtn').innerText === '⏸';
    if (isPlaying) {
        clearInterval(window.playInterval);
        document.getElementById('playBtn').innerText = '▶';
    } else {
        document.getElementById('playBtn').innerText = '⏸';
        window.playInterval = setInterval(() => {
            let val = parseInt(slider.value);
            if (val >= 2024) val = 2000; else val++;
            slider.value = val;
            updateDashboard(val);
        }, 1000);
    }
});

// API Key Yönetimi
let apiKey = localStorage.getItem('gemini_api_key') || "";

async function analyzeWithAI() {
    if (!apiKey) {
        // API Key yoksa kullanıcıdan iste
        const key = prompt("Lütfen Google Gemini API Anahtarınızı giriniz (Tarayıcınızda saklanacaktır):");
        if (key) {
            apiKey = key;
            localStorage.setItem('gemini_api_key', key);
        } else {
            alert("Analiz yapabilmek için API anahtarı gereklidir.");
            return;
        }
    }

    const idx = currentYear - 2000;
    const panel = document.getElementById('ai-panel');
    panel.classList.remove('hidden');
    document.getElementById('ai-year-title').innerText = currentYear;
    document.getElementById('ai-loading').classList.remove('hidden');
    document.getElementById('ai-content').innerHTML = '';

    const promptText = `
                Sen uzman bir enerji analistisin. Aşağıdaki verileri kullanarak ${currentYear} yılı Türkiye Enerji Güvenliği durumunu analiz et.
                
                VERİLER:
                - Dışa Bağımlılık (NEİB): %${data.macro.dep[idx]}
                - Enerji Yoğunluğu (Verimlilik): ${data.macro.intensity[idx]} (2000=100)
                - Yenilenebilir Enerji Payı: %${data.elec.renewShare[idx]}
                - HHI Endeksi: ${data.indices.hhi[idx]} (Pazar Yoğunlaşması)
                
                ANALİZ İSTEĞİ (Akademik dil kullan, Türkçe cevap ver):
                1. Enerji Verimliliği ve Arz Güvenliği ilişkisi.
                2. Pazar yapısındaki değişim (HHI üzerinden).
                3. Dönemin enerji politikalarının etkisi.
                Lütfen kısa paragraflar ve maddeler kullan.
            `;

    try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
        });

        if (!res.ok) {
            throw new Error(`API Hatası: ${res.status}`);
        }

        const json = await res.json();
        const aiText = json.candidates[0].content.parts[0].text;
        document.getElementById('ai-content').innerHTML = marked.parse(aiText);
    } catch (e) {
        console.error(e);
        document.getElementById('ai-content').innerHTML = `<span class="text-red-500 font-bold">Hata:</span> Analiz oluşturulamadı. API anahtarınızın geçerli olduğundan ve kotanızın dolmadığından emin olun. <br><button onclick="apiKey=''; localStorage.removeItem('gemini_api_key'); alert('Anahtar sıfırlandı, tekrar deneyin.'); location.reload();" class="mt-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Anahtarı Sıfırla</button>`;
    } finally {
        document.getElementById('ai-loading').classList.add('hidden');
    }
}

updateDashboard(2000);
