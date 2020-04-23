## Observations

- To compare two Date objects by != won't work.


If we initialize an object inside a function the object will be cleared after the function execution
```
var object = null;



functionm (){
	object = new Object();
}


```