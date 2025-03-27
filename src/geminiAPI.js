const api = "http://localhost:4000/insurance";

export async function sendMessageToGemini(message) {
      try {
            const response = await fetch(api, {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ message: message }),
            });

            if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.response;
      } catch (error) {
            console.error("Error sending message to Gemini:", error);
            throw error;
      }
}
