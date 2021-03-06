export enum Actions {
  INCREASE_MINUTE_LENGTH = 'INCREASE_MINUTE_LENGTH',
  DECREASE_MINUTE_LENGTH = 'DECREASE_MINUTE_LENGTH',
}

export const increaseMinuteLength = () => ({
  type: Actions.INCREASE_MINUTE_LENGTH,
})

export const decreaseMinuteLength = () => ({
  type: Actions.DECREASE_MINUTE_LENGTH,
})
