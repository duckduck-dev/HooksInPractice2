export const checkLoginStatus = isLogged => {
      return { type:'CHECK_STATUS', payload: isLogged };
} ;