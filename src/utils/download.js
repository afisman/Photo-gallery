export const handleDownload = (image) => {
    const url = image.url;
    fetch(url)
        .then(response => response.blob())
        .then((blob) => {
            const newUrl = window.URL.createObjectURL(blob);
            const aTag = document.createElement('a');
            aTag.href = newUrl;
            aTag.download = 'img.jpg';
            document.body.appendChild(aTag);
            aTag.click();
            aTag.parentNode.removeChild(aTag)
        })
        .catch(error => alert(`Error while trying to download ${error}`))
}