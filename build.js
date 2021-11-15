const fs = require('fs-extra');
const path = require('path');

fs.removeSync(path.join(__dirname, 'public', 'js'), { recursive: true });

fs.copySync(path.join(__dirname, 'src', 'js'), path.join(__dirname, 'public', 'js'));
