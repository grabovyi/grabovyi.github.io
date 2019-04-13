

function send_email(){
  //console.log("Im here!!");
  let mail = "volodymyr.hrabovyy@gmail.com";
  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;
  var sMailTo = "mailto:";
  sMailTo += mail;
  let subject = "?subject=Message from "+name;
  let sMessage = "&body="+message;
  sMailTo +=subject
  sMailTo +=sMessage;
  //sMailTo += window.location;
  //console.log(sMailTo);
  //debugger;
  //alert(sMailTo);
  window.location = sMailTo;
  //$('<a href="' + sMailTo + '">click</a>').appendTo('body').click().remove();

  // mailto:?subject=look at this website&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/
}


  $(function() {
				
    var foo = $('.gallery');
    foo.poptrox({
        usePopupCaption: false,
        usePopupCloser: true,
        usePopupNav: false,
        popupCloserText:				'&#215;',					// Popup closer text
        popupCloserBackgroundColor:		'#000000',					// (Default Style) Popup closer background color (when usePopupStyling = true)
        popupCloserTextColor:			'#FFFFFF',					// (Default Style) Popup closer text color (when usePopupStyling = true)
        popupCloserTextSize:			'20px',						// (Default Style) Popup closer text size
    });

    



});