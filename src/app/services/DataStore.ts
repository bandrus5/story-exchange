class DataStore {
    loggedInUser: User|null;
    allUsers: User[];
    allStories: Story[];
    allReviewReservations: ReviewReservation[];

    constructor() {
        this.loggedInUser = null;
        this.allUsers = [];
        this.allStories = [];
        this.allReviewReservations = [];
    }

    logInUser(user: User) {
        this.loggedInUser = user;
    }

    getPostedStories(): Story[] {
        return this.loggedInUser.getPostedStories();
    }

    getReservedStories(): ReviewReservation[] {
        return this.loggedInUser.getReservedStories();
    }

    getCredit(): number {
        return this.loggedInUser.getCredit();
    }

    searchStories(searchQuery: string): Story[] {
        return this.allStories.filter(story => {
            (story.author.includes(searchQuery) || 
            story.genre.includes(searchQuery) || 
            story.title.includes(searchQuery)) &&
            story.author !== this.loggedInUser.getName();
        }).sort((a, b) => {
            return a.getReviewsLeft() - b.getReviewsLeft();
        });
    }

}