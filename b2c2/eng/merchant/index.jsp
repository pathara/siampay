<HTML>
<HEAD>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=utf-8">
<TITLE>New Window: Merchant Administration Login</TITLE>
<link rel="stylesheet" href="../../css/form_text.css" type="text/css">
<link rel="stylesheet" href="../../css/merchant_text.css" type="text/css">
<style>html{display:none}</style>
<script>
if(self==top) {
 document.documentElement.style.display="block";
} else {
 top.location = self.location;
}
</script>
<style type="text/css">
<!--
.style1 {color: #F8991C}
-->
</style>
<script type="text/JavaScript">
<!--
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function reloadImg(id) {
   document [id].src = document[id].src + '?' + (new Date()).getTime();
   return false;
}
//-->
</script>
</HEAD>
<script LANGUAGE="javascript">

function formSubmit(){
        MM_findObj("MisLoginForm").action = "misLogin.jsp";
        if (checkDataField())
                MM_findObj("MisLoginForm").submit();
}

function checkDataField(){
        var pass = true;
        return pass;
}

function resetField(){
    MM_findObj("merchantId").value = '';
    MM_findObj("userId").value = '';
    MM_findObj("password").value = '';
    MM_findObj("vCode").value = '';
}
</script>

<BODY BGCOLOR=#FFFFFF leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onLoad="MM_preloadImages('images/bt_gb_02.gif','images/bt_jp_02.gif');resetField()">
<div align="center"> 
  <p>&nbsp;</p>
  <table width="473" border="0" cellpadding="0" cellspacing="0">
    <tr> 
      <td width="17"><img src="../../images/corner_leftupper.jpg" width="17" height="16"></td>
      <td> 
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr> 
            <td><img src="../../images/line_table_upper.jpg" width="439" height="16"></td>
          </tr>
        </table>
      </td>
      <td width="17"><img src="../../images/corner_rightupper.jpg" width="17" height="16"></td>
    </tr>
    <tr>
      <td colspan="3">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="4" background="../../images/line_table_vleft.jpg"><img src="../../images/spacer.gif" width="4" height="1"></td>
            <td> 
              <form name="MisLoginForm" method="post" action="">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr> 
                    <td valign="top" colspan="3"><img src="../../images/spacer.gif" width="10" height="1"></td>
                  </tr>
<tr> 
                    <td colspan="3">&nbsp;</td>
                  </tr>
<tr>
                    <td bgcolor="#FFEBCC" colspan="3">&nbsp;</td>
                  </tr>
                  <tr valign="middle"> 
                    <td bgcolor="#FFEBCC" colspan="3"> 
                      <div align="center"><font face="Arial, Helvetica, sans-serif" size="3" class="e_title">Welcome to SiamPay Payment Services</font></div>
                    </td>
                  </tr>
                  <tr> 
                    <td bgcolor="#FFEBCC" colspan="3">&nbsp;</td>
                  </tr>
                  <tr> 
                    <td colspan="3"> 
                      <div align="center"><br>
                        <font face="Arial, Helvetica, sans-serif" size="2" class="e_text">Please enter your information :</font><br>
                        <br>
                      </div>
                    </td>
                  </tr>
                  <tr valign="middle">
                    <td width="24%">
                      <div align="right"><font face="Arial, Helvetica, sans-serif" size="2" class="e_text">
                        </font> </div>
                    </td>
                    <td width="25%"><font face="Arial, Helvetica, sans-serif" size="2" class="e_text"><b>Merchant Id :</b></font></td>
                    <td width="51%">
                      <div align="left">
                        <input type="hidden" name="masterMerId" value="11">
                        <input type="text" name="merchantId" size="21" maxlength="16" value="">
                      </div>
                    </td>
                  </tr>
                  <tr valign="middle"> 
                    <td width="24%"> 
                      <div align="right"><font face="Arial, Helvetica, sans-serif" size="2" class="e_text"> 
                        </font> </div>
                    </td>
                    <td width="25%"><font face="Arial, Helvetica, sans-serif" size="2" class="e_text"><b>Login Name :</b></font></td>
                    <td width="51%"> 
                      <div align="left"> 
			<input type="hidden" name="masterMerId" value="11">
			<input type="text" name="userId" size="21" maxlength="30" value="">
                      </div>
                    </td>
                  </tr>
                  <tr valign="middle"> 
                    <td width="24%"> 
                      <div align="right"> </div>
                    </td>
                    <td width="25%"><font face="Arial, Helvetica, sans-serif" size="2" class="e_text"><b>Password :</b> </font></td>
                    <td width="51%"> 
                      <div align="left"> 
			<input type="password" name="password" class="text" size="21" value="">
                      </div>
                    </td>
                  </tr>
				  <tr valign="middle"> 
                    <td width="24%"> 
                      <div align="right"> </div>
                    </td>
                    <td width="25%"><font face="Arial, Helvetica, sans-serif" size="2" class="e_text"><b>Verification :</b> </font></td>
                    <td width="51%"> 
                      <div align="left"> 
			<input type='text' name='vCode' size="21" maxlength="5" value="">
                      </div>
                    </td>
                  </tr>
				  <tr valign="middle"> 
                    <td width="24%"> 
                      <div align="right"> </div>
                    </td>
                    <td width="25%">&nbsp;</td>
                    <td width="51%"> 
					  <div style="width:110px;height:23px;padding-left:10px;padding-top:2px;border-style:solid;border-width:1px;border-color:#A0A0A0;float:left">
						<img id="vCodeImg" name="vCodeImg" src="/b2c2/imgservlet/loginVerification" alt="Verification Code">
					  </div><div style="height:23px;padding-top:2px;"><a href="#" onClick="return reloadImg('vCodeImg');"><img  src="../../images/en/hip_reload.gif" border="0"></a></div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">&nbsp;</td>
                  </tr>
                  <tr>
                    <td colspan="3"> 
                      <div align="center"><a href="javascript:window.close();"><img src="../../images/bt_cancel_e.jpg" width="83" height="27" border="0" alt="Cancel"></a><img src="../../images/spacer1.gif" width="5" height="1"><a href="javascript:formSubmit();"><img src="../../images/bt_submit_e.jpg" width="83" height="27" border="0" alt="Submit"></a></div>
                    </td>
                  </tr>
                  <TR>
                    <TD colSpan=3>&nbsp;</TD>
                  </TR>
                  <tr>
                    <td colspan="3">&nbsp;</td>
                  </tr>
                </table>
              </form>
            </td>
            <td width="4" background="../../images/line_table_vright.jpg"><img src="../../images/spacer.gif" width="2" height="1"></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td width="17"><img src="../../images/corner_leftlower.jpg" width="17" height="27"></td>
      <td> 
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr> 
            <td> 
              <div align="left"><img src="../../images/line1_table_lower.jpg" width="225" height="27"></div>
            </td>
            <td> 
              <div align="left"><img src="../../images/en/siampay/title_logo_pd.jpg" width="205" height="27" alt="PayDollar Payment Service"></div>
            </td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </td>
      <td width="17"><img src="../../images/corner_rightlower.jpg" width="17" height="27"></td>
    </tr>
    <tr>
      <td width="17">&nbsp;</td>
      <td>&nbsp;</td>
      <td width="17">&nbsp;</td>
    </tr>
    <tr> 
      <td width="17">&nbsp;</td>
      <td>
        <div align="center"><img src="../../images/copyright_ap.jpg" width="286" height="24" usemap="#Map" border="0"></div>
      </td>
      <td width="17">&nbsp;</td>
    </tr>
  </table>
  <p>&nbsp;</p>
</div>
<map name="Map"> 
  <area shape="rect" coords="91,5,192,18" href="http://www.asiapay.com" target="_blank" alt="Asiapay (HK) Limited" title="Asiapay (HK) Limited">
</map>
</BODY>
</HTML>
