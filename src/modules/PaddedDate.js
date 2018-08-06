// Our json indexes are 0 padded, we need to normalise getSeconds, getMinutes andßßß getHours
class PaddedDate {
  constructor() {
    // validations is an array of validation rules specific to a form
    this.date = new Date();
  }

  getHours() {
    let hours = this.date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return hours;
  }

  getMinutes() {
    let minutes = this.date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return minutes;
  }

  getSeconds() {
    let seconds = this.date.getSeconds();
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return seconds;
  }
}

export default PaddedDate;
