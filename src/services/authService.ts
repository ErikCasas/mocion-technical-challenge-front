import { config } from "../../config";

export const signOut = async (): Promise<void> => {
  localStorage.removeItem(config.JWT_KEY);
};

export const signInWithCredentials = async (
  email: string,
  password: string
): Promise<void> => {
  const signInResponse = await fetch(`${config.AUTH_API_URL}/sign-in`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (signInResponse.status !== 200) {
    const json = await signInResponse.json();
    throw new Error(`Error Logging in: ${json.message}`);
  }

  const tokenResponse = await signInResponse.json();

  if (tokenResponse) {
    localStorage.setItem(config.JWT_KEY, tokenResponse);
  } else {
    throw new Error("Error in response token");
  }
};

export const signUpWithCredentials = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}): Promise<void> => {
  const signUpRequest = await fetch(`${config.AUTH_API_URL}/sign-up`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  });

  if (signUpRequest.status !== 200) {
    const json = await signUpRequest.json();
    throw new Error(`Error Signing up: ${json.message}`);
  }

  const signUpResponse = await signUpRequest.json();

  if (!signUpResponse.id) {
    throw new Error("Error registering user");
  }
};
