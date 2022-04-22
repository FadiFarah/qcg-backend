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
    private static _signalRGameEndpointPrefix: string = environment.signalRGameEndpointPrefix;

    public static RoomsListUpdated: string = `${Endpoints._signalRRoomsListEndpointPrefix}/roomsListUpdated`;
    public static GameDataUpdated: string = `${Endpoints._signalRGameEndpointPrefix}/gameDataUpdated`;
}