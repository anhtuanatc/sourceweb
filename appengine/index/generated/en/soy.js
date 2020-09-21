// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Index.soy.
 */

goog.provide('Index.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Index.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="title">CodeCovid</span><span id="Index_clear">Delete all your solutions?</span></div>';
};
if (goog.DEBUG) {
  Index.soy.messages.soyTemplateName = 'Index.soy.messages';
}


Index.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Index.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogDone778" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;"><b>C\u1ED1t truy\u1EC7n</b></div><div id="dialogLinesText" style="font-size: large; margin: 1em;">Xin ch\u00E0o c\u00E1c b\u1EA1n h\u1ECDc sinh, ch\u1EAFc h\u1EB3n c\u00E1c b\u1EA1n \u0111\u00E3 tr\u1EA3i qua m\u1ED9t k\u1EF3 ngh\u1EC9 t\u1EBFt r\u1EA5t d\u00E0i ph\u1EA3i kh\u00F4ng n\u00E0o, c\u00E1c b\u1EA1n c\u00F3 bi\u1EBFt l\u00FD do t\u1EA1i sao ch\u00FAng ta ph\u1EA3i ngh\u1EC9 h\u1ECDc \u1EDF nh\u00E0 v\u00E0 h\u1EA1n ch\u1EBF ra ngo\u00E0i kh\u00F4ng nh\u1EC9?!?...... <br> Ch\u00EDnh x\u00E1c, m\u00ECnh tin c\u00E2u tr\u1EA3 l\u1EDDi c\u1EE7a b\u1EA1n l\u00FAc n\u00E0y l\u00E0 \u201Cdo d\u1ECBch b\u1EC7nh Covid 19\u201D, v\u1EADy c\u00E1c b\u1EA1n \u0111\u00E3 trang b\u1ECB cho m\u00ECnh nh\u1EEFng ki\u1EBFn th\u1EE9c v\u1EC1 d\u1ECBch b\u1EC7nh Covid 19, c\u0169ng nh\u01B0 c\u00E1ch ph\u00F2ng tr\u00E1nh n\u00F3 ch\u01B0a n\u00E0o? V\u1EADy h\u00E3y c\u00F9ng nhau tham gia tr\u00F2 ch\u01A1i n\u00E0y \u0111\u1EC3 b\u1ED5 sung nh\u1EEFng ki\u1EBFn th\u1EE9c v\u00E0 k\u1EF9 n\u0103ng c\u1EF1c k\u1EF3 h\u1EEFu \u00EDch nh\u00E9!!!! <br> Tr\u01B0\u1EDBc ti\u00EAn, h\u00E3y c\u00F9ng \u0111i\u1EC3m qua nh\u1EEFng ki\u1EBFn th\u1EE9c c\u01A1 b\u1EA3n v\u1EC1 lo\u1EA1i virus n\u00E0y. V\u00E0o ng\u00E0y 31/12/019, m\u1ED9t ch\u1EE7ng coronavirus m\u1EDBi \u0111\u01B0\u1EE3c k\u00FD hi\u1EC7u l\u00E0 2019-nCoV, \u0111\u00E3 \u0111\u01B0\u1EE3c ph\u00E1t hi\u1EC7n t\u1EA1i th\u00E0nh ph\u1ED1 V\u0169 H\u00E1n c\u1EE7a Trung Qu\u1ED1c v\u00E0 \u0111\u00E3 g\u00E2y ra m\u1ED9t d\u1ECBch b\u1EC7nh nghi\u00EAm tr\u1ECDng, sau \u0111\u00F3 lan sang c\u00E1c n\u01A1i kh\u00E1c tr\u00EAn th\u1EBF gi\u1EDBi.<br> N\u00F3 g\u00E2y ra b\u1EC7nh nhi\u1EC5m tr\u00F9ng \u0111\u01B0\u1EDDng h\u00F4 h\u1EA5p \u1EDF ng\u01B0\u1EDDi v\u00E0 n\u1EBFu n\u1EB7ng c\u00F3 th\u1EC3 g\u00E2y t\u1EED vong, virus n\u00E0y \u0111\u01B0\u1EE3c WHO (T\u1ED5 ch\u1EE9c Y t\u1EBF Th\u1EBF gi\u1EDBi) \u0111\u1EB7t t\u00EAn l\u00E0 SARS-CoV-2, ch\u00FAng \u0111\u01B0\u1EE3c cho l\u00E0 c\u00F3 ngu\u1ED3n g\u1ED1c t\u1EEB c\u00E1c \u0111\u1ED9ng v\u1EADt hoang d\u00E3 nh\u01B0 r\u1EAFn v\u00E0 d\u01A1i, \u0111\u01B0\u1EE3c l\u00E2y lan do vi\u1EC7c bu\u00F4n b\u00E1n t\u1EA1i ch\u1EE3 b\u00E1n bu\u00F4n h\u1EA3i s\u1EA3n Hoa Nam V\u0169 H\u00E1n. <br>T\u00EDnh \u0111\u1EBFn gi\u1EEFa th\u00E1ng 04/2020, t\u1ED5ng s\u1ED1 ca nhi\u1EC5m tr\u00EAn Th\u1EBF gi\u1EDBi l\u00E0 2.084.022 tri\u1EC7u ng\u01B0\u1EDDi v\u00E0 \u0111\u00E3 c\u00F3 134.669 ng\u01B0\u1EDDi \u0111\u00E3 t\u1EED vong.<br>V\u1EADy c\u00E1c b\u1EA1n c\u00F3 \u0111o\u00E1n \u0111\u01B0\u1EE3c nhi\u1EC7m v\u1EE5 c\u1EE7a m\u00ECnh trong tr\u00F2 ch\u01A1i n\u00E0y ch\u01B0a n\u00E0o? \u0110\u00F3 l\u00E0 ngo\u00E0i ghi nh\u1EDB nh\u1EEFng ki\u1EBFn th\u1EE9c h\u1EEFu \u00EDch \u0111\u1EC3 b\u1EA3o v\u1EC7 s\u1EE9c kh\u1ECFe b\u1EA3n th\u00E2n th\u00EC b\u1EA1n s\u1EBD gi\u00FAp m\u1ED9t b\u00E1c s\u0129 t\u00EAn l\u00E0 Dr. Tan, Dr. Tan l\u00E0 m\u1ED9t b\u00E1c s\u0129 chuy\u00EAn nghi\u00EAn c\u1EE9u v\u1EC1 vaccine v\u00E0 c\u00E1ch ph\u00F2ng ch\u1ED1ng b\u1EC7nh do lo\u1EA1i virus corona g\u00E2y ra, \u00F4ng \u1EA5y s\u1EBD l\u00EAn \u0111\u01B0\u1EDDng bay \u0111\u1EBFn Th\u00E0nh ph\u1ED1 V\u0169 H\u00E1n \u0111\u1EC3 c\u00F9ng h\u1EE3p t\u00E1c nghi\u00EAn c\u1EE9u t\u00ECm ra vaccine \u0111\u1EC3 ti\u00EAu di\u1EC7t virus corona, gi\u1EA3i c\u1EE9u Th\u1EBF gi\u1EDBi kh\u1ECFi c\u0103n d\u1ECBch b\u1EC7nh nguy hi\u1EC3m n\u00E0y.<br>L\u01B0u \u00FD: n\u1ED9i dung game d\u1EF1a tr\u00EAn c\u00E2u chuy\u1EC7n c\u00F3 th\u1EADt v\u1EC1 d\u1ECBch b\u1EC7nh Covid 19 \u1EDF Th\u00E0nh ph\u1ED1 V\u0169 H\u00E1n, b\u1ED1i c\u1EA3nh v\u00E0 nh\u00E2n v\u1EADt trong c\u00E2u chuy\u1EC7n l\u00E0 h\u01B0 c\u1EA5u, kh\u00F4ng c\u00F3 th\u1EADt. M\u1EE5c \u0111\u00EDch c\u00E2u chuy\u1EC7n nh\u1EB1m truy\u1EC1n t\u1EA3i \u0111\u1EBFn c\u00E1c b\u1EA1n v\u00E0 ng\u01B0\u1EDDi th\u00E2n nh\u1EEFng ki\u1EBFn th\u1EE9c v\u1EC1 d\u1ECBch b\u1EC7nh v\u00E0 c\u00E1ch ph\u00F2ng tr\u00E1nh, b\u1EA3o v\u1EC7 s\u1EE9c kh\u1ECFe.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="dialogHelpReset123" class="dialogHiddenContent"><table><tr><td>Ch\u01B0\u01A1ng tr\u00ECnh c\u1EE7a b\u1EA1n ch\u01B0a gi\u1EA3i m\u00EA cung. Nh\u1EA5n \'Tr\u1EDF l\u1EA1i\' v\u00E0 th\u1EED l\u1EA1i.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div><div id="header"><img id="banner" src="index/title-beta.png" height="70" width="195" alt="Blockly Games"><div id="subtitle">Tr\u00F2 ch\u01A1i cho ng\u01B0\u1EDDi l\u1EADp tr\u00ECnh c\u1EE7a ng\u00E0y mai. &nbsp;' + ((opt_ijData.html) ? '<a href="about.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="about.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Xem c\u1ED1t truy\u1EC7n</a></div></div><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-150,-60)"><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="none" x="150" y="60">' + ((opt_ijData.rtl) ? 'transform="translate(100) scale(-1, 1)"' : '') + '/></svg>' + Index.soy.appLink({app: 'maze', x: 30, y: 50, contentText: 'Play'}, null, opt_ijData) + Index.soy.appLink({app: 'puzzle', x: 50, y: 50, contentText: 'Scratch Vi\u1EC7t Nam'}, null, opt_ijData) + Index.soy.appLink({app: 'bird', x: 70, y: 50, contentText: 'CodeTown'}, null, opt_ijData) + '</g></svg><select style="visibility: hidden" id="languageMenu"></select><p id="clearDataPara" style="visibility: hidden">B\u1EA1n mu\u1ED1n ch\u01A1i l\u1EA1i t\u1EEB \u0111\u1EA7u?<button class="secondary" id="clearData">Clear data</span></button></p>';
};
if (goog.DEBUG) {
  Index.soy.start.soyTemplateName = 'Index.soy.start';
}


