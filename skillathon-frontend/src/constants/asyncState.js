export const ASYNC_STATE = {
  NOT_STARTED: 0,
  IN_PROGRESS: 1,
  SUCCESS: 2,
  FAILED: 3,
};

export const isInitializing = state =>
  [ASYNC_STATE.NOT_STARTED, ASYNC_STATE.IN_PROGRESS].includes(state);

export const isLoading = state => state === ASYNC_STATE.IN_PROGRESS;
export const isSuccess = state => state === ASYNC_STATE.SUCCESS;
export const isFailed = state => state === ASYNC_STATE.FAILED;
