import { Instance } from "./classes";
import { Properties, PropertiesXML, InstanceXML } from "./interfaces";
export declare function convertProperties(properties: Properties): PropertiesXML;
export declare function parseProperties(properties: PropertiesXML): Properties;
export declare function parseInstance(instance: {
    [name: string]: any;
}): Instance;
export declare function convertInstance(instance: Instance): InstanceXML;
