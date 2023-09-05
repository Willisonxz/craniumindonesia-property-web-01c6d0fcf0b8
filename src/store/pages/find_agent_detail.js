import { createSlice } from "@reduxjs/toolkit";

export const findAgentDetailSlice = createSlice({
    name: "findAgentDetail",
    initialState: {
        selectedAgentCompared: []
    },
    reducers: {
        AddAgent: (state, action) => {
            if (state.selectedAgentCompared.length === 0) {
                state.selectedAgentCompared.push(action.payload)
            } else {
                let findDataAgent = false;
                state.selectedAgentCompared.forEach((item) => {
                    if (item.id === action.payload.id) findDataAgent = true
                })
                if (findDataAgent === false) {
                    state.selectedAgentCompared.push(action.payload)
                }
            }
            // state.selectedAgentCompared = action.payload.selectedAgentCompared;
        },
        RemoveAgent: (state, action) => {
            let newDataAgent = [];
            if(state.selectedAgentCompared.length > 0){
                state.selectedAgentCompared.forEach((item) => {
                    if (item.id !== action.payload.id) newDataAgent.push(item)
                })
            }
            state.selectedAgentCompared = newDataAgent;
            // state.selectedAgentCompared = action.payload.selectedAgentCompared;
        },

    },
});

export const { AddAgent, RemoveAgent } = findAgentDetailSlice.actions;
export const stateUser = (state) => state.findAgentDetail.value;
export default findAgentDetailSlice.reducer;