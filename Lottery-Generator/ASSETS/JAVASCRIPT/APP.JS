JQuery(function(){
    JQuery('input[type="checkbox"]').iCheck({
        handle: 'checkbox',
        checkboxClass: 'icheckbox',
    })
    JQuery(window).on('scroll',function( {
    if(JQuery(window).scrollTop() +JQuery(height() ==JQuery(document).height()) {

    }
    });
    JQuery('agallery .item').each( function() { JQuery(this).hoverdir(); } );
    JQuery('agallery')magnificPopup({ 
        delegate: 'a',
        type: 'image',
         gallery:(
            enabled:true,
            navigateByIngClick: true 
         }
    }):
    JQuery('custom_countdown').countdown('30 seconds', function(event) {
        JQuery(this).html(event.strftime('%seconds'));
        });
});