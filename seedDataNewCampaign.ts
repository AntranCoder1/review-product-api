import * as newCampaignTemplateRepo from "./repositories/newCampaignTemplate.repo";
import config from "./config/config";

//#region new campaigns teamplate
export const newCampaignsTeamplates = [
	{
		name: "View 1",
		image: `${config.apiUrl}uploads/images/template1.png`,
		optIn: `
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Optin Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/60/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/60/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='http://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/60/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/60/img/bg5.jpg') no-repeat top center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #fff;
         font: 700 28px/38px "Montserrat";
         letter-spacing: 2px;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline strong {
         color:#ffcc00;
         }
         .headline2 {
         margin-top:0px;
         color:#fff !important;
         font:400 60px "Roboto Condensed";
         }
         hr {
         border-top: 6px dotted rgba(255,255,255,0.5);
         max-width: 100px;
         margin:30px auto;
         }
         h4 {
         color:#444;
         }
         h4.yellow {
         font:700 28px "Montserrat";
         color:rgb(255, 227, 0);
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 400 60px/1.2 "Roboto Condensed";
         color:#fff;
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: rgb(225, 21, 21) !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         font-size: 20px;
         border-radius: 40px;
         }
         .footer {
         background:#333;
         color:#fff;
         padding:150px 0 40px;
         margin-top:-40px;
         }
         input {
         color:#333;
         }
         .section.gray input {
         border:1px solid rgba(0,0,0,0.2);
         }
         .top-bar {
         background:rgb(23, 56, 88);
         color:#fff;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:30px;
         color:#333;
         background:#fff;
         margin-top:90px;
         text-align: center;
         border-radius:30px;
         }
         .step h2 {
         color: #333 !important;
         margin-bottom: 20px;
         font-size: 22px;
         font-family:"Roboto Condensed";
         margin-top: 0;
         }
         .step h2 strong {
         font-size:30px;
         }
         .step img {
         margin-bottom:15px;
         margin-top: -100px;
         }
         .step hr {
         border-color:rgb(225, 21, 21);
         }
         #counter span {
         font:700 40px "Montserrat";
         border-radius:50%;
         min-width:120px;
         min-height:120px;
         display:inline-block;
         padding-top:22px;
         color:#fff !important;
         background:transparent !important;
         border:4px solid #fff !important;
         }
         #counter {
         text-align: center;
         }
         #counter span p {
         color:rgba(255,255,255,0.5);
         text-transform: uppercase;
         font-size:12px;
         }
         .section.gray .yellow {
         color:rgb(225, 21, 21) !important
         }
         .section.gray .submit.btn {
         text-transform: none;
         font-size: 30px;
         padding: 25px 40px 16px !important;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-md-8 col-xs-12 left">
                     <h3><span style="font-size: 18px; color: #ffe300;">FREE BOOK + WORKSHOP!</span><br /> REGISTER FOR THE FREE Masterclass <br />AND CLAIM YOUR FREE GIFT</h3>
                     <hr />
                     <h1 class="headline" style="position: relative;">The <span style="text-decoration: underline;">Ultimate</span> 'On-Demand' Sales Generating System!</h1>
                     <h4 style="color: rgba(255,255,255,0.5);">Claim your free gift by registering for this ONE-OFF live training workshop! <br />Just enter your email address to secure your spot now...</h4>
                     <hr />
                     <h4 class="yellow">ONLY 300 SPOTS AVAILABLE</h4>
                     <form>
                        <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                        <a href="https://bigticketcommissions.info/user/%link%">
                           <div class="submit btn">Click Here - Save Your FREE SEAT &amp; Download Gift! <strong>&raquo;</strong></div>
                        </a>
                     </form>
                     <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div>
                  <br /><br /><br /><br /><br />
                  <h2 class="headline2">How To Claim Your Free Gift...</h2>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/60/img/step21.png" class="img-responsive center-block" />
                        <h2><strong>Step 1</strong><br />Register For The Free Workshop!</h2>
                        <hr />
                        Take advantage of the FREE training we have put together for you!
                     </div>
                  </div>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/60/img/step22.png" class="img-responsive center-block" />
                        <h2><strong>Step 2</strong><br />Show Up For The Webinar!</h2>
                        <hr />
                        Make sure you&rsquo;re ready to take some AWESOME notes during the workshop!
                     </div>
                  </div>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/60/img/step23.png" class="img-responsive center-block" />
                        <h2><strong>Step 3</strong><br />On The LIVE Webinar - Receive Your Free Gift!</h2>
                        <hr />
                        You must show up to the Workshop to receive your Free Gift!
                     </div>
                  </div>
                  <div class="clearfix"></div>
                  <br /><br />
               </div>
            </div>
         </div>
         <div class="section gray" style="margin-top: -200px; padding-top: 125px;">
            <div class="container">
               <div class="col-md-9 col-xs-12 center-block left">
                  <h4 class="yellow" style="font-size: 22px; text-transform: uppercase;">Claim your free gift by registering for this ONE-OFF live training workshop!</h4>
                  <h4 style="color: #333; font-size: 20px;">Just Enter Your Email Address To Secure Your Spot Now!</h4>
                  <form>
                     <input type="text" placeholder="Your Email Address Here..." name="email" class="field" /> 
                     <a href="https://bigticketcommissions.info/user/%link%">
                        <div class="submit btn">Save Your Free Seat &amp; Get Your Free Book <strong>&raquo;</strong><br /> <small style="color: rgba(255,255,255,0.6);">When You Attend The Workshop Live! </small></div>
                     </a>
                  </form>
                  <div class="clearfix"></div>
               </div>
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script>// <![CDATA[
         // Set the date we're counting down to
         var countDownDate = new Date("%cddate1%").getTime();
         
         // Update the count down every 1 second
         var x = setInterval(function() {
         // Get todays date and time
         var now = new Date().getTime();
         
         // Find the distance between now an the count down date
         var distance = countDownDate - now;
         
         // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
         // Display the result in the element with id="demo"
         document.getElementById("counter").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
           document.getElementById("counter2").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
         
         // If the count down is finished, write some text
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter").innerHTML = "EXPIRED";
         }
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter2").innerHTML = "EXPIRED";
         }
         
         }, 1000);
         // ]]>
      </script>
   </body>
</html>`,
		webinar: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Webinar Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/60/css/bootstrap.min.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/60/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/60/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='https://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/60/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/60/img/bg7.jpg') no-repeat top center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .timer-section h3 strong {
         color: #fff;
         }
         .dark .section.timer-section {
         background: url('https://bigticketcommissions.info/upload/tpl/60/img/bg6.jpg') no-repeat center center !important;
         background-size: cover;
         padding-bottom:45px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #333;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color:#333;
         font-weight: 600;
         font-size: 60px;
         margin:0px auto 40px !important;
         }
         .overflow h2 {
         color:#fff;
         }
         .overflow h1.headline strong {
         }
         .submit {
         background: rgb(0, 102, 255) !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 300 40px/1 "Montserrat";
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: rgb(0, 102, 255) !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .timer-section h2 {
         font-size: 55px;
         }
         .footer {
         background:rgb(39, 39, 39);
         color:#fff;
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background:rgb(23, 56, 88);
         color:#fff;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:20px;
         background:#fff;
         text-align: center;
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         .timer-section .submit {
         padding: 25px 35px 30px !important;
         margin:25px auto !important;
         font-size:45px !important;
         }
         .dark .embed-container {
         border: 0;
         margin-top:0 !important;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <h1 class="headline">The Ultimate <span style="color: #0066ff !important;">'On-Demand'</span> Sales Generating System!</h1>
                     <div class="col-md-9 col-sm-11 col-xs-12 center-block">
                        <div class="embed-container"><iframe width="560" height="315" id="signup" src="https://www.youtube.com/embed/y83x7MgzWOA?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" allowfullscreen="allowfullscreen" frameborder="0"></iframe></div>
                     </div>
                  </div>
                  <div class="clearfix"></div>
               </div>
            </div>
         </div>
      </div>
      <div class="section timer-section">
         <div class="container">
            <br />
            <div class="col-md-10 col-xs-12 center-block">
               <h2 style="font-weight: bold;">Extremely Limited Time Offer!</h2>
               <h3>100% Money Back Guarantee. Only 100 spots available. This WILL sell out fast.</h3>
               <a href="https://bigticketcommissions.info/user/%link%">
                  <div class="submit btn">YES, I DESERVE THIS! <strong>&raquo;</strong></div>
               </a>
               <div class="clearfix"></div>
               <div class="col-md-6 col-xs-12"><img src="https://bigticketcommissions.info/upload/tpl/60/img/guarantee.webp" class="img-responsive center-block" style="max-width: 60%;" /></div>
               <div class="col-md-6 col-xs-12">
                  <h3><strong>Secure Order Form</strong></h3>
                  <img src="https://bigticketcommissions.info/upload/tpl/60/img/cards.png" class="img-responsive center-block" style="max-width: 80%;" />
               </div>
               <br /><br /><br />
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>
		`,
		download: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Download Page</title>
      <link
         href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
         rel="stylesheet"
         />
      <link href="https://bigticketcommissions.info/upload/tpl/60/css/style.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/60/css/font-awesome.min.css" rel="stylesheet" />
      <link
         href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Lato:400,700,300,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Shadows+Into+Light"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700"
         rel="stylesheet"
         />
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <style>
         .video-wrapper .overflow {
         width: 100%;
         padding-bottom: 26px;
         background-image: url('https://bigticketcommissions.info/upload/tpl/60/img/newbg.jpg');
         background-repeat: no-repeat;
         background-size: cover;
         z-index: 2;
         height: 420px;
         background-position-y: -40px;
         }
         @media (max-width: 991px) {
         .video-wrapper h1 {
         margin-top: 10px !important;
         }
         }
      </style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
   </head>
   <body>
      <div class="video-wrapper">
         <div class="overflow">
            <div class="container">
               <div class="col-md-12">
                  <h1 style="position: relative; margin-top: 60px;" class="headline text-center"><strong>Thank You For Attending The Workshop</strong></h1>
               </div>
            </div>
         </div>
      </div>
      <div class="section">
         <div class="container">
            <h2 class="headline2">DOWNLOAD YOUR <b style="color: #ee513e;">BONUSES BELOW</b></h2>
         </div>
      </div>
      <!--begin_block-->
      <div class="section">
         <div class="container">
            <div class="col-md-5 col-xs-12 text-center">%cover%</div>
            <div class="col-md-7 col-xs-12">
               <h2 class="headline2">%title%</h2>
               <p>%summary%</p>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%download%</div>
               <div class="clearfix"></div>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%license%</div>
            </div>
            <div class="clearfix"></div>
            <div><br /><br /></div>
         </div>
      </div>
      <!--end_block-->
      <div class="footer row">
         <div class="footer-wrap container">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <div class="pull-left">Copyright &copy; Yoursite.com. All rights reserved.</div>
            </div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>
		`,
	},
	{
		name: "View 2",
		image: `${config.apiUrl}uploads/images/template2.png`,
		optIn: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Optin Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/61/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/61/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='http://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/61/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/61/img/bg5-2.jpg') no-repeat top center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #fff;
         font: 700 28px/38px "Montserrat";
         letter-spacing: 2px;
         }
         .filled-headline {
         background:rgb(244, 48, 48);
         color:#333;
         }
         .overflow h1.headline strong {
         color:#ffcc00;
         }
         .headline2 {
         margin-top:0px;
         color:#fff !important;
         font:400 60px "Roboto Condensed";
         }
         hr {
         border-top: 6px dotted rgba(255,255,255,0.5);
         max-width: 100px;
         margin:30px auto;
         }
         h4 {
         color:#444;
         }
         h4.yellow {
         font:700 28px "Montserrat";
         color:rgb(244, 48, 48);
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 400 60px/1.2 "Roboto Condensed";
         color:#fff;
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: rgb(232, 178, 6) !important;
         border: 0 !important;
         color: #242424;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         font-size: 20px;
         border-radius: 40px;
         }
         .footer {
         background:#333;
         color:#fff;
         padding:150px 0 40px;
         margin-top:-40px;
         }
         input {
         color:#333;
         }
         .section.gray input {
         border:1px solid rgba(0,0,0,0.2);
         }
         .top-bar {
         background:rgb(23, 56, 88);
         color:#fff;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(244, 48, 48);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:30px;
         color:#333;
         background:#fff;
         margin-top:90px;
         text-align: center;
         border-radius:30px;
         }
         .step h2 {
         color: #333 !important;
         margin-bottom: 20px;
         font-size: 22px;
         font-family:"Roboto Condensed";
         margin-top: 0;
         }
         .step h2 strong {
         font-size:30px;
         }
         .step img {
         margin-bottom:15px;
         margin-top: -100px;
         }
         .step hr {
         border-color:rgb(225, 21, 21);
         }
         #counter span {
         font:700 40px "Montserrat";
         border-radius:50%;
         min-width:120px;
         min-height:120px;
         display:inline-block;
         padding-top:22px;
         color:#fff !important;
         background:transparent !important;
         border:4px solid #fff !important;
         }
         #counter {
         text-align: center;
         }
         #counter span p {
         color:rgba(255,255,255,0.5);
         text-transform: uppercase;
         font-size:12px;
         }
         .section.gray .yellow {
         color:rgb(225, 21, 21) !important
         }
         .section.gray .submit.btn {
         text-transform: none;
         font-size: 30px;
         padding: 25px 40px 16px !important;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-md-8 col-xs-12 left pull-right">
                     <h3><span style="font-size: 18px; color: #f43030;">FREE BOOK + WORKSHOP!</span><br /> REGISTER FOR THE FREE Masterclass <br />AND CLAIM YOUR FREE GIFT</h3>
                     <hr />
                     <h1 class="headline" style="position: relative;">The <span style="text-decoration: underline;">Ultimate</span> 'On-Demand' Sales Generating System!</h1>
                     <h4 style="color: rgba(255,255,255,0.5);">Claim your free gift by registering for this ONE-OFF live training workshop! <br />Just enter your email address to secure your spot now...</h4>
                     <hr />
                     <h4 class="yellow">ONLY 300 SPOTS AVAILABLE</h4>
                     <form>
                        <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                        <a href="https://bigticketcommissions.info/user/%link%">
                           <div class="submit btn">Click Here - Save Your FREE SEAT &amp; Download Gift! <strong>&raquo;</strong></div>
                        </a>
                     </form>
                     <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div>
                  <br /><br /><br /><br /><br />
                  <h2 class="headline2">How To Claim Your Free Gift...</h2>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/61/img/step21.png" class="img-responsive center-block" />
                        <h2><strong>Step 1</strong><br />Register For The Free Workshop!</h2>
                        <hr />
                        Take advantage of the FREE training we have put together for you!
                     </div>
                  </div>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/61/img/step22.png" class="img-responsive center-block" />
                        <h2><strong>Step 2</strong><br />Show Up For The Webinar!</h2>
                        <hr />
                        Make sure you&rsquo;re ready to take some AWESOME notes during the workshop!
                     </div>
                  </div>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/61/img/step23.png" class="img-responsive center-block" />
                        <h2><strong>Step 3</strong><br />On The LIVE Webinar - Receive Your Free Gift!</h2>
                        <hr />
                        You must show up to the Workshop to receive your Free Gift!
                     </div>
                  </div>
                  <div class="clearfix"></div>
                  <br /><br />
               </div>
            </div>
         </div>
         <div class="section gray" style="margin-top: -200px; padding-top: 125px;">
            <div class="container">
               <div class="col-md-9 col-xs-12 center-block left">
                  <h4 class="yellow" style="font-size: 22px; text-transform: uppercase;">Claim your free gift by registering for this ONE-OFF live training workshop!</h4>
                  <h4 style="color: #333; font-size: 20px;">Just Enter Your Email Address To Secure Your Spot Now!</h4>
                  <form>
                     <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                     <a href="https://bigticketcommissions.info/user/%link%">
                        <div class="submit btn">Save Your Free Seat &amp; Get Your Free Book <strong>&raquo;</strong><br /> <small style="color: rgba(255,255,255,0.6);">When You Attend The Workshop Live! </small></div>
                     </a>
                  </form>
                  <div class="clearfix"></div>
               </div>
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script>// <![CDATA[
         // Set the date we're counting down to
         var countDownDate = new Date("%cddate1%").getTime();
         
         // Update the count down every 1 second
         var x = setInterval(function() {
         // Get todays date and time
         var now = new Date().getTime();
         
         // Find the distance between now an the count down date
         var distance = countDownDate - now;
         
         // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
         // Display the result in the element with id="demo"
         document.getElementById("counter").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
           document.getElementById("counter2").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
         
         // If the count down is finished, write some text
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter").innerHTML = "EXPIRED";
         }
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter2").innerHTML = "EXPIRED";
         }
         
         }, 1000);
         // ]]>
      </script>
   </body>
