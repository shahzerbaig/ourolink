class AnimationOnLoadProperties {
  private _delay: number = 0;
  private _translateY: number = 50;

  delay(val?: number): number {
    if (val) {
      return val;
    }

    this._delay = this._delay + 0.08;

    return this._delay;
  }

  setTranslateY(val: number): void {
    this._translateY = val;
  }

  get translateY(): number {
    return this._translateY;
  }
}

export default AnimationOnLoadProperties;
