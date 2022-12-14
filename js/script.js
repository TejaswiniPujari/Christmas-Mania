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

const userCriteria = {
    0: 'target 05-20 Million Beans',
    1: 'target 20-50 Million Beans',
    2: 'target 50 Million & Above',
}
const talentCriteriaForRound1 = {
    0: 'target 05 Million & Above Gems',
    1: 'target 03-05 Million Beans',
    2: 'target 01 - 03 Million Gems',
    3: 'target 500K – 1 Million Gems',
}
const talentCriteriaForRound2 = {
    0: 'target 10 Million & Above Gems',
    1: 'target 05- 10 Million Gems',
    2: 'target 03- 05 Million Gems',
    3: 'target 01- 03 Million Gems',
}

const rewardsUser = {
    0: `01% of the Beans spent in the match`,
    1: `02% of the Beans spent in the match`,
    2: `03% of the Beans spent in the match`,
}

const rewardsImgList = {
    0: './img/Beans-1-Users-min.png',
    1: './img/Beans-2-Users-min.png',
    2: './img/Beans-3-Users-min.png',
}

function setUserMode(bannerName) {
    if (mode[bannerName] == 'talent') {
        document.getElementById(`${bannerName}-user`).src = "./img/User-Button-Select.png";
        document.getElementById(`${bannerName}-talent`).src = "./img/Talent-Button-UnSelect.png";
        mode[bannerName] = 'user';
        document.getElementById('user-rewards').style.display = 'block';
        document.getElementById('rewards').style.display = 'none';
        dot[slideNumber].classList.remove('active');
        dot[0].classList.add('active');
        document.getElementById('reward-des').innerHTML = rewardsUser[0];
        document.getElementById('criteria-text').innerHTML = userCriteria[0];
        document.getElementById('reward-banner').style.height = '100vw';
        document.getElementById('reward-round1-btn').style.display = 'none';
        document.getElementById('reward-round2-btn').style.display = 'none';
        slideNumber = 0;
        lastdot.remove();
    }
}

function setTalentMode(bannerName) {
    if (mode[bannerName] == 'user') {
        document.getElementById(`${bannerName}-user`).src = './img/User-Button-UnSelect.png';
        document.getElementById(`${bannerName}-talent`).src = './img/Talent-Button-Select.png';
        mode[bannerName] = 'talent';
        document.getElementById('user-rewards').style.display = 'none';
        document.getElementById('rewards').style.display = 'block';
        dot[slideNumber].classList.remove('active');
        dot[0].classList.add('active');
        if (roundNumber['reward'] == 1) {
            document.getElementById('reward-des').innerHTML = rewardsTalentRound1[0];
            document.getElementById('criteria-text').innerHTML = talentCriteriaForRound1[0];
        }
        if (roundNumber['reward'] == 2) {
            document.getElementById('reward-des').innerHTML = rewardsTalentRound2[0];
            document.getElementById('criteria-text').innerHTML = talentCriteriaForRound2[0];
            document.getElementById('reward-banner').style.height = '110vw';
        }
        slideNumber = 0;
        document.getElementById('carousel-dot').appendChild(lastdot);
        document.getElementById('reward-round1-btn').style.display = 'block';
        document.getElementById('reward-round2-btn').style.display = 'block';
    }
}

function setRound1(bannerName) {
    if (roundNumber[bannerName] == 2) {
        document.getElementById(`${bannerName}-round1-btn`).src = "./img/Round-1-Select.png";
        document.getElementById(`${bannerName}-round2-btn`).src = "./img/Round-2-UnSelect.png";
        roundNumber[bannerName] = 1;
        if (bannerName === 'reward') {
            dot[slideNumber].classList.remove('active');
            dot[0].classList.add('active');
            document.getElementById('reward-des').innerHTML = rewardsTalentRound1[0];
            document.getElementById('criteria-text').innerHTML = talentCriteriaForRound1[0];
            document.getElementById('reward-banner').style.height = '100vw';
            slideNumber = 0;
        }
        if (bannerName === 'schedule') {
            document.getElementById('round2-schedule').style.display = 'none';
            document.getElementById('round1-schedule').style.display = 'block';
            document.getElementById('dance').src = './img/Dance-Unselect-Button.png';
            document.getElementById('singer').src = './img/Singer-Unselect-Button.png';
            document.getElementById('fashion').src = './img/Category-Fashion-Button.png';
        }
    }
}

