window.onload = function() {
    //Initializing global variables
    window.activeTab = 'dash';
    window.time_data = [];
    window.temp_data = [];
    window.temp_min = [];
    window.temp_max = [];
    window.locations = [];
    window.types = [];
    window.alarm_data = [];
    window.onDisplay = null;
    window.isGraphLoaded = false;
    window.currentTab = "";

    var index = createRow('2DDDBW3TP');
    window.time_data["2DDDBW3TP"] = [];
    window.temp_data["2DDDBW3TP"] = [];
    window.alarm_data["2DDDBW3TP"] = 
    [{
      "temp_alarm": false,
      "power_alarm": false,
      "power_pos": null,
      "temp_pos": null
    },
    {
      "type": "TEMP_ALARM",
      "start_time": "2018-05-24 10:11:58.244",
      "end_time": "2018-05-24 10:12:58.244",
      "duration": "1.00"
    },
    {
      "type": "POWER_ALARM",
      "start_time": "2018-05-24 12:11:58.244",
      "end_time": "2018-05-24 12:13:17.244",
      "duration": "1.7865"
    }
    ];
    window.temp_min["2DDDBW3TP"] = 35;
    window.temp_max["2DDDBW3TP"] = 50;
    window.locations["2DDDBW3TP"] = "WALG31";
    window.types["2DDDBW3TP"] = "VEND";
    var table = document.getElementById("dashboard");
    table.rows[index].cells[3].innerText = 35;
    table.rows[index].cells[4].innerText = 50;
    table.rows[index].cells[5].innerText = "ON";
    table.rows[index].cells[6].innerText = "CLOSED";

    index = createRow('GGR23RTXK');
    window.time_data["GGR23RTXK"] = [];
    window.temp_data["GGR23RTXK"] = [];
    window.alarm_data["GGR23RTXK"] = [{
      "temp_alarm": false,
      "power_alarm": false,
      "power_pos": null,
      "temp_pos": null
    }];
    window.temp_min["GGR23RTXK"] = 0;
    window.temp_max["GGR23RTXK"] = 32;
    window.locations["GGR23RTXK"] = "HIN88";
    window.types["GGR23RTXK"] = "FREEZE";
    table = document.getElementById("dashboard");
    table.rows[index].cells[3].innerText = 0;
    table.rows[index].cells[4].innerText = 32;
    table.rows[index].cells[5].innerText = "ON";
    table.rows[index].cells[6].innerText = "CLOSED";

    index = createRow('8HRT4WX2');
    window.time_data["8HRT4WX2"] = [];
    window.temp_data["8HRT4WX2"] = [];
    window.alarm_data["8HRT4WX2"] = [{
      "temp_alarm": false,
      "power_alarm": false,
      "power_pos": null,
      "temp_pos": null
    }];
    window.temp_min["8HRT4WX2"] = 0;
    window.temp_max["8HRT4WX2"] = 32;
    window.locations["8HRT4WX2"] = "ORD311";
    window.types["8HRT4WX2"] = "VEND";
    table = document.getElementById("dashboard");
    table.rows[index].cells[3].innerText = 0;
    table.rows[index].cells[4].innerText = 32;
    table.rows[index].cells[5].innerText = "ON";
    table.rows[index].cells[6].innerText = "CLOSED";

    index = createRow('4CBH7792RN');
    window.time_data["4CBH7792RN"] = [];
    window.temp_data["4CBH7792RN"] = [];
    window.alarm_data["4CBH7792RN"] = [{
      "temp_alarm": false,
      "power_alarm": false,
      "power_pos": null,
      "temp_pos": null
    }];
    window.temp_min["4CBH7792RN"] = 35;
    window.temp_max["4CBH7792RN"] = 50;
    window.locations["4CBH7792RN"] = "WALG31";
    window.types["4CBH7792RN"] = "VEND";
    table = document.getElementById("dashboard");
    table.rows[index].cells[3].innerText = 35;
    table.rows[index].cells[4].innerText = 50;
    table.rows[index].cells[5].innerText = "ON";
    table.rows[index].cells[6].innerText = "CLOSED";

    index = createRow('RB82KMY3S');
    window.time_data["RB82KMY3S"] = [];
    window.temp_data["RB82KMY3S"] = [];
    window.alarm_data["RB82KMY3S"] = [{
      "temp_alarm": false,
      "power_alarm": false,
      "power_pos": null,
      "temp_pos": null
    }];
    window.temp_min["RB82KMY3S"] = 35;
    window.temp_max["RB82KMY3S"] = 50;
    window.locations["RB82KMY3S"] = "JRB235";
    window.types["RB82KMY3S"] = "VEND";
    table = document.getElementById("dashboard");
    table.rows[index].cells[3].innerText = 35;
    table.rows[index].cells[4].innerText = 50;
    table.rows[index].cells[5].innerText = "ON";
    table.rows[index].cells[6].innerText = "CLOSED";

    index = createRow('JMD51RTKK');
    window.time_data["JMD51RTKK"] = [];
    window.temp_data["JMD51RTKK"] = [];
    window.alarm_data["JMD51RTKK"] = [{
      "temp_alarm": false,
      "power_alarm": false,
      "power_pos": null,
      "temp_pos": null
    }];
    window.temp_min["JMD51RTKK"] = 2;
    window.temp_max["JMD51RTKK"] = 10;
    window.locations["JMD51RTKK"] = "BP762";
    window.types["JMD51RTKK"] = "VEND";
    table = document.getElementById("dashboard");
    table.rows[index].cells[3].innerText = 2;
    table.rows[index].cells[4].innerText = 10;
    table.rows[index].cells[5].innerText = "ON";
    table.rows[index].cells[6].innerText = "CLOSED";

    index = createRow('EKM49RTXK');
    window.time_data["EKM49RTXK"] = [];
    window.temp_data["EKM49RTXK"] = [];
    window.alarm_data["EKM49RTXK"] = [{
      "temp_alarm": false,
      "power_alarm": false,
      "power_pos": null,
      "temp_pos": null
    }];
    window.temp_min["EKM49RTXK"] = 35;
    window.temp_max["EKM49RTXK"] = 50;
    window.locations["EKM49RTXK"] = "FRI7";
    window.types["EKM49RTXK"] = "COOL";
    table = document.getElementById("dashboard");
    table.rows[index].cells[3].innerText = 35;
    table.rows[index].cells[4].innerText = 50;
    table.rows[index].cells[5].innerText = "ON";
    table.rows[index].cells[6].innerText = "CLOSED";

    displayGraph(false);
    newConnection();
}

