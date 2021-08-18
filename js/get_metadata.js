function trackid() {
    $.get('//cfm-stream.sjh.at/cfmmetadata/playingnow.txt?rand=' + Math.random(), function(data) {
        $(".track-title").text(data);
        console.log('Refreshing metadata');
    });
}
trackid()
setInterval(trackid, 2000);