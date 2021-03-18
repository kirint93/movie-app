(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Team Knowhow\development\movie-app\src\main.ts */"zUnb");


/***/ }),

/***/ "2KVW":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var src_assets_movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/movies */ "EgNV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MovieService {
    constructor() { }
    getMovie() {
        return src_assets_movies__WEBPACK_IMPORTED_MODULE_0__["movieArray"];
    }
}
MovieService.ɵfac = function MovieService_Factory(t) { return new (t || MovieService)(); };
MovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MovieService, factory: MovieService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EgNV":
/*!******************************!*\
  !*** ./src/assets/movies.ts ***!
  \******************************/
/*! exports provided: aboutTime, forrestGump, Nightcrawler, theHelp, immitationGame, dieHard, Intouchables, Big, goneGirl, theMartian, toyStory, Insideout, shutterIsland, movieArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutTime", function() { return aboutTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forrestGump", function() { return forrestGump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nightcrawler", function() { return Nightcrawler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theHelp", function() { return theHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immitationGame", function() { return immitationGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dieHard", function() { return dieHard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intouchables", function() { return Intouchables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Big", function() { return Big; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goneGirl", function() { return goneGirl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theMartian", function() { return theMartian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toyStory", function() { return toyStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Insideout", function() { return Insideout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shutterIsland", function() { return shutterIsland; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movieArray", function() { return movieArray; });
const aboutTime = {
    title: 'About Time',
    year: '2013',
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/7c/About_Time_%282013_film%29_Poster.jpg',
    description: 'Romantic comedy  about a young man with the ability to time travel who tries to change his past in hopes of improving his future.'
};
const forrestGump = {
    title: 'Forrest Gump',
    year: '1994',
    poster: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    description: 'Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.'
};
const Nightcrawler = {
    title: 'Nightcrawler',
    year: '2014',
    poster: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Nightcrawlerfilm.jpg',
    description: ' Louis "Lou" Bloom, a stringer  records violent events late at night in Los Angeles and sells the footage to a local television news station..'
};
const theHelp = {
    title: 'The Help',
    year: '2011',
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/b5/Help_poster.jpg',
    description: 'Skeeter, an aspiring author, decides to write a book on African-American maids and the struggles they face on a daily basis.'
};
const immitationGame = {
    title: 'Immitation Game',
    year: '2014',
    poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/The_Imitation_Game_%282014%29.png',
    description: 'A true story about Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code during WW2 '
};
const dieHard = {
    title: 'Die Hard',
    year: '1988',
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Die_hard.jpg',
    description: ' It follows New York City police detective John McClane  who is caught up in a terrorist takeover of a Los Angeles skyscraper while visiting his estranged wife..'
};
const Intouchables = {
    title: 'The Intouchables',
    year: '2011',
    poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/The_Intouchables.jpg',
    description: 'An unusual friendship develops when a street smart immigrant is hired to take care of a disabled French nobleman.'
};
const Big = {
    title: 'Big',
    year: '1988',
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/be/Big_Poster.jpg',
    description: 'A young boy wishes to be big and then is aged to adulthood overnight'
};
const goneGirl = {
    title: 'Gone Girl',
    year: '2014',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_UY1200_CR92,0,630,1200_AL_.jpg',
    description: 'Nick Dunne discovers that the entire media focus has shifted on him when his wife Amy Dunne disappears on the day of their fifth wedding anniversary.'
};
const theMartian = {
    title: 'The Martian',
    year: '2015',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51dW0YbJlBL._AC_SY400_.jpg',
    description: 'DescriptionWhen astronauts blast off from the planet Mars, they leave behind Mark Watney (Matt Damon), presumed dead after a fierce storm. With only a meager amount of supplies, the stranded visitor must utilize his wits and spirit to find a way to survive on the hostile planet'
};
const toyStory = {
    title: 'Toy Story ',
    year: '1995',
    poster: 'https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg',
    description: 'Taking place in a world were toys come to life when humans are not present it focuses  on the relationship between an old-fashioned pull-string cowboy doll named Woody and an astronaut action figure, Buzz Lightyear, as they evolve from rivals competing for the affections of their owner to friends.'
};
const Insideout = {
    title: 'Inside out',
    year: '2015',
    poster: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg',
    description: 'Animated film set in the mind of a young girl named Riley, where five personified emotions—Joy, Sadness, Anger, Fear, and Disgust—try to lead her through life as she and her parents adjust to their new surroundings.'
};
const shutterIsland = {
    title: 'Shutter Island',
    year: '2010',
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg',
    description: 'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.'
};
const movieArray = [shutterIsland, Insideout, toyStory, aboutTime, forrestGump, Nightcrawler, theHelp, immitationGame, Big, Intouchables, dieHard, goneGirl];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/movie-list/movie-list.component */ "cCrV");