window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

//Configuration settings for graph
var globalLineConfig = {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [0],
        datasets: [{
            label: "Data",
            fill: false,
            borderColor: window.chartColors.blue,
            data: [0],
        }]
    },
    // Configuration options go here
    options: {
        maintainAspectRatio: false,
        //responsive: true,
        title:{
          display:true,
          text:'Average Temperature of Machine Recorded Over Time'
        },
        tooltips: {
          mode: 'point'
        },
        scales: {
          xAxes: [{
            time: {
              unit: 'milisecond'
            },
            ticks: {
              //maxTicksLimit: 8,
              //evenLabelSpacing: true
              beginAtZero: true
            },
            display:true,
            scaleLabel: {
                display: true,
                labelString: 'Time'
            },
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
            }
          }]
        },
        pan: {
          enabled: true,
          mode: 'x',
          speed: 5,
        },
        zoom: {
          enabled: true,
          mode: 'x',
        },
        annotation: {
        annotations: [{
            label: {
              position: 'left',
              fontSize: 12,
              fontColor: 'black',
              backgroundColor: 'white',
              content: "MIN",
              enabled: true
            },
            type:'line',
            mode:'horizontal',
            scaleID:'y-axis-0',
            value:'0',
            borderColor:'red',
            borderWidth:0.5
        },
        {
            label: {
              position: 'left',
              fontSize: 12,
              fontColor: 'black',
              backgroundColor: 'white',
              content: "MAX",
              enabled: true
            },
            type:'line',
            mode:'horizontal',
            scaleID:'y-axis-0',
            value:'0',
            borderColor:'red',
            borderWidth:0.5
        }]
        }
    }
};

function resetZoom() {
  window.myLine.resetZoom()
}

