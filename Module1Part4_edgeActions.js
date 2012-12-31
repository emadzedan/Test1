/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 583, function(sym, e) {
         audioElement.currentTime = 0.1;
         audioElement.play();
         int0 = setInterval(function() {
         	if (audioElement.currentTime >= 23.4 && audioElement.currentTime <= 23.45) {
         		audioElement.pause();
         		clearInterval(int0);
         		//Play the timeline:
         		//alert("Goto Next Animation");
         		//sym.getComposition().getStage().play("Animation2");
         	}
         }, 1);
         
         
         //Hide Volume Controler on iPad and iPhone
         if(navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) ){
         	Hidden = true;
         	sym.getComposition().getStage().getSymbol("mc_MuteButton").play("Hide");
         }else{
         	Hidden = false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mc_MuteButton}", "click", function(sym, e) {
         if(Hidden == false){
         	if(SoundVolumeOn == true){
         		SoundVolumeOn = false;
         		sym.getComposition().getStage().getSymbol("mc_MuteButton").play("Off");
         		audioElement.volume = 0;
         	}else{
         		SoundVolumeOn = true;
         		sym.getComposition().getStage().getSymbol("mc_MuteButton").play("On");
         		audioElement.volume = 1;
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mc_MuteButton}", "mouseover", function(sym, e) {
         $(this.lookupSelector("mc_MuteButton")).css("cursor","pointer");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         BrowserDetect = {
         	init: function () {
         		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
         		this.version = this.searchVersion(navigator.userAgent)
         			|| this.searchVersion(navigator.appVersion)
         			|| "an unknown version";
         		this.OS = this.searchString(this.dataOS) || "an unknown OS";
         	},
         	searchString: function (data) {
         		for (var i=0;i<data.length;i++)	{
         			var dataString = data[i].string;
         			var dataProp = data[i].prop;
         			this.versionSearchString = data[i].versionSearch || data[i].identity;
         			if (dataString) {
         				if (dataString.indexOf(data[i].subString) != -1)
         					return data[i].identity;
         			}
         			else if (dataProp)
         				return data[i].identity;
         		}
         	},
         	searchVersion: function (dataString) {
         		var index = dataString.indexOf(this.versionSearchString);
         		if (index == -1) return;
         		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
         	},
         	dataBrowser: [
         		{
         			string: navigator.userAgent,
         			subString: "Chrome",
         			identity: "Chrome"
         		},
         		{ 	string: navigator.userAgent,
         			subString: "OmniWeb",
         			versionSearch: "OmniWeb/",
         			identity: "OmniWeb"
         		},
         		{
         			string: navigator.vendor,
         			subString: "Apple",
         			identity: "Safari",
         			versionSearch: "Version"
         		},
         		{
         			prop: window.opera,
         			identity: "Opera",
         			versionSearch: "Version"
         		},
         		{
         			string: navigator.vendor,
         			subString: "iCab",
         			identity: "iCab"
         		},
         		{
         			string: navigator.vendor,
         			subString: "KDE",
         			identity: "Konqueror"
         		},
         		{
         			string: navigator.userAgent,
         			subString: "Firefox",
         			identity: "Firefox"
         		},
         		{
         			string: navigator.vendor,
         			subString: "Camino",
         			identity: "Camino"
         		},
         		{		// for newer Netscapes (6+)
         			string: navigator.userAgent,
         			subString: "Netscape",
         			identity: "Netscape"
         		},
         		{
         			string: navigator.userAgent,
         			subString: "MSIE",
         			identity: "Explorer",
         			versionSearch: "MSIE"
         		},
         		{
         			string: navigator.userAgent,
         			subString: "Gecko",
         			identity: "Mozilla",
         			versionSearch: "rv"
         		},
         		{ 		// for older Netscapes (4-)
         			string: navigator.userAgent,
         			subString: "Mozilla",
         			identity: "Netscape",
         			versionSearch: "Mozilla"
         		}
         	],
         	dataOS : [
         		{
         			string: navigator.platform,
         			subString: "Win",
         			identity: "Windows"
         		},
         		{
         			string: navigator.platform,
         			subString: "Mac",
         			identity: "Mac"
         		},
         		{
         			   string: navigator.userAgent,
         			   subString: "iPhone",
         			   identity: "iPhone/iPod"
         	    },
         		{
         			string: navigator.platform,
         			subString: "Linux",
         			identity: "Linux"
         		}
         	]
         
         };
         BrowserDetect.init();
         //=====================================
         PlayOnce = false;
         SoundVolumeOn = true;
         
         
         var int0 = 0;
         var int1_1 = 0;
         var int1_2 = 0;
         var int1_3 = 0;
         var int2_1 = 0;
         var int2_2 = 0;
         var int3_1 = 0;
         var int3_2 = 0;
         var int4_1 = 0;
         var int4_2 = 0;
         var int5_1 = 0;
         var int5_2 = 0;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Play_Source}", "click", function(sym, e) {
         //alert(BrowserDetect.browser);
         var EmadVarTemp2 = 0;
         if(PlayOnce == false){
         	PlayOnce = true;
         	sym.getComposition().getStage().play("LoadSoundLabel");
         	//Sound1 = new Audio();
         	if (BrowserDetect.browser == "Explorer" || BrowserDetect.browser == "Safari" || BrowserDetect.browser == "Chrome"){
         		//Sound1 = loadAudio('Sounds/Ready/AllSound.mp3');
         		audioElement = document.getElementById('EmadAudio');
         		audioElement.play();
         		var int1 = setInterval(function() {
         			if (audioElement.currentTime >= 0.10) {
         				//Play the timeline:
         				sym.getComposition().getStage().play("Start");
         				clearInterval(int1);
         			}
         		}, 1);
         
         		
         	}else if( BrowserDetect.browser == "Firefox"){
         		//Sound1 = loadAudio('Sounds/FireFox/AllSound.ogg');
         		audioElement = document.getElementById('EmadAudio');
         		audioElement.play();
         		var int1 = setInterval(function() {
         			if (audioElement.currentTime >= 0.20) {
         				//Play the timeline:
         				sym.getComposition().getStage().play("Start");
         				clearInterval(int1);
         			}
         		}, 1);
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Play_Source}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Play_Source")).css("cursor","pointer");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         sym.stop();
         audioElement.pause();
         clearInterval(int0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Play}", "click", function(sym, e) {
         sym.play("Start");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Button1}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Button1")).css("cursor","pointer");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Button2}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Button2")).css("cursor","pointer");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Button3}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Button3")).css("cursor","pointer");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Button4}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Button4")).css("cursor","pointer");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Button5}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Button5")).css("cursor","pointer");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Play}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Play")).css("cursor","pointer");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38833, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40083, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40833, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41583, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Button1}", "click", function(sym, e) {
         audioElement.pause();
         sym.play("Content1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Button2}", "click", function(sym, e) {
         audioElement.pause();
         sym.play("Content2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Button3}", "click", function(sym, e) {
         audioElement.pause();
         sym.play("Content3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Button4}", "click", function(sym, e) {
         audioElement.pause();
         sym.play("Content4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Button5}", "click", function(sym, e) {
         audioElement.pause();
         sym.play("Content5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38333, function(sym, e) {
         clearInterval(int0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39000, function(sym, e) {
         clearInterval(int0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39665, function(sym, e) {
         clearInterval(int0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40250, function(sym, e) {
         clearInterval(int0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41000, function(sym, e) {
         clearInterval(int0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'mc_MuteButton'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 83, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("mc_MuteButton");
   //Edge symbol end:'mc_MuteButton'

   //=========================================================
   
   //Edge symbol: 'Title'
   (function(symbolName) {   
   
   })("Title");
   //Edge symbol end:'Title'

   //=========================================================
   
   //Edge symbol: 'Link3'
   (function(symbolName) {   
   
   })("Link3");
   //Edge symbol end:'Link3'

   //=========================================================
   
   //Edge symbol: 'Link2'
   (function(symbolName) {   
   
   })("Link2");
   //Edge symbol end:'Link2'

   //=========================================================
   
   //Edge symbol: 'Link1'
   (function(symbolName) {   
   
   })("Link1");
   //Edge symbol end:'Link1'

   //=========================================================
   
   //Edge symbol: 'Link4'
   (function(symbolName) {   
   
   })("Link4");
   //Edge symbol end:'Link4'

   //=========================================================
   
   //Edge symbol: 'Link5'
   (function(symbolName) {   
   
   })("Link5");
   //Edge symbol end:'Link5'

   //=========================================================
   
   //Edge symbol: 'Button1'
   (function(symbolName) {   
   
   })("Button1");
   //Edge symbol end:'Button1'

   //=========================================================
   
   //Edge symbol: 'Button2'
   (function(symbolName) {   
   
   })("Button2");
   //Edge symbol end:'Button2'

   //=========================================================
   
   //Edge symbol: 'Button3'
   (function(symbolName) {   
   
   })("Button3");
   //Edge symbol end:'Button3'

   //=========================================================
   
   //Edge symbol: 'Button4'
   (function(symbolName) {   
   
   })("Button4");
   //Edge symbol end:'Button4'

   //=========================================================
   
   //Edge symbol: 'Button5'
   (function(symbolName) {   
   
   })("Button5");
   //Edge symbol end:'Button5'

   //=========================================================
   
   //Edge symbol: 'ArrowAnimation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play("Start");

      });
      //Edge binding end

   })("ArrowAnimation");
   //Edge symbol end:'ArrowAnimation'

   //=========================================================
   
   //Edge symbol: 'Menu1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_CloseGroup1}", "mouseover", function(sym, e) {
         $(this.lookupSelector("CloseGroup1")).css("cursor","pointer");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_2Group}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Link1_2Group")).css("cursor","pointer");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_1Group}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Link1_1Group")).css("cursor","pointer");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CloseGroup1}", "click", function(sym, e) {
         sym.getComposition().getStage().play("EndMain");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CloseSub}", "click", function(sym, e) {
         audioElement.pause();
         sym.play("Start");
         clearInterval(int1_1);
         clearInterval(int1_2);
         clearInterval(int1_3);
         audioElement.pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 833, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_1Group}", "click", function(sym, e) {
         sym.play("Screen1");
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_2Group}", "click", function(sym, e) {
         sym.play("Screen2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Next_Circle}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Next_Circle")).css("cursor","pointer");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2083, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Next_Circle}", "click", function(sym, e) {
         audioElement.pause();
         sym.play("Screen3");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Previous_Circle}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Previous_Circle")).css("cursor","pointer");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Previous_Circle}", "click", function(sym, e) {
         audioElement.pause();
         sym.play("Screen2");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         audioElement.currentTime = 24.2;
         audioElement.play();
         int1_1 = setInterval(function() {
         	if (audioElement.currentTime >= 42.8 && audioElement.currentTime <= 42.85) {
         		audioElement.pause();
         		clearInterval(int1_1);
         	}
         }, 1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         audioElement.currentTime = 43.4;
         audioElement.play();
         int1_2 = setInterval(function() {
         	if (audioElement.currentTime >= 87.2 && audioElement.currentTime <= 87.25) {
         		audioElement.pause();
         		clearInterval(int1_2);
         	}
         }, 1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1667, function(sym, e) {
         audioElement.currentTime = 88;
         audioElement.play();
         int1_3 = setInterval(function() {
         	if (audioElement.currentTime >= 114.5 && audioElement.currentTime <= 114.55) {
         		audioElement.pause();
         		clearInterval(int1_3);
         	}
         }, 1);
         
         
         
         sym.$('ScrollContainer').html('<iframe id="myFrame"src="ScrollContent.html" frameborder="0" scrolling="yes" height="168" width="548"></iframe>');
         //sym.$('ScrollContainer').css("-webkit-overflow-scrolling","touch");

      });
      //Edge binding end

   })("Menu1");
   //Edge symbol end:'Menu1'

   //=========================================================
   
   //Edge symbol: 'Menu1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         audioElement.currentTime = 115.2;
         audioElement.play();
         int2_1 = setInterval(function() {
         	if (audioElement.currentTime >= 129.2 && audioElement.currentTime <= 129.25) {
         		audioElement.pause();
         		clearInterval(int2_1);
         	}
         }, 1);

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 833, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1333, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CloseGroup1}", "mouseover", function(sym, e) {
         $(this.lookupSelector("CloseGroup1")).css("cursor","pointer");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_2Group}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Link1_2Group")).css("cursor","pointer");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_1Group}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Link1_1Group")).css("cursor","pointer");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CloseGroup1}", "click", function(sym, e) {
         sym.getComposition().getStage().play("EndMain");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CloseSub}", "click", function(sym, e) {
         audioElement.pause();
         sym.play("Start");
         clearInterval(int2_1);
         clearInterval(int2_2);
         audioElement.pause();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_1Group}", "click", function(sym, e) {
         sym.play("Screen1");
         

      });
         //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Link1_2Group}", "click", function(sym, e) {
         sym.play("Screen2");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_PDFIcon}", "mouseover", function(sym, e) {
         $(this.lookupSelector("PDFIcon")).css("cursor","pointer");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_PDFIcon}", "click", function(sym, e) {
         window.open("Volunteer_Application.pdf", "blank");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         var PlayingFlag = false;
         
         audioElement.currentTime = 129.8;
         audioElement.play();
         
         audioElement.addEventListener('playing',function() { myfunction(); },false); 
         function myfunction(){
         	PlayingFlag = true;
         }
         var int4 = setInterval(function() {
         	if(PlayingFlag == false){
         		//alert("ForceplayingDone");
         		audioElement.currentTime = 129.8;
         		audioElement.play();
         		clearInterval(int4);
         	}else{
         		//alert("Unknown Error");
         		audioElement.currentTime = 129.8;
         		audioElement.play();
         		clearInterval(int4);
         	}
         }, 1);
         
         
         
         
         
         int2_2 = setInterval(function() {
         	if (audioElement.currentTime >= 137.2 && audioElement.currentTime <= 137.25) {
         		audioElement.pause();
         		clearInterval(int2_2 );
         	}
         }, 1);
         

      });
      //Edge binding end

      })("Menu2");
   //Edge symbol end:'Menu2'

   //=========================================================
   
   //Edge symbol: 'Menu2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         audioElement.currentTime = 138;
         audioElement.play();
         int3_1 = setInterval(function() {
         	if (audioElement.currentTime >= 155.6 && audioElement.currentTime <= 155.65) {
         		audioElement.pause();
         		clearInterval(int3_1);
         	}
         }, 1);

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 833, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         audioElement.currentTime = 156.2;
         audioElement.play();
         
         int3_2 = setInterval(function() {
         	if (audioElement.currentTime >= 177.1 && audioElement.currentTime <= 177.15) {
         		audioElement.pause();
         		clearInterval(int3_2);
         	}
         }, 1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1333, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CloseGroup1}", "mouseover", function(sym, e) {
         $(this.lookupSelector("CloseGroup1")).css("cursor","pointer");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_2Group}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Link1_2Group")).css("cursor","pointer");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_1Group}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Link1_1Group")).css("cursor","pointer");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CloseGroup1}", "click", function(sym, e) {
         sym.getComposition().getStage().play("EndMain");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CloseSub}", "click", function(sym, e) {
         audioElement.pause();
         sym.play("Start");
         clearInterval(int3_1);
         clearInterval(int3_2);
         audioElement.pause();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_1Group}", "click", function(sym, e) {
         sym.play("Screen1");
         

      });
         //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Link1_2Group}", "click", function(sym, e) {
         sym.play("Screen2");

      });
         //Edge binding end

      })("Menu3");
   //Edge symbol end:'Menu3'

   //=========================================================
   
   //Edge symbol: 'Menu3_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         audioElement.currentTime = 177.7;
         audioElement.play();
         int4_1 = setInterval(function() {
         	if (audioElement.currentTime >= 195.7 && audioElement.currentTime <= 195.75) {
         		audioElement.pause();
         		clearInterval(int4_1);
         	}
         }, 1);

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 833, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         audioElement.currentTime = 196.5;
         audioElement.play();
         
         int4_2 = setInterval(function() {
         	if (audioElement.currentTime >= 211.3 && audioElement.currentTime <= 211.35) {
         		audioElement.pause();
         		clearInterval(int4_2);
         	}
         }, 1);

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1333, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CloseGroup1}", "mouseover", function(sym, e) {
         $(this.lookupSelector("CloseGroup1")).css("cursor","pointer");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_2Group}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Link1_2Group")).css("cursor","pointer");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_1Group}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Link1_1Group")).css("cursor","pointer");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CloseGroup1}", "click", function(sym, e) {
         sym.getComposition().getStage().play("EndMain");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CloseSub}", "click", function(sym, e) {
         audioElement.pause();
         sym.play("Start");
         clearInterval(int4_1);
         clearInterval(int4_2);
         audioElement.pause();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_1Group}", "click", function(sym, e) {
         sym.play("Screen1");
         

      });
            //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Link1_2Group}", "click", function(sym, e) {
         sym.play("Screen2");

      });
            //Edge binding end

         })("Menu4");
   //Edge symbol end:'Menu4'

   //=========================================================
   
   //Edge symbol: 'Menu3_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 333, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         audioElement.currentTime = 212;
         audioElement.play();
         int5_1 = setInterval(function() {
         	if (audioElement.currentTime >= 222.3 && audioElement.currentTime <= 222.35) {
         		audioElement.pause();
         		clearInterval(int5_1);
         	}
         }, 1);

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 833, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         audioElement.currentTime = 223;
         audioElement.play();
         int5_2 = setInterval(function() {
         	if (audioElement.currentTime >= 246.1 && audioElement.currentTime <= 264.15) {
         		audioElement.pause();
         		clearInterval(int5_2);
         	}
         }, 1);

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1333, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CloseGroup1}", "mouseover", function(sym, e) {
         $(this.lookupSelector("CloseGroup1")).css("cursor","pointer");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_2Group}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Link1_2Group")).css("cursor","pointer");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_1Group}", "mouseover", function(sym, e) {
         $(this.lookupSelector("Link1_1Group")).css("cursor","pointer");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CloseGroup1}", "click", function(sym, e) {
         sym.getComposition().getStage().play("EndMain");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CloseSub}", "click", function(sym, e) {
         audioElement.pause();
         sym.play("Start");
         clearInterval(int5_1);
         clearInterval(int5_2);
         audioElement.pause();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Link1_1Group}", "click", function(sym, e) {
         sym.play("Screen1");
         

      });
            //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Link1_2Group}", "click", function(sym, e) {
         sym.play("Screen2");

      });
            //Edge binding end

         })("Menu5");
   //Edge symbol end:'Menu5'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         //sym.$("Text").css("direction","rtl");

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(jQuery, AdobeEdge, "EDGE-11711582");