/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'foicon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'fo-home': '&#xe600;',
		'fo-home2': '&#xe601;',
		'fo-home3': '&#xe602;',
		'fo-office': '&#xe603;',
		'fo-newspaper': '&#xe604;',
		'fo-pencil': '&#xe605;',
		'fo-pencil2': '&#xe606;',
		'fo-quill': '&#xe607;',
		'fo-pen': '&#xe608;',
		'fo-blog': '&#xe609;',
		'fo-droplet': '&#xe60a;',
		'fo-paint-format': '&#xe60b;',
		'fo-image': '&#xe60c;',
		'fo-image2': '&#xe60d;',
		'fo-images': '&#xe60e;',
		'fo-camera': '&#xe60f;',
		'fo-music': '&#xe610;',
		'fo-headphones': '&#xe611;',
		'fo-play': '&#xe612;',
		'fo-film': '&#xe613;',
		'fo-camera2': '&#xe614;',
		'fo-dice': '&#xe615;',
		'fo-pacman': '&#xe616;',
		'fo-spades': '&#xe617;',
		'fo-clubs': '&#xe618;',
		'fo-diamonds': '&#xe619;',
		'fo-pawn': '&#xe61a;',
		'fo-bullhorn': '&#xe61b;',
		'fo-connection': '&#xe61c;',
		'fo-podcast': '&#xe61d;',
		'fo-feed': '&#xe61e;',
		'fo-book': '&#xe61f;',
		'fo-books': '&#xe620;',
		'fo-library': '&#xe621;',
		'fo-file': '&#xe622;',
		'fo-profile': '&#xe623;',
		'fo-file2': '&#xe624;',
		'fo-file3': '&#xe625;',
		'fo-file4': '&#xe626;',
		'fo-copy': '&#xe627;',
		'fo-copy2': '&#xe628;',
		'fo-copy3': '&#xe629;',
		'fo-paste': '&#xe62a;',
		'fo-paste2': '&#xe62b;',
		'fo-paste3': '&#xe62c;',
		'fo-stack': '&#xe62d;',
		'fo-folder': '&#xe62e;',
		'fo-folder-open': '&#xe62f;',
		'fo-tag': '&#xe630;',
		'fo-tags': '&#xe631;',
		'fo-barcode': '&#xe632;',
		'fo-qrcode': '&#xe633;',
		'fo-ticket': '&#xe634;',
		'fo-cart': '&#xe635;',
		'fo-cart2': '&#xe636;',
		'fo-cart3': '&#xe637;',
		'fo-coin': '&#xe638;',
		'fo-credit': '&#xe639;',
		'fo-calculate': '&#xe63a;',
		'fo-support': '&#xe63b;',
		'fo-phone': '&#xe63c;',
		'fo-phone-hang-up': '&#xe63d;',
		'fo-address-book': '&#xe63e;',
		'fo-notebook': '&#xe63f;',
		'fo-envelope': '&#xe640;',
		'fo-pushpin': '&#xe641;',
		'fo-location': '&#xe642;',
		'fo-location2': '&#xe643;',
		'fo-compass': '&#xe644;',
		'fo-map': '&#xe645;',
		'fo-map2': '&#xe646;',
		'fo-history': '&#xe647;',
		'fo-clock': '&#xe648;',
		'fo-clock2': '&#xe649;',
		'fo-alarm': '&#xe64a;',
		'fo-alarm2': '&#xe64b;',
		'fo-bell': '&#xe64c;',
		'fo-stopwatch': '&#xe64d;',
		'fo-calendar': '&#xe64e;',
		'fo-calendar2': '&#xe64f;',
		'fo-print': '&#xe650;',
		'fo-keyboard': '&#xe651;',
		'fo-screen': '&#xe652;',
		'fo-laptop': '&#xe653;',
		'fo-mobile': '&#xe654;',
		'fo-mobile2': '&#xe655;',
		'fo-tablet': '&#xe656;',
		'fo-tv': '&#xe657;',
		'fo-cabinet': '&#xe658;',
		'fo-drawer': '&#xe659;',
		'fo-drawer2': '&#xe65a;',
		'fo-drawer3': '&#xe65b;',
		'fo-box-add': '&#xe65c;',
		'fo-box-remove': '&#xe65d;',
		'fo-download': '&#xe65e;',
		'fo-upload': '&#xe65f;',
		'fo-disk': '&#xe660;',
		'fo-storage': '&#xe661;',
		'fo-undo': '&#xe662;',
		'fo-redo': '&#xe663;',
		'fo-flip': '&#xe664;',
		'fo-flip2': '&#xe665;',
		'fo-undo2': '&#xe666;',
		'fo-redo2': '&#xe667;',
		'fo-forward': '&#xe668;',
		'fo-reply': '&#xe669;',
		'fo-bubble': '&#xe66a;',
		'fo-bubbles': '&#xe66b;',
		'fo-bubbles2': '&#xe66c;',
		'fo-bubble2': '&#xe66d;',
		'fo-bubbles3': '&#xe66e;',
		'fo-bubbles4': '&#xe66f;',
		'fo-user': '&#xe670;',
		'fo-users': '&#xe671;',
		'fo-user2': '&#xe672;',
		'fo-users2': '&#xe673;',
		'fo-user3': '&#xe674;',
		'fo-user4': '&#xe675;',
		'fo-quotes-left': '&#xe676;',
		'fo-busy': '&#xe677;',
		'fo-spinner': '&#xe678;',
		'fo-spinner2': '&#xe679;',
		'fo-spinner3': '&#xe67a;',
		'fo-spinner4': '&#xe67b;',
		'fo-spinner5': '&#xe67c;',
		'fo-spinner6': '&#xe67d;',
		'fo-binoculars': '&#xe67e;',
		'fo-search': '&#xe67f;',
		'fo-zoomin': '&#xe680;',
		'fo-zoomout': '&#xe681;',
		'fo-expand': '&#xe682;',
		'fo-contract': '&#xe683;',
		'fo-expand2': '&#xe684;',
		'fo-contract2': '&#xe685;',
		'fo-key': '&#xe686;',
		'fo-key2': '&#xe687;',
		'fo-lock': '&#xe688;',
		'fo-lock2': '&#xe689;',
		'fo-unlocked': '&#xe68a;',
		'fo-wrench': '&#xe68b;',
		'fo-settings': '&#xe68c;',
		'fo-equalizer': '&#xe68d;',
		'fo-cog': '&#xe68e;',
		'fo-cogs': '&#xe68f;',
		'fo-cog2': '&#xe690;',
		'fo-hammer': '&#xe691;',
		'fo-wand': '&#xe692;',
		'fo-aid': '&#xe693;',
		'fo-bug': '&#xe694;',
		'fo-pie': '&#xe695;',
		'fo-stats': '&#xe696;',
		'fo-bars': '&#xe697;',
		'fo-bars2': '&#xe698;',
		'fo-gift': '&#xe699;',
		'fo-trophy': '&#xe69a;',
		'fo-glass': '&#xe69b;',
		'fo-mug': '&#xe69c;',
		'fo-food': '&#xe69d;',
		'fo-leaf': '&#xe69e;',
		'fo-rocket': '&#xe69f;',
		'fo-meter': '&#xe6a0;',
		'fo-meter2': '&#xe6a1;',
		'fo-dashboard': '&#xe6a2;',
		'fo-hammer2': '&#xe6a3;',
		'fo-fire': '&#xe6a4;',
		'fo-lab': '&#xe6a5;',
		'fo-magnet': '&#xe6a6;',
		'fo-remove': '&#xe6a7;',
		'fo-remove2': '&#xe6a8;',
		'fo-briefcase': '&#xe6a9;',
		'fo-airplane': '&#xe6aa;',
		'fo-truck': '&#xe6ab;',
		'fo-road': '&#xe6ac;',
		'fo-accessibility': '&#xe6ad;',
		'fo-target': '&#xe6ae;',
		'fo-shield': '&#xe6af;',
		'fo-lightning': '&#xe6b0;',
		'fo-switch': '&#xe6b1;',
		'fo-powercord': '&#xe6b2;',
		'fo-signup': '&#xe6b3;',
		'fo-list': '&#xe6b4;',
		'fo-list2': '&#xe6b5;',
		'fo-numbered-list': '&#xe6b6;',
		'fo-menu': '&#xe6b7;',
		'fo-menu2': '&#xe6b8;',
		'fo-tree': '&#xe6b9;',
		'fo-cloud': '&#xe6ba;',
		'fo-cloud-download': '&#xe6bb;',
		'fo-cloud-upload': '&#xe6bc;',
		'fo-download2': '&#xe6bd;',
		'fo-upload2': '&#xe6be;',
		'fo-download3': '&#xe6bf;',
		'fo-upload3': '&#xe6c0;',
		'fo-globe': '&#xe6c1;',
		'fo-earth': '&#xe6c2;',
		'fo-link': '&#xe6c3;',
		'fo-flag': '&#xe6c4;',
		'fo-attachment': '&#xe6c5;',
		'fo-eye': '&#xe6c6;',
		'fo-eye-blocked': '&#xe6c7;',
		'fo-eye2': '&#xe6c8;',
		'fo-bookmark': '&#xe6c9;',
		'fo-bookmarks': '&#xe6ca;',
		'fo-brightness-medium': '&#xe6cb;',
		'fo-brightness-contrast': '&#xe6cc;',
		'fo-contrast': '&#xe6cd;',
		'fo-star': '&#xe6ce;',
		'fo-star2': '&#xe6cf;',
		'fo-star3': '&#xe6d0;',
		'fo-heart': '&#xe6d1;',
		'fo-heart2': '&#xe6d2;',
		'fo-heart-broken': '&#xe6d3;',
		'fo-thumbs-up': '&#xe6d4;',
		'fo-thumbs-up2': '&#xe6d5;',
		'fo-happy': '&#xe6d6;',
		'fo-happy2': '&#xe6d7;',
		'fo-smiley': '&#xe6d8;',
		'fo-smiley2': '&#xe6d9;',
		'fo-tongue': '&#xe6da;',
		'fo-tongue2': '&#xe6db;',
		'fo-sad': '&#xe6dc;',
		'fo-sad2': '&#xe6dd;',
		'fo-wink': '&#xe6de;',
		'fo-wink2': '&#xe6df;',
		'fo-grin': '&#xe6e0;',
		'fo-grin2': '&#xe6e1;',
		'fo-cool': '&#xe6e2;',
		'fo-cool2': '&#xe6e3;',
		'fo-angry': '&#xe6e4;',
		'fo-angry2': '&#xe6e5;',
		'fo-evil': '&#xe6e6;',
		'fo-evil2': '&#xe6e7;',
		'fo-shocked': '&#xe6e8;',
		'fo-shocked2': '&#xe6e9;',
		'fo-confused': '&#xe6ea;',
		'fo-confused2': '&#xe6eb;',
		'fo-neutral': '&#xe6ec;',
		'fo-neutral2': '&#xe6ed;',
		'fo-wondering': '&#xe6ee;',
		'fo-wondering2': '&#xe6ef;',
		'fo-point-up': '&#xe6f0;',
		'fo-point-right': '&#xe6f1;',
		'fo-point-down': '&#xe6f2;',
		'fo-point-left': '&#xe6f3;',
		'fo-warning': '&#xe6f4;',
		'fo-notification': '&#xe6f5;',
		'fo-question': '&#xe6f6;',
		'fo-info': '&#xe6f7;',
		'fo-info2': '&#xe6f8;',
		'fo-blocked': '&#xe6f9;',
		'fo-cancel-circle': '&#xe6fa;',
		'fo-checkmark-circle': '&#xe6fb;',
		'fo-spam': '&#xe6fc;',
		'fo-close': '&#xe6fd;',
		'fo-checkmark': '&#xe6fe;',
		'fo-checkmark2': '&#xe6ff;',
		'fo-spell-check': '&#xe700;',
		'fo-minus': '&#xe701;',
		'fo-plus': '&#xe702;',
		'fo-enter': '&#xe703;',
		'fo-exit': '&#xe704;',
		'fo-play2': '&#xe705;',
		'fo-pause': '&#xe706;',
		'fo-stop': '&#xe707;',
		'fo-backward': '&#xe708;',
		'fo-forward2': '&#xe709;',
		'fo-play3': '&#xe70a;',
		'fo-pause2': '&#xe70b;',
		'fo-stop2': '&#xe70c;',
		'fo-backward2': '&#xe70d;',
		'fo-forward3': '&#xe70e;',
		'fo-first': '&#xe70f;',
		'fo-last': '&#xe710;',
		'fo-previous': '&#xe711;',
		'fo-next': '&#xe712;',
		'fo-eject': '&#xe713;',
		'fo-volume-high': '&#xe714;',
		'fo-volume-medium': '&#xe715;',
		'fo-volume-low': '&#xe716;',
		'fo-volume-mute': '&#xe717;',
		'fo-volume-mute2': '&#xe718;',
		'fo-volume-increase': '&#xe719;',
		'fo-volume-decrease': '&#xe71a;',
		'fo-loop': '&#xe71b;',
		'fo-loop2': '&#xe71c;',
		'fo-loop3': '&#xe71d;',
		'fo-shuffle': '&#xe71e;',
		'fo-arrow-up-left': '&#xe71f;',
		'fo-arrow-up': '&#xe720;',
		'fo-arrow-up-right': '&#xe721;',
		'fo-arrow-right': '&#xe722;',
		'fo-arrow-down-right': '&#xe723;',
		'fo-arrow-down': '&#xe724;',
		'fo-arrow-down-left': '&#xe725;',
		'fo-arrow-left': '&#xe726;',
		'fo-arrow-up-left2': '&#xe727;',
		'fo-arrow-up2': '&#xe728;',
		'fo-arrow-up-right2': '&#xe729;',
		'fo-arrow-right2': '&#xe72a;',
		'fo-arrow-down-right2': '&#xe72b;',
		'fo-arrow-down2': '&#xe72c;',
		'fo-arrow-down-left2': '&#xe72d;',
		'fo-arrow-left2': '&#xe72e;',
		'fo-arrow-up-left3': '&#xe72f;',
		'fo-arrow-up3': '&#xe730;',
		'fo-arrow-up-right3': '&#xe731;',
		'fo-arrow-right3': '&#xe732;',
		'fo-arrow-down-right3': '&#xe733;',
		'fo-arrow-down3': '&#xe734;',
		'fo-arrow-down-left3': '&#xe735;',
		'fo-arrow-left3': '&#xe736;',
		'fo-tab': '&#xe737;',
		'fo-checkbox-checked': '&#xe738;',
		'fo-checkbox-unchecked': '&#xe739;',
		'fo-checkbox-partial': '&#xe73a;',
		'fo-radio-checked': '&#xe73b;',
		'fo-radio-unchecked': '&#xe73c;',
		'fo-crop': '&#xe73d;',
		'fo-scissors': '&#xe73e;',
		'fo-filter': '&#xe73f;',
		'fo-filter2': '&#xe740;',
		'fo-font': '&#xe741;',
		'fo-text-height': '&#xe742;',
		'fo-text-width': '&#xe743;',
		'fo-bold': '&#xe744;',
		'fo-underline': '&#xe745;',
		'fo-italic': '&#xe746;',
		'fo-strikethrough': '&#xe747;',
		'fo-omega': '&#xe748;',
		'fo-sigma': '&#xe749;',
		'fo-table': '&#xe74a;',
		'fo-table2': '&#xe74b;',
		'fo-insert-template': '&#xe74c;',
		'fo-pilcrow': '&#xe74d;',
		'fo-lefttoright': '&#xe74e;',
		'fo-righttoleft': '&#xe74f;',
		'fo-paragraph-left': '&#xe750;',
		'fo-paragraph-center': '&#xe751;',
		'fo-paragraph-right': '&#xe752;',
		'fo-paragraph-justify': '&#xe753;',
		'fo-paragraph-left2': '&#xe754;',
		'fo-paragraph-center2': '&#xe755;',
		'fo-paragraph-right2': '&#xe756;',
		'fo-paragraph-justify2': '&#xe757;',
		'fo-indent-increase': '&#xe758;',
		'fo-indent-decrease': '&#xe759;',
		'fo-newtab': '&#xe75a;',
		'fo-embed': '&#xe75b;',
		'fo-code': '&#xe75c;',
		'fo-console': '&#xe75d;',
		'fo-share': '&#xe75e;',
		'fo-mail': '&#xe75f;',
		'fo-mail2': '&#xe760;',
		'fo-mail3': '&#xe761;',
		'fo-mail4': '&#xe762;',
		'fo-google': '&#xe763;',
		'fo-googleplus': '&#xe764;',
		'fo-googleplus2': '&#xe765;',
		'fo-googleplus3': '&#xe766;',
		'fo-googleplus4': '&#xe767;',
		'fo-google-drive': '&#xe768;',
		'fo-facebook': '&#xe769;',
		'fo-facebook2': '&#xe76a;',
		'fo-facebook3': '&#xe76b;',
		'fo-instagram': '&#xe76c;',
		'fo-twitter': '&#xe76d;',
		'fo-twitter2': '&#xe76e;',
		'fo-twitter3': '&#xe76f;',
		'fo-feed2': '&#xe770;',
		'fo-feed3': '&#xe771;',
		'fo-feed4': '&#xe772;',
		'fo-youtube': '&#xe773;',
		'fo-youtube2': '&#xe774;',
		'fo-vimeo': '&#xe775;',
		'fo-vimeo2': '&#xe776;',
		'fo-vimeo3': '&#xe777;',
		'fo-lanyrd': '&#xe778;',
		'fo-flickr': '&#xe779;',
		'fo-flickr2': '&#xe77a;',
		'fo-flickr3': '&#xe77b;',
		'fo-flickr4': '&#xe77c;',
		'fo-picassa': '&#xe77d;',
		'fo-picassa2': '&#xe77e;',
		'fo-dribbble': '&#xe77f;',
		'fo-dribbble2': '&#xe780;',
		'fo-dribbble3': '&#xe781;',
		'fo-forrst': '&#xe782;',
		'fo-forrst2': '&#xe783;',
		'fo-deviantart': '&#xe784;',
		'fo-deviantart2': '&#xe785;',
		'fo-steam': '&#xe786;',
		'fo-steam2': '&#xe787;',
		'fo-github': '&#xe788;',
		'fo-github2': '&#xe789;',
		'fo-github3': '&#xe78a;',
		'fo-github4': '&#xe78b;',
		'fo-github5': '&#xe78c;',
		'fo-wordpress': '&#xe78d;',
		'fo-wordpress2': '&#xe78e;',
		'fo-joomla': '&#xe78f;',
		'fo-blogger': '&#xe790;',
		'fo-blogger2': '&#xe791;',
		'fo-tumblr': '&#xe792;',
		'fo-tumblr2': '&#xe793;',
		'fo-yahoo': '&#xe794;',
		'fo-tux': '&#xe795;',
		'fo-apple': '&#xe796;',
		'fo-finder': '&#xe797;',
		'fo-android': '&#xe798;',
		'fo-windows': '&#xe799;',
		'fo-windows8': '&#xe79a;',
		'fo-soundcloud': '&#xe79b;',
		'fo-soundcloud2': '&#xe79c;',
		'fo-skype': '&#xe79d;',
		'fo-reddit': '&#xe79e;',
		'fo-linkedin': '&#xe79f;',
		'fo-lastfm': '&#xe7a0;',
		'fo-lastfm2': '&#xe7a1;',
		'fo-delicious': '&#xe7a2;',
		'fo-stumbleupon': '&#xe7a3;',
		'fo-stumbleupon2': '&#xe7a4;',
		'fo-stackoverflow': '&#xe7a5;',
		'fo-pinterest': '&#xe7a6;',
		'fo-pinterest2': '&#xe7a7;',
		'fo-xing': '&#xe7a8;',
		'fo-xing2': '&#xe7a9;',
		'fo-flattr': '&#xe7aa;',
		'fo-foursquare': '&#xe7ab;',
		'fo-foursquare2': '&#xe7ac;',
		'fo-paypal': '&#xe7ad;',
		'fo-paypal2': '&#xe7ae;',
		'fo-paypal3': '&#xe7af;',
		'fo-yelp': '&#xe7b0;',
		'fo-libreoffice': '&#xe7b1;',
		'fo-file-pdf': '&#xe7b2;',
		'fo-file-openoffice': '&#xe7b3;',
		'fo-file-word': '&#xe7b4;',
		'fo-file-excel': '&#xe7b5;',
		'fo-file-zip': '&#xe7b6;',
		'fo-file-powerpoint': '&#xe7b7;',
		'fo-file-xml': '&#xe7b8;',
		'fo-file-css': '&#xe7b9;',
		'fo-html5': '&#xe7ba;',
		'fo-html52': '&#xe7bb;',
		'fo-css3': '&#xe7bc;',
		'fo-chrome': '&#xe7bd;',
		'fo-firefox': '&#xe7be;',
		'fo-IE': '&#xe7bf;',
		'fo-opera': '&#xe7c0;',
		'fo-safari': '&#xe7c1;',
		'fo-IcoMoon': '&#xe7c2;',
		'fo-store': '&#xe7c3;',
		'fo-out': '&#xe7c4;',
		'fo-in': '&#xe7c5;',
		'fo-in-alt': '&#xe7c6;',
		'fo-home4': '&#xe7c7;',
		'fo-lightbulb': '&#xe7c8;',
		'fo-anchor': '&#xe7c9;',
		'fo-feather': '&#xe7ca;',
		'fo-expand3': '&#xe7cb;',
		'fo-maximize': '&#xe7cc;',
		'fo-search2': '&#xe7cd;',
		'fo-zoomin2': '&#xe7ce;',
		'fo-zoomout2': '&#xe7cf;',
		'fo-add': '&#xe7d0;',
		'fo-subtract': '&#xe7d1;',
		'fo-exclamation': '&#xe7d2;',
		'fo-question2': '&#xe7d3;',
		'fo-close2': '&#xe7d4;',
		'fo-cmd': '&#xe7d5;',
		'fo-forbid': '&#xe7d6;',
		'fo-book2': '&#xe7d7;',
		'fo-spinner7': '&#xe7d8;',
		'fo-play4': '&#xe7d9;',
		'fo-stop3': '&#xe7da;',
		'fo-pause3': '&#xe7db;',
		'fo-forward4': '&#xe7dc;',
		'fo-rewind': '&#xe7dd;',
		'fo-sound': '&#xe7de;',
		'fo-sound-alt': '&#xe7df;',
		'fo-soundoff': '&#xe7e0;',
		'fo-task': '&#xe7e1;',
		'fo-inbox': '&#xe7e2;',
		'fo-inbox-alt': '&#xe7e3;',
		'fo-envelope2': '&#xe7e4;',
		'fo-compose': '&#xe7e5;',
		'fo-newspaper2': '&#xe7e6;',
		'fo-newspaper-alt': '&#xe7e7;',
		'fo-clipboard': '&#xe7e8;',
		'fo-calendar3': '&#xe7e9;',
		'fo-hyperlink': '&#xe7ea;',
		'fo-trash': '&#xe7eb;',
		'fo-trash-alt': '&#xe7ec;',
		'fo-grid': '&#xe7ed;',
		'fo-grid-alt': '&#xe7ee;',
		'fo-menu3': '&#xe7ef;',
		'fo-list3': '&#xe7f0;',
		'fo-gallery': '&#xe7f1;',
		'fo-calculator': '&#xe7f2;',
		'fo-windows2': '&#xe7f3;',
		'fo-browser': '&#xe7f4;',
		'fo-alarm3': '&#xe7f5;',
		'fo-clock3': '&#xe7f6;',
		'fo-attachment2': '&#xe7f7;',
		'fo-settings2': '&#xe7f8;',
		'fo-portfolio': '&#xe7f9;',
		'fo-user5': '&#xe7fa;',
		'fo-users3': '&#xe7fb;',
		'fo-heart3': '&#xe7fc;',
		'fo-chat': '&#xe7fd;',
		'fo-comments': '&#xe7fe;',
		'fo-screen2': '&#xe7ff;',
		'fo-iphone': '&#xe800;',
		'fo-ipad': '&#xe801;',
		'fo-forkandspoon': '&#xe802;',
		'fo-forkandknife': '&#xe803;',
		'fo-instagram2': '&#xe804;',
		'fo-facebook4': '&#xe805;',
		'fo-delicious2': '&#xe806;',
		'fo-googleplus5': '&#xe807;',
		'fo-dribbble4': '&#xe808;',
		'fo-pin': '&#xe809;',
		'fo-pin-alt': '&#xe80a;',
		'fo-camera3': '&#xe80b;',
		'fo-brightness': '&#xe80c;',
		'fo-brightness-half': '&#xe80d;',
		'fo-moon': '&#xe80e;',
		'fo-cloud2': '&#xe80f;',
		'fo-circle-full': '&#xe810;',
		'fo-circle-half': '&#xe811;',
		'fo-globe2': '&#xe812;',
		'fo-heart4': '&#xe813;',
		'fo-cloud3': '&#xe814;',
		'fo-star4': '&#xe815;',
		'fo-tv2': '&#xe816;',
		'fo-sound2': '&#xe817;',
		'fo-video': '&#xe818;',
		'fo-trash2': '&#xe819;',
		'fo-user6': '&#xe81a;',
		'fo-key3': '&#xe81b;',
		'fo-search3': '&#xe81c;',
		'fo-settings3': '&#xe81d;',
		'fo-camera4': '&#xe81e;',
		'fo-tag2': '&#xe81f;',
		'fo-lock3': '&#xe820;',
		'fo-bulb': '&#xe821;',
		'fo-pen2': '&#xe822;',
		'fo-diamond': '&#xe823;',
		'fo-display': '&#xe824;',
		'fo-location3': '&#xe825;',
		'fo-eye3': '&#xe826;',
		'fo-bubble3': '&#xe827;',
		'fo-stack2': '&#xe828;',
		'fo-cup': '&#xe829;',
		'fo-phone2': '&#xe82a;',
		'fo-news': '&#xe82b;',
		'fo-mail5': '&#xe82c;',
		'fo-like': '&#xe82d;',
		'fo-photo': '&#xe82e;',
		'fo-note': '&#xe82f;',
		'fo-clock4': '&#xe830;',
		'fo-paperplane': '&#xe831;',
		'fo-params': '&#xe832;',
		'fo-banknote': '&#xe833;',
		'fo-data': '&#xe834;',
		'fo-music2': '&#xe835;',
		'fo-megaphone': '&#xe836;',
		'fo-study': '&#xe837;',
		'fo-lab2': '&#xe838;',
		'fo-food2': '&#xe839;',
		'fo-t-shirt': '&#xe83a;',
		'fo-fire2': '&#xe83b;',
		'fo-clip': '&#xe83c;',
		'fo-shop': '&#xe83d;',
		'fo-calendar4': '&#xe83e;',
		'fo-wallet': '&#xe83f;',
		'fo-vynil': '&#xe840;',
		'fo-truck2': '&#xe841;',
		'fo-world': '&#xe842;',
		'fo-phone3': '&#xe843;',
		'fo-mobile3': '&#xe844;',
		'fo-mouse': '&#xe845;',
		'fo-directions': '&#xe846;',
		'fo-mail6': '&#xe847;',
		'fo-paperplane2': '&#xe848;',
		'fo-pencil3': '&#xe849;',
		'fo-feather2': '&#xe84a;',
		'fo-paperclip': '&#xe84b;',
		'fo-drawer4': '&#xe84c;',
		'fo-reply2': '&#xe84d;',
		'fo-reply-all': '&#xe84e;',
		'fo-forward5': '&#xe84f;',
		'fo-user7': '&#xe850;',
		'fo-users4': '&#xe851;',
		'fo-user-add': '&#xe852;',
		'fo-vcard': '&#xe853;',
		'fo-export': '&#xe854;',
		'fo-location4': '&#xe855;',
		'fo-map3': '&#xe856;',
		'fo-compass2': '&#xe857;',
		'fo-location5': '&#xe858;',
		'fo-target2': '&#xe859;',
		'fo-share2': '&#xe85a;',
		'fo-sharable': '&#xe85b;',
		'fo-heart5': '&#xe85c;',
		'fo-heart6': '&#xe85d;',
		'fo-star5': '&#xe85e;',
		'fo-star6': '&#xe85f;',
		'fo-thumbsup': '&#xe860;',
		'fo-thumbsdown': '&#xe861;',
		'fo-chat2': '&#xe862;',
		'fo-comment': '&#xe863;',
		'fo-quote': '&#xe864;',
		'fo-house': '&#xe865;',
		'fo-popup': '&#xe866;',
		'fo-search4': '&#xe867;',
		'fo-flashlight': '&#xe868;',
		'fo-printer': '&#xe869;',
		'fo-bell2': '&#xe86a;',
		'fo-link2': '&#xe86b;',
		'fo-flag2': '&#xe86c;',
		'fo-cog3': '&#xe86d;',
		'fo-tools': '&#xe86e;',
		'fo-trophy2': '&#xe86f;',
		'fo-tag3': '&#xe870;',
		'fo-camera5': '&#xe871;',
		'fo-megaphone2': '&#xe872;',
		'fo-moon2': '&#xe873;',
		'fo-palette': '&#xe874;',
		'fo-leaf2': '&#xe875;',
		'fo-music3': '&#xe876;',
		'fo-music4': '&#xe877;',
		'fo-new': '&#xe878;',
		'fo-graduation': '&#xe879;',
		'fo-book3': '&#xe87a;',
		'fo-newspaper3': '&#xe87b;',
		'fo-bag': '&#xe87c;',
		'fo-airplane2': '&#xe87d;',
		'fo-lifebuoy': '&#xe87e;',
		'fo-eye4': '&#xe87f;',
		'fo-clock5': '&#xe880;',
		'fo-microphone': '&#xe881;',
		'fo-calendar5': '&#xe882;',
		'fo-bolt': '&#xe883;',
		'fo-thunder': '&#xe884;',
		'fo-droplet2': '&#xe885;',
		'fo-cd': '&#xe886;',
		'fo-briefcase2': '&#xe887;',
		'fo-air': '&#xe888;',
		'fo-hourglass': '&#xe889;',
		'fo-gauge': '&#xe88a;',
		'fo-language': '&#xe88b;',
		'fo-network': '&#xe88c;',
		'fo-key4': '&#xe88d;',
		'fo-battery': '&#xe88e;',
		'fo-bucket': '&#xe88f;',
		'fo-magnet2': '&#xe890;',
		'fo-drive': '&#xe891;',
		'fo-cup2': '&#xe892;',
		'fo-rocket2': '&#xe893;',
		'fo-brush': '&#xe894;',
		'fo-suitcase': '&#xe895;',
		'fo-cone': '&#xe896;',
		'fo-earth2': '&#xe897;',
		'fo-keyboard2': '&#xe898;',
		'fo-browser2': '&#xe899;',
		'fo-publish': '&#xe89a;',
		'fo-progress-3': '&#xe89b;',
		'fo-progress-2': '&#xe89c;',
		'fo-brogress-1': '&#xe89d;',
		'fo-progress-0': '&#xe89e;',
		'fo-sun': '&#xe89f;',
		'fo-sun2': '&#xe8a0;',
		'fo-adjust': '&#xe8a1;',
		'fo-code2': '&#xe8a2;',
		'fo-screen3': '&#xe8a3;',
		'fo-infinity': '&#xe8a4;',
		'fo-light-bulb': '&#xe8a5;',
		'fo-creditcard': '&#xe8a6;',
		'fo-database': '&#xe8a7;',
		'fo-voicemail': '&#xe8a8;',
		'fo-clipboard2': '&#xe8a9;',
		'fo-cart4': '&#xe8aa;',
		'fo-box': '&#xe8ab;',
		'fo-ticket2': '&#xe8ac;',
		'fo-rss': '&#xe8ad;',
		'fo-signal': '&#xe8ae;',
		'fo-thermometer': '&#xe8af;',
		'fo-droplets': '&#xe8b0;',
		'fo-uniE8B1': '&#xe8b1;',
		'fo-statistics': '&#xe8b2;',
		'fo-pie2': '&#xe8b3;',
		'fo-bars3': '&#xe8b4;',
		'fo-graph': '&#xe8b5;',
		'fo-lock4': '&#xe8b6;',
		'fo-lock-open': '&#xe8b7;',
		'fo-logout': '&#xe8b8;',
		'fo-login': '&#xe8b9;',
		'fo-checkmark3': '&#xe8ba;',
		'fo-cross': '&#xe8bb;',
		'fo-minus2': '&#xe8bc;',
		'fo-plus2': '&#xe8bd;',
		'fo-cross2': '&#xe8be;',
		'fo-minus3': '&#xe8bf;',
		'fo-plus3': '&#xe8c0;',
		'fo-cross3': '&#xe8c1;',
		'fo-minus4': '&#xe8c2;',
		'fo-plus4': '&#xe8c3;',
		'fo-erase': '&#xe8c4;',
		'fo-blocked2': '&#xe8c5;',
		'fo-info3': '&#xe8c6;',
		'fo-info4': '&#xe8c7;',
		'fo-question3': '&#xe8c8;',
		'fo-help': '&#xe8c9;',
		'fo-warning2': '&#xe8ca;',
		'fo-cycle': '&#xe8cb;',
		'fo-cw': '&#xe8cc;',
		'fo-ccw': '&#xe8cd;',
		'fo-shuffle2': '&#xe8ce;',
		'fo-arrow': '&#xe8cf;',
		'fo-arrow2': '&#xe8d0;',
		'fo-retweet': '&#xe8d1;',
		'fo-loop4': '&#xe8d2;',
		'fo-history2': '&#xe8d3;',
		'fo-back': '&#xe8d4;',
		'fo-switch2': '&#xe8d5;',
		'fo-list4': '&#xe8d6;',
		'fo-add-to-list': '&#xe8d7;',
		'fo-layout': '&#xe8d8;',
		'fo-list5': '&#xe8d9;',
		'fo-text': '&#xe8da;',
		'fo-text2': '&#xe8db;',
		'fo-document': '&#xe8dc;',
		'fo-docs': '&#xe8dd;',
		'fo-landscape': '&#xe8de;',
		'fo-pictures': '&#xe8df;',
		'fo-video2': '&#xe8e0;',
		'fo-music5': '&#xe8e1;',
		'fo-folder2': '&#xe8e2;',
		'fo-archive': '&#xe8e3;',
		'fo-trash3': '&#xe8e4;',
		'fo-upload4': '&#xe8e5;',
		'fo-download4': '&#xe8e6;',
		'fo-disk2': '&#xe8e7;',
		'fo-install': '&#xe8e8;',
		'fo-cloud4': '&#xe8e9;',
		'fo-upload5': '&#xe8ea;',
		'fo-bookmark2': '&#xe8eb;',
		'fo-bookmarks2': '&#xe8ec;',
		'fo-book4': '&#xe8ed;',
		'fo-play5': '&#xe8ee;',
		'fo-pause4': '&#xe8ef;',
		'fo-record': '&#xe8f0;',
		'fo-stop4': '&#xe8f1;',
		'fo-next2': '&#xe8f2;',
		'fo-previous2': '&#xe8f3;',
		'fo-first2': '&#xe8f4;',
		'fo-last2': '&#xe8f5;',
		'fo-resize-enlarge': '&#xe8f6;',
		'fo-resize-shrink': '&#xe8f7;',
		'fo-volume': '&#xe8f8;',
		'fo-sound3': '&#xe8f9;',
		'fo-mute': '&#xe8fa;',
		'fo-flow-cascade': '&#xe8fb;',
		'fo-flow-branch': '&#xe8fc;',
		'fo-flow-tree': '&#xe8fd;',
		'fo-flow-line': '&#xe8fe;',
		'fo-flow-parallel': '&#xe8ff;',
		'fo-arrow-left4': '&#xe900;',
		'fo-arrow-down4': '&#xe901;',
		'fo-arrow-up-upload': '&#xe902;',
		'fo-arrow-right4': '&#xe903;',
		'fo-arrow-left5': '&#xe904;',
		'fo-arrow-down5': '&#xe905;',
		'fo-arrow-up4': '&#xe906;',
		'fo-arrow-right5': '&#xe907;',
		'fo-arrow-left6': '&#xe908;',
		'fo-arrow-down6': '&#xe909;',
		'fo-arrow-up5': '&#xe90a;',
		'fo-arrow-right6': '&#xe90b;',
		'fo-arrow-left7': '&#xe90c;',
		'fo-arrow-down7': '&#xe90d;',
		'fo-arrow-up6': '&#xe90e;',
		'fo-arrow-right7': '&#xe90f;',
		'fo-arrow-left8': '&#xe910;',
		'fo-arrow-down8': '&#xe911;',
		'fo-arrow-up7': '&#xe912;',
		'fo-arrow-right8': '&#xe913;',
		'fo-arrow-left9': '&#xe914;',
		'fo-arrow-down9': '&#xe915;',
		'fo-arrow-up8': '&#xe916;',
		'fo-arrow-right9': '&#xe917;',
		'fo-arrow-left10': '&#xe918;',
		'fo-arrow-down10': '&#xe919;',
		'fo-arrow-up9': '&#xe91a;',
		'fo-uniE91B': '&#xe91b;',
		'fo-arrow-left11': '&#xe91c;',
		'fo-arrow-down11': '&#xe91d;',
		'fo-arrow-up10': '&#xe91e;',
		'fo-arrow-right10': '&#xe91f;',
		'fo-menu4': '&#xe920;',
		'fo-ellipsis': '&#xe921;',
		'fo-dots': '&#xe922;',
		'fo-dot': '&#xe923;',
		'fo-cc': '&#xe924;',
		'fo-cc-by': '&#xe925;',
		'fo-cc-nc': '&#xe926;',
		'fo-cc-nc-eu': '&#xe927;',
		'fo-cc-nc-jp': '&#xe928;',
		'fo-cc-sa': '&#xe929;',
		'fo-cc-nd': '&#xe92a;',
		'fo-cc-pd': '&#xe92b;',
		'fo-cc-zero': '&#xe92c;',
		'fo-cc-share': '&#xe92d;',
		'fo-cc-share2': '&#xe92e;',
		'fo-danielbruce': '&#xe92f;',
		'fo-danielbruce2': '&#xe930;',
		'fo-github6': '&#xe931;',
		'fo-github7': '&#xe932;',
		'fo-flickr5': '&#xe933;',
		'fo-flickr6': '&#xe934;',
		'fo-vimeo4': '&#xe935;',
		'fo-vimeo5': '&#xe936;',
		'fo-twitter4': '&#xe937;',
		'fo-twitter5': '&#xe938;',
		'fo-facebook5': '&#xe939;',
		'fo-facebook6': '&#xe93a;',
		'fo-facebook7': '&#xe93b;',
		'fo-googleplus6': '&#xe93c;',
		'fo-googleplus7': '&#xe93d;',
		'fo-pinterest3': '&#xe93e;',
		'fo-pinterest4': '&#xe93f;',
		'fo-tumblr3': '&#xe940;',
		'fo-tumblr4': '&#xe941;',
		'fo-linkedin2': '&#xe942;',
		'fo-linkedin3': '&#xe943;',
		'fo-dribbble5': '&#xe944;',
		'fo-dribbble6': '&#xe945;',
		'fo-stumbleupon3': '&#xe946;',
		'fo-stumbleupon4': '&#xe947;',
		'fo-lastfm3': '&#xe948;',
		'fo-lastfm4': '&#xe949;',
		'fo-rdio': '&#xe94a;',
		'fo-rdio2': '&#xe94b;',
		'fo-spotify': '&#xe94c;',
		'fo-spotify2': '&#xe94d;',
		'fo-qq': '&#xe94e;',
		'fo-instagram3': '&#xe94f;',
		'fo-dropbox': '&#xe950;',
		'fo-evernote': '&#xe951;',
		'fo-flattr2': '&#xe952;',
		'fo-skype2': '&#xe953;',
		'fo-skype3': '&#xe954;',
		'fo-renren': '&#xe955;',
		'fo-sina-weibo': '&#xe956;',
		'fo-paypal4': '&#xe957;',
		'fo-picasa': '&#xe958;',
		'fo-soundcloud3': '&#xe959;',
		'fo-mixi': '&#xe95a;',
		'fo-behance': '&#xe95b;',
		'fo-circles': '&#xe95c;',
		'fo-vk': '&#xe95d;',
		'fo-smashing': '&#xe95e;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/fo-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
