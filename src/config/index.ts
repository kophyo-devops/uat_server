import { svsConfig } from "./svs.config";

export const config = Object.freeze({
    svs: svsConfig,
});

export type Config = typeof config;

export {
    svsConfig,
}