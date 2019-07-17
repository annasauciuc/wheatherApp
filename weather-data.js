class Weather {

    constructor(cityName, description, country) {
        this.cityName = cityName;
        this.description = description;
        this.country = country;
        this._temperature = '';
        this._clouds = '';
    }


    get temperature() {
        return this._temperature;
    }

    set temperature(value) {
        this._temperature = (value * 1.8 + 32).toFixed(2) + 'F.';
    }

    get clouds() {
        return this._clouds;
    }

    set clouds(value) {
        this._clouds = `To many ${value} !!!`;
    }
}
