//Display HTML page
function doGet(request) {
  let html = HtmlService.createTemplateFromFile('Index').evaluate();
  let htmlOutput = HtmlService.createHtmlOutput(html);
  htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return htmlOutput;
}

function loadIndexForm() {
  const htmlServ = HtmlService.createTemplateFromFile("Index");
  const html = htmlServ.evaluate();
  html.setWidth(1920).setHeight(1080);
  const ui = SpreadsheetApp.getUi();
  ui.showModalDialog(html, "Flosonics Medical")
}

function createMenu_() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu("Web App");
  menu.addItem("Open Form", "loadIndexForm");
  menu.addToUi();
}

function onOpen() {
  createMenu_();
}







