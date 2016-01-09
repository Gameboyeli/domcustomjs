var fonts = {};

var drtp = Object
  .create(HTMLElement.prototype);
var drtp2 = Object
  .create(HTMLElement.prototype);
var drtp3 = Object
  .create(HTMLElement.prototype);
var drtp4 = Object
  .create(HTMLElement.prototype);
var drtp5 = Object
  .create(HTMLElement.prototype);
var drtp6 = Object
  .create(HTMLElement.prototype);
var drtp7 = Object
  .create(HTMLElement.prototype);
var drtp8 = Object
  .create(HTMLElement.prototype);
var drtp9 = Object
  .create(HTMLElement.prototype);
var drtp10 = Object
  .create(HTMLElement.prototype);
var drtp11 = Object
  .create(HTMLElement.prototype);

drtp.createdCallback = function() {
  var shadow = this.createShadowRoot();
  var split = (this.innerHTML)
    .split("::");
  var rc = Number(eval(split[0]));

  shadow.innerHTML =
    (split[1]).repeat(rc);
};
drtp2.createdCallback = function() {
  var shadow = this.createShadowRoot();
  var split = (this.innerHTML)
    .split("::");
  var ucase, lcase, result;

  ucase = (split[0] == "U") ? true : false
  lcase = (split[0] == "l") ? true : false

  result = (!lcase && ucase) ? (this.innerHTML)
    .toUpperCase() : (!lcase) ? "NO CASE" : (this.innerHTML)
    .toLowerCase();
  shadow.innerHTML = result;

  result = (lcase && !ucase) ? (this.innerHTML)
    .toLowerCase() : (!ucase) ? "NO CASE" : (this.innerHTML)
    .toUpperCase()
  shadow.innerHTML = result;
};
drtp3.createdCallback = function() {
  var shadow = this.createShadowRoot();
  var split = (this.innerHTML)
    .split("::");

  var name = split[0];
  var cdfont = split[1];

  fonts[name] = cdfont;
}
drtp4.createdCallback = function() {
  var shadow = this.createShadowRoot();
  var split = (this.innerHTML)
    .split("::");

  var cfont = split[0];
  this
    .style["font-family"] = fonts[cfont];
  shadow.innerHTML = split[1];
}

drtp5.createdCallback = function() {
  var shadow = this.createShadowRoot();
  shadow.innerHTML = this.innerHTML;

  this
    .style.border = "1px solid black";
  this
    .style.background =
    this
    .style.color = "black";

  this.addEventListener("mouseenter",
    function() {
      this
        .style.color = "white"
    }
  );
  this.addEventListener("mouseleave",
    function() {
      this
        .style.color = "black"
    }
  );
}

drtp6.createdCallback = function() {
  var shadow = this.createShadowRoot();
  var isChrome = window.chrome;

  if (isChrome) {
    shadow.innerHTML = this.innerHTML;
  } else {
    shadow.innerHTML =
      "Your not a chrome user!";
  }
}

drtp7.createdCallback = function() {
  var shadow = this.createShadowRoot();
  var isFirefox =
    typeof(InstallTrigger) !== 'undefined';

  if (isFirefox) {
    shadow.innerHTML = this.innerHTML;
  } else {
    shadow.innerHTML =
      "Your not a mozilla user!";
  }
}

drtp8.createdCallback = function() {
  var shadow = this.createShadowRoot();
  var split = (this.innerHTML)
    .split("::");

  var result = "";

  for (var i = 0; i < split.length; i++) {
    var ssa = split[i].split("??")

    result += ("<details>" +
      "<summary>" + ssa[0] +
      "</summary>" + ssa[1]);
  }

  result += ("</details>")
    .repeat(split.length);

  shadow.innerHTML = result;
}

drtp9.createdCallback = function() {
  var shadow = this.createShadowRoot();
  var query = document
    .querySelector(this.innerHTML)

  shadow.innerHTML = query
    .value

  if (query.tagName == "TEXTAREA" ||
    query.tagName == "INPUT") {
    query.addEventListener(
      "keyup",
      function() {
        shadow.innerHTML = query
          .value
      });
  }
}

drtp10.createdCallback = function() {
  var shadow = this.createShadowRoot();	
  shadow.innerHTML = (this.innerHTML)
    .split('')
    .reverse()
    .join('')
}

