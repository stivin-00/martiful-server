/**
 * Generate a declined withdrawal email.
 *
 * @param {any} data - the data for the email
 * @return {string} the declined withdrawal email
 */
export const declinedWithdrawalEmail = (data: any): string => {
  return `
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
    <style type="text/css">
      @media only screen and (min-width: 520px) {
  .u-row {
    width: 500px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-50 {
    width: 250px !important;
  }

  .u-row .u-col-100 {
    width: 500px !important;
  }

}

@media (max-width: 520px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: 100% !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
  .no-stack .u-col {
    min-width: 0 !important;
    display: table-cell !important;
  }

  .no-stack .u-col-50 {
    width: 50% !important;
  }

}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

table, td { color: #000000; } @media (max-width: 480px) { #u_content_image_1 .v-text-align { text-align: left !important; } #u_content_heading_2 .v-color { color: #f26017 !important; } #u_content_heading_3 .v-font-size { font-size: 15px !important; } #u_content_heading_3 .v-text-align { text-align: left !important; } #u_content_heading_7 .v-container-padding-padding { padding: 11px !important; } #u_content_heading_7 .v-font-size { font-size: 14px !important; } }
    </style>
  
  

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
    
  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table id="u_content_image_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:12px;font-family:arial,helvetica,sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="left">
      
      <img align="left" border="0" src="https://res.cloudinary.com/dxjprordi/image/upload/v1704618195/martiful/Frame_1000001167_fqerf4.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 92px;" width="92"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table id="u_content_heading_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h4 class="v-color v-text-align v-font-size" style="margin: 0px; color: #d14e0d; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 16px; font-weight: 400;"><span><span><span><span><span><span><span><span> Transaction <strong>Declined<br /></strong></span></span></span></span></span></span></span></span></h4>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h4 class="v-color v-text-align v-font-size" style="margin: 0px; color: #575554; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 16px; font-weight: 400;"><span><span><span><span>Dear agbakwuru ekele stephen</span></span></span></span></h4>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_heading_3" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h4 class="v-color v-text-align v-font-size" style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-family: arial,helvetica,sans-serif; font-size: 17px; font-weight: 400;"><span><span><span><span><span><span><span><span><span><span><span>your widthdrawal request of ₦${
      data.amount
    } has been declined</span></span></span></span></span></span></span></span></span></span></span></h4>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="428" style="background-color: #f2e7e5;width: 428px;padding: 0px;border-top: 36px solid #ffffff;border-left: 36px solid #ffffff;border-right: 36px solid #ffffff;border-bottom: 36px solid #ffffff;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="background-color: #f2e7e5;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 36px solid #ffffff;border-left: 36px solid #ffffff;border-right: 36px solid #ffffff;border-bottom: 36px solid #ffffff;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table id="u_content_heading_7" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:22px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h4 class="v-color v-text-align v-font-size" style="margin: 0px; color: #ed0b0b; line-height: 140%; text-align: center; word-wrap: break-word; font-family: comic sans ms,sans-serif; font-size: 16px; font-weight: 400;"><span><span><span><span><span><span><span><span>${
      data?.message
    }</span></span></span></span></span></span></span></span></h4>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">Transaction Details</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row no-stack" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="240" style="background-color: #e7e7e7;width: 240px;padding: 0px;border-top: 0px solid transparent;border-left: 10px solid #ffffff;border-right: 0px solid transparent;border-bottom: 10px solid #ffffff;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-50" style="max-width: 320px;min-width: 250px;display: table-cell;vertical-align: top;">
  <div style="background-color: #e7e7e7;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 10px solid #ffffff;border-right: 0px solid transparent;border-bottom: 10px solid #ffffff;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 1px 0px 6px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">Amount:</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 1px 0px 6px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">Bank:</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 1px 0px 6px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">A/C Number</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 1px 0px 6px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">A/C Name</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 1px 0px 6px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">Martiful wallet:</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 1px 0px 6px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">Status:</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 1px 0px 6px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">Date:</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="240" style="background-color: #e7e7e7;width: 240px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 10px solid #ffffff;border-bottom: 10px solid #ffffff;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-50" style="max-width: 320px;min-width: 250px;display: table-cell;vertical-align: top;">
  <div style="background-color: #e7e7e7;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 10px solid #ffffff;border-bottom: 10px solid #ffffff;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 6px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
    <p style="line-height: 140%;">${data.amount}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 6px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
    <p style="line-height: 140%;">${data.bankName}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 6px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
    <p style="line-height: 140%;">${data.accountNumber}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 6px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
    <p style="line-height: 140%;">${data.accountName}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 6px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
    <p style="line-height: 140%;">${data.wallet}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 6px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
    <p style="line-height: 140%;">${data.status}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 6px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
    <p style="line-height: 140%;">${formatDateTime(data.date)}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 13px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 13px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div class="v-color v-text-align v-font-size" style="font-size: 14px; color: #481d74; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="line-height: 140%;">© 2024 Martiful</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>`;
};
//

