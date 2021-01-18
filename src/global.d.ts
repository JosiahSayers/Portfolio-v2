import type { Environment } from "./environments/environment.interface";

declare global {
    const environment: Environment
}
