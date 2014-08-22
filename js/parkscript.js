(function($) {
  "use strict";
  
  var feedID        = 1868918819,  
      datastreamID  = "Sensor1";     
      selector1      = "#myelement1";
      
  xively.setKey( "ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr" );
  
  xively.datastream.get (feedID, datastreamID, function ( datastream ){
    $(selector1).html(datastream["current_value"]);
    xively.datastream.subscribe( feedID, datastreamID, function ( event , datastream_updated ){
        
      if (datastream_updated["current_value"] == '0'){
        var f1=document.getElementById("space1");
        var f1tx=f1.getContext("2d");
            
        f1tx.clearRect(0,0,space1.width,space1.height);
        f1tx.font = "50px Arial";
        f1tx.strokeStyle="rgb(154,205,50)";
        f1tx.strokeText("FREE",36,50);
            
      } else if(datastream_updated["current_value"] == '1') {
        var t1=document.getElementById("space1");
        var t1tx=t1.getContext("2d");
            
        t1tx.clearRect(0,0,space1.width,space1.height);
        t1tx.font = "50px Arial";
        t1tx.strokeStyle="rgb(154,205,50)";
        t1tx.strokeText("TAKEN",36,50);
            
      } else if(datastream_updated["current_value"] == '2'){
        var b1=document.getElementById("space1");
        var b1tx=b1.getContext("2d");
            
        b1tx.clearRect(0,0,space1.width,space1.height);
        b1tx.font = "50px Arial";
        b1tx.strokeStyle="rgb(154,205,50)";
        b1tx.strokeText("BOOKED",36,50);
      };
      
      confirmCode1=function(){
        var enteredC = document.getElementById("codeEnter1").value;
         
        if(datastream_updated["current_value"] == '2'){
          if (enteredC == code1){
            bookToTaken1();
            document.getElementById("bookConfirmed").innerHTML="TY :)";
          }else{
            document.getElementById("bookConfirmed").innerHTML="WRONG CODE :(";
          };
        };
      }
    });
  });
  
  function bookHandling(){
    handleBook1();
    bookCode1();
    showCode1();
  }
   
  function handleBook1(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor1,2',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
  }
      
  function handleBook1(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor1,2',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
  }
      
  function bookToTaken1(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor1,1',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
  }

  var code1="";
  var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
      
  for( var i=0; i < 5; i++ ){
    code1 += possible.charAt(Math.floor(Math.random() * possible.length));
  };

  function bookCode1(){
    return code1;
  }
  
  function showCode1(){
    document.getElementById("bookCode1").innerHTML=bookCode1();
  }
});
