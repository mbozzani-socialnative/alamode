// alamode.js
//
// Visualizations for Mode reports
var version = "0.23";

var customAlamode = {

  addVideoToTables: function(o) {

    var tableId = "#" + o["table"],
        videoColumn = o["column"],
        videoHeight = o["video_height"] || 100;

    setTimeout(function() {
      drawVideo();
    },1000)

    $(tableId).keyup(function() {
      setTimeout(function() {
        drawVideo();
      },500)
    });

    $(tableId).mousemove(function() {
        drawVideo();
    })

    function drawVideo() {
      var tableDiv = $(tableId + " table"),
          tableHeader = $(tableId + " .js-header-table"),
          headers = !tableHeader ? $(tableHeader).find("th") : $(tableId + " .js-col-header"),
          rows = tableDiv.find("tr"),
          columnIndex = 0;

      headers.each(function() {
        text = $(this).find(".axel-table-header-label").text()
        if (text == imageColumn) {
          columnIndex = +$(this).attr("data-axel-column")
        }
      })

      rows.each(function() {
        var cells = $(this).find("td");

        cells.each(function(i) {
          if (i == (columnIndex - 1)) {
            var content = $(this).text();

            if ($(this).find("video").length == 0) {
              $(this).css("text-align","center")
              $(this).html("<video height='" + videoHeight + "'><source src='" + content + "'/></video>")
            }
          }
        })
      })
    }
  },

  customizeTable: function (o) {
    window.dispatchAction({
      type: 'Embed.AlamodeCustomizeTable',
      payload: o
    });
  },
}