/**
 * Generate a declined deposit email.
 *
 * @param {any} data - the data for generating the email
 * @return {string} the declined deposit email
 */
export const declinedDepositEmail = (data: any): string => {
  return `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
  <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <title></title>
    
      <style type="text/css">
        @media only screen and (min-width: 520px) {
    .u-row {
      width: 500px !important;
    }
    .u-row .u-col {
      vertical-align: top;
    }
  
    .u-row .u-col-50 {
      width: 250px !important;
    }
  
    .u-row .u-col-100 {
      width: 500px !important;
    }
  
  }
  
  @media (max-width: 520px) {
    .u-row-container {
      max-width: 100% !important;
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    .u-row .u-col {
      min-width: 320px !important;
      max-width: 100% !important;
      display: block !important;
    }
    .u-row {
      width: 100% !important;
    }
    .u-col {
      width: 100% !important;
    }
    .u-col > div {
      margin: 0 auto;
    }
    .no-stack .u-col {
      min-width: 0 !important;
      display: table-cell !important;
    }
  
    .no-stack .u-col-50 {
      width: 50% !important;
    }
  
  }
  body {
    margin: 0;
    padding: 0;
  }
  
  table,
  tr,
  td {
    vertical-align: top;
    border-collapse: collapse;
  }
  
  p {
    margin: 0;
  }
  
  .ie-container table,
  .mso-container table {
    table-layout: fixed;
  }
  
  * {
    line-height: inherit;
  }
  
  a[x-apple-data-detectors='true'] {
    color: inherit !important;
    text-decoration: none !important;
  }
  
  table, td { color: #000000; } @media (max-width: 480px) { #u_content_image_1 .v-text-align { text-align: left !important; } #u_content_heading_2 .v-color { color: #f26017 !important; } #u_content_heading_3 .v-font-size { font-size: 15px !important; } #u_content_heading_3 .v-text-align { text-align: left !important; } #u_content_heading_7 .v-container-padding-padding { padding: 11px !important; } #u_content_heading_7 .v-font-size { font-size: 14px !important; } }
      </style>
    
    
  
  </head>
  
  <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
    <tbody>
    <tr style="vertical-align: top">
      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
      
    
    
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table id="u_content_image_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:12px;font-family:arial,helvetica,sans-serif;" align="left">
          
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="left">
        
        <img align="left" border="0" src="https://res.cloudinary.com/dxjprordi/image/upload/v1704618195/martiful/Frame_1000001167_fqerf4.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 92px;" width="92"/>
        
      </td>
    </tr>
  </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    </div>
    
  
  
    
    
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
    <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table id="u_content_heading_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <!--[if mso]><table width="100%"><tr><td><![endif]-->
      <h4 class="v-color v-text-align v-font-size" style="margin: 0px; color: #d14e0d; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 16px; font-weight: 400;"><span><span><span><span><span><span><span><span> Transaction <strong>Declined<br /></strong></span></span></span></span></span></span></span></span></h4>
    <!--[if mso]></td></tr></table><![endif]-->
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <!--[if mso]><table width="100%"><tr><td><![endif]-->
      <h4 class="v-color v-text-align v-font-size" style="margin: 0px; color: #575554; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 16px; font-weight: 400;"><span><span><span><span>Dear agbakwuru ekele stephen</span></span></span></span></h4>
    <!--[if mso]></td></tr></table><![endif]-->
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_heading_3" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <!--[if mso]><table width="100%"><tr><td><![endif]-->
      <h4 class="v-color v-text-align v-font-size" style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-family: arial,helvetica,sans-serif; font-size: 17px; font-weight: 400;"><span><span><span><span><span><span><span><span><span><span><span>your deposit of ${
        data.coinQty
      }(${data.coin}) for ₦${data.amount} at (₦${
    data.rate
  }/$) has been declined</span></span></span></span></span></span></span></span></span></span></span></h4>
    <!--[if mso]></td></tr></table><![endif]-->
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    </div>
    
  
  
    
    
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="428" style="background-color: #f2e7e5;width: 428px;padding: 0px;border-top: 36px solid #ffffff;border-left: 36px solid #ffffff;border-right: 36px solid #ffffff;border-bottom: 36px solid #ffffff;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
    <div style="background-color: #f2e7e5;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 36px solid #ffffff;border-left: 36px solid #ffffff;border-right: 36px solid #ffffff;border-bottom: 36px solid #ffffff;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table id="u_content_heading_7" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:22px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <!--[if mso]><table width="100%"><tr><td><![endif]-->
      <h4 class="v-color v-text-align v-font-size" style="margin: 0px; color: #ed0b0b; line-height: 140%; text-align: center; word-wrap: break-word; font-family: comic sans ms,sans-serif; font-size: 16px; font-weight: 400;"><span><span><span><span><span><span><span><span>${
        data.message
      }</span></span></span></span></span></span></span></span></h4>
    <!--[if mso]></td></tr></table><![endif]-->
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    </div>
    
  
  
    
    
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
    <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="line-height: 140%;">Transaction Details</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    </div>
    
  
  
    
    
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row no-stack" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="240" style="background-color: #e7e7e7;width: 240px;padding: 0px;border-top: 0px solid transparent;border-left: 10px solid #ffffff;border-right: 0px solid transparent;border-bottom: 10px solid #ffffff;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-50" style="max-width: 320px;min-width: 250px;display: table-cell;vertical-align: top;">
      <div style="background-color: #e7e7e7;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 10px solid #ffffff;border-right: 0px solid transparent;border-bottom: 10px solid #ffffff;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 1px 0px 6px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div class="v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">Amount in Naira:</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 1px 0px 6px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div class="v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">Amount in USD:</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 1px 0px 6px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div class="v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">Coin Name:</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 1px 0px 6px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div class="v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">Coin QTY:</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 1px 0px 6px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div class="v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">Rate ($ - ₦):</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 1px 0px 6px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div class="v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">Status:</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 1px 0px 6px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div class="v-font-size" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="line-height: 140%;">Date:</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="240" style="background-color: #e7e7e7;width: 240px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 10px solid #ffffff;border-bottom: 10px solid #ffffff;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-50" style="max-width: 320px;min-width: 250px;display: table-cell;vertical-align: top;">
    <div style="background-color: #e7e7e7;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 10px solid #ffffff;border-bottom: 10px solid #ffffff;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 6px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
      <p style="line-height: 140%;">${data.amount}</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 6px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
      <p style="line-height: 140%;">${data.amountInUSD}</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 6px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
      <p style="line-height: 140%;">${data.coin}</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 6px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
      <p style="line-height: 140%;">${data.coinQty}</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 6px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
      <p style="line-height: 140%;">${data.rate}</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 6px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
      <p style="line-height: 140%;">${data.status}</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 6px 0px 0px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-color v-text-align v-font-size" style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
      <p style="line-height: 140%;">${formatDateTime(data.date)}</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    </div>
    
  
  
    
    
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 13px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 13px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-color v-text-align v-font-size" style="font-size: 14px; color: #481d74; line-height: 140%; text-align: center; word-wrap: break-word;">
      <p style="line-height: 140%;">© 2024 Martiful</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    </div>
    
  
  
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
  
  </html>`;
};

//

function formatDateTime(dateString: string | number | Date) {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const date = new Date(dateString);
  return date.toLocaleString("en-US", options);
}
