window.$ = window.jQuery = require('jquery');
window.r = window.riot = require('riot');

var bootstrap = require('bootstrap'),
    tags = require('./tags');

// <content>
r.tag('content', '', function (opts) {
  var p = this.parent.root
  while (p.firstChild) this.root.appendChild(p.firstChild)
});

r.settings.brackets = '_ _';

r.mount('*');