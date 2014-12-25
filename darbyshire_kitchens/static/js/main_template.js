

// $(function () {
// 	$(".menu-button").hover( function() {
//     var idPattern = /$menu-button-[0-9]+&/
//     var menuButtonIndexPattern = /[0-9]+/
//     var id = $(this).attr("id");
//     var pattern = idPattern.exec(id);
//     var menuButtonIndex = menuButtonIndexPattern.exec(pattern);

// 		$("#dropdown-" + menuButtonIndex).show();
// 	},
// 	function() {
//     var idPattern = /$menu-button-[0-9]+&/
//     var menuButtonIndexPattern = /[0-9]+/
//     var id = $(this).attr("id");
//     var menuButtonIndex = menuButtonIndexPattern.exec(idPattern.exec(id));

//     setTimeout(function () {
//       // if (! $("#dropdown-" + menuButtonIndex).is(":hover")) {
//       //   $("#dropdown-" + menuButtonIndex).hide();
//       // }
//     }, 50);
// 	}).click( function() {
//     var idPattern = /$menu-button-[0-9]+&/
//     var menuButtonIndexPattern = /[0-9]+/
//     var id = $(this).attr("id");
//     var menuButtonIndex = menuButtonIndexPattern.exec(idPattern.exec(id));

// 		if ($("#dropdown-" + menuButtonIndex).css("display") == "none") {
// 			$("#dropdown-" + menuButtonIndex).show();
// 		} else {
// 			$("#dropdown-" + menuButtonIndex).hide();
// 		}
// 	});

//   $(".dropdown").hover( function() {},
//   function() {
//     var idPattern = new RegExp("$dropdown-[0-9]+&"); 
//     var menuDropdownIndexPattern = /[0-9]+/
//     var id = $(this).attr("id");
//     var menuDropdownIndex = menuDropdownIndexPattern.exec(idPattern.exec(id));

//     setTimeout(function () {
//       // if (! $("#menu-button-" + menuDropdownIndex).is(":hover")) {
//       //   $("#dropdown-" + menuDropdownIndex).hide();
//       // }
//     }, 50);
//   });
// });

$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});
