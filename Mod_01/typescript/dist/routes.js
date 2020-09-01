"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        name: 'Tharlison',
        email: 'tharlison.pro@gmail.com',
        password: '12345678',
        techs: ['Node.js',
            'React',
            'Reac-native',
            {
                title: 'Java',
                experience: 100
            },
        ],
    });
}
exports.helloWorld = helloWorld;
;
