export const pending = state => {
  state.loading = true;
  state.error = null;
};

export const rejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};
