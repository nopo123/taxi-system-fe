import { createContext, useEffect, useReducer, useContext } from 'react';
import AuthService from 'services/AuthService';
import AppService from 'services/AppService';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  UPDATE: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      user: {
        ...state.user,
        ...data,
      }
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext({
  ...initialState,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  update: () => Promise.resolve()
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = AppService.getToken();
        if (accessToken) {
          const user = await AuthService.me();
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (error) {
        console.error('Failed to initialize auth:', error);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (data) => {
    const { user, access_token: accessToken } = await AuthService.login({ email: data.email, password: data.password });
    AppService.setToken(accessToken);
    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    AppService.clearToken();
    dispatch({ type: 'LOGOUT' });
  };

  const update = async (data) => {
    dispatch({
      type: 'UPDATE',
      payload: {
        data,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        update
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;