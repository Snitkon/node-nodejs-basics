import * as fs from 'fs';
import * as path from 'path';

const remove = async () => {
	const fileToRemove = 'files/fileToRemove.txt';
	const workFilePath = process.argv[1];
	const dirname = path.dirname(workFilePath);
	const pathForRemove = path.join(dirname, fileToRemove);
	fs.unlink(pathForRemove, err => {
		if (err) throw new Error('FS operation failed');

		console.warn('FILE DELETED');
	});
};

await remove();
