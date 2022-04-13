import { environment } from "../environments/environment";

export class Limitations {
    public static MaxPlayers: number = 4;
    public static MinPlayers: number = 2;
    public static cardsInDeck: number = 36;
    public static cardsInHand: number = 4;
    public static categoryGroups: number = this.cardsInDeck / this.cardsInHand;
}

export class Endpoints {
    private static _signalRRoomsListEndpointPrefix: string = environment.signalRRoomsListEndpointPrefix;
    public static RoomsListUpdated: string = `${Endpoints._signalRRoomsListEndpointPrefix}/roomsListUpdated`;
}