const dropArea = document.getElementById('drop--area');

['dragenter', 'dragover'].forEach(event => {
  dropArea.addEventListener(event, function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropArea.classList.add('highlight');
  });
});

['dragleave', 'drop'].forEach(event => {
  dropArea.addEventListener(event, function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropArea.classList.remove('highlight');
  });
});

dropArea.addEventListener('drop', function (e) {
  e.preventDefault();
  e.stopPropagation();
  let dt = e.dataTransfer;
  let files = dt.files;
  handleFiles(files).then(result => {
    console.log(result.children)
  })
});

function handleFiles(files) {
  return new Promise((resolve, reject) => {
    const Files = Array.from(files);
    const createFileId = ( length ) => {
    let str = "";
    for ( ; str.length < length; str += Math.random().toString( 36 ).substr( 2 ));
      return str.substr( 0, length );
    }
    Files.forEach(file => {
      file.id = createFileId((Math.round(file.lastModified * 100)/file.lastModified));
      uploadFile(file);
      previewFile(file);
    });
    
    resolve(document.getElementById('gallery'));
  })
}

function previewFile(file) {
  const reader = new FileReader();
  //console.log('file:id', file.id)
  reader.readAsDataURL(file);
  reader.onloadend = function() {
    const img = document.createElement('img');
    const fig = document.createElement('figure');
    const spanOne = document.createElement('span');
    const spanTwo = document.createElement('span');
    const mainSpan = document.createElement('span');
    const progressSpan = document.createElement('span');
    fig.classList.add('preview');
    img.classList.add('img');
    mainSpan.classList.add('mainSpan');
    spanOne.classList.add('spanOne');
    spanTwo.classList.add('spanTwo');
    progressSpan.classList.add('progressSpan');
    progressSpan.id = file.id;
    mainSpan.onclick = function (e) {
      this.parentElement.remove();
    }
    img.src = reader.result;
    [spanOne, spanTwo].forEach(item => {
      mainSpan.appendChild(item);
    });
    [img, mainSpan, progressSpan].forEach(item => {
      fig.appendChild(item);
    });
    document.getElementById('gallery').appendChild(fig);
  }
}

function uploadFile(file) {
  const config = {
    headers: { "X-Requested-With": "XMLHttpRequest" },
    onUploadProgress: function (progressEvent) {
      let progress = Math.round((progressEvent.loaded * 100.0) / progressEvent.total);
      if (document.getElementById(`${file.id}`) !== null) {
        document.getElementById(`${file.id}`).style.height = `${100 - progress}%`;
      }
    }
  }
  //add cloudinary url
  const url = 'https://api.cloudinary.com/v1_1/dxlhzerlq/upload';
  const data = new FormData();
  data.append("upload_preset", "acjlrvii"); //append cloudinary specific config
  data.append('file', file);
  axios.post(url, data, config).then(res => {
   if (res.data) {
     const uploadedImgData = res.data;
     const imgTag = document.getElementById(`${file.id}`).previousSibling.previousSibling;
     imgTag.src = uploadedImgData.url;
     imgTag.dataset.data = JSON.stringify(uploadedImgData);
     document.getElementById(`${file.id}`).parentElement.classList.remove('preview');
     document.getElementById(`${file.id}`).parentElement.classList.add('done');
     //console.log(imgTag);
   }
  }).catch(err => {
    console.log(err);
  })
} 