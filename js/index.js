$(function(){
	
	var editor = CKEDITOR.replace("editor1",{
		customConfig:'./config.js',//CKeditor的配置文件 若不想配置 留空即可。不配置默认自带的config.js
		on:{//监听方式1
			instanceReady:function(evt){
				
				console.log("instanceReady");
			},
			save:function(evt){
				console.log("ToolBar:Save---表单提交之前");
				
				console.log("校验方式1（1、2选其一）");
				var data;
				if(editor.document==undefined){//源码样式
					data = evt.editor.getData();
				}else{
					data = editor.document.getBody().getText();
				}
				//空字符串 空格校验
				if(data==""||data.replace(/(^\s*)|(\s*$)/g,"")==""){
					alert("不可为空");
					return false;//阻止表单提交
				}
					
				evt.editor.updateElement(); //非常重要的一句代码
				return true;
				 
			},
			contentPreview:function(evt){
				debugger;
			},
		},
	});


	editor.on('fileUploadRequest',function(evt){
		console.log("filebrowser---文件上传到服务器前");
		
		var fileName =  evt.data.fileLoader.fileName;
		var lastIndex=fileName.lastIndexOf('.');
		if(lastIndex==-1){
			alert("文本件类型不正确,无法上传");
			return false;
		}
//		var fileSuffix=fileName.substr(fileName.lastIndexOf('.'));
//		if(!/.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(fileSuffix)){
//			alert("文本件类型不正确，请上传.jpg格式");
//			return false;			
//		}
		return true;
		
	});
	editor.on('fileUploadResponse',function(evt){
		debugger;
		console.log("filebrowser---文件上传的响应");
		return true;
		
	});

	editor.on('uploaded',function(evt){
		debugger;
		console.log("filebrowser---文件上传的响应");
		return true;
		
	});


	editor.on('required',function(evt){//监听方式2
		console.log("ToolBar:Save---表单提交之前（<textarea> which has a required attribute）");
		console.log("required 在 save 之后");
		
		console.log("校验方式2（1、2选其一）");
		var data;
		if(editor.document==undefined){//源码样式
			data = evt.editor.getData();
		}else{
			data = editor.document.getBody().getText();
		}
		//空字符串 空格校验
		if(data==""||data.replace(/(^\s*)|(\s*$)/g,"")==""){
			alert("不可为空");
			return false;//阻止表单提交
		}return false;//阻止表单提交
		evt.editor.updateElement(); //非常重要的一句代码
		
		return true;
	});
 
 
});
	
	

