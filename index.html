<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Task Time</title>
  </head>

	<script type="text/javascript">

		class TaskControl{

			constructor(){
				this.global_tasks = [];
				this.current_task = null;
				this.end_task = null;
			}

			nextTask(){
				if(this.global_tasks.length >= 1){
					if(this.global_tasks.length == 1) this.current_task = null;
					else{
						this.current_task = this.global_tasks[1].value;
					}
					taskcontrol.delelement(this.global_tasks[0].key);
					this.global_tasks.splice(0,1);
					this.initiate_current_task_table();

				}

				if(this.global_tasks.length == 0){
					this.current_task = null;
					this.initiate_current_task_table();				
				}

			}

			updateEndTask(){
				if(this.global_tasks.length > 0){
					this.end_task = this.global_tasks[this.global_tasks.length-1].value;
				}
				else{
					this.end_task = null;				
				}

			}

			addTask(end_time, newtask){
				this.global_tasks.push({
					key: end_time,
					value: newtask
				});
			}


			deleteTask(key){
				for(let [k,v] of this.global_tasks.entries()){
					if(v.key == key){
						this.global_tasks.splice(k,1);
						if(k == 0){
							this.current_task = null;
							this.initiate_current_task_table();
						}
					}
				}
				this.updateEndTask();
			}


			addelement(taskname, duration, interval_time){
				var start_time;
				var end_time;
				var newtask;
				if(this.end_task!=null){
					start_time = new Date(this.end_task.end);
					start_time.setMinutes(start_time.getMinutes() + parseInt(interval_time));
					end_time = new Date(start_time.getTime());
					end_time.setMinutes(end_time.getMinutes() + parseInt(duration));
					newtask = new Task(taskname, start_time, end_time);					

				}else{
					start_time = new Date();
					start_time.setMinutes(start_time.getMinutes() + parseInt(interval_time));
					end_time = new Date(start_time.getTime());
					end_time.setMinutes(end_time.getMinutes() + parseInt(duration));
					newtask = new Task(taskname, start_time, end_time);
				}

				this.end_task = newtask;
				this.global_tasks.push({
					key: end_time.getTime(),
					value: newtask
				});


				var minutesbegin = newtask.begin.getMinutes() < 10 ? '0' : '';
				var minutesend = newtask.end.getMinutes() < 10 ? '0' : '';
				var htmlElement = "" +
			    "<tr id='"+end_time.getTime()+"'>" +
			      "<td>"+newtask.taskname+"</td>"+
			      "<td>"+newtask.begin.getHours()+":"+ minutesbegin +newtask.begin.getMinutes()+"</td>"+
			      "<td>"+newtask.end.getHours()+":"+ minutesend +newtask.end.getMinutes()+"</td>"+
			      "<td style='display:none;'>"+end_time.getTime()+"</td>"+
			      "<td><button type='button' class='btn btn-danger' onclick='taskcontrol.delelement("+end_time.getTime()+")'> Remove </button></td>"+
			    "</tr>";

				$("#tablevalue").append(htmlElement);

			}

			delelement(key){
				$("#"+key).css("display","none");
				this.deleteTask(key);
			}

			print_tasks(){
				console.log("=====PRINT TASKS=====");
				for(let [k,v] of this.global_tasks.entries()){
					console.log("key: " + v.key);
					console.log("value: " + v.value.taskname);
				}
				console.log("=====END PRINT TASKS=====");
			}

		}



		class Task{
			constructor(taskname, begin, end){
				this.taskname = taskname;
				this.begin = begin;
				this.end = end;
				this.percent = 0;
			}
		}

		var taskcontrol = new TaskControl();


		
	</script>

  <body>
  	<!-- 
  		Debug
  	<div>
		<button id="idprinttasks" type="button" class="btn btn-dark">Print Tasks</button>
		<button id="idprintendtask" type="button" class="btn btn-dark">Print End Task</button>
  	</div> 
  -->
    <h1>Task Time!</h1>

	<div style="width: 50%;">
	  <div class="form-group">
		<input id="idtaskname" class="form-control form-control-lg" type="text" placeholder="Task name">
	  </div>
	  <div class="form-group">
		<input id="idduration" class="form-control form-control-lg" type="text" placeholder="Duration in minutes">
	  </div>
	  <div class="form-group">
		<input id="idinterval" class="form-control form-control-lg" type="text" placeholder="Interval" value="30">
	  </div>
	  <button id="sendtaskbutton" type="submit" class="btn btn-primary">Add</button>
	</div>

	<br>

	<!-- Current Task -->

	<h2>Current Task</h2>
	<div>
	<table class="table">
	<thead>
		<tr>
			<th scope="col">Task name</th>
			<th scope="col">Status</th>
		</tr>
	</thead>
	<tbody id="current_task_table">
		<tr>
			<td style="width: 50%;">
				<div id="idcurrenttaskname"></div>
			</td>

			<td style="width: 50%">
				<div id="idcurrentstatus">Waiting for tasks</div>
			</td>
		</tr>
	</tbody>

	</table>

	</div>

	<h2>Task Table</h2>
	<!-- Table of Tasks -->
	<div id='tasktable'>

		<table class="table">
		  <thead>
		    <tr>
		      <th scope="col">Task name</th>
		      <th scope="col">Begin</th>
		      <th scope="col">End</th>
		      <th scope="col" style="display: none;">Time</th>
		    </tr>
		  </thead>
		  <tbody id='tablevalue'>
