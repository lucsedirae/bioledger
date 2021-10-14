//* Dependencies
import { useReducer } from 'react';
import axios from 'axios';
import MetricContext from './metricContext';
import metricReducer from './metricReducer';
import { GET_METRICS, ADD_METRIC, METRIC_ERROR } from './types';

const MetricState = (props) => {
  const initialState = {
    metrics: null,
    error: null,
  };

  const [state, dispatch] = useReducer(metricReducer, initialState);

  //* Get metrics
  const getMetrics = async () => {    
    try {
      const res = await axios.get('/api/metrics');

      dispatch({
        type: GET_METRICS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: METRIC_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //* Add metric
  const addMetric = async (metric) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('api/metrics', metric, config);

      dispatch({
        type: ADD_METRIC,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: METRIC_ERROR,
        payload: err.response.msg,
      });
    }
  };

  return (
    <MetricContext.Provider
      value={{
        metrics: state.metrics,
        error: state.error,
        addMetric,
        getMetrics,
      }}
    >
      {props.children}
    </MetricContext.Provider>
  );
};

export default MetricState