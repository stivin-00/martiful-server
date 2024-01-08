import nodemailer from "nodemailer";

export const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ekeleagbakwuru9@gmail.com",
    pass: "asjyyxyxjpjsqdei",
  },
});

export const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "ycwfpq6tlbenco5y@ethereal.email",
    pass: "aZeh1cdCzmbNua1R64",
  },
});

export const welcomeEmailTemplate = () => {
  `<html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <!--<![endif]-->
      <title></title>
  
      <style type="text/css">
        @media only screen and (min-width: 620px) {
          .u-row {
            width: 600px !important;
          }
          .u-row .u-col {
            vertical-align: top;
          }
  
          .u-row .u-col-100 {
            width: 600px !important;
          }
        }
  
        @media (max-width: 620px) {
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
  
        a[x-apple-data-detectors="true"] {
          color: inherit !important;
          text-decoration: none !important;
        }
  
        table,
        td {
          color: #000000;
        }
        @media (max-width: 480px) {
          #u_content_image_2 .v-container-padding-padding {
            padding: 30px 30px 15px !important;
          }
          #u_content_image_2 .v-src-width {
            width: auto !important;
          }
          #u_content_image_2 .v-src-max-width {
            max-width: 19% !important;
          }
          #u_content_image_1 .v-container-padding-padding {
            padding: 10px 10px 5px !important;
          }
          #u_content_image_1 .v-src-width {
            width: auto !important;
          }
          #u_content_image_1 .v-src-max-width {
            max-width: 50% !important;
          }
          #u_content_heading_1 .v-container-padding-padding {
            padding: 10px 0px 20px !important;
          }
          #u_content_heading_1 .v-font-size {
            font-size: 15px !important;
          }
          #u_content_text_2 .v-container-padding-padding {
            padding: 10px !important;
          }
        }
      </style>
  
      <!--[if !mso]><!-->
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Arvo&display=swap"
        rel="stylesheet"
        type="text/css"
      />
      <!--<![endif]-->
    </head>
  
    <body
      class="clean-body u_body"
      style="
        margin: 30px 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        background-color: #ffffff;
        color: #000000;
      "
    >
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table
        style="
          border-collapse: collapse;
          table-layout: fixed;
          border-spacing: 0;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          vertical-align: top;
          min-width: 320px;
          margin: 0 auto;
          background-color: #ffffff;
          width: 100%;
        "
        cellpadding="0"
        cellspacing="0"
      >
        <tbody>
          <tr style="vertical-align: top">
            <td
              style="
                word-break: break-word;
                border-collapse: collapse !important;
                vertical-align: top;
              "
            >
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
  
              <!--[if gte mso 9]>
        <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;min-width: 320px;max-width: 600px;">
          <tr>
            <td background="https://cdn.templates.unlayer.com/assets/1704365105617-bg.png" valign="top" width="100%">
        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
          <v:fill type="frame" src="https://cdn.templates.unlayer.com/assets/1704365105617-bg.png" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
        <![endif]-->
  
              <div
                class="u-row-container"
                style="
                  padding: 0px;
                  background-image: url('images/image-1.png');
                  background-repeat: no-repeat;
                  background-position: center top;
                  background-color: transparent;
                "
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: transparent;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      height: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-image: url('images/image-1.png');background-repeat: no-repeat;background-position: center top;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f8fafc;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          background-color: #f8fafc;
                          height: 100%;
                          width: 100% !important;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        ><!--<![endif]-->
                          <table
                            id="u_content_image_2"
                            style="font-family: 'Raleway', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="v-container-padding-padding"
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 30px 10px 15px;
                                    font-family: 'Raleway', sans-serif;
                                  "
                                  align="left"
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                  >
                                    <tr>
                                      <td
                                        style="
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                        align="center"
                                      >
                                        <img
                                          align="center"
                                          border="0"
                                          src="https://res.cloudinary.com/dxjprordi/image/upload/v1704618195/martiful/Frame_1000001167_fqerf4.png"
                                          alt="image"
                                          title="image"
                                          style="
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                            clear: both;
                                            display: inline-block !important;
                                            border: none;
                                            height: auto;
                                            float: none;
                                            width: 11%;
                                            max-width: 63.8px;
                                          "
                                          width="63.8"
                                          class="v-src-width v-src-max-width"
                                        />
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
  
              <!--[if gte mso 9]>
        </v:textbox></v:rect>
      </td>
      </tr>
      </table>
      <![endif]-->
  
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: transparent;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      height: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f8fafc;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          background-color: #f8fafc;
                          height: 100%;
                          width: 100% !important;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        ><!--<![endif]-->
                          <table
                            style="font-family: 'Raleway', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="v-container-padding-padding"
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px;
                                    font-family: 'Raleway', sans-serif;
                                  "
                                  align="left"
                                >
                                  <table
                                    height="0px"
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="82%"
                                    style="
                                      border-collapse: collapse;
                                      table-layout: fixed;
                                      border-spacing: 0;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      vertical-align: top;
                                      border-top: 1px solid #bbbbbb;
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                    "
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td
                                          style="
                                            word-break: break-word;
                                            border-collapse: collapse !important;
                                            vertical-align: top;
                                            font-size: 0px;
                                            line-height: 0px;
                                            mso-line-height-rule: exactly;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                        >
                                          <span>&#160;</span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
  
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: transparent;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      height: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f8fafc;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          background-color: #f8fafc;
                          height: 100%;
                          width: 100% !important;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        ><!--<![endif]-->
                          <table
                            id="u_content_image_1"
                            style="font-family: 'Raleway', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="v-container-padding-padding"
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 20px 10px 15px;
                                    font-family: 'Raleway', sans-serif;
                                  "
                                  align="left"
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                  >
                                    <tr>
                                      <td
                                        style="
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                        align="center"
                                      >
                                        <img
                                          align="center"
                                          border="0"
                                          src="https://res.cloudinary.com/dxjprordi/image/upload/v1704618248/martiful/image_2_ryhnso.png"
                                          alt="image"
                                          title="image"
                                          style="
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                            clear: both;
                                            display: inline-block !important;
                                            border: none;
                                            height: auto;
                                            float: none;
                                            width: 59%;
                                            max-width: 342.2px;
                                          "
                                          width="342.2"
                                          class="v-src-width v-src-max-width"
                                        />
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
  
              <div
                class="u-row-container"
                style="padding: 0px;background-color: '"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: transparent;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      height: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f8fafc;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="596" style="background-color: #ffffff;width: 596px;padding: 0px;border-top: 2px solid #f8fafc;border-left: 2px solid #f8fafc;border-right: 2px solid #f8fafc;border-bottom: 2px solid #f8fafc;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          background-color: #ffffff;
                          height: 100%;
                          width: 100% !important;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 2px solid #f8fafc;
                            border-left: 2px solid #f8fafc;
                            border-right: 2px solid #f8fafc;
                            border-bottom: 2px solid #f8fafc;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        ><!--<![endif]-->
                          <table
                            id="u_content_heading_1"
                            style="font-family: 'Raleway', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="v-container-padding-padding"
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px 70px 20px;
                                    font-family: 'Raleway', sans-serif;
                                  "
                                  align="left"
                                >
                                  <!--[if mso]><table width="100%"><tr><td><![endif]-->
                                  <h1
                                    class="v-font-size"
                                    style="
                                      margin: 0px;
                                      line-height: 140%;
                                      text-align: left;
                                      word-wrap: break-word;
                                      font-family: Arvo;
                                      font-size: 25px;
                                      font-weight: 400;
                                    "
                                  >
                                    <span
                                      ><span
                                        ><span
                                          ><span
                                            ><span
                                              ><span
                                                ><span
                                                  ><span
                                                    ><span
                                                      ><span
                                                        ><span
                                                          ><span
                                                            ><span
                                                              ><strong
                                                                > WELCOME TO
                                                                MARTIFUL</strong
                                                              ><br /></span></span></span></span></span></span></span></span></span></span></span></span
                                    ></span>
                                  </h1>
                                  <!--[if mso]></td></tr></table><![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <table
                            id="u_content_text_2"
                            style="font-family: 'Raleway', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                           
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="v-container-padding-padding"
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px 70px;
                                    font-family: 'Raleway', sans-serif;
                                  "
                                  align="left"
                                >
                                  <div
                                    class="v-font-size"
                                    style="
                                      font-size: 14px;
                                      line-height: 170%;
                                      text-align: left;
                                      word-wrap: break-word;
                                    "
                                  >
                                    <p style="line-height: 170%">
                                      <span
                                        data-metadata="&lt;"
                                        style="line-height: 23.8px"
                                      ></span
                                      >Dear [User],
                                    </p>
                                    <p style="line-height: 170%">
                                      <br /><span
                                        data-metadata="&lt;"
                                        style="line-height: 23.8px"
                                      ></span
                                      ><span style="line-height: 23.8px"
                                        >We’re excited to welcome you to MARTIFUL,
                                        you have access to trading your
                                        Cryptocurrencies at the best rates.</span
                                      > 
                                    </p>
                                    <p style="line-height: 170%"> </p>
                                    <p style="line-height: 170%">
                                      <span
                                        data-metadata="&lt;"
                                        style="line-height: 23.8px"
                                      ></span
                                      ><span style="line-height: 23.8px"
                                        >Martiful is secure, swift and reliable.
                                        We are committed to serving you with
                                        dignity and respect.</span
                                      >
                                    </p>
                                    <p style="line-height: 170%"> </p>
                                    <p style="line-height: 170%">
                                      <span
                                        data-metadata="&lt;"
                                        style="line-height: 23.8px"
                                      ></span
                                      ><span style="line-height: 23.8px"
                                        >Kindly send us an email at
                                        Martifulservices@gmail.com if you have any
                                        questions or complaints and a member of
                                        our support team would reach out to
                                        you.</span
                                      >
                                    </p>
                                    <p style="line-height: 170%"> </p>
                                    <p style="line-height: 170%">
                                      <span
                                        data-metadata="&gt;"
                                        style="line-height: 23.8px"
                                      ></span
                                      ><strong>AKINYEMI ABIDEMI</strong>
                                    </p>
                                    <p style="line-height: 170%">
                                      <span
                                        data-metadata="&lt;"
                                        style="line-height: 23.8px"
                                      ></span
                                      ><span
                                        data-buffer="&lt;"
                                        style="line-height: 23.8px"
                                      ></span
                                      ><span style="line-height: 23.8px"
                                        >CEO Martiful</span
                                      >
                                    </p>
                                    <p style="line-height: 170%"> </p>
                                    <p style="line-height: 170%">
                                      <span
                                        data-metadata="&lt;"
                                        style="line-height: 23.8px"
                                      ></span
                                      ><span
                                        data-buffer="&lt;"
                                        style="line-height: 23.8px"
                                      ></span
                                      ><span style="line-height: 23.8px"
                                        >Regards, <br />Martiful Team</span
                                      >
                                    </p>
                                    <p style="line-height: 170%"> </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
  
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: transparent;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      height: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f8fafc;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          background-color: #f8fafc;
                          height: 100%;
                          width: 100% !important;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        ><!--<![endif]-->
                          <table
                            style="font-family: 'Raleway', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="v-container-padding-padding"
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 30px;
                                    font-family: 'Raleway', sans-serif;
                                  "
                                  align="left"
                                >
                                  <div
                                    class="v-font-size"
                                    style="
                                      font-size: 14px;
                                      line-height: 140%;
                                      text-align: center;
                                      word-wrap: break-word;
                                    "
                                  >
                                    <p style="line-height: 140%">
                                      © 2023 Martiful
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
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

export const verifyEmailTemplate = (name: string, token: string ): string => {
  return `<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <title></title>

    <style type="text/css">
      @media only screen and (min-width: 620px) {
        .u-row {
          width: 600px !important;
        }
        .u-row .u-col {
          vertical-align: top;
        }

        .u-row .u-col-100 {
          width: 600px !important;
        }
      }

      @media (max-width: 620px) {
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

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }

      table,
      td {
        color: #000000;
      }
      #u_body a {
        color: #0000ee;
        text-decoration: underline;
      }
      @media (max-width: 480px) {
        #u_content_image_2 .v-container-padding-padding {
          padding: 30px 30px 15px !important;
        }
        #u_content_image_2 .v-src-width {
          width: auto !important;
        }
        #u_content_image_2 .v-src-max-width {
          max-width: 19% !important;
        }
        #u_content_image_1 .v-container-padding-padding {
          padding: 10px 10px 5px !important;
        }
        #u_content_image_1 .v-src-width {
          width: auto !important;
        }
        #u_content_image_1 .v-src-max-width {
          max-width: 50% !important;
        }
        #u_content_heading_1 .v-container-padding-padding {
          padding: 10px 0px 20px !important;
        }
        #u_content_heading_1 .v-font-size {
          font-size: 15px !important;
        }
        #u_content_text_2 .v-container-padding-padding {
          padding: 10px !important;
        }
        #u_content_text_16 .v-container-padding-padding {
          padding: 10px !important;
        }
        #u_content_text_23 .v-container-padding-padding {
          padding: 10px !important;
        }
      }
    </style>

    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Arvo&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
  </head>

  <body
    class="clean-body u_body"
    style="
      margin: 30px 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #ffffff;
      color: #000000;
    "
  >
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table
      id="u_body"
      style="
        border-collapse: collapse;
        table-layout: fixed;
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        background-color: #ffffff;
        width: 100%;
      "
      cellpadding="0"
      cellspacing="0"
    >
      <tbody>
        <tr style="vertical-align: top">
          <td
            style="
              word-break: break-word;
              border-collapse: collapse !important;
              vertical-align: top;
            "
          >
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->

            <!--[if gte mso 9]>
        <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;min-width: 320px;max-width: 600px;">
          <tr>
            <td background="https://cdn.templates.unlayer.com/assets/1704365105617-bg.png" valign="top" width="100%">
        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
          <v:fill type="frame" src="https://cdn.templates.unlayer.com/assets/1704365105617-bg.png" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
        <![endif]-->

            <div
              class="u-row-container"
              style="
                padding: 0px;
                background-image: url('images/image-1.png');
                background-repeat: no-repeat;
                background-position: center top;
                background-color: transparent;
              "
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-image: url('images/image-1.png');background-repeat: no-repeat;background-position: center top;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f8fafc;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #f8fafc;
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      ><!--<![endif]-->
                        <table
                          id="u_content_image_2"
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 30px 10px 15px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="https://res.cloudinary.com/dxjprordi/image/upload/v1704618195/martiful/Frame_1000001167_fqerf4.png"
                                        alt="image"
                                        title="image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 11%;
                                          max-width: 63.8px;
                                        "
                                        width="63.8"
                                        class="v-src-width v-src-max-width"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <!--[if gte mso 9]>
        </v:textbox></v:rect>
      </td>
      </tr>
      </table>
      <![endif]-->

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f8fafc;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #f8fafc;
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="82%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 1px solid #bbbbbb;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f8fafc;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #f8fafc;
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      ><!--<![endif]-->
                        <table
                          id="u_content_image_1"
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 20px 10px 15px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="https://res.cloudinary.com/dxjprordi/image/upload/v1704618292/martiful/image_1_fvick3.png"
                                        alt="image"
                                        title="image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 82%;
                                          max-width: 475.6px;
                                        "
                                        width="475.6"
                                        class="v-src-width v-src-max-width"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #f8fafc;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f8fafc;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="596" style="background-color: #f8fafc;width: 596px;padding: 0px;border-top: 2px solid #f8fafc;border-left: 2px solid #f8fafc;border-right: 2px solid #f8fafc;border-bottom: 2px solid #f8fafc;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #f8fafc;
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 2px solid #f8fafc;
                          border-left: 2px solid #f8fafc;
                          border-right: 2px solid #f8fafc;
                          border-bottom: 2px solid #f8fafc;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      ><!--<![endif]-->
                        <table
                          id="u_content_heading_1"
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 70px 20px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <!--[if mso]><table width="100%"><tr><td><![endif]-->
                                <h1
                                  class="v-font-size"
                                  style="
                                    margin: 0px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                    font-family: Arvo;
                                    font-size: 25px;
                                    font-weight: 400;
                                  "
                                >
                                  <span
                                    ><span
                                      ><span
                                        >
                                                              <strong>
                                                                     Confirm
                                                                    Verification
                                                                    Code</strong
                                                                  ><br /></span
                                  ></span>
                                </h1>
                                <!--[if mso]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_text_2"
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 70px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-font-size"
                                  style="
                                    font-size: 14px;
                                    line-height: 170%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 170%">
                                    <span
                                      data-metadata="&lt"
                                      style="line-height: 23.8px"
                                      ><span
                                        data-metadata="&lt;"
                                        style="line-height: 23.8px"
                                      ></span
                                      ><span
                                        data-buffer="&lt;"
                                        style="line-height: 23.8px"
                                      ></span
                                      ><span style="line-height: 23.8px"
                                        >Hi ${name},</span
                                      >
                                    </span>
                                  </p>
                                  <p style="line-height: 170%"> </p>
                                  <p style="line-height: 170%">
                                    <span
                                      data-metadata="&lt;"
                                      style="line-height: 23.8px"
                                      ><span
                                        data-metadata="&lt;"
                                        style="line-height: 23.8px"
                                      ></span
                                      ><span
                                        data-buffer="&lt;"
                                        style="line-height: 23.8px"
                                      ></span
                                      ><span style="line-height: 23.8px"
                                        >This is your verification code:</span
                                      >
                                    </span>
                                  </p>
                                 
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #f8fafc;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f8fafc;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="596" style="background-color: #f8fafc;width: 596px;padding: 0px;border-top: 2px solid #f8fafc;border-left: 2px solid #f8fafc;border-right: 2px solid #f8fafc;border-bottom: 2px solid #f8fafc;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #f8fafc;
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 2px solid #f8fafc;
                          border-left: 2px solid #f8fafc;
                          border-right: 2px solid #f8fafc;
                          border-bottom: 2px solid #f8fafc;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 70px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <div>
                                  <div>
                                    <h2>${token}</h2>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #f8fafc;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f8fafc;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="596" style="background-color: #f8fafc;width: 596px;padding: 0px;border-top: 2px solid #f8fafc;border-left: 2px solid #f8fafc;border-right: 2px solid #f8fafc;border-bottom: 2px solid #f8fafc;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #f8fafc;
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 2px solid #f8fafc;
                          border-left: 2px solid #f8fafc;
                          border-right: 2px solid #f8fafc;
                          border-bottom: 2px solid #f8fafc;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      ><!--<![endif]-->
                        <table
                          id="u_content_text_16"
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 70px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-font-size"
                                  style="
                                    font-size: 14px;
                                    line-height: 170%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 170%">
                                    <span
                                      data-metadata="&lt;!--(figmeta)eyJmaWxlS2V5Ijoia1NVOHd0cGhRU2w3YnZMY2JvWVd6USIsInBhc3RlSUQiOjE3MTIwNTA3NDUsImRhdGFUeXBlIjoic2NlbmUifQo=(/figmeta)--&gt;"
                                      style="line-height: 23.8px"
                                      >Before we can take off on this wonderful
                                      journey, please verify your email address.
                                      This code will only be valid for the next
                                      5 minutes. If the code does not work, you
                                      can use this login verification
                                      link:</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #f8fafc;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f8fafc;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="596" style="background-color: #f8fafc;width: 596px;padding: 0px;border-top: 2px solid #f8fafc;border-left: 2px solid #f8fafc;border-right: 2px solid #f8fafc;border-bottom: 2px solid #f8fafc;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #f8fafc;
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 2px solid #f8fafc;
                          border-left: 2px solid #f8fafc;
                          border-right: 2px solid #f8fafc;
                          border-bottom: 2px solid #f8fafc;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 10px 10px 70px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <!--[if mso
                                  ]><style>
                                    .v-button {
                                      background: transparent !important;
                                    }
                                  </style><!
                                [endif]-->
                                <div align="left">
                                  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:57px; v-text-anchor:middle; width:116px;" arcsize="0%"  stroke="f" fillcolor="#662d91"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
                                  <a
                                    href=""
                                    target="_blank"
                                    class="v-button v-font-size"
                                    style="
                                      box-sizing: border-box;
                                      display: inline-block;
                                      text-decoration: none;
                                      -webkit-text-size-adjust: none;
                                      text-align: center;
                                      color: #ffffff;
                                      background-color: #662d91;
                                      border-radius: 0px;
                                      -webkit-border-radius: 0px;
                                      -moz-border-radius: 0px;
                                      width: auto;
                                      max-width: 100%;
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      word-wrap: break-word;
                                      mso-border-alt: none;
                                      font-size: 14px;
                                      font-weight: 400;
                                    "
                                  >
                                    <span
                                      style="
                                        display: block;
                                        padding: 20px;
                                        line-height: 120%;
                                      "
                                      ><span style="line-height: 16.8px"
                                        >Verify Email</span
                                      ></span
                                    >
                                  </a>
                                  <!--[if mso]></center></v:roundrect><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #f8fafc;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f8fafc;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="596" style="background-color: #f8fafc;width: 596px;padding: 0px;border-top: 2px solid #f8fafc;border-left: 2px solid #f8fafc;border-right: 2px solid #f8fafc;border-bottom: 2px solid #f8fafc;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #f8fafc;
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 2px solid #f8fafc;
                          border-left: 2px solid #f8fafc;
                          border-right: 2px solid #f8fafc;
                          border-bottom: 2px solid #f8fafc;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      ><!--<![endif]-->
                        <table
                          id="u_content_text_23"
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 70px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-font-size"
                                  style="
                                    font-size: 14px;
                                    line-height: 170%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 170%">
                                    <span
                                      data-metadata="&lt;"
                                      style="line-height: 23.8px"
                                    ></span
                                    ><span
                                      data-buffer="&lt;!--(figma)Z"
                                      style="line-height: 23.8px"
                                    ></span
                                    ><span style="line-height: 23.8px"
                                      >Regards, <br />Martiful Team</span
                                    >
                                  </p>
                                  <p style="line-height: 170%"> </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f8fafc;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #f8fafc;
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 30px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-font-size"
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: center;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 140%">
                                    © 2023 Martiful
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
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
