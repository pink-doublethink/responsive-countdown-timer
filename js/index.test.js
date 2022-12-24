describe('jQuery countdown timer', () => {
  let clock, timeInterval, deadline;
  
  beforeEach(() => {
    clock = {
      days: jest.fn(),
      hours: jest.fn(),
      minutes: jest.fn(),
      seconds: jest.fn(),
    };
    
    timeInterval = setInterval.mock.instances[0];
    deadline = new Date();
    deadline.setDate(deadline.getHours() + 36);
  });
  
  it('calls setInterval once', () => {
    setClock(deadline);
    expect(setInterval).toHaveBeenCalledTimes(1);
  });
  
  it('clears the interval when time is up', () => {
    setClock(deadline);
    jest.advanceTimersByTime(37 * 60 * 60 * 1000 + 1);
    expect(timeInterval.clear).toHaveBeenCalledTimes(1);
  });
  
  it('displays the correct time remaining', () => {
    setClock(deadline);
    jest.advanceTimersByTime(1 * 60 * 60 * 1000 + 30 * 60 * 1000 + 15 * 1000);
    expect(clock.days.mock.calls[0][0]).toBe('00');
    expect(clock.hours.mock.calls[0][0]).toBe('01');
    expect(clock.minutes.mock.calls[0][0]).toBe('30');
    expect(clock.seconds.mock.calls[0][0]).toBe('15');
  });
  
  it('displays double digit numbers correctly', () => {
    setClock(deadline);
    jest.advanceTimersByTime(10 * 60 * 60 * 1000 + 30 * 60 * 1000 + 15 * 1000);
    expect(clock.days.mock.calls[0][0]).toBe('00');
    expect(clock.hours.mock.calls[0][0]).toBe('10');
    expect(clock.minutes.mock.calls[0][0]).toBe('30');
    expect(clock.seconds.mock.calls[0][0]).toBe('15');
  });
});