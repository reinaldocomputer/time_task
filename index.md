<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Task Time Test Version</title>
  </head>

	<script type="text/javascript">
		var w;

		function startWorker() {
		  if (typeof(Worker) !== "undefined") {
		    if (typeof(w) == "undefined") {
		      w = new Worker("task.js");
		    }
		    w.onmessage = function(event) {
		      document.getElementById("result").innerHTML = event.data;
		    };
		  } else {
		    document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
		  }
		}

		function stopWorker() {
		  w.terminate();
		  w = undefined;
		}
		// var global_tasks = [];
		// var current_task = null;
		// var end_task = null;
		// var counter = 1;

		class TaskControl{

			constructor(){
				this.global_tasks = [];
				this.current_task = null;
				this.counter = 1;
				this.end_task = null;
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
					this.end_task = newtask;

				}else{
				//initializing
					start_time = new Date();
					start_time.setMinutes(start_time.getMinutes() + parseInt(interval_time));
					end_time = new Date(start_time.getTime());
					end_time.setMinutes(end_time.getMinutes() + parseInt(duration));
					newtask = new Task(taskname, start_time, end_time);
					this.current_task = newtask;
					this.end_task = newtask;
				}

				this.global_tasks.push({
					key: end_time.getTime(),
					value: newtask
				});


				var minutesbegin = newtask.begin.getMinutes() < 10 ? '0' : '';
				var minutesend = newtask.end.getMinutes() < 10 ? '0' : '';
				var htmlElement = "" +
			    "<tr id='"+end_time.getTime()+"'>" +
			      "<th scope='row'>"+this.counter+"</th>"+
			      "<td>"+newtask.taskname+"</td>"+
			      "<td>"+newtask.begin.getHours()+":"+ minutesbegin +newtask.begin.getMinutes()+"</td>"+
			      "<td>"+newtask.end.getHours()+":"+ minutesend +newtask.end.getMinutes()+"</td>"+
			      "<td style='display:none;'>"+end_time.getTime()+"</td>"+
			      "<td><button type='button' class='btn btn-danger' onclick='taskcontrol.delelement("+end_time.getTime()+")'> Remove </button></td>"+
			    "</tr>";
			    this.counter++;

			    if(this.counter == 2){
			    	this.initiate_current_task_table();
			    }


				$("#tablevalue").append(htmlElement);

			}

			delelement(key){
				$("#"+key).css("display","none");
				this.deleteTask(key);
			}

			initiate_current_task_table(){
				if(this.current_task != null){
					var taskname = this.current_task.taskname;
					var begin_hours = this.current_task.begin.getHours();
					var begin_minutes = this.current_task.begin.getMinutes();
					begin_minutes = begin_minutes < 10 ? "0" + begin_minutes : begin_minutes;
					var end_hours = this.current_task.end.getHours();
					var end_minutes = this.current_task.end.getMinutes();
					end_minutes = end_minutes < 10 ? "0" + end_minutes : end_minutes;
					var html_string = "" +
					"<tr>" +
						"<th scope='row'>1</th>" +
						"<td>"+taskname+"</td>" +
						"<td>"+begin_hours+":"+ begin_minutes+"</td>" +
						"<td>"+end_hours+":"+end_minutes+"</td>" +
						"<td>100%</td>" +
					"</tr>";


					$("#current_task_table").html(html_string);
				}
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
			}
		}

		var taskcontrol = new TaskControl();

		// function addelement(taskname, duration, interval_time){
		// 	var start_time;
		// 	var end_time;
		// 	var newtask;
		// 	if(end_task!=null){
		// 		start_time = new Date(end_task.end);
		// 		start_time.setMinutes(start_time.getMinutes() + parseInt(interval_time));
		// 		end_time = new Date(start_time.getTime());
		// 		end_time.setMinutes(end_time.getMinutes() + parseInt(duration));
		// 		newtask = new Task(taskname, start_time, end_time);
		// 		end_task = newtask;

		// 	}
		// 	//initializing
		// 	if(current_task==null){
		// 		start_time = new Date();
		// 		start_time.setMinutes(start_time.getMinutes() + parseInt(interval_time));
		// 		end_time = new Date(start_time.getTime());
		// 		end_time.setMinutes(end_time.getMinutes() + parseInt(duration));
		// 		newtask = new Task(taskname, start_time, end_time);
		// 		current_task = newtask;
		// 		end_task = newtask;
		// 	}

		// 	global_tasks.push({
		// 		key: end_time.getTime(),
		// 		value: newtask
		// 	});


		// 	var minutesbegin = newtask.begin.getMinutes() < 10 ? '0' : '';
		// 	var minutesend = newtask.end.getMinutes() < 10 ? '0' : '';
		// 	var htmlElement = "" +
		//     "<tr id='"+end_time.getTime()+"'>" +
		//       "<th scope='row'>"+counter+"</th>"+
		//       "<td>"+newtask.taskname+"</td>"+
		//       "<td>"+newtask.begin.getHours()+":"+ minutesbegin +newtask.begin.getMinutes()+"</td>"+
		//       "<td>"+newtask.end.getHours()+":"+ minutesend +newtask.end.getMinutes()+"</td>"+
		//       "<td style='display:none;'>"+end_time.getTime()+"</td>"+
		//       "<td><button type='button' class='btn btn-danger'> Remove </button></td>"+
		//     "</tr>";
		//     counter++;

		// 	$("#tablevalue").append(htmlElement);

		// }



		
	</script>

  <body>
  	<div>
		<button id="idprinttasks" type="button" class="btn btn-dark">Print Tasks</button>
		<button id="idprintendtask" type="button" class="btn btn-dark">Print End Task</button>
  	</div>
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
			<th scope="col">#</th>
			<th scope="col">Task name</th>
			<th scope="col">Begin</th>
			<th scope="col">End</th>
			<th scope="col">Status</th>
		</tr>
	</thead>
	<tbody id="current_task_table">

	</tbody>

	</table>

	</div>

	<h2>Task Table</h2>
	<!-- Table of Tasks -->
	<div id='tasktable'>

		<table class="table">
		  <thead>
		    <tr>
		      <th scope="col">#</th>
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
		// addelement('Event1', 60, 30);
		// addelement('Event2', 30, 30);
		// addelement('Event3', 15, 15);	
		// var i=1;

		// global_tasks.sort();
		// for(let [k,v] of global_tasks.entries()){
		// 	// var htmlElement = "<p> Task name: " + v.value.taskname + "</p><p> Start time: " + v.value.begin +
		// 	// 				  "<p> End time: " + v.value.end + "<br>";

		// 	var minutesbegin = v.value.begin.getMinutes() < 10 ? '0' : '';
		// 	var minutesend = v.value.end.getMinutes() < 10 ? '0' : '';
		// 	var htmlElement = "" +
		//     "<tr id='"+v.key+"'>" +
		//       "<th scope='row'>"+i+"</th>"+
		//       "<td>"+v.value.taskname+"</td>"+
		//       "<td>"+v.value.begin.getHours()+":"+ minutesbegin +v.value.begin.getMinutes()+"</td>"+
		//       "<td>"+v.value.end.getHours()+":"+ minutesend +v.value.end.getMinutes()+"</td>"+
		//       "<td style='display:none;'>"+v.key+"</td>"+
		//       "<td><button type='button' class='btn btn-danger'> Remove </button></td>"+
		//     "</tr>";
		//     i++;

		// 	$("#tablevalue").append(htmlElement);
		// }


		// taskcontrol.addTask(0, new Task("test", new Date(), new Date));
		// taskcontrol.delelement(0);


		$("#sendtaskbutton").click(
			function(){
				var _taskname = $("#idtaskname").val();
				var _duration = $("#idduration").val();
				var _interval = $("#idinterval").val();

				alert("taskname: " +_taskname + " duration: " + _duration + " interval: " + _interval);
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
		


		// if (typeof(Worker) !== "undefined") {
		//   alert("Yes");
		//   // Some code.....
		// } else {
		// 	alert("Not");
		//   // Sorry! No Web Worker support..
		// }

		// var timevar = 0;
		// function calctime(){
		// 	timevar = timevar + 1;
		// 	console.log(timevar);
		// 	setTimeout("calctime()",500);
		// }

		// calctime();




	</script>
	<p>Count numbers: <output id="result"></output></p>
	<button onclick="startWorker()">Start Worker</button>
	<button onclick="stopWorker()">Stop Worker</button>
  </body>
</html
