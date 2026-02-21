const Jimp = require('jimp');

async function processImage(inputPath, outputPath, minBrightness) {
    try {
        const image = await Jimp.read(inputPath);

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const range = 255 - minBrightness;

            // Tylko jeśli piksel nie jest w 100% przezroczysty
            if (this.bitmap.data[idx + 3] > 0) {
                // Skrypt z Twojego kodu:
                this.bitmap.data[idx] = minBrightness + (this.bitmap.data[idx] / 255) * range;     // R
                this.bitmap.data[idx + 1] = minBrightness + (this.bitmap.data[idx + 1] / 255) * range; // G
                this.bitmap.data[idx + 2] = minBrightness + (this.bitmap.data[idx + 2] / 255) * range; // B
            }
        });

        await image.writeAsync(outputPath);
        console.log(`Zapisano ${outputPath}`);
    } catch (err) {
        console.error('Błąd:', err);
    }
}

// Wywołujemy z tym samym parametrem co w kodzie (LINE_SOFTNESS = 120)
processImage('./public/textures/gallery/domki.webp', './public/textures/gallery/domki.webp', 120);
processImage('./public/textures/gallery/railing.webp', './public/textures/gallery/railing.webp', 120);
