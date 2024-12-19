import { Get, Injectable } from "@nestjs/common";

@Injectable()
export class ConceitosManualService {
    @Get()
    solucionaHome(): string {
        return 'Home do conceitos manual solucionada';
    }
}