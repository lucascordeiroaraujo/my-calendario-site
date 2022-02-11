import { api } from '~/services/api';

export const authGetGoogleAuthUrl = async (): Promise<string> => {
	try {
		const response = await api.get('/users/google/generate-auth-url', {
			params: {
				redirectUrl: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
			},
		});

		const { googleAuthUrl } = await response.data;

		return googleAuthUrl;
	} catch (err: any) {
		throw new Error(`Error on get google url ${err}`);
	}
};
