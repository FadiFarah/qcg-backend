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
}

export interface player extends baseEntity {
    gameId: string;
    userId: string;
    isWin: boolean;
    cards: card[];
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
    category: category;
    remainingCards: card[];
}

export interface room extends baseEntity {
    roomMaster: user;
    roomName: string;
    roomPassword: string;
    category: category;
    currentUsers: user[];
    isWaiting: boolean;
    isPublic: boolean;
}