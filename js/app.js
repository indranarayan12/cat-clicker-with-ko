var initialCats = [
    {
        imgSrc: 'img/cat1.jpg',
        clickCount: 0,
        name: 'cuty',
        imgAttribution:'Indra1',
        nickNames:['cuty', 'huty', 'juty', 'buty']

    },
    {
        imgSrc: 'img/cat2.jpg',
        clickCount: 0,
        name: 'puty',
        imgAttribution:'Indra2',
        nickNames:['suty']
    },
    {
        imgSrc: 'img/cat3.jpg',
        clickCount: 0,
        name: 'suty',
        imgAttribution:'Indra3',
        nickNames:['luty']
    },
    {
        imgSrc: 'img/cat4.jpg',
        clickCount: 0,
        name: 'nuty',
        imgAttribution:'Indra4',
        nickNames:['futy']
    },
    {
        imgSrc: 'img/cat5.jpg',
        clickCount: 0,
        name: 'duty',
        imgAttribution:'Indra5',
        nickNames:['duty']
    },
    {
        imgSrc: 'img/cat6.jpg',
        clickCount: 0,
        name: 'zuty',
        imgAttribution:'Indra6',
        nickNames:['cuty']
    },
    {
        imgSrc: 'img/cat7.jpg',
        clickCount: 0,
        name: 'wuty',
        imgAttribution:'Indra7',
        nickNames:['wuty']
    }
]


var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickNames = ko.observableArray(data.nickNames);

    this.maturity = ko.computed(function(){
        var clicks = this.clickCount();
        if(clicks < 10) {
            return 'Newborn';
        } else if (clicks < 50) {
            return 'Infant';
        } else if (clicks < 100) {
            return 'Child';
        } else if(clicks < 200) {
            return 'Teen';
        } else if(clicks < 500) {
            return 'Adult';
        } else {
            return 'Ninja';
        }
    },this);
}



var viewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);
    console.log(this.currentCat);

    this.setCat = function(clickedCat) {
        self.currentCat(clickedCat);
        console.log(this.currentCat);
    };

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount()+1);
    };
}

ko.applyBindings(new viewModel());