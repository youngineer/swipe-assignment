import { GoogleGenerativeAI } from "@google/generative-ai";
import { PROMPT } from "../utils/constants";
import { handleAiResponse } from "./handleAiOutput";



export const fetchApiResult = async (file, apiKey) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = async (event) => {
        const base64Data = event.target.result.split(",")[1]; 
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });
  
        try {
          const result = await model.generateContent([
            {
              inlineData: {
                data: base64Data,
                mimeType: file.type,
              },
            },
            PROMPT,
          ]);
          resolve(result.response.text());
          return handleAiResponse(result.response.text());
        } catch (error) {
          console.error("Error generating content:", error);
          reject(error);
        }
      };
  
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
        reject(error);
      };
  
      reader.readAsDataURL(file);
    });
  };


  export const fetchApiResultJson = async (data, apiKey, dispatch) => {
    console.log('fetchApiResultJson', data);
    
    return new Promise(async (resolve, reject) => {
      try {
        if (!Array.isArray(data)) {
          throw new Error('Data is not an array of objects');
        }
  
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  
        // Convert data to string and format for the API
        const prompt = PROMPT + JSON.stringify(data);
  
        const result = await model.generateContent({
          contents: [{
            role: 'user',
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        });
  
        const response = result.response.text();
        // handleAiResponse(response, dispatch);
        resolve(response);
        return response;
  
      } catch (error) {
        console.error('Error processing data:', error);
        reject(error);
        return null;
      }
    });
  };
  
  export default fetchApiResultJson;

