const tanksData = {
    "Object 140": {
        damage: "390",
        breoning: "258",
        attackSpeed: "6.67 rounds/min",
        targetingTime: "2.01s",
        ammunition: "50 rounds"
    },
    "T-62A": {
        damage: "320",
        breoning: "264",
        attackSpeed: "8 rounds/min",
        targetingTime: "2.0s",
        ammunition: "40 rounds"
    },
    "E 100": {
        damage: "750",
        breoning: "246",
        attackSpeed: "3.33 rounds/min",
        targetingTime: "2.7s",
        ammunition: "36 rounds"
    },
    "MAUS": {
        damage: "490",
        breoning: "246",
        attackSpeed: "4 rounds/min",
        targetingTime: "2.3s",
        ammunition: "68 rounds"
    },
    "T110E5": {
        damage: "400",
        breoning: "258",
        attackSpeed: "6 rounds/min",
        targetingTime: "1.9s",
        ammunition: "42 rounds"
    },
    "T57 Heavy Tank": {
        damage: "400",
        breoning: "258",
        attackSpeed: "5 rounds/min",
        targetingTime: "2.3s",
        ammunition: "40 rounds"
    },
    "FV215b": {
        damage: "400",
        breoning: "249",
        attackSpeed: "6 rounds/min",
        targetingTime: "1.7s",
        ammunition: "40 rounds"
    },
    "Conqueror G": {
        damage: "480",
        breoning: "295",
        attackSpeed: "4 rounds/min",
        targetingTime: "2.9s",
        ammunition: "45 rounds"
    }
};

function showTankInfo(tankName) {
    document.querySelectorAll('.tank').forEach(tank => {
        tank.style.display = 'none';
    });

    const tank = tanksData[tankName];
    const tankInfoDiv = document.getElementById('tankinfo');
    tankInfoDiv.innerHTML = `
        <h3>${tankName}</h3>
        <p><strong>Damage:</strong> ${tank.damage}</p>
        <p><strong>Breoning:</strong> ${tank.breoning}</p>
        <p><strong>Attack Speed:</strong> ${tank.attackSpeed}</p>
        <p><strong>Targeting Time:</strong> ${tank.targetingTime}</p>
        <p><strong>Ammunition:</strong> ${tank.ammunition}</p>
        <button onclick="resetView()">Go Back</button> 
    `;
    window.location.hash = `tank_${Object.keys(tanksData).indexOf(tankName) + 1}`;
}


function resetView() {
    document.querySelectorAll('.tank').forEach(tank => {
        tank.style.display = 'flex';
    });

    const tankInfoDiv = document.getElementById('tankinfo');
    tankInfoDiv.innerHTML = `<p>Select a tank to see details here.</p>`;


    window.location.hash = '';
}
