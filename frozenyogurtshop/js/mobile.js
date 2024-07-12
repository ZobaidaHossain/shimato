// mobile.js
window.onload = function() {
    // Get the navigation element
    var getNavi = document.getElementById('navigation');

    // Create a mobile navigation span and set its attributes
    var mobile = document.createElement("span");
    mobile.setAttribute("id", "mobile-navigation");
    getNavi.parentNode.insertBefore(mobile, getNavi);

    // Add onclick event for mobile navigation toggle
    document.getElementById('mobile-navigation').onclick = function() {
        var a = getNavi.getAttribute('style');
        if (a) {
            getNavi.removeAttribute('style');
            document.getElementById('mobile-navigation').style.backgroundImage = 'url(images/mobile/mobile-menu.png)';
        } else {
            getNavi.style.display = 'block';
            document.getElementById('mobile-navigation').style.backgroundImage = 'url(images/mobile/mobile-close.png)';
        }
    };

    // Get all LI elements within the navigation
    var getElm = getNavi.getElementsByTagName("LI");
    for (var i = 0; i < getElm.length; i++) {
        if (getElm[i].children.length > 1) {
            // Create a span for submenu toggle and set its attributes
            var smenu = document.createElement("span");
            smenu.setAttribute("class", "mobile-submenu");
            smenu.setAttribute("onclick", "submenu(" + i + ")");
            getElm[i].appendChild(smenu);
        }
    }

    // Define the submenu function
    submenu = function(i) {
        var sub = getElm[i].children[1];
        var b = sub.getAttribute('style');
        if (b) {
            sub.removeAttribute('style');
            getElm[i].lastChild.style.backgroundImage = 'url(images/mobile/mobile-expand.png)';
            getElm[i].lastChild.style.backgroundColor = 'rgba(121, 101, 102, 0.91)';
        } else {
            sub.style.display = 'block';
            getElm[i].lastChild.style.backgroundImage = 'url(images/mobile/mobile-collapse.png)';
            getElm[i].lastChild.style.backgroundColor = 'rgba(204, 60, 104, 0.91)';
        }
    };
};
