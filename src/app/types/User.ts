import { Story } from "./Story";
import { ReviewReservation } from "./ReviewReservation";

export class User {
    private name: string;
    private emailAddress: string;
    private postedStories: Story[];
    private reservedStories: ReviewReservation[];
    private credit: number;

    constructor(name: string, emailAddress: string, postedStories: Story[], reservedStories: ReviewReservation[], credit: number) {
        this.name = name;
        this.emailAddress = emailAddress;
        this.postedStories = postedStories;
        this.reservedStories = reservedStories;
        this.credit = credit;
    }

    public getPostedStories(): Story[] {
        return this.postedStories;
    }

    public getReservedStories(): ReviewReservation[] {
        return this.reservedStories;
    }

    public getCredit(): number {
        return this.credit;
    }

    public getName(): string {
        return this.name;
    }
}