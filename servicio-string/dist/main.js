"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
const logger = new common_1.Logger('Main');
const microServiceOptions = {
    transport: microservices_1.Transport.TCP,
    options: {
        host: '127.0.0.2',
        port: 3002
    }
};
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, microServiceOptions);
    app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map