/**
 * @license Copyright (c) 2003-2019,Version4.5.0 CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	
	config.language = 'zh-cn';//界面语言
	
	config.uiColor = '#F7B42C';//toolbar 的背景色
	
	config.height = 700;//初始化 宽高
//	config.width=1000;
//	config.resize_enabled = true;//false取消 “拖拽以改变尺寸”功能
//  config.resize_maxHeight = 2000;
//  config.resize_minHeight = 2000;

	config.toolbarCanCollapse = true;//toolbar 收起 展开
	config.toolbarStartupExpanded = true;
	
	config.skin = 'moono-lisa';//编辑器样式 skin下载地址：https://ckeditor.com/cke4/addons/skins/all
	
	config.toolbarLocation = 'top';//工具栏的位置 可选：bottom
	
    config.keystrokes = [//设置快捷键
       [ CKEDITOR.CTRL + 83 /*ASCII十进制数：S*/, 'save' ]
    ];	
    config.blockedKeystrokes = [//设置快捷键 可能与浏览器快捷键冲突
        CKEDITOR.CTRL + 83 /*ASCII十进制数：S*/
    ];
    
    config.contentsCss = './ckeditor/contents.css';//所需要添加的CSS文件 在此添加 可使用相对路径和网站的绝对路径
    
    /* 与文件相关的设置 filebrowserXXX*/
    config.filebrowserImageUploadUrl = 'http://192.168.1.108:20219/uploadImage';//图片上传路径。图像filebrowser默认无上传tab
//  config.image_previewText = '外联图片请直接输入图片地址。';//这里的内容自己可以定义。同样可以设置""空
//	config.image_previewText = CKEDITOR.tools.repeat( '图片预览 <br/>外联图片请直接输入图片地址。', 1 );//图像filebrowser的图片预览部分
//	config.removeDialogTabs = 'image:advanced;image:Link';

	config.format_div = { element: 'div', attributes: { 'class': 'normalDiv' } };//格式化
	
	



    
//  // 工具栏（基础'Basic'、全能'Full'、自定义）plugins/toolbar/plugin.js
//  config.toolbar = 'Basic';
//  config.toolbar = 'Full';
//  //这将配合：
//  config.toolbar_Full = [
//     ['Source','-','Save','NewPage','Preview','-','Templates'],
//     ['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'],
//     ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
//     ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],
//     '/',
//     ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
//      ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
//      ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
//      ['Link','Unlink','Anchor'],
//     ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
//     '/',
//      ['Styles','Format','Font','FontSize'],
//      ['TextColor','BGColor']
//  ];
    
};