class AppComponent {
    constructor() {
        this.title = 'movie-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-movie-list");
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_2__["MovieListComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFBMUIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBcclxuKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/movie-card/movie-card.component */ "rwoW");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/movie-list/movie-list.component */ "cCrV");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie.service */ "2KVW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_movie_service__WEBPACK_IMPORTED_MODULE_5__["MovieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_2__["MovieCardComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
        _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_4__["MovieListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "cCrV":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/movie.service */ "2KVW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie-card/movie-card.component */ "rwoW");




function MovieListComponent_app_movie_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-movie-card", 2);
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie", movie_r1);
} }
class MovieListComponent {
    constructor(_movieService) {
        this._movieService = _movieService;
        this.movieArray = [];
    }
    ngOnInit() {
        this.movieArray = this._movieService.getMovie();
    }
}
MovieListComponent.ɵfac = function MovieListComponent_Factory(t) { return new (t || MovieListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"])); };
MovieListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieListComponent, selectors: [["app-movie-list"]], decls: 2, vars: 1, consts: [[1, "movie-list"], ["movie-card", "", 3, "movie", 4, "ngFor", "ngForOf"], ["movie-card", "", 3, "movie"]], template: function MovieListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieListComponent_app_movie_card_1_Template, 1, 1, "app-movie-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movieArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_3__["MovieCardComponent"]], styles: [".movie-list[_ngcontent-%COMP%] {\n  background-color: #16163f;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3ZpZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQWdDO0VBQ2hDLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUF2QiIsImZpbGUiOiJtb3ZpZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBcclxuLm1vdmllLWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMiwgMjIsIDYzKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NavBarComponent {
    constructor() {
        this.isOpen = false;
    }
    toggleMenu() {
        this.isOpen = !this.isOpen;
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 5, vars: 0, template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FilmWorm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " A few must watch films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["nav[_ngcontent-%COMP%] {\n  height: 200px;\n  font-size: 2em;\n}\n\nnav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-left: 40%;\n  color: red;\n}\n\nnav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0ksYUFBYTtFQUNiLGNBQWM7QUFIbEI7O0FBSEE7RUFTTSxpQkFBaUI7RUFDakIsVUFBVTtBQUZoQjs7QUFSQTtFQWNTLGlCQUFnQjtBQUZ6QiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgXHJcblxyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIFxyXG4gICAgaDEge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDQwJTtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICBcclxuICAgICBwe1xyXG4gICAgICAgICBwYWRkaW5nLWxlZnQ6NDAlO1xyXG4gICAgIH1cclxuICAgXHJcbiAgICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ "rwoW":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-card/movie-card.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCardComponent", function() { return MovieCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MovieCardComponent {
    constructor() { }
    ngOnInit() {
        this.altText = `A poster for this movie ${this.movie.title}`;
    }
}
MovieCardComponent.ɵfac = function MovieCardComponent_Factory(t) { return new (t || MovieCardComponent)(); };
MovieCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieCardComponent, selectors: [["app-movie-card"]], inputs: { movie: "movie" }, decls: 10, vars: 4, consts: [[1, "movie-card"], [1, "card"], ["alt", "altText", 3, "src"], [1, "description"]], template: function MovieCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.movie.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.description);
    } }, styles: [".movie-card[_ngcontent-%COMP%] {\n  border: 2px solid white;\n  position: relative;\n  height: 420px;\n  width: 250px;\n  padding-top: 10px;\n  margin: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: solid gray 2px;\n  text-align: center;\n  color: purple;\n  background-color: darkgrey;\n  cursor: pointer;\n}\n\n.movie-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 318px;\n  width: 250px;\n}\n\n.description[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: darkgray;\n  position: absolute;\n  top: 0;\n  opacity: 0;\n}\n\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 5px;\n  top: 25%;\n  color: black;\n  font-size: 1.3em;\n}\n\n.description[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3ZpZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGVBQWU7QUFDbkI7O0FBZkE7RUFpQk0sYUFBYTtFQUNiLFlBQVk7QUFFbEI7O0FBRUU7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7QUFDZDs7QUFWRTtFQVlJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVk7RUFDWixnQkFBZ0I7QUFFdEI7O0FBbEJFO0VBb0JJLFVBQVU7QUFFaEIiLCJmaWxlIjoibW92aWUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS1jYXJkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXI6IHNvbGlkIGdyYXkgMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHB1cnBsZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAzMThweDtcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICBcclxuICAgIHB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIHRvcDogMjUlO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map