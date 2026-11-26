import app from "./src/app";
import { config } from "./src/config";

app.listen(config.svs.port, config.svs.host, () => {
    console.log(
        `${config.svs.name} is running on port ${config.svs.port} in ${config.svs.environment} mode.`
    )
})