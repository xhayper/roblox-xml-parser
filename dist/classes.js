"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = void 0;
const node_crypto_1 = __importDefault(require("node:crypto"));
class Instance {
    setParent(newParent) {
        const oldparent = this.parent;
        if (oldparent) {
            oldparent.children = oldparent.children.filter((x) => x.referent != this.referent);
        }
        this.parent = newParent;
        newParent.children.push(this);
    }
    Clone() {
        const clone = new Instance(this.class);
        clone.properties = this.properties;
        this.children.forEach((element) => {
            element.Clone().setParent(clone);
        });
        return clone;
    }
    getDescendants() {
        let descendants = [];
        this.children.forEach((element) => {
            descendants.push(element);
            element.getDescendants().forEach((element) => {
                descendants.push(element);
            });
        });
        return descendants;
    }
    constructor(className, parent) {
        this.children = [];
        this.referent = 'RBX' + node_crypto_1.default.randomBytes(16).toString('hex').toUpperCase();
        this.class = className ?? 'Part';
        this.properties = { Name: { value: className, type: 'string' } };
        if (parent) {
            this.setParent(parent);
        }
    }
}
exports.Instance = Instance;
