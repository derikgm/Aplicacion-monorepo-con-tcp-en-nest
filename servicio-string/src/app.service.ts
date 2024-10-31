import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  revisarString(data: Array<string>){

    const datos = {
      mensaje: "string recibido",
      array: data,
      cantidad_de_strings: data.length
    }

    return datos;
  }

}