</html>`,
		webinar: `<!DOCTYPE html>
		<html lang="en">
			 <head>
					<meta charset="utf-8">
					<meta http-equiv="X-UA-Compatible" content="IE=edge">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<title>Done For You Funnel - Webinar Page</title>
					<!-- Bootstrap -->
					<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
					<link href="https://bigticketcommissions.info/upload/tpl/61/css/bootstrap.min.css" rel="stylesheet">
					<link href="https://bigticketcommissions.info/upload/tpl/61/css/style.css" rel="stylesheet">
					<link href="https://bigticketcommissions.info/upload/tpl/61/css/font-awesome.min.css" rel="stylesheet">
					<link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
					<link href='https://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
					<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
					<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
					<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
					<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
					<!--[if lt IE 9]>
					<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
					<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
					<![endif]-->
					<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
					<!-- ClickBank Trust Badge -->
					<style>
						 .list2 li {
						 font-size: 21px;
						 background-image: url(https://bigticketcommissions.info/upload/tpl/61/img/check.png);
						 background-size: 20px;
						 background-position: left center;
						 }
						 .dark .video-wrapper .overflow  {
						 background: #fff;
						 background-size:cover;
						 color:#fff;
						 padding: 40px 0 60px;
						 }
						 .timer-section h3 strong {
						 color: #fff;
						 }
						 .dark .section.timer-section {
						 background: url('https://bigticketcommissions.info/upload/tpl/61/img/bg6.jpg') no-repeat center center !important;
						 background-size: cover;
						 padding-bottom:45px;
						 }
						 .list2 {
						 margin-top:30px;
						 }
						 .dark .video-wrapper h3 {
						 color: #333;
						 }
						 .filled-headline {
						 background:rgb(255, 227, 0);
						 color:#333;
						 }
						 .overflow h1.headline {
						 color:#333;
						 font-weight: 600;
						 font-size: 60px;
						 margin:0px auto 40px !important;
						 }
						 .overflow h2 {
						 color:#fff;
						 }
						 .overflow h1.headline strong {
						 }
						 .submit {
						 background: rgb(102, 153, 19) !important;
						 border: 0 !important;
						 color: #fff;
						 font-family:"Roboto Condensed";
						 text-shadow: none;
						 }
						 .submit:hover {
						 background:#fff !important;
						 color:#333 !important;
						 }
						 .submit small {
						 color:#fff;
						 }
						 #counter span {
						 box-shadow:0 0 10px rgba(0,0,0,0.2);
						 }
						 .submit:hover small { color:#333 !important;}
						 h1.headline {
						 font: 300 40px/1 "Montserrat";
						 }
						 .field {
						 padding: 14px 20px;
						 border-radius: 10px;
						 border: 0;
						 width: 100%;
						 margin: 10px auto;
						 text-align: center;
						 }
						 .submit {
						 background: rgb(102, 153, 19) !important;
						 border: 0 !important;
						 color: #fff;
						 text-shadow: none;
						 white-space: normal;
						 padding: 15px 35px 20px !important;
						 }
						 .timer-section h2 {
						 font-size: 55px;
						 }
						 .footer {
						 background:#fff;
						 color:#333;
						 padding:40px 0;
						 }
						 input {
						 color:#333;
						 }
						 .top-bar {
						 background:rgb(23, 56, 88);
						 color:#fff;
						 padding:30px 0;
						 border-bottom:5px solid rgb(58, 105, 152);
						 }
						 .top-bar h1 {
						 font:700 62px "Montserrat";
						 color:#fff;
						 margin:0 auto !important;
						 }
						 .top-bar h3 {
						 margin:0 auto;
						 color:rgb(255, 227, 0);
						 font-size:25px;
						 }
						 .dark .section.gray {
						 background:rgb(231, 231, 231) !important;
						 }
						 .step {
						 padding:20px;
						 background:#fff;
						 text-align: center;
						 }
						 .dark .section .step h2 {
						 color: #333 !important;
						 font-weight: bold;
						 margin-bottom: 20px;
						 font-size: 25px;
						 margin-top: 0;
						 }
						 .step img {
						 margin-bottom:15px;
						 }
						 .timer-section .submit {
						 padding: 30px 35px 30px !important;
						 margin:25px auto !important;
						 font-size:45px !important;
						 }
						 .dark .embed-container {
						 border: 0;
						 margin-top:0 !important;
						 }
					</style>
			 </head>
			 <body class="dark">
					<div class="wrapper" id="home">
						 <div class="video-wrapper">
								<div class="overflow">
									 <div class="container">
											<div class="col-lg-12 col-md-12 left">
												 <h1 class="headline">The Ultimate <span style="color: #669913 !important;">'On-Demand'</span> Sales Generating System!</h1>
												 <div class="col-md-9 col-sm-11 col-xs-12 center-block">
														<div class="embed-container"><iframe width="560" height="315" id="signup" src="https://www.youtube.com/embed/y83x7MgzWOA?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" allowfullscreen="allowfullscreen" frameborder="0"></iframe></div>
												 </div>
											</div>
											<div class="clearfix"></div>
									 </div>
								</div>
						 </div>
					</div>
					<div class="section timer-section">
						 <div class="container">
								<br />
								<div class="col-md-10 col-xs-12 center-block">
									 <h2 style="font-weight: bold;">Extremely Limited Time Offer!</h2>
									 <h3>100% Money Back Guarantee. Only 100 spots available. This WILL sell out fast.</h3>
									 <a href="https://bigticketcommissions.info/user/%link%">
											<div class="submit btn">YES, I DESERVE THIS! <strong>&raquo;</strong></div>
									 </a>
									 <div class="clearfix"></div>
									 <div class="col-md-6 col-xs-12"><img src="https://bigticketcommissions.info/upload/tpl/61/img/guarantee.webp" class="img-responsive center-block" style="max-width: 60%;" /></div>
									 <div class="col-md-6 col-xs-12">
											<h3><strong>Secure Order Form</strong></h3>
											<img src="https://bigticketcommissions.info/upload/tpl/61/img/cards.png" class="img-responsive center-block" style="max-width: 80%;" />
									 </div>
									 <br /><br /><br />
								</div>
						 </div>
					</div>
					<div class="footer row">
						 <br />
						 <div style="font-size: 12px; text-align: center;">
								<div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
						 </div>
					</div>
					<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
			 </body>
		</html>`,
		download: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Download Page</title>
      <link
         href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
         rel="stylesheet"
         />
      <link href="https://bigticketcommissions.info/upload/tpl/61/css/style.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/61/css/font-awesome.min.css" rel="stylesheet" />
      <link
         href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Lato:400,700,300,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Shadows+Into+Light"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700"
         rel="stylesheet"
         />
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <style>
         .video-wrapper .overflow {
         width: 100%;
         padding-bottom: 26px;
         background-image: url('https://bigticketcommissions.info/upload/tpl/61/img/newbg.jpg');
         background-repeat: no-repeat;
         background-size: cover;
         z-index: 2;
         height: 420px;
         background-position-y: -40px;
         }
         @media (max-width: 991px) {
         .video-wrapper h1 {
         margin-top: 10px !important;
         }
         }
      </style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
   </head>
   <body>
      <div class="video-wrapper">
         <div class="overflow">
            <div class="container">
               <div class="col-md-12">
                  <h1 style="position: relative; margin-top: 60px;" class="headline text-center"><strong>Thank You For Attending The Workshop</strong></h1>
               </div>
            </div>
         </div>
      </div>
      <div class="section">
         <div class="container">
            <h2 class="headline2">DOWNLOAD YOUR <b style="color: #ee513e;">BONUSES BELOW</b></h2>
         </div>
      </div>
      <!--begin_block-->
      <div class="section">
         <div class="container">
            <div class="col-md-5 col-xs-12 text-center">%cover%</div>
            <div class="col-md-7 col-xs-12">
               <h2 class="headline2">%title%</h2>
               <p>%summary%</p>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%download%</div>
               <div class="clearfix"></div>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%license%</div>
            </div>
            <div class="clearfix"></div>
            <div><br /><br /></div>
         </div>
      </div>
      <!--end_block-->
      <div class="footer row">
         <div class="footer-wrap container">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <div class="pull-left">Copyright &copy; Yoursite.com. All rights reserved.</div>
            </div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>`,
	},
	{
		name: "View 3",
		image: `${config.apiUrl}uploads/images/template3.png`,
		optIn: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Optin Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/62/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/62/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='http://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/62/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/62/img/bg5-3.jpg') no-repeat top center;
         background-size:cover;
         color:#313131;
         padding: 40px 0 60px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #313131;
         font: 700 28px/38px "Montserrat";
         letter-spacing: 2px;
         }
         .filled-headline {
         background:rgb(139, 176, 19);
         color:#333;
         }
         .overflow h1.headline strong {
         color:#ffcc00;
         }
         .headline2 {
         margin-top:0px;
         color:#333 !important;
         font:400 60px "Roboto Condensed";
         }
         hr {
         border-top: 6px dotted rgba(0,0,0,0.2);
         max-width: 100px;
         margin:30px auto;
         }
         h4 {
         color:#444;
         }
         h4.yellow {
         font:700 28px "Montserrat";
         color:rgb(139, 176, 19);
         }
         .submit:hover {
         background:#333 !important;
         color:#fff !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#fff !important;}
         h1.headline {
         font: 400 60px/1.2 "Roboto Condensed";
         color:#fff;
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         border:1px solid rgba(0,0,0,0.2);
         }
         .submit {
         background: rgb(225, 21, 21) !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         font-size: 20px;
         border-radius: 40px;
         }
         .footer {
         background:#333;
         color:#fff;
         padding:150px 0 40px;
         margin-top:-40px;
         }
         input {
         color:#333;
         }
         .section.gray input {
         border:1px solid rgba(0,0,0,0.2);
         }
         .top-bar {
         background:rgb(23, 56, 88);
         color:#313131;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(139, 176, 19);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding: 30px;
         color: #fff;
         background: #282828;
         margin-top: 90px;
         text-align: center;
         border-radius: 30px;
         }
         .step h2 {
         color: #fff !important;
         margin-bottom: 20px;
         font-size: 22px;
         font-family:"Roboto Condensed";
         margin-top: 0;
         }
         .step h2 strong {
         font-size:30px;
         }
         .step img {
         margin-bottom:15px;
         margin-top: -100px;
         }
         .step hr {
         border-color:rgb(225, 21, 21);
         }
         #counter span {
         font:700 40px "Montserrat";
         border-radius:50%;
         min-width:120px;
         min-height:120px;
         display:inline-block;
         padding-top:22px;
         color:#fff !important;
         background:transparent !important;
         border:4px solid #fff !important;
         }
         #counter {
         text-align: center;
         }
         #counter span p {
         color:rgba(255,255,255,0.5);
         text-transform: uppercase;
         font-size:12px;
         }
         .section.gray .yellow {
         color:rgb(225, 21, 21) !important
         }
         .section.gray .submit.btn {
         text-transform: none;
         font-size: 30px;
         padding: 25px 40px 16px !important;
         }
         .overflow h1.headline {
         color:#313131;
         font-family:"Montserrat" !important;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-md-8 col-xs-12 left">
                     <h3><span style="font-size: 18px; color: #8bb013;">FREE BOOK + WORKSHOP!</span><br /> REGISTER FOR THE FREE Masterclass <br />AND CLAIM YOUR FREE GIFT</h3>
                     <hr />
                     <h1 class="headline" style="position: relative;">The <span style="text-decoration: underline;">Ultimate</span> 'On-Demand' Sales Generating System!</h1>
                     <h4 style="color: rgba(0,0,0,0.5);">Claim your free gift by registering for this ONE-OFF live training workshop! <br />Just enter your email address to secure your spot now...</h4>
                     <hr />
                     <h4 class="yellow">ONLY 300 SPOTS AVAILABLE</h4>
                     <form>
                        <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                        <a href="https://bigticketcommissions.info/user/%link%">
                           <div class="submit btn">Click Here - Save Your FREE SEAT &amp; Download Gift! <strong>&raquo;</strong></div>
                        </a>
                     </form>
                     <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div>
                  <br /><br /><br /><br /><br />
                  <h2 class="headline2">How To Claim Your Free Gift...</h2>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/62/img/step21.png" class="img-responsive center-block" />
                        <h2><strong>Step 1</strong><br />Register For The Free Workshop!</h2>
                        <hr />
                        Take advantage of the FREE training we have put together for you!
                     </div>
                  </div>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/62/img/step22.png" class="img-responsive center-block" />
                        <h2><strong>Step 2</strong><br />Show Up For The Webinar!</h2>
                        <hr />
                        Make sure you&rsquo;re ready to take some AWESOME notes during the workshop!
                     </div>
                  </div>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/62/img/step23.png" class="img-responsive center-block" />
                        <h2><strong>Step 3</strong><br />On The LIVE Webinar - Receive Your Free Gift!</h2>
                        <hr />
                        You must show up to the Workshop to receive your Free Gift!
                     </div>
                  </div>
                  <div class="clearfix"></div>
                  <br /><br />
               </div>
            </div>
         </div>
         <div class="section gray" style="margin-top: -200px; padding-top: 125px;">
            <div class="container">
               <div class="col-md-9 col-xs-12 center-block left">
                  <h4 class="yellow" style="font-size: 22px; text-transform: uppercase;">Claim your free gift by registering for this ONE-OFF live training workshop!</h4>
                  <h4 style="color: #333; font-size: 20px;">Just Enter Your Email Address To Secure Your Spot Now!</h4>
                  <form>
                     <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                     <a href="https://bigticketcommissions.info/user/%link%">
                        <div class="submit btn">Save Your Free Seat &amp; Get Your Free Book <strong>&raquo;</strong><br /> <small style="color: rgba(255,255,255,0.6);">When You Attend The Workshop Live! </small></div>
                     </a>
                  </form>
                  <div class="clearfix"></div>
               </div>
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script>// <![CDATA[
         // Set the date we're counting down to
         var countDownDate = new Date("%cddate1%").getTime();
         
         // Update the count down every 1 second
         var x = setInterval(function() {
         // Get todays date and time
         var now = new Date().getTime();
         
         // Find the distance between now an the count down date
         var distance = countDownDate - now;
         
         // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
         // Display the result in the element with id="demo"
         document.getElementById("counter").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
           document.getElementById("counter2").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
         
         // If the count down is finished, write some text
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter").innerHTML = "EXPIRED";
         }
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter2").innerHTML = "EXPIRED";
         }
         
         }, 1000);
         // ]]>
      </script>
   </body>
