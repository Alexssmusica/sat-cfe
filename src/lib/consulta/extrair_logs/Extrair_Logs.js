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
Object.defineProperty(exports, "__esModule", { value: true });
exports.extrairLogs = void 0;
const SAT_Library_1 = require("../../../utils/SAT_Library");
const UTF8_Decode_1 = require("../../../utils/UTF8_Decode");
const Extrair_Logs_1 = require("../../model/consulta/extrair_logs/Extrair_Logs");
const extrairLogs = function (_numeroSessao, _codigoAtivacao) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            try {
                SAT_Library_1.ffiLibrary.ExtrairLogs.async(_numeroSessao, _codigoAtivacao, (error, resultExtrairLogs) => {
                    if (error) {
                        throw new Error(error);
                    }
                    resultExtrairLogs = UTF8_Decode_1.UTF8.decode(resultExtrairLogs);
                    const _extrairLogs = new Extrair_Logs_1.ModelExtrairLogs();
                    _extrairLogs.fromArray(resultExtrairLogs.split('|'));
                    resolve(_extrairLogs);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    });
};
exports.extrairLogs = extrairLogs;