base64_encode = function(data) {
  // discuss at: http://phpjs.org/functions/base64_encode/
  // original by: Tyler Akins (http://rumkin.com)
  // improved by: Bayron Guevara
  // improved by: Thunder.m
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Rafał Kukawski (http://kukawski.pl)
  // bugfixed by: Pellentesque Malesuada
  //   example 1: base64_encode('Kevin van Zonneveld');
  //   returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
  //   example 2: base64_encode('a');
  //   returns 2: 'YQ=='

  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
  ac = 0,
  enc = '',
  tmp_arr = [];

  if (!data) {
  return data;
  }

  do { // pack three octets into four hexets
  o1 = data.charCodeAt(i++);
  o2 = data.charCodeAt(i++);
  o3 = data.charCodeAt(i++);

  bits = o1 << 16 | o2 << 8 | o3;

  h1 = bits >> 18 & 0x3f;
  h2 = bits >> 12 & 0x3f;
  h3 = bits >> 6 & 0x3f;
  h4 = bits & 0x3f;

  // use hexets to index into b64, and append result to encoded string
  tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);

  enc = tmp_arr.join('');

  var r = data.length % 3;

  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
};


wsAuthorization = function(rw) {
    var returnString;
    authObject = {};
    privilegeObject ={};
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var project = document.getElementById('project').value;
    authObject["authorization"]="Basic " + base64_encode(username + ":" + password);
    if (rw == 'r') {
        privilegeObject["privilege"] = "read";
    }
    else {
        privilegeObject["privilege"] = "write";
    }
    privilegeObject["resourceType"] = "stream";
    privilegeObject["resource"] = 'default/'+project+'/MACHINEDATA';
    returnString = JSON.stringify(authObject)+","+JSON.stringify(privilegeObject);

    privilegeObject["resource"] = 'default/'+project+'/DASHBOARD';
    returnString = returnString + ","+JSON.stringify(privilegeObject);

    privilegeObject["resource"] = 'default/'+project+'/AVG_TEMP';
    returnString = returnString + ","+JSON.stringify(privilegeObject);

    privilegeObject["resource"] = 'default/'+project+'/ALARM_POWER';
    returnString = returnString + ","+JSON.stringify(privilegeObject);

    privilegeObject["resource"] = 'default/'+project+'/ALARM_TEMP';
    returnString = returnString + ","+JSON.stringify(privilegeObject);

    privilegeObject["resource"] = 'default/'+project+'/POWER_OUTAGES';
    returnString = returnString + ","+JSON.stringify(privilegeObject);

    return returnString;
};

subscribe = function() {
    subReq = {};
    subReq["action"] = "subscribe";
    subReq["streams"] = ["MACHINEDATA", "DASHBOARD", "AVG_TEMP", "ALARM_POWER", "ALARM_TEMP", "POWER_OUTAGES"];
    subReq["base"] = false;
    return JSON.stringify(subReq);
};

newConnection = function() {

    // Create a new publisher WebSocket.
    try {
      window.pubSocket = new WebSocket(getProjectURL('publisher'));
    }
    catch(err) {
      console.log(err)
    }
   // Create a new subscriber WebSocket.
    try {
      window.subSocket = new WebSocket(getProjectURL('subscriber'));
    }
    catch(err) {
      console.log(err)
    }



   // Send message {"action":"subscribe". "streams":["MACHINEDATA"]}
   // Receive message {"event":"sub"}

    // Handle any errors that occur.
    window.pubSocket.onerror = function(error) {
      console.log('WebSocket Error: ');
      console.log(error);
    };


    // Show a connected message when the WebSocket is opened.
    window.pubSocket.onopen = function(event) {
      /*socketStatus.innerHTML = 'Connected to: ' + event.currentTarget.URL;
      socketStatus.className = 'open';*/
      console.log("CONNECTED!");
      if (window.pubSocket.readyState === 1){
        this.send("["+wsAuthorization('w')+"]");
      }
    };

    // Write to console when the subscriber WEbSocket is opened
    window.subSocket.onopen = function(event) {
      console.log("Subscriber is ready.");
      console.log(window.alarm_data);
      if (window.subSocket.readyState === 1) {
        this.send("["+wsAuthorization('r')+"]");
        this.send(subscribe());
        //this.send("["+"{\"action\":\"subscribe\",\"stream\":\"MACHINEDATA\",\"base\":true}"+"]");
      }

    };


    // Handle messages sent by the server.
    window.subSocket.onmessage = function(event) {
      /*messagesList.innerHTML += '<li class="received"><span>Received:</span>' +
                                 event.data + '</li>';*/
       var message = JSON.parse(event.data);
       console.log(message);

       if (message.event == 'subscribed') {
       document.getElementById('wsServerStatusConnected').innerHTML = '<img src="https://i.ytimg.com/vi/c9cDUpLYkkA/maxresdefault.jpg">'+'Connected';
       }

      if (message.event == "data"){
        var i;
        for (i = 0; i < message.data.length; i++) {
          var newData = message.data[i];
          var machine_id = newData[1];
          var time = newData[2];
          var event_name = newData[3];
          var event_data = newData[5];


          if (event_name == "DOOR" || event_name == "POWER") {
                insertRow(event_name, machine_id, null, null, null, event_data, null);
          //    pieConfig.data.datasets[0].data[map[event_data]]++;
          //    window.myPie.update();
          }

          if (message.stream == "DASHBOARD") {
              //do something
          }

          if (message.stream == "AVG_TEMP") {
            if (window.time_data[machine_id] == null) {
              //Machine doesn't exist in data set yet. Create new record.
              window.time_data[machine_id] = [];
              window.temp_data[machine_id] = [];
            }
            window.time_data[machine_id].push(time);
            window.temp_data[machine_id].push(event_name);

            if (window.onDisplay == machine_id) {
              window.myLine.update();
            }
            insertRow(message.stream, machine_id, event_name, event_data, newData[4], null, null);
            window.temp_min[machine_id] = event_data;
            window.temp_max[machine_id] = newData[4];
          }

          // if (event_name == "TEMP") {
          //   if (window.time_data[machine_id] == null) {
          //     //Machine doesn't exist in data set yet. Create new record.
          //     window.time_data[machine_id] = [];
          //     window.temp_data[machine_id] = [];
          //   }
          //   window.time_data[machine_id].push(time);
          //   window.temp_data[machine_id].push(event_data);

          //   if (window.onDisplay == machine_id) {
          //     window.myLine.update();
          //   }
          // }

          if (message.stream == "ALARM_TEMP") {
            insertRow("ALARM_TEMP", machine_id, newData[0], null, null, [newData[5], newData[3]], time);

          }

          if (message.stream == "ALARM_POWER") {
            insertRow("ALARM_POWER", machine_id, null, null, null, [newData[5], newData[3]], time);
          }

          if (message.stream == "POWER_OUTAGES"){ //event_name, id, temp, min, max, openclose, time
            insertRow("POWER_OUTAGES", machine_id, newData[4], null, null, null, newData[3]);
          }
        }
      }

    };


    // Show a disconnected message when the WebSocket is closed.
    window.pubSocket.onclose = function(event) {
      if (window.pubSocket.readyState === 3){
  			document.getElementById('wsServerStatusConnected').innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Red_flag.svg/2000px-Red_flag.svg.png">'+'Not Connected';
  		}
    };
};

// Make temperature slider
makeSlider = function(id, val, min, max){
  var slider = "<div id=\"temp-gradient-"+ id +"\"><input type=\"range\" min=\""+
min +"\" max=\""+ max +"\" value=\""+ val+"\" class=\"slider\" id=\"myRange\" disabled=\"true\"><p id=\"min\">MIN</p><p id=\"max\">MAX</p></div>"

  //var slider =  "<div id=\"temp-gradient" + "><input type=\"range\" min=\""
  //+ 1 + "\" max=\"" + 100 + "\" value=\"" + 50 + "\" class=\"slider\" id=\"myRange\"><p id=\"min\">MIN</p><p id=\"max\">MAX</p></div>"

  return slider;
};


// Make dot for alarm with tooltip showing alarm message
makeAlarm = function(color, message, location) {

  if (color == 'red') {
    var alarm = "<span class=\"tooltip\" id=\"dot\" style=\"background-color:"+color+";\"><span class=\"tooltiptext\">"+message +
                ": " + location +"</span></span>";
  }
  else {
    var alarm = "<span class=\"tooltip\" id=\"dot\" style=\"background-color:"+color+";\"></span>";
  }
  //var alarm = "<span class=\"filled-circle\" id=\"dot\" style=\"background-color:"+color+";\">";

  return alarm;
};

createRow = function(machine_id) {
    /***Finds row corresponding to machine_id and returns row index.
    If machine doesn't exist, create new row and return index****/
    var table = document.getElementById("dashboard");

    var index = 1;
    for (index = 1; index < table.rows.length; index++) {
      if (table.rows[index].cells[0].innerText == machine_id) {
        return index;
      }
    }

    //Machine doesn't exist, create new row & graph.
    var newrow = table.insertRow(index);

    newrow.insertCell(0).innerHTML = "<button class=\"m_id\" onclick=\"showMachine(this)\">" + machine_id + "</button>";

    //Inserting data into row
    var i = 1;
    for (i = 1; i < 8 ; i++) {
      newrow.insertCell(i);
    }

    //Default state OK
    table.rows[index].cells[7].innerHTML = makeAlarm("green");

    return index;
}

//Updates machine row with new data
insertRow = function(event_name, id, temp, min, max, openclose, time) {
  var table = document.getElementById("dashboard");
  var gradient = document.getElementById("temp-gradient");
  var circle = document.getElementById("dot");

  //Check if machine_id already exists in table
  var index = createRow(id);

  if (event_name == "AVG_TEMP") {
    table.rows[index].cells[1].innerHTML = makeSlider(id, temp, min, max);
    table.rows[index].cells[2].innerText = temp;
    table.rows[index].cells[3].innerText = min;
    table.rows[index].cells[4].innerText = max;
    return;
  }

  else if (event_name == "POWER") {
    table.rows[index].cells[5].innerText = openclose.split(' ')[1].toUpperCase();
    return;
  }

  else if (event_name == "DOOR") {
    table.rows[index].cells[6].innerText = openclose.split(' ')[1].toUpperCase();
    return;
  }

  else if (event_name == "ALARM_TEMP") {
    if (temp == "u" && window.alarm_data[id][0].temp_alarm == false) {
      table.rows[index].cells[7].innerHTML = makeAlarm("red", openclose[0], openclose[1]);
      table.rows[index].cells[2].style = "color: red";
      window.alarm_data[id][0].temp_alarm = true;
      var tempAlarmObj = {
        "type": "TEMP_ALARM",
        "start_time": time,
        "end_time": "NaN",
        "duration": "null"
      };
      window.alarm_data[id].push(tempAlarmObj);
      if (id == currentTab){
        updateAlarmTable(id);
        document.getElementById('current-status').innerHTML = "Machine Status: " + table.rows[index].cells[7].innerHTML;
      }
      window.alarm_data[id][0].temp_pos = alarm_data[id].length-1;
    }
    else if (temp != "u") {
      if (window.alarm_data[id][0].power_alarm == false){
        table.rows[index].cells[7].innerHTML = makeAlarm("green");
      }
      table.rows[index].cells[2].style = "color: black";
      if (window.alarm_data[id][0].temp_alarm){
        window.alarm_data[id][window.alarm_data[id][0].temp_pos].end_time = time;
        window.alarm_data[id][window.alarm_data[id][0].temp_pos].duration = ((new Date(window.alarm_data[id][window.alarm_data[id][0].temp_pos].end_time) -
        new Date(window.alarm_data[id][window.alarm_data[id][0].temp_pos].start_time))/60000);
        window.alarm_data[id][0].temp_alarm = false;
        if (id == currentTab){
          updateAlarmTable(id);
          document.getElementById('current-status').innerHTML = "Machine Status: " + table.rows[index].cells[7].innerHTML;
        }

      }
    }
  }

  else if (event_name == "ALARM_POWER" && window.alarm_data[id][0].power_alarm == false) {
    table.rows[index].cells[7].innerHTML = makeAlarm("red", openclose[0], openclose[1]);
    table.rows[index].cells[5].style = "color: red";
    var tempPowerObj = {
      "type": "POWER_ALARM",
      "start_time": time,
      "end_time": "NaN",
      "duration": "null"
    }
    window.alarm_data[id].push(tempPowerObj);
    if (id == currentTab){
      updateAlarmTable(id);
      document.getElementById('current-status').innerHTML = "Machine Status: " + table.rows[index].cells[7].innerHTML;
    }
    window.alarm_data[id][0].power_pos = alarm_data[id].length-1;
    window.alarm_data[id][0].power_alarm = true;
  }

  else if (event_name =="POWER_OUTAGES" && window.alarm_data[id][0].power_alarm == true) {
    if (window.alarm_data[id][0].temp_alarm == false){
      table.rows[index].cells[7].innerHTML = makeAlarm("green");
      document.getElementById('current-status').innerHTML = "Machine Status: " + table.rows[index].cells[7].innerHTML;
    }
    table.rows[index].cells[5].style = "color: black";
    window.alarm_data[id][window.alarm_data[id][0].power_pos].end_time = time;
    window.alarm_data[id][window.alarm_data[id][0].power_pos].duration = temp;
    window.alarm_data[id][0].power_alarm = false;
    if (id == currentTab){
      updateAlarmTable(id);
      document.getElementById('current-status').innerHTML = "Machine Status: " + table.rows[index].cells[7].innerHTML;
    }
  }
}

//show graph for current machine, called when MACHINEID buttons are clicked
showMachine = function(button) {
  var machine_id = $(button).html();
  console.log("Hello! " + machine_id);

  window.onDisplay = machine_id;
  switchTab('graph');

  updateGraph(machine_id);
  updateInfo(machine_id);
  updateAlarmTable(machine_id);
  currentTab = machine_id;
}

// updateTable = function(machine_id) {

// }

updateInfo = function(machine_id) {
  var index = createRow(machine_id);
  var colour = document.getElementById("dashboard").rows[index].cells[7].innerHTML;
  document.getElementById('machine-id').innerHTML = "Machine ID: " + machine_id;
  document.getElementById('machine-type').innerHTML = "Machine Type: " + window.types[machine_id];
  document.getElementById('machine-loc').innerHTML = "Machine Location: " + window.locations[machine_id];
  document.getElementById('current-status').innerHTML = "Machine Status: " + colour;
}

updateAlarmTable = function(machine_id){
  $("#alarm-history-table tbody tr").remove();
  var table = document.getElementById("alarm-history-table").getElementsByTagName('tbody')[0];;
  for (var i=1; i<alarm_data[machine_id].length; i++){
    var row = table.insertRow(-1);
    var cell0 = row.insertCell(0)
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    
    cell0.innerHTML = alarm_data[machine_id][i].type;
    cell1.innerHTML = alarm_data[machine_id][i].start_time;
    cell2.innerHTML = alarm_data[machine_id][i].end_time;
    //cell3.innerHTML = alarm_data[machine_id][i].duration;
    cell3.innerHTML = parseFloat(Math.round((alarm_data[machine_id][i].duration) * 100) / 100).toFixed(2);
  }
}

//A new graph should be displayed - replace graph data
updateGraph = function(machine_id) {
  globalLineConfig.data.labels = window.time_data[machine_id];
  globalLineConfig.data.datasets[0].data = window.temp_data[machine_id];
  globalLineConfig.options.title.text = 'Recorded Temperatures of Machine ' + machine_id + ' Over Time';
  globalLineConfig.options.annotation.annotations[0].value = window.temp_min[machine_id];
  globalLineConfig.options.annotation.annotations[1].value = window.temp_max[machine_id];
  window.myLine.update();
}

loadGraph = function(){
  //Creating graph
  var lineCtx = document.getElementById('myChart').getContext('2d');
  window.myLine = new Chart(lineCtx, globalLineConfig);
}

//display Graph if bool is true, else hide
displayGraph = function(bool) {
  var selectGraphs = document.getElementsByClassName('graph-tab');
  var i;
  var display = "block";
  if(!bool) display = "none";

  for (i = 0; i < selectGraphs.length; i++) {
    selectGraphs[i].style.display = display;
  }
}

//Hide current tab elements and display new tab elements
switchTab = function(tab) {
  //$("#alarm-history-table").hide();
  var hideTab = document.getElementsByClassName(window.activeTab+'-tab');
  var hideBtn = document.getElementById(window.activeTab+'-btn');
  var dispTab = document.getElementsByClassName(tab + '-tab');
  var dispBtn = document.getElementById(tab + '-btn');
  var i;
  for (i = 0; i < hideTab.length; i++) {
    hideTab[i].style.display = "none";
  }

  for (i = 0; i < dispTab.length; i++) {
    dispTab[i].style.display = "block";
  }

  if (tab == 'graph' && !window.isGraphLoaded){
    window.isGraphLoaded = true;
    loadGraph();
  }
  else if(tab =='graph') displayGraph(true);
  else displayGraph(false);

  $(hideBtn).removeClass('active-btn').addClass('inactive-btn');
  $(dispBtn).removeClass('inactive-btn').addClass('active-btn');
  window.activeTab = tab;
}

getProjectURL = function(method) {
  return "ws://" + document.getElementById('customServer').value +":"+document.getElementById("customPort").value +
														"/1/workspaces/" + document.getElementById('workspace').value + "/projects/" +
                            document.getElementById('project').value + "/" + method;
}


createConnection = function() {
  if (window.pubSocket == undefined) {
    newConnection();
  }
  if (window.pubSocket.readyState == 1){
    window.pubSocket.close();
  }
  newConnection();
}

//Zaeem

function showMachineInfo(id, arrow_id) {
    var x = document.getElementById(id);
    $(x).toggle(500);
    document.getElementById(arrow_id).classList.toggle("fa-angle-down");
      //classList.toggle("fa-caret-down");
}