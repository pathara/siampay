<%@ page language="java" import="b2c.SendMail" %>
<%@ page language="java" import="java.util.*, java.net.InetAddress, com.asiapay.util.captcha.*,com.octo.captcha.service.CaptchaServiceException" %> 
<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>
<%

        response.setHeader("Cache-Control","no-cache"); //HTTP 1.1
        response.setHeader("Pragma","no-cache"); //HTTP 1.0
        response.setDateHeader ("Expires", 0); //prevents caching at the proxy server

	String type = request.getParameter("type")==null?"":request.getParameter("type");
	String name = request.getParameter("name")==null?"":request.getParameter("name");
	String mail = request.getParameter("mail")==null?"":request.getParameter("mail");
	String companyname = request.getParameter("companyname")==null?"":request.getParameter("companyname");
	String website = request.getParameter("website")==null?"":request.getParameter("website");
	String phone = request.getParameter("phone")==null?"":request.getParameter("phone");
	String detail = request.getParameter("detail")==null?"":request.getParameter("detail");
	String lang = request.getParameter("lang")==null?"":request.getParameter("lang");
	
	
	
	
	

	boolean success = true;
	
	String typeName = "";

	String reply = "";
	String websiteurl ="";
	
	// Testing 
	//websiteurl = "http://202.64.244.238/";
	
	// Production
	websiteurl = "http://joeylenmae.com/test-ID/";
	
	// Check  capcha code
	
	
	String vCode = request.getParameter("vCode");
	
	if ( vCode ==null || vCode.equals("") || vCode.length()!=5)
    {
    	if (lang.equals("T")){
		websiteurl = websiteurl+"enquiry_fail.html";
		response.sendRedirect(websiteurl);
		} else {
		
		websiteurl = websiteurl+"enquiry_fail.html";
		response.sendRedirect(websiteurl);
		}
	    return;
    }
	
	try {
				String captchaId = request.getSession().getId();
				Boolean isVCodeCorrect = CaptchaManager.getInstance().validateResponseForID(captchaId, vCode);
				if (isVCodeCorrect.booleanValue()) {
					success = true;
				}else{
					success = false;
				}
			} catch (CaptchaServiceException e) {
				//should not happen, may be thrown if the id is not valid
			}
	
	
	
	
	
	
	
	
	
	
	if(name.equals("")){
		success = false;
	}
	if(mail.equals("")){
		success = false;
	}
	if(companyname.equals("")){
		success = false;
	}
	if(website.equals("")){
		success = false;
	}
	if(lang.equals("")){
		success = false;
	}
	

	if(type.equals("")){
		success = false;
	}else if(type.equals("merchant")){
		typeName = "Merchant";
	}else if(type.equals("solution")){
		typeName = "Business Solution";
	}else if(type.equals("reseller")){
		typeName = "Reseller";
	}else if(type.equals("use")){
		typeName = "How to Use";
	}else if(type.equals("price")){
		typeName = "Pricing Plan";
	}else if(type.equals("affilicate")){
		typeName = "Affilicate Program";
	}
		
		
		// Production
		
		// String mailTo = "sales@asiapay.com.sg";
		// String subject = "Enquiry Mail - " + typeName;
		// String weburl = "https://www.paydollar.com/b2c2/";
		// websiteurl = "http://www.paydollar.com.my/";
 		
		//
		
		// Testing
		
		String mailTo = "joeylen.apph@gmail.com";
		String subject = "(Testing) Enquiry Mail - " + typeName;
		String weburl = "http://joeylenmae.com/test-ID/b2c2/form/";
			websiteurl = "http://joeylenmae.com/test-ID/";
		 
		//
		
	if ( success ){
		
		
		
		

		String content = 	"Enquiry Information -" +  typeName + "\n\n" +
					"Type: " + typeName + "\n" +
					"Name: " + new String(name.getBytes("ISO8859-1"), "UTF-8") + "\n" +
					"E-Mail: " + mail + "\n" +
					"Company: " + companyname + "\n" +
					"Website: " + website + "\n" +
					"Contact No.: " + phone + "\n" +
					"Detail: " + new String(detail.getBytes("ISO8859-1"), "UTF-8") + "\n" +
					"IP Address : "+request.getRemoteAddr()+ "\n";
		
		reply = SendMail.sendMail( mail, mailTo, subject, content, false );
		if ( reply== null || (reply!=null && reply.equals("")) )
			success = false;
	
		
		String replycontent = "Thank you very much for your interest in Asiapay/ PayDollar Singapore. We received your email and will get back to you as soon as possible."+"\n"+" Any urgent cases, please contact us at (603) 2161 8188 or check out our website at www.asiapay.com, http://www.paydollar.com.my";
		reply = SendMail.sendMail( mailTo,mail,  subject, replycontent, false );
		
		System.out.println("Enquiry Mail - Sent email successful ");
		
		if (lang.equals("T")){
		websiteurl = websiteurl+"enquiry_success.html";
		response.sendRedirect(websiteurl);
		} else {
		websiteurl = websiteurl+"enquiry_success.html";
		response.sendRedirect(websiteurl);
		}
		
	}
	else
	{  if (lang.equals("T")){
		websiteurl = websiteurl+"enquiry_fail.html";
		response.sendRedirect(websiteurl);
	} else {
		
		websiteurl = websiteurl+"enquiry_fail.html";
		response.sendRedirect(websiteurl);
	}
	}
	
%>