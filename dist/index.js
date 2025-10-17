import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
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
        console.log(`${pureInput}`);
    }
    rl.close();
}
main();
