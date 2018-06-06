/**
 * [readImage description]
 * @param  {object} file      uploaded file
 * @param  {object} imgSize   containing height and width
 * @param  {function} onSuccess with parameter of dataURL
 * @param  {function} onError overwitten function
 */
const readImage = (file, imgSize, onSuccess, onError) => {
    const reader = new FileReader();
    const canvas = document.createElement('canvas');

    reader.readAsDataURL(file);
    reader.onload = (readerEvt) => {
        const img = new Image();

        img.src = readerEvt.target.result;
        img.onload = function () {
            canvas.width = imgSize.width;
            canvas.height = imgSize.height;
            const ctx = canvas.getContext('2d');

            ctx.drawImage(img, 0, 0, canvas.height, canvas.width);
            onSuccess(canvas.toDataURL());
        };
    };
    reader.onerror = onError;
};

export default {
    readImage,
};
