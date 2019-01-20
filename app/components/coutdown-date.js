import layout from '../templates/components/countdown-html';
import countdown from 'countdownjs';
import CountdownComponent from 'ember-countdown/components/countdown-component';

export default CountdownComponent.extend({
  htmlTag: 'span',
  units: countdown.DAYS |
  countdown.HOURS |
  countdown.MINUTES,
  layout,

  countdownText() {
    countdown.setLabels(
      ' millisecond| second| minute| hour| day| week| month| year| decade| century| millennium',
      ' | | minuto| hora| día| | | | | | ',
      ' ',
      ' ',
      ' ');
    const newCountdown = countdown(this.get('parsedStartDate'), this.get('parsedEndDate'), this.get('units'), this.get('max'));
    const tag = this.get('htmlTag');

    if(this.get('suffix') && newCountdown.value > 0) {
      this.set('text', `${newCountdown.toHTML(tag)} ${this.get('suffixFromNow')}`);
    } else if(this.get('suffix') && newCountdown.value < 0) {
      this.set('text', `${newCountdown.toHTML(tag)} ${this.get('suffixToNow')}`);
    } else {
      this.set('text', newCountdown.toHTML(tag));
    }
  }
});