Index.soy.appLink = function(opt_data, opt_ignored, opt_ijData) {
  return '<svg height="150" width="300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' + ((opt_ijData.rtl) ? 'x="' + soy.$$escapeHtml(100 - opt_data.x) + '%"' : 'x="' + soy.$$escapeHtml(opt_data.x) + '%"') + 'y="' + soy.$$escapeHtml(opt_data.y) + '%"><path d="M 111.11,98.89 A 55 55 0 1 1 188.89,98.89" class="gaugeBack" id="back-' + soy.$$escapeHtml(opt_data.app) + '" /><g class="icon" id="icon-' + soy.$$escapeHtml(opt_data.app) + '"><circle cx="150" cy="60" r="50" class="iconBack" /><image xlink:href="index/' + soy.$$escapeHtml(opt_data.app) + '.png" height="100" width="100" x="100" y="10" />' + ((opt_data.app == 'puzzle') ? '<a href="http://codeztory.com/">' : (opt_data.app == 'bird') ? '<a href="http://codetown.io/">' : '<a id="link-' + soy.$$escapeHtml(opt_data.app) + '" xlink:href="' + soy.$$escapeHtml(opt_data.app) + '.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '<circle cx="150" cy="60" r="50" class="iconBorder" /><path class="gaugeFront" id="gauge-' + soy.$$escapeHtml(opt_data.app) + '" /><text x="150" y="135">' + soy.$$escapeHtml(opt_data.contentText) + '</text></a></g></svg>';
};
if (goog.DEBUG) {
  Index.soy.appLink.soyTemplateName = 'Index.soy.appLink';
}