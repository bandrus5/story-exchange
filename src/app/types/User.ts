class User {
    private name: string;
    private emailAddress: string;
    private postedStories: Story[];
    private reservedStories: ReviewReservation[];
    private credit: number;

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