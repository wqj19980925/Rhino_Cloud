

const user = {
    store:{
        ip: getStore({
            name: 'ip'
        }) || {},
    },
    mutations:{
        SET_USER_IP: (state, ip) => {
            state.ip = ip
            setStore({
              name: 'ip',
              content: state.ip
            })
          },
    },
    actions:{
        
    },

    
}
export default user
