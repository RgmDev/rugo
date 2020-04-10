$(document).ready(function(){

  $('#main-header').text('rugo.dev');
  $('#main-header').textillate({
    loop: false,
    autoStart: true,
    type: 'char',
    in: {
      effect: 'fadeInDownBig',
      shuffle: true
    },
    callback: function(){
      $('#sub-header').text('Be code my friend...');
      $('#sub-header').textillate({
        loop: false,
        autoStart: true,
        type: 'char',
        in: {
          effect: 'rollIn',
          sequence: true
        },
        callback: function(){
          $('#lnk-linkedin').text('Linkedin');
          $('#lnk-github').text('Github');
          $('#lnk-blog').text('Blog');
          $('#lnk-about-me').text('About me');
          $('.link').textillate({
            loop: false,
            autoStart: true,
            type: 'char',
            in: {
              effect: 'flipInY',
              shuffle: true,
            },
            callback: function(){
              $('.link > span > span > span').jrumble({
                x: .05,
                y: .05,
                rotation: 1,
                speed: 500,
                opacity: true,
                opacityMin: .90 
              });
              $('.link > span > span > span').trigger('startRumble');
            }
          });
        }
      });
    }
  });

});