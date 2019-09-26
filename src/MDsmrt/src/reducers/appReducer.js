let initialState = {
  sharesInput: 0,
}

export default (state = initialState, payload) => {
  switch (payload.type) {
    case 'CONNECT_UPORT':
      console.log({
        ...state,
        uport: payload.data,
        signClaimPage: true,
      })
      return {
        ...state,
        uport: payload.data,
        signClaimPage: true,
      }

    case 'CONNECT_UPORT_PAT':
      console.log({
        ...state,
        uport: payload.data,
        signClaimPage: true,
      })
      return {
        ...state,
        uport: payload.data,
        signClaimPage: true,
      }

    case 'LOGOUT':
      return {
        ...state,
        uport: null,
        logOutPage: true,
      }
    default:
      return state
  }
}
