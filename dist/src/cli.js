"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const main_1 = require("./main");
const promptForOptions = () => __awaiter(void 0, void 0, void 0, function* () {
    const questions = [
        {
            type: 'list',
            name: 'template',
            message: 'Please choose a README template',
            choices: ['Basic-Client', 'Third-Party-Client', 'Third-Party-Server'],
            default: 'Basic-Client',
        },
    ];
    const answers = yield inquirer_1.default.prompt(questions);
    return {
        template: answers.template,
    };
});
function cli(args) {
    return __awaiter(this, void 0, void 0, function* () {
        args;
        const usersOptions = yield promptForOptions();
        yield main_1.createProject(usersOptions);
    });
}
exports.cli = cli;
//# sourceMappingURL=cli.js.map