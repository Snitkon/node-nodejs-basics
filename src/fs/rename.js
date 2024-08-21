import fs from 'fs';

const rename = async () => {
	const wrongFilename = './src/fs/files/wrongFilename.txt';
	const properFilename = './src/fs/files/properFilename.md';
	fs.access(wrongFilename, err => {
		if (err) {
			console.error('FS operation failed 1');
		} else {
			fs.access(properFilename, err => {
				if (!err) {
					console.error('FS operation failed 2');
				} else {
					fs.rename(wrongFilename, properFilename, () => {});
				}
			});
		}
	});
};

await rename();
