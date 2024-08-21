import fs from 'fs';
import path from 'path';

const list = async () => {
	const __dirname = import.meta.dirname;
	const pathToDir = path.join(__dirname, 'files');
	fs.readdir(pathToDir, (err, data) => {
		if (err) throw new Error('FS operation failed');
		console.log(data);
	});
};

await list();
