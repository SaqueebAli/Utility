document.getElementById('file-object').addEventListener("change",
  function(e) {
     var files = e.target.files,file;
     if (!files || files.length == 0) return;
     file = files[0];
     var fileReader = new FileReader();
     fileReader.onload = function (e) {
       var filename = file.name;
       var binary = "";
       var bytes = new Uint8Array(e.target.result);
       var length = bytes.byteLength;
       for (var i = 0; i < length; i++) {
         binary += String.fromCharCode(bytes[i]);
       }
      var workbook = XLSX.read(binary, {type: 'binary', cellDates:true, cellStyles:true});
      var wopts = { bookType:'xlsx', bookSST:false, type:'base64' };
      var wbout = XLSX.write(workbook,wopts);
      var blob = new Blob([s2ab(atob(wbout))],{type: 'application/octet-stream'});
      var formData = new FormData();
      formData.append('filetoupload', blob, 'test.xlsx');
      $.ajax({
          url: '/upload',
          type: 'POST',
          data: formData,
          success:function(data){
             console.log(data);
          },
          cache: false,
          contentType: false,
          processData: false
        });
      };
      fileReader.readAsArrayBuffer(file);
});