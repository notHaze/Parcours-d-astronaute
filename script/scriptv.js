$('#audio-control').click(function(){
    if( $("#myVideo").prop('muted') ) {
          $("#myVideo").prop('muted', false);
          document.getElementById("audio-control").src= "./img/unmute.svg";
      // or toggle class, style it with a volume icon sprite, change background-position
    } else {
      $("#myVideo").prop('muted', true);
      document.getElementById("audio-control").src= "./img/mute.svg";
    }
});