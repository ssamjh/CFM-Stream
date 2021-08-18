document.querySelector("#vol-control").addEventListener("input", function(e) {
    document.querySelector(".vol-percentage").textContent = e.currentTarget.value;
    console.log('Volume changed: ' + e.currentTarget.value + '%');
})

function set_volume(val) {
    var player = document.getElementById('stream-audio');
    player.volume = val / 100;
}