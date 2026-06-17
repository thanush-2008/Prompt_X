// Netlify Serverless Function — PROMPT_X Image Generator
// Calls Google Gemini 2.5 Flash Image with the uploaded image + selected prompt
// API key is stored securely in Netlify environment variables

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  try {
    const { imageBase64, mimeType, prompt } = JSON.parse(event.body);

    if (!imageBase64 || !prompt) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing image or prompt" }) };
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ error: "API key not configured" }) };
    }

    // Use gemini-2.5-flash-image (Nano Banana) — current free tier model
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  inline_data: {
                    mime_type: mimeType || "image/jpeg",
                    data: imageBase64
                  }
                },
                {
                  text: prompt
                }
              ]
            }
          ],
          generationConfig: {
            responseModalities: ["IMAGE", "TEXT"],
            temperature: 1,
            topP: 0.95
          }
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API error:", data);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: data.error?.message || "Gemini API error" })
      };
    }

    // Extract generated image from response
    const parts = data.candidates?.[0]?.content?.parts || [];
    const imagePart = parts.find(p => p.inline_data?.mime_type?.startsWith("image/"));

    if (!imagePart) {
      return { statusCode: 500, body: JSON.stringify({ error: "No image returned from Gemini" }) };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imageBase64: imagePart.inline_data.data,
        mimeType: imagePart.inline_data.mime_type
      })
    };

  } catch (err) {
    console.error("Function error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Server error: " + err.message }) };
  }
};