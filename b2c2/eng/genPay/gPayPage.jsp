<HTML>
<HEAD>
<TITLE>Siampay Payment Service Generic Payment Page</TITLE>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-1">
<link rel="stylesheet" href="css/form_text.css" type="text/css">
</HEAD>

<script LANGUAGE="javascript">

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function formSubmit(){
        if (checkDataField())
                MM_findObj("gPayPage").submit();
}

function isFloat (s)
{   var i;
    var decimalPointDelimiter = "."
    var seenDecimalPoint = false;


    if ((s == null) || (s.length == 0))
       if (isFloat.arguments.length == 1) return defaultEmptyOK;
       else return (isFloat.arguments[1] == true);

    if (s == decimalPointDelimiter) return false;

    // Search through string's characters one by one
    // until we find a non-numeric character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {
        // Check that current character is number.
        var c = s.charAt(i);

        if ((c == decimalPointDelimiter) && !seenDecimalPoint) seenDecimalPoint = true;
        else if (!((c >= "0") && (c <= "9"))) return false;
    }

    // All characters are numbers.
    return true;

}

function checkDataField(){
        var merchantId = MM_findObj("merchantId").value;
        var orderRef = MM_findObj("orderRef").value;
        var amount = MM_findObj("amount").value;
        var sendName = MM_findObj("sendName").value;
        var sendEmail = MM_findObj("sendEmail").value;
        var remarks = MM_findObj("remarks").value;

        var pass = true;

        if ( merchantId == ''){
                alert("Recipient Merchant Id must be input");
                pass = false;
                return;
        }

        if ( amount == ''){
                alert("Amount must be input");
                pass = false;
                return;
        }
	
	if ( !isFloat(amount) ){
                alert("Incorrect amount");
                pass = false;
                return;
        }

        if ( sendName == ''){
                alert("Your Name must be input");
                pass = false;
                return;
        }

        if ( sendEmail == ''){
                alert("Your Email must be input");
                pass = false;
                return;
        }

        if ( sendEmail.indexOf('@') < 0 ){
                alert("Your Email is incorrect");
                pass = false;
                return;
        }

        if ( remarks.length > 100 ){
                alert("Remarks must less than 100 characters");
                pass = false;
                return;
        }

        return pass;
}

</script>
<BODY BGCOLOR=#FFFFFF leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<div align="center"> 
  <p class="e_text2">&nbsp;</p>
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
            <td width="4" background="../../images/line_table_vleft.jpg"><img src="../../images/spacer1.gif" width="4" height="1"></td>
            <td valign="top" width="439"> 
              <form name="gPayPage" method="post" action="gPayPage2.jsp">
                <table width="100%" border="0" cellspacing="0" cellpadding="1">
                  <tr> 
                    <td valign="top" colspan="3"> 
                      <div align="center"><img src="../../images/step1_sohogenpay.gif" width="450" height="76" alt="Asiapay payment service"><br>
                        <br>
                      </div>
                    </td>
                  </tr>
                  <tr> 
                    <td colspan="3" valign="top"> 
                      <table width="100%" border="0" cellspacing="0" cellpadding="1">
                        <tr valign="middle"> 
                          <td width="30">&nbsp;</td>
                          <td class="e_text" valign="top" colspan="2"><i><font face="Arial, Helvetica, sans-serif" size="2" color="#666666">Fields 
                            with * are required and please fill out the form in 
                            English.</font></i></td>
                        </tr>
                        <tr valign="middle"> 
                          <td width="30"> 
                            <div align="right"><font color="#333333" size="2" face="Arial, Helvetica, sans-serif"><img src="../../images/blank.gif" width="30" height="1"></font></div>
                          </td>
                          <td class="e_text" valign="top" width="180"><font face="Arial, Helvetica, sans-serif" size="2" color="#333333"><b>Recipient Merchant ID * :<br>
                            </b>
<font size="1"><i>(Please consult your merchant <br> for the Merchant ID)</i></font></font>
</td>
                          <td valign="top" width="200"> 
                            <input type="hidden" name="masterMerId" value="11">
<input type="text" name="merchantId" value="">
</td>
                        </tr>
                        <tr valign="middle"> 
                          <td width="30"> 
                            <div align="right"><font color="#333333"><font size="2"><font size="2"><font face="Arial, Helvetica, sans-serif"></font></font></font></font></div>
                          </td>
                          <td class="e_text" width="180" valign="top"><font face="Arial, Helvetica, sans-serif" size="2" color="#333333"><b>Merchant 
                            Reference No. :</b></font></td>
                          <td class="e_text" valign="top" width="200"> 
<input type="text" name="orderRef" value="" maxlength="25">
</td>
                        </tr>
                        <tr valign="middle"> 
                          <td width="30"> 
                            <div align="right"><font color="#333333"><font size="2"><font size="2"><font face="Arial, Helvetica, sans-serif"></font></font></font></font></div>
                          </td>
                          <td class="e_text" width="180" valign="top"><font size="2" face="Arial, Helvetica, sans-serif" color="#333333"><b>Amount 
                            * :</b></font></td>
                          <td valign="top" width="200">
