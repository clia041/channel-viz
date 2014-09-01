(function($) {
      var feedID        = 1868918819,  
      datastreamID1 = "Sensor1", datastreamID2 = "Sensor2", datastreamID3 = "Sensor3", datastreamID4 = "Sensor4",
      datastreamID5 = "Sensor5", datastreamID6 = "Sensor6", datastreamID7 = "Sensor7", datastreamID8 = "Sensor8",
      datastreamID9 = "Sensor9", datastreamID10 = "Sensor10", datastreamID11 = "Sensor11", datastreamID12 = "Sensor12";
      
      xively.setKey( "ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr" );
  
  
      var f1=document.getElementById("space1"), f1tx=f1.getContext("2d"), f2=document.getElementById("space2"), f2tx=f2.getContext("2d"),
          f3=document.getElementById("space3"), f3tx=f3.getContext("2d"), f4=document.getElementById("space4"), f4tx=f4.getContext("2d"),
          f5=document.getElementById("space5"), f5tx=f5.getContext("2d"), f6=document.getElementById("space6"), f6tx=f6.getContext("2d"),
          f7=document.getElementById("space7"), f7tx=f7.getContext("2d"), f8=document.getElementById("space8"), f8tx=f8.getContext("2d"),
          f9=document.getElementById("space9"), f9tx=f9.getContext("2d"), f10=document.getElementById("space10"), f10tx=f10.getContext("2d"),
          f11=document.getElementById("space11"), f11tx=f11.getContext("2d"), f12=document.getElementById("space12"), f12tx=f12.getContext("2d");
//-------------------------------------------------------------------------------------------------------------
//STATUS DISPLAY FOR SPACE 1  
   xively.datastream.get (feedID, datastreamID1, function ( datastream ){
      if (datastream["current_value"] == '0'){
         f1tx.clearRect(0,0,space1.width,space1.height);
         f1tx.font = "50px Arial";
         f1tx.strokeStyle="rgb(154,205,50)";
         f1tx.strokeText("FREE",36,50);
        
      }else if(datastream["current_value"] == '1') {
         f1tx.clearRect(0,0,space1.width,space1.height);
         f1tx.font = "50px Arial";
         f1tx.strokeStyle="rgb(154,205,50)";
         f1tx.strokeText("TAKEN",36,50);
           
      }else if(datastream["current_value"] == '2'){
         f1tx.clearRect(0,0,space1.width,space1.height);
         f1tx.font = "50px Arial";
         f1tx.strokeStyle="rgb(154,205,50)";
         f1tx.strokeText("BOOKED",36,50);
     };
//UPDATE STATUS DISPLAY FOR SPACE 1
   xively.datastream.subscribe( feedID, datastreamID1, function ( event , datastream_updated ){
      if (datastream_updated["current_value"] == '0'){
         f1tx.clearRect(0,0,space1.width,space1.height);
         f1tx.font = "50px Arial";
         f1tx.strokeStyle="rgb(154,205,50)";
         f1tx.strokeText("FREE",36,50);
        
      }else if(datastream_updated["current_value"] == '1') {
         f1tx.clearRect(0,0,space1.width,space1.height);
         f1tx.font = "50px Arial";
         f1tx.strokeStyle="rgb(154,205,50)";
         f1tx.strokeText("TAKEN",36,50);  
           
      }else if(datastream_updated["current_value"] == '2'){
         f1tx.clearRect(0,0,space1.width,space1.height);
         f1tx.font = "50px Arial";
         f1tx.strokeStyle="rgb(154,205,50)";
         f1tx.strokeText("BOOKED",36,50);
      }
   });
   });      
   
//-------------------------------------------------------------------------------------------------------------
//STATUS DISPLAY FOR SPACE 2  
   xively.datastream.get (feedID, datastreamID2, function ( datastream ){
      if (datastream["current_value"] == '0'){
         f2tx.clearRect(0,0,space2.width,space2.height);
         f2tx.font = "50px Arial";
         f2tx.strokeStyle="rgb(154,205,50)";
         f2tx.strokeText("FREE",36,50);
        
      }else if(datastream["current_value"] == '1') {
         f2tx.clearRect(0,0,space2.width,space2.height);
         f2tx.font = "50px Arial";
         f2tx.strokeStyle="rgb(154,205,50)";
         f2tx.strokeText("TAKEN",36,50);
           
      }else if(datastream["current_value"] == '2'){
         f2tx.clearRect(0,0,space2.width,space2.height);
         f2tx.font = "50px Arial";
         f2tx.strokeStyle="rgb(154,205,50)";
         f2tx.strokeText("BOOKED",36,50);
     };
//UPDATE STATUS DISPLAY FOR SPACE 2
   xively.datastream.subscribe( feedID, datastreamID2, function ( event , datastream_updated ){
      if (datastream_updated["current_value"] == '0'){
         f2tx.clearRect(0,0,space2.width,space2.height);
         f2tx.font = "50px Arial";
         f2tx.strokeStyle="rgb(154,205,50)";
         f2tx.strokeText("FREE",36,50);
        
      }else if(datastream_updated["current_value"] == '1') {
         f2tx.clearRect(0,0,space2.width,space2.height);
         f2tx.font = "50px Arial";
         f2tx.strokeStyle="rgb(154,205,50)";
         f2tx.strokeText("TAKEN",36,50);  
           
      }else if(datastream_updated["current_value"] == '2'){
         f2tx.clearRect(0,0,space2.width,space2.height);
         f2tx.font = "50px Arial";
         f2tx.strokeStyle="rgb(154,205,50)";
         f2tx.strokeText("BOOKED",36,50);
      }
   });
   });
   
//-------------------------------------------------------------------------------------------------------------
//STATUS DISPLAY FOR SPACE 3
   xively.datastream.get (feedID, datastreamID3, function ( datastream ){
      if (datastream["current_value"] == '0'){
         f3tx.clearRect(0,0,space3.width,space3.height);
         f3tx.font = "50px Arial";
         f3tx.strokeStyle="rgb(154,205,50)";
         f3tx.strokeText("FREE",36,50);
        
      }else if(datastream["current_value"] == '1') {
         f3tx.clearRect(0,0,space3.width,space3.height);
         f3tx.font = "50px Arial";
         f3tx.strokeStyle="rgb(154,205,50)";
         f3tx.strokeText("TAKEN",36,50);
           
      }else if(datastream["current_value"] == '2'){
         f3tx.clearRect(0,0,space3.width,space3.height);
         f3tx.font = "50px Arial";
         f3tx.strokeStyle="rgb(154,205,50)";
         f3tx.strokeText("BOOKED",36,50);
     };
//UPDATE STATUS DISPLAY FOR SPACE 3
   xively.datastream.subscribe( feedID, datastreamID3, function ( event , datastream_updated ){
      if (datastream_updated["current_value"] == '0'){
         f3tx.clearRect(0,0,space3.width,space3.height);
         f3tx.font = "50px Arial";
         f3tx.strokeStyle="rgb(154,205,50)";
         f3tx.strokeText("FREE",36,50);
        
      }else if(datastream_updated["current_value"] == '1') {
         f3tx.clearRect(0,0,space3.width,space3.height);
         f3tx.font = "50px Arial";
         f3tx.strokeStyle="rgb(154,205,50)";
         f3tx.strokeText("TAKEN",36,50);  
           
      }else if(datastream_updated["current_value"] == '2'){
         f3tx.clearRect(0,0,space3.width,space3.height);
         f3tx.font = "50px Arial";
         f3tx.strokeStyle="rgb(154,205,50)";
         f3tx.strokeText("BOOKED",36,50);
      }
   });
   });

//-------------------------------------------------------------------------------------------------------------
//STATUS DISPLAY FOR SPACE 4
   xively.datastream.get (feedID, datastreamID4, function ( datastream ){
      if (datastream["current_value"] == '0'){
         f4tx.clearRect(0,0,space4.width,space4.height);
         f4tx.font = "50px Arial";
         f4tx.strokeStyle="rgb(154,205,50)";
         f4tx.strokeText("FREE",36,50);
        
      }else if(datastream["current_value"] == '1') {
         f4tx.clearRect(0,0,space4.width,space4.height);
         f4tx.font = "50px Arial";
         f4tx.strokeStyle="rgb(154,205,50)";
         f4tx.strokeText("TAKEN",36,50);
           
      }else if(datastream["current_value"] == '2'){
         f4tx.clearRect(0,0,space4.width,space4.height);
         f4tx.font = "50px Arial";
         f4tx.strokeStyle="rgb(154,205,50)";
         f4tx.strokeText("BOOKED",36,50);
     };
//UPDATE STATUS DISPLAY FOR SPACE 4
   xively.datastream.subscribe( feedID, datastreamID4, function ( event , datastream_updated ){
      if (datastream_updated["current_value"] == '0'){
         f4tx.clearRect(0,0,space4.width,space4.height);
         f4tx.font = "50px Arial";
         f4tx.strokeStyle="rgb(154,205,50)";
         f4tx.strokeText("FREE",36,50);
        
      }else if(datastream_updated["current_value"] == '1') {
         f4tx.clearRect(0,0,space4.width,space4.height);
         f4tx.font = "50px Arial";
         f4tx.strokeStyle="rgb(154,205,50)";
         f4tx.strokeText("TAKEN",36,50);  
           
      }else if(datastream_updated["current_value"] == '2'){
         f4tx.clearRect(0,0,space4.width,space4.height);
         f4tx.font = "50px Arial";
         f4tx.strokeStyle="rgb(154,205,50)";
         f4tx.strokeText("BOOKED",36,50);
      }
   });
   });

//-------------------------------------------------------------------------------------------------------------
//STATUS DISPLAY FOR SPACE 5
   xively.datastream.get (feedID, datastreamID5, function ( datastream ){
      if (datastream["current_value"] == '0'){
         f5tx.clearRect(0,0,space5.width,space5.height);
         f5tx.font = "50px Arial";
         f5tx.strokeStyle="rgb(154,205,50)";
         f5tx.strokeText("FREE",36,50);
        
      }else if(datastream["current_value"] == '1') {
         f5tx.clearRect(0,0,space5.width,space5.height);
         f5tx.font = "50px Arial";
         f5tx.strokeStyle="rgb(154,205,50)";
         f5tx.strokeText("TAKEN",36,50);
           
      }else if(datastream["current_value"] == '2'){
         f5tx.clearRect(0,0,space5.width,space5.height);
         f5tx.font = "50px Arial";
         f5tx.strokeStyle="rgb(154,205,50)";
         f5tx.strokeText("BOOKED",36,50);
     };
//UPDATE STATUS DISPLAY FOR SPACE 5
   xively.datastream.subscribe( feedID, datastreamID5, function ( event , datastream_updated ){
      if (datastream_updated["current_value"] == '0'){
         f5tx.clearRect(0,0,space5.width,space5.height);
         f5tx.font = "50px Arial";
         f5tx.strokeStyle="rgb(154,205,50)";
         f5tx.strokeText("FREE",36,50);
        
      }else if(datastream_updated["current_value"] == '1') {
         f5tx.clearRect(0,0,space5.width,space5.height);
         f5tx.font = "50px Arial";
         f5tx.strokeStyle="rgb(154,205,50)";
         f5tx.strokeText("TAKEN",36,50);  
           
      }else if(datastream_updated["current_value"] == '2'){
         f5tx.clearRect(0,0,space5.width,space5.height);
         f5tx.font = "50px Arial";
         f5tx.strokeStyle="rgb(154,205,50)";
         f5tx.strokeText("BOOKED",36,50);
      }
   });
   });

//-------------------------------------------------------------------------------------------------------------
//STATUS DISPLAY FOR SPACE 6
   xively.datastream.get (feedID, datastreamID6, function ( datastream ){
      if (datastream["current_value"] == '0'){
         f6tx.clearRect(0,0,space3.width,space3.height);
         f6tx.font = "50px Arial";
         f6tx.strokeStyle="rgb(154,205,50)";
         f6tx.strokeText("FREE",36,50);
        
      }else if(datastream["current_value"] == '1') {
         f6tx.clearRect(0,0,space3.width,space3.height);
         f6tx.font = "50px Arial";
         f6tx.strokeStyle="rgb(154,205,50)";
         f6tx.strokeText("TAKEN",36,50);
           
      }else if(datastream["current_value"] == '2'){
         f6tx.clearRect(0,0,space3.width,space3.height);
         f6tx.font = "50px Arial";
         f6tx.strokeStyle="rgb(154,205,50)";
         f6tx.strokeText("BOOKED",36,50);
     };
//UPDATE STATUS DISPLAY FOR SPACE 6
   xively.datastream.subscribe( feedID, datastreamID6, function ( event , datastream_updated ){
      if (datastream_updated["current_value"] == '0'){
         f6tx.clearRect(0,0,space3.width,space3.height);
         f6tx.font = "50px Arial";
         f6tx.strokeStyle="rgb(154,205,50)";
         f6tx.strokeText("FREE",36,50);
        
      }else if(datastream_updated["current_value"] == '1') {
         f6tx.clearRect(0,0,space3.width,space3.height);
         f6tx.font = "50px Arial";
         f6tx.strokeStyle="rgb(154,205,50)";
         f6tx.strokeText("TAKEN",36,50);  
           
      }else if(datastream_updated["current_value"] == '2'){
         f6tx.clearRect(0,0,space3.width,space3.height);
         f6tx.font = "50px Arial";
         f6tx.strokeStyle="rgb(154,205,50)";
         f6tx.strokeText("BOOKED",36,50);
      }
   });
   });

//-------------------------------------------------------------------------------------------------------------
//STATUS DISPLAY FOR SPACE 7
   xively.datastream.get (feedID, datastreamID7, function ( datastream ){
      if (datastream["current_value"] == '0'){
         f7tx.clearRect(0,0,space3.width,space3.height);
         f7tx.font = "50px Arial";
         f7tx.strokeStyle="rgb(154,205,50)";
         f7tx.strokeText("FREE",36,50);
        
      }else if(datastream["current_value"] == '1') {
         f7tx.clearRect(0,0,space3.width,space3.height);
         f7tx.font = "50px Arial";
         f7tx.strokeStyle="rgb(154,205,50)";
         f7tx.strokeText("TAKEN",36,50);
           
      }else if(datastream["current_value"] == '2'){
         f7tx.clearRect(0,0,space3.width,space3.height);
         f7tx.font = "50px Arial";
         f7tx.strokeStyle="rgb(154,205,50)";
         f7tx.strokeText("BOOKED",36,50);
     };
//UPDATE STATUS DISPLAY FOR SPACE 3
   xively.datastream.subscribe( feedID, datastreamID7, function ( event , datastream_updated ){
      if (datastream_updated["current_value"] == '0'){
         f7tx.clearRect(0,0,space3.width,space3.height);
         f7tx.font = "50px Arial";
         f7tx.strokeStyle="rgb(154,205,50)";
         f7tx.strokeText("FREE",36,50);
       
      }else if(datastream_updated["current_value"] == '1') {
         f7tx.clearRect(0,0,space3.width,space3.height);
         f7tx.font = "50px Arial";
         f7tx.strokeStyle="rgb(154,205,50)";
         f7tx.strokeText("TAKEN",36,50);  
           
      }else if(datastream_updated["current_value"] == '2'){
         f7tx.clearRect(0,0,space3.width,space3.height);
         f7tx.font = "50px Arial";
         f7tx.strokeStyle="rgb(154,205,50)";
         f7tx.strokeText("BOOKED",36,50);
      }
   });
   });

//-------------------------------------------------------------------------------------------------------------
//STATUS DISPLAY FOR SPACE 8
   xively.datastream.get (feedID, datastreamID8, function ( datastream ){
      if (datastream["current_value"] == '0'){
         f8tx.clearRect(0,0,space3.width,space3.height);
         f8tx.font = "50px Arial";
         f8tx.strokeStyle="rgb(154,205,50)";
         f8tx.strokeText("FREE",36,50);
        
      }else if(datastream["current_value"] == '1') {
         f8tx.clearRect(0,0,space3.width,space3.height);
         f8tx.font = "50px Arial";
         f8tx.strokeStyle="rgb(154,205,50)";
         f8tx.strokeText("TAKEN",36,50);
           
      }else if(datastream["current_value"] == '2'){
         f8tx.clearRect(0,0,space3.width,space3.height);
         f8tx.font = "50px Arial";
         f8tx.strokeStyle="rgb(154,205,50)";
         f8tx.strokeText("BOOKED",36,50);
     };
//UPDATE STATUS DISPLAY FOR SPACE 3
   xively.datastream.subscribe( feedID, datastreamID8, function ( event , datastream_updated ){
      if (datastream_updated["current_value"] == '0'){
         f8tx.clearRect(0,0,space3.width,space3.height);
         f8tx.font = "50px Arial";
         f8tx.strokeStyle="rgb(154,205,50)";
         f8tx.strokeText("FREE",36,50);
        
      }else if(datastream_updated["current_value"] == '1') {
         f8tx.clearRect(0,0,space3.width,space3.height);
         f8tx.font = "50px Arial";
         f8tx.strokeStyle="rgb(154,205,50)";
         f8tx.strokeText("TAKEN",36,50);  
           
      }else if(datastream_updated["current_value"] == '2'){
         f8tx.clearRect(0,0,space3.width,space3.height);
         f8tx.font = "50px Arial";
         f8tx.strokeStyle="rgb(154,205,50)";
         f8tx.strokeText("BOOKED",36,50);
      }
   });
   });

//-------------------------------------------------------------------------------------------------------------
//STATUS DISPLAY FOR SPACE 9
   xively.datastream.get (feedID, datastreamID9, function ( datastream ){
      if (datastream["current_value"] == '0'){
         f9tx.clearRect(0,0,space3.width,space3.height);
         f9tx.font = "50px Arial";
         f9tx.strokeStyle="rgb(154,205,50)";
         f9tx.strokeText("FREE",36,50);
        
      }else if(datastream["current_value"] == '1') {
         f9tx.clearRect(0,0,space3.width,space3.height);
         f9tx.font = "50px Arial";
         f9tx.strokeStyle="rgb(154,205,50)";
         f9tx.strokeText("TAKEN",36,50);
           
      }else if(datastream["current_value"] == '2'){
         f9tx.clearRect(0,0,space3.width,space3.height);
         f9tx.font = "50px Arial";
         f9tx.strokeStyle="rgb(154,205,50)";
         f9tx.strokeText("BOOKED",36,50);
     };
//UPDATE STATUS DISPLAY FOR SPACE 9
   xively.datastream.subscribe( feedID, datastreamID9, function ( event , datastream_updated ){
      if (datastream_updated["current_value"] == '0'){
         f9tx.clearRect(0,0,space3.width,space3.height);
         f9tx.font = "50px Arial";
         f9tx.strokeStyle="rgb(154,205,50)";
         f9tx.strokeText("FREE",36,50);
        
      }else if(datastream_updated["current_value"] == '1') {
         f9tx.clearRect(0,0,space3.width,space3.height);
         f9tx.font = "50px Arial";
         f9tx.strokeStyle="rgb(154,205,50)";
         f9tx.strokeText("TAKEN",36,50);  
           
      }else if(datastream_updated["current_value"] == '2'){
         f9tx.clearRect(0,0,space3.width,space3.height);
         f9tx.font = "50px Arial";
         f9tx.strokeStyle="rgb(154,205,50)";
         f9tx.strokeText("BOOKED",36,50);
      }
   });
   });

//-------------------------------------------------------------------------------------------------------------
//STATUS DISPLAY FOR SPACE 10
   xively.datastream.get (feedID, datastreamID10, function ( datastream ){
      if (datastream["current_value"] == '0'){
         f10tx.clearRect(0,0,space3.width,space3.height);
         f10tx.font = "50px Arial";
         f10tx.strokeStyle="rgb(154,205,50)";
         f10tx.strokeText("FREE",36,50);
        
      }else if(datastream["current_value"] == '1') {
         f10tx.clearRect(0,0,space3.width,space3.height);
         f10tx.font = "50px Arial";
         f10tx.strokeStyle="rgb(154,205,50)";
         f10tx.strokeText("TAKEN",36,50);
           
      }else if(datastream["current_value"] == '2'){
         f10tx.clearRect(0,0,space3.width,space3.height);
         f10tx.font = "50px Arial";
         f10tx.strokeStyle="rgb(154,205,50)";
         f10tx.strokeText("BOOKED",36,50);
     };
//UPDATE STATUS DISPLAY FOR SPACE 10
   xively.datastream.subscribe( feedID, datastreamID10, function ( event , datastream_updated ){
      if (datastream_updated["current_value"] == '0'){
         f10tx.clearRect(0,0,space3.width,space3.height);
         f10tx.font = "50px Arial";
         f10tx.strokeStyle="rgb(154,205,50)";
         f10tx.strokeText("FREE",36,50);
        
      }else if(datastream_updated["current_value"] == '1') {
         f10tx.clearRect(0,0,space3.width,space3.height);
         f10tx.font = "50px Arial";
         f10tx.strokeStyle="rgb(154,205,50)";
         f10tx.strokeText("TAKEN",36,50);  
           
      }else if(datastream_updated["current_value"] == '2'){
         f10tx.clearRect(0,0,space3.width,space3.height);
         f10tx.font = "50px Arial";
         f10tx.strokeStyle="rgb(154,205,50)";
         f10tx.strokeText("BOOKED",36,50);
      }
   });
   });

//-------------------------------------------------------------------------------------------------------------
//STATUS DISPLAY FOR SPACE 11
   xively.datastream.get (feedID, datastreamID11, function ( datastream ){
      if (datastream["current_value"] == '0'){
         f11tx.clearRect(0,0,space3.width,space3.height);
         f11tx.font = "50px Arial";
         f11tx.strokeStyle="rgb(154,205,50)";
         f11tx.strokeText("FREE",36,50);
        
      }else if(datastream["current_value"] == '1') {
         f11tx.clearRect(0,0,space3.width,space3.height);
         f11tx.font = "50px Arial";
         f11tx.strokeStyle="rgb(154,205,50)";
         f11tx.strokeText("TAKEN",36,50);
           
      }else if(datastream["current_value"] == '2'){
         f11tx.clearRect(0,0,space3.width,space3.height);
         f11tx.font = "50px Arial";
         f11tx.strokeStyle="rgb(154,205,50)";
         f11tx.strokeText("BOOKED",36,50);
     };
//UPDATE STATUS DISPLAY FOR SPACE 10
   xively.datastream.subscribe( feedID, datastreamID11, function ( event , datastream_updated ){
      if (datastream_updated["current_value"] == '0'){
         f11tx.clearRect(0,0,space3.width,space3.height);
         f11tx.font = "50px Arial";
         f11tx.strokeStyle="rgb(154,205,50)";
         f11tx.strokeText("FREE",36,50);
        
      }else if(datastream_updated["current_value"] == '1') {
         f11tx.clearRect(0,0,space3.width,space3.height);
         f11tx.font = "50px Arial";
         f11tx.strokeStyle="rgb(154,205,50)";
         f11tx.strokeText("TAKEN",36,50);  
           
      }else if(datastream_updated["current_value"] == '2'){
         f11tx.clearRect(0,0,space3.width,space3.height);
         f11tx.font = "50px Arial";
         f11tx.strokeStyle="rgb(154,205,50)";
         f11tx.strokeText("BOOKED",36,50);
      }
   });
   });

//-------------------------------------------------------------------------------------------------------------
//STATUS DISPLAY FOR SPACE 12
   xively.datastream.get (feedID, datastreamID12, function ( datastream ){
      if (datastream["current_value"] == '0'){
         f12tx.clearRect(0,0,space3.width,space3.height);
         f12tx.font = "50px Arial";
         f12tx.strokeStyle="rgb(154,205,50)";
         f12tx.strokeText("FREE",36,50);
        
      }else if(datastream["current_value"] == '1') {
         f12tx.clearRect(0,0,space3.width,space3.height);
         f12tx.font = "50px Arial";
         f12tx.strokeStyle="rgb(154,205,50)";
         f12tx.strokeText("TAKEN",36,50);
           
      }else if(datastream["current_value"] == '2'){
         f12tx.clearRect(0,0,space3.width,space3.height);
         f12tx.font = "50px Arial";
         f12tx.strokeStyle="rgb(154,205,50)";
         f12tx.strokeText("BOOKED",36,50);
     };
//UPDATE STATUS DISPLAY FOR SPACE 10
   xively.datastream.subscribe( feedID, datastreamID12, function ( event , datastream_updated ){
      if (datastream_updated["current_value"] == '0'){
         f12tx.clearRect(0,0,space3.width,space3.height);
         f12tx.font = "50px Arial";
         f12tx.strokeStyle="rgb(154,205,50)";
         f12tx.strokeText("FREE",36,50);
        
      }else if(datastream_updated["current_value"] == '1') {
         f12tx.clearRect(0,0,space3.width,space3.height);
         f12tx.font = "50px Arial";
         f12tx.strokeStyle="rgb(154,205,50)";
         f12tx.strokeText("TAKEN",36,50);  
           
      }else if(datastream_updated["current_value"] == '2'){
         f12tx.clearRect(0,0,space3.width,space3.height);
         f12tx.font = "50px Arial";
         f12tx.strokeStyle="rgb(154,205,50)";
         f12tx.strokeText("BOOKED",36,50);
      }
   });
   });

   checkCredit1=function(){
      var enteredC1 = document.getElementById("hello1").value;
      var bookCode1 = enteredC1.substring(11, 5);
      var API_KEYc = "WpOOQ3ybilqsx42Abq9dbHgv50pr9kijh4iWtLipKRa9CsyL";
      var FEED_IDc = "2041803059";
      
      xively.setKey(API_KEYc);
      var timestamp = new Date().toISOString();
      var data = { "version" : "1.0.0",
            "datastreams" : [
               { "id" : "code1", "datapoints" : [ {"at" : timestamp, "value" : bookCode1} ] } ]};
      
      if (!isNaN(enteredC1)){
         if (enteredC1.length == 16){
            document.getElementById("book1").innerHTML = "thank";
            handleBook1();
            xively.feed.update(FEED_IDc, data, function(data){});
            document.getElementById("book1").innerHTML = "Your booking code is:" + bookCode1;
         } else {
            document.getElementById("book1").innerHTML = "nope";
         }
      }else{
         document.getElemenById("book1").innerHTML = "invalid";
      }
   }   
   
  function handleBook1(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor1,2',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
  }
  
   function handleBook2(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor2,2',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
   }
   
   function handleBook3(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor3,2',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
   }
   
   function handleBook4(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor4,2',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
   }
   
   function handleBook5(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor5,2',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
   }
   
   function handleBook6(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor6,2',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
   }
   
   function handleBook7(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor7,2',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
   }
   
   function handleBook8(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor8,2',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
   }
   
   function handleBook9(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor9,2',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
   }
   
   function handleBook10(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor10,2',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
   }
   
   function handleBook11(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor11,2',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
   }
   
   function handleBook12(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor12,2',
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
  
  function bookToTaken2(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor2,1',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
  }
  
  function bookToTaken3(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor3,1',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
  }
  
  function bookToTaken4(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor4,1',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
  }
  
  function bookToTaken5(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor5,1',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
  }
  
  function bookToTaken6(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor6,1',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
  }
  
  function bookToTaken7(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor7,1',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
  }
  
  function bookToTaken8(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor8,1',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
  }
  
  function bookToTaken9(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor9,1',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
  }
  
  function bookToTaken10(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor10,1',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
  }
  
  function bookToTaken11(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor11,1',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
  }
  
  function bookToTaken12(){
    $.ajax({
      url: 'https://api.xively.com/v2/feeds/1868918819.csv',
      type: 'PUT',
      data: 'Sensor12,1',
      headers: {'X-ApiKey': 'ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr'}
    });
  }

});
