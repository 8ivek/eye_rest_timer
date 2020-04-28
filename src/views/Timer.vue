<template>
  <div>
    <h1>Rest Your Eye</h1>
    <p>
      Doctors recommend looking away 20 feet for 20 seconds every 20 minutes.
    </p>
    <div class="look_away" v-if="look_away_from_keyboard">
      Look away from your screen
    </div>
    <div class="bar">
      <span>{{ display_time }}</span>
    </div>
    <div>
      Select an interval:
      <select v-model="minutes">
        <option value="5">5 seconds</option>
        <option value="1200">20 minutes</option>
        <option value="2400">40 minutes</option>
        <option value="3600">60 minutes</option>
      </select>
    </div>
    <div>
      Volume:
      <input
        type="number"
        style="width:50px;"
        min="0"
        max="10"
        v-model="volume"
      />
      &nbsp;
      <button v-bind:disabled="playing_sound" @click="playAlarm">
        play alarm
      </button>
      &nbsp;
      <button v-bind:disabled="playing_sound" @click="playChime">
        play chime
      </button>
      &nbsp;
    </div>
    <div>
      <button
        v-bind:class="{ start_timer: isStartTimer, stop_timer: !isStartTimer }"
        @click="startStopTimer()"
      >
        {{ button_face }}
      </button>
    </div>
  </div>
</template>

<script>
import { Howl, Howler } from 'howler'

// Setup the new Howl for chime and alarm
const chime = new Howl({
  src: ['assets/chime.mp3']
})

const alarm = new Howl({
  src: ['assets/alarm.mp3']
})

export default {
  data() {
    return {
      current_time: 1200,
      display_time: '20 min 0 secs',
      minutes: 1200, //20*60 minutes
      seconds: 20, // look away for 20 seconds
      button_face: 'Start Timer',
      interval: null,
      timeout: null,
      status: 'minutes',
      chime: chime,
      alarm: alarm,
      volume: 7,
      playing_sound: false,
      look_away_from_keyboard: false
    }
  },
  methods: {
    decreaseTime() {
      this.current_time -= 1

      if (this.current_time === 0) {
        if (this.status === 'minutes') {
          this.alarm.play()
          this.look_away_from_keyboard = true
          this.timeout = setTimeout(() => this.startTwentySecondTimer(), 3000)
        } else {
          this.chime.play()
          this.look_away_from_keyboard = false
          this.timeout = setTimeout(() => this.startMainTimer(), 5000)
        }
      }
    },
    startStopTimer() {
      // eslint-disable-next-line no-console
      console.log(this.button_face)
      if (this.button_face === 'Start Timer') {
        this.startMainTimer()
      } else {
        this.resetTimer()
      }
    },
    resetTimer() {
      this.current_time = this.minutes
      this.button_face = 'Start Timer'
      this.status = 'minutes'
      this.look_away_from_keyboard = false
      this.playing_sound = false
      clearInterval(this.interval)
      clearTimeout(this.timeout)
    },
    startMainTimer() {
      // eslint-disable-next-line no-console
      console.log('Work timer starts')
      // clear existing timer
      clearInterval(this.interval)
      clearTimeout(this.timeout)
      this.current_time = this.minutes
      this.button_face = 'Reset Timer'
      this.status = 'minutes'
      this.interval = setInterval(this.decreaseTime, 1000)
    },
    startTwentySecondTimer() {
      // eslint-disable-next-line no-console
      console.log('Look outside timer starts')
      // clear existing timer
      clearInterval(this.interval)
      clearTimeout(this.timeout)
      this.current_time = this.seconds
      this.status = 'seconds'
      this.interval = setInterval(this.decreaseTime, 1000)
    },
    playAlarm() {
      this.alarm.play()
      this.playing_sound = true
      this.timeout = setTimeout(() => {
        this.resetTimer()
      }, 3000)
    },
    playChime() {
      this.chime.play()
      this.playing_sound = true
      this.timeout = setTimeout(() => {
        this.resetTimer()
      }, 5000)
    },
    updateDisplayTime() {
      let current_time = this.current_time
      if (current_time < 0) {
        current_time = 0
      }
      let minutes = Math.floor(current_time / 60)
      let seconds = current_time - minutes * 60
      this.display_time = minutes + ' min ' + seconds + ' secs'
    }
  },
  watch: {
    // whenever this.volume changes, this function will run
    volume: function() {
      let vol
      if (this.volume > 0) {
        vol = this.volume / 10
      } else {
        vol = 0
      }
      Howler.volume(vol)
    },
    minutes: function() {
      this.current_time = this.minutes
      this.updateDisplayTime()
      this.resetTimer()
    },
    current_time: function() {
      this.updateDisplayTime()
    }
  },
  computed: {
    isStartTimer: function() {
      return this.button_face === 'Start Timer'
    }
  }
}
</script>

<style scoped>
.bar {
  padding: 5px;
  border: 1px #ff0000 solid;
  min-width: 5px;
}
.bar span {
  color: rgb(218, 194, 194);
}
div.look_away {
  color: #ff0000;
  padding: 5px;
  font-weight: bold;
}
</style>
