var ui      = {};

(function ( $ ){
  "use strict";

  // UI TOGGLE

  ui.toggle = (function () {
    var selector  = "[data-toggle]",
        methods   = {};

    // switch off
    methods.off = function ( el, notrigger ) {
      var $el       = $(el),
          $checkbox = $($el.attr("data-toggle"));
      if ( $el.hasClass("js-toggle-off") ) { return false; }
      $el.addClass("js-toggle-off");
      $checkbox.prop("checked",false);
      if ( !notrigger ) { $checkbox.trigger("change"); }
    };

    // switch on
    methods.on = function ( el, notrigger ) {
      var $el       = $(el),
          $checkbox = $($el.attr("data-toggle"));
      if ( !$el.hasClass("js-toggle-off") ) { return false; }
      $el.removeClass("js-toggle-off");
      $checkbox.prop("checked",true);
      if ( !notrigger ) { $checkbox.trigger("change"); }
    };

    // figure it out
    methods.auto = function ( el ) {
      var $target   = ( el instanceof jQuery.Event ) ? $(el.target).closest(".ui-toggle") : $(el),
          $checkbox = $($target.attr("data-toggle"));

      if ( $target.hasClass("js-toggle-off") ) {
        methods.on( $target );
      }
      else {
        methods.off( $target );
      }
    };

    // click handler
    $(selector).on("click", methods.auto);

    return {
      on        : methods.on,
      off       : methods.off,
      auto      : methods.auto,
      selector  : selector
    };
  })();


})( jQuery );
