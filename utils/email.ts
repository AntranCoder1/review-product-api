import nodemailer from "nodemailer";
import config from "../config/config";
import { loadTemplate } from "./loadTemplate";
// const puppeteer = require("puppeteer");

import { NodeMailgun } from 'ts-mailgun';

const mailer = new NodeMailgun();
mailer.apiKey = config.mailgunApiKey; // Set your API key
mailer.domain = 'lanciapp.com'; // Set the domain you registered earlier
mailer.fromEmail = 'help@lanciapp.com'; // Set your from email
mailer.fromTitle = 'Support'; // Set the name you would like to send from

mailer.init();

export default class MailUlti {
	static resetpassword = async (email: string, code: string) => {
		const result: any = { success: false, error: null };
		try {
			// const emailAuth = config.email;
			// const passwordAuth = config.password;

			// const transporter = nodemailer.createTransport({
			// 	host: "smtp.gmail.com",
			// 	port: 465,
			// 	secure: true,
			// 	auth: {
			// 		user: emailAuth,
			// 		pass: passwordAuth,
			// 	},
			// });

			let htmlstream = await loadTemplate("reset_password");
			htmlstream = htmlstream.replace("${code}", code);

			// send mail with defined transport object
			// await transporter.sendMail({
			// 	from: `Lanci App <${emailAuth}>`,
			// 	to: email,
			// 	subject: "Reset Password",
			// 	html: htmlstream,
			// });
			await mailer.send(email, 'Reset Password - LanciApp', htmlstream);
			result.success = true;
		} catch (err) {
			console.log(err);
			result.error = err;
		}
		return result;
	};

	static sent_confirmations = async (
		firstname: string,
		lastname: string,
		email: string,
		firstPassword: string
	) => {
		const result: any = { success: false, error: null };
		try {
			const emailAuth = config.email;
			const passwordAuth = config.password;

			const transporter = nodemailer.createTransport({
				service: "gmail.com",
				auth: {
					user: emailAuth,
					pass: passwordAuth,
				},
			});

			let htmlstream = await loadTemplate("confirm_account");
			// htmlstream = htmlstream.replace(
			// 	"${confirm_url}",
			// 	config.frontUrl + `auth/active/${code}`
			// );

			firstname = firstname ? firstname : "";
			lastname = lastname ? lastname : "";
			htmlstream = htmlstream.replace(
				"${full_name}",
				firstname + " " + lastname
			);

			htmlstream = htmlstream.replace("${email}", email);
			htmlstream = htmlstream.replace("${first_password}", firstPassword);

			// send mail with defined transport object
			try {
				await transporter.sendMail({
					from: `Lanci App <${emailAuth}>`,
					to: email,
					subject: "Account Confirmations",
					html: htmlstream,
				});
				result.success = true;
			} catch (err) {
				result.success = false;
				throw err;
			}
		} catch (err) {
			result.error = err;
		}
		return result;
	};
}

// turn on Allow less secure apps:
// https://accounts.google.com/b/0/DisplayUnlockCaptcha
