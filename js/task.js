
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
						// this.new_task = true;
						console.log("previous != null");
					}
				}else{
						// this.new_task = true;
						this.state = 3;
						console.log("previous == nulll");
				}
				this.state = 1;
				return true;
			}
		}
		if(this.previous_task != null && this.current_task == null){
			this.previous_task = null;
			this.new_task = true;
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

	audio(){
		if(this.current_task != null){
			var now = new Date();

			//begin
			var c_h = this.current_task.begin.getHours();
			var c_m = this.current_task.begin.getMinutes();
			var c_s = this.current_task.begin.getSeconds();


			//end
			var e_h = this.current_task.end.getHours();
			var e_m = this.current_task.end.getMinutes();
			var e_s = this.current_task.end.getSeconds();


			var n_h = now.getHours();
			var n_m = now.getMinutes();
			var n_s = now.getSeconds();


			if(c_h == n_h && c_m == n_m && c_s == n_s){
				this.new_task = true;
			}

			if(e_h == n_h && e_m == n_m && e_s == n_s){
				this.new_task = true;
			}			
		}
	}

}

var handletask = new HandleTask();



onmessage = function(e){
	if(e.data != null){
		handletask.update(e.data);
		handletask.run();
		handletask.updatePercent();
		handletask.audio();
		postMessage(handletask);
		handletask.new_task = false;
	}
}