export enum ActivationMethod {
	none = 0,
	email = 1,
	sms = 2,
	google = 3,
	webhook = 4,
	whatsapp = 5
}

export interface Account {
	name: string; 
	activated: boolean;
	expiration: number;
	subject: string;
	challenge: string;
	activation_method: ActivationMethod;
}