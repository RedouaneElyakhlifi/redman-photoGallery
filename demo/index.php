<!DOCTYPE html>
<html lang="en">
<head>
<title>Redman's Foto-Gallery PLUGIN</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Redman's photoGallery PLUGIN || easy to use photo-gallery, all formats of images + easy CSS & HTML implementation. Change variables, Dynamic foto gallery PLUGIN || dependencies:jQuery, jQueryUI, simple-line-icons, Bootstrap, documentation">
    <meta name="author" content="Redouane El-Yakhlifi">
    <!-- RUNNING ON LOCALHOST NEEDS NODE MODULES INSTALLED-->

    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css">
    <link rel="stylesheet" href="css/redman-photoGallery.css">
    
    <style>
    li{
    list-style-type:none !important;
}
iframe{
    border:0;
}
.masthead{
    background-image:url(img/masthead.jpg);
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;
}
.overlay{
    opacity: 0.8;
    background-color:rgb(0,0,0);
}
.text-custom{
    text-shadow: black 5px 5px 1px;
}
.text-orange{
    color:rgb(255, 123, 0);
}
.bg-lightgrey{
    background-color:rgb(240, 240, 240);
}</style>
</head>
<body class="p-0 m-0">
    <!--title-->
    <div class="container-fluid bg-light text-dark p-0">
        <div class=" m-0 p-0 text-custom text-orange masthead">
            <div class="overlay pt-5 pb-5">
                <h1 class="font-weight-bold text-center pt-4 pb-5  m-0"><u>Redman's Foto-Gallery PLUGIN</u></h1>
                <h3 class="text-center font-weight-bold pb-4  m-0 text-light">Hi all !! Welcome to my FREE to use photoGallery-plugin.</h3>
                <h3 class="text-center font-weight-bold pb-4  m-0 text-light">Enjoy!</h3>
            </div>
        </div>
    <!--plugin dependencies -->
    <div class="container-fluid pb-5 border-bottom border-top">
    <div class='row no-gutters m-auto'>
                <div class="col-12 font-weight-bold">
                    <h3 class=" mt-5 ml-md-3 mb-2 mb-md-5"><u><strong>Labels: </strong></u></h3>
                    <i class="icon-lock text-danger m-md-2"></i>= REQUIRED | NOT CHANGEABLE<br> <i class="icon-lock-open text-success m-md-2"></i>= REQUIRED | VARIABLE<br> <i class="icon-options text-dark m-md-2"></i>= NOT REQUIRED | VARIABLE<br><i class="icon-diamond text-orange m-md-2"></i>= SPECIAL FEATURES<br><i class="icon-like text-success m-md-2"></i>= SUCCESFULL IMPLEMENTS<br>
                </div>
            </div>
            <div class='row no-gutters m-auto'>
                <div class="col-12 font-weight-bold">
                    <h3 class=" pt-5 ml-0 ml-md-3"><u><strong>Global Dependencies: </strong></u></h3>
                    <ul class="pt-5 ml-0 ml-md-3 h3 font-weight-bold">
                        <li class="p-0 p-md-2"><i class="icon-wrench m-2"></i>Dependencies / Libraries ( are <span class="text-danger">REQUIRED</span>):
                        <h5 class=" pt-5 ml-0 ml-md-3"><u><strong>COPY/PASTE URL's </strong></u></h5>
                            <ul class="pt-2 h4 font-weight-bold">
                                <li class="m-0 m-md-2 pt-3"><i class="icon-lock text-danger m-2"></i>Bootstrap <br><br><span class="text-danger">https://<br class="d-md-none">stackpath<br class="d-md-none">.bootstrapcdn<br class="d-md-none">.com/bootstrap/4.3.1/css/bootstrap<br class="d-md-none">.min.css</span> <br><br><span class="text-danger mt-3">https://<br class="d-md-none">stackpath<br class="d-md-none">.bootstrapcdn<br class="d-md-none">.com/bootstrap/4.3.1/js/bootstrap<br class="d-md-none">.min.js</span><br></li>
                                <li class="m-0 m-md-2 pt-3"><i class="icon-lock text-danger m-2"></i>jQuery <br><br><span class="text-danger">https://code<br class="d-md-none">.jquery<br class="d-md-none">.com/jquery-3<br class="d-md-none">.3.1<br class="d-md-none">.min.js</span></li>
                                <li class="m-0 m-md-2 pt-3"><i class="icon-lock text-danger m-2"></i>jQueryUI <br><br><span class="text-danger ">https://code<br class="d-md-none">.jquery<br class="d-md-none">.com/ui/1.12.1/jquery-ui<br class="d-md-none">.min.js</span><br></li>
                                <li class="m-0 m-md-2 pt-3"><i class="icon-lock text-danger m-2"></i>Simple Line Icons <br><br><span class="text-danger pt-3">https://cdnjs<br class="d-md-none">.cloudflare<br class="d-md-none">.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons<br class="d-md-none">.css"</span><br></li>
                                <li class="m-0 m-md-2 pt-3"><i class="icon-lock text-danger m-2"></i>redman-photoGallery.js <br><br><a target="_blank" class="text-danger" href="https://github.com/RedouaneElyakhlifi/redman-photoGallery">download FREE on GIThub</a></li>
                                <li class="m-0 m-md-2 pt-3"><i class="icon-lock text-danger m-2"></i>redman-photoGallery.css <br><br><a target="_blank" class="text-danger" href='https://github.com/RedouaneElyakhlifi/redman-photoGallery'>download FREE on GIThub</a></li>
                                <li class="m-0 m-md-2 mt-md-5 ml-md-5 pt-3"><i class="icon-wrench m-md-2 mt-2"></i>How to link the dependencies to your website:
                                    <ul class="p-0 p-md-3 font-weight-normal mt-2 ml-md-5">
                                        <li class="m-md-2 pt-2"><i class="icon-lock h6 text-success m-2"></i>Link the CSS at the top of the page in the header!</li>
                                        <li class="m-0 m-md-2 pt-2"><i class="icon-lock h6 text-success m-2"></i>Name redman-photoGallery.css with the path that YOU HAVE SAVED IT ON!</li>
                                        <li class=' mt-2'><small class="text-secondary">image excample:</small><br><img class="img-fluid" src="img/linking-header.jpg" alt="fout"></li>
                                        <li class="mt-4"><i class="icon-lock-open h6 text-success m-md-2"></i><strong>COPY/PASTE URL's:</strong><br></li>
                                        <li class='mt-2 bg-lightgrey '>&#x3c;link rel="stylesheet" href="https://<br class="d-md-none">stackpath.<br class="d-md-none">bootstrapcdn.<br class="d-md-none">com<br class="d-md-none">/bootstrap/<br class="d-md-none">4.3.1/css/bootstrap.<br class="d-md-none">min.css"><br>
                                        &#x3c;link rel="stylesheet" href="https://<br class="d-md-none">cdnjs.<br class="d-md-none">cloudflare.com/<br class="d-md-none">ajax/libs/simple-line-icons<br class="d-md-none">/2.4.1/css/simple-line-icons.css"><br>
                                        &#x3c;link rel="stylesheet" href="css/<br class="d-md-none">redman-photoGallery<br class="d-md-none">.min.css"><br></li>
                                        <li class=" m-0 m-md-2 pt-2"><i class="icon-lock h6 text-success m-2"></i>Javasript dependecies need to be inserted just before the body end tag!</li>
                                        <li class="m-0 m-md-2 pt-2"><i class="icon-lock h6 text-success m-2"></i>Name redman-photoGallery.js with the path that YOU HAVE SAVED IT ON!</li>
                                        <li class='mt-2'><small class="text-secondary">image excample:</small><br><img class="img-fluid" src="img/linking-footer.jpg" alt="fout"></li>
                                        <li class="mt-4"><i class="icon-lock-open h6 text-success m-md-2"></i><strong>COPY/PASTE URL's:</strong><br></li>
                                        <li class='mt-2 bg-lightgrey '>&#x3c;script src="https://<br class="d-md-none">code.<br class="d-md-none">jquery.com/<br class="d-md-none">jquery-3.3.1.<br class="d-md-none">min.js">&#x3c;/script><br>
                                        &#x3c;script src="https://<br class="d-md-none">code.<br class="d-md-none">jquery.com/ui/1.12.1/<br class="d-md-none">jquery-ui.min.js">&#x3c;/script><br>
                                        &#x3c;script src="https://<br class="d-md-none">stackpath<br class="d-md-none">.bootstrapcdn<br class="d-md-none">.com/<br class="d-md-none">bootstrap/<br class="d-md-none">4.3.1/js/<br class="d-md-none">bootstrap<br class="d-md-none">.min.js">&#x3c;/script><br>
                                        &#x3c;script src="js/<br class="d-md-none">redman-photoGallery<br class="d-md-none">.min.js">&#x3c;/script><br></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <!--plugin global settings-->
        <div class="container-fluid pb-5 bg-light border-top">
            <div class='row no-gutters m-auto'>
                <div class="col-12 font-weight-bold">
                    <h3 class=" mt-5 ml-md-3"><u><strong>Global Settings: </strong></u></h3>
                    <ul class="mt-5 m-0 ml-md-3 h3 font-weight-bold pt-2">
                        <li class="pt-2"><i class="icon-wrench"></i>Settings (attributes):
                            <ul class="pt-2 h4 font-weight-bold">
                                <li class="m-0 m-md-2 pt-3"><i class="icon-lock text-danger m-md-2"></i>class="<span class="text-danger">redman<span class="d-inline-block d-md-none">&nbsp;</span>-gallery</span>" -->this cannot change!! Use this class to adress the plugin.</li>
                                <li class="m-0 m-md-2 pt-3"><i class="icon-lock-open text-success m-md-2"></i>data-redman-totalCount="<span class="text-primary"> ENTER HERE the number of total images you have in the gallery.</span>"</li>
                                <li class="m-0 m-md-2 pt-3"><i class="icon-lock-open text-success m-md-2"></i>data-redman-countPerPage="<span class="text-primary"> ENTER HERE the number of images per page that you want to show.</span>" if less then total images it activates pagination.</li>
                                <li class="m-0 m-md-2 pt-3"><i class="icon-lock-open text-success m-md-2"></i>data-redman-countPerRow="<span class="text-primary"> ENTER HERE the number of images you want to place per row.</span>"</li>
                                <li class="m-0 m-md-2 pt-3"><i class="icon-lock-open text-success m-md-2"></i>data-redman-startHeight="<span class="text-primary"> ENTER HERE the height of the images.</span>"</li>
                                <li class="m-0 m-md-2 pt-3"><i class="icon-lock  text-danger m-md-2"></i>data-redman-screenwidth="<span class="text-primary"> ENTER HERE the width of your screen while developing</span>" this concerns responsiveness</li>
                                <li class="m-0 m-md-2 pt-3"><i class="icon-options text-dark m-md-2"></i>data-redman-theme="<span class="text-primary"> ENTER HERE dark to change ur pagination buttons to be visible on dark backgrounds.</span>"</li>
                                <li class="m-0 m-md-2 mt-md-5 ml-md-5 pt-3"><i class="icon-wrench m-md-2 mt-2"></i>code excample(this is just an excample, you can use your own variables depending on your needs!): 
                                    <ul class="p-0 p-md-3 font-weight-normal mt-2 ml-md-5">
                                        <li class="pt-2"><i class="icon-lock h6 text-danger m-md-2"></i>class="<span class="text-danger">redman-gallery</span>" (adresses the plugin).</li>
                                        <li class="pt-2"><i class="icon-lock-open h6 text-success m-md-2"></i>data-redman-totalCount = 15 (total images).</li>
                                        <li class="pt-2"><i class="icon-lock-open h6 text-success m-md-2"></i>data-redman-countPerPage = 6 (images per page).</li>
                                        <li class="pt-2"><i class="icon-lock-open h6 text-success m-md-2"></i>data-redman-countPerRow = 3 (images per row).</li>
                                        <li class="pt-2"><i class="icon-lock-open h6 text-success m-md-2"></i>data-redman-startHeight = 250 (images height = 250px).</li>
                                        <li class="pt-2"><i class="icon-lock h6 text-danger m-md-2"></i>data-redman-screenwidth = 1920 (my device's screenwidth while developing).</li>
                                        <li class="pt-2"><i class="icon-options h6 text-dark m-md-2"></i>data-redman-theme = dark  (breadcrumbs and pagination-button colors change).</li>
                                        <li class='mt-2'><small class="text-secondary">image excample:</small><br><img class="img-fluid" src="img/data-attr.jpg" alt="fout"></li>
                                        <li class="mt-2"><i class="icon-lock-open h6 text-success m-md-2"></i>Put all of your images with the correct path inside this div.</li>
                                        <li class='mt-2'><small class="text-secondary">image excample:</small><br><img class="img-fluid" src="img/putting-img.jpg" alt="fout"><br></li>
                                        <li class="mt-2"><i class="icon-lock-open h6 text-success m-md-2"></i><strong>COPY/PASTE empty DIV :</strong><br></li>
                                        <li class='mt-2 bg-lightgrey '>&#x3c;div class="redman-gallery" data-redman-totalCount="" data-redman-countPerPage="" data-redman-countPerRow="" data-redman-startHeight="" data-redman-theme="" data-redman-screenwidth=""&#x3e; &#x3c;/div&#x3e;<br></li>
                                        <li class="mt-2"><i class="icon-lock-open h6 text-success m-md-2"></i><strong>COPY/PASTE empty IMG :</strong><br></li>
                                        <li class='mt-2 bg-lightgrey '>&#x3c;img src="" alt=""&#x3e;</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    <div class="container-fluid pb-5 bg-light">
            <div class='row no-gutters m-auto'>
                <div class="col-12 font-weight-bold">
                    <h3 class=" mt-5 ml-3"><u><strong>Excamples (previews): </strong></u></h3>
                </div>
            </div>
        </div>
    <!--first excample-->
    <div class="container-fluid bg-dark text-white p-0 m-0 pt-5 pb-5">
        <div class="container bg-dark text-white">
            <h2 class="m-2 text-center"><u><strong>Dark Theme</strong></u></h2>
            <div class="row no-gutters m-auto pt-5">
            <!-- first excample gallery-->
                <div class="col-12 order-2 order-md-1 col-md-6 pr-3 pt-5 pt-md-0">


                    <div class="redman-gallery" data-redman-totalCount="16" data-redman-countPerPage="6" data-redman-countPerRow="3" data-redman-startHeight="200" data-redman-theme="dark" data-redman-screenwidth="1920">
                        <img src="img/test1.jpg" alt="wrong path">
                        <img src="img/test2.jpg" alt="wrong path">
                        <img src="img/test3.jpg" alt="wrong path">
                        <img src="img/test4.jpg" alt="wrong path">
                        <img src="img/test5.jpg" alt="wrong path">
                        <img src="img/test6.jpg" alt="wrong path">
                        <img src="img/masthead.jpg" alt="wrong path">
                        <img src="img/test8.jpg" alt="wrong path">
                        <img src="img/test9.jpg" alt="wrong path">
                        <img src="img/test10.jpg" alt="wrong path">
                        <img src="img/test11.jpg" alt="wrong path">
                        <img src="img/test12.jpg" alt="wrong path">
                        <img src="img/test13.jpg" alt="wrong path">
                        <img src="img/test14.jpg" alt="wrong path">
                        <img src="img/test15.jpg" alt="wrong path">
                        <img src="img/test16.jpg" alt="wrong path">
                        <img src="img/test17.jpg" alt="wrong path">
                    </div>

                    
                </div>
                <!--first excample information-->
                <div class="col-12 order-1 order-md-2 col-md-6 font-weight-bold border-bottom border-warning ">
                    <h3 class=" mt-5  h3 text-center"><u><strong><span class="d-none d-md-inline"></span> Check Out the excample <span class="d-none d-md-inline">left!</span><span class=" d-inline d-md-none">below!</span></strong></u></h3>
                    <p class="d-none d-md-block">Here you can see a setup with text on the right and the photogallery on the left.</p>
                    <ul class="mt-5 h5">
                        <li class="m-2"><i class="icon-diamond h6 text-orange m-2"></i>WITH PAGINATION!!</li>
                        <li class="m-2"><i class="icon-diamond h6 text-orange m-2"></i>NEST the photogallery's ANYWHERE YOU WANT!</li>
                        <li class="m-2"><i class="icon-diamond h6 text-orange m-2"></i>Clicking on the image enlarges it with a simple enlarged gallery mode:
                            <ul class="mt-2 h6">
                                <li><i class="icon-like text-success m-2"></i>Including all the images of the gallery and keeps count.</li>
                                <li><i class="icon-like text-success m-2"></i>Includes next picture feature.</li>
                                <li><i class="icon-like text-success m-2"></i>Includes previous picture feature.</li>
                                <li><i class="icon-like text-success m-2"></i>Includes close button to return to website.</li>
                            </ul>
                        </li>
                    </ul>
                    <p class="h3 pb-2 pb-md-5 d-flex justify-content-end"><i class="icon-emotsmile text-orange h4 m-2"></i>Go ahead click on an image and enter the enlarged mode OR browse through the breadcrumbs and see the paginations at work!</p>
                </div>
            </div>
        </div>
    </div>
    <!--2nd excample-->
    <div class="container-fluid bg-light text-dark p-0 m-0 pt-5 pb-5">
        <div class="container">
        <h2 class="m-2 text-center"><u><strong>Default Theme</strong></u></h2>
            <div class='row no-gutters m-auto'>
                <!--2nde excample information-->
                <div class="col-12 col-md-6 font-weight-bold border-bottom border-dark">
                    <h3 class=" mt-5 ml-3 text-center"><u><strong>Check Out the excample <span class="d-none d-md-inline">right!</span><span class=" d-inline d-md-none">below!</span></strong></u></h3>
                    <p class="d-none d-md-block">Here you can see a setup with text on the left and the photogallery on the right.</p>
                    <ul class="mt-5 h5">
                        <li class="m-2"><i class="icon-diamond h6 text-orange m-2"></i>WITHOUT PAGINATION!! (put settings: data-redman-totalCount and data-redman-countPerPage equal to each other)</li>
                        <li class="m-2"><i class="icon-diamond h6 text-orange m-2"></i>NEST the photogallery's ANYWHERE YOU WANT!</li>
                        <li class="m-2"><i class="icon-diamond h6 text-orange m-2"></i>Clicking on the image enlarges it with a simple enlarged gallery mode:
                            <ul class="mt-2 h6">
                                <li><i class="icon-like text-success m-2"></i>Including all the images of the gallery and keeps count.</li>
                                <li><i class="icon-like text-success m-2"></i>Includes next picture feature.</li>
                                <li><i class="icon-like text-success m-2"></i>Includes previous picture feature.</li>
                                <li><i class="icon-like text-success m-2"></i>Includes close button to return to website.</li>
                            </ul>
                        </li>
                    </ul>
                    <p class="h3  pb-2 pb-md-5 d-flex justify-content-end"><i class="icon-emotsmile text-orange h4 m-2"></i>Go ahead click on an image and enter the enlarged mode!</p>
                </div>
                    <!--2nde excample gallery-->
                    <div class="col-12 col-md-6 mt-5">
                        <div class="redman-gallery" data-redman-totalCount="9" data-redman-countPerPage="9" data-redman-countPerRow="3" data-redman-startHeight="200" data-redman-theme="light" data-redman-screenwidth="1920">
                            <img src="img/test18.jpg" alt="fout">
                            <img src="img/test19.jpg" alt="fout">
                            <img src="img/test20.jpg" alt="fout">
                            <img src="img/test21.jpg" alt="fout">
                            <img src="img/test22.jpg" alt="fout">
                            <img src="img/test23.jpg" alt="fout">
                            <img src="img/test24.jpg" alt="fout">
                            <img src="img/test25.jpg" alt="fout">
                            <img src="img/test26.jpg" alt="fout">
                        </div>
                    </div>
                </div>
            </div>
</div>
<section class="container-fluid d-none d-md-block">
<div class="row no-gutters ">
<div class="col-12 ">
<h3 class=" mt-5 ml-3"><u><strong>VIDEO TUTORIAL: </strong></u></h3>
</div>
<div class="col-12 pb-3 pt-3 d-flex justify-content-center">
<iframe width="735" height="600" src="https://www.youtube.com/embed/DEQJp3fCzy0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
</div>
</div>
</section>
<footer>
<div class="m-0 p-0 text-custom text-orange masthead ">
            <div class="overlay p-0 m-0">
            <p class="pb-5 m-0">Made by <a href="https://www.mijnsollicitatie.be" class="text-white">Redouane El-Yakhlifi</a> | v1.0 | nov. 2019 <span class="float-right pr-2">Free to use!</span></p>
            </div>
        </div>
</footer>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="js/redman-photoGallery.js"></script>
    </body>
</html>
