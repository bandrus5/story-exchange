import { Injectable } from "@angular/core";
import { User } from "../types/User";
import { Story } from "../types/Story";
import { ReviewReservation } from "../types/ReviewReservation";

@Injectable()
export class DataStore {
    loggedInUser: User|null;
    allUsers: User[];
    allStories: Story[];
    allReviewReservations: ReviewReservation[];

    loremText = "Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque non euismod liber Pellentesque ac augue lobortis facilisis magna ut molestie odio Ut sollicitudin condimentum venenati Praesent ultricies feugiat augue non".toLowerCase().split(" ");
    userNames = ["bettyTheBot", "tommyj", "shj1996", "megera", "bandr", "mstbrn", "hotman"];
    genres = "Mystery Sci-Fi Fantasy Drama Romance Biography Humor".split(" ");

    static instance: DataStore = null;
    public static getInstance() {
        if (DataStore.instance == null) {
            DataStore.instance = new DataStore();
        }
        return DataStore.instance;
    }

    private constructor() {
        this.loggedInUser = null;
        this.allUsers = [];
        this.allStories = [];
        this.allReviewReservations = [];
        this.generateUsers();
        this.generateStories();
        // this.generateReviews();
    }

    addUsers(users: User[]) {
        users.forEach(user => {
            this.allUsers.push(user);
        });
    }

    addStories(stories: Story[]) {
        this.allStories.push(...stories);
    }

    addReviewReservations(revRes: ReviewReservation[]) {
        this.allReviewReservations.push(...revRes);
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

    getAllStories() {
        return this.allStories;
    }

    generateStories() {
        const story = new Story("A Wonderous Journey", "a123", "tommyj", "Biography", "superfakelink.com", "This story is going to be pretty boring unless you care about Western Canadian history, fair warning :)", 192560, new Date(), 12, []);
        const story2 = new Story("Modestly Mean", "a124", "shj1996", "Romance", "inkitt.com/also-fake", "This is the first story I've ever finished!! I hope you like it, thanks for reviewing!", 43567, new Date(), 8, []);
        const story3 = new Story("Uncovered", "uncovered", "bettyTheBot", "Sci-Fi", "http://berkeleyandrus.com/novels/Uncovered.pdf", "A super-hero action story with a bit of mystery mixed in...needs work, but plot has potential", 98567, new Date(), 10, []);
        const story4 = new Story("Those Ills We Bear", "TIWB", "bettyTheBot", "Drama", "inkitt.com/so-fake", "The story of Hamlet, gender bent and put in a modern setting", 49230, new Date(), 7, []);
        let allStories = [story, story2, story3, story4];
        for (var i = 0; i < 30; i++) {
            debugger;
            this.shuffleLoremText();
            const title = this.loremText[2] + ' ' + this.loremText[3] + ' ' + this.loremText[4];
            debugger;
            const id = title + Math.random().toString();
            const blurb = this.loremText.slice(5, 18).join();
            const userName = this.userNames[Math.floor(Math.random()*this.userNames.length+1)];
            const genre = this.genres[Math.floor(Math.random()*this.genres.length+1)];
            const link = "superfakelink.com";
            const wordCount = 35000 + Math.floor(Math.random()*100000);
            const desiredReviews = 4 + Math.floor(Math.random()*12);
            allStories.push(new Story(title, id, userName, genre, link, blurb, wordCount, new Date(), desiredReviews, []));
        }
        this.addStories(allStories);
    }

    generateUsers() {
        const user1 = new User("bettyTheBot", "betty@mailinator.com", [], [], 56);
        const user2 = new User("tommyj", "tom@mailinator.com", [], [], -12);
        const user3 = new User("shj1996", "sash@mailinator.com", [], [], 119);
        const user4 = new User("megera", "booky@mailinator.com", [], [], 95);
        const user5 = new User("bandr", "band@mailinator.com", [], [], 12);
        const user6 = new User("mstbrn", "mist@mailinator.com", [], [], 64);
        const user7 = new User("hotman", "flameo@mailinator.com", [], [], 44);

        this.allUsers = [user1, user2, user3, user4, user5, user6, user7];
    }

    generateReviews() {
        const stories = this.getAllStories();
        for (var i = 0; i < 30; i++) {
            const story = stories[Math.floor(Math.random()*stories.length+1)];
            const reviewer = this.userNames[Math.floor(Math.random()*this.userNames.length+1)];
            if (reviewer == story.author) {
                i--;
                continue;
            }
            const reservation = new ReviewReservation(story.title, reviewer, new Date());
            this.addReviewReservations([reservation]);
        }
        for (var i = 0; i < 60; i++) {
            this.shuffleLoremText();
            const story = stories[Math.floor(Math.random()*stories.length+1)];
            const reviewer = this.userNames[Math.floor(Math.random()*this.userNames.length+1)];
            if (reviewer == story.author) {
                i--;
                continue;
            }
            const reviewText = this.loremText.splice(1, 40).join();
            const review = new ReviewReservation(story.title, reviewer, new Date(), new Date(), reviewText);
            this.addReviewReservations([review]);
        }
        const goodReview = new ReviewReservation("Uncovered", "shj1996", new Date());
        const goodReview2 = new ReviewReservation("Those Ills We Bear", "tommyj", new Date(), new Date(), "This was a great story! I really liked your characters. I felt like I could never predict what Jessica would do, but I actually kind of loved that about her character. I thought the plot was pretty good, but the first quarter was a little slow for me. Chapters 4 and 5 felt like they could be combined, for example, and I don't see why chapter 7 is there at all. The biggest weakness though was with setting - I never felt like I had a good idea of where the characters were. Take some time to describe the buildings, the weather, the yellow wallpaper, whatever it takes to give me some hints and let my imagination do the rest.");
        this.addReviewReservations([goodReview, goodReview2]);
    }

    shuffleLoremText() {
        for (var i = 0; i < 100; i++) {
            var randomIndex = Math.floor(Math.random()*(this.loremText.length));
            var randomIndex2 = Math.floor(Math.random()*(this.loremText.length));
            var temp = this.loremText[randomIndex];
            this.loremText[randomIndex] = this.loremText[randomIndex2];
            this.loremText[randomIndex2] = temp;
        }
    }

}