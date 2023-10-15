import fs from 'fs';

const data = {
    kanjiList: [
        {kanji: '一', keyword: 'one'},
        {kanji: '二', keyword: 'two'},
    ]
};

const jsonData = JSON.stringify(data, null, 2);

const filePath = 'rtkChapter1.json';

fs.writeFile(filePath, jsonData, (err) => {
    if (err) {
        console.log('Error loading JSON: ', err);
    } else {
        console.log('JSON written successfully.')
    }
});