declare module 'substack-subscriber' {
  export interface SubscribeResponse {
    email: string;
    prompt_to_login: boolean;
    requires_confirmation: boolean;
    subscription_id: number;
    didSignup: boolean;
    hasAppInstalled: boolean;
  }

  export function subscribe(
    email: string,
    substackUrl: string
  ): Promise<SubscribeResponse>;
}

