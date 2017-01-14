var slogans = [
    "Some warnings are okay",
    "Passing 9 out of 10 test cases rounds up to 10 out of 10",
    ":D",
    "Rank one team of CSE 110",
    "<slogan text>",
    "Loading...",
    "Serious business"
]

$(document).ready(function() {
    $("#slogan").text(slogans[Math.floor(Math.random() * slogans.length)])
})