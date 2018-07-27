import { Aviator } from '../models/aviators';
import { Stewardess} from '../models/stewardesses';

export class Crew
{
    id: number;
    aviator: Aviator;
    stewardesses: Stewardess[];
}