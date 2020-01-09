export class TypeEpp {
    TypeEPPName: string;
    TypeEPPValue: number;
}

export class agent {
    IdAgent: number;
}

export class InformationParlayPlayer{
    IdPlayer: number;
    Player: string;
    Idwager: number;
    IdTicketNumber: number;
    IdUser: number; 
    User: string;
    Ip: string;
    GameDateTime: Date;
    IdSport: string; 
    DescriptionDetail: string;
    RiskAmount: number;
    winAmount: number;
    DescriptionHeader: string;
}


export class InformationParlayDetails
{
    player: string; 
    idPlayer: number;
    Idwager: number;
    User: string;
    GameDateTime: Date;
    IdSport: string;
    DescriptionDetail: string;
}
