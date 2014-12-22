var extracted = $('#color-color-palette > div > div > div:nth-child(3) > section > div > .color-group').map( function(i,e) {
    var name = $(e).find('.name').text();
    var values = $(e).find('li').map( function(i, e) {
        if(i == 0) {
          var n = 'material_' + name;
        } else {
          var n = 'material_' + name + '_' + $(e).find('span.shade').text()
        }
        return [[n.toLowerCase().replace(/ /g, '_'), $(e).find('span.hex').text()]];
      }
    )

    return values
  }
);

var $res = $('<resources/>');
$.each(extracted, function(i, v) {
    $.each(v, function(i, vv) {
        $res.append($('<color/>').attr('name', vv[0]).text(vv[1]));
    })
})

console.log($res.html())
