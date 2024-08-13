import * as fs from 'fs';

const create = async () => {
	const dir = './src/fs/files/fresh.txt';
	const text = 'I am fresh and young';

	fs.readFile(dir, err => {
		if (err) {
			fs.writeFile(dir, text, () => {});
			console.info('File add');
		} else {
			console.error('FS operation failed');
		}
	});
};

await create();
