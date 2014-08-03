function ( $ ){
  "use strict";
  var feedID = 1868918819;
  
  xively.setKey("ywafB6MNLUakqggSfAgfrSaQoyRhPsbYbRVfuqVILy5ctgQr");
  
  xively.feed.get(feedID, function(data)){
    
    var feed = data,
        datastream,
        value,
        handleToggle = function(datastreamID, value) {
          var $toggle = $(".js-"+datastreamID+"toggle");
          
           if ( value ) {
            // lights are on
            ui.toggle.on( $toggle, true );
          }
          else {
            // lights are off
            ui.toggle.off( $toggle, true );
          }
                    // save changes
          $(".js-"+ datastreamID).on("change", function(){
            $(".app-state").addClass("loading").fadeIn(200);

            if ( this.checked ) {
              xively.datastream.update(feedID, datastreamID, { "current_value": 1 }, function(){
                $(".app-state").removeClass("loading").fadeOut(200);
              });
            }
            else {
              xively.datastream.update(feedID, datastreamID, { "current_value": 0 }, function(){
                $(".app-state").removeClass("loading").fadeOut(200);
              });
            }
          });

          // make it live
          xively.datastream.subscribe(feedID, datastreamID, function ( event, data ) {
            ui.fakeLoad();

            if ( parseInt(data["current_value"]) ) {
              // lights are on
              ui.toggle.on( $toggle, true );
            }
            else {
              // lights are off
              ui.toggle.off( $toggle, true );
            }
          });
        };

    // loop through datastreams

    for (var x = 0, len = feed.datastreams.length; x < len; x++) {
      datastream = feed.datastreams[x];
      value = parseInt(datastream["current_value"]);
  }
