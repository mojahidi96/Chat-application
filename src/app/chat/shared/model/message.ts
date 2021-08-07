import { User } from './user';
import { Action } from './action';
import { Point } from './location';

export interface Message {
    from?: User;
    content?: any;
    action?: Action;
    location?: Point,
    imageUrl?: string
}

