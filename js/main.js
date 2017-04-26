! function() {
    function e(e) {
        var t = e.val(),
            a = t.totalNumberOfMeetings,
            o = t.totalDuration;
        o = parseInt(o), "function" == typeof o.toLocaleString && (o = o.toLocaleString()), a = parseInt(a), "function" == typeof a.toLocaleString && (a = a.toLocaleString()), document.querySelector(".js-totalduration").innerHTML = o, document.querySelector(".js-totalmeetings").innerHTML = a, document.querySelector(".js-totalratio-female").innerHTML = t.totalRatioFemale, document.querySelector(".js-totalratio-male").innerHTML = t.totalRatioMale, document.querySelector(".js-data").setAttribute("data-visible", "")
    }
    var t = {
        apiKey: "AIzaSyCT1HsODITD6j2RmT991Edmj9kZpwgJcKs",
        authDomain: "gendereq-5f5a3.firebaseapp.com",
        databaseURL: "https://gendereq-5f5a3.firebaseio.com",
        storageBucket: "gendereq-5f5a3.appspot.com",
        messagingSenderId: "158975802109"
    };
    firebase.initializeApp(t).database().ref("statistics").on("value", e);
    var a = document.querySelectorAll(".grid__paragraph--hide-small"),
        o = document.querySelector(".js-read-more");
    o && o.addEventListener("click", function() {
        o.parentNode.parentNode.removeChild(o.parentNode), Array.prototype.forEach.call(a, function(e) {
            e.classList.remove("grid__paragraph--hide-small")
        })
    })
}();
