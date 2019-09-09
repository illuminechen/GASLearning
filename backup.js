
/*
// add a custom menu when the spreadsheet opens
function onOpen() {
   SpreadsheetApp.getUi()
      // create a new menu in your spreadsheet
      .createMenu('My Custom menu')
      // add an entry to that menu
      .addItem('Select Guests', 'selectGuests')
      // Warn: forgetting this line can drive you nuts
      .addToUi();
}

// this function will be called by our sidebar to update the cell value
function setActiveCellValue(value) {
  SpreadsheetApp.getActiveSheet().getActiveCell().setValue(value);
}


// this is called when user selects the entry in the custom menu
function selectGuests() {
  // open our sidebar with a range of possibles from A2:A range
  openSideBar("Select Guests", "'Sheet1'!A2:A", 0, 0);
}

function openSideBar(title, range, valueIndex, labelIndex) {

  // grab list of available choices
  var choices = SpreadsheetApp.getActiveSheet().getRange(range).getValues();

  // create the template from HTML
  var tpl = HtmlService.createTemplateFromFile('pane.html');

  // add data to the templates. needs to be passed as strings !
  // data structure depends on your widget
  tpl.choices = JSON.stringify(choices.map(function(choice) {
    return {
      value: choice[valueIndex],
      text: choice[labelIndex]
    };
  }).filter(function(val) {
    return val.value && val.text;
  }));

  // now, evaluate and execute our template inside a sidebar
  var result = tpl.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
  result.setTitle(title).setWidth(300);
  SpreadsheetApp.getUi().showSidebar(result);
}
*/