package com.smates.code.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.xiechanglei.code.utils.json.JsonUtil;

/**
 * CKEditor4.5.0 文件处理
 * 
 * @author lishanyun 2019年8月14日
 */
@Controller
@RequestMapping("/")
public class CKEditorUploadController {

	@RequestMapping(value="uploadFile",method=RequestMethod.POST)
	@ResponseBody
	public void uploadFile(@RequestParam(value = "upload", required = false) MultipartFile file,
			HttpServletRequest request, HttpServletResponse response) throws Exception {

		//写文件
		long fileSize = file.getSize();
		String fileName = file.getOriginalFilename();
		OutputStream os = new FileOutputStream(new File("D:\\HBuilderProject\\CKeditor\\image\\" + fileName));
		os.write(file.getBytes());
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("uploaded", fileSize);
		result.put("fileName", fileName);
		result.put("url", "/CKeditor/image/"+fileName);

		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		out.println(JsonUtil.toJson(result));

	}

}
