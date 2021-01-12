import Editor from "../../../../model/Editor";

export const exportToJson = (presentEditor: Editor) => {
  let filename = presentEditor.currentPresentation.name + '.json';
  let contentType = "application/json;charset=utf-8;";
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(presentEditor)))], { type: contentType });
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    var myFile = document.createElement('a');
    myFile.download = filename;
    myFile.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(presentEditor));
    myFile.target = '_blank';
    document.body.appendChild(myFile);
    myFile.click();
    document.body.removeChild(myFile);
  }
}