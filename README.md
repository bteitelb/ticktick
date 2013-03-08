jquery.ticktick
===============

jQuery plugin for countdown (or countup) timers based on Moment.js

Dependencies
------------

Depends on [jQuery](http://jquery.com/) and [Moment.js](http://momentjs.com/).

Usage
-----

Count down from 3 minutes using default time format 'm:ss'.

```javascript
$('span.countdown').ticktick({duration: [3, 'minutes']});
```

Count down from three and a half minutes.  Note the use of the object-based duration specification from Moment.js.

```javascript
$('span.countdown').ticktick({duration: {minutes: 3, seconds: 30}});
```

Count down from 3 minutes using a custom time format.  Any format that works in Moment.js, works in jquery.ticktick.

```javascript
$('span.countdown').ticktick({format: 'm [minutes] ss [seconds]', duration: [3, 'minutes']});
```

You can even use HTML in your formats (and, of course, you can style them arbitrarily with CSS).

```javascript
$('span.countdown').ticktick({format: 'h:[<strong>]mm[</strong>]:ss', duration: [3, 'minutes']});
```

Count down from an hour, specifying an alternate format and a callback on completion.
```javascript
$('span.countdown').ticktick({duration: {hour: 1}, format: 'hh:mm:ss'}, onDone: function() { alert("Blast off!"); });
```

Count up, rather than down.
```javascript
$('span.countup').ticktick({direction: 'up', duration: [3, 'minutes']}); 
```
