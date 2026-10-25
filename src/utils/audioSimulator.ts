// Web Audio API speech cadence synthesizer
class AudioVoiceSimulator {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private currentTimeout: any = null;
  private onStateChange: ((playing: boolean) => void) | null = null;

  public setListener(listener: (playing: boolean) => void) {
    this.onStateChange = listener;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public stop() {
    this.isPlaying = false;
    if (this.currentTimeout) {
      clearTimeout(this.currentTimeout);
      this.currentTimeout = null;
    }
    if (this.ctx && this.ctx.state !== 'closed') {
      try {
        this.ctx.close();
      } catch (e) {
        // ignore
      }
      this.ctx = null;
    }
    if (this.onStateChange) {
      this.onStateChange(false);
    }
  }

  public playCadenceSample(durationSec = 6) {
    this.stop();
    this.isPlaying = true;
    if (this.onStateChange) {
      this.onStateChange(true);
    }

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();

      const startTime = this.ctx.currentTime;
      // Synthesize rhythmic speech phoneme-like bursts (warm baritone tone, ~140Hz with harmonic formants)
      const bursts = [
        { time: 0.1, dur: 0.22, freq: 140, gain: 0.12 },
        { time: 0.35, dur: 0.18, freq: 155, gain: 0.14 },
        { time: 0.58, dur: 0.3, freq: 135, gain: 0.1 },
        { time: 0.95, dur: 0.24, freq: 145, gain: 0.15 },
        { time: 1.25, dur: 0.2, freq: 160, gain: 0.13 },
        { time: 1.5, dur: 0.4, freq: 130, gain: 0.11 },
        { time: 2.1, dur: 0.28, freq: 148, gain: 0.14 },
        { time: 2.45, dur: 0.18, freq: 165, gain: 0.16 },
        { time: 2.7, dur: 0.35, freq: 138, gain: 0.12 },
        { time: 3.2, dur: 0.25, freq: 150, gain: 0.13 },
        { time: 3.5, dur: 0.38, freq: 132, gain: 0.1 },
        { time: 4.1, dur: 0.22, freq: 158, gain: 0.15 },
        { time: 4.4, dur: 0.3, freq: 142, gain: 0.12 },
        { time: 4.8, dur: 0.45, freq: 125, gain: 0.09 },
      ];

      bursts.forEach(({ time, dur, freq, gain }) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        // Warm speech formant filter
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(freq * 3, startTime + time);
        filter.Q.setValueAtTime(3, startTime + time);

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, startTime + time);
        // Slight inflection pitch drift like natural human voice
        osc.frequency.exponentialRampToValueAtTime(freq * 0.94, startTime + time + dur);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq * 0.5, startTime + time);

        gainNode.gain.setValueAtTime(0.001, startTime + time);
        gainNode.gain.linearRampToValueAtTime(gain, startTime + time + 0.04);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + time + dur);

        osc.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(startTime + time);
        osc2.start(startTime + time);
        osc.stop(startTime + time + dur);
        osc2.stop(startTime + time + dur);
      });

      this.currentTimeout = setTimeout(() => {
        this.stop();
      }, durationSec * 1000);
    } catch (e) {
      console.warn('AudioContext not available or blocked by user gesture', e);
      this.currentTimeout = setTimeout(() => {
        this.stop();
      }, durationSec * 1000);
    }
  }
}

export const audioSimulator = new AudioVoiceSimulator();
