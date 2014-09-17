var ZKWSK=function(){var e=function(e){e.not(":first-child")&&e.prev().before(e)},i=function(e){var i=$('[class*="project-square-2"]'),n=i.splice(e,1);$($(n)).addClass("expanded"),$(i).addClass("minimized")},n=function(){$('[class*="project-square-2"].expanded').removeClass("expanded"),$('[class*="project-square-2"]').removeClass("minimized")},l=function(){$(".nav-timeline").removeClass("dot-home").removeClass("dot-experience").removeClass("dot-projects").removeClass("dot-get-in-touch")};Array.prototype.swapItems=function(e,i){return this[e]=this.splice(i,1,this[e])[0],this};var t=angular.module("zkwsk-module",[]).filter("slice",function(){return function(e,i,n){return e.slice(i,n)}});return t.controller("SkillsController",["$scope",function(e){function i(i,n){5>=i?e.columnCount=1:i>5&&10>=i?e.columnCount=2:i>10&&(e.columnCount=3);for(var l=Math.ceil(i/e.columnCount),t=0;i>t;t+=l){var o={start:t,end:Math.min(t+l,i)};n.push(o)}}e.skills={development:[{name:".NET",level:1,priority:100},{name:"Amazon Web Services",level:1,priority:100},{name:"AngularJS",level:1,priority:100},{name:"Bash",level:1,priority:100},{name:"C#",level:1,priority:100},{name:"CakePHP",level:1,priority:100},{name:"CSS Animations",level:1,priority:100},{name:"CSS3",level:1,priority:2},{name:"Drupal",level:1,priority:100},{name:"Graceful Degradation",level:1,priority:100},{name:"Progressive Enhancement",level:1,priority:100},{name:"Heroku",level:1,priority:100},{name:"HTML5",level:1,priority:1},{name:"Java",level:1,priority:100},{name:"Javascript",level:1,priority:3},{name:"Joomla",level:1,priority:100},{name:"jQuery",level:1,priority:100},{name:"LESS",level:1,priority:100},{name:"Linux",level:1,priority:100},{name:"Meteor",level:1,priority:100},{name:"MongoDB",level:1,priority:100},{name:"MVC",level:1,priority:100},{name:"MySQL",level:1,priority:100},{name:"PHP",level:1,priority:5},{name:"Razor",level:1,priority:100},{name:"Responsive Web Design",level:1,priority:100},{name:"Ruby On Rails",level:1,priority:4},{name:"SASS",level:1,priority:100},{name:"SVG Animations",level:1,priority:100},{name:"Twitter Bootstrap",level:1,priority:100},{name:"Vagrant Up",level:1,priority:100},{name:"Wordpress",level:1,priority:100},{name:"ZSH",level:1,priority:100},{name:"ZURB Foundation",level:1,priority:100}],design:[{name:"Adobe Illustrator",level:1,priority:100},{name:"Adobe Photoshop",level:1,priority:100},{name:"Cognition",level:1,priority:100},{name:"Context-aware Design",level:1,priority:100},{name:"Design Patterns (Android)",level:1,priority:100},{name:"Design Patterns (iOS)",level:1,priority:100},{name:"Design Patterns (web)",level:1,priority:100},{name:"Design Thinking",level:1,priority:100},{name:"Information Architecture",level:1,priority:2},{name:"Mental Models",level:1,priority:100},{name:"Personas",level:1,priority:100},{name:"Persuasive Technology",level:1,priority:100},{name:"Prototyping",level:1,priority:100},{name:"Scenarios",level:1,priority:100},{name:"Usability",level:1,priority:100},{name:"Usability Testing",level:1,priority:3},{name:"User Research",level:1,priority:1},{name:"Video Editing",level:1,priority:100},{name:"Visual Design",level:1,priority:5},{name:"Wireframing",level:1,priority:4}],management:[{name:"Accounting",level:1,priority:100},{name:"Agile",level:1,priority:1},{name:"Business Model Canvas",level:1,priority:100},{name:"Business Process Modelling",level:1,priority:100},{name:"E-commerce",level:1,priority:7},{name:"Internet Business Models",level:1,priority:4},{name:"Kanban",level:1,priority:100},{name:"Knowledge Management",level:1,priority:100},{name:"LEAN",level:1,priority:100},{name:"LEAN Startup",level:1,priority:3},{name:"Marketing",level:1,priority:6},{name:"Podio",level:1,priority:100},{name:"Product Management",level:1,priority:100},{name:"SCRUM",level:1,priority:2},{name:"Strategy",level:1,priority:5}]},e.columns={development:[],design:[],management:[]},e.columnCount=3,i(e.skills.development.length,e.columns.development),i(e.skills.design.length,e.columns.design),i(e.skills.management.length,e.columns.management)}]),$(document).foundation(),$(document).ready(function(){setTimeout(function(){$(".logo").fadeIn(200)},500),setTimeout(function(){$(".logo-subtitle").fadeIn(200)},1500),setTimeout(function(){e()},3e3);var e=function(){$("html.no-touch .logo-container").addClass("opaque");var e=$("html.no-touch .header-video");e.get(0).play(),e.removeClass("hidden")};Modernizr.touch||($("html.no-touch .header-video").on("timeupdate",function(){this.currentTime>this.duration-3&&($(".header-profile-pic").fadeIn(3e3),$(this).addClass("hidden"))}),$("html.no-touch .header-video").get(0).onended=function(){i()},$("html.no-touch .header-video").on("mouseover",function(){i()}),$("html.no-touch .header-video").on("mouseout",function(){t()}));var i=function(){$(".scroll-down").fadeIn(1e3)},t=function(){$(".scroll-down").fadeOut(1e3)};$("a[data-smooth-scroll]").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top+3},500),!1}}),Modernizr.touch||($("section.grey").waypoint(function(e){"down"===e?($("#card").removeClass("flipped"),setTimeout(function(){$(".nav-timeline").addClass("active-home").addClass("dot-home")},1e3)):"up"===e&&$("#card").addClass("flipped")}),$("#skills").waypoint(function(e){"down"===e?(l(),$(".nav-timeline").addClass("active-experience").addClass("dot-experience")):"up"===e&&(l(),$(".nav-timeline").removeClass("active-experience"),$(".nav-timeline").addClass("dot-home"))}),$("#projects").waypoint(function(e){"down"===e?(l(),$(".nav-timeline").addClass("active-projects").addClass("dot-projects")):"up"===e&&(l(),$(".nav-timeline").removeClass("active-projects"),$(".nav-timeline").addClass("dot-experience"))}),$("#get-in-touch").waypoint(function(e){"down"===e?(l(),$(".nav-timeline").addClass("active-get-in-touch").addClass("dot-get-in-touch")):"up"===e&&(l(),$(".nav-timeline").removeClass("active-get-in-touch"),$(".nav-timeline").addClass("dot-projects"))},{offset:"bottom-in-view"})),$(".venn-diagram").waypoint(function(){$(".venn-diagram .container").addClass("animate-circle").addClass("animate-ux").addClass("animate-business").addClass("animate-development")},{offset:"80%"}),$(".venn-diagram").waypoint(function(){$(".venn-diagram .container").addClass("animate-position"),$(".skill-list").animate({opacity:1,top:0},500)},{offset:"30%"}),$('a[href^="#action_"]').on("click",function(e){e.preventDefault()}),$('.keywords li a[href^="#"]').on("click",function(e){e.preventDefault()}),$('section.projects [href="#action_close"]').click(function(){n()}),$('section.skills [href="#action_show_all_development_skills"]').click(function(){$(".select-skills").hide(),$(".all-skills.development").fadeIn(500)}),$('section.skills [href="#action_show_all_design_skills"]').click(function(){$(".select-skills").hide(),$(".all-skills.design").fadeIn(500)}),$('section.skills [href="#action_show_all_management_skills"]').click(function(){$(".select-skills").hide(),$(".all-skills.management").fadeIn(500)}),$('section.skills [href="#action_hide_skill_details"]').click(function(){$(".all-skills").hide(),$(".select-skills").fadeIn(500)})}),{expand_square:function(e){i(e)},minimize_square:function(){n()},relocate_squares:function(i){e(i)}}}();