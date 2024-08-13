import fs from 'fs';
// import path from 'path';

const copy = async () => {
	const main_dir = './src/fs/files';
	const copy_dir = './src/fs/files_copy';
	fs.access(main_dir, err => {
		if (err) {
			console.error('FS operation failed');
		} else {
			fs.mkdir(copy_dir, err => {
				if (err) {
					console.error('FS operation failed');
				} else {
					fs.readdir(main_dir, (err, files) => {
						if (err) console.error(err);
						if (files) {
							files.forEach(file => {
								// const sourcePath = path.join(main_dir, file);
								// const targetPath = path.join(copy_dir, file);

								const sourcePath_test = `${main_dir}/${file}`;
								const targetPath_test = `${copy_dir}/${file}`;
								fs.copyFile(sourcePath_test, targetPath_test, err => {
									if (err) {
										console.error(err.message);
									} else {
										console.log(`${file} скопирован в ${copy_dir}`);
										// console.log(sourcePath);
										// console.log(targetPath);
										console.log(sourcePath_test);
										console.log(targetPath_test);
									}
								});
							});
						}
					});
				}
			});
		}
	});
};

await copy();