<!-- 		    <tr>
		      <th scope="row">1</th>
		      <td>Mark</td>
		      <td>Otto</td>
		      <td>@mdo</td>
		    </tr> -->
		  </tbody>
		</table>
		
	</div>



    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

	<script type="text/javascript">

		$("#sendtaskbutton").click(
			function(){
				var _taskname = $("#idtaskname").val();
				var _duration = $("#idduration").val();
				var _interval = $("#idinterval").val();			
				taskcontrol.addelement(_taskname, _duration, _interval);
			}
		);

		$("#idprinttasks").click(
			function(){
				taskcontrol.print_tasks();
			}
		);

		$("#idprintendtask").click(
			function(){
				console.log("taskcontrol length: " + taskcontrol.global_tasks.length);
				console.log("end_task: " + taskcontrol.end_task);
			}
		);
		


		var w;

		function startWorker() {
		  if (typeof(Worker) !== "undefined") {
		    if (typeof(w) == "undefined") {
		      w = new Worker("js/task.js");
		    }

		    w.postMessage(taskcontrol);
		    
		    w.onmessage = function(event) {
		      var state = event.data.state;
		      var new_task = event.data.new_task;

		     if(new_task){
		     	play();
		     }

		      taskcontrol.current_task = event.data.current_task;
		      if(taskcontrol.current_task != null){
		      	  var taskname = taskcontrol.current_task.taskname;
			      var percent = taskcontrol.current_task.percent;
			      if(percent < 100){			      	
			      	$("#idcurrenttaskname").html(taskname);
			      	$("#idcurrentstatus").html(percent + '%');
			      	$('#idcurrentstatus').css('background-color','blue');
			      	$('#idcurrentstatus').css('color','white');
			      	$('#idcurrentstatus').css('width',percent);
			      }
		      }

		      if(state == 2){
		      	$('#idcurrentstatus').css('background-color','white');
		      	$('#idcurrentstatus').css('color','black');
		      	$('#idcurrentstatus').css('width','100%');
		      	$("#idcurrenttaskname").html("");
		      	$("#idcurrentstatus").html('Waiting for tasks');
		      }

		      w.postMessage(taskcontrol);


		    };
		  } else {
		    alert("Sorry! No Web Worker support.");
		  }
		}

		function stopWorker() {
		  w.terminate();
		  w = undefined;
		}

		startWorker();

        function play() { 
            var audio = new Audio( 
				'audio/beep.mp3'); 
            audio.play(); 
        } 



	</script>
  </body>
</html