</html>
		`,
		webinar: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Webinar Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/62/css/bootstrap.min.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/62/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/62/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='https://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/62/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #fff;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .timer-section h3 strong {
         color: #fff;
         }
         .dark .section.timer-section {
         background: url('https://bigticketcommissions.info/upload/tpl/62/img/bg6.jpg') no-repeat center center !important;
         background-size: cover;
         padding-bottom:45px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #333;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color:#333;
         font-weight: 600;
         font-size: 60px;
         margin:0px auto 40px !important;
         }
         .overflow h2 {
         color:#fff;
         }
         .overflow h1.headline strong {
         }
         .submit {
         background: #d92e19 !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 300 40px/1 "Roboto Condensed";
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: #d92e19 !important;
         border: 0 !important;
         color: #fff;
         font-family:"Roboto Condensed";
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .timer-section h2 {
         font-size: 55px;
         }
         .footer {
         background:rgb(39, 39, 39);
         color:#fff;
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background:rgb(23, 56, 88);
         color:#fff;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:20px;
         background:#fff;
         text-align: center;
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         .timer-section .submit {
         padding: 30px 35px 30px !important;
         margin:25px auto !important;
         font-size:45px !important;
         }
         .dark .embed-container {
         border: 0;
         margin-top:0 !important;
         }
         .timer-section h2 {
         font-family:"Roboto Condensed";
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <h1 class="headline">The Ultimate <span style="color: #d92e19 !important;">'On-Demand'</span> <br />Sales Generating System!</h1>
                     <div class="col-md-9 col-sm-11 col-xs-12 center-block">
                        <div class="embed-container"><iframe width="560" height="315" id="signup" src="https://www.youtube.com/embed/y83x7MgzWOA?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" allowfullscreen="allowfullscreen" frameborder="0"></iframe></div>
                     </div>
                  </div>
                  <div class="clearfix"></div>
               </div>
            </div>
         </div>
      </div>
      <div class="section timer-section">
         <div class="container">
            <br />
            <div class="col-md-10 col-xs-12 center-block">
               <h2 style="font-weight: bold;">Extremely Limited Time Offer!</h2>
               <h3>100% Money Back Guarantee. Only 100 spots available. This WILL sell out fast.</h3>
               <a href="https://bigticketcommissions.info/user/%link%">
                  <div class="submit btn">YES, I DESERVE THIS! <strong>&raquo;</strong></div>
               </a>
               <div class="clearfix"></div>
               <div class="col-md-6 col-xs-12"><img src="https://bigticketcommissions.info/upload/tpl/62/img/guarantee.webp" class="img-responsive center-block" style="max-width: 60%;" /></div>
               <div class="col-md-6 col-xs-12">
                  <h3><strong>Secure Order Form</strong></h3>
                  <img src="https://bigticketcommissions.info/upload/tpl/62/img/cards.png" class="img-responsive center-block" style="max-width: 80%;" />
               </div>
               <br /><br /><br />
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>
		`,
		download: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Download Page</title>
      <link
         href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
         rel="stylesheet"
         />
      <link href="https://bigticketcommissions.info/upload/tpl/62/css/style.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/62/css/font-awesome.min.css" rel="stylesheet" />
      <link
         href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Lato:400,700,300,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Shadows+Into+Light"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700"
         rel="stylesheet"
         />
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <style>
         .video-wrapper .overflow {
         width: 100%;
         padding-bottom: 26px;
         background-image: url('https://bigticketcommissions.info/upload/tpl/62/img/newbg.jpg');
         background-repeat: no-repeat;
         background-size: cover;
         z-index: 2;
         height: 420px;
         background-position-y: -40px;
         }
         @media (max-width: 991px) {
         .video-wrapper h1 {
         margin-top: 10px !important;
         }
         }
      </style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
   </head>
   <body>
      <div class="video-wrapper">
         <div class="overflow">
            <div class="container">
               <div class="col-md-12">
                  <h1 style="position: relative; margin-top: 60px;" class="headline text-center"><strong>Thank You For Attending The Workshop</strong></h1>
               </div>
            </div>
         </div>
      </div>
      <div class="section">
         <div class="container">
            <h2 class="headline2">DOWNLOAD YOUR <b style="color: #ee513e;">BONUSES BELOW</b></h2>
         </div>
      </div>
      <!--begin_block-->
      <div class="section">
         <div class="container">
            <div class="col-md-5 col-xs-12 text-center">%cover%</div>
            <div class="col-md-7 col-xs-12">
               <h2 class="headline2">%title%</h2>
               <p>%summary%</p>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%download%</div>
               <div class="clearfix"></div>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%license%</div>
            </div>
            <div class="clearfix"></div>
            <div><br /><br /></div>
         </div>
      </div>
      <!--end_block-->
      <div class="footer row">
         <div class="footer-wrap container">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <div class="pull-left">Copyright &copy; Yoursite.com. All rights reserved.</div>
            </div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>
		`,
	},
	{
		name: "View 4",
		image: `${config.apiUrl}uploads/images/template4.png`,
		optIn: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Optin Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/63/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/63/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='http://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/63/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/63/img/bg2.jpg') no-repeat top center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #333;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color: #fff;
         font-weight: 600;
         font-size: 36px;
         }
         .overflow h2 {
         color:#fff;
         }
         .overflow h1.headline strong {
         color:#ffcc00;
         }
         .submit {
         background: rgb(255, 126, 0) !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 300 40px/1 "Montserrat";
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: rgb(255, 126, 0) !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .footer {
         background:rgb(23, 56, 88);
         color:#fff;
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background:rgb(23, 56, 88);
         color:#fff;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:20px;
         background:#fff;
         text-align: center;
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
      </style>
   </head>
   <body class="dark">
      <div class="top-bar">
         <div class="container">
            <h3>- Exclusive Masterclass -</h3>
            <h1 class="headline" style="position: relative;">FREE Book + Workshop</h1>
            <h3>The Ultimate 'On-Demand' Sales Generating System!</h3>
         </div>
      </div>
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <div class="col-md-6 col-xs-12"><br /><img src="https://bigticketcommissions.info/upload/tpl/63/img/laptop.png" class="img-responsive center-block" /></div>
                     <div class="col-md-6 col-xs-12">
                        <h2>During The Workshop, You&rsquo;ll Learn:</h2>
                        <ul class="list2">
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                        </ul>
                        <form>
                           <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                           <a href="https://bigticketcommissions.info/user/%link%">
                              <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
                           </a>
                        </form>
                        <center><strong>** LIMITED AVAILABILITY</strong> - 200 SEATS WILL FILL FAST! **</center>
                     </div>
                     <div class="clearfix"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="section gray" style="padding-bottom: 40px;">
         <div class="container">
            <h2 class="headline2" style="color: #333 !important; font-size: 50px;">HOW TO CLAIM YOUR <b style="color: #ee513e;">FREE BOOK?</b></h2>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 1: Register For The Free Workshop!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/63/img/step1.jpg" class="img-responsive center-block" /> Take advantage of the FREE workshop. <br /><br /> You'll be learning some incredible things, so be ready with your notepad! <br /><br /> Don&rsquo;t miss this opportunity!<br /><br />
               </div>
            </div>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 2: Show Up For The Webinar!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/63/img/step2.jpg" class="img-responsive center-block" /> After you register... <br /><br /> Make sure you&rsquo;re ready to take some AWESOME notes during the workshop! <br /><br /> Don&rsquo;t miss out on the information &amp; content we&rsquo;re going to give you...
               </div>
            </div>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 3: On The LIVE Webinar - Receive Your Free Book!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/63/img/step3.jpg" class="img-responsive center-block" /> You must show up to the Workshop to receive your Free Book! <br /><br /> During the live webinar, we'll be giving you access to the free book! 
               </div>
            </div>
            <div class="clearfix"></div>
         </div>
      </div>
      <div class="section timer-section">
         <div class="container">
            <img src="https://bigticketcommissions.info/upload/tpl/63/img/arrows.png" class="img-responsive center-block" />
            <h2 style="font-weight: bold;">This FREE advance training is limited so act now!</h2>
            <h3>Save Your FREE Seat, Attend The Workshop &amp; Download Your Book...</h3>
            <form>
               <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
               <a href="https://bigticketcommissions.info/user/%link%">
                  <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
               </a>
            </form>
            <div class="clearfix"></div>
            <br /><br /><br />
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script>// <![CDATA[
         // Set the date we're counting down to
         var countDownDate = new Date("%cddate1%").getTime();
         
         // Update the count down every 1 second
         var x = setInterval(function() {
         // Get todays date and time
         var now = new Date().getTime();
         
         // Find the distance between now an the count down date
         var distance = countDownDate - now;
         
         // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
         // Display the result in the element with id="demo"
         document.getElementById("counter").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
           document.getElementById("counter2").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
         
         // If the count down is finished, write some text
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter").innerHTML = "EXPIRED";
         }
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter2").innerHTML = "EXPIRED";
         }
         
         }, 1000);
         // ]]>
      </script>
   </body>
</html>
		`,
		webinar: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Webinar Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/63/css/bootstrap.min.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/63/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/63/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='https://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/63/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/63/img/bg8.jpg') no-repeat top center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 0px;
         }
         .timer-section h3 strong {
         color: #fff;
         }
         .dark .section.timer-section {
         background: transparent !important;
         background-size: cover;
         padding-bottom:45px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #fff;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color:#fff;
         font-weight: 600;
         font-size: 70px;
         margin:0px auto 40px !important;
         }
         .overflow h2 {
         color:#fff;
         }
         .overflow h1.headline strong {
         }
         .submit {
         background: rgb(0, 102, 255) !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit:hover font {
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 300 60px/1 "Roboto Condensed";
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: rgb(0, 102, 255) !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .timer-section h2 {
         font-size: 45px;
         }
         .footer {
         background:rgb(39, 39, 39);
         color:#fff;
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background:rgb(23, 56, 88);
         color:#fff;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:20px;
         background:#fff;
         text-align: center;
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         .timer-section .submit {
         padding: 25px 35px 20px !important;
         margin: 25px auto !important;
         font-size: 35px !important;
         border-radius: 71px;
         }
         .dark .embed-container {
         border: 0;
         margin-top:0 !important;
         }
         .red {
         color:#e21010;
         letter-spacing: 3px;
         font-weight: bold;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <h4 class="red">* WE ARE LIVE - DON'T CLOSE THIS PAGE UNTIL THE WEBINAR IS COMPLETE *</h4>
                     <h1 class="headline">The Ultimate <span style="color: #0066ff !important;">'On-Demand'</span><br /> Sales Generating System!</h1>
                     <div class="col-md-9 col-sm-11 col-xs-12 center-block">
                        <div class="embed-container"><iframe width="560" height="315" id="signup" src="https://www.youtube.com/embed/y83x7MgzWOA?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" allowfullscreen="allowfullscreen" frameborder="0"></iframe></div>
                     </div>
                  </div>
                  <div class="clearfix"></div>
                  <br /><br />
                  <div class="col-md-10 col-xs-12 center-block timer-section">
                     <h2 style="font-weight: bold; color: #e21010;">Extremely Limited Time Offer!</h2>
                     <h3>100% Money Back Guarantee. Only 100 spots available. This WILL sell out fast.</h3>
                     <a href="https://bigticketcommissions.info/user/%link%">
                        <div class="submit btn">YES! I Need This! Give Me Access Now! </div>
                     </a>
                     <div class="clearfix"></div>
                  </div>
                  <br /><br /> <br /><br />
               </div>
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>
		`,
		download: `<!DOCTYPE html>
		<html lang="en">
			 <head>
					<meta charset="utf-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<title>Download Page</title>
					<link
						 href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
						 rel="stylesheet"
						 />
					<link href="https://bigticketcommissions.info/upload/tpl/63/css/style.css" rel="stylesheet" />
					<link href="https://bigticketcommissions.info/upload/tpl/63/css/font-awesome.min.css" rel="stylesheet" />
					<link
						 href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900"
						 rel="stylesheet"
						 />
					<link
						 href="https://fonts.googleapis.com/css?family=Lato:400,700,300,900"
						 rel="stylesheet"
						 />
					<link
						 href="https://fonts.googleapis.com/css?family=Shadows+Into+Light"
						 rel="stylesheet"
						 />
					<link
						 href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700"
						 rel="stylesheet"
						 />
					<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
					<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
					<!--[if lt IE 9]>
					<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
					<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
					<![endif]-->
					<style>
						 .video-wrapper .overflow {
						 width: 100%;
						 padding-bottom: 26px;
						 background-image: url('https://bigticketcommissions.info/upload/tpl/63/img/newbg.jpg');
						 background-repeat: no-repeat;
						 background-size: cover;
						 z-index: 2;
						 height: 420px;
						 background-position-y: -40px;
						 }
						 @media (max-width: 991px) {
						 .video-wrapper h1 {
						 margin-top: 10px !important;
						 }
						 }
					</style>
					<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
			 </head>
			 <body>
					<div class="video-wrapper">
						 <div class="overflow">
								<div class="container">
									 <div class="col-md-12">
											<h1 style="position: relative; margin-top: 60px;" class="headline text-center"><strong>Thank You For Attending The Workshop</strong></h1>
									 </div>
								</div>
						 </div>
					</div>
					<div class="section">
						 <div class="container">
								<h2 class="headline2">DOWNLOAD YOUR <b style="color: #ee513e;">BONUSES BELOW</b></h2>
						 </div>
					</div>
					<!--begin_block-->
					<div class="section">
						 <div class="container">
								<div class="col-md-5 col-xs-12 text-center">%cover%</div>
								<div class="col-md-7 col-xs-12">
									 <h2 class="headline2">%title%</h2>
									 <p>%summary%</p>
									 <div class="col-md-10 col-sm-10 col-xs-12 center-block">%download%</div>
									 <div class="clearfix"></div>
									 <div class="col-md-10 col-sm-10 col-xs-12 center-block">%license%</div>
								</div>
								<div class="clearfix"></div>
								<div><br /><br /></div>
						 </div>
					</div>
					<!--end_block-->
					<div class="footer row">
						 <div class="footer-wrap container">
								<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									 <div class="pull-left">Copyright &copy; Yoursite.com. All rights reserved.</div>
								</div>
						 </div>
					</div>
					<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
			 </body>
		</html>`,
	},
	{
		name: "View 5",
		image: `${config.apiUrl}uploads/images/template5.png`,
		optIn: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Optin Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/65/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/65/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='http://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/65/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/65/img/bg50.jpg') no-repeat center center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color: #fff;
         font-family:"Playfair Display";
         font-weight: 600;
         font-size: 60px !important;
         }
         .overflow h2 {
         color:#fff;
         }
         .overflow h1.headline strong {
         color:#ffcc00;
         }
         .submit {
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 300 40px/1 "Montserrat";
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .footer {
         background:rgb(50, 64, 77);
         color:#fff;
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background:transparent;
         color:#fff;
         padding:30px 0;
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:20px;
         background:#fff;
         text-align: center;
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="top-bar">
                  <div class="container">
                     <h3>- Exclusive Masterclass -</h3>
                     <h1 class="headline" style="position: relative;">FREE Book + Workshop</h1>
                     <h3>The Ultimate 'On-Demand' Sales Generating System!</h3>
                  </div>
               </div>
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <div class="col-md-6 col-xs-12">
                        <h2>During The Workshop, You&rsquo;ll Learn:</h2>
                        <ul class="list2">
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                        </ul>
                        <form>
                           <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                           <a href="https://bigticketcommissions.info/user/%link%">
                              <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
                           </a>
                        </form>
                        <center><strong>** LIMITED AVAILABILITY</strong> - 200 SEATS WILL FILL FAST! **</center>
                     </div>
                     <div class="col-md-6 col-xs-12"><br /><br /><img src="https://bigticketcommissions.info/upload/tpl/65/img/laptop.png" class="img-responsive center-block" /></div>
                     <div class="clearfix"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="section gray" style="padding-bottom: 40px;">
         <div class="container">
            <h2 class="headline2" style="color: #333 !important; font-size: 50px;">HOW TO CLAIM YOUR <b style="color: #ee513e;">FREE BOOK?</b></h2>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 1: Register For The Free Workshop!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/65/img/step1.jpg" class="img-responsive center-block" /> Take advantage of the FREE workshop. <br /><br /> You'll be learning some incredible things, so be ready with your notepad! <br /><br /> Don&rsquo;t miss this opportunity!<br /><br />
               </div>
            </div>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 2: Show Up For The Webinar!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/65/img/step2.jpg" class="img-responsive center-block" /> After you register... <br /><br /> Make sure you&rsquo;re ready to take some AWESOME notes during the workshop! <br /><br /> Don&rsquo;t miss out on the information &amp; content we&rsquo;re going to give you...
               </div>
            </div>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 3: On The LIVE Webinar - Receive Your Free Book!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/65/img/step3.jpg" class="img-responsive center-block" /> You must show up to the Workshop to receive your Free Book! <br /><br /> During the live webinar, we'll be giving you access to the free book! 
               </div>
            </div>
            <div class="clearfix"></div>
         </div>
      </div>
      <div class="section timer-section">
         <div class="container">
            <img src="https://bigticketcommissions.info/upload/tpl/65/img/arrows.png" class="img-responsive center-block" />
            <h2 style="font-weight: bold;">This FREE advance training is limited so act now!</h2>
            <h3>Save Your FREE Seat, Attend The Workshop &amp; Download Your Book...</h3>
            <form>
               <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
               <a href="https://bigticketcommissions.info/user/%link%">
                  <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
               </a>
            </form>
            <div class="clearfix"></div>
            <br /><br /><br />
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script>// <![CDATA[
         // Set the date we're counting down to
         var countDownDate = new Date("%cddate1%").getTime();
         
         // Update the count down every 1 second
         var x = setInterval(function() {
         // Get todays date and time
         var now = new Date().getTime();
         
         // Find the distance between now an the count down date
         var distance = countDownDate - now;
         
         // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
         // Display the result in the element with id="demo"
         document.getElementById("counter").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
           document.getElementById("counter2").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
         
         // If the count down is finished, write some text
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter").innerHTML = "EXPIRED";
         }
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter2").innerHTML = "EXPIRED";
         }
         
         }, 1000);
         // ]]>
      </script>
   </body>
</html>
		`,
		webinar: `<!DOCTYPE html>
		<html lang="en">
			 <head>
					<meta charset="utf-8">
					<meta http-equiv="X-UA-Compatible" content="IE=edge">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<title>Done For You Funnel - Webinar Page</title>
					<!-- Bootstrap -->
					<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
					<link href="https://bigticketcommissions.info/upload/tpl/65/css/bootstrap.min.css" rel="stylesheet">
					<link href="https://bigticketcommissions.info/upload/tpl/65/css/style.css" rel="stylesheet">
					<link href="https://bigticketcommissions.info/upload/tpl/65/css/font-awesome.min.css" rel="stylesheet">
					<link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
					<link href='https://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
					<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
					<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
					<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
					<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
					<!--[if lt IE 9]>
					<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
					<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
					<![endif]-->
					<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
					<!-- ClickBank Trust Badge -->
					<style>
						 .list2 li {
						 font-size: 21px;
						 background-image: url(https://bigticketcommissions.info/upload/tpl/65/img/check.png);
						 background-size: 20px;
						 background-position: left center;
						 }
						 .dark .video-wrapper .overflow  {
						 background: #171d54 url('https://bigticketcommissions.info/upload/tpl/65/img/bg8-3.jpg') no-repeat top center;
						 background-size:cover;
						 color:#fff;
						 padding: 40px 0 0px;
						 }
						 .timer-section h3 strong {
						 color: #fff;
						 }
						 .dark .section.timer-section {
						 background: transparent !important;
						 background-size: cover;
						 padding-bottom:45px;
						 }
						 .list2 {
						 margin-top:30px;
						 }
						 .dark .video-wrapper h3 {
						 color: #fff;
						 }
						 .filled-headline {
						 background:rgb(255, 227, 0);
						 color:#333;
						 }
						 .overflow h1.headline {
						 color:#fff;
						 font-weight: 600;
						 font-size: 70px;
						 margin:0px auto 40px !important;
						 }
						 .overflow h2 {
						 color:#fff;
						 }
						 .overflow h1.headline strong {
						 }
						 .submit {
						 background: rgb(132, 187, 41) !important;
						 border: 0 !important;
						 color: #fff;
						 text-shadow: none;
						 }
						 .submit:hover {
						 background:#fff !important;
						 color:#333 !important;
						 }
						 .submit:hover font {
						 color:#333 !important;
						 }
						 .submit small {
						 color:#fff;
						 }
						 #counter span {
						 box-shadow:0 0 10px rgba(0,0,0,0.2);
						 }
						 .submit:hover small { color:#333 !important;}
						 h1.headline {
						 font: 300 60px/1 "Roboto Condensed";
						 }
						 .field {
						 padding: 14px 20px;
						 border-radius: 10px;
						 border: 0;
						 width: 100%;
						 margin: 10px auto;
						 text-align: center;
						 }
						 .submit {
						 background: rgb(132, 187, 41) !important;
						 border: 0 !important;
						 color: #fff;
						 text-shadow: none;
						 white-space: normal;
						 padding: 15px 35px 20px !important;
						 }
						 .timer-section h2 {
						 font-size: 45px;
						 }
						 .footer {
						 background:#fff;
						 color:#333;
						 padding:40px 0;
						 }
						 input {
						 color:#333;
						 }
						 .top-bar {
						 background:rgb(23, 56, 88);
						 color:#fff;
						 padding:30px 0;
						 border-bottom:5px solid rgb(58, 105, 152);
						 }
						 .top-bar h1 {
						 font:700 62px "Montserrat";
						 color:#fff;
						 margin:0 auto !important;
						 }
						 .top-bar h3 {
						 margin:0 auto;
						 color:rgb(255, 227, 0);
						 font-size:25px;
						 }
						 .dark .section.gray {
						 background:rgb(231, 231, 231) !important;
						 }
						 .step {
						 padding:20px;
						 background:#fff;
						 text-align: center;
						 }
						 .dark .section .step h2 {
						 color: #333 !important;
						 font-weight: bold;
						 margin-bottom: 20px;
						 font-size: 25px;
						 margin-top: 0;
						 }
						 .step img {
						 margin-bottom:15px;
						 }
						 .timer-section .submit {
						 padding: 25px 35px 20px !important;
						 margin: 25px auto !important;
						 font-size: 35px !important;
						 border-radius: 71px;
						 }
						 .dark .embed-container {
						 border: 0;
						 margin-top:0 !important;
						 }
						 .red {
						 color:#e21010;
						 letter-spacing: 3px;
						 font-weight: bold;
						 }
					</style>
			 </head>
			 <body class="dark">
					<div class="wrapper" id="home">
						 <div class="video-wrapper">
								<div class="overflow">
									 <div class="container">
											<div class="col-lg-12 col-md-12 left">
												 <h4 class="red">* WE ARE LIVE - DON'T CLOSE THIS PAGE UNTIL THE WEBINAR IS COMPLETE *</h4>
												 <h1 class="headline">The Ultimate <span style="color: #84bb29 !important;">'On-Demand'</span><br /> Sales Generating System!</h1>
												 <div class="col-md-9 col-sm-11 col-xs-12 center-block">
														<div class="embed-container"><iframe width="560" height="315" id="signup" src="https://www.youtube.com/embed/y83x7MgzWOA?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" allowfullscreen="allowfullscreen" frameborder="0"></iframe></div>
												 </div>
											</div>
											<div class="clearfix"></div>
											<br /><br />
											<div class="col-md-10 col-xs-12 center-block timer-section">
												 <h2 style="font-weight: bold; color: #e21010;">Extremely Limited Time Offer!</h2>
												 <h3>100% Money Back Guarantee. Only 100 spots available. This WILL sell out fast.</h3>
												 <a href="https://bigticketcommissions.info/user/%link%">
														<div class="submit btn">YES! I Need This! Give Me Access Now! </div>
												 </a>
												 <div class="clearfix"></div>
											</div>
											<br /><br /> <br /><br />
									 </div>
								</div>
						 </div>
					</div>
					<div class="footer row">
						 <br />
						 <div style="font-size: 12px; text-align: center;">
								<div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
						 </div>
					</div>
					<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
			 </body>
		</html>`,
		download: `
		
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Download Page</title>
      <link
         href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
         rel="stylesheet"
         />
      <link href="https://bigticketcommissions.info/upload/tpl/65/css/style.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/65/css/font-awesome.min.css" rel="stylesheet" />
      <link
         href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Lato:400,700,300,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Shadows+Into+Light"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700"
         rel="stylesheet"
         />
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <style>
         .video-wrapper .overflow {
         width: 100%;
         padding-bottom: 26px;
         background-image: url('https://bigticketcommissions.info/upload/tpl/65/img/newbg.jpg');
         background-repeat: no-repeat;
         background-size: cover;
         z-index: 2;
         height: 420px;
         background-position-y: -40px;
         }
         @media (max-width: 991px) {
         .video-wrapper h1 {
         margin-top: 10px !important;
         }
         }
      </style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
   </head>
   <body>
      <div class="video-wrapper">
         <div class="overflow">
            <div class="container">
               <div class="col-md-12">
                  <h1 style="position: relative; margin-top: 60px;" class="headline text-center"><strong>Thank You For Attending The Workshop</strong></h1>
               </div>
            </div>
         </div>
      </div>
      <div class="section">
         <div class="container">
            <h2 class="headline2">DOWNLOAD YOUR <b style="color: #ee513e;">BONUSES BELOW</b></h2>
         </div>
      </div>
      <!--begin_block-->
      <div class="section">
         <div class="container">
            <div class="col-md-5 col-xs-12 text-center">%cover%</div>
            <div class="col-md-7 col-xs-12">
               <h2 class="headline2">%title%</h2>
               <p>%summary%</p>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%download%</div>
               <div class="clearfix"></div>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%license%</div>
            </div>
            <div class="clearfix"></div>
            <div><br /><br /></div>
         </div>
      </div>
      <!--end_block-->
      <div class="footer row">
         <div class="footer-wrap container">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <div class="pull-left">Copyright &copy; Yoursite.com. All rights reserved.</div>
            </div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>`,
	},
	{
		name: "View 6",
		image: `${config.apiUrl}uploads/images/template6.png`,
		optIn: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Optin Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/65/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/65/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='http://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/65/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/65/img/bg50.jpg') no-repeat center center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color: #fff;
         font-family:"Playfair Display";
         font-weight: 600;
         font-size: 60px !important;
         }
         .overflow h2 {
         color:#fff;
         }
         .overflow h1.headline strong {
         color:#ffcc00;
         }
         .submit {
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 300 40px/1 "Montserrat";
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .footer {
         background:rgb(50, 64, 77);
         color:#fff;
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background:transparent;
         color:#fff;
         padding:30px 0;
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:20px;
         background:#fff;
         text-align: center;
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="top-bar">
                  <div class="container">
                     <h3>- Exclusive Masterclass -</h3>
                     <h1 class="headline" style="position: relative;">FREE Book + Workshop</h1>
                     <h3>The Ultimate 'On-Demand' Sales Generating System!</h3>
                  </div>
               </div>
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <div class="col-md-6 col-xs-12">
                        <h2>During The Workshop, You&rsquo;ll Learn:</h2>
                        <ul class="list2">
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                        </ul>
                        <form>
                           <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                           <a href="https://bigticketcommissions.info/user/%link%">
                              <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
                           </a>
                        </form>
                        <center><strong>** LIMITED AVAILABILITY</strong> - 200 SEATS WILL FILL FAST! **</center>
                     </div>
                     <div class="col-md-6 col-xs-12"><br /><br /><img src="https://bigticketcommissions.info/upload/tpl/65/img/laptop.png" class="img-responsive center-block" /></div>
                     <div class="clearfix"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="section gray" style="padding-bottom: 40px;">
         <div class="container">
            <h2 class="headline2" style="color: #333 !important; font-size: 50px;">HOW TO CLAIM YOUR <b style="color: #ee513e;">FREE BOOK?</b></h2>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 1: Register For The Free Workshop!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/65/img/step1.jpg" class="img-responsive center-block" /> Take advantage of the FREE workshop. <br /><br /> You'll be learning some incredible things, so be ready with your notepad! <br /><br /> Don&rsquo;t miss this opportunity!<br /><br />
               </div>
            </div>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 2: Show Up For The Webinar!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/65/img/step2.jpg" class="img-responsive center-block" /> After you register... <br /><br /> Make sure you&rsquo;re ready to take some AWESOME notes during the workshop! <br /><br /> Don&rsquo;t miss out on the information &amp; content we&rsquo;re going to give you...
               </div>
            </div>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 3: On The LIVE Webinar - Receive Your Free Book!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/65/img/step3.jpg" class="img-responsive center-block" /> You must show up to the Workshop to receive your Free Book! <br /><br /> During the live webinar, we'll be giving you access to the free book! 
               </div>
            </div>
            <div class="clearfix"></div>
         </div>
      </div>
      <div class="section timer-section">
         <div class="container">
            <img src="https://bigticketcommissions.info/upload/tpl/65/img/arrows.png" class="img-responsive center-block" />
            <h2 style="font-weight: bold;">This FREE advance training is limited so act now!</h2>
            <h3>Save Your FREE Seat, Attend The Workshop &amp; Download Your Book...</h3>
            <form>
               <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
               <a href="https://bigticketcommissions.info/user/%link%">
                  <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
               </a>
            </form>
            <div class="clearfix"></div>
            <br /><br /><br />
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script>// <![CDATA[
         // Set the date we're counting down to
         var countDownDate = new Date("%cddate1%").getTime();
         
         // Update the count down every 1 second
         var x = setInterval(function() {
         // Get todays date and time
         var now = new Date().getTime();
         
         // Find the distance between now an the count down date
         var distance = countDownDate - now;
         
         // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
         // Display the result in the element with id="demo"
         document.getElementById("counter").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
           document.getElementById("counter2").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
         
         // If the count down is finished, write some text
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter").innerHTML = "EXPIRED";
         }
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter2").innerHTML = "EXPIRED";
         }
         
         }, 1000);
         // ]]>
      </script>
   </body>
</html>`,
		webinar: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Webinar Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/65/css/bootstrap.min.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/65/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/65/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='https://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/65/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/65/img/bg8-3.jpg') no-repeat top center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 0px;
         }
         .timer-section h3 strong {
         color: #fff;
         }
         .dark .section.timer-section {
         background: transparent !important;
         background-size: cover;
         padding-bottom:45px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #fff;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color:#fff;
         font-weight: 600;
         font-size: 70px;
         margin:0px auto 40px !important;
         }
         .overflow h2 {
         color:#fff;
         }
         .overflow h1.headline strong {
         }
         .submit {
         background: rgb(132, 187, 41) !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit:hover font {
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 300 60px/1 "Roboto Condensed";
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: rgb(132, 187, 41) !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .timer-section h2 {
         font-size: 45px;
         }
         .footer {
         background:#fff;
         color:#333;
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background:rgb(23, 56, 88);
         color:#fff;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:20px;
         background:#fff;
         text-align: center;
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         .timer-section .submit {
         padding: 25px 35px 20px !important;
         margin: 25px auto !important;
         font-size: 35px !important;
         border-radius: 71px;
         }
         .dark .embed-container {
         border: 0;
         margin-top:0 !important;
         }
         .red {
         color:#e21010;
         letter-spacing: 3px;
         font-weight: bold;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <h4 class="red">* WE ARE LIVE - DON'T CLOSE THIS PAGE UNTIL THE WEBINAR IS COMPLETE *</h4>
                     <h1 class="headline">The Ultimate <span style="color: #84bb29 !important;">'On-Demand'</span><br /> Sales Generating System!</h1>
                     <div class="col-md-9 col-sm-11 col-xs-12 center-block">
                        <div class="embed-container"><iframe width="560" height="315" id="signup" src="https://www.youtube.com/embed/y83x7MgzWOA?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" allowfullscreen="allowfullscreen" frameborder="0"></iframe></div>
                     </div>
                  </div>
                  <div class="clearfix"></div>
                  <br /><br />
                  <div class="col-md-10 col-xs-12 center-block timer-section">
                     <h2 style="font-weight: bold; color: #e21010;">Extremely Limited Time Offer!</h2>
                     <h3>100% Money Back Guarantee. Only 100 spots available. This WILL sell out fast.</h3>
                     <a href="https://bigticketcommissions.info/user/%link%">
                        <div class="submit btn">YES! I Need This! Give Me Access Now! </div>
                     </a>
                     <div class="clearfix"></div>
                  </div>
                  <br /><br /> <br /><br />
               </div>
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>`,
		download: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Download Page</title>
      <link
         href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
         rel="stylesheet"
         />
      <link href="https://bigticketcommissions.info/upload/tpl/65/css/style.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/65/css/font-awesome.min.css" rel="stylesheet" />
      <link
         href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Lato:400,700,300,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Shadows+Into+Light"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700"
         rel="stylesheet"
         />
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <style>
         .video-wrapper .overflow {
         width: 100%;
         padding-bottom: 26px;
         background-image: url('https://bigticketcommissions.info/upload/tpl/65/img/newbg.jpg');
         background-repeat: no-repeat;
         background-size: cover;
         z-index: 2;
         height: 420px;
         background-position-y: -40px;
         }
         @media (max-width: 991px) {
         .video-wrapper h1 {
         margin-top: 10px !important;
         }
         }
      </style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
   </head>
   <body>
      <div class="video-wrapper">
         <div class="overflow">
            <div class="container">
               <div class="col-md-12">
                  <h1 style="position: relative; margin-top: 60px;" class="headline text-center"><strong>Thank You For Attending The Workshop</strong></h1>
               </div>
            </div>
         </div>
      </div>
      <div class="section">
         <div class="container">
            <h2 class="headline2">DOWNLOAD YOUR <b style="color: #ee513e;">BONUSES BELOW</b></h2>
         </div>
      </div>
      <!--begin_block-->
      <div class="section">
         <div class="container">
            <div class="col-md-5 col-xs-12 text-center">%cover%</div>
            <div class="col-md-7 col-xs-12">
               <h2 class="headline2">%title%</h2>
               <p>%summary%</p>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%download%</div>
               <div class="clearfix"></div>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%license%</div>
            </div>
            <div class="clearfix"></div>
            <div><br /><br /></div>
         </div>
      </div>
      <!--end_block-->
      <div class="footer row">
         <div class="footer-wrap container">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <div class="pull-left">Copyright &copy; Yoursite.com. All rights reserved.</div>
            </div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>`,
	},
	{
		name: "View 7",
		image: `${config.apiUrl}uploads/images/template7.png`,
		optIn: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Optin Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/66/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/66/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='http://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/66/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/66/img/bg4.jpg') no-repeat top center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #fff;
         font: 700 18px/32px "Montserrat";
         letter-spacing: 2px;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline strong {
         color:#ffcc00;
         }
         .headline2 {
         margin-top:0px;
         color:#fff !important;
         font:400 60px "Playfair Display";
         }
         hr {
         border-top: 3px solid rgb(255, 227, 0);
         max-width: 100px;
         margin:30px auto;
         }
         h4.yellow {
         font:700 18px "Montserrat";
         color:rgb(255, 227, 0);
         }
         .submit {
         background: rgb(255, 220, 0) !important;
         border: 0 !important;
         color: #000;
         text-shadow: none;
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 400 60px/1.2 "Playfair Display";
         color:#fff;
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: rgb(255, 220, 0) !important;
         border: 0 !important;
         color: #000;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .footer {
         background:#333;
         color:#fff;
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background:rgb(23, 56, 88);
         color:#fff;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:30px;
         color:#333;
         background:#fff;
         text-align: center;
         }
         .step h2 {
         color: #333 !important;
         margin-bottom: 20px;
         font-size: 22px;
         font-family:"Playfair Display";
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         #counter span {
         font:700 40px "Montserrat";
         border-radius:50%;
         min-width:120px;
         min-height:120px;
         display:inline-block;
         padding-top:22px;
         color:#fff !important;
         background:transparent !important;
         border:4px solid #fff !important;
         }
         #counter {
         text-align: center;
         }
         #counter span p {
         color:rgba(255,255,255,0.5);
         text-transform: uppercase;
         font-size:12px;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-md-9 col-xs-12 center-block left">
                     <h3><span style="color: #ffe300;">FREE BOOK + WORKSHOP!</span><br /> REGISTER FOR THE FREE MASTERCLASS AND CLAIM YOUR FREE BOOK:</h3>
                     <hr />
                     <h1 class="headline" style="position: relative;">The Ultimate 'On-Demand' Sales Generating System!</h1>
                     <hr />
                     <form>
                        <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                        <a href="https://bigticketcommissions.info/user/%link%">
                           <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
                        </a>
                     </form>
                     <div class="clearfix"></div>
                  </div>
                  <br /><br /><br /><br />
                  <div class="clearfix"></div>
                  <h4 class="yellow">ONLY 300 SPOTS AVAILABLE</h4>
                  <h2 class="headline2">How To Claim Your Free Gift...</h2>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/66/img/step11.png" class="img-responsive center-block" />
                        <h2><strong>Step 1</strong><br />Register For The Free Workshop!</h2>
                        Take advantage of the FREE training we have put together for you!
                     </div>
                  </div>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/66/img/step12.png" class="img-responsive center-block" />
                        <h2><strong>Step 2</strong><br />Show Up For The Webinar!</h2>
                        Make sure you&rsquo;re ready to take some AWESOME notes during the workshop!
                     </div>
                  </div>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/66/img/step13.png" class="img-responsive center-block" />
                        <h2><strong>Step 3</strong><br />On The LIVE Webinar - Receive Your Free Gift!</h2>
                        You must show up to the Workshop to receive your Free Gift!
                     </div>
                  </div>
                  <div class="clearfix"></div>
                  <br /><br />
                  <div class="col-md-9 col-xs-12 center-block left">
                     <h4 class="yellow" style="font-size: 22px; text-transform: uppercase;">Claim your free gift by registering for this ONE-OFF live training workshop!</h4>
                     <h4 style="color: #fff; font-size: 20px;">Just Enter Your Email Address To Secure Your Spot Now!</h4>
                     <form>
                        <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                        <a href="https://bigticketcommissions.info/user/%link%">
                           <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
                        </a>
                     </form>
                     <div class="clearfix"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script>// <![CDATA[
         // Set the date we're counting down to
         var countDownDate = new Date("%cddate1%").getTime();
         
         // Update the count down every 1 second
         var x = setInterval(function() {
         // Get todays date and time
         var now = new Date().getTime();
         
         // Find the distance between now an the count down date
         var distance = countDownDate - now;
         
         // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
         // Display the result in the element with id="demo"
         document.getElementById("counter").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
           document.getElementById("counter2").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
         
         // If the count down is finished, write some text
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter").innerHTML = "EXPIRED";
         }
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter2").innerHTML = "EXPIRED";
         }
         
         }, 1000);
         // ]]>
      </script>
   </body>
</html>`,
		webinar: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Webinar Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/66/css/bootstrap.min.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/66/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/66/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='https://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/66/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/66/img/bg.jpg') no-repeat top center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .timer-section h3 strong {
         color: #fff;
         }
         .dark .section.timer-section {
         background: url('https://bigticketcommissions.info/upload/tpl/66/img/bg3.jpg') no-repeat center center !important;
         background-size: cover;
         padding-bottom:45px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #333;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color: #fff;
         font-weight: 600;
         font-size: 36px;
         }
         .overflow h2 {
         color:#fff;
         }
         .overflow h1.headline strong {
         color:#ffcc00;
         }
         .submit {
         background: rgb(255, 126, 0) !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 300 40px/1 "Montserrat";
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: rgb(255, 126, 0) !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .timer-section h2 {
         font-size: 55px;
         }
         .footer {
         background:rgb(39, 39, 39);
         color:#fff;
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background:rgb(23, 56, 88);
         color:#fff;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:20px;
         background:#fff;
         text-align: center;
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         .timer-section .submit {
         padding: 25px 35px 30px !important;
         margin:25px auto !important;
         font-size:45px !important;
         }
         .dark .embed-container {
         border: 0;
         margin-top:0 !important;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <div class="col-md-9 col-sm-11 col-xs-12 center-block">
                        <img src="https://bigticketcommissions.info/upload/tpl/66/img/streaming2.webp" class="img-responsive center-block" style="width: 100%; max-width: inherit;" />
                        <div class="embed-container"><iframe width="560" height="315" id="signup" src="https://www.youtube.com/embed/CVayZ3MRhys?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" allowfullscreen="allowfullscreen" frameborder="0"></iframe></div>
                        <img src="https://bigticketcommissions.info/upload/tpl/66/img/streaming.webp" class="img-responsive center-block" style="width: 100%; max-width: inherit;" /> <img src="https://bigticketcommissions.info/upload/tpl/66/img/shadow.png" class="img-responsive shadow center-block" />
                     </div>
                  </div>
                  <div class="clearfix"></div>
               </div>
            </div>
         </div>
      </div>
      <div class="section timer-section">
         <div class="container">
            <img src="https://bigticketcommissions.info/upload/tpl/66/img/arrows.png" class="img-responsive center-block" />
            <div class="col-md-10 col-xs-12 center-block">
               <h2 style="font-weight: bold;">Extremely Limited Time Offer!</h2>
               <h3>100% Money Back Guarantee. Only 100 spots available. This WILL sell out fast.</h3>
               <a href="https://bigticketcommissions.info/user/%link%">
                  <div class="submit btn">YES, I DESERVE THIS! <strong>&raquo;</strong></div>
               </a>
               <div class="clearfix"></div>
               <div class="col-md-6 col-xs-12"><img src="https://bigticketcommissions.info/upload/tpl/66/img/guarantee.webp" class="img-responsive center-block" style="max-width: 60%;" /></div>
               <div class="col-md-6 col-xs-12">
                  <h3><strong>Secure Order Form</strong></h3>
                  <img src="https://bigticketcommissions.info/upload/tpl/66/img/cards.png" class="img-responsive center-block" style="max-width: 80%;" />
               </div>
               <br /><br /><br />
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>`,
		download: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Download Page</title>
      <link
         href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
         rel="stylesheet"
         />
      <link href="https://bigticketcommissions.info/upload/tpl/66/css/style.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/66/css/font-awesome.min.css" rel="stylesheet" />
      <link
         href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Lato:400,700,300,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Shadows+Into+Light"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700"
         rel="stylesheet"
         />
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <style>
         .video-wrapper .overflow {
         width: 100%;
         padding-bottom: 26px;
         background-image: url('https://bigticketcommissions.info/upload/tpl/66/img/newbg.jpg');
         background-repeat: no-repeat;
         background-size: cover;
         z-index: 2;
         height: 420px;
         background-position-y: -40px;
         }
         @media (max-width: 991px) {
         .video-wrapper h1 {
         margin-top: 10px !important;
         }
         }
      </style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
   </head>
   <body>
      <div class="video-wrapper">
         <div class="overflow">
            <div class="container">
               <div class="col-md-12">
                  <h1 style="position: relative; margin-top: 60px;" class="headline text-center"><strong>Thank You For Attending The Workshop</strong></h1>
               </div>
            </div>
         </div>
      </div>
      <div class="section">
         <div class="container">
            <h2 class="headline2">DOWNLOAD YOUR <b style="color: #ee513e;">BONUSES BELOW</b></h2>
         </div>
      </div>
      <!--begin_block-->
      <div class="section">
         <div class="container">
            <div class="col-md-5 col-xs-12 text-center">%cover%</div>
            <div class="col-md-7 col-xs-12">
               <h2 class="headline2">%title%</h2>
               <p>%summary%</p>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%download%</div>
               <div class="clearfix"></div>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%license%</div>
            </div>
            <div class="clearfix"></div>
            <div><br /><br /></div>
         </div>
      </div>
      <!--end_block-->
      <div class="footer row">
         <div class="footer-wrap container">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <div class="pull-left">Copyright &copy; Yoursite.com. All rights reserved.</div>
            </div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>`,
	},
	{
		name: "View 8",
		image: `${config.apiUrl}uploads/images/template8.png`,
		optIn: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Optin Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/67/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/67/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='http://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/67/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/67/img/bg4-2.jpg') no-repeat top center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #fff;
         font: 700 18px/32px "Montserrat";
         letter-spacing: 2px;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline strong {
         color:#ffcc00;
         }
         .headline2 {
         margin-top:0px;
         color:#fff !important;
         font:400 60px "Playfair Display";
         }
         hr {
         border-top: 3px solid rgb(255, 227, 0);
         max-width: 100px;
         margin:30px auto;
         }
         h4.yellow {
         font:700 18px "Montserrat";
         color:rgb(255, 227, 0);
         }
         .submit {
         background: rgb(255, 220, 0) !important;
         border: 0 !important;
         color: #000;
         text-shadow: none;
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 400 60px/1.2 "Roboto Condensed";
         color:#fff;
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: rgb(255, 220, 0) !important;
         border: 0 !important;
         color: #000;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .footer {
         background:#141414;
         color:#fff;
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background:rgb(23, 56, 88);
         color:#fff;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:30px;
         color:#333;
         background:#fff;
         text-align: center;
         }
         .step h2 {
         color: #333 !important;
         margin-bottom: 20px;
         font-size: 22px;
         font-family:"Playfair Display";
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         #counter span {
         font:700 40px "Montserrat";
         border-radius:50%;
         min-width:120px;
         min-height:120px;
         display:inline-block;
         padding-top:22px;
         color:#fff !important;
         background:transparent !important;
         border:4px solid #fff !important;
         }
         #counter {
         text-align: center;
         }
         #counter span p {
         color:rgba(255,255,255,0.5);
         text-transform: uppercase;
         font-size:12px;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-md-9 col-xs-12 center-block left">
                     <h3><span style="color: #ffe300;">FREE BOOK + WORKSHOP!</span><br /> REGISTER FOR THE FREE MASTERCLASS AND CLAIM YOUR FREE BOOK:</h3>
                     <hr />
                     <h1 class="headline" style="position: relative;">The Ultimate 'On-Demand' Sales Generating System!</h1>
                     <hr />
                     <form>
                        <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                        <a href="https://bigticketcommissions.info/user/%link%">
                           <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
                        </a>
                     </form>
                     <div class="clearfix"></div>
                  </div>
                  <br /><br /><br /><br />
                  <div class="clearfix"></div>
                  <h4 class="yellow">ONLY 300 SPOTS AVAILABLE</h4>
                  <h2 class="headline2">How To Claim Your Free Gift...</h2>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/67/img/step11.png" class="img-responsive center-block" />
                        <h2><strong>Step 1</strong><br />Register For The Free Workshop!</h2>
                        Take advantage of the FREE training we have put together for you!
                     </div>
                  </div>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/67/img/step12.png" class="img-responsive center-block" />
                        <h2><strong>Step 2</strong><br />Show Up For The Webinar!</h2>
                        Make sure you&rsquo;re ready to take some AWESOME notes during the workshop!
                     </div>
                  </div>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/67/img/step13.png" class="img-responsive center-block" />
                        <h2><strong>Step 3</strong><br />On The LIVE Webinar - Receive Your Free Gift!</h2>
                        You must show up to the Workshop to receive your Free Gift!
                     </div>
                  </div>
                  <div class="clearfix"></div>
                  <br /><br />
                  <div class="col-md-9 col-xs-12 center-block left">
                     <h4 class="yellow" style="font-size: 22px; text-transform: uppercase;">Claim your free gift by registering for this ONE-OFF live training workshop!</h4>
                     <h4 style="color: #fff; font-size: 20px;">Just Enter Your Email Address To Secure Your Spot Now!</h4>
                     <form>
                        <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                        <a href="https://bigticketcommissions.info/user/%link%">
                           <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
                        </a>
                     </form>
                     <div class="clearfix"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script>// <![CDATA[
         // Set the date we're counting down to
         var countDownDate = new Date("%cddate1%").getTime();
         
         // Update the count down every 1 second
         var x = setInterval(function() {
         // Get todays date and time
         var now = new Date().getTime();
         
         // Find the distance between now an the count down date
         var distance = countDownDate - now;
         
         // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
         // Display the result in the element with id="demo"
         document.getElementById("counter").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
           document.getElementById("counter2").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
         
         // If the count down is finished, write some text
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter").innerHTML = "EXPIRED";
         }
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter2").innerHTML = "EXPIRED";
         }
         
         }, 1000);
         // ]]>
      </script>
   </body>
