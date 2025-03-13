const pressureData = {
    nitrogen: {
        '-50': [10.0, 12.9],
        '-40': [10.7, 13.9],
        '-30': [11.3, 14.9],
        '-20': [12.0, 15.8],
        '-10': [12.7, 16.8],
        '0': [13.4, 17.7],
        '10': [14.0, 18.7],
        '20': [14.7, 19.6],
        '30': [15.4, 20.6]
    },
    argon: {
        '-50': [9.7, 12.4],
        '-40': [10.5, 13.5],
        '-30': [11.2, 14.5],
        '-20': [11.9, 15.5],
        '-10': [12.6, 16.6],
        '0': [13.3, 17.7],
        '10': [14.0, 18.6],
        '20': [14.7, 19.6],
        '30': [15.4, 20.6]
    },
    oxygen: {
        '-50': [9.7, 12.3],
        '-40': [10.4, 13.4],
        '-30': [11.1, 14.4],
        '-20': [11.8, 15.5],
        '-10': [12.6, 16.5],
        '0': [13.3, 17.6],
        '10': [14.0, 18.6],
        '20': [14.7, 19.6],
        '30': [15.4, 20.7]
    }
};

function calculatePressure() {
    const temperature = document.getElementById('temperature').value;
    const gasType = document.getElementById('gasType').value;
    const pressures = pressureData[gasType][temperature];

    if (!pressures) {
        document.getElementById('resultBox').style.display = 'none';
        alert('Нет данных для данной температуры');
        return;
    }

    document.getElementById('pressure150Result').innerText = pressures[0] + ' МПа';
    document.getElementById('pressure200Result').innerText = pressures[1] + ' МПа';

    document.getElementById('resultBox').style.display = 'block';
}
