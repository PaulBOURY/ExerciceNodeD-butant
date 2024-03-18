const information = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `hello i'm ${information.nameCampus.userName} from ${information.nameCampus.campus}`,
}));