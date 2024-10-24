import { EOL } from 'os';
import { parse } from '@fast-csv/parse';

const CSV_STRING = ['a1\tb1', 'a2\tb2'].join(EOL);

const stream = parse({ delimiter: '\t' })
    .on('error', (error) => {
        return console.error(error);
    })
    .on('data', (row) => {
        return console.log(row);
    })
    .on('end', (rowCount: number) => {
        return console.log(`Parsed ${rowCount} rows`);
    });

stream.write(CSV_STRING);
stream.end();

// Output:
// [ 'a1', 'b1' ]
// [ 'a2', 'b2' ]
// Parsed 2 rows
