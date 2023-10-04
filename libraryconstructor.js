class Media {
    constructor(title){
      this._title = title;
      this._ratings =  [];
      this.isCheckedOut = false;
    }
  
    get title() {
      return this._title;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    set isCheckedOut(value){
      this._isCheckedOut = value;
    }
  
    getAverageRating(){
      const ratingsCount= this.ratings.reduce((accumulator, currentValue) => accumulator + currentValue);
      const arrayLength = this.ratings.length;
      return ratingsCount/arrayLength;
    }
  
    toggleCheckOutStatus(){
      if (this.isCheckedOut === false){
        this._isCheckedOut = true;
      } else {
        this._isCheckedOut = false;
      }
    }
  
    addRating(rating){
      this._ratings.push(rating);
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author(){
      return this._author;
    }
  
    get pages(){
      return this._pages;
    }
  }
  
  
  class Movie extends Media {
    constructor(title, director, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director(){
      return this._director;
    }
  
    get runTime(){
      return this._runTime;
    }
  }
  
  
  class CD extends Media {
    constructor(title, artist, songs){
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
  
    get artist(){
      return this._artist;
    }
  
    get songs(){
      return this._songs;
    }
  }
  
  /* let harryPotter = new Book('Harry Potter and the Chamber of Secrets', 'COOL LADY', '2hours');
  
  console.log(harryPotter)
  harryPotter.addRating(5);
  harryPotter.addRating(4);
  harryPotter.addRating(5);
  harryPotter.addRating(3);
  harryPotter.addRating(2);
  let harryAvgRating = harryPotter.getAverageRating();
  console.log(harryAvgRating); */