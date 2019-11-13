
    $('.redman-gallery').css('margin','auto');
    var aantalGalleries = Number($('.redman-gallery').length);

    for($a=0 ; $a<=aantalGalleries-1 ; $a++){
      
    //getting global variables

      var $aantalImg = Number($($('.redman-gallery')[$a]).attr('data-redman-totalCount')); 
      var $aantalImgPerPage = Number($($('.redman-gallery')[$a]).attr('data-redman-countPerPage'));
      var $aantalImgPerRow = Number($($('.redman-gallery')[$a]).attr('data-redman-countPerRow'));
      var $aantalPages = Math.ceil($aantalImg/$aantalImgPerPage);
      //adding class and id to images to work with
      for ($i=0 ; $i<=$aantalImg-1 ; $i++){
        $($($('.redman-gallery')[$a]).children()[$i]).addClass('redman-myImg redman-myImg-hidden'); 
      }
      //putting everything in rows and columns, more structured
      var row = document.createElement('div');
      $(row).attr('class','row no-gutters');
      $(row).attr('id','redman-pageheight'+$a);
      var imagesCol = document.createElement('div');
      imagesCol.setAttribute('class','col-12 ');
      var imagesRow =  document.createElement('div');
      imagesRow.setAttribute('class','row redman-row'+$a+' m-auto');
      imagesRow.setAttribute('style','width:100%');
      var lastPageIndex = $aantalImgPerPage-(($aantalPages*$aantalImgPerPage)-$aantalImg);
      lastPageIndex = ($aantalImgPerPage*($aantalPages-1))+(lastPageIndex-1);
      var teller1 = 0;
      var $aantalImgPerRow2 = $aantalImgPerRow;
        for ($i=0 ; $i<=$aantalImg-1 ; $i+=$aantalImgPerRow2){
          teller1 = getTeller1(teller1,$aantalImgPerRow,$aantalImgPerPage);
          var teller = $aantalImgPerPage;
          var column = document.createElement('div');
          $(column).attr('class','col-12 d-flex flex-column flex-md-row redman-col');
          var image = Array();
         
          $aantalImgPerRow2 = getAantalImgPerPage($aantalImg,$aantalImgPerPage,lastPageIndex,$i,$aantalImgPerRow,teller1); 
          for ($j = $i ; $j<=$i+$aantalImgPerRow2-1 ; $j++){
            teller = teller-1;
            if(teller ==  -1){
              //do nothing
            }
            else{
            image[$j] = $($('.redman-gallery')[$a]).children()[$j];
            var src = $(image[$j]).attr('src');
            if (src != undefined){
            var realImage = document.createElement('img');
            realImage.setAttribute('style','position:absolute;width:100%;height:100%;top:0;left:0');
            realImage.setAttribute('src', src);
            realImage.setAttribute('alt','testing');
            var image = document.createElement('button');
            $(image).attr('id','redman-image'+$a+$j);
            image.setAttribute('style',"position:relative;");
            image.setAttribute('class','redman-myImg redman-myImg-hidden');
            var icon = document.createElement('i');
            icon.setAttribute('class','icon-magnifier-add h4 text-white align-self-center');
            icon.setAttribute('style','position:absolute;top:49%;left:40%;');
            var overlay = document.createElement('div');
            overlay.setAttribute('style','background:rgb(0,0,0,0.5);position:absolute;width:100%;height:100%;top:0;left:0;display:none;z-index:2;');
            overlay.setAttribute('class','redman-img-overlay');
            overlay.setAttribute('id','redman-img-overlay'+$a+$j);
            image.appendChild(realImage);
            overlay.appendChild(icon);
            image.appendChild(overlay);
            column.appendChild(image);
            }
            }
          
          }
        
          imagesRow.appendChild(column);
        }
     
        //showing the 1st images
        imagesCol.appendChild(imagesRow);
        row.appendChild(imagesCol);
        $($('.redman-gallery')[$a]).html(row);
        for ($i=0 ; $i<=$aantalImgPerPage-1 ; $i++){
          $('#redman-image'+$a+$i).removeClass('redman-myImg-hidden').addClass('redman-myImg-shown');
  
        }

        //breadcrumbs creation
        var aantalBreadcrumbs = Math.ceil($aantalImg / $aantalImgPerPage);
        var breadCrumbPosition = document.createElement('div');
        breadCrumbPosition.setAttribute('id','redman-breadcrumbs'+$a);
        breadCrumbPosition.setAttribute('class','row no-gutters d-flex justify-content-center');
        console.log(aantalBreadcrumbs)
        $($('.redman-gallery')[$a]).prepend(breadCrumbPosition);
        var buttonLeft = document.createElement('button');
        var buttonRight = document.createElement('button');
        var left = document.createElement('div');
        var right = document.createElement('div');
        buttonLeft.id = 'redman-prevBundleButton'+$a;
        buttonRight.id = 'redman-nextBundleButton'+$a;
        if($($('.redman-gallery')[$a]).attr('data-redman-theme')=='dark'){
          buttonLeft.setAttribute('class','redman-dark redman-prevBundleButton');
          buttonRight.setAttribute('class','redman-dark redman-nextBundleButton');
        }
        else{
        buttonLeft.setAttribute('class','redman redman-prevBundleButton');
        buttonRight.setAttribute('class','redman redman-nextBundleButton');
        }
        $(buttonLeft).css('display','none');
        if($($('.redman-gallery')[$a]).attr('data-redman-theme')=='dark'){
          buttonLeft.innerHTML = '<i class="icon-arrow-left text-redman-grey font-weight-bold "></i>'
          buttonRight.innerHTML = '<i class="icon-arrow-right text-redman-grey font-weight-bold "></i>'
        }else{
        buttonLeft.innerHTML = '<i class="icon-arrow-left text-redman-grey font-weight-bold bg-light "></i>'
        buttonRight.innerHTML = '<i class="icon-arrow-right text-redman-grey font-weight-bold bg-light "></i>'
        }
        left.appendChild(buttonLeft);
        right.appendChild(buttonRight);
        left.setAttribute('class',' col-1 d-flex justify-content-center');
        right.setAttribute('class',' col-1 d-flex justify-content-center');
        $('#redman-breadcrumbs'+$a).append(left);
        var buttonCollection = document.createElement('div');
        buttonCollection.setAttribute('class','col-10 d-flex justify-content-center');
        var $html = '';
        for($i=1 ; $i<=aantalBreadcrumbs ; $i++){
          if ($i == 1){
            var button = document.createElement('button');
            if($($('.redman-gallery')[$a]).attr('data-redman-theme')=='dark'){
              button.setAttribute('class','redman-dark d-inline text-light font-weight-bold redman-breadCrumb-item pr-1 pl-1');
            }
            else{
            button.setAttribute('class','redman d-inline text-dark font-weight-bold redman-breadCrumb-item pr-1 pl-1');
            }
            button.setAttribute('id','redman-breadCrumb'+$a+$i);
            button.setAttribute('data-redman-active','yes');
            button.innerHTML = ($i);
            buttonCollection.appendChild(button);
          }
          else{
            var button = document.createElement('button');
            if($($('.redman-gallery')[$a]).attr('data-redman-theme')=='dark'){
              button.setAttribute('class','redman-dark d-inline text-redman-grey redman-breadCrumb-item pr-1 pl-1');
            }
            else{
            button.setAttribute('class','redman d-inline text-redman-grey redman-breadCrumb-item pr-1 pl-1');
            }
            button.setAttribute('id','redman-breadCrumb'+$a+$i);
            button.setAttribute('data-redman-active','no');
            button.innerHTML = ($i);
            buttonCollection.appendChild(button);
          }
          $('#redman-breadcrumbs'+$a).append(buttonCollection);
        }
        $('#redman-breadcrumbs'+$a).append(right);
        if ($('button[id^="redman-breadCrumb'+$a).length <= 1){
          $('#redman-nextBundleButton'+$a).css('display','none');
          $('#redman-breadcrumbs'+$a).removeClass('d-flex').addClass('d-none');
        }
        if($($('.redman-gallery')[$a]).attr('data-redman-theme')=='dark'){
          $('#redman-breadcrumbs'+$a).css('color','rgb(143,143,143) !important');
        }else{
        $('#redman-breadcrumbs'+$a).css('color','rgb(143,143,143) !important');
        }
        /*keeping pages as big as the 1st page was */
        var firstImageOfGallery = 'redman-image'+$a+0;
        firstImageOfGallery = $('#'+firstImageOfGallery).css('width');
        $('button[id^="redman-image'+$a+'"]').css('width',firstImageOfGallery);
        var customHeight = $($('.redman-gallery')[$a]).attr('data-redman-startHeight');
        if (customHeight != undefined){
        if (($(window).width() <= 1200) && ($(window).width() >= 768)){
          customHeight = (customHeight / $($('.redman-gallery')[$a]).attr("data-redman-screenwidth")) * $(window).width();
          $('button[id^="redman-image'+$a+'"').css('height',customHeight+'px');
        }
        else if(($(window).width() <= 767) && ($(window).width() >= 501)){
          customHeight = (customHeight / 100)*180;
          $('button[id^="redman-image'+$a+'"').css('height',customHeight+'px');
        }
        else if(($(window).width() <= 500 ) && ($(window).width() >= 300)){
          customHeight = (customHeight / 100)*100;
          $('button[id^="redman-image'+$a+'"').css('height',customHeight+'px');
        }
        else if(($(window).width() <= 299 ) && ($(window).width() >= 0)){
          customHeight = (customHeight / 100)*80;
          $('button[id^="redman-image'+$a+'"').css('height',customHeight+'px');
        }
        else{
          $('button[id^="redman-image'+$a+'"').css('height',customHeight+'px');
        }
        }
        var pageHeigth = $($('.redman-row'+$a)[0]).css('height');
        if($(window).width() <= 1000 ){

        }else{
        $('#redman-pageheight'+$a).css('height',pageHeigth);
        $('#redman-pageheight'+$a).addClass('d-flex justify-content-center');
        }
      }


      $('.redman-myImg').hover(function(){
        var galleryId = $(this).attr('id');
        galleryId = galleryId.substr(12,galleryId.length);
        $('#redman-img-overlay'+galleryId).toggle();
      });

      //clicking on a breadcrumb
      $('.redman-breadCrumb-item').on('click', function(){
        var galleryId = $(this).attr('id');
        galleryId = galleryId.substr(17,galleryId.length);
        galleryId = galleryId.substr(0,1);
        var $aantalImgPerPage = Number($($('.redman-gallery')[galleryId]).attr('data-redman-countPerPage'));
        var $aantalImg = Number($($('.redman-gallery')[galleryId]).attr('data-redman-totalCount'));
        var aantalBreadcrumbs = Math.ceil($aantalImg / $aantalImgPerPage);
        var pageValue = $(this).html();
        var imageStart = ($aantalImgPerPage * Number(pageValue))-$aantalImgPerPage;
        var restwaarde = $aantalImg-((pageValue-1)*$aantalImgPerPage);
        function getAantalImagesPerPage(restwaarde,$aantalImgPerPage){
          if ($aantalImgPerPage <= restwaarde){
            $aantalImgPerPage = $aantalImgPerPage;
            return $aantalImgPerPage;
          }
          else{
            $aantalImgPerPage = restwaarde;
            return $aantalImgPerPage;
          }
        }
        $aantalImgPerPage = getAantalImagesPerPage(restwaarde,$aantalImgPerPage);
        var imageEnd = (imageStart + $aantalImgPerPage)-1;
        $('.redman-myImg[id^="redman-image'+galleryId+'"').removeClass('redman-myImg-shown').addClass('redman-myImg-hidden');
          for($i=imageStart ; $i<=imageEnd ; $i++){
            $('.redman-myImg[id="redman-image'+galleryId+$i+'"').removeClass('redman-myImg-hidden').addClass('redman-myImg-shown');
          }    
          for($i=1 ; $i<=aantalBreadcrumbs ; $i++){
            if($i != Number(pageValue)){
              if($($('.redman-gallery')[galleryId]).attr('data-redman-theme')=='dark'){
                $('#redman-breadCrumb'+galleryId+$i).attr('data-redman-active','no').removeClass('text-light font-weight-bold');
                $('#redman-breadCrumb'+galleryId+$i).attr('data-redman-active','no').addClass('text-redman-grey');
              }else{
                $('#redman-breadCrumb'+galleryId+$i).attr('data-redman-active','no').removeClass('text-light font-weight-bold');
                $('#redman-breadCrumb'+galleryId+$i).attr('data-redman-active','no').addClass('text-redman-grey');
              }

            }else{
              if($($('.redman-gallery')[galleryId]).attr('data-redman-theme')=='dark'){
                $('#redman-breadCrumb'+galleryId+pageValue).attr('data-redman-active','yes').addClass('text-light font-weight-bold');
                $('#redman-breadCrumb'+galleryId+pageValue).attr('data-redman-active','yes').removeClass('text-redman-grey');
              }
              else{
            $('#redman-breadCrumb'+galleryId+pageValue).attr('data-redman-active','yes').addClass('text-dark font-weight-bold');
            $('#redman-breadCrumb'+galleryId+pageValue).attr('data-redman-active','yes').removeClass('text-redman-grey');
              }
            }
          }
          for($i=1 ; $i<=aantalBreadcrumbs ; $i++){
            if(aantalBreadcrumbs == Number($(this).html())){
              $('#redman-nextBundleButton'+galleryId).css('display','none');
            }
            else{
              $('#redman-nextBundleButton'+galleryId).css('display','block');
            }
          }
          for($i=1 ; $i<=aantalBreadcrumbs ; $i++){
            if($(this).html() == '1' ){
              $('#redman-prevBundleButton'+galleryId).css('display','none');
            }
            else{
              $('#redman-prevBundleButton'+galleryId).css('display','block');
            }
          }
    });

    $('.redman-nextBundleButton').on('click', function(){
      var galleryId = $(this).attr('id');
      galleryId = Number(galleryId.substr(23,galleryId.length));
      var $aantalImgPerPage = Number($($('.redman-gallery')[galleryId]).attr('data-redman-countPerPage'));
      var $aantalImgPerPage2 = $('button[id^="redman-image'+galleryId+'"]');
      var $aantalImgPerPage2 = aantalImgCalc($aantalImgPerPage2);
      var $aantalImg = Number($($('.redman-gallery')[galleryId]).attr('data-redman-totalCount'));
      $('#redman-prevBundleButton'+galleryId).css('display','block');

      var prevActive = $($('.redman-breadCrumb-item[data-redman-active="yes"]')[galleryId]).attr('id');
      if($($('.redman-gallery')[galleryId]).attr('data-redman-theme')=='dark'){
        $($('.redman-breadCrumb-item[data-redman-active="yes"]')[galleryId]).attr('data-redman-active','no').removeClass('text-light font-weight-bold').addClass('text-redman-grey');
      }else{
      $($('.redman-breadCrumb-item[data-redman-active="yes"]')[galleryId]).attr('data-redman-active','no').removeClass('text-dark font-weight-bold').addClass('text-redman-grey');
      }
        prevActive = prevActive.substr(17,prevActive.length);
        prevActive = prevActive.substr(1,prevActive.length);
        prevActive = Number(prevActive)+1;
        prevActive = 'redman-breadCrumb' + String(galleryId) + String(prevActive);
        if($($('.redman-gallery')[galleryId]).attr('data-redman-theme')=='dark'){
          $('#'+prevActive).attr('data-redman-active','yes').addClass('text-light font-weight-bold').removeClass('text-redman-grey');
        }else{
        $('#'+prevActive).attr('data-redman-active','yes').addClass('text-dark font-weight-bold').removeClass('text-redman-grey');
        }
      for($i=0 ; $i<=$aantalImg-1 ; $i++){
      if($('.redman-myImg[id^="redman-image'+galleryId+'"').hasClass('redman-myImg-shown') == true){
         $('.redman-myImg[id="redman-image'+galleryId+$i+'"').removeClass('redman-myImg-shown').addClass('redman-myImg-hidden');
         var id = $i;
      }
      }
      id = Number(id);
      id=id+1;
      for($i=id;$i<=id+$aantalImgPerPage2-1;$i++){
        
        $('.redman-myImg[id="redman-image'+String(galleryId)+$i+'"').removeClass('redman-myImg-hidden').addClass('redman-myImg-shown');
      }

      if (Number(id)+$aantalImgPerPage >= $aantalImg ){
        $('#redman-nextBundleButton'+galleryId).css('display','none');
      }
      else{
        $('#redman-nextBundleButton'+galleryId).css('display','block');
      }
    });

    $('.redman-prevBundleButton').on('click', function(){
      var galleryId = $(this).attr('id');
      galleryId = Number(galleryId.substr(23,galleryId.length));
      var $aantalImgPerPage = Number($($('.redman-gallery')[galleryId]).attr('data-redman-countPerPage'));
      var $aantalImgPerPage2 = $('button[id^="redman-image'+galleryId+'"]');
      var $aantalImgPerPage2 = aantalImgCalc($aantalImgPerPage2);
      var $aantalImg = Number($($('.redman-gallery')[galleryId]).attr('data-redman-totalCount'));
      $('#redman-nextBundleButton'+galleryId).css('display','block');

      var prevActive = $($('.redman-breadCrumb-item[data-redman-active="yes"]')[galleryId]).attr('id');
      if($($('.redman-gallery')[$a]).attr('data-redman-theme')=='dark'){
        $($('.redman-breadCrumb-item[data-redman-active="yes"]')[galleryId]).attr('data-redman-active','no').removeClass('text-light font-weight-bold').addClass('text-redman-grey');
      }else{
      $($('.redman-breadCrumb-item[data-redman-active="yes"]')[galleryId]).attr('data-redman-active','no').removeClass('text-dark font-weight-bold').addClass('text-redman-grey');
      }
        prevActive = prevActive.substr(17,prevActive.length);
        prevActive = prevActive.substr(1,prevActive.length);
        prevActive = Number(prevActive)-1;
        prevActive = 'redman-breadCrumb' + String(galleryId) + String(prevActive);
        if($($('.redman-gallery')[galleryId]).attr('data-redman-theme')=='dark'){
          $('#'+prevActive).attr('data-redman-active','yes').addClass('text-light font-weight-bold').removeClass('text-redman-grey');
        }else{
        $('#'+prevActive).attr('data-redman-active','yes').addClass('text-dark font-weight-bold').removeClass('text-redman-grey');
        }
        for($i=0 ; $i<=$aantalImg-1 ; $i++){
          if($('.redman-myImg[id^="redman-image'+galleryId+'"').hasClass('redman-myImg-shown') == true){
             $('.redman-myImg[id="redman-image'+galleryId+$i+'"').removeClass('redman-myImg-shown').addClass('redman-myImg-hidden');
             var id = $i;
          }
        }
        id = Number(id);
        id=(id-$aantalImgPerPage2);
        id=(id-$aantalImgPerPage)+1;
        for($i=id;$i<=id+$aantalImgPerPage-1;$i++){
          $('.redman-myImg[id="redman-image'+galleryId+$i+'"').removeClass('redman-myImg-hidden').addClass('redman-myImg-shown');
        }
        if (id == 0 ){
          $('#redman-prevBundleButton'+galleryId).css('display','none');
        }
        else{
          $('#redman-prevBundleButton'+galleryId).css('display','block');
        }
    });

    $('.redman-myImg').on('click',function(){
      $('body').attr('style','overflow:hidden !important');
      var $html = '<div id="redman-enlarged-gallery" class=" bg-redman text-white img-fluid p-0 m-0">'+
      '<div style="position:relative">'+
      '<div id="redman-menu" class="row no-gutters bg-redman-black">'+
          '<div class="col-2 text-left">'+
              '<div id="redman-count" class="p-3">1/12</div>'+
          '</div>'+
          '<div class="col-8 text-center pl-md-5">'+
              '<button id="redman-prevPic" class="redman-large p-3 m-2"><i id="redman-prevPic-icon" class="icon-arrow-left text-redman-grey"></i></button>'+
              '<button id="redman-nextPic" class="redman-large p-3 m-2"><i id="redman-nextPic-icon" class="icon-arrow-right text-redman-grey"></i></button>'+
          '</div>'+
          '<div class="col-2 d-flex justify-content-end">'+
              '<button id="redman-buttonClose" class="redman-large p-1 p-md-3"><i class="icon-close text-redman-grey"></i></button>'+
          '</div>'+
        '</div>'+
        '<div id="redman-enlarged-content" class="row no-gutters">'+
          '<div id="redman-small-content" class="d-none col-3 col-md-2">'+
            /*insert images*/
          '</div>'+
          '<div id="redman-large-content" class="col-12 col-md-12 d-flex justify-content-center">'+
              /*insert images*/
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
    var div = document.createElement('div');
    $(div).html($html);
    $('body').prepend(div);
    $('#redman-enlarged-gallery').css('display','block');
    
    var galleryId = $(this).attr('id');
    galleryId = galleryId.substr(12,galleryId.length);
    var imageId = galleryId.substr(1,2); 
    galleryId = galleryId.substr(0,1);
    var images = Array();
    var aantal = $('button[id^="redman-image'+galleryId+'"]').length;
    var image = $('button[id="redman-image'+galleryId+imageId+'"]').children()[0];
    var src = image.getAttribute('src');
    var img = document.createElement('div');
    img.setAttribute('style',"background-image: url('"+src+"');z-index:4999;width:inherit");
    img.setAttribute('class','redman-img-large');
    img.setAttribute('id','redman-img-large'+galleryId+imageId);
    $('#redman-large-content').append(img);
    for($i=0 ; $i<=aantal-1 ; $i++){
      images[$i] = $('button[id="redman-image'+galleryId+$i+'"]').children()[0];
      var src = image.getAttribute('src');
      var img = document.createElement('button');
      img.setAttribute('style',"background-image: url('"+src+"');z-index:4999;width:inherit");
      img.setAttribute('class','redman-img-small');
      $('#redman-small-content').append(img);
      
    }
    var $aantalImg = Number($($('.redman-gallery')[galleryId]).attr('data-redman-totalCount'));
    $('#redman-count').html(Number(imageId)+1+'/'+$aantalImg);
    if(imageId == 0){
      $('#redman-prevPic').attr('disabled',true);
      $('#redman-prevPic').attr('style','cursor:default !important;color:rgb(143,143,143) !important;font-weight:normal !important');
      $('#redman-prevPic-icon').attr('style','cursor:default !important;color:rgb(143,143,143) !important;font-weight:normal !important');
      $('#redman-prevPic').hover(function(){
        $(this).attr('style','cursor:default !important;color:rgb(143,143,143) !important;font-weight:normal !important');
        $('#redman-prevPic-icon').hover(function(){
          $(this).attr('style','color:rgb(143,143,143) !important;cursor:default !important;font-weight:normal !important');
        });
      });
    }
    else if(imageId == (aantal-1)){
      $('#redman-nextPic').attr('disabled',true);
      $('#redman-nextPic').attr('style','cursor:default !important;color:rgb(143,143,143) !important;font-weight:normal !important');
      $('#redman-nextPic-icon').attr('style','cursor:default !important;color:rgb(143,143,143) !important;font-weight:normal !important');
      $('#redman-nextPic').hover(function(){
        $(this).attr('style','cursor:default !important;color:rgb(143,143,143) !important;font-weight:normal !important');
        $('#redman-nextPic-icon').hover(function(){
          $(this).attr('style','color:rgb(143,143,143) !important;cursor:default !important;font-weight:normal !important');
        });
      });
    }

      //buttons inside of enlarged gallerij need be inside this function
      //prevPic button
      $('#redman-prevPic').on('click',function(){
        $('#redman-nextPic').attr('disabled',false);
        $('#redman-nextPic').hover(function(){
          $('#redman-nextPic').attr('style','color:white !important;cursor:pointer !important;font-weight:bold !important');
          $('#redman-nextPic-icon').attr('style','cursor:pointer !important;color:white !important;font-weight:bold !important');
          },function(){
          $('#redman-nextPic').attr('style','color:rgb(143,143,143) !important;cursor:default !important;font-weight:normal !important');
          $('#redman-nextPic-icon').attr('style','cursor:default !important;color:rgb(143,143,143) !important;font-weight:normal !important');
          });
        var image = $('.redman-img-large').attr('id');
        image = image.substr(17,(image.length));
        image = Number(image)-1;
        $('#redman-count').html((Number(image)+1)+'/'+$aantalImg);
        var style = $('button[id="redman-image'+galleryId+image+'"]').children()[0];
        style = $(style).attr('src');
        $('.redman-img-large').attr('style', "background-image: url('"+style+"');z-index:4999;width:inherit");
        $('.redman-img-large').attr('id', 'redman-img-large'+galleryId+image);
        if(Number(image) == 0){
          $(this).attr('disabled',true);
          $(this).attr('style','cursor:default !important;color:rgb(143,143,143) !important;font-weight:normal !important');
          $('#redman-prevPic-icon').attr('style','color:rgb(143,143,143) !important;cursor:default !important;font-weight:normal !important');
          $(this).hover(function(){
            $(this).attr('style','cursor:default !important;color:rgb(143,143,143) !important;font-weight:normal !important');
            $('#redman-prevPic-icon').attr('style','color:rgb(143,143,143) !important;font-weight:normal !important');
          });         
        }
        else{
          $(this).attr('disabled',false);
          $(this).hover(function(){
            $(this).attr('style','cursor:pointer !important;color:white !important,font-weight:bold !important');
            $('#redman-prevPic-icon').attr('style','cursor:pointer !important;color:white !important;font-weight:bold !important');
          },function(){
            $(this).attr('style','cursor:default !important;color:rgb(143,143,143) !important,font-weight:normal !important');
            $('#redman-prevPic-icon').attr('style','cursor:default !important;color:rgb(143,143,143) !important;font-weight:normal !important');
          });  
        }
      });

      //nextPic button
      $('#redman-nextPic').on('click',function(){
        $('#redman-prevPic').attr('disabled',false);
        $('#redman-prevPic').hover(function(){
          $('#redman-prevPic').attr('style','color:white !important;cursor:pointer !important;font-weight:bold !important');
          $('#redman-prevPic-icon').attr('style','cursor:pointer !important;color:white !important;font-weight:bold !important');
          },function(){
            $('#redman-prevPic').attr('style','color:rgb(143,143,143) !important;cursor:default !important;font-weight:normal !important');
            $('#redman-prevPic-icon').attr('style','cursor:default !important;color:rgb(143,143,143) !important;font-weight:normal !important');
          });
        var image = $('.redman-img-large').attr('id');
        image = image.substr(17,(image.length));
        image = Number(image)+1;
        $('#redman-count').html((Number(image)+1)+'/'+$aantalImg);
        var style = $('button[id="redman-image'+galleryId+image+'"]').children()[0];
        style = $(style).attr('src');
        $('.redman-img-large').attr('style', "background-image: url('"+style+"');z-index:4999;width:inherit");
        $('.redman-img-large').attr('id', 'redman-img-large'+galleryId+image);
        if(Number(image) == $aantalImg-1){
          $(this).attr('disabled',true);
          $(this).attr('style','cursor:default !important;color:rgb(143,143,143) !important;font-weight:normal !important');
          $('#redman-nextPic-icon').attr('style','color:rgb(143,143,143) !important;cursor:default !important;font-weight:normal !important');
          $(this).hover(function(){
          $(this).attr('style','color:rgb(143,143,143);cursor:default !important;font-weight:normal !important');
          $('#redman-nextPic-icon').attr('style','color:rgb(143,143,143) !important;font-weight:normal !important');
          });
        }
        else{
          $(this).attr('disabled',false);
          $(this).hover(function(){
            $(this).attr('style','color:white !important;cursor:pointer !important;font-weight:bold !important');
            $('#redman-nextPic-icon').attr('style','cursor:pointer;color:white !important;font-weight:bold !important');
          },function(){
            $(this).attr('style','color:rgb(143,143,143) !important;cursor:default !important;font-weight:normal !important');
            $('#redman-nextPic-icon').attr('style','cursor:default;color:rgb(143,143,143) !important;font-weight:normal !important');
          });
        }
      });

      $('#redman-buttonClose').on('click',function(){
        $('#redman-enlarged-gallery').remove();
        $('body').attr('style','overflow:auto !important');
      });
    });
    
    

