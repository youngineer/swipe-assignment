export const handleAiResponse = (text) => {
  console.log("inside handleAiOpL:", text)
  try {
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}') + 1;
    
    if (jsonStart === -1 || jsonEnd === -1) return null;
    
    // Extract the JSON string and clean it
    let jsonString = text.slice(jsonStart, jsonEnd);
    jsonString = jsonString
      .replace(/\/\/.*/g, '')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/,(\s*[}\]])/g, '$1')
      .trim();

    console.log('Cleaned JSON string:', jsonString);
    const jsonObj = JSON.parse(jsonString);
    
    return jsonObj;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
};