function setRound2(bannerName) {
    if (roundNumber[bannerName] == 1) {
        document.getElementById(`${bannerName}-round1-btn`).src = "./img/Round-1-UnSelect.png"
        document.getElementById(`${bannerName}-round2-btn`).src = "./img/Round-2-Select.png";
        roundNumber[bannerName] = 2;
        if (bannerName === 'reward') {
            dot[slideNumber].classList.remove('active');
            dot[0].classList.add('active');
            document.getElementById('reward-des').innerHTML = rewardsTalentRound2[0];
            document.getElementById('criteria-text').innerHTML = talentCriteriaForRound2[0];
            document.getElementById('reward-banner').style.height = '110vw';
            slideNumber = 0;
        }
        if (bannerName === 'schedule') {
            document.getElementById('round2-schedule').style.display = 'block';
            document.getElementById('round1-schedule').style.display = 'none';
            document.getElementById('dance').src = './img/Dance-Unselect-Button.png';
            document.getElementById('singer').src = './img/Singer-Unselect-Button.png';
            document.getElementById('fashion').src = './img/Category-Fashion-Button.png';
        }
    }
}

function selectCategory(category) {
    if (category === 'dance') {
        document.getElementById('dance').src = './img/Dance-Button.png';
        document.getElementById('singer').src = './img/Singer-Unselect-Button.png';
        document.getElementById('fashion').src = './img/Fashion-Unselect-Button.png';
        if (roundNumber['schedule'] === 1) {
            document.getElementById('dancers-round1').style.display = 'block';
            document.getElementById('singers-round1').style.display = 'none';
            document.getElementById('fashions-round1').style.display = 'none';
        }
        else {
            document.getElementById('dancers-round2').style.display = 'block';
            document.getElementById('singers-round2').style.display = 'none';
            document.getElementById('fashions-round2').style.display = 'none';
        }
    }
    else if (category === 'singer') {
        document.getElementById('dance').src = './img/Dance-Unselect-Button.png';
        document.getElementById('singer').src = './img/Category-Singer-Buttons.png';
        document.getElementById('fashion').src = './img/Fashion-Unselect-Button.png';
        if (roundNumber['schedule'] === 1) {
            document.getElementById('dancers-round1').style.display = 'none';
            document.getElementById('singers-round1').style.display = 'block';
            document.getElementById('fashions-round1').style.display = 'none';
        }
        else {
            document.getElementById('dancers-round2').style.display = 'none';
            document.getElementById('singers-round2').style.display = 'block';
            document.getElementById('fashions-round2').style.display = 'none';
        }
    }
    else {
        document.getElementById('dance').src = './img/Dance-Unselect-Button.png';
        document.getElementById('singer').src = './img/Singer-Unselect-Button.png';
        document.getElementById('fashion').src = './img/Category-Fashion-Button.png';
        if (roundNumber['schedule'] === 1) {
            document.getElementById('dancers-round1').style.display = 'none';
            document.getElementById('singers-round1').style.display = 'none';
            document.getElementById('fashions-round1').style.display = 'block';
        }
        else {
            document.getElementById('dancers-round2').style.display = 'none';
            document.getElementById('singers-round2').style.display = 'none';
            document.getElementById('fashions-round2').style.display = 'block';
        }
    }
}

function onLeftShift() {
    if (slideNumber > 0) {
        dot[slideNumber].classList.remove('active');
        dot[slideNumber - 1].classList.add('active');
        slideNumber = slideNumber - 1;
        if (mode['reward'] === 'talent') {
            if (roundNumber['reward'] == 1) {
                document.getElementById('reward-des').innerHTML = rewardsTalentRound1[slideNumber];
                document.getElementById('criteria-text').innerHTML = talentCriteriaForRound1[slideNumber];
            }
            if (roundNumber['reward'] == 2) {
                document.getElementById('reward-des').innerHTML = rewardsTalentRound2[slideNumber];
                document.getElementById('criteria-text').innerHTML = talentCriteriaForRound2[slideNumber];
                if (slideNumber == 0 || slideNumber == 1)
                    document.getElementById('reward-banner').style.height = '110vw';
                else
                    document.getElementById('reward-banner').style.height = '100vw';
            }
        }
        else {
            document.getElementById('reward-des').innerHTML = rewardsUser[slideNumber];
            document.getElementById('criteria-text').innerHTML = userCriteria[slideNumber];
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
            if (roundNumber['reward'] == 1) {
                document.getElementById('reward-des').innerHTML = rewardsTalentRound1[slideNumber];
                document.getElementById('criteria-text').innerHTML = talentCriteriaForRound1[slideNumber];
            }
            if (roundNumber['reward'] == 2) {
                document.getElementById('reward-des').innerHTML = rewardsTalentRound2[slideNumber];
                document.getElementById('criteria-text').innerHTML = talentCriteriaForRound2[slideNumber];
                if (slideNumber == 0 || slideNumber == 1)
                    document.getElementById('reward-banner').style.height = '110vw';
                else
                    document.getElementById('reward-banner').style.height = '100vw';
            }
        }
        else {
            document.getElementById('reward-des').innerHTML = rewardsUser[slideNumber];
            document.getElementById('criteria-text').innerHTML = userCriteria[slideNumber];
            document.getElementById('user-rewards-img').src = rewardsImgList[slideNumber];
        }
    }
}