</html>`,
		webinar: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Webinar Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/67/css/bootstrap.min.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/67/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/67/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='https://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/67/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/67/img/bg.jpg') no-repeat top center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .timer-section h3 strong {
         color: #fff;
         }
         .dark .section.timer-section {
         background: url('https://bigticketcommissions.info/upload/tpl/67/img/bg6.jpg') no-repeat center center !important;
         background-size: cover;
         padding-bottom:45px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #333;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color: #fff;
         font-weight: 600;
         font-size: 36px;
         }
         .overflow h2 {
         color:#fff;
         }
         .overflow h1.headline strong {
         color:#ffcc00;
         }
         .submit {
         background: rgb(151, 0, 255) !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 300 40px/1 "Montserrat";
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: rgb(151, 0, 255) !important;
         border: 0 !important;
         color: #fff;
         border-radius:30px;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .timer-section h2 {
         font-size: 55px;
         }
         .footer {
         background:#fff;
         color:#333;
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background:rgb(23, 56, 88);
         color:#fff;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:20px;
         background:#fff;
         text-align: center;
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         .timer-section .submit {
         padding: 25px 35px 30px !important;
         margin:25px auto !important;
         font-size:45px !important;
         }
         .dark .embed-container {
         border: 0;
         margin-top:0 !important;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <div class="col-md-9 col-sm-11 col-xs-12 center-block">
                        <img src="https://bigticketcommissions.info/upload/tpl/67/img/streaming2.webp" class="img-responsive center-block" style="width: 100%; max-width: inherit;" />
                        <div class="embed-container"><iframe width="560" height="315" id="signup" src="https://www.youtube.com/embed/CVayZ3MRhys?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" allowfullscreen="allowfullscreen" frameborder="0"></iframe></div>
                        <img src="https://bigticketcommissions.info/upload/tpl/67/img/streaming.webp" class="img-responsive center-block" style="width: 100%; max-width: inherit;" /> <img src="https://bigticketcommissions.info/upload/tpl/67/img/shadow.png" class="img-responsive shadow center-block" />
                     </div>
                  </div>
                  <div class="clearfix"></div>
               </div>
            </div>
         </div>
      </div>
      <div class="section timer-section">
         <div class="container">
            <img src="https://bigticketcommissions.info/upload/tpl/67/img/arrows.png" class="img-responsive center-block" />
            <div class="col-md-10 col-xs-12 center-block">
               <h2 style="font-weight: bold;">Extremely Limited Time Offer!</h2>
               <h3>100% Money Back Guarantee. Only 100 spots available. This WILL sell out fast.</h3>
               <a href="https://bigticketcommissions.info/user/%link%">
                  <div class="submit btn">YES, I DESERVE THIS! <strong>&raquo;</strong></div>
               </a>
               <div class="clearfix"></div>
               <div class="col-md-6 col-xs-12"><img src="https://bigticketcommissions.info/upload/tpl/67/img/guarantee.webp" class="img-responsive center-block" style="max-width: 60%;" /></div>
               <div class="col-md-6 col-xs-12">
                  <h3><strong>Secure Order Form</strong></h3>
                  <img src="https://bigticketcommissions.info/upload/tpl/67/img/cards.png" class="img-responsive center-block" style="max-width: 80%;" />
               </div>
               <br /><br /><br />
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>`,
		download: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Download Page</title>
      <link
         href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
         rel="stylesheet"
         />
      <link href="https://bigticketcommissions.info/upload/tpl/67/css/style.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/67/css/font-awesome.min.css" rel="stylesheet" />
      <link
         href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Lato:400,700,300,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Shadows+Into+Light"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700"
         rel="stylesheet"
         />
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <style>
         .video-wrapper .overflow {
         width: 100%;
         padding-bottom: 26px;
         background-image: url('https://bigticketcommissions.info/upload/tpl/67/img/newbg.jpg');
         background-repeat: no-repeat;
         background-size: cover;
         z-index: 2;
         height: 420px;
         background-position-y: -40px;
         }
         @media (max-width: 991px) {
         .video-wrapper h1 {
         margin-top: 10px !important;
         }
         }
      </style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
   </head>
   <body>
      <div class="video-wrapper">
         <div class="overflow">
            <div class="container">
               <div class="col-md-12">
                  <h1 style="position: relative; margin-top: 60px;" class="headline text-center"><strong>Thank You For Attending The Workshop</strong></h1>
               </div>
            </div>
         </div>
      </div>
      <div class="section">
         <div class="container">
            <h2 class="headline2">DOWNLOAD YOUR <b style="color: #ee513e;">BONUSES BELOW</b></h2>
         </div>
      </div>
      <!--begin_block-->
      <div class="section">
         <div class="container">
            <div class="col-md-5 col-xs-12 text-center">%cover%</div>
            <div class="col-md-7 col-xs-12">
               <h2 class="headline2">%title%</h2>
               <p>%summary%</p>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%download%</div>
               <div class="clearfix"></div>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%license%</div>
            </div>
            <div class="clearfix"></div>
            <div><br /><br /></div>
         </div>
      </div>
      <!--end_block-->
      <div class="footer row">
         <div class="footer-wrap container">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <div class="pull-left">Copyright &copy; Yoursite.com. All rights reserved.</div>
            </div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>`,
	},
	{
		name: "View 9",
		image: `${config.apiUrl}uploads/images/template9.png`,
		optIn: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Optin Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/68/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/68/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='http://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/68/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/68/img/bg4-3.jpg') no-repeat top center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #fff;
         font: 700 18px/32px "Montserrat";
         letter-spacing: 2px;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline strong {
         color:#ffcc00;
         }
         .headline2 {
         margin-top:0px;
         color:#fff !important;
         font:400 60px "Playfair Display";
         }
         hr {
         border-top: 3px solid rgb(255, 227, 0);
         max-width: 100px;
         margin:30px auto;
         }
         h4.yellow {
         font:700 18px "Montserrat";
         color:rgb(255, 227, 0);
         }
         .submit {
         background: rgb(255, 220, 0) !important;
         border: 0 !important;
         color: #000;
         text-shadow: none;
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 400 50px/1.2 "Montserrat";
         color:#fff;
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: rgb(255, 220, 0) !important;
         border: 0 !important;
         color: #000;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .footer {
         background:#333;
         color:#fff;
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background:rgb(23, 56, 88);
         color:#fff;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:30px;
         color:#333;
         background:#fff;
         text-align: center;
         }
         .step h2 {
         color: #333 !important;
         margin-bottom: 20px;
         font-size: 22px;
         font-family:"Playfair Display";
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         #counter span {
         font:700 40px "Montserrat";
         border-radius:50%;
         min-width:120px;
         min-height:120px;
         display:inline-block;
         padding-top:22px;
         color:#fff !important;
         background:transparent !important;
         border:4px solid #fff !important;
         }
         #counter {
         text-align: center;
         }
         #counter span p {
         color:rgba(255,255,255,0.5);
         text-transform: uppercase;
         font-size:12px;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-md-9 col-xs-12 center-block left">
                     <h3><span style="color: #ffe300;">FREE BOOK + WORKSHOP!</span><br /> REGISTER FOR THE FREE MASTERCLASS AND CLAIM YOUR FREE BOOK:</h3>
                     <hr />
                     <h1 class="headline" style="position: relative;">The Ultimate 'On-Demand' Sales Generating System!</h1>
                     <hr />
                     <form>
                        <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                        <a href="https://bigticketcommissions.info/user/%link%">
                           <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
                        </a>
                     </form>
                     <div class="clearfix"></div>
                  </div>
                  <br /><br /><br /><br />
                  <div class="clearfix"></div>
                  <h4 class="yellow">ONLY 300 SPOTS AVAILABLE</h4>
                  <h2 class="headline2">How To Claim Your Free Gift...</h2>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/68/img/step11.png" class="img-responsive center-block" />
                        <h2><strong>Step 1</strong><br />Register For The Free Workshop!</h2>
                        Take advantage of the FREE training we have put together for you!
                     </div>
                  </div>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/68/img/step12.png" class="img-responsive center-block" />
                        <h2><strong>Step 2</strong><br />Show Up For The Webinar!</h2>
                        Make sure you&rsquo;re ready to take some AWESOME notes during the workshop!
                     </div>
                  </div>
                  <div class="col-md-4 col-xs-12" style="padding: 10px;">
                     <div class="step">
                        <img src="https://bigticketcommissions.info/upload/tpl/68/img/step13.png" class="img-responsive center-block" />
                        <h2><strong>Step 3</strong><br />On The LIVE Webinar - Receive Your Free Gift!</h2>
                        You must show up to the Workshop to receive your Free Gift!
                     </div>
                  </div>
                  <div class="clearfix"></div>
                  <br /><br />
                  <div class="col-md-9 col-xs-12 center-block left">
                     <h4 class="yellow" style="font-size: 22px; text-transform: uppercase;">Claim your free gift by registering for this ONE-OFF live training workshop!</h4>
                     <h4 style="color: #fff; font-size: 20px;">Just Enter Your Email Address To Secure Your Spot Now!</h4>
                     <form>
                        <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                        <a href="https://bigticketcommissions.info/user/%link%">
                           <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
                        </a>
                     </form>
                     <div class="clearfix"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script>// <![CDATA[
         // Set the date we're counting down to
         var countDownDate = new Date("%cddate1%").getTime();
         
         // Update the count down every 1 second
         var x = setInterval(function() {
         // Get todays date and time
         var now = new Date().getTime();
         
         // Find the distance between now an the count down date
         var distance = countDownDate - now;
         
         // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
         // Display the result in the element with id="demo"
         document.getElementById("counter").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
           document.getElementById("counter2").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
         
         // If the count down is finished, write some text
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter").innerHTML = "EXPIRED";
         }
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter2").innerHTML = "EXPIRED";
         }
         
         }, 1000);
         // ]]>
      </script>
   </body>
</html>`,
		webinar: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Webinar Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/68/css/bootstrap.min.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/68/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/68/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='https://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/68/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/68/img/bg2.jpg') no-repeat top center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .timer-section h3 strong {
         color: #fff;
         }
         .dark .section.timer-section {
         background: url('https://bigticketcommissions.info/upload/tpl/68/img/bg6.jpg') no-repeat center center !important;
         background-size: cover;
         padding-bottom:45px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #333;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color: #fff;
         font-weight: 600;
         font-size: 36px;
         }
         .overflow h2 {
         color:#fff;
         }
         .overflow h1.headline strong {
         color:#ffcc00;
         }
         .submit {
         background: #49a01b !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 300 40px/1 "Montserrat";
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background:  #49a01b !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .timer-section h2 {
         font-size: 55px;
         }
         .footer {
         background:#fff;
         color:#333;
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background:rgb(23, 56, 88);
         color:#fff;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:20px;
         background:#fff;
         text-align: center;
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         .timer-section .submit {
         padding: 25px 35px 30px !important;
         margin:25px auto !important;
         font-size:45px !important;
         }
         .dark .embed-container {
         border: 0;
         margin-top:0 !important;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <div class="col-md-9 col-sm-11 col-xs-12 center-block">
                        <img src="https://bigticketcommissions.info/upload/tpl/68/img/streaming2.webp" class="img-responsive center-block" style="width: 100%; max-width: inherit;" />
                        <div class="embed-container"><iframe width="560" height="315" id="signup" src="https://www.youtube.com/embed/CVayZ3MRhys?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" allowfullscreen="allowfullscreen" frameborder="0"></iframe></div>
                        <img src="https://bigticketcommissions.info/upload/tpl/68/img/streaming.webp" class="img-responsive center-block" style="width: 100%; max-width: inherit;" /> <img src="https://bigticketcommissions.info/upload/tpl/68/img/shadow.png" class="img-responsive shadow center-block" />
                     </div>
                  </div>
                  <div class="clearfix"></div>
               </div>
            </div>
         </div>
      </div>
      <div class="section timer-section">
         <div class="container">
            <br />
            <div class="col-md-10 col-xs-12 center-block">
               <h2 style="font-weight: bold;">Extremely Limited Time Offer!</h2>
               <h3>100% Money Back Guarantee. Only 100 spots available. This WILL sell out fast.</h3>
               <a href="https://bigticketcommissions.info/user/%link%">
                  <div class="submit btn">YES, I DESERVE THIS! <strong>&raquo;</strong></div>
               </a>
               <div class="clearfix"></div>
               <div class="col-md-6 col-xs-12"><img src="https://bigticketcommissions.info/upload/tpl/68/img/guarantee.webp" class="img-responsive center-block" style="max-width: 60%;" /></div>
               <div class="col-md-6 col-xs-12">
                  <h3><strong>Secure Order Form</strong></h3>
                  <img src="https://bigticketcommissions.info/upload/tpl/68/img/cards.png" class="img-responsive center-block" style="max-width: 80%;" />
               </div>
               <br /><br /><br />
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>`,
		download: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Download Page</title>
      <link
         href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
         rel="stylesheet"
         />
      <link href="https://bigticketcommissions.info/upload/tpl/68/css/style.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/68/css/font-awesome.min.css" rel="stylesheet" />
      <link
         href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Lato:400,700,300,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Shadows+Into+Light"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700"
         rel="stylesheet"
         />
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <style>
         .video-wrapper .overflow {
         width: 100%;
         padding-bottom: 26px;
         background-image: url('https://bigticketcommissions.info/upload/tpl/68/img/newbg.jpg');
         background-repeat: no-repeat;
         background-size: cover;
         z-index: 2;
         height: 420px;
         background-position-y: -40px;
         }
         @media (max-width: 991px) {
         .video-wrapper h1 {
         margin-top: 10px !important;
         }
         }
      </style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
   </head>
   <body>
      <div class="video-wrapper">
         <div class="overflow">
            <div class="container">
               <div class="col-md-12">
                  <h1 style="position: relative; margin-top: 60px;" class="headline text-center"><strong>Thank You For Attending The Workshop</strong></h1>
               </div>
            </div>
         </div>
      </div>
      <div class="section">
         <div class="container">
            <h2 class="headline2">DOWNLOAD YOUR <b style="color: #ee513e;">BONUSES BELOW</b></h2>
         </div>
      </div>
      <!--begin_block-->
      <div class="section">
         <div class="container">
            <div class="col-md-5 col-xs-12 text-center">%cover%</div>
            <div class="col-md-7 col-xs-12">
               <h2 class="headline2">%title%</h2>
               <p>%summary%</p>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%download%</div>
               <div class="clearfix"></div>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%license%</div>
            </div>
            <div class="clearfix"></div>
            <div><br /><br /></div>
         </div>
      </div>
      <!--end_block-->
      <div class="footer row">
         <div class="footer-wrap container">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <div class="pull-left">Copyright &copy; Yoursite.com. All rights reserved.</div>
            </div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>`,
	},
	{
		name: "View 10",
		image: `${config.apiUrl}uploads/images/template10.png`,
		optIn: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Optin Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/69/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/69/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='http://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/69/img/check.png);
         background-size: 20px;
         background-position: left center;
         color:#333;
         }
         .dark .video-wrapper .overflow  {
         background: url('https://bigticketcommissions.info/upload/tpl/69/img/bg10.jpg') no-repeat center center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: rgb(23, 56, 88);
         font-weight: bold;
         text-transform: uppercase;
         font-size:24px;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color: #d92e19;
         font-weight: 700;
         font-size: 65px;
         }
         .overflow h2 {
         color:#333;
         }
         .overflow h1.headline strong {
         color:#ffcc00;
         }
         .submit {
         background: #d92e19 !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         }
         .submit:hover {
         background:rgb(23, 56, 88) !important;
         color:#fff !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 300 8 0px/1 "Montserrat";
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: #d92e19 !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .footer {
         background:rgba(0,0,0,0.9);
         color:#fff;
         padding:40px 0;
         }
         input {
         color:#333;
         border:1px solid rgba(0,0,0,0.2) !important;
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .top-bar {
         background:#fff;
         color:#333;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:#e21313;
         font-size:25px;
         }
         .dark .section.gray {
         background: url('https://bigticketcommissions.info/upload/tpl/69/img/bg12.jpg') no-repeat center center !important;
         background-size:cover;
         }
         .step {
         padding:20px;
         border-radius:25px;
         background:#fff;
         text-align: center;
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         .section.gray h3 {
         color:#fff;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <h3>- Exclusive Masterclass -</h3>
                     <h1 class="headline" style="position: relative;">FREE Book + Workshop</h1>
                     <h3>The Ultimate 'On-Demand' Sales Generating System!</h3>
                     <div class="col-md-6 col-xs-12">
                        <h2>During The Workshop, You&rsquo;ll Learn:</h2>
                        <ul class="list2">
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                        </ul>
                     </div>
                     <div class="col-md-6 col-xs-12"><br /><img src="https://bigticketcommissions.info/upload/tpl/69/img/laptop.png" class="img-responsive center-block" /></div>
                     <div class="clearfix"></div>
                     <br />
                     <div class="col-md-9 col-xs-12 center-block">
                        <form>
                           <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                           <a href="https://bigticketcommissions.info/user/%link%">
                              <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
                           </a>
                        </form>
                        <h1 class="headline" style="position: relative; font-size: 50px;">99 SEATS LEFT! HURRY UP!</h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="section gray" style="padding-bottom: 40px;">
         <div class="container">
            <h2 class="headline2" style="color: #fff !important; font-size: 50px;">HOW TO CLAIM YOUR <b style="color: #d92e19;">FREE BOOK?</b></h2>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 1: Register For The Free Workshop!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/69/img/step1.jpg" class="img-responsive center-block" /> Take advantage of the FREE workshop. <br /><br /> You'll be learning some incredible things, so be ready with your notepad! <br /><br /> Don&rsquo;t miss this opportunity!<br /><br />
               </div>
            </div>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 2: Show Up For The Webinar!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/69/img/step2.jpg" class="img-responsive center-block" /> After you register... <br /><br /> Make sure you&rsquo;re ready to take some AWESOME notes during the workshop! <br /><br /> Don&rsquo;t miss out on the information &amp; content we&rsquo;re going to give you...
               </div>
            </div>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 3: On The LIVE Webinar - Receive Your Free Book!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/69/img/step3.jpg" class="img-responsive center-block" /> You must show up to the Workshop to receive your Free Book! <br /><br /> During the live webinar, we'll be giving you access to the free book! 
               </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-10 col-xs-12 center-block">
               <h2 style="font-weight: bold;">This FREE advance training is limited so act now!</h2>
               <h3>Save Your FREE Seat, Attend The Workshop &amp; Download Your Book...</h3>
               <form>
                  <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                  <a href="https://bigticketcommissions.info/user/%link%">
                     <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
                  </a>
               </form>
            </div>
            <div class="clearfix"></div>
            <br /><br /><br />
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script>// <![CDATA[
         // Set the date we're counting down to
         var countDownDate = new Date("%cddate1%").getTime();
         
         // Update the count down every 1 second
         var x = setInterval(function() {
         // Get todays date and time
         var now = new Date().getTime();
         
         // Find the distance between now an the count down date
         var distance = countDownDate - now;
         
         // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
         // Display the result in the element with id="demo"
         document.getElementById("counter").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
           document.getElementById("counter2").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
         
         // If the count down is finished, write some text
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter").innerHTML = "EXPIRED";
         }
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter2").innerHTML = "EXPIRED";
         }
         
         }, 1000);
         // ]]>
      </script>
   </body>
</html>`,
		webinar: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Webinar Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/69/css/bootstrap.min.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/69/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/69/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='https://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/69/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/69/img/bg9.jpg') no-repeat top center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .timer-section h3 strong {
         color: #fff;
         }
         .dark .section.timer-section {
         background: url('https://bigticketcommissions.info/upload/tpl/69/img/bg6.jpg') no-repeat center center !important;
         background-size: cover;
         padding-bottom:45px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #333;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color:#333;
         font-weight: 600;
         font-size: 60px;
         margin:0px auto 40px !important;
         }
         .overflow h2 {
         color:#fff;
         }
         .overflow h1.headline strong {
         }
         .submit {
         background: rgb(23, 56, 88) !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         }
         .dark h1.headline strong {
         font-weight: 600;
         color: #f0c408;
         }
         .submit:hover {
         background:rgb(254, 202, 87) !important;
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 300 40px/1 "Montserrat";
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0; 
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: rgb(23, 56, 88) !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .timer-section h2 {
         font-size: 45px;
         font-family:"Roboto Condensed";
         color:#333;
         }
         .footer {
         background:rgb(254, 202, 87);
         color:rgba(0,0,0,0.6);
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background:rgb(23, 56, 88);
         color:#fff;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 35px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:20px;
         background:#fff;
         text-align: center;
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         .timer-section .submit {
         padding: 25px 35px 30px !important;
         margin:25px auto !important;
         font-size:45px !important;
         }
         .dark .embed-container {
         border: 0;
         margin-top:0 !important;
         }
         .filled {
         background:rgb(253, 192, 84);
         color: rgb(34, 47, 61);
         text-transform: uppercase;
         letter-spacing: 2px;
         padding:5px 0;
         margin:0 auto 25px;
         }
      </style>
   </head>
   <body class="dark">
      <div class="top-bar">
         <div class="container">
            <h1 class="headline" style="position: relative;">The Ultimate <strong>'On-Demand'</strong> Sales Generating System</h1>
         </div>
      </div>
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <h4 class="filled">Your Webinar Is In Progress. Do not close the window or the presentation will end.</h4>
                     <div class="col-md-9 col-sm-11 col-xs-12 center-block">
                        <div class="embed-container"><iframe width="560" height="315" id="signup" src="https://www.youtube.com/embed/y83x7MgzWOA?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" allowfullscreen="allowfullscreen" frameborder="0"></iframe></div>
                     </div>
                     <div class="timer-section col-md-10 center-block col-xs-12">
                        <h2 style="font-weight: bold;">Extremely Limited Time Offer!</h2>
                        <h3>100% Money Back Guarantee. Only 100 spots available. This WILL sell out fast.</h3>
                        <a href="https://bigticketcommissions.info/user/%link%">
                           <div class="submit btn">YES, I DESERVE THIS! <strong>&raquo;</strong></div>
                        </a>
                        <div class="clearfix"></div>
                     </div>
                  </div>
                  <div class="clearfix"></div>
               </div>
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>`,
		download: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Download Page</title>
      <link
         href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
         rel="stylesheet"
         />
      <link href="https://bigticketcommissions.info/upload/tpl/69/css/style.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/69/css/font-awesome.min.css" rel="stylesheet" />
      <link
         href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Lato:400,700,300,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Shadows+Into+Light"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700"
         rel="stylesheet"
         />
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <style>
         .video-wrapper .overflow {
         width: 100%;
         padding-bottom: 26px;
         background-image: url('https://bigticketcommissions.info/upload/tpl/69/img/newbg.jpg');
         background-repeat: no-repeat;
         background-size: cover;
         z-index: 2;
         height: 420px;
         background-position-y: -40px;
         }
         @media (max-width: 991px) {
         .video-wrapper h1 {
         margin-top: 10px !important;
         }
         }
      </style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
   </head>
   <body>
      <div class="video-wrapper">
         <div class="overflow">
            <div class="container">
               <div class="col-md-12">
                  <h1 style="position: relative; margin-top: 60px;" class="headline text-center"><strong>Thank You For Attending The Workshop</strong></h1>
               </div>
            </div>
         </div>
      </div>
      <div class="section">
         <div class="container">
            <h2 class="headline2">DOWNLOAD YOUR <b style="color: #ee513e;">BONUSES BELOW</b></h2>
         </div>
      </div>
      <!--begin_block-->
      <div class="section">
         <div class="container">
            <div class="col-md-5 col-xs-12 text-center">%cover%</div>
            <div class="col-md-7 col-xs-12">
               <h2 class="headline2">%title%</h2>
               <p>%summary%</p>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%download%</div>
               <div class="clearfix"></div>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%license%</div>
            </div>
            <div class="clearfix"></div>
            <div><br /><br /></div>
         </div>
      </div>
      <!--end_block-->
      <div class="footer row">
         <div class="footer-wrap container">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <div class="pull-left">Copyright &copy; Yoursite.com. All rights reserved.</div>
            </div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>
		`,
	},
	{
		name: "View 11",
		image: `${config.apiUrl}uploads/images/template11.png`,
		optIn: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Optin Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/70/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/70/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='http://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/70/img/check.png);
         background-size: 20px;
         background-position: left center;
         color:#fff;
         }
         .dark .video-wrapper .overflow  {
         background: url('https://bigticketcommissions.info/upload/tpl/70/img/bg11.jpg') no-repeat center center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: rgb(255, 219, 0);
         font-weight: bold;
         text-transform: uppercase;
         font-size:24px;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color: #fff;
         font-weight: 700;
         font-size: 65px;
         font-family: "Playfair Display" !important;
         }
         .overflow h2 {
         color:#fff;
         }
         .overflow h1.headline strong {
         color:#ffcc00;
         }
         .submit {
         background: #1981d9 !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         }
         .submit:hover {
         background:rgb(23, 56, 88) !important;
         color:#fff !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 300 8 0px/1 "Montserrat";
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: #1981d9 !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .footer {
         background:rgba(0,0,0,0.9);
         color:#fff;
         padding:40px 0;
         }
         input {
         color:#333;
         border:1px solid rgba(0,0,0,0.2) !important;
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .top-bar {
         background:#fff;
         color:#333;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:#e21313;
         font-size:25px;
         }
         .dark .section.gray {
         background: url('https://bigticketcommissions.info/upload/tpl/70/img/bg9.jpg') no-repeat center center !important;
         background-size:cover;
         }
         .step {
         padding:20px;
         border-radius:25px;
         background:#fff;
         text-align: center;
         box-shadow: 0 0 30px rgba(0,0,0,.1);
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         .section.gray h3 {
         color:#333;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <h3>- Exclusive Masterclass -</h3>
                     <h1 class="headline" style="position: relative;">FREE Book + Workshop</h1>
                     <h3>The Ultimate 'On-Demand' Sales Generating System!</h3>
                     <div class="col-md-6 col-xs-12">
                        <h2>During The Workshop, You&rsquo;ll Learn:</h2>
                        <ul class="list2">
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                        </ul>
                     </div>
                     <div class="col-md-6 col-xs-12"><br /><img src="https://bigticketcommissions.info/upload/tpl/70/img/laptop.png" class="img-responsive center-block" /></div>
                     <div class="clearfix"></div>
                     <br />
                     <div class="col-md-9 col-xs-12 center-block">
                        <form>
                           <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                           <a href="https://bigticketcommissions.info/user/%link%">
                              <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
                           </a>
                        </form>
                        <h1 class="headline" style="position: relative; font-size: 50px;">99 SEATS LEFT! HURRY UP!</h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="section gray" style="padding-bottom: 40px;">
         <div class="container">
            <h2 class="headline2" style="color: #373737 !important; font-size: 50px;">HOW TO CLAIM YOUR <b style="color: #1981d9;">FREE BOOK?</b></h2>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 1: Register For The Free Workshop!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/70/img/step1.jpg" class="img-responsive center-block" /> Take advantage of the FREE workshop. <br /><br /> You'll be learning some incredible things, so be ready with your notepad! <br /><br /> Don&rsquo;t miss this opportunity!<br /><br />
               </div>
            </div>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 2: Show Up For The Webinar!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/70/img/step2.jpg" class="img-responsive center-block" /> After you register... <br /><br /> Make sure you&rsquo;re ready to take some AWESOME notes during the workshop! <br /><br /> Don&rsquo;t miss out on the information &amp; content we&rsquo;re going to give you...
               </div>
            </div>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 3: On The LIVE Webinar - Receive Your Free Book!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/70/img/step3.jpg" class="img-responsive center-block" /> You must show up to the Workshop to receive your Free Book! <br /><br /> During the live webinar, we'll be giving you access to the free book! 
               </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-10 col-xs-12 center-block">
               <h2 style="font-weight: bold; color: #333 !important;">This FREE advance training is limited so act now!</h2>
               <h3>Save Your FREE Seat, Attend The Workshop &amp; Download Your Book...</h3>
               <form>
                  <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                  <a href="https://bigticketcommissions.info/user/%link%">
                     <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
                  </a>
               </form>
            </div>
            <div class="clearfix"></div>
            <br /><br /><br />
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script>// <![CDATA[
         // Set the date we're counting down to
         var countDownDate = new Date("%cddate1%").getTime();
         
         // Update the count down every 1 second
         var x = setInterval(function() {
         // Get todays date and time
         var now = new Date().getTime();
         
         // Find the distance between now an the count down date
         var distance = countDownDate - now;
         
         // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
         // Display the result in the element with id="demo"
         document.getElementById("counter").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
           document.getElementById("counter2").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
         
         // If the count down is finished, write some text
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter").innerHTML = "EXPIRED";
         }
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter2").innerHTML = "EXPIRED";
         }
         
         }, 1000);
         // ]]>
      </script>
   </body>
</html>`,
		webinar: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Webinar Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/70/css/bootstrap.min.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/70/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/70/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='https://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/70/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/70/img/bg13.jpg') no-repeat top center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .timer-section h3 strong {
         color: #fff;
         }
         .dark .section.timer-section {
         background: url('https://bigticketcommissions.info/upload/tpl/70/img/bg6.jpg') no-repeat center center !important;
         background-size: cover;
         padding-bottom:45px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #333;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color:#333;
         font-weight: 600;
         font-size: 60px;
         margin:0px auto 40px !important;
         }
         .overflow h2 {
         color:#fff;
         }
         .overflow h1.headline strong {
         }
         .submit {
         background: #f0c408 !important;
         border: 0 !important;
         color: #333 !important;
         text-shadow: none;
         }
         .dark h1.headline strong {
         font-weight: 600;
         color: #f0c408;
         }
         .submit:hover {
         background:#333 !important;
         color:#fff !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 300 40px/1 "Montserrat";
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0; 
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: #f0c408 !important;
         border: 0 !important;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .timer-section h2 {
         font-size: 45px;
         font-family:"Roboto Condensed";
         color:#333;
         }
         .footer {
         background:rgb(215, 215, 215);
         color:rgba(0,0,0,0.6);
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background: rgb(45, 45, 45);
         color: #fff;
         padding: 30px 0;
         border-bottom: 5px solid rgb(159, 159, 159);
         }
         .top-bar h1 {
         font:700 35px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:20px;
         background:#fff;
         text-align: center;
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         .timer-section .submit {
         padding: 25px 35px 30px !important;
         margin:25px auto !important;
         font-size:45px !important;
         }
         .dark .embed-container {
         border: 0;
         margin-top:0 !important;
         }
         .filled {
         background:rgb(238, 44, 44);
         color:#fff;
         text-transform: uppercase;
         letter-spacing: 2px;
         padding:5px 0;
         margin:0 auto 25px;
         }
      </style>
   </head>
   <body class="dark">
      <div class="top-bar">
         <div class="container">
            <h1 class="headline" style="position: relative;">The Ultimate <strong>'On-Demand'</strong> Sales Generating System</h1>
         </div>
      </div>
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <h4 class="filled">Your Webinar Is In Progress. Do not close the window or the presentation will end.</h4>
                     <div class="col-md-9 col-sm-11 col-xs-12 center-block">
                        <div class="embed-container"><iframe width="560" height="315" id="signup" src="https://www.youtube.com/embed/y83x7MgzWOA?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" allowfullscreen="allowfullscreen" frameborder="0"></iframe></div>
                     </div>
                     <div class="timer-section col-md-10 center-block col-xs-12">
                        <h2 style="font-weight: bold;">Extremely Limited Time Offer!</h2>
                        <h3>100% Money Back Guarantee. Only 100 spots available. This WILL sell out fast.</h3>
                        <a href="https://bigticketcommissions.info/user/%link%">
                           <div class="submit btn">YES, I DESERVE THIS! <strong>&raquo;</strong></div>
                        </a>
                        <div class="clearfix"></div>
                     </div>
                  </div>
                  <div class="clearfix"></div>
               </div>
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>`,
		download: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Download Page</title>
      <link
         href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
         rel="stylesheet"
         />
      <link href="https://bigticketcommissions.info/upload/tpl/70/css/style.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/70/css/font-awesome.min.css" rel="stylesheet" />
      <link
         href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Lato:400,700,300,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Shadows+Into+Light"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700"
         rel="stylesheet"
         />
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <style>
         .video-wrapper .overflow {
         width: 100%;
         padding-bottom: 26px;
         background-image: url('https://bigticketcommissions.info/upload/tpl/70/img/newbg.jpg');
         background-repeat: no-repeat;
         background-size: cover;
         z-index: 2;
         height: 420px;
         background-position-y: -40px;
         }
         @media (max-width: 991px) {
         .video-wrapper h1 {
         margin-top: 10px !important;
         }
         }
      </style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
   </head>
   <body>
      <div class="video-wrapper">
         <div class="overflow">
            <div class="container">
               <div class="col-md-12">
                  <h1 style="position: relative; margin-top: 60px;" class="headline text-center"><strong>Thank You For Attending The Workshop</strong></h1>
               </div>
            </div>
         </div>
      </div>
      <div class="section">
         <div class="container">
            <h2 class="headline2">DOWNLOAD YOUR <b style="color: #ee513e;">BONUSES BELOW</b></h2>
         </div>
      </div>
      <!--begin_block-->
      <div class="section">
         <div class="container">
            <div class="col-md-5 col-xs-12 text-center">%cover%</div>
            <div class="col-md-7 col-xs-12">
               <h2 class="headline2">%title%</h2>
               <p>%summary%</p>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%download%</div>
               <div class="clearfix"></div>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%license%</div>
            </div>
            <div class="clearfix"></div>
            <div><br /><br /></div>
         </div>
      </div>
      <!--end_block-->
      <div class="footer row">
         <div class="footer-wrap container">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <div class="pull-left">Copyright &copy; Yoursite.com. All rights reserved.</div>
            </div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>`,
	},
	{
		name: "View 12",
		image: `${config.apiUrl}uploads/images/template12.png`,
		optIn: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Optin Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/71/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/71/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='http://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/71/img/check.png);
         background-size: 20px;
         background-position: left center;
         color:#333;
         }
         .dark .video-wrapper .overflow  {
         background: url('https://bigticketcommissions.info/upload/tpl/71/img/bg10.jpg') no-repeat center center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: rgb(23, 56, 88);
         font-weight: bold;
         text-transform: uppercase;
         font-size:24px;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color: #19d98d;
         font-weight: 700;
         font-size: 65px;
         }
         .overflow h2 {
         color:#333;
         }
         .overflow h1.headline strong {
         color:#ffcc00;
         }
         .submit {
         background: #d9198d !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         }
         .submit:hover {
         background:#0c9f65 !important;
         color:#fff !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         h1.headline {
         font: 300 8 0px/1 "Montserrat";
         }
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0;
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: #d9198d !important;
         border: 0 !important;
         color: #fff;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .footer {
         background:#fff;
         color:#333;
         padding:40px 0;
         }
         input {
         color:#333;
         border:1px solid rgba(0,0,0,0.2) !important;
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .top-bar {
         background:#fff;
         color:#333;
         padding:30px 0;
         border-bottom:5px solid rgb(58, 105, 152);
         }
         .top-bar h1 {
         font:700 62px "Montserrat";
         color:#fff;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:#e21313;
         font-size:25px;
         }
         .dark .section.gray {
         background: url('https://bigticketcommissions.info/upload/tpl/71/img/bg12.jpg') no-repeat center center !important;
         background-size:cover;
         }
         .step {
         padding:20px;
         border-radius:25px;
         background:#fff;
         text-align: center;
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         .section.gray h3 {
         color:#fff;
         }
      </style>
   </head>
   <body class="dark">
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <h3>- Exclusive Masterclass -</h3>
                     <h1 class="headline" style="position: relative;">FREE Book + Workshop</h1>
                     <h3>The Ultimate 'On-Demand' Sales Generating System!</h3>
                     <div class="col-md-6 col-xs-12">
                        <h2>During The Workshop, You&rsquo;ll Learn:</h2>
                        <ul class="list2">
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                           <li>X</li>
                        </ul>
                     </div>
                     <div class="col-md-6 col-xs-12"><br /><img src="https://bigticketcommissions.info/upload/tpl/71/img/laptop.png" class="img-responsive center-block" /></div>
                     <div class="clearfix"></div>
                     <br />
                     <div class="col-md-9 col-xs-12 center-block">
                        <form>
                           <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                           <a href="https://bigticketcommissions.info/user/%link%">
                              <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
                           </a>
                        </form>
                        <h1 class="headline" style="position: relative; font-size: 50px;">99 SEATS LEFT! HURRY UP!</h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="section gray" style="padding-bottom: 40px;">
         <div class="container">
            <h2 class="headline2" style="color: #fff !important; font-size: 50px;">HOW TO CLAIM YOUR <b style="color: #19d98d;">FREE BOOK?</b></h2>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 1: Register For The Free Workshop!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/71/img/step1.jpg" class="img-responsive center-block" /> Take advantage of the FREE workshop. <br /><br /> You'll be learning some incredible things, so be ready with your notepad! <br /><br /> Don&rsquo;t miss this opportunity!<br /><br />
               </div>
            </div>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 2: Show Up For The Webinar!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/71/img/step2.jpg" class="img-responsive center-block" /> After you register... <br /><br /> Make sure you&rsquo;re ready to take some AWESOME notes during the workshop! <br /><br /> Don&rsquo;t miss out on the information &amp; content we&rsquo;re going to give you...
               </div>
            </div>
            <div class="col-md-4 col-xs-12" style="padding: 10px;">
               <div class="step">
                  <h2>Step 3: On The LIVE Webinar - Receive Your Free Book!</h2>
                  <img src="https://bigticketcommissions.info/upload/tpl/71/img/step3.jpg" class="img-responsive center-block" /> You must show up to the Workshop to receive your Free Book! <br /><br /> During the live webinar, we'll be giving you access to the free book! 
               </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-10 col-xs-12 center-block">
               <h2 style="font-weight: bold;">This FREE advance training is limited so act now!</h2>
               <h3>Save Your FREE Seat, Attend The Workshop &amp; Download Your Book...</h3>
               <form>
                  <input type="email" placeholder="Your Email Address Here..." name="email" class="field" /> 
                  <a href="https://bigticketcommissions.info/user/%link%">
                     <div class="submit btn">Click Here - Save Your FREE Seat &amp; Download Book <strong>&raquo;</strong></div>
                  </a>
               </form>
            </div>
            <div class="clearfix"></div>
            <br /><br /><br />
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script>// <![CDATA[
         // Set the date we're counting down to
         var countDownDate = new Date("%cddate1%").getTime();
         
         // Update the count down every 1 second
         var x = setInterval(function() {
         // Get todays date and time
         var now = new Date().getTime();
         
         // Find the distance between now an the count down date
         var distance = countDownDate - now;
         
         // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         
         // Display the result in the element with id="demo"
         document.getElementById("counter").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
           document.getElementById("counter2").innerHTML = "<span>" + days + "<p>Days</p></span><span>" + hours + "<p>Hours</p></span><span>"
         + minutes + "<p>Minutes</p></span><span>" + seconds + "<p>Seconds</p></span>";
         
         // If the count down is finished, write some text
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter").innerHTML = "EXPIRED";
         }
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("counter2").innerHTML = "EXPIRED";
         }
         
         }, 1000);
         // ]]>
      </script>
   </body>
</html>`,
		webinar: `
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Done For You Funnel - Webinar Page</title>
      <!-- Bootstrap -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/71/css/bootstrap.min.css?v=1" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/71/css/style.css" rel="stylesheet">
      <link href="https://bigticketcommissions.info/upload/tpl/71/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href='https://fonts.googleapis.com/css?family=Lato:400,700,300,900' rel='stylesheet' type='text/css'>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700" rel="stylesheet">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jquery can be removed incase already included in the page -->
      <!-- ClickBank Trust Badge -->
      <style>
         .list2 li {
         font-size: 21px;
         background-image: url(https://bigticketcommissions.info/upload/tpl/71/img/check.png);
         background-size: 20px;
         background-position: left center;
         }
         .dark .video-wrapper .overflow  {
         background: #171d54 url('https://bigticketcommissions.info/upload/tpl/71/img/bg12.jpg') no-repeat center center;
         background-size:cover;
         color:#fff;
         padding: 40px 0 60px;
         }
         .timer-section h3 strong {
         color: #fff;
         }
         .dark .section.timer-section {
         background: url('https://bigticketcommissions.info/upload/tpl/71/img/bg6.jpg') no-repeat center center !important;
         background-size: cover;
         padding-bottom:45px;
         }
         .list2 {
         margin-top:30px;
         }
         .dark .video-wrapper h3 {
         color: #fff;
         }
         .filled-headline {
         background:rgb(255, 227, 0);
         color:#333;
         }
         .overflow h1.headline {
         color:#333;
         font-weight: 600;
         font-size: 60px;
         margin:0px auto 40px !important;
         }
         .overflow h2 {
         color:#fff;
         }
         .overflow h1.headline {
         }
         .submit {
         background:rgb(255, 243, 9) !important;
         border: 0 !important;
         color: #000;
         text-shadow: none;
         }
         .dark h1.headline strong {
         font-weight: 700;
         color: #d92e19;
         }
         .submit:hover {
         background:#fff !important;
         color:#333 !important;
         }
         .submit small {
         color:#fff;
         }
         #counter span {
         box-shadow:0 0 10px rgba(0,0,0,0.2);
         }
         .submit:hover small { color:#333 !important;}
         .field {
         padding: 14px 20px;
         border-radius: 10px;
         border: 0; 
         width: 100%;
         margin: 10px auto;
         text-align: center;
         }
         .submit {
         background: rgb(255, 243, 9) !important;
         border: 0 !important;
         color: #000;
         text-shadow: none;
         white-space: normal;
         padding: 15px 35px 20px !important;
         }
         .timer-section h2 {
         font-size: 45px;
         font-family:"Roboto Condensed";
         color:#fff;
         }
         .footer {
         background:rgb(196, 196, 196);
         color:rgba(0,0,0,0.6);
         padding:40px 0;
         }
         input {
         color:#333;
         }
         .top-bar {
         background: #fff;
         color: #333;
         padding: 30px 0;
         border-bottom: 5px solid rgb(159, 159, 159);
         }
         .top-bar h1 {
         font:700 65px "Roboto Condensed";
         color:#333;
         margin:0 auto !important;
         }
         .top-bar h3 {
         margin:0 auto;
         color:rgb(255, 227, 0);
         font-size:25px;
         }
         .dark .section.gray {
         background:rgb(231, 231, 231) !important;
         }
         .step {
         padding:20px;
         background:#fff;
         text-align: center;
         }
         .dark .section .step h2 {
         color: #333 !important;
         font-weight: bold;
         margin-bottom: 20px;
         font-size: 25px;
         margin-top: 0;
         }
         .step img {
         margin-bottom:15px;
         }
         .timer-section .submit {
         padding: 25px 35px 30px !important;
         margin:25px auto !important;
         font-size:45px !important;
         }
         .dark .embed-container {
         border: 0;
         margin-top:0 !important;
         }
         .filled {
         background:rgb(255, 243, 9);
         color: #000;
         text-transform: uppercase;
         letter-spacing: 2px;
         padding:5px 0;
         margin:0 auto 25px;
         }
      </style>
   </head>
   <body class="dark">
      <div class="top-bar">
         <div class="container">
            <h1 class="headline" style="position: relative;">The Ultimate <strong>'On-Demand'</strong> Sales Generating System</h1>
         </div>
      </div>
      <div class="wrapper" id="home">
         <div class="video-wrapper">
            <div class="overflow">
               <div class="container">
                  <div class="col-lg-12 col-md-12 left">
                     <h4 class="filled">Your Webinar Is In Progress. Do not close the window or the presentation will end.</h4>
                     <div class="col-md-9 col-sm-11 col-xs-12 center-block">
                        <div class="embed-container"><iframe width="560" height="315" id="signup" src="https://www.youtube.com/embed/y83x7MgzWOA?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" allowfullscreen="allowfullscreen" frameborder="0"></iframe></div>
                     </div>
                     <div class="timer-section col-md-10 center-block col-xs-12">
                        <h2 style="font-weight: bold;">Extremely Limited Time Offer!</h2>
                        <h3>100% Money Back Guarantee. Only 100 spots available. This WILL sell out fast.</h3>
                        <a href="https://bigticketcommissions.info/user/%link%">
                           <div class="submit btn">YES, I DESERVE THIS! <strong>&raquo;</strong></div>
                        </a>
                        <div class="clearfix"></div>
                     </div>
                  </div>
                  <div class="clearfix"></div>
               </div>
            </div>
         </div>
      </div>
      <div class="footer row">
         <br />
         <div style="font-size: 12px; text-align: center;">
            <div class="container">This site is not a part of the FaceBook website or FaceBook INC. Additionally, this site is NOT endorsed by FaceBook in ANY WAY. FACEBOOK is a trademark of FaceBook INC <br /><br /> Income Disclaimer <br /><br /> This website and the items it distributes contain business strategies, marketing methods and other business advice that, regardless of my own results and experience, may not produce the same results (or any results) for you. Traffictakeover.net makes absolutely no guarantee, expressed or implied, that by following the advice or content available from this web site you will make any money or improve current profits, as there are several factors and variables that come into play regarding any given business. <br /><br /> Primarily, results will depend on the nature of the product or business model, the conditions of the marketplace, the experience of the individual, and situations and elements that are beyond your control.. <br /><br /> As with any business endeavour, you assume all risk related to investment and money based on your own discretion and at your own potential expense.. <br /><br /> Liability Disclaimer <br /><br /> By reading this website or the documents it offers, you assume all risks associated with using the advice given, with a full understanding that you, solely, are responsible for anything that may occur as a result of putting this information into action in any way, and regardless of your interpretation of the advice. <br /><br /> You further agree that our company cannot be held responsible in any way for the success or failure of your business as a result of the information provided by our company. It is your responsibility to conduct your own due diligence regarding the safe and successful operation of your business if you intend to apply any of our information in any way to your business operations. <br /><br /> In summary, you understand that we make absolutely no guarantees regarding income as a result of applying this information, as well as the fact that you are solely responsible for the results of any action taken on your part as a result of any given information.. <br /><br /> In addition, for all intents and purposes you agree that our content is to be considered "for entertainment purposes only". Always seek the advice of a professional when making financial, tax or business decisions</div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>`,
		download: `
		
		<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Download Page</title>
      <link
         href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
         rel="stylesheet"
         />
      <link href="https://bigticketcommissions.info/upload/tpl/71/css/style.css" rel="stylesheet" />
      <link href="https://bigticketcommissions.info/upload/tpl/71/css/font-awesome.min.css" rel="stylesheet" />
      <link
         href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Lato:400,700,300,900"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Shadows+Into+Light"
         rel="stylesheet"
         />
      <link
         href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700"
         rel="stylesheet"
         />
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
      <style>
         .video-wrapper .overflow {
         width: 100%;
         padding-bottom: 26px;
         background-image: url('https://bigticketcommissions.info/upload/tpl/71/img/newbg.jpg');
         background-repeat: no-repeat;
         background-size: cover;
         z-index: 2;
         height: 420px;
         background-position-y: -40px;
         }
         @media (max-width: 991px) {
         .video-wrapper h1 {
         margin-top: 10px !important;
         }
         }
      </style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
   </head>
   <body>
      <div class="video-wrapper">
         <div class="overflow">
            <div class="container">
               <div class="col-md-12">
                  <h1 style="position: relative; margin-top: 60px;" class="headline text-center"><strong>Thank You For Attending The Workshop</strong></h1>
               </div>
            </div>
         </div>
      </div>
      <div class="section">
         <div class="container">
            <h2 class="headline2">DOWNLOAD YOUR <b style="color: #ee513e;">BONUSES BELOW</b></h2>
         </div>
      </div>
      <!--begin_block-->
      <div class="section">
         <div class="container">
            <div class="col-md-5 col-xs-12 text-center">%cover%</div>
            <div class="col-md-7 col-xs-12">
               <h2 class="headline2">%title%</h2>
               <p>%summary%</p>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%download%</div>
               <div class="clearfix"></div>
               <div class="col-md-10 col-sm-10 col-xs-12 center-block">%license%</div>
            </div>
            <div class="clearfix"></div>
            <div><br /><br /></div>
         </div>
      </div>
      <!--end_block-->
      <div class="footer row">
         <div class="footer-wrap container">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <div class="pull-left">Copyright &copy; Yoursite.com. All rights reserved.</div>
            </div>
         </div>
      </div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </body>
</html>`,
	},
];
//#endregion

export async function seedNewCampaignTemplate() {
	console.log("------------------------------------");
	console.log("start insert newCampaignsTeamplates------------------>");
	let i = 0;
	for (const item of newCampaignsTeamplates) {
		i++;
		await newCampaignTemplateRepo.createNewCampaignTemplate(item).then(
			(data) => {
				console.log("create default newCampaignsTeamplates success");
			},
			(reason) => {
				console.log(reason);
			}
		);
	}
	console.log(
		"end insert newCampaignsTeamplates------------------>: " +
			i +
			" / " +
			newCampaignsTeamplates.length
	);
	return 1;
}

// npm run build
// node ./build/seedDataNewCampaign

seedNewCampaignTemplate();
