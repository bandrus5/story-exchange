class ReviewReservation {
    story: string;
    reviewer: string;
    dateReserved: Date;
    reviewCompleted: Date|null;
    reveiwText: string|null;

    constructor(story: string, reviewer: string, dateReserved: Date, reviewCompleted?: Date, reviewText?: string) {
        this.story = story;
        this.reviewer = reviewer;
        this.dateReserved = dateReserved;
        this.reviewCompleted = reviewCompleted;
        this.reveiwText = reviewText;
    }
}