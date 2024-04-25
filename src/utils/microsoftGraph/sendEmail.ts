import axios from "axios";
import getAccessToken from "./getAccessToken";
import dotenv from "dotenv";

dotenv.config();

async function sendEmail(userEmail: string, subject: string, content: string) {
	const accessToken = await getAccessToken();
	console.log(accessToken);
	// Specify the userPrincipalName of the mailbox you want to send the email from
	const userPrincipalName = process.env.AZURE_EMAIL_ACCOUNT;
	const url = `https://graph.microsoft.com/v1.0/users/${userPrincipalName}/sendMail`;

	const message = {
		message: {
			subject: subject,
			body: {
				contentType: "HTML",
				content: content,
			},
			toRecipients: [
				{
					emailAddress: {
						address: userEmail,
					},
				},
			],
		},
		saveToSentItems: "true",
	};

	try {
		const response = await axios.post(url, message, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Content-Type": "application/json",
			},
		});
		console.log("Email sent successfully", response.data);
	} catch (error) {
		console.error("Error sending email", error.response);
	}
}

export default sendEmail;
