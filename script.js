let mode = {
    reward: 'talent',
    leaderboard: 'talent'
}

let roundNumber = {
    reward: 1,
    schedule: 1,
    leaderboard: 1
};

let slideNumber = 0;
document.getElementById('user-rewards').style.display = 'none';
const dot = document.getElementsByClassName('dot');
const lastdot = document.getElementById('last-dot');
const guidBtn = document.getElementById('guid-btn');
const closeBtn = document.getElementById('close-btn');
var main = document.getElementById('main');
var modal = document.getElementById("modal");


// show guidline on btn click
guidBtn.onclick = function () {
    modal.style.display = "block";
    main.style.opacity = 0.2;
    document.getElementById('body').classList.add('body');
}

// close guidline on close btn click
closeBtn.onclick = function () {
    modal.style.display = "none";
    main.style.opacity = 1;
    document.getElementById('body').classList.remove('body');
}

const rewardsTalentRound1 = {
    0: `10 Days Audio Room \ntheme + Profile Frame`,
    1: `5 Days Audio \n Room theme `,
    2: `3 Days Audio \n Room theme `,
    3: `1 Days Audio \n Room theme `
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

const rewardsImgList = {
    0: './img/Beans 1 Users-min.png',
    1: './img/Beans 2 Users-min.png',
    2: './img/Beans 3 Users-min.png',
}

function setUserMode(bannerName) {
    if (mode[bannerName] == 'talent') {
        document.getElementById(`${bannerName}-user`).src = "./img/User Button Select.png";
        document.getElementById(`${bannerName}-talent`).src = "./img/Talent Button UnSelect.png";
        mode[bannerName] = 'user';
        if (bannerName === 'reward') {
            document.getElementById('reward-round1-btn').classList.add('talent-tab');
            document.getElementById('reward-round2-btn').classList.add('talent-tab');
        }
        document.getElementById('user-rewards').style.display = 'block';
        document.getElementById('rewards').style.display = 'none';
        dot[slideNumber].classList.remove('active');
        dot[0].classList.add('active');
        document.getElementById('reward-des').innerHTML = rewardsUser[0];
        document.getElementById('reward-banner').style.height = '100vw';
        slideNumber = 0;
        lastdot.remove();
    }
}

function setTalentMode(bannerName) {
    if (mode[bannerName] == 'user') {
        document.getElementById(`${bannerName}-user`).src = './img/User Button UnSelect.png';
        document.getElementById(`${bannerName}-talent`).src = './img/Talent Button Select.png';
        mode[bannerName] = 'talent';
        if (bannerName === 'reward') {
            document.getElementById('reward-round1-btn').classList.remove('talent-tab');
            document.getElementById('reward-round2-btn').classList.remove('talent-tab');
        }
        document.getElementById('user-rewards').style.display = 'none';
        document.getElementById('rewards').style.display = 'block';
        dot[slideNumber].classList.remove('active');
        dot[0].classList.add('active');
        document.getElementById('reward-des').innerHTML = rewardsTalentRound1[0];
        slideNumber = 0;
        document.getElementById('carousel-dot').appendChild(lastdot);
    }
}

function setRound1(bannerName) {
    if (roundNumber[bannerName] == 2) {
        document.getElementById(`${bannerName}-round1-btn`).src = "./img/Round 1 Select.png";
        document.getElementById(`${bannerName}-round2-btn`).src = "./img/Round 2 UnSelect.png";
        roundNumber[bannerName] = 1;
        dot[slideNumber].classList.remove('active');
        dot[0].classList.add('active');
        document.getElementById('reward-des').innerHTML = rewardsTalentRound1[0];
        document.getElementById('reward-banner').style.height = '100vw';
        slideNumber = 0;
    }
}

function setRound2(bannerName) {
    if (roundNumber[bannerName] == 1) {
        document.getElementById(`${bannerName}-round1-btn`).src = "./img/Round 1 UnSelect.png"
        document.getElementById(`${bannerName}-round2-btn`).src = "./img/Round 2 Select.png";
        roundNumber[bannerName] = 2;
        dot[slideNumber].classList.remove('active');
        dot[0].classList.add('active');
        document.getElementById('reward-des').innerHTML = rewardsTalentRound2[0];
        document.getElementById('reward-banner').style.height = '120vw';
        slideNumber = 0;
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

function onLeftShift() {
    if (slideNumber > 0) {
        dot[slideNumber].classList.remove('active');
        dot[slideNumber - 1].classList.add('active');
        slideNumber = slideNumber - 1;
        if (mode['reward'] === 'talent') {
            if (roundNumber['reward'] == 1)
                document.getElementById('reward-des').innerHTML = rewardsTalentRound1[slideNumber];
            if (roundNumber['reward'] == 2) {
                document.getElementById('reward-des').innerHTML = rewardsTalentRound2[slideNumber];
                if (slideNumber == 0 || slideNumber == 1)
                    document.getElementById('reward-banner').style.height = '120vw';
                else
                    document.getElementById('reward-banner').style.height = '100vw';
            }
        }
        else {
            document.getElementById('reward-des').innerHTML = rewardsUser[slideNumber];
            document.getElementById('user-rewards-img').src = rewardsImgList[slideNumber];
        }
    }

}
function onRightShift() {
    if (slideNumber < dot.length - 1) {
        dot[slideNumber].classList.remove('active');
        dot[slideNumber + 1].classList.add('active');
        slideNumber = slideNumber + 1;
        if (mode['reward'] === 'talent') {
            if (roundNumber['reward'] == 1)
                document.getElementById('reward-des').innerHTML = rewardsTalentRound1[slideNumber];
            if (roundNumber['reward'] == 2) {
                document.getElementById('reward-des').innerHTML = rewardsTalentRound2[slideNumber];
                if (slideNumber == 0 || slideNumber == 1)
                    document.getElementById('reward-banner').style.height = '120vw';
                else
                    document.getElementById('reward-banner').style.height = '100vw';
            }
        }
        else {
            document.getElementById('reward-des').innerHTML = rewardsUser[slideNumber];
            document.getElementById('user-rewards-img').src = rewardsImgList[slideNumber];
        }
    }
}
