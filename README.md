#  CKeditor4.5.0  富文本编辑器
- CKeditor4 速查  https://ckeditor.com/docs/ckeditor4/latest/api/index.html
- 下载网站https://ckeditor.com/ckeditor-4/download/，选择full package

# CKeditor4.5.0 查阅
https://www.ibm.com/developerworks/cn/web/1012_moying_ckeditor/index.html

# CKeditor4.5.0 使用步骤
- 1、下载
- 2、解压，选择所需
- 3、引入 ckeditor.js
- 4、配置config.js


# CKeditor4.5.0 注意
## 一、flash 上传预览 实现
- 1、找到ckeditor的目录文件
- 2、打开/ckeditor/ckeditor.js 文件，查找 ：application/x-shockwave-flash，找到之后直接删除
- 3、打开/ckeditor/plugins/flash/dialogs/flash.js 文件，查找application/x-shockwave-flash，找到之后直接删除（这里有两处）
