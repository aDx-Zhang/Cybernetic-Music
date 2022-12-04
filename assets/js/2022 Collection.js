

function pageRedirect() {
    window.location.href = "./Musicverse Main Page.html";
  }     











$(function () {
$(".menu-link").click(function () {
$(".menu-link").removeClass("is-active");
$(this).addClass("is-active");
});
});

$(function () {
$(".main-header-link").click(function () {
$(".main-header-link").removeClass("is-active");
$(this).addClass("is-active");
});
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
dropdown.addEventListener("click", (e) => {
e.stopPropagation();
dropdowns.forEach((c) => c.classList.remove("is-active"));
dropdown.classList.add("is-active");
});
});

$(".form1")
.focus(function () {
$(".header").addClass("wide");
})
.blur(function () {
$(".header").removeClass("wide");
});

$(document).click(function (e) {
var container = $(".status-button");
var dd = $(".dropdown");
if (!container.is(e.target) && container.has(e.target).length === 0) {
dd.removeClass("is-active");
}
});

$(function () {
$(".dropdown").on("click", function (e) {
$(".content-wrapper").addClass("overlay");
e.stopPropagation();
});
$(document).on("click", function (e) {
if ($(e.target).is(".dropdown") === false) {
 $(".content-wrapper").removeClass("overlay");
}
});
});

$(function () {
$(".status-button:not(.open)").on("click", function (e) {
$(".overlay-app").addClass("is-active");
});
$(".pop-up .close").click(function () {
$(".overlay-app").removeClass("is-active");
});
});

$(".status-button:not(.open)").click(function () {
$(".pop-up").addClass("visible");
});

$(".pop-up .close").click(function () {
$(".pop-up").removeClass("visible");
});

const toggleButton = document.querySelector('.dark-light');

toggleButton.addEventListener('click', () => {
document.body.classList.toggle('light-mode');
});















