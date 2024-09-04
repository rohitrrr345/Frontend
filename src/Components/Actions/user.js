import axios from "axios";

  
export const login=(email,password)=> async dispatch=>{
    try {
        dispatch({type:"loginRequest"})
        const {data}= await axios.post(`${import.meta.env.VITE_SERVER}/login`,
            {email,password},
            {
                headers:{
                    'content-type':'application/json',
                },
                withCredentials:true,
            }
        )
        dispatch({type:'loginSucess',payload:data})
    } catch (error) {
        dispatch({type:'loginFail',payload:error.response.data.message})
    }
}
export const register = formdata => async dispatch => {
    try {
      dispatch({ type: 'registerRequest' });
  
      const { data } = await axios.post(`${import.meta.env.VITE_SERVER}/register`, formdata, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
  
        withCredentials: true,
      });
  
      dispatch({ type: 'registerSuccess', payload: data });
    } catch (error) {
      dispatch({ type: 'registerFail', payload: error.response.data.message });
    }
  };
  export const loadUser = () => async dispatch => {
    try {
      dispatch({ type: 'loadUserRequest' });
  
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER}/me`,
  
        {
          withCredentials: true,
        }
      );
      dispatch({ type: 'loadUserSuccess', payload: data.user });
    } catch (error) {
      dispatch({ type: 'loadUserFail', payload: error.response.data.message });
    }
  };
  export const logout = () => async dispatch => {
    try {
      dispatch({ type: 'logoutRequest' });
  
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/logout`, {
        withCredentials: true,
      });
      dispatch({ type: 'logoutSuccess', payload: data.message });
    } catch (error) {
      dispatch({ type: 'logoutFail', payload: error.response.data.message });
    }
  };
  export const buySubscription = () => async dispatch => {
    try {
      dispatch({ type: 'buySubscriptionRequest' });
  
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/subscribe`, {
        withCredentials: true,
      });
  
      dispatch({ type: 'buySubscriptionSuccess', payload: data.subscriptionId });
    } catch (error) {
      dispatch({
        type: 'buySubscriptionFail',
        payload: error.response.data.message,
      });
    }
  };
  
  export const cancelSubscription = () => async dispatch => {
    try {
      dispatch({ type: 'cancelSubscriptionRequest' });
  
      const { data } = await axios.delete(`${import.meta.env.VITE_SERVER}/subscribe/cancel`, {
        withCredentials: true,
      });
  
      dispatch({ type: 'cancelSubscriptionSuccess', payload: data.message });
    } catch (error) {
      dispatch({
        type: 'cancelSubscriptionFail',
        payload: error.response.data.message,
      });
    }
  };
  
  