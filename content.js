let photos = document.getElementsByTagName('img');
const marleyPhoto = chrome.runtime.getURL('marley.png');

console.log(`number of images: ${photos.length}`);

for (let imgTag of photos) {
    imgTag.setAttribute('src', marleyPhoto);
    imgTag.setAttribute('height', 180);
    imgTag.setAttribute('width', 180); 
}
