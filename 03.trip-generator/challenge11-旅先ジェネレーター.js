 "use strict";
      const japanarea = [
        "北海道・東北",
        "関東地方",
        "中部地方",
        "近畿地方",
        "中国・四国",
        "九州・沖縄",
      ];
      const worldarea = [
        "アジア",
        "ヨーロッパ",
        "アフリカ",
        "アメリカ",
        "オセアニア",
      ];
      const loc = ["海", "山"];

      //ボタンの定義
      const jpnbtn = document.getElementById("japanbtn");
      const wldbtn = document.getElementById("worldbtn");
      const destinationbtn = document.getElementById("areabtn");
      const locbtn = document.getElementById("locbtn");
      const retryBtn = document.getElementById("retryBtn");

      //状態管理
      let mode = "";
      let selectedareaText = "";
      let selectedlocText = "";

      //国内ボタン押されたときにjapanモードにする
      jpnbtn.addEventListener("click", function (event) {
        mode = "japan";
        selectedareaText = "";
      });

      //海外ボタン押されたときにworldモードにする
      wldbtn.addEventListener("click", function (event) {
        mode = "world";
        selectedareaText = "";
      });

      destinationbtn.addEventListener("click", function (event) {
        //国内モードの時の処理
        if (mode === "japan") {
          const selectedjapan =
            japanarea[Math.floor(Math.random() * japanarea.length)];
          document.getElementById(
            "areamessage"
          ).textContent = `${selectedjapan}`;
          selectedareaText = selectedjapan;

          //海外モードの時の処理
        } else if (mode === "world") {
          const selectedworld =
            worldarea[Math.floor(Math.random() * worldarea.length)];
          document.getElementById(
            "areamessage"
          ).textContent = `${selectedworld}`;
          selectedareaText = selectedworld;
        }
        showResultIfReady();
      });

      //海か山か決めるときの処理
      locbtn.addEventListener("click", function (event) {
        const selectedloc = loc[Math.floor(Math.random() * loc.length)];
        document.getElementById("locmessage").textContent = `${selectedloc}`;
        selectedlocText = selectedloc;
        showResultIfReady();
      });

      //結果表示
      function showResultIfReady() {
        if (selectedareaText && selectedlocText) {
          const areaLabel = mode === "japan" ? "国内" : "海外";
          document.getElementById(
            "resultContent2"
          ).textContent = `あなたにおすすめの旅行は「${areaLabel} × ${selectedlocText}」です！（地域：${selectedareaText}）`;
          document.getElementById("modal").classList.remove("hidden");
        }
      }

      retryBtn.addEventListener("click", function (event) {
        document.getElementById("modal").classList.add("hidden");

        document.getElementById("areamessage").textContent = "";
        document.getElementById("locmessage").textContent = "";
        document.getElementById("resultContent2").textContent = "";

        selectedareaText = "";
        selectedlocText = "";
      });