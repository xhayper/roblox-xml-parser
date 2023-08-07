import { Properties, Property } from './interfaces';
import { Instance } from './classes';
export { Instance, Property, Properties };
export declare class RobloxXMLParser {
    dataModel: Instance;
    parse(xmlContent: string): Promise<void>;
    convertToXML(): string;
    constructor();
}
