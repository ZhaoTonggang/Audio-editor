(function ( w, d, PKAE ) {
'use strict';

setTimeout(function () {

	PKAudioEditor._deps.Wlc = function () {
			var body_str = '';
			var body_str2 = '';

			if (PKAE.isMobile) {
				change -= 15;
				body_str = '温馨提示：<br/>Please make sure your device is not in silent mode. You might need to physically flip the silent switch. '+
				'<img src="phone-switch.jpg" style="max-width:224px;max-height:126px;width:40%;margin: 10px auto; display: block;"/>'+
				'<br/><br/>';
			}
			else {
				body_str = '温馨提示：<br/>本工具大部分快捷键使用 Shift 进行组合。（例如：Shift+Z 撤销, Shift+C 复制, Shift+X 剪切...）<br/><br/>';
				// body_str2 = 'Check out the codebase on <a href="https://github.com/pkalogiros/audiomass" target="_blank">Github</a><br/><br/>'; // checkout the code on github
			}

			// Welcome to AudioMass,
			var md = new PKSimpleModal({
				title: '<font style="font-size:15px">欢迎使用音频编辑器</font>',
				ondestroy: function( q ) {
					PKAE.ui.InteractionHandler.on = false;
					PKAE.ui.KeyHandler.removeCallback ('modalTemp');
			},
			body:'<div style="overflow:auto;-webkit-overflow-scrolling:touch;max-width:580px;width:calc(100vw - 40px);max-height:calc(100vh - 340px);min-height:110px;font-size:13px; color:#95c6c6;padding-top:7px;">'+
				'这是一款免费且功能强大的在线音频/波形编辑器，直接在浏览器里打开即可使用，无需下载软件，无需安装插件！'+
				'<br/><br/><br/>'+
				body_str+
				'您可以打开并编辑浏览器支持的任何类型的音频文件，并进行淡入、剪切、修剪、改变音量等常用操作！'+
				'还有大量的音频效果可供调节！<br/><br/>'+
				body_str2+
				'</div>',
			setup:function( q ) {
					PKAE.ui.InteractionHandler.checkAndSet ('modal');
					PKAE.ui.KeyHandler.addCallback ('modalTemp', function ( e ) {
						q.Destroy ();
					}, [27]);

					// ------
					var scroll = q.el_body.getElementsByTagName('div')[0];
					scroll.addEventListener ('touchstart', function(e){
						e.stopPropagation ();
					}, false);
					scroll.addEventListener ('touchmove', function(e){
						e.stopPropagation ();
					}, false);

					// ------
				}
			});
			md.Show ();
			document.getElementsByClassName('pk_modal_cancel')[0].innerHTML = '&nbsp; &nbsp; &nbsp; 确定 &nbsp; &nbsp; &nbsp;';
	};

	var change = 96;
	var exists = w.localStorage && w.localStorage.getItem ('k');

	if (!exists) {
		change = 0;
		w.localStorage && w.localStorage.setItem ('k', 1);
	}

	if ( ((Math.random () * 100) >> 0) < change) return ;
	PKAudioEditor._deps.Wlc ();

}, 320);

})( window, document, PKAudioEditor );