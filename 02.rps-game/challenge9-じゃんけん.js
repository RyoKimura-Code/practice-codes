'use strict';
const hands=document.querySelectorAll('.hand');

//手をクリックしたとき
hands.forEach(hand =>{hand.addEventListener('click',function(event) {const clickedText = event.target.textContent;
	console.log(clickedText);
//選択した手を格納
	const comHands =['グー✊','チョキ✌️','パー✋'];
//コンピュータの手を格納
　　const comHand = comHands[Math.floor(Math.random()*3)];

//結果表示
document.getElementById('computer').textContent=`コンピュータの手→${comHand}`;
let result='';
if (clickedText === comHand){
	result ='あいこ';
}else if (
(clickedText === 'グー✊'  &&comHand === 'チョキ✌️') ||
(clickedText === 'チョキ✌️'  &&comHand === 'パー✋')||
(clickedText === 'パー✋'  &&comHand === 'グー✊')
){result = '勝ち！';
	
}else if(
(clickedText === 'グー✊'  &&comHand === 'パー✋') ||
(clickedText === 'パー✋'  &&comHand === 'チョキ✌️') ||
(clickedText === 'チョキ✌️'  &&comHand === 'グー✊') 
){result ='負け！';
	
}
document.getElementById('resultText').textContent = result;

	});
	
	

});