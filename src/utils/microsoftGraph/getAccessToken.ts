import axios from "axios";
import qs from "qs";
import dotenv from "dotenv";

dotenv.config();

async function getAccessToken() {
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
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		});
		return response.data.access_token;
	} catch (error) {
		console.error("Error obtaining access token", error);
		return null;
	}
}

export default getAccessToken;
