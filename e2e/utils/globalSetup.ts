import { FullConfig } from "@playwright/test";
import dotenv from "dotenv"

async function globalSetup(config: FullConfig) {
 if(process.env){
    dotenv.config({
        path: `.env.${process.env}`,
        override: true
    })
 }
}
export default globalSetup;