import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { parse } from "./core/parser.js";
const rl = readline.createInterface({ input, output });
function taking_input(query) {
    return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
    while (true) {
        const input = await taking_input('> ');
        const pureInput = input.trim();
        if (pureInput == '') {
            continue;
        }
        if (pureInput == 'break') {
            break;
        }
        await parse(pureInput);
    }
    rl.close();
}
main();
