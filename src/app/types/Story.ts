class Story {
    title: string;
    storyID: string;
    author: string;
    genre: string;
    link: string;
    blurb: string;
    wordCount: number;
    datePosted: Date;
    desiredReviews: number;
    completedReviews: ReviewReservation[];

    constructor(title: string, storyID: string, author: string, genre: string, link: string, blurb: string, wordCount: number, datePosted: Date, desiredReviews: number, completedReviews: ReviewReservation[]) {
        this.title = title;
        this.storyID = storyID;
        this.author = author;
        this.genre = genre;
        this.link = link;
        this.blurb = blurb;
        this.wordCount = wordCount;
        this.datePosted = datePosted;
        this.desiredReviews = desiredReviews;
        this.completedReviews = completedReviews;
    }

    getReviewsLeft(): number {
        return this.desiredReviews - this.completedReviews.length; 
    }
}