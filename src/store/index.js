import { configureStore } from '@reduxjs/toolkit'

// global state
import userApp from './global/user';
import findAgentDetail from './pages/find_agent_detail';

export const store = configureStore({
    reducer: {
        userApp: userApp,
        findAgentDetail: findAgentDetail,
    }
})