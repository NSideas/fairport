//
var current=-1;
var ringInt;
var totalRingSeg=0;


if(Array.indexOf==undefined||!Array.indexOf){
	Array.prototype.indexOf = function(obj){
		for(var i=0; i<this.length; i++){
			if(this[i]==obj){
				return i;
			}
		}
		return (-1);
	}
}

jQuery(document).ready(function($){
	if($.browser.msie==true){
		$('body').addClass('msie');
		if(parseInt($.browser.version)<9){
			$('body').addClass('below-ie9');
		}
		if(parseInt($.browser.version)<8){
			$('body').addClass('below-ie8');
		}
	}else{
		$('body').addClass(BrowserDetect.browser.toLowerCase());	
	}
	
	$('#subscript-button').click(function(){
		if(!$(this).hasClass('open')){
			$(this).addClass('open');
			return false;
		}
	});
	$('#subscript-button .cancel-button').click(function(){
		$('#subscript-button.open').removeClass('open');	
		return false;
	});
	$('#header-meta #header-search-form #s,#header-meta #header-search-form #search-submit').hover(function(){
		$(this).parent().addClass('hover');
	},function(){
		$(this).parent().removeClass('hover');
	}).focus(function(){
		$(this).parent().addClass('focus');
	}).blur(function(){
		$(this).parent().removeClass('focus');
	});
	$('.label-inside').each(function(){
		$(this).attr('orig-val',$(this).val()).focus(function(){
			if($(this).val()==$(this).attr('orig-val')){
				$(this).val('');	
			}
		}).blur(function(){
			if($(this).val().replace(/\s/mgi,'')==''){
				$(this).val($(this).attr('orig-val'));	
			}
		});	
	});
	$('a.mailto').each(function(){
		var h=$(this).attr('href');
		var i = $(this).html();
		h=h.replace(/\{at\}/mgi,'@').replace(/\{dot\}/mgi,'.');
		i=i.replace(/\{at\}/mgi,'@').replace(/\{dot\}/mgi,'.');
		$(this).attr('href',h).html(i);
	});
	$('body.search-results .entry-content .entry-summary').each(function(){
		var i = $(this).html();
		i=i.replace(/\{at\}/mgi,'@').replace(/\{dot\}/mgi,'.');
		$(this).html(i);
	});
	
	if($('#ring').html()!=null){
		$('#ring a.ring-btn,#ring #Map area').each(function(index) {
			$(this).attr('rel',index);
			totalRingSeg++;
		}).hover(function(){
			killInt();
			current=parseInt($(this).attr('rel'));
			showRing(current);
		},function(){
			hideRing();
			setInt();
		}).click(function(){
			return false;
		});
		current=totalRingSeg-1;
		setInt();
	}
	$('.accordion,.archive-year-list').each(function(){
		var a=$(this);
		var dts=a.find('>dt');
		var dds=a.find('>dd');
		dds.not('.open').addClass('closed');
		dts.not('.open').addClass('closed');
		dts.click(function(){
			var tdt=$(this);
			var ndd=tdt.next('dd');
			if(tdt.hasClass('open')){
				tdt.removeClass('open').addClass('closed');
				ndd.removeClass('open').addClass('closed');	
			}else{
				tdt.addClass('open').removeClass('closed');
				ndd.addClass('open').removeClass('closed');
			}
		});
	});
	$('h1, .typograph').each(function(i){
		var h = $(this);
		typo(h);
	});
	$('.more-tags-btn').click(function(){
		$(this).parent().addClass('closed').siblings('.closed').removeClass('closed');
		return false;
	});
	$('a').each(function(){
		var ah = '';
		if($(this).attr('href')!=undefined){
			ah = $(this).attr('href');
			ah = ah.toLowerCase();
			if(ah.substr(0,4)=='http'){
				var domain = ah.replace('https://','');
				domain = domain.replace('http://','');
				domain = domain.split('.');
				if(domain[0]=='www'){
					domain = domain[1];
				}else{
					domain = domain[0];	
				}
				if(domain.substring(0,4)!='fair'&&domain.substring(0,4)!='famd'&&domain.substring(0,4)!='fam-'){
					$(this).addClass('external');
				}
			}
			if(ah && ah.match(/.+\/[^\/]+\/[^\/]+\/[^\/]+\.[^\/]{3}[^\/]*/i)){
				$(this).addClass('download-track').attr('data-download', ah.replace(/.+(\/[^\/]+\/[^\/]+\/[^\/]+\.[^\/]{3}[^\/]*)/mgi, "\$1"));
			}
		}
	});
	$('.fancybox').each(function(){
		var href=$(this).attr('href');
		var fancyOpts = {
			'padding':10,
			'autoScale':true,
			'autoDimensions':true,
			'transitionIn':'none',
			'transitionOut':'none',
			'overlayColor':'#FFF',
			//'height':'auto',
			'overlayOpacity':0.7
		};
		if(href!=null){
			if(href.indexOf('?yt=')!=-1){
				fancyOpts['type']='iframe';
				fancyOpts['height']=315;
			}
			$(this).fancybox(fancyOpts).removeAttr('target').removeClass('external');
		}
	});
	$('a.external').click(function(e){
		gaEvent($(this).attr('href'), 'external');
		ShowWindow($(this).attr('href'));
		e.preventDefault();
		return false;
	});
	$('a.download-track').not('.external').click(function(e){
		gaEvent($(this).attr('data-download'), 'download');
	});
});
jQuery(window).load(function(){
	if(jQuery('body').hasClass('safari')){
		jQuery('body').addClass('safari-load');
		/*jQuery('a').each(function(i){
			var a = $(this);
			var cw = a.width();
			var s = a.attr('style');
			a.css({'width':cw+'px','text-align':'left','word-wrap':'normal'}).delay(2).removeAttr('style').delay(2).attr('style',s);
		});*/
	}
});
//NEW WINDOW CODE
function ShowWindow(url,width,height) {
	//_gaq.push(['_trackPageview','/external/'+url]);
	var wh = 700;
	var ww = 1000;
	if(width!=null){
		ww = width;
	}
	if(height!=null){
		wh = height;
	}
    objMovieWindow = window.open(url, "NSideasWindow", "width="+ww+", height="+wh+", top=0, left=0, status=1, toolbar=1, menubar=1, location=1, directories=1, scrollbars=1, resizable=1");
    objMovieWindow.focus();
} 
//END NEW WINDOW CODE

