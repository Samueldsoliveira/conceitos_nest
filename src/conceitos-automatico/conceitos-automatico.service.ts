import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {
    @Get()
    conceitosHome(): string {
        return 'Retorno do service automatizado';
    }
}
