export interface DemoFormData {
  name: string;
  designation: string;
  email: string;
  mobileNumber: string;
  organizationName: string;
  noOfBeds: string;
  intrestedModulesList: string[];
  comments: string;
}

export async function submitDemoRequest(formData: DemoFormData) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://preprod.qurix.io/preprodhims/";
  const apiUrl = `${baseUrl}openapi/qurix/savedemo`;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to submit demo request");
  }

  return response.json();
}
