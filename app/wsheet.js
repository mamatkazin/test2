

function initSocketQueryCounter(){
    var queryCounter = 0;
    return function(){queryCounter=queryCounter+1; return tag+"Out:"+queryCounter;};
}
var socketQueryCounter=initSocketQueryCounter();

var socket = new WebSocket(WSHost);
if (!socket){
    //window.location.replace(BASE_URL+"/syserr?Socket error= No socket (WebSocket fails)!");
    alert("?No WebSocket!")
};

socket.onopen = function() {
alert("On open;WSHost="+WSHost)
    var msg1 = {
		action_name:"firstMess",
		user_id:"-2",
		data:"I greeting you!"	
    };
    
   
    socket.send(JSON.stringify(msg1));
    
   
};

socket.onerror = function(e) {
	alert("ONERROR; message="+e.message);
};

socket.onclose = function(e) {
	alert("ONCLOSE:code="+e.code+"\nreason="+e.reason);
};



// 


// обработчик входящих сообщений
socket.onmessage = function(e) {
        console.log("typeof(e.data)="+typeof(e.data));
        var answer = JSON.parse(e.data);

        switch(answer.action_name) {
            case "firstAnswer":
                showMessage(answer);
            break;
            default:
                showMessage(answer);
        } 
        answer=null;
         
};


function sendQQQ(d) {
	alert("sendQQQ(data="+d)
    var msgQQQ = {
		action_name:"qqq",
		user_id:"-2",
		data:d	
    };
    
   
    socket.send(JSON.stringify(msgQQQ));
    
   
};




function showMessage(answer) {
    //alert("showMessage="+answer);
    var elem=document.getElementById('subscribe');
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    for (var key in answer) {
        if (answer.hasOwnProperty(key)) {
            var field = key + " : " + answer[key];
            var fieldElem = document.createElement('p');
            fieldElem.appendChild(document.createTextNode(field));
            document.getElementById('subscribe').appendChild(fieldElem);
        }
	}
}



