"use strict";

//選ばれた都市を定義する
const citySelect = document.getElementById("citySelect");

//セレクトで選んだ後の処理
citySelect.addEventListener("change", () => {
  //選んだ都市の定義
  const city = citySelect.value;

  //「選択してください」だったらなにもしない
  if(!city)return;

  //キーの定義
  const apiKey = "your key";

  //URLの定義
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`;

  //結果確認用
  console.log(city);
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // この中で天気データを使って処理している
      console.log(data);
      const weather = data.weather[0].description;
      const temperature = data.main.temp;
      const cityName = data.name;

      // HTMLに表示させる処理とか
      document.getElementById("weather").textContent = `天気：${weather}`;
      document.getElementById("temp").textContent = `気温：${temperature}℃`;
      document.getElementById("city").textContent = `場所：${cityName}`;

      //気温を保存
      const temp = data.main.temp;
      //服装を定義
      let outfit = "";

      //気温別に服装を切り分け
      if (temp >= 30) {
        outfit = "Tシャツ・ハーフパンツ・ノースリーブワンピース";
      } else if (temp >= 25) {
        outfit = "シアーシャツ・ブラウス・レーススカート";
      } else if (temp >= 20) {
        outfit = "カーディガン・シャツワンピ";
      } else if (temp >= 15) {
        outfit = "ジャケット・パーカー・ロングスカート";
      } else if (temp >= 10) {
        outfit = "トレンチコート・ニット・デニム";
      } else if (temp < 10) {
        outfit = "ダウンコート・ツイードスカート・マフラー";
      }
      //結果確認用表示
      console.log(`現在の気温: ${temp}℃`);
      console.log(`おすすめの服装は・・${outfit}`);

      //HTMLへの表示
      document.getElementById(
        "outfit"
      ).textContent = `おすすめの服装：${outfit}`;
			
			

	  //服装画像の表示
	  const outfitImage = document.getElementById("outfitImage");
		if (temp >= 30) {
        outfitImage.src = "over30.png";
      }
	  
    });
});
