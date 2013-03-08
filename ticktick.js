/*
 * jquery.ticktick. jQuery coundown/countup plugin based on Moment.js
 *
 * Copyright (c) 2013 Ben Teitelbaum
 * http://ben.teitelbaum.us/
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Usage:
 * $('span.countdown').ticktick({duration: [3, 'minutes']});
 * $('span.countdown').ticktick({duration: {minutes: 3, seconds: 30}});
 * $('span.countdown').ticktick({duration: {hour: 1}, format: 'hh:mm:ss'}, onDone: function() { alert("Blast off!"); });
 * $('span.countup').ticktick({direction: 'up', duration: [3, 'minutes']}); 
 */

 (function( $ ){
   $.fn.ticktick = function( options ) {  
     var settings = $.extend( {
       'format'   : 'm:ss',
       'direction': 'down',
       'interval' : 250,
       'duration' : [1, 'minute']
     }, options);
     return this.each(function() {
       var _this = this;
       if (settings['duration'] instanceof Array) {
         var duration = orig_duration = moment['duration'].apply(this, settings['duration']);
       } else {
         var duration = orig_duration = moment.duration(settings['duration']);
       }
       var timer = setInterval(function(){
         var new_duration = duration.asMilliseconds() - settings['interval'];
         duration = moment.duration(new_duration, 'milliseconds');
         if (settings['direction'] == 'down') {
           var display_moment = moment.utc(duration.asMilliseconds());
         } else {
           var display_moment = moment.utc(moment.duration(orig_duration - duration).asMilliseconds());          
         }
         $(_this).html(display_moment.format(settings['format']));
         if (new_duration <= 0) {
           clearInterval(timer);
           if (typeof settings['onDone'] === 'function') {
             settings['onDone'].call();
           }
         }
       }, settings['interval']);
     });
   };
 })( jQuery );
 