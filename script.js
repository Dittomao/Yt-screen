 function setYouTubeVideo(videoId) {
          var container = document.getElementById('video-container');
              container.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                }

                  // Example usage:
                    var youtubeVideoId = '1wG1NiqOqPw'; // Replace with any YouTube video ID
                      setYouTubeVideo(youtubeVideoId);
                    

            