import { Property } from './interfaces';
export declare class Instance {
    referent: string;
    class: string;
    children: Instance[];
    properties: {
        [name: string]: Property;
    };
    parent?: Instance;
    setParent(newParent: Instance): void;
    Clone(): Instance;
    getDescendants(): Instance[];
    constructor(className?: string, parent?: Instance);
}
