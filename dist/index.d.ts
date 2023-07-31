import { Instance } from './classes';
import { Properties, Property } from './interfaces';
export { Instance, Property, Properties };
export declare class RobloxXMLParser {
    dataModel: Instance;
    parse(xmlContent: string): Promise<void>;
    convertToXML(): string;
    constructor();
}
