import {observable, computed, action, makeObservable} from 'mobx';
import moment from 'moment';
import Timer from './Timer'

export default class TimerStore {

	isRunning = false;
	timer = 0;
	startTime = 0;
	laps = 0;

	get mainDisplay() {
		return this.timer.display;
	}

	get hasStarted() {
		return this.timer.totalMilliSeconds !== 0;
	}

	measure() {
		if (!this.isRunning) return;

		this.timer.milliseconds = moment().diff(this.startTime);

		setTimeout(() => this.measure(), 10);
	}

	startTimer() {
		if (this.isRunning) return;
		this.isRunning = true;
		this.startTime = moment();
		this.measure();
	}

	get length() {
		return this.laps.length;
	}

	get lapTime() {
		return this.laps.map((el) => el.totalMilliSeconds)
			.reduce((x, y) => x + y, 0);
	}

	lapTimer() {
		console.log(this.laps)
		this.laps.push(new Timer(this.timer.totalMilliSeconds - this.lapTime));
	}

	get lapData() {
		const data = [];
		for (let i = 0; i < this.laps.length; i++) {
			data.push({
				lap: this.laps[i],
				text: `Atividade ${i + 1}`,
			});
		}
		return data.reverse();
	}

	stopTimer() {
		this.timer.saveTime();
		this.isRunning = false;
	}

	resetTimer() {
		this.timer.reset();
		this.laps = [];
		this.isRunning = false;
		this.startTime = 0;
	}

	setLaps(laps){
		
		var totalSeconds = 0;

		laps.map((lap) => {
			if(lap.seconds > 0){
				totalSeconds = totalSeconds + lap.seconds;
				this.laps.push(new Timer(lap.seconds * 1000));
			}
		})

		console.log("total  " + totalSeconds)

		this.timer.setTotalMilliSeconds(totalSeconds * 1000);

		console.log(this.laps)
	}

	constructor () {
		makeObservable(this, {
			mainDisplay: computed,
			hasStarted: computed,
			length: computed,
			lapTime: computed,
			lapData: computed,
			resetTimer: action,
			stopTimer: action,
			lapTimer: action,
			startTimer: action,
			measure: action,
			isRunning: observable,
			timer: observable,
			startTime: observable,
			laps: observable
		})

		this.isRunning = false;
		this.timer = new Timer();
		this.laps = [];
	}
	
}