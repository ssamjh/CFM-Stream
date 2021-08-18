function set_stream_quality(source) {
    document.getElementById("stream-audio").pause();
    console.log('Paused player');
    document.getElementById("stream-audio").setAttribute('src', source);
    console.log('Set source to: ' + source);
    document.getElementById("stream-audio").load();
    console.log('Loading source');
    document.getElementById("stream-audio").play();
    console.log('Playing audio');
    document.getElementById('stop').style.visibility = 'visible';
    console.log('Showing stop button');
}