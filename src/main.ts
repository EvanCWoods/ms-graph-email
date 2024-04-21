// src/msGraphClient.ts
import axios from "axios";
import qs from "qs";
import { SendEmailParams } from "./types/types";
import dotenv from "dotenv";

dotenv.config();

class MSGraphClient {
	private async getAccessToken(): Promise<string | null> {
		const tenantId = process.env.AZURE_TENANT_ID;
		const clientId = process.env.AZURE_CLIENT_ID;
		const clientSecret = process.env.AZURE_CLIENT_SECRET;
		const tokenEndpoint = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
		const params = {
			client_id: clientId,
			scope: "https://graph.microsoft.com/.default",
			client_secret: clientSecret,
			grant_type: "client_credentials",
		};

		try {
			const response = await axios.post(tokenEndpoint, qs.stringify(params), {
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
			});
			return response.data.access_token;
		} catch (error) {
			console.error("Error obtaining access token", error);
			return null;
		}
	}

	public async sendEmail(params: SendEmailParams): Promise<void> {
		const userPrincipalName = process.env.AZURE_EMAIL_ACCOUNT;
		const { userEmail, subject, content } = params;
		const accessToken = await this.getAccessToken();
		if (!accessToken) {
			throw new Error("Failed to get access token.");
		}

		const url = `https://graph.microsoft.com/v1.0/users/${userPrincipalName}/sendMail`;
		const message = {
			message: {
				subject: subject,
				body: { contentType: "HTML", content: content },
				toRecipients: [{ emailAddress: { address: userEmail } }],
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
			throw new Error("Failed to send email.");
		}
	}
}

export default MSGraphClient;
