import dotenv from "dotenv";
dotenv.config();

const config = {
  conn: process.env.CONN,
  port: process.env.PORT,
  salt: process.env.SALT,
  mail: process.env.EMAIL,
  pass: process.env.PASS,
  smpt: process.env.SMTP,
  mail_port: process.env.MAILPORT,
  user_id: process.env.API_USER_ID,
  api_secret: process.env.API_SECRET,

  //   pass: "",
  //   infobip_key: process.env.INFOBIP_KEY,
  //   info_bip_host: process.env.INFO_BIP_HOST,
  key: process.env.KEY,
  recaptcha_secret: process.env.RECAPTCHA_SECRET,
};

export default config;
