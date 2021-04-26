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
exports.createProject = void 0;
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = __importDefault(require("fs"));
const ncp_1 = __importDefault(require("ncp"));
const util_1 = require("util");
const access = util_1.promisify(fs_1.default.access);
const copy = util_1.promisify(ncp_1.default);
function copyTemplateFiles(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return copy(options.templateDirectory, options.targetDirectory, {
            clobber: false,
        });
    });
}
function createProject(options) {
    return __awaiter(this, void 0, void 0, function* () {
        options = Object.assign(Object.assign({}, options), { targetDirectory: process.cwd() });
        let rootDirectory;
        if (__dirname.includes('dist')) {
            rootDirectory = __dirname.split('dist')[0];
            console.log('thus proves we run from within .js context');
        }
        options.templateDirectory = (rootDirectory +
            `${'/'}` +
            'templates' +
            '/' +
            options.template).replace(/\//g, '\\');
        console.log((rootDirectory + 'templates' + '/' + options.template).replace(/\//g, '\\'));
        try {
            yield access(options.templateDirectory, fs_1.default.constants.R_OK);
        }
        catch (err) {
            console.error('%s Invalid template name', chalk_1.default.red.bold('ERROR'));
            process.exit(1);
        }
        console.log('Copying README file');
        yield copyTemplateFiles(options);
        console.log('%s template ready', chalk_1.default.green.bold('DONE'));
        return true;
    });
}
exports.createProject = createProject;
//# sourceMappingURL=main.js.map