import { GET_METRICS, ADD_METRIC, METRIC_ERROR } from './types';

export default (state, action) => {
  switch (action.type) {
    case GET_METRICS:
      return {
        ...state,
        metrics: action.payload,
        loading: false,
      };
    case ADD_METRIC:
      return {
        ...state,
        metrics: [action.payload, ...state.metrics],
        loading: false,
      };
    case METRIC_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
