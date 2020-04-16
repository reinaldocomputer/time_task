var i = 0;

onmessage = function(e){
	var now = new Date();
	var begin_time = e.data.begin;
	var end_time = e.data.end;
	// console.log('Message received from main script');
	// console.log('current: ' + e.data);
	var initial_diff = end_time - begin_time
	var current_dif = end_time - now;

	if(now > end_time){
		//Change task
		// console.log("Task Finished");
	}
	var percent = parseInt((1-(current_dif/initial_diff)) * 100);
	postMessage(percent);
}

// function timedCount() {
//   console.log(data.end_time);
//   i = i + 1;
//   postMessage(i);
//   setTimeout("timedCount()",500);
// }

// timedCount();