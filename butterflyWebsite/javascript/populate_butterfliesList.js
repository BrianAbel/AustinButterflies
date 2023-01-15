
//on hold for technicahl reasons coming in 2.0, javascript can not acccess the file directory when run a browser, server side computation is required.
//
// abundant category operations
function make_abundant_list(){
	var fs = require('fs');
	var fly_list = fs.readdirSync('../images/butterfly_list/Abundant_Butterflies');
	var fs = require('fs');
	var caterp_list = fs.readdirSync('../images/butterfly_list/Abundant_Caterpillars');
	//loop through butterfly array creating relevent boxes including catiplears that match
	var loop_length = fly_list.length;
	var loop_length2 = caterp_list.length;
	var target_div = document.getElementById("abundant")
	
	for(i = 0; i < loop_length; i++){
		var new_div = document.createElement('div');
		new_div.className = ("butterflyNameBox");
		var new_text = document.createTextNode(fly_list[i]);
		  new_text.setAttribute("alt", fly_list[i]);
		  new_div.appendChild(new_text);
		  document.body.appendChild(new_div)
		
		var new_div = document.createElement('div');
		new_div.className = ("butterflyPicBox");
		var new_img = document.createElement("IMG");
		  new_img.setAttribute("src", "../images/butterfly_list/Abundant_Butterflies/" +fly_list[i]);
		  new_img.setAttribute("alt", fly_list[i]);
		  new_div.appendChild(new_img);
		  document.body.appendChild(new_div)
		  
		  for(a = 0; a < loop_length2; a++){
			if (-1 != (caterp_list[a].search(fly_list[i]))){
				var new_div = document.createElement('div');
				new_div.className = ("larvaPicBox");
				var new_img = document.createElement("IMG");
				  new_img.setAttribute("src", "..images/butterfly_list/Abundant_Caterpillars/" + caterp_list[a]);
				  new_img.setAttribute("alt", caterp_list[a]);
				  new_div.appendChild(new_img);
				  document.body.appendChild(new_div);
				  
			}
		  }
	}
}


	// common category operations
function make_common_list(){
	var fly_list = fs.readdirSync('../images/butterfly_list/Abundant_Butterflies');
	var fs = require('fs');
	var caterp_list = fs.readdirSync('../images/butterfly_list/Abundant_Caterpillars');
	//loop through butterfly array creating relevent boxes including catiplears that match
	var loop_length = fly_list.length;
	var loop_length2 = caterp_list.length;
	var target_div = document.getElementById("abundant")
	
	for(i = 0; i < loop_length; i++){
		var new_div = document.createElement('div');
		new_div.className = ("butterflyNameBox");
		var new_text = document.createTextNode(fly_list[i]);
		  new_text.setAttribute("alt", fly_list[i]);
		  new_div.appendChild(new_text);
		  document.body.appendChild(new_div)
		
		var new_div = document.createElement('div');
		new_div.className = ("butterflyPicBox");
		var new_img = document.createElement("IMG");
		  new_img.setAttribute("src", fly_list[i]);
		  new_img.setAttribute("alt", fly_list[i]);
		  new_div.appendChild(new_img);
		  document.body.appendChild(new_div)
		  
		  for(a = 0; a < loop_length2; a++){
			if (-1 != (caterp_list[a].search(fly_list[i]))){
				var new_div = document.createElement('div');
				new_div.className = ("larvaPicBox");
				var new_img = document.createElement("IMG");
				  new_img.setAttribute("src", caterp_list[a]);
				  new_img.setAttribute("alt", caterp_list[a]);
				  new_div.appendChild(new_img);
				  document.body.appendChild(new_div);
				  
			}
		  }
	}
}

	
	// uncommon category operations
