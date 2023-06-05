// Load the Google Sheets API client library
gapi.load('sheets', initClient);

// Initialize the Google Sheets API client library
function initClient() {
  gapi.client.init({
    apiKey: 'AizaSyCBVnw1FNhUEeY-52kTBID6vSlmuotWOYA',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    clientId: '881082337462-gvoudc881ph5ve87gs2et097ljpohg75.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/spreadsheets'
  }).then(function() {
    // Listen for the form submit event
    const form = document.querySelector('form');
    form.addEventListener('submit', exportFormData);
  });
}

// Export form data to a Google Sheets document
function exportFormData(event) {
  event.preventDefault();

  // Get the form data
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  // Create the spreadsheet data
  const spreadsheetData = [
    [name, email, message]
  ];

  // Get the Google Sheets document ID
  const spreadsheetId = '1bbjT798kkjKcEeiG3ABi2BYHg2SpiHJLLQVkMIabDoA';

  // Get the range where the data should be inserted
  const range = 'Sheet1!A1:C1';

  // Call the Google Sheets API to insert the data
  gapi.client.sheets.spreadsheets.values.append({
    spreadsheetId: spreadsheetId,
    range: range,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: spreadsheetData
    }
  }).then(function(response) {
    console.log(response);
    alert('Thank you for your message!');
    form.reset();
  }, function(reason) {
    console.error('Error: ' + reason.result.error.message);
  });
}