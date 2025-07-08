'use strict';

let islighton = true;
const body = document.body;
const lightstatus = document.getElementById('lightstatus');
const switchbtn = document.getElementById('switch');
const messageText =
document.getElementById('message');

switchbtn.addEventListener('click', function () {
	if (islighton){
		body.style.backgroundColor='black';
		lightstatus.textContent = 'ライトOFF🌙';
		messageText.textContent = 'ｸﾗｲ(*´•ω•)(•ω• `*)ﾈｰ';
		body.style.color='white';
		islighton = false;
	
} else {
	body.style.backgroundColor='white';
	lightstatus.textContent = 'ライトON💡';
	body.style.color='black';
	messageText.textContent = '＼(^o^)／あかるーい＼(^o^)／';
	
	islighton = true;
}
});