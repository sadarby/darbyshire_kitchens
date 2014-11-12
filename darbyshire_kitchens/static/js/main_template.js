

$(function () {
	$('.input-popup').popover({trigger:"manual", placement: "top"});
	$('#loginEmail').popover();

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('.input-popup').focus(function() {
			$(this).popover("show");
		});

		$('.input-popup').blur(function() {
			$(this).popover("hide");
		});
	}
	else {
		$('.input-popup').mouseover(function() {
			$(this).popover("show");
		});

		$('.input-popup').mouseleave(function() {
			$(this).popover("hide");
		});
	}

	var messageNumber = $.getUrlVar('messageNum'); // Retrieve the message num

	if (messageNumber == 1) {
		$('#userMessageLabel').html('Registration Successful!');
		$('#userMessageBody').html('You have been registered! Once Version 1 is completed, you will receive an email allowing you to set your password and login!');
		$('#userMessage').modal();
		$('#userMessage').modal('show');
	}
	else if (messageNumber == 2) {
		$('#userMessageLabel').html('Registration Failed');
		$('#userMessageBody').html('Administrators have been informed of this error. Please try again at another time.');
		$('#userMessage').modal();
		$('#userMessage').modal('show');
	}


	$('#emailUsLink').click(function(event){
		event.preventDefault();
		$('#userMessageLabel').html('Email Us');
		$('#userMessageBody').html('Please contact us at contactus@mysocialinvite.com');
		$('#userMessage').modal();
		$('#userMessage').modal('show');
	});
});

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
