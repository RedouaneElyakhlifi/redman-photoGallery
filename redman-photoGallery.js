
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
      var buttonLeft = document.createElement('button');
      var buttonRight = document.createElement('button');
      var left = document.createElement('div');
      var right = document.createElement('div');
      buttonLeft.id = 'redman-prevBundleButton'+$a;
      buttonRight.id = 'redman-nextBundleButton'+$a;
      buttonLeft.setAttribute('class','redman-prevBundleButton');
      buttonRight.setAttribute('class','redman-nextBundleButton');
      $(buttonLeft).css('display','none');
      buttonLeft.innerHTML = '<i class="icon-arrow-left text-white font-weight-bold bg-dark p-3"></i>'
      buttonRight.innerHTML = '<i class="icon-arrow-right text-white font-weight-bold bg-dark p-3"></i>'
      left.appendChild(buttonLeft);
      right.appendChild(buttonRight);
      left.setAttribute('class','col-6 mt-2 order-1 mt-md-0 col-md-1 d-flex justify-content-center');
      right.setAttribute('class','col-6 order-2 order-md-3 mt-2 mt-md-0 col-md-1 d-flex justify-content-center');
      row.appendChild(left);
      var imagesCol = document.createElement('div');
      imagesCol.setAttribute('class','col-12 order-3 order-md-2 col-md-10');
      var imagesRow =  document.createElement('div');
      imagesRow.setAttribute('class','row redman-row'+$a);
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
            var image = document.createElement('button');
            var icon = document.createElement('i');
            icon.setAttribute('class','icon-magnifier-add h4 text-white align-self-center');
            icon.setAttribute('style','position:absolute;top:49%;left:40%;');
            var overlay = document.createElement('div');
            overlay.setAttribute('style','background:rgb(0,0,0,0.5);position:absolute;width:100%;height:100%;top:0;left:0;display:none;');
            overlay.setAttribute('class','redman-img-overlay');
            overlay.setAttribute('id','redman-img-overlay'+$a+$j);
            image.setAttribute('style',"background-image:url('"+src+"');position:relative;");
            image.setAttribute('class','redman-myImg redman-myImg-hidden');
            $(image).attr('id','redman-image'+$a+$j);
          
            overlay.appendChild(icon);
            image.appendChild(overlay);
            column.appendChild(image);
            }
          
          }
        
          imagesRow.appendChild(column);
        }
     
        //showing the 1st images
        imagesCol.appendChild(imagesRow);
        row.appendChild(imagesCol);
        row.appendChild(right);
        $($('.redman-gallery')[$a]).html(row);
        for ($i=0 ; $i<=$aantalImgPerPage-1 ; $i++){
          $('#redman-image'+$a+$i).removeClass('redman-myImg-hidden').addClass('redman-myImg-shown');
  
        }

        //breadcrumbs creation
        var aantalBreadcrumbs = Math.ceil($aantalImg / $aantalImgPerPage);
        var breadCrumbPosition = document.createElement('div');
        breadCrumbPosition.setAttribute('id','redman-breadcrumbs'+$a);
        breadCrumbPosition.setAttribute('class','d-flex justify-content-center');
        $($('.redman-gallery')[$a]).prepend(breadCrumbPosition);
        var $html = '';
        for($i=1 ; $i<=aantalBreadcrumbs ; $i++){
          if ($i == 1){
            $html = $html+'<button class="d-inline m-2 text-green redman-breadCrumb-item" id="redman-breadCrumb'+$a+$i+'" data-redman-active="yes">'+$i+'</button>';
          }
          else{
            $html = $html+'<button class="d-inline m-2 redman-breadCrumb-item" id="redman-breadCrumb'+$a+$i+'" data-redman-active="no">'+$i+'</button>';
          }
          $('#redman-breadcrumbs'+[$a]).html($html);
        }
        if (aantalBreadcrumbs <= 1){
          $('#redman-nextBundleButton'+$a).css('display','none');
        }
        /*keeping pages as big as the 1st page was */
        var firstImageOfGallery = 'redman-image'+$a+0;
        firstImageOfGallery = $('#'+firstImageOfGallery).css('width');
        $('button[id^="redman-image'+$a+'"]').css('width',firstImageOfGallery);
        var pageHeigth = $($('.redman-row'+$a)[0]).css('height');
        $('#redman-pageheight'+$a).css('height',pageHeigth);
      }

      /*for($i=0; $i<=$('.redman-col').length-1; $i++){
        var colToChange = ($('.redman-col')[$i]);
        var firstKid = $('.redman-col')[$i].firstChild;
        if($(firstKid).hasClass('redman-myImg-hidden') == true){
          $(colToChange).removeClass('d-flex flex-column flex-md-row');
          $(colToChange).addClass('d-none');
        }
        else{
          $(colToChange).removeClass('d-none');
          $(colToChange).addClass('d-flex flex-column flex-md-row');
        }
      }*/

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
              $('#redman-breadCrumb'+galleryId+$i).attr('data-redman-active','no').removeClass('text-green');
            }else{
            $('#redman-breadCrumb'+galleryId+pageValue).attr('data-redman-active','yes').addClass('text-green');
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
          /*for($i=0; $i<=$('.redman-col').length-1; $i++){
            var colToChange = ($('.redman-col')[$i]);
            var firstKid = $('.redman-col')[$i].firstChild;
            if($(firstKid).hasClass('redman-myImg-hidden') == true){
              $(colToChange).removeClass('d-flex flex-column flex-md-row');
              $(colToChange).addClass('d-none');
            }
            else{
              $(colToChange).removeClass('d-none');
              $(colToChange).addClass('d-flex flex-column flex-md-row');
            }
          }*/
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
      $($('.redman-breadCrumb-item[data-redman-active="yes"]')[galleryId]).attr('data-redman-active','no').removeClass('text-green');
        prevActive = prevActive.substr(17,prevActive.length);
        prevActive = prevActive.substr(1,prevActive.length);
        prevActive = Number(prevActive)+1;
        prevActive = 'redman-breadCrumb' + String(galleryId) + String(prevActive);
        $('#'+prevActive).attr('data-redman-active','yes').addClass('text-green');

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

      /*for($i=0; $i<=$('.redman-col').length-1; $i++){
        var colToChange = ($('.redman-col')[$i]);
        var firstKid = $('.redman-col')[$i].firstChild;
        if($(firstKid).hasClass('redman-myImg-hidden') == true){
          $(colToChange).removeClass('d-flex flex-column flex-md-row');
          $(colToChange).addClass('d-none');
        }
        else{
          $(colToChange).removeClass('d-none');
          $(colToChange).addClass('d-flex flex-column flex-md-row');
    
        }
    
      }*/

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
      $($('.redman-breadCrumb-item[data-redman-active="yes"]')[galleryId]).attr('data-redman-active','no').removeClass('text-green');
        prevActive = prevActive.substr(17,prevActive.length);
        prevActive = prevActive.substr(1,prevActive.length);
        prevActive = Number(prevActive)-1;
        prevActive = 'redman-breadCrumb' + String(galleryId) + String(prevActive);
        $('#'+prevActive).attr('data-redman-active','yes').addClass('text-green');
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

        /*for($i=0; $i<=$('.redman-col').length-1; $i++){
          var colToChange = ($('.redman-col')[$i]);
          var firstKid = $('.redman-col')[$i].firstChild;
          if($(firstKid).hasClass('redman-myImg-hidden') == true){
            $(colToChange).removeClass('d-flex flex-column flex-md-row');
            $(colToChange).addClass('d-none');
          }
          else{
            $(colToChange).removeClass('d-none');
            $(colToChange).addClass('d-flex flex-column flex-md-row');
      
          }
      
        }*/

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
              '<button id="redman-prevPic" class="p-3 m-2"><i id="redman-prevPic-icon" class="icon-arrow-left text-white"></i></button>'+
              '<button id="redman-nextPic" class="p-3 m-2"><i id="redman-nextPic-icon" class="icon-arrow-right text-white"></i></button>'+
          '</div>'+
          '<div class="col-2 d-flex justify-content-end">'+
              '<button id="redman-buttonClose" class="p-1 p-md-3"><i class="icon-close text-white"></i></button>'+
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
    $('body').append(div);
    $('#redman-enlarged-gallery').css('display','block');

    var galleryId = $(this).attr('id');
    galleryId = galleryId.substr(12,galleryId.length);
    var imageId = galleryId.substr(1,2); 
    galleryId = galleryId.substr(0,1);
    var images = Array();
    var aantal = $('button[id^="redman-image'+galleryId+'"]').length;
    var image = $('button[id="redman-image'+galleryId+imageId+'"]');
    var values = Object.values(image);
    var src = values[0].getAttribute('style');
    src = src.substr(0,39);
    var img = document.createElement('div');
    img.setAttribute('style',src+'z-index:4999;width:inherit');
    img.setAttribute('class','redman-img-large');
    img.setAttribute('id','redman-img-large'+galleryId+imageId);
    $('#redman-large-content').append(img);
    for($i=0 ; $i<=aantal-1 ; $i++){
      images[$i] = $('button[id="redman-image'+galleryId+$i+'"]');
      var values = Object.values(images[$i]);
      var src = values[0].getAttribute('style');
      src = src.substr(0,39);
      var img = document.createElement('button');
      img.setAttribute('style',src+'z-index:4999;');
      img.setAttribute('class','redman-img-small');
      $('#redman-small-content').append(img);
      
    }
    var $aantalImg = Number($($('.redman-gallery')[galleryId]).attr('data-redman-totalCount'));
    $('#redman-count').html(Number(imageId)+1+'/'+$aantalImg);

      //buttons inside of enlarged gallerij need be inside this function
      //prevPic button
      $('#redman-prevPic').on('click',function(){
        $('#redman-nextPic').attr('disabled',false);
        $('#redman-nextPic').hover(function(){
          $('#redman-nextPic').attr('style','color:rgba(41, 247, 0) !important;cursor:pointer !important');
          },function(){
          $('#redman-nextPic').attr('style','color:white !important;cursor:default !important');
          });
        $('#redman-nextPic-icon').hover(function(){
          $('#redman-nextPic-icon').attr('style','cursor:pointer !important;color:rgba(41, 247, 0) !important');
          },function(){
          $('#redman-nextPic-icon').attr('style','cursor:default !important;color:white !important');
          });    
        var image = $('.redman-img-large').attr('id');
        image = image.substr(17,(image.length));
        image = Number(image)-1;
        $('#redman-count').html((Number(image)+1)+'/'+$aantalImg);
        var style = $('button[id="redman-image'+galleryId+image+'"]');
        style = $(style).attr('style');
        var index = style.indexOf(')');
        style = style.substr(0,(index)+1);
        $('.redman-img-large').attr('style', style+';z-index:4999;width:inherit');
        $('.redman-img-large').attr('id', 'redman-img-large'+galleryId+image);
        if(Number(image) == 0){
          $(this).attr('disabled',true);
          $(this).attr('style','cursor:default !important;color:white !important');
          $('#redman-prevPic-icon').attr('style','color:white !important;cursor:default !important');
          $(this).hover(function(){
            $(this).attr('style','cursor:default !important;color:white !important');
          });
          $('#redman-prevPic-icon').hover(function(){
            $('#redman-prevPic-icon').attr('style','color:white !important');
          });             
        }
        else{
          $(this).attr('disabled',false);
          $(this).hover(function(){
            $(this).attr('style','cursor:pointer !important;color:rgba(41, 247, 0) !important');
          },function(){
            $(this).attr('style','cursor:default !important;color:white !important');
          });
          $('#redman-prevPic-icon').hover(function(){
            $('#redman-prevPic-icon').attr('style','cursor:pointer !important;color:rgba(41, 247, 0) !important');
          },function(){
            $('#redman-prevPic-icon').attr('style','cursor:default !important;color:white !important');
          });    
        }
      });

      //nextPic button
      $('#redman-nextPic').on('click',function(){
        $('#redman-prevPic').attr('disabled',false);
        $('#redman-prevPic').hover(function(){
          $('#redman-prevPic').attr('style','color:rgba(41, 247, 0) !important;cursor:pointer !important');
          },function(){
            $('#redman-prevPic').attr('style','color:white !important;cursor:default !important');
          });
        $('#redman-prevPic-icon').hover(function(){
          $('#redman-prevPic-icon').attr('style','cursor:pointer !important;color:rgba(41, 247, 0) !important');
          },function(){
            $('#redman-prevPic-icon').attr('style','cursor:default !important;color:white !important');
          });    
        var image = $('.redman-img-large').attr('id');
        image = image.substr(17,(image.length));
        image = Number(image)+1;
        $('#redman-count').html((Number(image)+1)+'/'+$aantalImg);
        var style = $('button[id="redman-image'+galleryId+image+'"]');
        style = $(style).attr('style');
        var index = style.indexOf(')');
        style = style.substr(0,(index)+1);
        $('.redman-img-large').attr('style', style+';z-index:4999;width:inherit');
        $('.redman-img-large').attr('id', 'redman-img-large'+galleryId+image);
        if(Number(image) == $aantalImg-1){
          $(this).attr('disabled',true);
          $(this).attr('style','cursor:default !important;color:white !important');
          $('#redman-nextPic-icon').attr('style','color:white !important;cursor:default !important');
          $(this).hover(function(){
          $(this).attr('style','cursor:default !important');
          });
          $('#redman-nextPic-icon').hover(function(){
            $('#redman-nextPic-icon').attr('style','color:white !important');
          });
        }
        else{
          $(this).attr('disabled',false);
          $(this).hover(function(){
            $(this).attr('style','color:rgba(41, 247, 0) !important;cursor:pointer !important');
          },function(){
            $(this).attr('style','color:white !important;cursor:default !important');
          });
          $('#redman-nextPic-icon').hover(function(){
            $('#redman-nextPic-icon').attr('style','cursor:pointer;color:rgba(41, 247, 0) !important');
          },function(){
            $('#redman-nextPic-icon').attr('style','cursor:default;color:white !important');
          });
        }
      });

      $('#redman-buttonClose').on('click',function(){
        $('#redman-enlarged-gallery').remove();
        $('body').attr('style','overflow:auto !important');
      });
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
        $aantalImgPerRow = Math.ceil(temp*$aantalImgPerRow);
        return $aantalImgPerRow;
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
              test = Math.ceil(Number($aantalImgPerRow) * temp);
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