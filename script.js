const games = {
    test: {
        name: "테스트 보드게임",
        players: "2~4명",
        time: "30분",
        difficulty: "★★★☆☆",

        summary: "친구들과 함께 즐기는 테스트용 보드게임입니다.",

        goal: "가장 많은 점수를 얻는 것이 목표입니다.",

        components: [
            "게임판 1개",
            "카드 50장",
            "말 4개"
        ],

        setup: [
            "게임판을 테이블 가운데 놓습니다.",
            "카드를 섞어 게임판 옆에 놓습니다.",
            "각 플레이어에게 말을 하나씩 나누어 줍니다."
        ],

        play: "자신의 차례가 되면 원하는 행동을 하나 선택합니다.",

        special: "특수 규칙은 아직 없습니다.",

        end: "게임 카드가 모두 사용되면 게임이 종료됩니다.",

        win: "게임이 끝났을 때 가장 높은 점수를 가진 사람이 승리합니다.",

        tips: [
            "처음에는 다른 플레이어의 행동을 잘 관찰하세요.",
            "규칙을 모르는 부분은 자세한 규칙을 확인하세요."
        ],

        warning: "이것은 실제 게임이 아닌 테스트용 규칙입니다."
    }
};


// 주소에서 ?game= 뒤의 값을 가져옵니다.
const params = new URLSearchParams(window.location.search);
const gameName = params.get("game");

// 해당 게임을 찾습니다.
const game = games[gameName];

if (game) {

    document.title = game.name;

    document.getElementById("game-name").textContent = game.name;
    document.getElementById("players").textContent = game.players;
    document.getElementById("time").textContent = game.time;
    document.getElementById("difficulty").textContent = game.difficulty;

    document.getElementById("summary").textContent = game.summary;
    document.getElementById("goal-text").textContent = game.goal;

    document.getElementById("play-text").textContent = game.play;
    document.getElementById("special-text").textContent = game.special;
    document.getElementById("end-text").textContent = game.end;
    document.getElementById("win-text").textContent = game.win;
    document.getElementById("warning-text").textContent = game.warning;


    const components = document.getElementById("components-list");
    components.innerHTML = "";

    game.components.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        components.appendChild(li);
    });


    const setup = document.getElementById("setup-list");
    setup.innerHTML = "";

    game.setup.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        setup.appendChild(li);
    });


    const tips = document.getElementById("tips-list");
    tips.innerHTML = "";

    game.tips.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        tips.appendChild(li);
    });

} else {

    document.getElementById("game-name").textContent = "게임을 찾을 수 없습니다.";

}
