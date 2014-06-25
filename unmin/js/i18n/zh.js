/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.4-development - 2014-06-25
 *
 *//*! Modernizr (Custom Build) | MIT & BSD */
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Chinese dictionary (il8n) ---
 */
( function( wb ) {
"use strict";
/* main index */
wb.i18nDict = {
	"lang-code": "zh",
	"lang-native": "繁體字",
	all: "全部",
	tphp: "頁首",
	load: "下載中…",
	process: "處理...",
	srch: "搜尋",
	"no-match": "找不到合適項目",
	matches: {
		mixin: "找到[MIXIN]項目"
	},
	current: "目前",
	hide: "隱藏",
	err: "錯誤",
	colon: "：",
	hyphen: "-",
	"full-stop": "。",
	"comma-space": "，",
	space: "&#173;",
	start: "開始",
	stop: "停止",
	back: "返回",
	cancel: "取消",
	"min-ago": "一分鐘前",
	"coup-mins": "數分鐘前",
	"mins-ago": {
		mixin: "[MIXIN]分鐘前"
	},
	"hour-ago": "一小時前",
	"hours-ago": {
		mixin: "[MIXIN]數小時前"
	},
	"days-ago": {
		mixin: "[MIXIN]數天前"
	},
	yesterday: "昨天",

	nxt: "下一筆",
	"nxt-r": "下一筆（右箭頭鍵）",
	prv: "上一筆",
	"prv-l": "上一筆（左箭頭鍵）",
	first: "第一筆",
	last: "最後一筆",
	menu: "選單",
	email: "電子郵件",
	"menu-close": "關閉菜單",
	"overlay-close": "關閉疊加",
	"esc-key": "（Esc鍵）",
	show: "顯示",

	/* Tabbed interface */
	"tab-rot": {
		off: "旋轉鍵-停止",
		on: "旋轉鍵-啟動"
	},
	"tab-list": "籤頁列表",
	"tab-pnl-end1": "此籤頁選項結束。",
	"tab-pnl-end2": "返回到籤頁列表",
	"tab-pnl-end3": "或繼續其餘的頁面。",
	/* Multimedia player */
	play: "播放",
	pause: "暫停",
	open: "打開",
	close: "停止",
	volume: "Volume",
	mute: {
		on: "靜音",
		off: "聲音"
	},
	cc: {
		off: "隱藏字幕",
		on: "顯示字幕"
	},
	"cc-err": "載入字幕錯誤",
	adesc: {
		on: "有音訊說明",
		off: "無音訊說明"
	},
	pos: "目前位置：",
	dur: "所有時間：",
	/* Share widget */
	"shr-txt": "分享",
	"shr-pg": "此頁",
	"shr-vid": "該視頻",
	"shr-hnt": "與{s}",
	"shr-disc": "沒有明示或暗示保證代言任何產品或服務。",
	/* Form validation */
	"frm-nosubmit": "本表格不能傳送因為",
	"errs-fnd": "內有錯誤。",
	"err-fnd": "出現錯誤。",
	/* Date picker */
	"date-show": "選擇一個日期：",
	"date-sel": "選擇",
	/* Calendar */
	days: [
		"星期天",
		"星期一",
		"星期二",
		"星期三",
		"星期四",
		"星期五",
		"星期六"
	],
	mnths: [
		"一月",
		"二月",
		"三月",
		"四月",
		"五月",
		"六月",
		"七月",
		"八月",
		"九月",
		"十月",
		"十一月",
		"十二月"
	],
	cal: "日曆",
	currDay: "現在日期",
	"cal-goToLnk": "轉到<span class=\"wb-inv\">月份的一年</span>",
	"cal-goToTtl": "轉到某年的某月份",
	"cal-goToMnth": "月：",
	"cal-goToYr": "年：",
	"cal-goToBtn": "前往",
	prvMnth: "上一月：",
	nxtMnth: "下一月：",
	/* Lightbox */
	"lb-curr": "所有項目%curr%的%total%",
	"lb-xhr-err": "本內容無法載入。",
	"lb-img-err": "圖形無法顯示。",
	/* Charts widget */
	"tbl-txt": "表格",
	"tbl-dtls": "圖表，詳細內容在表格中。",
	/* Session timeout */
	"st-to-msg-bgn": "#min#＃分#sec#秒，您的會話將自動失效。",
	"st-to-msg-end": "選擇“繼續會話”來擴展您的會話。",
	"st-msgbx-ttl": "連線超時警告",
	"st-alrdy-to-msg": "很抱歉，您的連線已經過期。請重新登錄。",
	"st-btn-cont": "繼續會話",
	"st-btn-end": "現在結束會話",
	/* Toggle details */
	"td-toggle": "切換所有",
	"td-open": "展開全部",
	"td-close": "關閉全部",
	"td-ttl-open": "展開所有內容",
	"td-ttl-close": "關閉所有的內容",
	/* Table enhancement */
	sortAsc: ": 使用大小排序",
	sortDesc: "：使用小大排序",
	emptyTbl: "沒有可用的數據",
	infoEntr: "顯示_START_到_END_的_TOTAL_個項目",
	infoEmpty: "顯示0到0的0個項目",
	infoFilt: "（共_MAX_項過濾）",
	info1000: ",",
	lenMenu: "顯示_MENU_項",
	filter: "過濾選項...",
	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "放大",
	"geo-zmout": "缩小",
	"geo-zmwrld": "縮放地圖範圍",
	"geo-zmfeat": "放大到元素",
	"geo-sclln": "地圖比例尺",
	"geo-msepos": "緯度和經度的鼠標光標",
	"geo-ariamap": "地圖物件。下表中描述上面地圖的功能。",
	"geo-ally": "<strong>鍵盤用戶：</strong>當在地圖上鎖定，使用箭頭鍵移動地圖，並用加號和減號鍵放大。若縮小到極限時，箭頭鍵將不會平移。",
	"geo-allyttl": "說明：地圖導航",
	"geo-tgllyr": "該層的顯示切換",
	"geo-hdnlyr": "這層隱藏。",
	"geo-bmapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis-加拿大底圖（英語或法語",
	"geo-sel": "選擇",
	"geo-lblsel": "在地圖上檢查選擇的元素",
	"geo-locurl-geogratis": "http://geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Enter placename&#44; postal code&#44; street address&#44; NTS number...",
	"geo-loc-label": "位置",
	"geo-aoi-north": "North",
	"geo-aoi-east": "East",
	"geo-aoi-south": "South",
	"geo-aoi-west": "West",
	"geo-aoi-instructions": "Draw box on map or enter coordinates below and click the <em>Draw</em> button.",
	"geo-aoi-btndraw": "Draw",
	"geo-aoi-btnclear": "Clear",
	"geo-geoloc-btn": "Zoom to current location",
	"geo-geoloc-fail": "Geolocation failed. Please ensure that location services are enabled.",
	"geo-geoloc-uncapable": "Geolocation not supported by your browser.",
	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "基本HTML版本",
	"wb-enable": "標準版本",
	/* Template */
	"tmpl-signin": "登入"
};

})( wb );

wb.doc.one( "formLanguages.wb", function() {
/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ZH (Chinese, 中文 (Zhōngwén), 汉语, 漢語)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "必选字段",
		remote: "请修正该字段",
		email: "请输入正确格式的电子邮件",
		url: "请输入合法的网址",
		date: "请输入合法的日期",
		dateISO: "请输入合法的日期 (ISO).",
		number: "请输入合法的数字",
		digits: "只能输入整数",
		creditcard: "请输入合法的信用卡号",
		equalTo: "请再次输入相同的值",
		accept: "请输入拥有合法后缀名的字符串",
		maxlength: $.validator.format("请输入一个长度最多是 {0} 的字符串"),
		minlength: $.validator.format("请输入一个长度最少是 {0} 的字符串"),
		rangelength: $.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
		range: $.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
		max: $.validator.format("请输入一个最大为 {0} 的值"),
		min: $.validator.format("请输入一个最小为 {0} 的值")
	});
}(jQuery));

});