jQuery(function ($) {
  "use strict";
  var supportsAudio = !!document.createElement("audio").canPlayType;
  if (supportsAudio) {
      // initialize plyr
      var player = new Plyr("#audio1", {
          controls: [
              "restart",
              "play",
              "progress",
              "current-time",
              "duration",
              "mute",
              "volume",
              "download"
          ]
      });
      // initialize playlist and controls
      var index = 0,
          playing = false,
          mediaPath = "https://archive.org/download/mythium/",
          extension = "",
          tracks = [
              {
                  track: 1,
                  name: "All This Is - Joe L.'s Studio",
                  duration: "2:46",
                  file: "JLS_ATI"
              },
              {
                  track: 2,
                  name: "The Forsaken - Broadwing Studio (Final Mix)",
                  duration: "8:30",
                  file: "BS_TF"
              },
              {
                  track: 3,
                  name: "All The King's Men - Broadwing Studio (Final Mix)",
                  duration: "5:01",
                  file: "BS_ATKM"
              },
              {
                  track: 4,
                  name: "The Forsaken - Broadwing Studio (First Mix)",
                  duration: "8:31",
                  file: "BSFM_TF"
              },
              {
                  track: 5,
                  name: "All The King's Men - Broadwing Studio (First Mix)",
                  duration: "5:05",
                  file: "BSFM_ATKM"
              },
              {
                  track: 6,
                  name: "All This Is - Alternate Cuts",
                  duration: "2:48",
                  file: "AC_ATI"
              },
              {
                  track: 7,
                  name: "All The King's Men (Take 1) - Alternate Cuts",
                  duration: "5:44",
                  file: "AC_ATKMTake_1"
              },
              {
                  track: 8,
                  name: "All The King's Men (Take 2) - Alternate Cuts",
                  duration: "5:26",
                  file: "AC_ATKMTake_2"
              },
              {
                  track: 9,
                  name: "Magus - Alternate Cuts",
                  duration: "5:46",
                  file: "AC_M"
              },
              {
                  track: 10,
                  name:
                      "The State Of Wearing Address (fucked up) - Alternate Cuts",
                  duration: "5:25",
                  file: "AC_TSOWAfucked_up"
              },
              {
                  track: 11,
                  name: "Magus - Popeye's (New Years '04 - '05)",
                  duration: "5:53",
                  file: "PNY04-05_M"
              },
              {
                  track: 12,
                  name: "On The Waterfront - Popeye's (New Years '04 - '05)",
                  duration: "4:40",
                  file: "PNY04-05_OTW"
              },
              {
                  track: 13,
                  name: "Trance - Popeye's (New Years '04 - '05)",
                  duration: "13:15",
                  file: "PNY04-05_T"
              },
              {
                  track: 14,
                  name: "The Forsaken - Popeye's (New Years '04 - '05)",
                  duration: "8:12",
                  file: "PNY04-05_TF"
              },
              {
                  track: 15,
                  name:
                      "The State Of Wearing Address - Popeye's (New Years '04 - '05)",
                  duration: "7:02",
                  file: "PNY04-05_TSOWA"
              },

              {
                track: 16,
                name: "All This Is - Joe L.'s Studio",
                duration: "2:46",
                file: "JLS_ATI"
            },
            {
                track: 17,
                name: "The Forsaken - Broadwing Studio (Final Mix)",
                duration: "8:30",
                file: "BS_TF"
            },
            {
                track: 18,
                name: "All The King's Men - Broadwing Studio (Final Mix)",
                duration: "5:01",
                file: "BS_ATKM"
            },
            {
                track: 19,
                name: "The Forsaken - Broadwing Studio (First Mix)",
                duration: "8:31",
                file: "BSFM_TF"
            },
            {
                track: 20,
                name: "All The King's Men - Broadwing Studio (First Mix)",
                duration: "5:05",
                file: "BSFM_ATKM"
            },
            {
                track: 21,
                name: "All This Is - Alternate Cuts",
                duration: "2:48",
                file: "AC_ATI"
            },
            {
                track: 22,
                name: "All The King's Men (Take 1) - Alternate Cuts",
                duration: "5:44",
                file: "AC_ATKMTake_1"
            },
            {
                track: 23,
                name: "All The King's Men (Take 2) - Alternate Cuts",
                duration: "5:26",
                file: "AC_ATKMTake_2"
            },
            {
                track: 24,
                name: "Magus - Alternate Cuts",
                duration: "5:46",
                file: "AC_M"
            },
            {
                track: 25,
                name:
                    "The State Of Wearing Address (fucked up) - Alternate Cuts",
                duration: "5:25",
                file: "AC_TSOWAfucked_up"
            },
            {
                track: 26,
                name: "Magus - Popeye's (New Years '04 - '05)",
                duration: "5:53",
                file: "PNY04-05_M"
            },
            {
                track: 27,
                name: "On The Waterfront - Popeye's (New Years '04 - '05)",
                duration: "4:40",
                file: "PNY04-05_OTW"
            },
            {
                track: 28,
                name: "Trance - Popeye's (New Years '04 - '05)",
                duration: "13:15",
                file: "PNY04-05_T"
            },
            {
                track: 29,
                name: "The Forsaken - Popeye's (New Years '04 - '05)",
                duration: "8:12",
                file: "PNY04-05_TF"
            },
            {
                track: 30,
                name:
                    "The State Of Wearing Address - Popeye's (New Years '04 - '05)",
                duration: "7:02",
                file: "PNY04-05_TSOWA"
            },
            {
                track: 31,
                name: "All This Is - Joe L.'s Studio",
                duration: "2:46",
                file: "JLS_ATI"
            },
            {
                track: 32,
                name: "The Forsaken - Broadwing Studio (Final Mix)",
                duration: "8:30",
                file: "BS_TF"
            },
            {
                track: 33,
                name: "All The King's Men - Broadwing Studio (Final Mix)",
                duration: "5:01",
                file: "BS_ATKM"
            },
            {
                track: 34,
                name: "The Forsaken - Broadwing Studio (First Mix)",
                duration: "8:31",
                file: "BSFM_TF"
            },
            {
                track: 35,
                name: "All The King's Men - Broadwing Studio (First Mix)",
                duration: "5:05",
                file: "BSFM_ATKM"
            },
            {
                track: 36,
                name: "All This Is - Alternate Cuts",
                duration: "2:48",
                file: "AC_ATI"
            },
            {
                track: 37,
                name: "All The King's Men (Take 1) - Alternate Cuts",
                duration: "5:44",
                file: "AC_ATKMTake_1"
            },
            {
                track: 38,
                name: "All The King's Men (Take 2) - Alternate Cuts",
                duration: "5:26",
                file: "AC_ATKMTake_2"
            },
            {
                track: 39,
                name: "Magus - Alternate Cuts",
                duration: "5:46",
                file: "AC_M"
            },
            {
                track: 40,
                name:
                    "The State Of Wearing Address (fucked up) - Alternate Cuts",
                duration: "5:25",
                file: "AC_TSOWAfucked_up"
            },
            {
                track: 41,
                name: "Magus - Popeye's (New Years '04 - '05)",
                duration: "5:53",
                file: "PNY04-05_M"
            },
            {
                track: 42,
                name: "On The Waterfront - Popeye's (New Years '04 - '05)",
                duration: "4:40",
                file: "PNY04-05_OTW"
            },
            {
                track: 43,
                name: "Trance - Popeye's (New Years '04 - '05)",
                duration: "13:15",
                file: "PNY04-05_T"
            },
            {
                track: 44,
                name: "The Forsaken - Popeye's (New Years '04 - '05)",
                duration: "8:12",
                file: "PNY04-05_TF"
            },
            {
                track: 45,
                name:
                    "The State Of Wearing Address - Popeye's (New Years '04 - '05)",
                duration: "7:02",
                file: "PNY04-05_TSOWA"
            },

            {
                track: 46,
                name: "All This Is - Joe L.'s Studio",
                duration: "2:46",
                file: "JLS_ATI"
            },
            {
                track: 47,
                name: "The Forsaken - Broadwing Studio (Final Mix)",
                duration: "8:30",
                file: "BS_TF"
            },
            {
                track: 48,
                name: "All The King's Men - Broadwing Studio (Final Mix)",
                duration: "5:01",
                file: "BS_ATKM"
            },
            {
                track: 49,
                name: "The Forsaken - Broadwing Studio (First Mix)",
                duration: "8:31",
                file: "BSFM_TF"
            },
            {
                track: 50,
                name: "All The King's Men - Broadwing Studio (First Mix)",
                duration: "5:05",
                file: "BSFM_ATKM"
            },
            {
                track: 51,
                name: "All This Is - Alternate Cuts",
                duration: "2:48",
                file: "AC_ATI"
            },
            {
                track: 52,
                name: "All The King's Men (Take 1) - Alternate Cuts",
                duration: "5:44",
                file: "AC_ATKMTake_1"
            },
            {
                track: 53,
                name: "All The King's Men (Take 2) - Alternate Cuts",
                duration: "5:26",
                file: "AC_ATKMTake_2"
            },
            {
                track: 54,
                name: "Magus - Alternate Cuts",
                duration: "5:46",
                file: "AC_M"
            },
            {
                track: 55,
                name:
                    "The State Of Wearing Address (fucked up) - Alternate Cuts",
                duration: "5:25",
                file: "AC_TSOWAfucked_up"
            },
            {
                track: 56,
                name: "Magus - Popeye's (New Years '04 - '05)",
                duration: "5:53",
                file: "PNY04-05_M"
            },
            {
                track: 57,
                name: "On The Waterfront - Popeye's (New Years '04 - '05)",
                duration: "4:40",
                file: "PNY04-05_OTW"
            },
            {
                track: 58,
                name: "Trance - Popeye's (New Years '04 - '05)",
                duration: "13:15",
                file: "PNY04-05_T"
            },
            {
                track: 59,
                name: "The Forsaken - Popeye's (New Years '04 - '05)",
                duration: "8:12",
                file: "PNY04-05_TF"
            },
            {
                track: 60,
                name:
                    "The State Of Wearing Address - Popeye's (New Years '04 - '05)",
                duration: "7:02",
                file: "PNY04-05_TSOWA"
            }

          ],
          buildPlaylist = $.each(tracks, function (key, value) {
              var trackNumber = value.track,
                  trackName = value.name,
                  trackDuration = value.duration;
              if (trackNumber.toString().length === 1) {
                  trackNumber = "0" + trackNumber;
              }
              $("#plList").append(
                  '<li> \
                  <div class="plItem"> \
                      <span class="plNum">' +
                      trackNumber +
                      '.</span> \
                      <span class="plTitle">' +
                      trackName +
                      '</span> \
                      <span class="plLength">' +
                      trackDuration +
                      "</span> \
                  </div> \
              </li>"
              );
          }),
          trackCount = tracks.length,
          npAction = $("#npAction"),
          npTitle = $("#npTitle"),
          audio = $("#audio1")
              .on("play", function () {
                  playing = true;
                  npAction.text("Now Playing...");
              })
              .on("pause", function () {
                  playing = false;
                  npAction.text("Paused...");
              })
              .on("ended", function () {
                  npAction.text("Paused...");
                  if (index + 1 < trackCount) {
                      index++;
                      loadTrack(index);
                      audio.play();
                  } else {
                      audio.pause();
                      index = 0;
                      loadTrack(index);
                  }
              })
              .get(0),
          btnPrev = $("#btnPrev").on("click", function () {
              if (index - 1 > -1) {
                  index--;
                  loadTrack(index);
                  if (playing) {
                      audio.play();
                  }
              } else {
                  audio.pause();
                  index = 0;
                  loadTrack(index);
              }
          }),
          btnNext = $("#btnNext").on("click", function () {
              if (index + 1 < trackCount) {
                  index++;
                  loadTrack(index);
                  if (playing) {
                      audio.play();
                  }
              } else {
                  audio.pause();
                  index = 0;
                  loadTrack(index);
              }
          }),
          li = $("#plList li").on("click", function () {
              var id = parseInt($(this).index());
              if (id !== index) {
                  playTrack(id);
              }
          }),
          loadTrack = function (id) {
              $(".plSel").removeClass("plSel");
              $("#plList li:eq(" + id + ")").addClass("plSel");
              npTitle.text(tracks[id].name);
              index = id;
              audio.src = mediaPath + tracks[id].file + extension;
              updateDownload(id, audio.src);
          },
          updateDownload = function (id, source) {
              player.on("loadedmetadata", function () {
                  $('a[data-plyr="download"]').attr("href", source);
              });
          },
          playTrack = function (id) {
              loadTrack(id);
              audio.play();
          };
      extension = audio.canPlayType("audio/mpeg")
          ? ".mp3"
          : audio.canPlayType("audio/ogg")
          ? ".ogg"
          : "";
      loadTrack(index);
  } else {
      // no audio support
      $(".column").addClass("hidden");
      var noSupport = $("#audio1").text();
      $(".music-container").append('<p class="no-support">' + noSupport + "</p>");
  }
});





document.addEventListener('play', function(e){
  var audios = document.getElementsByClassName('aud');
  for(var i = 0, len = audios.length; i < len;i++){
      if(audios[i] != e.target){
          audios[i].pause();
      }
  }
}, true);

