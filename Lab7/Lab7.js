// Convert JSON text to JavaScript object
function convertJsonToObject() {
    const jsonInput = document.getElementById('jsonInput').value;
    try {
      const jsonObject = JSON.parse(jsonInput);
      document.getElementById('objectOutput').textContent = JSON.stringify(jsonObject, null, 2);
    } catch (error) {
      document.getElementById('objectOutput').textContent = 'Invalid JSON!';
    }
  }
  
  // Convert JSON date text to JavaScript Date object
  function convertJsonToDate() {
    const dateInput = document.getElementById('dateInput').value;
    try {
      const jsonDate = JSON.parse(dateInput);
      const dateObject = new Date(jsonDate.date);
      document.getElementById('dateOutput').textContent = `Date Object: ${dateObject}`;
    } catch (error) {
      document.getElementById('dateOutput').textContent = 'Invalid JSON or date format!';
    }
  }
  
  // Convert JSON to CSV
  function convertJsonToCsv() {
    const jsonCsvInput = document.getElementById('jsonCsvInput').value;
    try {
      const jsonArray = JSON.parse(jsonCsvInput);
      const headers = Object.keys(jsonArray[0]);
      const csvRows = [
        headers.join(','),
        ...jsonArray.map(row => headers.map(header => row[header]).join(','))
      ];
      document.getElementById('csvOutput').textContent = csvRows.join('\n');
    } catch (error) {
      document.getElementById('csvOutput').textContent = 'Invalid JSON format!';
    }
  }
  
  // Convert CSV to JSON
  function convertCsvToJson() {
    const csvToJsonInput = document.getElementById('csvToJsonInput').value;
    const lines = csvToJsonInput.split('\n');
    const headers = lines[0].split(',');
    const jsonArray = lines.slice(1).map(line => {
      const values = line.split(',');
      return headers.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
    });
    document.getElementById('jsonOutput').textContent = JSON.stringify(jsonArray, null, 2);
  }
  
  // Create a hash using the Web Crypto API (SHA-256)
async function createHash() {
    const hashInput = document.getElementById('hashInput').value;
    const encoder = new TextEncoder();
    const data = encoder.encode(hashInput);
    
    // Use the Web Crypto API to generate a hash
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    
    // Convert hash buffer to hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    document.getElementById('hashOutput').textContent = `Hash: ${hashHex}`;
  }

