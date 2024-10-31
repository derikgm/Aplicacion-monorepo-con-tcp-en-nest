import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class StringService {
    private client: ClientProxy
    
    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: '127.0.0.2',
                port: 3002
            }
        })
    }

    public revisarString(data: Array<string>) {
        return this.client.send<string>('string', data)
    }


}