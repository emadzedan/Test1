/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'BG_Shape',
            type:'rect',
            rect:['0px','0px','800px','475px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,0.00)","none"]
         },
         {
            id:'Play_Source',
            type:'image',
            rect:['0px','0px','800px','475px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Play%20Source.png",'0px','0px']
         },
         {
            id:'LoadingText',
            display:'none',
            type:'text',
            rect:['0px','297px','800px','auto','auto','auto'],
            text:"Please Wait Untill The Content Loads",
            align:"center",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'StaticCircle',
            display:'none',
            type:'image',
            rect:['31px','106px','737px','304px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"StaticCircle.png",'0px','0px']
         },
         {
            id:'FireworksAnimationCircle',
            display:'none',
            type:'image',
            rect:['38px','108px','715px','287px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"FireworksAnimationCircle.gif",'0px','0px']
         },
         {
            id:'Title',
            display:'none',
            type:'rect',
            rect:['0','19','auto','auto','auto','auto']
         },
         {
            id:'Button1',
            display:'none',
            type:'rect',
            rect:['320','248','auto','auto','auto','auto']
         },
         {
            id:'Button4',
            display:'none',
            type:'rect',
            rect:['515','56','auto','auto','auto','auto']
         },
         {
            id:'Button3',
            display:'none',
            type:'rect',
            rect:['151','56','auto','auto','auto','auto']
         },
         {
            id:'Button5',
            display:'none',
            type:'rect',
            rect:['592','204','auto','auto','auto','auto']
         },
         {
            id:'Button2',
            display:'none',
            type:'rect',
            rect:['58','198','auto','auto','auto','auto']
         },
         {
            id:'ArrowAnimation',
            display:'none',
            type:'rect',
            rect:['301px','286px','auto','auto','auto','auto']
         },
         {
            id:'Play',
            display:'none',
            type:'image',
            rect:['689px','365px','100px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Play.png",'0px','0px']
         },
         {
            id:'Menu1',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'Menu2',
            display:'none',
            type:'rect',
            rect:['447','272','auto','auto','auto','auto']
         },
         {
            id:'Menu3',
            display:'none',
            type:'rect',
            rect:['463','305','auto','auto','auto','auto']
         },
         {
            id:'Menu4',
            display:'none',
            type:'rect',
            rect:['416','248','auto','auto','auto','auto']
         },
         {
            id:'Menu5',
            display:'none',
            type:'rect',
            rect:['558','265','auto','auto','auto','auto']
         },
         {
            id:'mc_MuteButton',
            display:'none',
            type:'rect',
            rect:['443','400','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Button2',
            symbolName:'Button2'
         },
         {
            id:'Menu5',
            symbolName:'Menu5'
         },
         {
            id:'Button1',
            symbolName:'Button1'
         },
         {
            id:'mc_MuteButton',
            symbolName:'mc_MuteButton'
         },
         {
            id:'Button3',
            symbolName:'Button3'
         },
         {
            id:'Button5',
            symbolName:'Button5'
         },
         {
            id:'ArrowAnimation',
            symbolName:'ArrowAnimation'
         },
         {
            id:'Title',
            symbolName:'Title'
         },
         {
            id:'Menu3',
            symbolName:'Menu3'
         },
         {
            id:'Menu1',
            symbolName:'Menu1'
         },
         {
            id:'Menu2',
            symbolName:'Menu2'
         },
         {
            id:'Button4',
            symbolName:'Button4'
         },
         {
            id:'Menu4',
            symbolName:'Menu4'
         }
         ]
      },
   states: {
      "Base State": {
         "${_LoadingText}": [
            ["style", "top", '296px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "width", '800px'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px']
         ],
         "${_Title}": [
            ["style", "top", '10px'],
            ["style", "display", 'none']
         ],
         "${_Play}": [
            ["style", "top", '365px'],
            ["style", "left", '689px'],
            ["style", "display", 'none']
         ],
         "${_Button3}": [
            ["style", "display", 'none']
         ],
         "${_Play_Source}": [
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_BG_Shape}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '475px'],
            ["color", "border-color", 'rgba(0, 0, 0, 0)'],
            ["style", "left", '0px'],
            ["style", "width", '800px']
         ],
         "${_Button2}": [
            ["style", "display", 'none']
         ],
         "${_mc_MuteButton}": [
            ["style", "display", 'none'],
            ["style", "left", '365px'],
            ["style", "top", '415px']
         ],
         "${_Button4}": [
            ["style", "display", 'none']
         ],
         "${_Button5}": [
            ["style", "display", 'none']
         ],
         "${_FireworksAnimationCircle}": [
            ["style", "top", '108px'],
            ["style", "left", '38px'],
            ["style", "display", 'none']
         ],
         "${_Menu5}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_Button1}": [
            ["style", "display", 'none']
         ],
         "${_Menu2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_StaticCircle}": [
            ["style", "top", '106px'],
            ["style", "left", '31px'],
            ["style", "display", 'none']
         ],
         "${_Menu4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '800px'],
            ["style", "height", '475px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Menu3}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Menu1}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_ArrowAnimation}": [
            ["style", "top", '286px'],
            ["style", "left", '301px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 120667,
         autoPlay: true,
         labels: {
            "LoadSoundLabel": 0,
            "Start": 583,
            "EndMain": 24000,
            "Content1": 38333,
            "Content2": 39000,
            "Content3": 39667,
            "Content4": 40250,
            "Content5": 41000
         },
         timeline: [
            { id: "eid13", tween: [ "style", "${_Play_Source}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid14", tween: [ "style", "${_Play_Source}", "display", 'none', { fromValue: 'block'}], position: 583, duration: 0 },
            { id: "eid40", tween: [ "style", "${_ArrowAnimation}", "left", '301px', { fromValue: '301px'}], position: 9000, duration: 0 },
            { id: "eid57", tween: [ "style", "${_ArrowAnimation}", "left", '9px', { fromValue: '301px'}], position: 11000, duration: 0 },
            { id: "eid54", tween: [ "style", "${_ArrowAnimation}", "left", '96px', { fromValue: '9px'}], position: 13000, duration: 0 },
            { id: "eid61", tween: [ "style", "${_ArrowAnimation}", "left", '446px', { fromValue: '96px'}], position: 18040, duration: 0 },
            { id: "eid63", tween: [ "style", "${_ArrowAnimation}", "left", '541px', { fromValue: '446px'}], position: 20000, duration: 0 },
            { id: "eid129", tween: [ "style", "${_Menu3}", "display", 'block', { fromValue: 'none'}], position: 39665, duration: 0 },
            { id: "eid141", tween: [ "style", "${_Menu3}", "display", 'none', { fromValue: 'block'}], position: 40250, duration: 0 },
            { id: "eid175", tween: [ "style", "${_Menu2}", "display", 'block', { fromValue: 'none'}], position: 39000, duration: 0 },
            { id: "eid176", tween: [ "style", "${_Menu2}", "display", 'none', { fromValue: 'block'}], position: 39665, duration: 0 },
            { id: "eid26", tween: [ "style", "${_Title}", "display", 'block', { fromValue: 'none'}], position: 583, duration: 0 },
            { id: "eid155", tween: [ "style", "${_Menu5}", "left", '0px', { fromValue: '0px'}], position: 41000, duration: 0 },
            { id: "eid142", tween: [ "style", "${_Menu4}", "display", 'block', { fromValue: 'none'}], position: 40250, duration: 0 },
            { id: "eid143", tween: [ "style", "${_Menu4}", "display", 'none', { fromValue: 'block'}], position: 41000, duration: 0 },
            { id: "eid139", tween: [ "style", "${_Menu4}", "left", '0px', { fromValue: '0px'}], position: 39665, duration: 0 },
            { id: "eid157", tween: [ "style", "${_Menu5}", "display", 'block', { fromValue: 'none'}], position: 41000, duration: 0 },
            { id: "eid140", tween: [ "style", "${_Menu4}", "top", '0px', { fromValue: '0px'}], position: 39665, duration: 0 },
            { id: "eid18", tween: [ "style", "${_Title}", "top", '10px', { fromValue: '10px'}], position: 583, duration: 0 },
            { id: "eid58", tween: [ "style", "${_ArrowAnimation}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "eid60", tween: [ "style", "${_ArrowAnimation}", "display", 'block', { fromValue: 'block'}], position: 11000, duration: 0 },
            { id: "eid68", tween: [ "style", "${_ArrowAnimation}", "display", 'none', { fromValue: 'block'}], position: 24000, duration: 0 },
            { id: "eid24", tween: [ "style", "${_Button4}", "display", 'block', { fromValue: 'none'}], position: 583, duration: 0 },
            { id: "eid21", tween: [ "style", "${_Button2}", "display", 'block', { fromValue: 'none'}], position: 583, duration: 0 },
            { id: "eid67", tween: [ "style", "${_Play}", "display", 'block', { fromValue: 'none'}], position: 24000, duration: 0 },
            { id: "eid25", tween: [ "style", "${_Button1}", "display", 'block', { fromValue: 'none'}], position: 583, duration: 0 },
            { id: "eid69", tween: [ "style", "${_Menu1}", "display", 'block', { fromValue: 'none'}], position: 38333, duration: 0 },
            { id: "eid116", tween: [ "style", "${_Menu1}", "display", 'none', { fromValue: 'block'}], position: 39000, duration: 0 },
            { id: "eid4", tween: [ "style", "${_mc_MuteButton}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "style", "${_mc_MuteButton}", "display", 'block', { fromValue: 'none'}], position: 583, duration: 0 },
            { id: "eid6", tween: [ "style", "${_mc_MuteButton}", "display", 'none', { fromValue: 'block'}], position: 120667, duration: 0 },
            { id: "eid22", tween: [ "style", "${_Button5}", "display", 'block', { fromValue: 'none'}], position: 583, duration: 0 },
            { id: "eid156", tween: [ "style", "${_Menu5}", "top", '0px', { fromValue: '0px'}], position: 41000, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Button3}", "display", 'block', { fromValue: 'none'}], position: 583, duration: 0 },
            { id: "eid41", tween: [ "style", "${_ArrowAnimation}", "top", '286px', { fromValue: '286px'}], position: 9000, duration: 0 },
            { id: "eid56", tween: [ "style", "${_ArrowAnimation}", "top", '230px', { fromValue: '286px'}], position: 11000, duration: 0 },
            { id: "eid55", tween: [ "style", "${_ArrowAnimation}", "top", '71px', { fromValue: '230px'}], position: 13000, duration: 0 },
            { id: "eid62", tween: [ "style", "${_ArrowAnimation}", "top", '71px', { fromValue: '71px'}], position: 18040, duration: 0 },
            { id: "eid64", tween: [ "style", "${_ArrowAnimation}", "top", '216px', { fromValue: '71px'}], position: 20000, duration: 0 },
            { id: "eid27", tween: [ "style", "${_StaticCircle}", "display", 'block', { fromValue: 'none'}], position: 583, duration: 0 },
            { id: "eid164", tween: [ "style", "${_FireworksAnimationCircle}", "display", 'block', { fromValue: 'none'}], position: 583, duration: 0 },
            { id: "eid12", tween: [ "style", "${_LoadingText}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid7", tween: [ "style", "${_LoadingText}", "display", 'none', { fromValue: 'block'}], position: 583, duration: 0 }         ]
      }
   }
},
"mc_MuteButton": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','70px','60px','auto','auto'],
      id: 'Mute_Yes',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/Mute_Yes.png','0px','0px']
   },
   {
      id: 'Mute_No',
      type: 'image',
      rect: ['0px','0px','70px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Mute_No.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '60px'],
            ["style", "width", '70px']
         ],
         "${_Mute_Yes}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_Mute_No}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 333,
         autoPlay: false,
         labels: {
            "On": 0,
            "Off": 83,
            "Hide": 333
         },
         timeline: [
            { id: "eid66", tween: [ "style", "${_Mute_No}", "opacity", '1', { fromValue: '1'}], position: 333, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Mute_No}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid38", tween: [ "style", "${_Mute_No}", "display", 'none', { fromValue: 'block'}], position: 83, duration: 0 },
            { id: "eid36", tween: [ "style", "${_Mute_Yes}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_Mute_Yes}", "display", 'block', { fromValue: 'none'}], position: 83, duration: 0 },
            { id: "eid65", tween: [ "style", "${_Mute_Yes}", "display", 'none', { fromValue: 'block'}], position: 333, duration: 0 }         ]
      }
   }
},
"Title": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0, 0, 0, 0)','none'],
      rect: ['0px','0px','800px','35px','auto','auto'],
      fill: ['rgba(226,226,226,1.00)']
   },
   {
      rect: ['10px','5px','276px','25px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(197,116,34,1.00)','normal','none',''],
      id: 'Text',
      text: 'Injaz Volunteering Cycle',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(226,226,226,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '35px']
         ],
         "${_Text}": [
            ["style", "top", '5px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '18px'],
            ["style", "height", '25px'],
            ["color", "color", 'rgba(197,116,34,1.00)'],
            ["style", "left", '10px'],
            ["style", "width", '276px']
         ],
         "${symbolSelector}": [
            ["style", "height", '35px'],
            ["style", "width", '800px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Link3": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['25px','6px','140px','35px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy2',
      stroke: [2,'rgb(10, 75, 16)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['0px','0px','46px','46px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy2',
      stroke: [2,'rgba(10,75,16,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(0,153,0,1.00)']
   },
   {
      rect: ['16px','6px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',30,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text2Copy2',
      text: '3',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['42px','18px','127px','auto','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',10,'rgba(0,106,54,1.00)','400','none','normal'],
      id: 'Text3Copy2',
      text: 'Volunteer Training',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy2}": [
            ["style", "top", '6px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '16px'],
            ["style", "font-size", '30px']
         ],
         "${_RoundRectCopy2}": [
            ["style", "top", '6px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "left", '25px']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '169px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '18px'],
            ["style", "width", '127px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["color", "color", 'rgba(0,106,54,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '42px'],
            ["style", "font-size", '10px']
         ],
         "${_EllipseCopy2}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,153,0,1.00)'],
            ["style", "border-width", '2px'],
            ["color", "border-color", 'rgba(10,75,16,1.00)'],
            ["style", "height", '46px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '46px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Link2": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['25px','6px','116px','35px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      stroke: [2,'rgb(10, 75, 16)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['0px','0px','46px','46px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy',
      stroke: [2,'rgba(10,75,16,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(0,153,0,1.00)']
   },
   {
      rect: ['16px','6px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',30,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text2Copy',
      text: '2',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['48px','18px','92px','auto','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',12,'rgba(0,106,54,1.00)','normal','none','normal'],
      id: 'Text3Copy',
      text: 'INJAZ Office',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '6px'],
            ["style", "left", '25px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '116px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '18px'],
            ["style", "text-align", 'center'],
            ["style", "width", '92px'],
            ["color", "color", 'rgba(0,106,54,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '48px'],
            ["style", "font-size", '12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '135px']
         ],
         "${_EllipseCopy}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,153,0,1.00)'],
            ["style", "border-width", '2px'],
            ["color", "border-color", 'rgba(10,75,16,1.00)'],
            ["style", "height", '46px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '46px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '6px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '16px'],
            ["style", "font-size", '30px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Link1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['25px','6px','156px','35px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [2,'rgb(10, 75, 16)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['0px','0px','46px','46px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [2,'rgba(10,75,16,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(0,153,0,1.00)']
   },
   {
      rect: ['16px','6px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',30,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text2',
      text: '1',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['50px','18px','135px','16px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',11,'rgba(0,106,54,1.00)','normal','none','normal'],
      id: 'Text3',
      text: 'Volunteer / Company',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '6px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '25px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '156px']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,153,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '46px'],
            ["color", "border-color", 'rgba(10,75,16,1.00)'],
            ["style", "border-width", '2px'],
            ["style", "width", '46px']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '169px']
         ],
         "${_Text3}": [
            ["style", "top", '18px'],
            ["style", "width", '135px'],
            ["style", "text-align", 'center'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(0,106,54,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '50px'],
            ["style", "font-size", '11px']
         ],
         "${_Text2}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '6px'],
            ["style", "left", '16px'],
            ["style", "font-size", '30px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Link4": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['25px','6px','140px','35px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy3',
      stroke: [2,'rgb(10, 75, 16)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['0px','0px','46px','46px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy3',
      stroke: [2,'rgba(10,75,16,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(0,153,0,1.00)']
   },
   {
      rect: ['16px','6px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',30,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text2Copy3',
      text: '4',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['51px','18px','114px','auto','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',10,'rgba(0,106,54,1.00)','400','none','normal'],
      id: 'Text3Copy3',
      text: 'Home Preperation',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRectCopy3}": [
            ["style", "top", '6px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "left", '25px']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '169px']
         ],
         "${_EllipseCopy3}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,153,0,1.00)'],
            ["style", "border-width", '2px'],
            ["color", "border-color", 'rgba(10,75,16,1.00)'],
            ["style", "height", '46px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '46px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '6px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '16px'],
            ["style", "font-size", '30px']
         ],
         "${_Text3Copy3}": [
            ["style", "top", '18px'],
            ["style", "width", '114px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["color", "color", 'rgba(0,106,54,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '51px'],
            ["style", "font-size", '10px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Link5": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['25px','6px','140px','35px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy4',
      stroke: [2,'rgb(10, 75, 16)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['0px','0px','46px','46px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy4',
      stroke: [2,'rgba(10,75,16,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(0,153,0,1.00)']
   },
   {
      rect: ['16px','6px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',30,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text2Copy4',
      text: '5',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['50px','18px','117px','auto','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',10,'rgba(0,106,54,1.00)','400','none','normal'],
      id: 'Text3Copy4',
      text: 'Classroom Delivery',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_EllipseCopy4}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,153,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '46px'],
            ["color", "border-color", 'rgba(10,75,16,1.00)'],
            ["style", "border-width", '2px'],
            ["style", "width", '46px']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '169px']
         ],
         "${_Text3Copy4}": [
            ["style", "top", '18px'],
            ["style", "font-size", '10px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["color", "color", 'rgba(0,106,54,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '50px'],
            ["style", "width", '117px']
         ],
         "${_RoundRectCopy4}": [
            ["style", "top", '6px'],
            ["style", "left", '25px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${_Text2Copy4}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '6px'],
            ["style", "left", '16px'],
            ["style", "font-size", '30px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Button1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Icon1',
      type: 'image',
      rect: ['10px','10px','140px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Icon1.png','0px','0px']
   },
   {
      id: 'Link1',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Link1',
      symbolName: 'Link1'
   }   ]
   },
   states: {
      "Base State": {
         "${_Icon1}": [
            ["style", "left", '10px'],
            ["style", "top", '10px']
         ],
         "${_Link1}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '160px'],
            ["style", "width", '169px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Button2": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Icon2',
      type: 'image',
      rect: ['10px','7px','140px','150px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Icon2.png','0px','0px']
   },
   {
      id: 'Link2',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Link2',
      symbolName: 'Link2'
   }   ]
   },
   states: {
      "Base State": {
         "${_Icon2}": [
            ["style", "left", '10px'],
            ["style", "top", '7px']
         ],
         "${_Link2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '157px'],
            ["style", "width", '150px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Button3": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Icon3',
      type: 'image',
      rect: ['8px','34px','110px','80px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Icon3.png','0px','0px']
   },
   {
      id: 'Link3',
      type: 'rect',
      rect: ['-6px','9px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Link3',
      symbolName: 'Link3'
   }   ]
   },
   states: {
      "Base State": {
         "${_Link3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Icon3}": [
            ["style", "left", '8px'],
            ["style", "top", '34px']
         ],
         "${symbolSelector}": [
            ["style", "height", '114px'],
            ["style", "width", '169px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 583,
         autoPlay: false,
         timeline: [
            { id: "eid19", tween: [ "style", "${_Link3}", "left", '0px', { fromValue: '0px'}], position: 583, duration: 0 },
            { id: "eid20", tween: [ "style", "${_Link3}", "top", '0px', { fromValue: '0px'}], position: 583, duration: 0 }         ]
      }
   }
},
"Button4": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Icon4',
      type: 'image',
      rect: ['0px','14px','100px','100px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Icon4.png','0px','0px']
   },
   {
      id: 'Link4',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Link4',
      symbolName: 'Link4'
   }   ]
   },
   states: {
      "Base State": {
         "${_Link4}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Icon4}": [
            ["style", "left", '0px'],
            ["style", "top", '14px']
         ],
         "${symbolSelector}": [
            ["style", "height", '114px'],
            ["style", "width", '169px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Button5": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Icon5',
      type: 'image',
      rect: ['15px','16px','140px','120px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Icon5.png','0px','0px']
   },
   {
      id: 'Link5',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Link5',
      symbolName: 'Link5'
   }   ]
   },
   states: {
      "Base State": {
         "${_Link5}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Icon5}": [
            ["style", "left", '15px'],
            ["style", "top", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '136px'],
            ["style", "width", '169px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"ArrowAnimation": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'GreenArrow',
      type: 'image',
      rect: ['0px','0px','84px','84px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/GreenArrow.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_GreenArrow}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '84px'],
            ["style", "width", '84px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         labels: {
            "Start": 0
         },
         timeline: [
            { id: "eid31", tween: [ "style", "${_GreenArrow}", "left", '10px', { fromValue: '0px'}], position: 0, duration: 250 },
            { id: "eid32", tween: [ "style", "${_GreenArrow}", "left", '0px', { fromValue: '10px'}], position: 250, duration: 250 }         ]
      }
   }
},
"Menu1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['341px','295px','141px','92px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'Menu1BG',
      stroke: [2,'rgba(0,106,54,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(240,240,240,1.00)']
   },
   {
      id: 'Link1_1Group',
      type: 'group',
      rect: ['341px','305px','136','19','auto','auto'],
      c: [
      {
         rect: ['11px','8px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Dot',
         stroke: [0,'rgb(0, 106, 54)','none'],
         type: 'ellipse',
         fill: ['rgba(255,108,0,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',12,'rgba(0,106,54,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Link1_1',
         text: 'Why Volunteer',
         align: 'left',
         rect: ['22px','2px','114px','19px','auto','auto']
      }]
   },
   {
      id: 'Link1_2Group',
      type: 'group',
      rect: ['341px','335px','136','19','auto','auto'],
      c: [
      {
         rect: ['11px','8px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Dot2',
         stroke: [0,'rgb(0, 106, 54)','none'],
         type: 'ellipse',
         fill: ['rgba(255,108,0,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',12,'rgba(0,106,54,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Link1_2',
         text: 'Benefits',
         align: 'left',
         rect: ['24px','0px','112px','19px','auto','auto']
      }]
   },
   {
      id: 'CloseGroup1',
      type: 'group',
      rect: ['351px','363px','126','19','auto','auto'],
      c: [
      {
         font: ['Verdana, Geneva, sans-serif',12,'rgba(0,106,54,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Link1_Close',
         text: 'Close',
         align: 'center',
         rect: ['-2px','2px','126px','14px','auto','auto']
      },
      {
         id: 'OrangeArrow',
         type: 'image',
         rect: ['81px','4px','12px','12px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/OrangeArrow.png','0px','0px']
      }]
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','800px','475px','auto','auto'],
      id: 'SubBG',
      fill: ['rgba(0,0,0,0)','images/SubBG.png','0px','0px']
   },
   {
      type: 'rect',
      rect: ['125px','197px','549px','170px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(90, 87, 87)','none'],
      display: 'none',
      fill: ['rgba(240,240,240,1)']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'Symbol_1',
      rect: ['125','197','auto','auto','auto','auto']
   },
   {
      type: 'image',
      rect: ['131px','12px','63px','63px','auto','auto'],
      display: 'none',
      id: 'CloseSub',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/CloseSub.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},{},{},['-1']],
      type: 'image',
      id: 'SubImage1',
      display: 'none',
      rect: ['465px','75px','211px','357px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/SubImage1.png','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,106,54,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3',
      text: 'Why Volunteer',
      align: 'left',
      rect: ['124px','72px','304px','19px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy',
      text: 'This is your contribution and giving back to the community. Companies and organizations (CEO’s and staff) all over the Arab World are increasingly becoming aware of the importance of doing volunteer work. More and more are volunteering with INJAZ.',
      align: 'left',
      rect: ['122px','102px','366px','170px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,106,54,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy3',
      text: 'Benefits',
      align: 'left',
      rect: ['130px','79px','304px','19px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','700','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy2',
      text: 'How Companies Benefit from Volunteering Employees',
      align: 'left',
      rect: ['308px','109px','366px','170px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy6',
      text: 'There are lots of ways a company can be “socially responsible” or a “good corporate citizen.” Most seem to involve large sums of money being contributed to very important and worthwhile causes. These tend to be causes in the public spotlight – causes the media like to cover – resulting in favorable publicity for the companies and their brands. \rWhy, then, do hundreds of companies not only give financial support to Junior Achievement, but also give employees time off from their jobs to teach JA curricula in classrooms all over the world? Especially when there is very little publicity involved in supporting Junior Achievement?',
      align: 'left',
      rect: ['308px','139px','366px','233px','auto','auto']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['375px','381px','50px','30px','auto','auto'],
      id: 'Next_Circle',
      fill: ['rgba(0,0,0,0)','images/Next_Circle.png','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,106,54,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy5',
      text: 'The Studies on the benefits of volunteering:',
      align: 'left',
      rect: ['132px','75px','449px','19px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(102,102,102,1.00)','400','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy4',
      text: 'There are ample quantitative and qualitative studies that show that being a good corporate citizen can also be good for a company\'s bottom line. Research shows that there is a direct correlation between active community outreach programs and increased revenues and customer loyalty for businesses that engage in helping their communities.  Companies benefit by:',
      align: 'left',
      rect: ['308px','99px','366px','85px','auto','auto']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['378px','381px','50px','30px','auto','auto'],
      id: 'Previous_Circle',
      fill: ['rgba(0,0,0,0)','images/Previous_Circle.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'Symbol_1',
      symbolName: 'Symbol_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text3Copy}": [
            ["style", "top", '102px'],
            ["style", "width", '366px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(102,102,102,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '170px'],
            ["style", "left", '122px'],
            ["style", "font-size", '14px']
         ],
         "${_Text3}": [
            ["style", "top", '72px'],
            ["style", "text-align", 'left'],
            ["style", "height", '19px'],
            ["style", "display", 'none'],
            ["style", "left", '124px'],
            ["style", "font-size", '16px']
         ],
         "${_Link1_2Group}": [
            ["style", "left", '341px'],
            ["style", "top", '335px']
         ],
         "${_Text3Copy3}": [
            ["style", "top", '79px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["style", "height", '19px'],
            ["style", "left", '130px'],
            ["style", "font-size", '16px']
         ],
         "${_Link1_1}": [
            ["style", "top", '2px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '12px'],
            ["color", "color", 'rgba(0,106,54,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '22px'],
            ["style", "width", '114px']
         ],
         "${symbolSelector}": [
            ["style", "height", '0px'],
            ["style", "width", '0px']
         ],
         "${_Menu1BG}": [
            ["color", "background-color", 'rgba(240,240,240,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["color", "border-color", 'rgba(0,106,54,1.00)'],
            ["style", "left", '341px'],
            ["style", "top", '295px']
         ],
         "${_Rectangle}": [
            ["style", "display", 'none'],
            ["style", "width", '549px']
         ],
         "${_Link1_Close}": [
            ["style", "top", '2px'],
            ["style", "width", '126px'],
            ["style", "text-align", 'center'],
            ["style", "height", '14px'],
            ["color", "color", 'rgba(0,106,54,1)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '-2px'],
            ["style", "font-size", '12px']
         ],
         "${_Text3Copy5}": [
            ["style", "top", '75px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '16px'],
            ["style", "display", 'none'],
            ["style", "height", '19px'],
            ["style", "left", '132px'],
            ["style", "width", '449px']
         ],
         "${_Text3Copy4}": [
            ["color", "color", 'rgba(102,102,102,1)'],
            ["style", "font-weight", '400'],
            ["style", "left", '131px'],
            ["style", "font-size", '13px'],
            ["style", "top", '99px'],
            ["style", "text-align", 'left'],
            ["style", "height", '85px'],
            ["style", "width", '543px'],
            ["style", "display", 'none']
         ],
         "${_CloseGroup1}": [
            ["style", "left", '351px'],
            ["style", "top", '363px']
         ],
         "${_Dot2}": [
            ["style", "top", '8px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(255,108,0,1)'],
            ["style", "left", '11px'],
            ["style", "width", '5px']
         ],
         "${_Link1_2}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '12px'],
            ["color", "color", 'rgba(0,106,54,1)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '24px'],
            ["style", "width", '112px']
         ],
         "${_Text3Copy6}": [
            ["style", "top", '139px'],
            ["style", "width", '543px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(102,102,102,1)'],
            ["style", "display", 'none'],
            ["style", "height", '233px'],
            ["style", "left", '131px'],
            ["style", "font-size", '14px']
         ],
         "${_OrangeArrow}": [
            ["style", "left", '81px'],
            ["style", "top", '4px']
         ],
         "${_Next_Circle}": [
            ["style", "top", '381px'],
            ["style", "left", '375px'],
            ["style", "display", 'none']
         ],
         "${_Symbol_1}": [
            ["style", "display", 'none']
         ],
         "${_CloseSub}": [
            ["style", "display", 'none'],
            ["style", "left", '131px'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '12px']
         ],
         "${_Link1_1Group}": [
            ["style", "left", '341px'],
            ["style", "top", '305px']
         ],
         "${_Text}": [
            ["style", "text-align", '']
         ],
         "${_Dot}": [
            ["style", "top", '8px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(255,108,0,1.00)'],
            ["style", "left", '11px'],
            ["style", "width", '5px']
         ],
         "${_SubBG}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_Previous_Circle}": [
            ["style", "top", '381px'],
            ["style", "left", '378px'],
            ["style", "display", 'none']
         ],
         "${_Text3Copy2}": [
            ["color", "color", 'rgba(102,102,102,1)'],
            ["style", "font-weight", '700'],
            ["style", "left", '131px'],
            ["style", "width", '543px'],
            ["style", "top", '109px'],
            ["style", "text-align", 'left'],
            ["style", "height", '30px'],
            ["style", "font-size", '14px'],
            ["style", "display", 'none']
         ],
         "${_SubImage1}": [
            ["style", "top", '75px'],
            ["transform", "scaleX", '-1'],
            ["style", "left", '465px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2083,
         autoPlay: false,
         labels: {
            "Start": 0,
            "Screen1": 500,
            "Screen2": 1000,
            "Screen3": 1667
         },
         timeline: [
            { id: "eid103", tween: [ "style", "${_Text3Copy5}", "display", 'block', { fromValue: 'none'}], position: 1667, duration: 0 },
            { id: "eid165", tween: [ "style", "${_Symbol_1}", "display", 'block', { fromValue: 'none'}], position: 1667, duration: 0 },
            { id: "eid102", tween: [ "style", "${_Text3Copy4}", "display", 'block', { fromValue: 'none'}], position: 1667, duration: 0 },
            { id: "eid70", tween: [ "style", "${_SubBG}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid101", tween: [ "style", "${_Previous_Circle}", "display", 'block', { fromValue: 'none'}], position: 1667, duration: 0 },
            { id: "eid74", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid77", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Text3Copy2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid90", tween: [ "style", "${_Text3Copy2}", "display", 'none', { fromValue: 'block'}], position: 1667, duration: 0 },
            { id: "eid167", tween: [ "style", "${_Text3Copy6}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid168", tween: [ "style", "${_Text3Copy6}", "display", 'none', { fromValue: 'block'}], position: 1667, duration: 0 },
            { id: "eid88", tween: [ "style", "${_Text3Copy2}", "width", '543px', { fromValue: '543px'}], position: 1000, duration: 0 },
            { id: "eid87", tween: [ "style", "${_Text3Copy2}", "left", '131px', { fromValue: '131px'}], position: 1000, duration: 0 },
            { id: "eid86", tween: [ "style", "${_Next_Circle}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid89", tween: [ "style", "${_Next_Circle}", "display", 'none', { fromValue: 'block'}], position: 1667, duration: 0 },
            { id: "eid72", tween: [ "style", "${_SubImage1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid76", tween: [ "style", "${_SubImage1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid83", tween: [ "style", "${_Text3Copy2}", "height", '30px', { fromValue: '30px'}], position: 1000, duration: 0 },
            { id: "eid73", tween: [ "style", "${_CloseSub}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid75", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid78", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid166", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 1667, duration: 0 },
            { id: "eid80", tween: [ "style", "${_Text3Copy3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid91", tween: [ "style", "${_Text3Copy3}", "display", 'none', { fromValue: 'block'}], position: 1667, duration: 0 }         ]
      }
   }
},
"Menu2": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['56px','250px','141px','92px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'Menu1BG',
      stroke: [2,'rgba(0,106,54,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(240,240,240,1.00)']
   },
   {
      id: 'Link1_1Group',
      type: 'group',
      rect: ['56px','260px','136','19','auto','auto'],
      c: [
      {
         rect: ['11px','8px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Dot',
         stroke: [0,'rgb(0, 106, 54)','none'],
         type: 'ellipse',
         fill: ['rgba(255,108,0,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',10,'rgba(0,106,54,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Link1_1',
         text: 'Brief About INJAZ',
         align: 'left',
         rect: ['24px','2px','110px','14px','auto','auto']
      }]
   },
   {
      id: 'Link1_2Group',
      type: 'group',
      rect: ['56px','290px','136','19','auto','auto'],
      c: [
      {
         rect: ['11px','8px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Dot2',
         stroke: [0,'rgb(0, 106, 54)','none'],
         type: 'ellipse',
         fill: ['rgba(255,108,0,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',10,'rgba(0,106,54,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Link1_2',
         text: 'Sign up form',
         align: 'left',
         rect: ['24px','4px','110px','13px','auto','auto']
      }]
   },
   {
      id: 'CloseGroup1',
      type: 'group',
      rect: ['66px','318px','126','19','auto','auto'],
      c: [
      {
         font: ['Verdana, Geneva, sans-serif',10,'rgba(0,106,54,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Link1_Close',
         text: 'Close',
         align: 'center',
         rect: ['0px','3px','126px','14px','auto','auto']
      },
      {
         id: 'OrangeArrow',
         type: 'image',
         rect: ['81px','4px','12px','12px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/OrangeArrow.png','0px','0px']
      }]
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','800px','475px','auto','auto'],
      id: 'SubBG',
      fill: ['rgba(0,0,0,0)','images/SubBG.png','0px','0px']
   },
   {
      type: 'image',
      rect: ['131px','12px','63px','63px','auto','auto'],
      display: 'none',
      id: 'CloseSub',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/CloseSub.png','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,106,54,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3',
      text: 'Brief about INJAZ',
      align: 'left',
      rect: ['127px','74px','304px','19px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy',
      text: 'At the INJAZ office, you will receive general information about our organization:',
      align: 'left',
      rect: ['308px','97px','366px','170px','auto','auto']
   },
   {
      type: 'group',
      display: 'none',
      id: 'Group',
      rect: ['163px','139px','503','122','auto','auto'],
      c: [
      {
         font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text3Copy6',
         text: 'History',
         align: 'left',
         rect: ['-20px','5px','491px','170px','auto','auto']
      },
      {
         rect: ['-32px','9px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [0,'rgb(90, 87, 87)','none'],
         type: 'ellipse',
         fill: ['rgba(102,102,102,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text3Copy7',
         text: 'Mission and Vision',
         align: 'left',
         rect: ['-20px','35px','491px','170px','auto','auto']
      },
      {
         rect: ['-32px','39px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy',
         stroke: [0,'rgb(90, 87, 87)','none'],
         type: 'ellipse',
         fill: ['rgba(102,102,102,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text3Copy8',
         text: 'Mode of operation',
         align: 'left',
         rect: ['-20px','65px','491px','170px','auto','auto']
      },
      {
         rect: ['-32px','69px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy2',
         stroke: [0,'rgb(90, 87, 87)','none'],
         type: 'ellipse',
         fill: ['rgba(102,102,102,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text3Copy9',
         text: 'How we can cooperate',
         align: 'left',
         rect: ['-20px','95px','491px','170px','auto','auto']
      },
      {
         rect: ['-32px','99px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy3',
         stroke: [0,'rgb(90, 87, 87)','none'],
         type: 'ellipse',
         fill: ['rgba(102,102,102,1.00)']
      }]
   },
   {
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,106,54,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy3',
      text: 'Sign-up Form',
      align: 'left',
      rect: ['129px','79px','304px','19px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy2',
      text: 'Please fill in the sign up form and send to our INJAZ office.',
      align: 'left',
      rect: ['308px','109px','437px','19px','auto','auto']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['553px','91px','128px','128px','auto','auto'],
      id: 'PDFIcon',
      fill: ['rgba(0,0,0,0)','images/PDFIcon.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3Copy9}": [
            ["style", "top", '95px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(102,102,102,1)'],
            ["style", "height", '32px'],
            ["style", "left", '-20px'],
            ["style", "width", '491px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '97px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(102,102,102,1.00)'],
            ["style", "height", '42px'],
            ["style", "left", '129px'],
            ["style", "width", '550px']
         ],
         "${_Text3}": [
            ["style", "top", '74px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["style", "height", '19px'],
            ["style", "left", '127px'],
            ["style", "font-size", '16px']
         ],
         "${_SubBG}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_Text3Copy3}": [
            ["style", "top", '79px'],
            ["style", "text-align", 'left'],
            ["style", "height", '19px'],
            ["style", "display", 'none'],
            ["style", "left", '129px'],
            ["style", "font-size", '16px']
         ],
         "${_Text3Copy7}": [
            ["style", "top", '35px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(102,102,102,1)'],
            ["style", "height", '32px'],
            ["style", "left", '-20px'],
            ["style", "width", '491px']
         ],
         "${_Link1_1}": [
            ["style", "top", '2px'],
            ["style", "width", '110px'],
            ["style", "text-align", 'left'],
            ["style", "height", '14px'],
            ["color", "color", 'rgba(0,106,54,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '24px'],
            ["style", "font-size", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '0px'],
            ["style", "width", '0px']
         ],
         "${_Menu1BG}": [
            ["color", "background-color", 'rgba(240,240,240,1.00)'],
            ["style", "top", '250px'],
            ["style", "left", '56px'],
            ["color", "border-color", 'rgba(0,106,54,1.00)'],
            ["style", "border-width", '2px'],
            ["style", "border-style", 'solid']
         ],
         "${_EllipseCopy}": [
            ["style", "top", '39px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(102,102,102,1)'],
            ["style", "left", '-32px'],
            ["style", "width", '5px']
         ],
         "${_Link1_Close}": [
            ["style", "top", '3px'],
            ["style", "font-size", '10px'],
            ["style", "text-align", 'center'],
            ["style", "height", '14px'],
            ["color", "color", 'rgba(0,106,54,1)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '126px']
         ],
         "${_Link1_2Group}": [
            ["style", "left", '56px'],
            ["style", "top", '290px']
         ],
         "${_CloseGroup1}": [
            ["style", "left", '66px'],
            ["style", "top", '318px']
         ],
         "${_PDFIcon}": [
            ["style", "top", '91px'],
            ["style", "left", '553px'],
            ["style", "display", 'none']
         ],
         "${_Link1_2}": [
            ["style", "top", '4px'],
            ["style", "width", '110px'],
            ["style", "text-align", 'left'],
            ["style", "height", '13px'],
            ["color", "color", 'rgba(0,106,54,1)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '24px'],
            ["style", "font-size", '10px']
         ],
         "${_Dot2}": [
            ["style", "top", '8px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(255,108,0,1)'],
            ["style", "left", '11px'],
            ["style", "width", '5px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '109px'],
            ["style", "width", '437px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(102,102,102,1)'],
            ["style", "display", 'none'],
            ["style", "height", '19px'],
            ["style", "left", '129px'],
            ["style", "font-size", '14px']
         ],
         "${_Text3Copy6}": [
            ["style", "top", '5px'],
            ["style", "width", '491px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(102,102,102,1)'],
            ["style", "display", 'block'],
            ["style", "height", '32px'],
            ["style", "left", '-20px'],
            ["style", "font-size", '14px']
         ],
         "${_EllipseCopy3}": [
            ["style", "top", '99px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(102,102,102,1)'],
            ["style", "left", '-32px'],
            ["style", "width", '5px']
         ],
         "${_CloseSub}": [
            ["style", "display", 'none'],
            ["style", "left", '131px'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '12px']
         ],
         "${_Group}": [
            ["style", "display", 'none'],
            ["style", "left", '163px'],
            ["style", "top", '139px']
         ],
         "${_Link1_1Group}": [
            ["style", "left", '56px'],
            ["style", "top", '260px']
         ],
         "${_Dot}": [
            ["style", "top", '8px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(255,108,0,1.00)'],
            ["style", "left", '11px'],
            ["style", "width", '5px']
         ],
         "${_Ellipse}": [
            ["style", "top", '9px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(102,102,102,1.00)'],
            ["style", "left", '-32px'],
            ["style", "width", '5px']
         ],
         "${_OrangeArrow}": [
            ["style", "left", '81px'],
            ["style", "top", '4px']
         ],
         "${_EllipseCopy2}": [
            ["style", "top", '69px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(102,102,102,1)'],
            ["style", "left", '-32px'],
            ["style", "width", '5px']
         ],
         "${_Text3Copy8}": [
            ["style", "top", '65px'],
            ["style", "width", '491px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(102,102,102,1)'],
            ["style", "display", 'block'],
            ["style", "height", '32px'],
            ["style", "left", '-20px'],
            ["style", "font-size", '14px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1333,
         autoPlay: false,
         labels: {
            "Start": 0,
            "Screen1": 500,
            "Screen2": 1000
         },
         timeline: [
            { id: "eid75", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid78", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid112", tween: [ "style", "${_Text3Copy}", "left", '129px', { fromValue: '129px'}], position: 500, duration: 0 },
            { id: "eid117", tween: [ "style", "${_Text3Copy}", "height", '42px', { fromValue: '42px'}], position: 500, duration: 0 },
            { id: "eid80", tween: [ "style", "${_Text3Copy3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid70", tween: [ "style", "${_SubBG}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid120", tween: [ "style", "${_PDFIcon}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid113", tween: [ "style", "${_Text3Copy}", "width", '550px', { fromValue: '550px'}], position: 500, duration: 0 },
            { id: "eid73", tween: [ "style", "${_CloseSub}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid74", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid77", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid121", tween: [ "style", "${_Text3Copy2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid118", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid119", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Menu3": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['174px','105px','141px','92px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'Menu1BG',
      stroke: [2,'rgba(0,106,54,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(240,240,240,1.00)']
   },
   {
      id: 'Link1_1Group',
      type: 'group',
      rect: ['174px','115px','136','19','auto','auto'],
      c: [
      {
         rect: ['11px','8px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Dot',
         stroke: [0,'rgb(0, 106, 54)','none'],
         type: 'ellipse',
         fill: ['rgba(255,108,0,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',10,'rgba(0,106,54,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Link1_1',
         text: 'Online Training',
         align: 'left',
         rect: ['20px','5px','116px','15px','auto','auto']
      }]
   },
   {
      id: 'Link1_2Group',
      type: 'group',
      rect: ['174px','135px','136','38px','auto','auto'],
      c: [
      {
         rect: ['11px','8px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Dot2',
         stroke: [0,'rgb(0, 106, 54)','none'],
         type: 'ellipse',
         fill: ['rgba(255,108,0,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',10,'rgba(0,106,54,1.00)','400','none','normal'],
         type: 'text',
         id: 'Link1_2',
         text: 'INJAZ Training Kit',
         align: 'left',
         rect: ['20px','5px','111px','13px','auto','auto']
      }]
   },
   {
      id: 'CloseGroup1',
      type: 'group',
      rect: ['184px','173px','126','19','auto','auto'],
      c: [
      {
         font: ['Verdana, Geneva, sans-serif',10,'rgba(0,106,54,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Link1_Close',
         text: 'Close',
         align: 'center',
         rect: ['0px','3px','126px','15px','auto','auto']
      },
      {
         id: 'OrangeArrow',
         type: 'image',
         rect: ['81px','4px','12px','12px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/OrangeArrow.png','0px','0px']
      }]
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','800px','475px','auto','auto'],
      id: 'SubBG',
      fill: ['rgba(0,0,0,0)','images/SubBG.png','0px','0px']
   },
   {
      type: 'image',
      rect: ['131px','12px','63px','63px','auto','auto'],
      display: 'none',
      id: 'CloseSub',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/CloseSub.png','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,106,54,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3',
      text: 'Online Training',
      align: 'left',
      rect: ['130px','79px','304px','16px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',12,'rgba(102,102,102,1.00)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy',
      text: 'Preparation is key to a successful lesson delivery. <br>The Online Volunteer Training includes very useful tips on preparation for your lessons.<br><br>We highly recommend that you revisit this section from time to time.<br><br>Enjoy!<br>',
      align: 'left',
      rect: ['308px','109px','366px','170px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,106,54,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy3',
      text: 'The INJAZ Training Kit',
      align: 'left',
      rect: ['130px','79px','304px','19px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy2',
      text: 'Once you are done with the online training and ready to go into the classroom, you will be provided with the INJAZ training kit that includes:',
      align: 'left',
      rect: ['308px','99px','366px','170px','auto','auto']
   },
   {
      type: 'group',
      display: 'none',
      id: 'Group',
      rect: ['163','139px','503','122','auto','auto'],
      c: [
      {
         font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text3Copy7',
         text: 'Volunteer Training Guide',
         align: 'left',
         rect: ['-20px','4px','491px','15px','auto','auto']
      },
      {
         rect: ['-32px','9px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy3',
         stroke: [0,'rgb(90, 87, 87)','none'],
         type: 'ellipse',
         fill: ['rgba(102,102,102,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text3Copy6',
         text: 'Participant’s book/guide',
         align: 'left',
         rect: ['-20px','34px','491px','20px','auto','auto']
      },
      {
         rect: ['-32px','39px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy2',
         stroke: [0,'rgb(90, 87, 87)','none'],
         type: 'ellipse',
         fill: ['rgba(102,102,102,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text3Copy5',
         text: 'Stationary',
         align: 'left',
         rect: ['-20px','64px','491px','15px','auto','auto']
      },
      {
         rect: ['-32px','69px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy',
         stroke: [0,'rgb(90, 87, 87)','none'],
         type: 'ellipse',
         fill: ['rgba(102,102,102,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text3Copy4',
         text: 'Training tools',
         align: 'left',
         rect: ['-20px','94px','491px','15px','auto','auto']
      },
      {
         rect: ['-32px','99px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [0,'rgb(90, 87, 87)','none'],
         type: 'ellipse',
         fill: ['rgba(102,102,102,1.00)']
      }]
   },
   {
      type: 'image',
      display: 'none',
      rect: ['336px','219px','128px','128px','auto','auto'],
      id: 'InternetBall',
      fill: ['rgba(0,0,0,0)','images/InternetBall.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['386px','164px','298px','232px','auto','auto'],
      id: 'Case',
      fill: ['rgba(0,0,0,0)','images/Case.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3Copy}": [
            ["style", "top", '109px'],
            ["style", "width", '545px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(102,102,102,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '110px'],
            ["style", "left", '129px'],
            ["style", "font-size", '12px']
         ],
         "${_Text3Copy4}": [
            ["style", "top", '94px'],
            ["style", "width", '491px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(102,102,102,1)'],
            ["style", "display", 'block'],
            ["style", "height", '15px'],
            ["style", "left", '-20px'],
            ["style", "font-size", '14px']
         ],
         "${_Link1_2Group}": [
            ["style", "height", '38px'],
            ["style", "left", '174px'],
            ["style", "top", '135px']
         ],
         "${_Text3Copy3}": [
            ["style", "top", '79px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["style", "height", '19px'],
            ["style", "left", '130px'],
            ["style", "font-size", '16px']
         ],
         "${_Text3Copy7}": [
            ["style", "top", '4px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(102,102,102,1)'],
            ["style", "height", '15px'],
            ["style", "left", '-20px'],
            ["style", "width", '491px']
         ],
         "${_InternetBall}": [
            ["style", "top", '219px'],
            ["style", "left", '336px'],
            ["style", "display", 'none']
         ],
         "${_Link1_1}": [
            ["style", "top", '5px'],
            ["style", "font-size", '10px'],
            ["style", "text-align", 'left'],
            ["style", "height", '15px'],
            ["color", "color", 'rgba(0,106,54,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '20px'],
            ["style", "width", '116px']
         ],
         "${symbolSelector}": [
            ["style", "height", '0px'],
            ["style", "width", '0px']
         ],
         "${_Menu1BG}": [
            ["color", "background-color", 'rgba(240,240,240,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["color", "border-color", 'rgba(0,106,54,1.00)'],
            ["style", "left", '174px'],
            ["style", "top", '105px']
         ],
         "${_EllipseCopy}": [
            ["style", "top", '69px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(102,102,102,1)'],
            ["style", "left", '-32px'],
            ["style", "width", '5px']
         ],
         "${_Link1_Close}": [
            ["style", "top", '3px'],
            ["style", "width", '126px'],
            ["style", "text-align", 'center'],
            ["style", "height", '15px'],
            ["color", "color", 'rgba(0,106,54,1)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '10px']
         ],
         "${_Text3Copy5}": [
            ["style", "top", '64px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(102,102,102,1)'],
            ["style", "height", '15px'],
            ["style", "left", '-20px'],
            ["style", "width", '491px']
         ],
         "${_SubBG}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_CloseGroup1}": [
            ["style", "left", '184px'],
            ["style", "top", '173px']
         ],
         "${_Text3Copy6}": [
            ["style", "top", '34px'],
            ["style", "width", '491px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(102,102,102,1)'],
            ["style", "display", 'block'],
            ["style", "height", '20px'],
            ["style", "left", '-20px'],
            ["style", "font-size", '14px']
         ],
         "${_Link1_2}": [
            ["color", "color", 'rgba(0,106,54,1)'],
            ["style", "font-weight", '400'],
            ["style", "left", '20px'],
            ["style", "font-size", '10px'],
            ["style", "top", '5px'],
            ["style", "text-align", 'left'],
            ["style", "height", '13px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '111px']
         ],
         "${_Dot2}": [
            ["style", "top", '8px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(255,108,0,1)'],
            ["style", "left", '11px'],
            ["style", "width", '5px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '99px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(102,102,102,1)'],
            ["style", "height", '40px'],
            ["style", "left", '129px'],
            ["style", "width", '545px']
         ],
         "${_Group}": [
            ["style", "display", 'none'],
            ["style", "top", '139px']
         ],
         "${_EllipseCopy3}": [
            ["style", "top", '9px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(102,102,102,1)'],
            ["style", "left", '-32px'],
            ["style", "width", '5px']
         ],
         "${_CloseSub}": [
            ["style", "display", 'none'],
            ["style", "left", '131px'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '12px']
         ],
         "${_Link1_1Group}": [
            ["style", "left", '174px'],
            ["style", "top", '115px']
         ],
         "${_Ellipse}": [
            ["style", "top", '99px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(102,102,102,1)'],
            ["style", "left", '-32px'],
            ["style", "width", '5px']
         ],
         "${_Dot}": [
            ["style", "top", '8px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(255,108,0,1.00)'],
            ["style", "left", '11px'],
            ["style", "width", '5px']
         ],
         "${_Text3}": [
            ["style", "top", '79px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "display", 'none'],
            ["style", "left", '130px'],
            ["style", "font-size", '16px']
         ],
         "${_OrangeArrow}": [
            ["style", "left", '81px'],
            ["style", "top", '4px']
         ],
         "${_EllipseCopy2}": [
            ["style", "top", '39px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(102,102,102,1)'],
            ["style", "left", '-32px'],
            ["style", "width", '5px']
         ],
         "${_Case}": [
            ["style", "top", '164px'],
            ["style", "left", '386px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1333,
         autoPlay: false,
         labels: {
            "Start": 0,
            "Screen1": 500,
            "Screen2": 1000
         },
         timeline: [
            { id: "eid75", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid78", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid138", tween: [ "style", "${_Case}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid112", tween: [ "style", "${_Text3Copy}", "left", '129px', { fromValue: '129px'}], position: 500, duration: 0 },
            { id: "eid135", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid130", tween: [ "style", "${_Text3Copy}", "height", '110px', { fromValue: '110px'}], position: 500, duration: 0 },
            { id: "eid113", tween: [ "style", "${_Text3Copy}", "width", '545px', { fromValue: '545px'}], position: 500, duration: 0 },
            { id: "eid70", tween: [ "style", "${_SubBG}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid134", tween: [ "style", "${_Text3Copy2}", "height", '40px', { fromValue: '40px'}], position: 1005, duration: 0 },
            { id: "eid73", tween: [ "style", "${_CloseSub}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid80", tween: [ "style", "${_Text3Copy3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid74", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid77", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid121", tween: [ "style", "${_Text3Copy2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid136", tween: [ "style", "${_InternetBall}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid137", tween: [ "style", "${_InternetBall}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Menu4": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['521px','103px','171px','92px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'Menu1BG',
      stroke: [2,'rgba(0,106,54,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(240,240,240,1.00)']
   },
   {
      id: 'Link1_1Group',
      type: 'group',
      rect: ['541px','107px','136px','38px','auto','auto'],
      c: [
      {
         rect: ['-12px','8px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Dot',
         stroke: [0,'rgb(0, 106, 54)','none'],
         type: 'ellipse',
         fill: ['rgba(255,108,0,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',10,'rgba(0,106,54,1.00)','400','none','normal'],
         type: 'text',
         id: 'Link1_1',
         text: 'Before-classroom delivery',
         align: 'left',
         rect: ['-3px','6px','156px','13px','auto','auto']
      }]
   },
   {
      id: 'Link1_2Group',
      type: 'group',
      rect: ['541px','142px','136','38px','auto','auto'],
      c: [
      {
         rect: ['-12px','8px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Dot2',
         stroke: [0,'rgb(0, 106, 54)','none'],
         type: 'ellipse',
         fill: ['rgba(255,108,0,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',10,'rgba(0,106,54,1.00)','400','none','normal'],
         type: 'text',
         id: 'Link1_2',
         text: 'After-classroom delivery',
         align: 'left',
         rect: ['-2px','3px','155px','13px','auto','auto']
      }]
   },
   {
      id: 'CloseGroup1',
      type: 'group',
      rect: ['542px','176px','126','19','auto','auto'],
      c: [
      {
         font: ['Verdana, Geneva, sans-serif',10,'rgba(0,106,54,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Link1_Close',
         text: 'Close',
         align: 'center',
         rect: ['0px','2px','126px','16px','auto','auto']
      },
      {
         id: 'OrangeArrow',
         type: 'image',
         rect: ['81px','4px','12px','12px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/OrangeArrow.png','0px','0px']
      }]
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','800px','475px','auto','auto'],
      id: 'SubBG',
      fill: ['rgba(0,0,0,0)','images/SubBG.png','0px','0px']
   },
   {
      type: 'image',
      rect: ['131px','12px','63px','63px','auto','auto'],
      display: 'none',
      id: 'CloseSub',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/CloseSub.png','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,106,54,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3',
      text: 'Before-classroom delivery',
      align: 'left',
      rect: ['370px','81px','304px','16px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy',
      text: 'Preparation is key to successful lesson delivery. The Online Orientation Training (OOT) includes very useful tips on preparation for your lessons. We highly recommend that you revisit this section from time to time.',
      align: 'left',
      rect: ['308px','109px','366px','170px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,106,54,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy3',
      text: 'After-classroom delivery',
      align: 'left',
      rect: ['370px','79px','304px','19px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy2',
      text: 'It is extremely important for volunteers to reflect on the lessons delivered. We always recommend that you write down any success stories gathered from your students as well as best practice and case studies.',
      align: 'left',
      rect: ['127px','101px','366px','170px','auto','auto']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['304px','195px','191px','191px','auto','auto'],
      id: 'Before2',
      fill: ['rgba(0,0,0,0)','images/Before.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['351px','245px','128px','128px','auto','auto'],
      id: 'After',
      fill: ['rgba(0,0,0,0)','images/After.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3Copy}": [
            ["style", "top", '109px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(102,102,102,1.00)'],
            ["style", "height", '90px'],
            ["style", "left", '129px'],
            ["style", "width", '545px']
         ],
         "${_Text3}": [
            ["style", "top", '81px'],
            ["style", "text-align", 'left'],
            ["style", "width", '408px'],
            ["style", "display", 'none'],
            ["style", "height", '16px'],
            ["style", "left", '131px'],
            ["style", "font-size", '16px']
         ],
         "${_Link1_2Group}": [
            ["style", "height", '38px'],
            ["style", "left", '541px'],
            ["style", "top", '142px']
         ],
         "${_Text3Copy3}": [
            ["style", "top", '79px'],
            ["style", "text-align", 'left'],
            ["style", "width", '391px'],
            ["style", "height", '19px'],
            ["style", "display", 'none'],
            ["style", "left", '128px'],
            ["style", "font-size", '16px']
         ],
         "${_Link1_1}": [
            ["color", "color", 'rgba(0,106,54,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '-3px'],
            ["style", "font-size", '10px'],
            ["style", "top", '6px'],
            ["style", "text-align", 'left'],
            ["style", "height", '13px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '156px']
         ],
         "${symbolSelector}": [
            ["style", "height", '0px'],
            ["style", "width", '0px']
         ],
         "${_Menu1BG}": [
            ["style", "top", '103px'],
            ["color", "background-color", 'rgba(240,240,240,1.00)'],
            ["style", "left", '521px'],
            ["style", "border-style", 'solid'],
            ["color", "border-color", 'rgba(0,106,54,1.00)'],
            ["style", "border-width", '2px'],
            ["style", "width", '171px']
         ],
         "${_Link1_Close}": [
            ["style", "top", '2px'],
            ["style", "font-size", '10px'],
            ["style", "text-align", 'center'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(0,106,54,1)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '126px']
         ],
         "${_CloseGroup1}": [
            ["style", "left", '542px'],
            ["style", "top", '176px']
         ],
         "${_Before2}": [
            ["style", "top", '195px'],
            ["style", "left", '304px'],
            ["style", "display", 'none']
         ],
         "${_Link1_2}": [
            ["color", "color", 'rgba(0,106,54,1)'],
            ["style", "font-weight", '400'],
            ["style", "left", '-2px'],
            ["style", "font-size", '10px'],
            ["style", "top", '3px'],
            ["style", "text-align", 'left'],
            ["style", "height", '13px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '155px']
         ],
         "${_Dot2}": [
            ["style", "top", '8px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(255,108,0,1)'],
            ["style", "left", '-12px'],
            ["style", "width", '5px']
         ],
         "${_OrangeArrow}": [
            ["style", "left", '81px'],
            ["style", "top", '4px']
         ],
         "${_After}": [
            ["style", "top", '192px'],
            ["style", "left", '336px'],
            ["style", "display", 'none']
         ],
         "${_Link1_1Group}": [
            ["style", "height", '38px'],
            ["style", "left", '541px'],
            ["style", "top", '107px']
         ],
         "${_Dot}": [
            ["style", "top", '8px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(255,108,0,1.00)'],
            ["style", "left", '-12px'],
            ["style", "width", '5px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '101px'],
            ["style", "width", '545px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(102,102,102,1)'],
            ["style", "display", 'none'],
            ["style", "height", '87px'],
            ["style", "left", '127px'],
            ["style", "font-size", '14px']
         ],
         "${_CloseSub}": [
            ["style", "display", 'none'],
            ["style", "left", '131px'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '12px']
         ],
         "${_SubBG}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1333,
         autoPlay: false,
         labels: {
            "Start": 0,
            "Screen1": 500,
            "Screen2": 1000
         },
         timeline: [
            { id: "eid145", tween: [ "style", "${_Text3}", "width", '408px', { fromValue: '408px'}], position: 500, duration: 0 },
            { id: "eid144", tween: [ "style", "${_Text3}", "left", '131px', { fromValue: '131px'}], position: 500, duration: 0 },
            { id: "eid146", tween: [ "style", "${_Text3Copy}", "height", '90px', { fromValue: '90px'}], position: 500, duration: 0 },
            { id: "eid150", tween: [ "style", "${_After}", "left", '336px', { fromValue: '336px'}], position: 1000, duration: 0 },
            { id: "eid70", tween: [ "style", "${_SubBG}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid147", tween: [ "style", "${_Before2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid148", tween: [ "style", "${_Before2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid74", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid77", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid121", tween: [ "style", "${_Text3Copy2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid149", tween: [ "style", "${_After}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid75", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid78", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid112", tween: [ "style", "${_Text3Copy}", "left", '129px', { fromValue: '129px'}], position: 500, duration: 0 },
            { id: "eid151", tween: [ "style", "${_After}", "top", '192px', { fromValue: '192px'}], position: 1000, duration: 0 },
            { id: "eid153", tween: [ "style", "${_Text3Copy3}", "width", '391px', { fromValue: '391px'}], position: 1000, duration: 0 },
            { id: "eid154", tween: [ "style", "${_Text3Copy2}", "height", '59px', { fromValue: '87px'}], position: 1000, duration: 5 },
            { id: "eid73", tween: [ "style", "${_CloseSub}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid152", tween: [ "style", "${_Text3Copy3}", "left", '128px', { fromValue: '128px'}], position: 1000, duration: 0 },
            { id: "eid113", tween: [ "style", "${_Text3Copy}", "width", '545px', { fromValue: '545px'}], position: 500, duration: 0 },
            { id: "eid80", tween: [ "style", "${_Text3Copy3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Menu5": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['612px','250px','141px','92px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'Menu1BG',
      stroke: [2,'rgba(0,106,54,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(240,240,240,1.00)']
   },
   {
      id: 'Link1_1Group',
      type: 'group',
      rect: ['612px','260px','136','19','auto','auto'],
      c: [
      {
         rect: ['11px','8px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Dot',
         stroke: [0,'rgb(0, 106, 54)','none'],
         type: 'ellipse',
         fill: ['rgba(255,108,0,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',10,'rgba(0,106,54,1.00)','400','none','normal'],
         type: 'text',
         id: 'Link1_1',
         text: 'Getting ready',
         align: 'left',
         rect: ['22px','3px','104px','13px','auto','auto']
      }]
   },
   {
      id: 'Link1_2Group',
      type: 'group',
      rect: ['612px','280px','136','38px','auto','auto'],
      c: [
      {
         rect: ['11px','8px','5px','5px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Dot2',
         stroke: [0,'rgb(0, 106, 54)','none'],
         type: 'ellipse',
         fill: ['rgba(255,108,0,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',10,'rgba(0,106,54,1.00)','400','none','normal'],
         type: 'text',
         id: 'Link1_2',
         text: 'Online-schedule',
         align: 'left',
         rect: ['22px','7px','114px','13px','auto','auto']
      }]
   },
   {
      id: 'CloseGroup1',
      type: 'group',
      rect: ['622px','318px','126','19','auto','auto'],
      c: [
      {
         font: ['Verdana, Geneva, sans-serif',10,'rgba(0,106,54,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Link1_Close',
         text: 'Close',
         align: 'center',
         rect: ['0px','3px','126px','16px','auto','auto']
      },
      {
         id: 'OrangeArrow',
         type: 'image',
         rect: ['81px','4px','12px','12px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/OrangeArrow.png','0px','0px']
      }]
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','800px','475px','auto','auto'],
      id: 'SubBG',
      fill: ['rgba(0,0,0,0)','images/SubBG.png','0px','0px']
   },
   {
      type: 'image',
      rect: ['131px','12px','63px','63px','auto','auto'],
      display: 'none',
      id: 'CloseSub',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/CloseSub.png','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,106,54,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3',
      text: 'Getting ready',
      align: 'left',
      rect: ['129px','81px','304px','16px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy',
      text: 'The online orientation provides very useful tools and techniques for effective classroom delivery. Use them and enjoy the process.',
      align: 'left',
      rect: ['127px','106px','366px','170px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,106,54,1)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy3',
      text: 'Online-schedule',
      align: 'left',
      rect: ['131px','79px','304px','19px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(102,102,102,1.00)','normal','none','normal'],
      type: 'text',
      display: 'none',
      id: 'Text3Copy2',
      text: 'You will be able to manage your volunteer schedule online. Interaction with INJAZ staff will ensure effective time-management and close communication with you…our volunteer.<br><br>\r\rThe actual time and effort required from you: <br>\r-One hour a week<br>\r-7 to 14 weeks ( During Workdays )',
      align: 'left',
      rect: ['308px','103px','366px','96px','auto','auto']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['279px','233px','246px','151px','auto','auto'],
      id: 'TimeTable',
      fill: ['rgba(0,0,0,0)','images/TimeTable.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['302px','153px','200px','256px','auto','auto'],
      id: 'Prepare',
      fill: ['rgba(0,0,0,0)','images/Prepare.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3Copy}": [
            ["style", "top", '106px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(102,102,102,1.00)'],
            ["style", "height", '63px'],
            ["style", "left", '127px'],
            ["style", "width", '545px']
         ],
         "${_Text3}": [
            ["style", "top", '81px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["style", "height", '16px'],
            ["style", "left", '129px'],
            ["style", "font-size", '16px']
         ],
         "${_Link1_2Group}": [
            ["style", "height", '38px'],
            ["style", "left", '612px'],
            ["style", "top", '280px']
         ],
         "${_Text3Copy3}": [
            ["style", "top", '79px'],
            ["style", "text-align", 'left'],
            ["style", "height", '19px'],
            ["style", "display", 'none'],
            ["style", "left", '131px'],
            ["style", "font-size", '16px']
         ],
         "${_Link1_1}": [
            ["color", "color", 'rgba(0,106,54,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '22px'],
            ["style", "font-size", '10px'],
            ["style", "top", '3px'],
            ["style", "text-align", 'left'],
            ["style", "height", '13px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '104.04761904762px']
         ],
         "${symbolSelector}": [
            ["style", "height", '0px'],
            ["style", "width", '0px']
         ],
         "${_Menu1BG}": [
            ["color", "background-color", 'rgba(240,240,240,1.00)'],
            ["style", "top", '250px'],
            ["style", "left", '612px'],
            ["color", "border-color", 'rgba(0,106,54,1.00)'],
            ["style", "border-width", '2px'],
            ["style", "border-style", 'solid']
         ],
         "${_Link1_Close}": [
            ["style", "top", '3px'],
            ["style", "font-size", '10px'],
            ["style", "text-align", 'center'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(0,106,54,1)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '126px']
         ],
         "${_Prepare}": [
            ["style", "top", '153px'],
            ["style", "left", '302px'],
            ["style", "display", 'none']
         ],
         "${_TimeTable}": [
            ["style", "top", '233px'],
            ["style", "left", '279px'],
            ["style", "display", 'none']
         ],
         "${_CloseGroup1}": [
            ["style", "left", '622px'],
            ["style", "top", '318px']
         ],
         "${_Link1_2}": [
            ["color", "color", 'rgba(0,106,54,1)'],
            ["style", "font-weight", '400'],
            ["style", "left", '22px'],
            ["style", "font-size", '10px'],
            ["style", "top", '7px'],
            ["style", "text-align", 'left'],
            ["style", "height", '13px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '114px']
         ],
         "${_Dot2}": [
            ["style", "top", '8px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(255,108,0,1)'],
            ["style", "left", '11px'],
            ["style", "width", '5px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '103px'],
            ["style", "width", '545px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(102,102,102,1)'],
            ["style", "display", 'none'],
            ["style", "height", '96px'],
            ["style", "left", '129px'],
            ["style", "font-size", '14px']
         ],
         "${_CloseSub}": [
            ["style", "display", 'none'],
            ["style", "left", '131px'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '12px']
         ],
         "${_Link1_1Group}": [
            ["style", "left", '612px'],
            ["style", "top", '260px']
         ],
         "${_Dot}": [
            ["style", "top", '8px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(255,108,0,1.00)'],
            ["style", "left", '11px'],
            ["style", "width", '5px']
         ],
         "${_SubBG}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_OrangeArrow}": [
            ["style", "left", '81px'],
            ["style", "top", '4px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1333,
         autoPlay: false,
         labels: {
            "Start": 0,
            "Screen1": 500,
            "Screen2": 1000
         },
         timeline: [
            { id: "eid70", tween: [ "style", "${_SubBG}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid163", tween: [ "style", "${_TimeTable}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid80", tween: [ "style", "${_Text3Copy3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid75", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid78", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid73", tween: [ "style", "${_CloseSub}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid74", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid77", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid121", tween: [ "style", "${_Text3Copy2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid160", tween: [ "style", "${_Prepare}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid161", tween: [ "style", "${_Prepare}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 }         ]
      }
   }
},
"Symbol_1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'text',
      rect: ['0px','0px','526px','152px','auto','auto'],
      id: 'Text',
      text: '1.More productive and satisfied employees.\r<br>2. A better bottom line and an improved standing in the community. <br>\r3.It can further develop an employee’s business skills.\r<br>4.Enhancement of transferable job-related skills like morale, motivation, job satisfaction, self-esteem and positive attitudes toward the employer.\r<br>5. Communication skills — written and verbal\r<br>6. Organization and time-management skills.\r<br>7.People skills — caring, listening and negotiating.<br>\r8. Accountability and assessment reporting.\r<br>9.Planning skills — development of objectives.\r<br>10.Budget development and allocation skills\r<br>11.Survival skills — stress management and priority setting\r<br>12.Increased understanding of coworkers and respect for diversity\r<br>13. More innovative responses to difficulty<br>\r14.Enhanced risk-taking\r<br>15.Greater appreciation of benefits provided by employers<br>\r16.Enlarged sense of community and social obligation\r<br>17.Greater appreciation of contributions from all levels of the organization\r<br>18.Affirmation of personal capability and worth<br>\r19.An opportunity to shape their future workforce.<br>\r20.The ability to help create sustainable business opportunities.\r',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(102,102,102,1.00)','400','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "width", '526px'],
            ["style", "text-align", 'left'],
            ["style", "height", '152px'],
            ["color", "color", 'rgba(102,102,102,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${symbolSelector}": [
            ["style", "height", '170px'],
            ["style", "overflow", 'scroll'],
            ["style", "width", '550px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-11711582");
