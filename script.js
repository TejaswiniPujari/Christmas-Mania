let mode = {
    reward: 'talent',
    leaderboard: 'talent'
}

let roundNumber = {
    reward: 1,
    schedule: 1,
    leaderboard: 1
};

const rewardsTalentRound1 = {
    0: `10 Days Audio Room theme + Profile Frame`,
    1: `5 Days Audio Room theme `,
    2: `3 Days Audio Room theme `,
    3: `1 Days Audio Room theme `
}

const rewardsTalentRound2 = {
    0: `15 days PK SUPER STAR BADGE + Audio  theme \n  of PK SuperStar + PK SUperStar \nProfile Frame`,
    1: `10 days Audio theme of \n PK SuperStar + PK SUperStar \n Profile Frame `,
    2: `07 days Audio theme of PK SuperStar `,
    3: `5 days Audio theme of PK SuperStar`
}

const rewardsUser = {
    0: `01% of the Beans spent in the match`,
    1: `02% of the Beans spent in the match`,
    2: `03% of the Beans spent in the match`,
}



function setUserMode(bannerName) {
    if (mode[bannerName] == 'talent') {
        document.getElementById(`${bannerName}-user`).src = "./img/User Button Select.png";
        document.getElementById(`${bannerName}-talent`).src = "./img/Talent Button UnSelect.png";
        mode[bannerName] = 'user';
    }
}

function setTalentMode(bannerName) {
    if (mode[bannerName] == 'user') {
        document.getElementById(`${bannerName}-user`).src = './img/User Button UnSelect.png';
        document.getElementById(`${bannerName}-talent`).src = './img/Talent Button Select.png';
        mode[bannerName] = 'talent';
    }
}

function setRound1(bannerName) {
    if (roundNumber[bannerName] == 2) {
        document.getElementById(`${bannerName}-round1-btn`).src = "./img/Round 1 Select.png";
        document.getElementById(`${bannerName}-round2-btn`).src = "./img/Round 2 UnSelect.png";
        roundNumber[bannerName] = 1;
    }
}

function setRound2(bannerName) {
    if (roundNumber[bannerName] == 1) {
        document.getElementById(`${bannerName}-round1-btn`).src = "./img/Round 1 UnSelect.png"
        document.getElementById(`${bannerName}-round2-btn`).src = "./img/Round 2 Select.png";
        roundNumber[bannerName] = 2;
    }
}

function selectCategory(category) {
    if (category === 'dance') {
        document.getElementById('dance').src = './img/Dance Button.png';
        document.getElementById('singer').src = './img/Singer Unselect Button.png';
        document.getElementById('fashion').src = './img/Fashion Unselect Button.png';
    }
    else if (category === 'singer') {
        document.getElementById('dance').src = './img/Dance Unselect Button.png';
        document.getElementById('singer').src = './img/Category Singer Buttons.png';
        document.getElementById('fashion').src = './img/Fashion Unselect Button.png';
    }
    else {
        document.getElementById('dance').src = './img/Dance Unselect Button.png';
        document.getElementById('singer').src = './img/Singer Unselect Button.png';
        document.getElementById('fashion').src = './img/Category Fashion Button .png';
    }
}