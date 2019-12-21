$(document).ready(function(){

  $.ajax({
         type: "GET",
         url: "dispo.txt",
         error:function(msg){
                  // message en cas d'erreur :
                  alert( "Error !: " + msg );
                  },
         success:function(data){
                  // affiche le contenu du fichier dans le conteneur dédié :
                    var dispo = text(data);
                    console.log(dispo);
                  }
         });

  $('td').each(function(){
    $(this).toggleClass(localStorage.getItem($(this).attr('name')));
  });

  $('.checked').append('<img src="./css/checked.png"/>');
  $('.cancel').append('<img src="./css/cancel.png"/>');

  $('td').on('click',function(){
    $(this).addClass('this');

    $('#modalconfirm').css('display','block');
    $('body').css('overflow','hidden');
    $('#formconfirm').css('display','block');
    $('.this img').remove();
    $('.this').attr('class', 'this');


    $('#btnOui').on('click',function(){
      $('.this').toggleClass('checked');
      $('#modalconfirm').css('display','none');
      $('#formconfirm').css('display','none');
      $('body').css('overflow','scroll');
      $('.this').append('<img src="./css/checked.png"/>');
      $('.this').removeClass('this');
      stockIt();

    });
    $('#btnNon').on('click',function(){
      $('.this').toggleClass('cancel');
      $('#modalconfirm').css('display','none');
      $('#formconfirm').css('display','none');
      $('body').css('overflow','scroll');
      $('.this').append('<img src="./css/cancel.png"/>');
      $('.this').removeClass('this');
      stockIt();
    });
    $('#exit').on('click',function(){
      $('.this').toggleClass('');
      $('#modalconfirm').css('display','none');
      $('#formconfirm').css('display','none');
      $('body').css('overflow','scroll');
      $('.this').removeClass('this');
      stockIt();
  });
  });

  function stockIt () {
    $('td').each(function(){
    });
  }


});