function make_uncommon_list(){
	var fs = require('fs');
	var fly_list = fs.readdirSync('../images/butterfly_list/Abundant_Butterflies');
	var fs = require('fs');
	var caterp_list = fs.readdirSync('../images/butterfly_list/Abundant_Caterpillars');
	//loop through butterfly array creating relevent boxes including catiplears that match
	var loop_length = fly_list.length;
	var loop_length2 = caterp_list.length;
	var target_div = document.getElementById("abundant")
	
	for(i = 0; i < loop_length; i++){
		var new_div = document.createElement('div');
		new_div.className = ("butterflyNameBox");
		var new_text = document.createTextNode(fly_list[i]);
		  new_text.setAttribute("alt", fly_list[i]);
		  new_div.appendChild(new_text);
		  document.body.appendChild(new_div)
		
		var new_div = document.createElement('div');
		new_div.className = ("butterflyPicBox");
		var new_img = document.createElement("IMG");
		  new_img.setAttribute("src", fly_list[i]);
		  new_img.setAttribute("alt", fly_list[i]);
		  new_div.appendChild(new_img);
		  document.body.appendChild(new_div)
		  
		  for(a = 0; a < loop_length2; a++){
			if (-1 != (caterp_list[a].search(fly_list[i]))){
				var new_div = document.createElement('div');
				new_div.className = ("larvaPicBox");
				var new_img = document.createElement("IMG");
				  new_img.setAttribute("src", caterp_list[a]);
				  new_img.setAttribute("alt", caterp_list[a]);
				  new_div.appendChild(new_img);
				  document.body.appendChild(new_div);
				  
			}
		  }
	}
}
	// rare category operations
function make_rare_list(){
	var fs = require('fs');
	var fly_list = fs.readdirSync('../images/butterfly_list/Abundant_Butterflies');
	var fs = require('fs');
	var caterp_list = fs.readdirSync('../images/butterfly_list/Abundant_Caterpillars');
	//loop through butterfly array creating relevent boxes including catiplears that match
	var loop_length = fly_list.length;
	var loop_length2 = caterp_list.length;
	var target_div = document.getElementById("abundant")
	
	for(i = 0; i < loop_length; i++){
		var new_div = document.createElement('div');
		new_div.className = ("butterflyNameBox");
		var new_text = document.createTextNode(fly_list[i]);
		  new_text.setAttribute("alt", fly_list[i]);
		  new_div.appendChild(new_text);
		  document.body.appendChild(new_div)
		
		var new_div = document.createElement('div');
		new_div.className = ("butterflyPicBox");
		var new_img = document.createElement("IMG");
		  new_img.setAttribute("src", fly_list[i]);
		  new_img.setAttribute("alt", fly_list[i]);
		  new_div.appendChild(new_img);
		  document.body.appendChild(new_div)
		  
		  for(a = 0; a < loop_length2; a++){
			if (-1 != (caterp_list[a].search(fly_list[i]))){
				var new_div = document.createElement('div');
				new_div.className = ("larvaPicBox");
				var new_img = document.createElement("IMG");
				  new_img.setAttribute("src", caterp_list[a]);
				  new_img.setAttribute("alt", caterp_list[a]);
				  new_div.appendChild(new_img);
				  document.body.appendChild(new_div);
				  
			}
		  }
	}
}
	// stray category operations
function make_stray_list(){
	//
	// abundant category operations
	var fs = require('fs');
	var fly_list = fs.readdirSync('../images/butterfly_list/Abundant_Butterflies');
	var fs = require('fs');
	var caterp_list = fs.readdirSync('../images/butterfly_list/Abundant_Caterpillars');
	//loop through butterfly array creating relevent boxes including catiplears that match
	var loop_length = fly_list.length;
	var loop_length2 = caterp_list.length;
	var target_div = document.getElementById("abundant")
	
	for(i = 0; i < loop_length; i++){
		var new_div = document.createElement('div');
		new_div.className = ("butterflyNameBox");
		var new_text = document.createTextNode(fly_list[i]);
		  new_text.setAttribute("alt", fly_list[i]);
		  new_div.appendChild(new_text);
		  document.body.appendChild(new_div)
		
		var new_div = document.createElement('div');
		new_div.className = ("butterflyPicBox");
		var new_img = document.createElement("IMG");
		  new_img.setAttribute("src", fly_list[i]);
		  new_img.setAttribute("alt", fly_list[i]);
		  new_div.appendChild(new_img);
		  document.body.appendChild(new_div)
		  
		  for(a = 0; a < loop_length2; a++){
			if (-1 != (caterp_list[a].search(fly_list[i]))){
				var new_div = document.createElement('div');
				new_div.className = ("larvaPicBox");
				var new_img = document.createElement("IMG");
				  new_img.setAttribute("src", caterp_list[a]);
				  new_img.setAttribute("alt", caterp_list[a]);
				  new_div.appendChild(new_img);
				  document.body.appendChild(new_div);
				  
			}
		  }
	}
}

