  // 1. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api"
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 2. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '700',
      width: '100%',
      videoId: '3Lf3bbYcNd4',
      playerVars: {
        'playlist': '3Lf3bbYcNd4',
        'autoplay': 1,
        'controls': 0,
        'showinfo': 0,
        'loop': 1,
        'start': 3,
        'end': 93,
        'mute': 1,      
      },
      events: {
        'onReady': onPlayerReady,

      }
    });
  }

  // 3. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }



 







