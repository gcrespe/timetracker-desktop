import {observable, computed, action, makeObservable} from 'mobx';
import {v4} from 'node-uuid';
import format from 'format-number-with-string';

export default class Timer {
    
    milliseconds = 0;
    savedMilliseconds = 0;
    loadedMilliseconds = 0;

    saveTime() {
        this.savedMilliseconds += this.milliseconds;
        this.milliseconds = 0;
    }

    reset() {
        this.milliseconds = this.savedMilliseconds = 0;
    }

    get totalMilliSeconds() {
        return this.milliseconds + this.savedMilliseconds;
    }

    setTotalMilliSeconds(milliseconds){
        this.savedMilliseconds = milliseconds
    }

    get display() {

        const tenMilliSeconds = parseInt((this.totalMilliSeconds) / 10, 10);

        const seconds = parseInt(tenMilliSeconds / 100, 10);
        const minutes = parseInt(seconds / 60, 10);
        const hours = parseInt(minutes / 60, 10)

        return `${format(hours, '00')} : ${format(minutes, '00')} : ${format(seconds % 60, '00')}`;
    }

    constructor (initialMilliseconds = 0) {
        makeObservable(this, {
            display: computed,
            totalMilliSeconds: computed,
            reset: action,
            saveTime: action,
            setTotalMilliSeconds: action,
            savedMilliseconds: observable,
            milliseconds: observable,
            loadedMilliseconds: observable
        })

        this.milliseconds = initialMilliseconds;
        this.savedMilliseconds = 0;
        this.id = v4();
    }
}