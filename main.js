import "./style/style.scss";
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("calculator", () => ({
    day: "",
    month: "",
    year: "",
    result: [],
    isDayError: false,
    dayErrorMessage: "",
    isMonthError: false,
    monthErrorMessage: "",
    isYearError: false,
    yearErrorMessage: "",
    validateDay() {
        if (this.day === "") {
            this.isDayError = true;
            this.dayErrorMessage = "This field is required";
        } else if (this.day > 31) {
            this.isDayError = true;
            this.dayErrorMessage = "Day must be less than 31";
        } else {
            this.isDayError = false;
            this.dayErrorMessage = "";
        }
    },

    validateMonth() {
        if (this.month === "") {
            this.isMonthError = true;
            this.monthErrorMessage = "This field is required";
        } else if (this.month > 12) {
            this.isMonthError = true;
            this.monthErrorMessage = "Month must be less than 12";
        } else {
            this.isMonthError = false;
            this.monthErrorMessage = "";
        }
    },
    
    validateYear() {
        if (this.year === "") {
            this.isYearError = true;
            this.yearErrorMessage = "This field is required";
        } else if (this.year > 2023) {
            this.isYearError = true;
            this.yearErrorMessage = "Year must be less than 2023";
        } else {
            this.isYearError = false;
            this.yearErrorMessage = "";
        }
    },
    
    getResult() {
        this.validateDay();
        this.validateMonth();
        this.validateYear();
        if (this.isDayError || this.isMonthError || this.isYearError) {
            return
        }
        const currentDate = new Date();
        const birthDate = new Date(this.year, this.month - 1, this.day);
        const ageInMillis = currentDate - birthDate;
        const ageInDate = new Date(ageInMillis);
        const day = ageInDate.getDate() - 1;
        const month = ageInDate.getMonth();
        const year = ageInDate.getFullYear() - 1970;
        this.result = [day, month, year];
    }
}));

Alpine.start();