function typo(h){
	h.addClass('typoed');
	var ls = h.html();
	var specialHTML=[];
	ls = ls.replace(/<br([^>]*)>/mgi,'\n').replace(/&amp;/mgi,'&').replace(/&nbsp;/mgi,'ø');//.replace(/\t/mgi,'');
	specialHTML = ls.match(/<[^>\n\r]*>/mgi);
	ls = ls.replace(/<[^>\r\n]*>/mgi,'∑');
	ls = ls.split('');
	var epsilonCount=0;
	var charCount=0;
	var wordCount=1;
	var rp = [];
	var firstLetter=true;
	var str='';
	var sym = ['.',',',';',':','<','>','/','$','@','!','#','%','^','&','*','(',')','+','=','{','}','[',']','-','_',"'",'"','“','”','‘','’','`','~','|',"\\",' ','\n','\r','ø','–','—','—'];
	var symMAP = ['dot','comma','semi-colon','colon','less-than','greater-than','forward-slash','dollar','at','bang','pound','percent','carrot','ampersand','astrisk','open-paren','close-paren','plus','equal','open-bracet','close-bracet','open-bracket','close-bracket','hyphen','underscore',"foot",'inches','left-double','right-double','left-single','right-single','backtick','tilde','pipe',"backslash",'space','break','break','non-breaking-space','ndash','mdash','mdash'];
	var symHTML = ['.',',',';',':','&lt;','&gt;','/','$','@','!','#','%','^','&amp;','*','(',')','+','=','{','}','[',']','-','_',"'",'"','&ldquo;','&rdquo;','&lsquo;','&rsquo;','`','~','|',"\\",' ','<br/>','<br/>','&nbsp;','&ndash;','&mdash;','&mdash;'];	
	for(var i=0;i<ls.length;i++){
		var classes='';
		if(i==0){
			classes+='first ';
		}
		if(i>=ls.length){
			classes+='last ';
		}
		var t = ls[i];
		var n = ls[(i+1)];
		var can = '';
		var newWord='';
		var closeWord='';
		var char=ls[i];
		if(t!='∑'){
			if(t!=null){
				classes+='letter ';
				var ts = sym.indexOf(t);
				if(ts!=-1){
					t = symMAP[ts];
					char=symHTML[ts];
				}
				can+=t;
			}
			if(n!=null&&n!='∑'){
				var ns = sym.indexOf(n);
				if(ns!=-1){
					n = symMAP[ns];
				}
				can+='-'+n;
			}else if(n=='∑'){
				n = ls[(i+2)];
				if(n!=null&&n!='∑'){
					var ns = sym.indexOf(n);
					if(ns!=-1){
						n = symMAP[ns];
					}
					can+='-'+n;
				}else if(n=='∑'){
					if(n!=null&&n!='∑'){
						var ns = sym.indexOf(n);
						if(ns!=-1){
							n = symMAP[ns];
						}
						can+='-'+n;
					}	
				}
			}
			classes+=can+' '+'char'+(charCount+1);
			if(firstLetter==true){
				firstLetter = false;
				str+='<span class="word word1">';	
			}
			if(n=='space'||n=='non-breaking-space'||n=='break'){
				closeWord = '</span>';
			}
			if(n==null){
				closeWord='</span>';
			}
			if(t=='space'||t=='non-breaking-space'){
				wordCount++;
				str+='<span class="word word'+wordCount+'">'
			}
			if(t=='break'){
				wordCount++;
				closeWord='<span class="word word'+wordCount+'">'+closeWord;	
			}
			
			var wrapBegin='<span class="'+classes+'">';
			var wrapEnd='</span>';			
			str+=wrapBegin+char+wrapEnd;
			str+=closeWord;
			charCount++;
		}else{
			str+=specialHTML[epsilonCount];
			epsilonCount++;	
		}
	}
	h.html(str);
}
function setInt(){
	if(ringInt!=null){
		killInt();	
	}
	if(ringInt==null){
		ringInt=window.setInterval("showNextRing();",5000);
	}
}
function killInt(){
	window.clearInterval(ringInt);
	ringInt=null;
}
function showNextRing(){
	hideRing();
	var next = current+1;
	if(next<totalRingSeg){
		current=next;
	}else{
		current=0;
	}
	showRing(current);	
}
function showRing(i){
	jQuery('#ring').css('background-position',' 0px '+(i*-520-520)+'px');
}
function hideRing(){
	jQuery('#ring').css('background-position','0px 0px');		
}

var BrowserDetect = {
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
function gaEvent(act, cat){
	if(!cat){
		cat = 'general';
	}
	if(_gaq != null){
		_gaq.push(['_trackEvent', cat, act]);
	}
}