<select name="cur"><option value="344" selected>HKD</option><option value="840">USD</option><option value="702">SGD</option><option value="156">RMB</option><option value="392">JPY</option><option value="901">TWD</option><option value="036">AUD</option><option value="978">EUR</option><option value="826">GBP</option><option value="124">CAD</option><option value="446">MOP</option><option value="608">PHP</option><option value="764">THB</option><option value="458">MYR</option><option value="360">IDR</option><option value="410">KRW</option><option value="096">BND</option><option value="554">NZD</option><option value="682">SAR</option><option value="784">AED</option><option value="986">BRL</option><option value="356">INR</option><option value="949">TRY</option><option value="710">ZAR</option><option value="704">VND</option><option value="208">DKK</option><option value="376">ILS</option><option value="578">NOK</option><option value="643">RUB</option><option value="752">SEK</option><option value="756">CHF</option><option value="032">ARS</option><option value="152">CLP</option><option value="170">COP</option><option value="203">CZK</option><option value="818">EGP</option><option value="348">HUF</option><option value="398">KZT</option><option value="422">LBP</option><option value="484">MXN</option><option value="566">NGN</option><option value="586">PKR</option><option value="604">PEN</option><option value="985">PLN</option><option value="634">QAR</option><option value="946">RON</option><option value="980">UAH</option><option value="937">VEF</option><option value="144">LKR</option><option value="414">KWD</option></select><input type="text" name="amount" value="" size="10" maxlength="15">
</td>
                        </tr>
                        <tr valign="middle"> 
                          <td height="24" width="30"> 
                            <div align="right"><font color="#333333"><font size="2"><font size="2"><font face="Arial, Helvetica, sans-serif"></font></font></font></font></div>
                          </td>
                          <td class="e_text" width="180" valign="top"><font face="Arial, Helvetica, sans-serif" size="2" color="#333333"><b>Your 
                            Name * :</b></font></td>
                          <td class="e_text" valign="middle" width="200"> 
                            <input type="text" name="sendName" maxlength="35">
                          </td>
                        </tr>
                        <tr valign="middle"> 
                          <td height="24" width="30">&nbsp;</td>
                          <td class="e_text" width="180" valign="top"><b><font face="Arial, Helvetica, sans-serif" size="2" color="#333333">Your 
                            Email * :</font></b></td>
                          <td class="e_text" valign="middle" width="200"> 
                            <input type="text" name="sendEmail" maxlength="35">
                          </td>
                        </tr>
                        <tr valign="middle"> 
                          <td width="30"> 
                            <div align="right"><font color="#333333"><font size="2"><font size="2"><font face="Arial, Helvetica, sans-serif"></font></font></font></font></div>
                          </td>
                          <td class="e_text" width="180" valign="top"><b><font face="Arial, Helvetica, sans-serif" size="2" color="#333333">Remarks 
                            :<br>
                            <font size="1"><i>(Max. 100 characters)</i></font> 
                            </font></b></td>
                          <td class="e_text" valign="middle" width="200"> 
                            <textarea name="remarks" cols="17" rows="5"></textarea>
                          </td>
                        </tr>
                        <tr> 
                          <td colspan="3">&nbsp;</td>
                        </tr>
                        <tr> 
                          <td colspan="3">&nbsp;</td>
                        </tr>
                      </table>
                    </td>
                  </tr>


		  <input type="hidden" name="pMethod" value="ccard" >

                  <tr> 
                    <td colspan="3"> 
                      <div align="right"><a href="http://www.paydollar.com/eng/pdsoho_genpaystart_e.asp"><img src="../../images/bt_cancel_e.jpg" width="83" height="27" border="0" alt="Confirm"></a><img src="../../images/spacer1.gif" width="5" height="1"><a href="javascript:formSubmit();"><img src="../../images/bt_submit_e.jpg" width="83" height="27" border="0" alt="Submit" ></a><img src="../../images/spacer1.gif" width="35" height="1"></div>
                    </td>
                  </tr>
                </table>
              </form>
            </td>
            <td width="4" background="../../images/line_table_vright.jpg"><img src="../../images/spacer1.gif" width="2" height="1"></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr> 
      <td width="17"><img src="../../images/corner_leftlower.jpg" width="17" height="27"></td>
      <td> 
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr> 
            <td><img src="../../images/line2_table_lower.jpg" width="9" height="27"></td>
			
			<td><img src="../../images/logo_siampaypaybooth.jpg" width="136" height="27" alt="Asiapay payment service"></td>
			<td> 
              <div align="right"><img src="../../images/line1_table_lower.jpg" width="18" height="27"></div>
            </td>
            <td> 
              <div align="left"><img src="../../images/copyright_ap.gif" width="265" height="27" alt="Asiapay payment service"></div>
            </td>
            <td><img src="../../images/line2_table_lower.jpg" width="9" height="27"></td>
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
  </table>
  
</div>
</BODY>
</HTML>
