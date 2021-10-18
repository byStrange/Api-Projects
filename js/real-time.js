in1 = document.querySelector('#you');
label = document.querySelector('label');
search = document.querySelector('.fa-search');
select = document.querySelector('select')
in1.onfocus = function() {
	search.style = `
		top: 1	5px;
		left: 400px;
		transform: scale(1.5,1.5);
	`
	label.style = `
		top: -70px;
		left: -270px;
		font-size:25px;
									`
}
in1.onblur = function() {

	search.style = ` 
		left: 150px;
		top:13px;
	 `
	//  if(in1.value == '') {
	//  		label.style = `
	// 	top: 13px !important;
	// 	left: 5px !important;
	// 	font-size:16px !important;
	// `
	//  }
	//  else {
	//  	in1.style.marginTop = '30px';
	//  	label.style= ` 
	//  		top: 5px !important;
	//  		left: 5px !important;
	//  		font-size:18px !important;
	//  	`
	//  	search.style = `top : 32px !important`
	//  }
}
search.onclick = setter;
window.onkeyup = function (e){
	if(e.key === "Enter") setter()
} 
function setter() {
		url = `http://worldtimeapi.org/api/timezone/${select.value}/${in1.value}`;
		fetch(url).then(request=>request.json()).then(response=>{
			console.log(response);
			// time = response.datetime
			if(response.hasOwnProperty('datetime'))
				{$ = response.datetime;
				time = $.split('T');
				time_2 = time[1].split('.')
				result  = time_2[0]
				document.querySelector('#res-target').innerHTML = result;
				document.querySelector('#res-target').style.color = "rgba(0,0,0,.6)";
				document.querySelector('#res-target').style.fontSize = "5em";
				document.querySelector('#res-target').title = response.timezone;
				}
				else {
				document.querySelector('#res-target').innerHTML = 'Enter Your City Name Correctly';
				document.querySelector('#res-target').style.color = "red";
				document.querySelector('#res-target').style.fontSize = "2em";
				}
		})
}