drtp11.createdCallback = function() {
  var shadow = this.createShadowRoot();
  var lines = (this.innerHTML)
    .split(";");

  for (var i = 0; i < lines.length; i++) {
    var cmds = (lines[i])
      .split(/\s+/)
    for (var ii = 0; ii < cmds.length; ii++) {
      if (cmds[i] == "add") {
        switch (cmds[i + 1]) {
          case "Element":
            var element = document
              .createElement(cmds[i + 2]);
            if (cmde[i + 3] &&
              cmde[i + 3] == "to") {
              document
                .querySelector(cmde[i + 4])
                .appendChild(element)
            } else {
              document
                .body
                .appendChild(element)
            }
            break;
          case "Attribute":
            var attrn = cmds[i + 2];
            var attrv = cmds[i + 3];
            if (cmde[i + 3] &&
              cmde[i + 3] == "to") {
              document
                .querySelector(cmde[i + 4])
                .setAttribute(attrn, attrv)
            }
            break;
        }
      } else if (cmds[i] == "change") {
        switch (cmds[i + 1]) {
          case "HTML":
            if (cmds[i+2] &&
                cmds[i+2] == "at") {
              var element = document
              .querySelector(cmds[i+3])
              
              if (cmds[i+4] &&
                  cmds[i+4] == "to") {
                var ntxt = cmds[i+5];                   element
                  .innerHTML = ntxt; 
              }
            }
            break;
        }
      } else if (cmds[i] == "remove") {
        switch (cmds[i + 1]) {
          case "Element":
            var element = document
              .querySelector(cmds[i + 2]);
            if (cmde[i + 4] &&
              cmde[i + 4] == "from") {
              document
                .querySelector(cmde[i + 5])
                .removeChild(element)
            } else {
              document
                .body
                .removeChild(element)
            }
            break;
          case "Attribute":
            var attrn = cmds[i + 2];
            if (cmde[i + 3] &&
              cmde[i + 3] == "from") {
              document
                .querySelector(cmde[i + 4])
                .setAttribute(attrn, nil)
            }
            break;
        }
      }
    }
  }
}

var drt = document.registerElement(
  'dom-rep', {
    prototype: drtp
  }
);

var drt2 = document.registerElement(
  'dom-case', {
    prototype: drtp2
  }
);

var drt3 = document.registerElement(
  'dom-dcfont', {
    prototype: drtp3
  }
);

var drt4 = document.registerElement(
  'dom-ucfont', {
    prototype: drtp4
  }
);

var drt5 = document.registerElement(
  'dom-spoiler', {
    prototype: drtp5
  }
);

var drt6 = document.registerElement(
  'dom-chrome-only', {
    prototype: drtp6
  }
);

var drt7 = document.registerElement(
  'dom-firefox-only', {
    prototype: drtp7
  }
);

var drt8 = document.registerElement(
  'dom-choices', {
    prototype: drtp8
  }
);

var drt9 = document.registerElement(
  'dom-query', {
    prototype: drtp9
  }
);

var drt10 = document.registerElement(
  'dom-reverse', {
    prototype: drtp10
  }
);

var drt11 = document.registerElement(
  'dom-script', {
    prototype: drtp11
  }
);
var ct1p = Object
  .create(HTMLElement.prototype);

ct1p.createdCallback = function() {
  var shadow = this.createShadowRoot();
  var split = (this.innerHTML)
    .split("::");
  var etype = split[0];
  var tags = (split[1]).split("..");
  
  for (var i=0; 
           i<tags.length;
           i++) {
       tags[i] = "<"+etype+">"+
          tags[i]+
        "</"+etype+">"  
      }
  
  var result = (tags.join())
    .replace(/,/g, " ");
  
  shadow.innerHTML = result;
};

var ct1 = document
  .registerElement("dom-grouptag", {
    prototype: ct1p
  });
  
  
var e1PT = Object
  .create(HTMLElement
    .prototype)

e1PT.createdCallback = function () {
  Notification.requestPermission();
  
  var shadow = this.createShadowRoot();
  var split = (this.innerHTML)
    .split(/;/g)
  
  var notification = new Notification(
    split[0], {
        dir: "auto",
        lang: "",
        body: split[1],
        tag: "auto",
        icon: split[2]
    });
}

var e1e = document.registerElement(
  "api-notification", {
    prototype: e1PT
  }
);
