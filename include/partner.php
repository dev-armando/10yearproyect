<section class="section sectionpa">
            <style type="text/css">
            #carousel {
                margin: 0 auto;
            }

            #carousel img {
                border: 0;
            }

            #ui-carousel-next, #ui-carousel-prev {
                width: 60px;
                height: 100px;
                background: url(images/arrow-left.png) #fff center center no-repeat;
                display: block;
                position: absolute;
                top: 0;
                z-index: 100;
            }

            #ui-carousel-next {
                right: 0;
                background-image: url(images/arrow-right.png);
            }

            #ui-carousel-prev {
                left: 0;
            }
            
            #ui-carousel-next > span, #ui-carousel-prev > span {
                display: none;
            }
        </style>
            <div id="container" class=" contenedor">
                <div class="row" style="width: 75%;margin: 0 auto; position: relative;">
<div id="carousel" class="ui-carousel">  
                                <img src="images\cpanel.png" alt="cPanel" >
                                <img src="images\sitelock.png" alt="SiteLock" >
                                <img src="images\plesk.png" alt="plesk" >
                                <img src="images\smartermail.png" alt="SmarterMail" >
                                <img src="images\geotrust.png" alt="GeoTrust" >
                                <img src="images\nerdcompro.png" alt="NerdCom Pro" >
                                <img src="images\pyhex.png" alt="PYHEX Work" >
                                <img src="images\diariolibre.jpg" alt="Diario Libre" >
                                <img src="images\senadord.png" alt="Senado de La República Dominicana" >
                                <img src="images\ministerio.png" alt="Ministerio de INDUSTRIA COMERCIO y MUPYMES" >
                                <img src="images\formalizate.png" alt="Formalizate.gob.do" >
                                <img src="images\logob.png" alt="NerdCom" >
                            </div>
                                        <a href="#" id="ui-carousel-next"><span>next</span></a>
                <a href="#" id="ui-carousel-prev"><span>prev</span></a>
                <div id="pages"></div>
                </div>
            </div>
</section>
        <script type="text/javascript" src="rotar/widget/lib/jquery.ui.core.js"></script>
        <script type="text/javascript" src="rotar/widget/lib/jquery.ui.widget.js"></script>
        <script type="text/javascript" src="rotar/widget/lib/jquery.ui.rcarousel.js"></script>
        <script type="text/javascript">
            jQuery(function($) {
                $( "#carousel ").rcarousel({
                    margin: 10
                });
                
                $( "#ui-carousel-next" )
                    .add( "#ui-carousel-prev" )
                    .hover(
                        function() {
                            $( this ).css( "opacity", 0.7 );
                        },
                        function() {
                            $( this ).css( "opacity", 1.0 );
                        }
                    );                  
            });
        </script>