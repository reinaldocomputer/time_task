
class HandleTask{
/*
	0 - no initialiazed
	1 - executing
	2 - interval
	3 - finished

*/
	constructor(){
		console.log("constructor");
		this.global_tasks = null;
		this.current_task = null;
		this.previous_task = null;
		this.end_task = null;
		this.state = 0;
		this.new_task = false;
	}

	update(taskcontrol){
		this.global_tasks = taskcontrol.global_tasks;
		this.previous_task = taskcontrol.current_task;
		this.new_task = false;
	}

	run(){
		var now =  new Date();
		for(let [k,v] of this.global_tasks.entries()){
			if(now >= v.value.begin && now <= v.value.end){
				this.current_task = v.value;
				
				if(this.previous_task != null){
					if(this.current_task.taskname != this.previous_task.taskname){
						this.state = 3;
						this.new_task = true;
						console.log("previous != null");
					}
				}else{
						this.new_task = true;
						this.state = 3;
						console.log("previous == nulll");
				}
				this.state = 1;
				return true;
			}
		}
		this.state = 2;
		return false;
	}

	updatePercent(){
		var now =  new Date();
		if(this.current_task != null){
			var begin_time = this.current_task.begin;
			var end_time = this.current_task.end;
			var initial_diff = end_time - begin_time
			var current_dif = end_time - now;
			var percent = parseInt((1-(current_dif/initial_diff)) * 100);
			this.current_task.percent = percent;
			return percent;
		}
		return 0;
	}

	// updatePrevious(){
	// 	if(this.current_task != null){
	// 		if(this.previous_task != null){
	// 			if(this.current_task.begin != this.previous_task.begin){
	// 				console.log(this.current_task);
	// 				console.log(this.previous_task);
	// 				this.new_task = true;
	// 				this.previous_task = this.current_task;
	// 			}
	// 			else{
	// 				this.new_task = false;
	// 			}
	// 		}else{
	// 			this.previous_task = this.current_task;
	// 			this.new_task = true;
	// 		}
	// 	}
	// }
}

var handletask = new HandleTask();



onmessage = function(e){
	if(e.data != null){
		handletask.update(e.data);
		handletask.run();
		handletask.updatePercent();
		postMessage(handletask);
		handletask.new_task = false;
	}
}