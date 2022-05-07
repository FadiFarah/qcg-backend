export interface baseEntity {
    _id: string;
}

export interface user extends baseEntity{
    email: string;
    emailVerified: boolean;
    lastName: string;
    firstName: string;
    locale: string;
    displayName: string;
    picture: string;
    sub: string;
    password: string;
    score: number;
}

export interface player extends baseEntity {
    userId: string;
    picture: string;
    fullName: string
    isWin: boolean;
    cards: card[];
    isReady: boolean;
    isMaster: boolean;
    isTurn: boolean;
    points: number;
    isDonePlaying: boolean;
}

export interface card extends baseEntity {
    imageURL: string;
    cardName: string;
    categoryGroup: string;
    description: string;
}

export interface category extends baseEntity {
    categoryName: string;
    deck: card[];
}

export interface game extends baseEntity {
    players: player[];
    remainingCards: card[];
    roomId: string;
}

export interface room extends baseEntity {
    roomName: string;
    roomPassword: string;
    categoryName: string;
    remainingCards: card[];
    players: player[];
    isWaiting: boolean;
    isPublic: boolean;
    isGameOver: boolean;
    totalPoints: number;
}

export interface language extends baseEntity {
    isoCode: string;
    translations: translation[];
}

interface translation {
    isoCode: string;
    title: string;
}