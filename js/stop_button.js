function stop_button() {
    document.getElementById('stream-audio').pause();
    console.log('Stopping audio');
    document.getElementById('stop').style.visibility = 'hidden';
    console.log('Hiding stop button');
}