var width = $(window).width();
$(window).on('resize', function() {
  if ($(this).width() != width) {
    width = $(this).width();   
    window.location.href = window.location.href;
  }
});



    function aantalImgCalc($aantalImgPerPage2){
     
      var calc = 0;
      for ($i=0;$i<=$aantalImgPerPage2.length-1;$i++) {
        if($aantalImgPerPage2[$i].className == 'redman-myImg redman-myImg-shown'){
          calc = calc +1;
        }
      }
      return calc;
    }


    function getTeller1(teller1,$aantalImgPerRow,$aantalImgPerPage){
      if((teller1*$aantalImgPerRow)+1 > $aantalImgPerPage){
      teller1 = 1;
      return teller1;
    }
    else {
      teller1=teller1+1;
      return teller1;
    }
  };


    function getAantalImgPerPage($aantalImg,$aantalImgPerPage,$i,lastPageIndex,$aantalImgPerRow,teller){
      var temp = $aantalImg/$aantalImgPerPage%1;
      temp = Number(temp.toFixed(2));
      if(($i <= lastPageIndex)||(lastPageIndex+$aantalImgPerRow > $aantalImg+1)){
        if (temp == 0){
          $aantalImgPerRow = $aantalImgPerRow;
          return $aantalImgPerRow;
        }
        else{
        temp = $aantalImgPerRow*temp%1;
        temp = temp*$aantalImgPerRow;
        if((temp < 1) && (temp > 0)){
          temp = Math.round(temp);
          if (temp == 0){
            $aantalImgPerRow = $aantalImgPerRow;
            return $aantalImgPerRow;
          }
          else{
            $aantalImgPerRow = temp;
          return $aantalImgPerRow;
          }
        }
        else if(temp == 0){
          $aantalImgPerRow = $aantalImgPerRow;
          return $aantalImgPerRow;
        }
        else{
          
          $aantalImgPerRow = Math.ceil($aantalImgPerRow);
          return $aantalImgPerRow;
        }
        }
      }
      else{
        temp = Number($aantalImgPerPage)/Number($aantalImgPerRow);
        if (teller <= temp){
          $aantalImgPerRow = $aantalImgPerRow;
          return $aantalImgPerRow;
        }
        else{
          temp = temp%1;
          temp = Number(temp.toFixed(2));
            if(temp == 0){
              $aantalImgPerRow = $aantalImgPerRow;
              return $aantalImgPerRow;
            }
            else{
              test = Math.round(Number($aantalImgPerRow) * temp);
              if(test == 0 ){
                $aantalImgPerRow = $aantalImgPerRow;
                return $aantalImgPerRow;
              }
              else{
                $aantalImgPerRow = test;
              return $aantalImgPerRow;
              }
            }
          }
        
        }
      }