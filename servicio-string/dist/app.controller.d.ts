import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    sumNumbers(data: Array<string>): Promise<{
        mensaje: string;
        array: string[];
        cantidad_de_strings: number;
    }>;
}
