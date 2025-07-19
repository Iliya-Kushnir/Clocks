import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

(async () => {
    const files = await imagemin(['public/newImages/*.{jpg,png,svg}'], {
        destination: 'public/compressed',
        plugins: [
            imageminMozjpeg({ quality: 75 }),  
            imageminPngquant({ quality: [0.6, 0.8] }),
            imageminSvgo() 
        ]
    });

    console.log('Изображения сжаты:', files);
})();
