<%@ page language="java" import="b2c.SendMail,com.joeylenmae.util.captcha.*,com.octo.captcha.service.CaptchaServiceException" %> 
<%

	response.setHeader("Cache-Control","no-cache"); //HTTP 1.1
    response.setHeader("Pragma","no-cache"); //HTTP 1.0
    response.setDateHeader ("Expires", 0); //prevents caching at the proxy server

    
  	//submitted values
  	String disableCaptcha = request.getParameter("disableCaptcha")==null?"":request.getParameter("disableCaptcha");
  	
	String successUrl = request.getParameter("successUrl")==null?"":request.getParameter("successUrl");
	String failUrl = request.getParameter("failUrl")==null?"":request.getParameter("failUrl");
	String mailFrom = request.getParameter("mailFrom")==null?"":request.getParameter("mailFrom");
	String mailTo = request.getParameter("mailTo")==null?"":request.getParameter("mailTo");
	String mailTitle = request.getParameter("mailTitle")==null?"":request.getParameter("mailTitle");
	//custom subject
	String mailTitle = request.getParameter("type")==null?"":request.getParameter("type");

	String mailDescription = request.getParameter("mailDescription")==null?"":request.getParameter("mailDescription");
	
	String name = request.getParameter("name")==null?"":request.getParameter("name");
	String email = request.getParameter("email")==null?"":request.getParameter("email");
	String merchantId = request.getParameter("merchantId")==null?"":request.getParameter("merchantId");/*ADD 0504 KVO*/
	String merchantSite = request.getParameter("merchantSite")==null?"":request.getParameter("merchantSite");/*ADD 0504 KVO*/
	String refNo = request.getParameter("refNo")==null?"":request.getParameter("refNo");/*ADD 0504 KVO*/
	String phone = request.getParameter("phone")==null?"":request.getParameter("phone");
	String country = request.getParameter("country")==null?"":request.getParameter("country");
	String company = request.getParameter("company")==null?"":request.getParameter("company");
	String position = request.getParameter("position")==null?"":request.getParameter("position");	
	String vCode = request.getParameter("vCode")==null?"":request.getParameter("vCode");
	
	String website = request.getParameter("website")==null?"":request.getParameter("website");
	String businessNature = request.getParameter("businessNature")==null?"":request.getParameter("businessNature");
	String businessType = request.getParameter("businessType")==null?"":request.getParameter("businessType");
	String others = request.getParameter("others")==null?"":request.getParameter("others");
	String transactionPerMonth = request.getParameter("transactionPerMonth")==null?"":request.getParameter("transactionPerMonth");	
	String howDidYouHearAboutUs = request.getParameter("howDidYouHearAboutUs")==null?"":request.getParameter("howDidYouHearAboutUs");	
	String mm = request.getParameter("mm")==null?"":request.getParameter("mm");
	String dd = request.getParameter("dd")==null?"":request.getParameter("dd");
	String yy = request.getParameter("yy")==null?"":request.getParameter("yy");
	String paymentServicesNeeded = request.getParameter("paymentServicesNeeded")==null?"":request.getParameter("paymentServicesNeeded");
	String operatingYears = request.getParameter("operatingYears")==null?"":request.getParameter("operatingYears");
	String productsAndServices = request.getParameter("productsAndServices")==null?"":request.getParameter("productsAndServices");
	
	String message = request.getParameter("message")==null?"":request.getParameter("message");
	
	String[] paymentOptions = request.getParameterValues("paymentOptions");	
	
	//validations
	boolean success = true;

	String errorStr = "<font color=\"#CC0000\"><strong>Sorry! there were some error(s) encountered:</strong></font><br/><br/>";
   	
	if ( successUrl.equals("") ||  failUrl.equals("") || mailFrom.equals("") || mailTo.equals("") ||  mailTitle.equals("") || mailDescription.equals("") ){
		errorStr += "Invalid Mail Settings<br/>";
		success = false;
	}
	if ( name.equals("") )	{
		errorStr += "Missing Contact Name<br/>";
		success = false;
	}
	if ( email.equals("") )	{
		errorStr += "Missing E-mail<br/>";
		success = false;
	}
	if ( phone.equals("") )	{
		errorStr += "Missing Contact Number<br/>";
		success = false;
	}
	if ( company.equals("") )	{
		errorStr += "Missing Company Name<br/>";
		success = false;
	}
	if(!disableCaptcha.equals("T")){
		if(vCode.equals("")){
			errorStr += "Missing Verification Code<br/>";
			success = false;
		}else{
			try {
				String captchaId = request.getSession().getId();
				if( !CaptchaManager.getInstance().validateResponseForID(captchaId, vCode) ){
					errorStr += "Invalid Verification Code<br/>";
					success = false;
				}
			} catch (CaptchaServiceException e) {
				//should not happen, may be thrown if the id is not valid
				System.out.println(e.toString());
			}
		}
	}
	
	if ( success )
	{	
		String content = "Dear All,<br/><br/>" +						  
						 mailDescription + "<br/><br/>" + 						 
						 "Client Details:<br/><br/>" +						 
						 "Full Name: " + new String(name.getBytes("ISO8859-1"), "UTF-8") + "<br/>" +
						 "Company: " + new String(company.getBytes("ISO8859-1"), "UTF-8") + "<br/>" +
						 "Email Address: " + new String(email.getBytes("ISO8859-1"), "UTF-8") + "<br/>" +
						 "Phone Number: " + new String(phone.getBytes("ISO8859-1"), "UTF-8") + "<br/>" ;
				
		/*ADD 0504 KVO - TECH*/
		if(!"".equals(merchantId)){
			content += "Merchant ID: " + new String(merchantId.getBytes("ISO8859-1"), "UTF-8") + "<br/>" ;
		}
						 
		/*ADD 0504 KVO - PAYMENT CONCERNS*/
		if(!"".equals(refNo)){
			content += "Reference Number: " + new String(refNo.getBytes("ISO8859-1"), "UTF-8") + "<br/>" ;
		}
		
		if(!"".equals(merchantSite)){
			content += "Merchant Website: " + new String(merchantSite.getBytes("ISO8859-1"), "UTF-8") + "<br/>" ;
		}
		
		if(!"".equals(country)){
			content += "Country: " + new String(country.getBytes("ISO8859-1"), "UTF-8") + "<br/>" ;
		}
		
		if(!"".equals(position)){
			content += "Position: " + new String(position.getBytes("ISO8859-1"), "UTF-8") + "<br/>" ;
		}
						 
		if(!"".equals(website)){
			content += "Website: " + new String(website.getBytes("ISO8859-1"), "UTF-8") + "<br/>" ;
		}
						 
		if(!"".equals(businessNature)){
			content += "Business Nature: " + new String(businessNature.getBytes("ISO8859-1"), "UTF-8") + "<br/>" ;
		}
		
		if(!"".equals(businessType)){
			content += "Business Type: " + new String(businessType.getBytes("ISO8859-1"), "UTF-8") + "<br/>" ;
		}
		
		if(!"".equals(others)){
			content += "If Others was chosen in the business nature: " + new String(others.getBytes("ISO8859-1"), "UTF-8") + "<br/>" ;
		}
		
		if(!"".equals(transactionPerMonth)){
			content += "Transaction per month: " + new String(transactionPerMonth.getBytes("ISO8859-1"), "UTF-8") + "<br/>" ;
		}
		
		if(!"".equals(howDidYouHearAboutUs)){
			content += "How did he/she hear about us: " + new String(howDidYouHearAboutUs.getBytes("ISO8859-1"), "UTF-8") + "<br/>" ;
		}
		
		if(!"".equals(mm) && !"".equals(dd) && !"".equals(yy)){
			content += "How soon will you consider to use / launch the payment service?: " ;
			content += new String(mm.getBytes("ISO8859-1"), "UTF-8") + "/" + new String(dd.getBytes("ISO8859-1"), "UTF-8") + "/" + new String(yy.getBytes("ISO8859-1"), "UTF-8") + "<br/>" ;
		}
		
		if(!"".equals(paymentServicesNeeded)){
			content += "What payment service(s) do you need?: " + new String(paymentServicesNeeded.getBytes("ISO8859-1"), "UTF-8") + "<br/>";
		}
		
		if(!"".equals(operatingYears)){
			content += "No. of Years Operating: " + new String(operatingYears.getBytes("ISO8859-1"), "UTF-8") + "<br/>";
		}
		
		if(!"".equals(productsAndServices)){
			content += "No. of Years Operating: " + new String(productsAndServices.getBytes("ISO8859-1"), "UTF-8") + "<br/>";
		}
		
		if(paymentOptions != null){
			content += "Payment Options: <br/>" ;
			for (String payOp : paymentOptions) {
				content += "* " + payOp + "<br/>";
			}
			content += "<br/>";
		}
		
		if(!"".equals(message)){
			content += "Message: " + new String(message.getBytes("ISO8859-1"), "UTF-8") + "<br/>";
		}
		
		String reply = SendMail.sendMail( mailFrom, mailTo, mailTitle, content, true );
		if ( reply== null || (reply!=null && reply.equals("")) ){
			success = false;
			errorStr =reply;
		}		
	}

%>
<html>
<head>
<title>PesoPay Payment Service</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
 src="http://www.paydollar.com/tchi/codpage.js"></script>
<style type="text/css">
<!--
ul
{
list-style-image: url(images/dot2.gif);
list-style-type: circle;
margin: 0 0 1.5em 0 ;
padding:1em ;
}	
-->
</style>
</head>
<body>
<%
	if ( success )
	{
		response.sendRedirect( successUrl );
	}
	else
	{
%>
<table>
  <tr>
    <td height="250" class="font1" valign="top">
    	<%=errorStr%>    	
    	<%
    		if(!failUrl.equals("")){
    	%>
    		<br/>
    		<a href="<%=failUrl %>">Go Back</a>
    	<%
    		}
    	%>
    </td>
  </tr>
</table>
<%
	}

	request.getSession().invalidate();
%>

</body>
</html>
