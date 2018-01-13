var currentLang;

var applyLanguage = function (lang) {
	//alert('now language is: ' + lang);
	
	var allLangClassNames = [
		'lang-ua', 
		'lang-ru',
		'lang-eng'
	];
	
	var selectedClassName = 'lang-' + lang;
	
	for (var i=0; i<allLangClassNames.length; i++) {
		var curClassName = allLangClassNames[i];
		
		var langEls = document.getElementsByClassName(curClassName);
		
		for (var j=0; j<langEls.length; j++) {
			var langEl = langEls[j];

		  if (selectedClassName == curClassName) {
		  	langEl.classList.add('visible');
		  } else {
			  langEl.classList.remove('visible');
		  }
		}
	}
	currentLang = lang;
}

var selectRadio = function(lang) {
	var radio;
	radio = document.querySelector('html body div label input.lang-' + lang);
	radio.checked = true;
}

var setCookie = function (name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

var getCookie = function (name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

var getCurrentLanguage = function () {
	var defaultLanguage = 'ua';
	
  var langFromCookie = getCookie('lang');
  if (langFromCookie != null) {
	  return langFromCookie;
  }
  
  return defaultLanguage;
}

currentLang = getCurrentLanguage();
applyLanguage(currentLang);

selectRadio(currentLang);

// $<prefix> == DOMElement
var $save = document.querySelector('html body button#save')

$save.addEventListener('click', function(){
	setCookie('lang', currentLang, 7);
});