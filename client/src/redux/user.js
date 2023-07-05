import { authAPI } from "../API/API";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const SET_USER_DATA = "shishka/auth/SET_USER_DATA";

export const register = createAsyncThunk("users/register", async (user, thunkAPI) => {
    const body = JSON.stringify(user)

    try{
        const res = await authAPI.registerUser(body);
        
        if(res.status === 201) {
            return res;
        } else {
            const error = await res.text();
            return thunkAPI.rejectWithValue(error);
        }
    } catch(err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err.response.data);
    }  
    
})

const getUser = createAsyncThunk('users/me', async (_, thunkAPI) => {
    try{
        const res = await authAPI.me();

        if(res.status === 200) {
            return res;
        } else {
            const error = await res.text();
            return thunkAPI.rejectWithValue(error);
        }
    } catch(err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
})

export const login = createAsyncThunk("users/login", async (user, thunkAPI) => {
    const body = JSON.stringify(user);

    try{
        const res = await authAPI.login(body);
        
        if(res.status === 200) {
            const {dispatch} = thunkAPI();
            dispatch(getUser());
            return res;
        } else {
            const error = await res.text();
            return thunkAPI.rejectWithValue(error);
        }
    } catch(err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err.response.data);
    }  
    
})

export const logout = createAsyncThunk("users/logout", async (_, thunkAPI) => {

    try{
        const res = await authAPI.logout();
        
        if(res.status === 200) {
            return res;
        } else {
            const error = await res.text();
            return thunkAPI.rejectWithValue(error);
        }
    } catch(err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err.response.data);
    }  
    
})

export const checkAuth = createAsyncThunk("users/checkAuth", async (_, thunkAPI) => {

    try{
        const res = await authAPI.verify();
        
        if(res.status === 200) {
            const {dispatch} = thunkAPI();
            dispatch(getUser());
            return res;
        } else {
            const error = await res.text();
            return thunkAPI.rejectWithValue(error);
        }
    } catch(err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err.response.data);
    }  
})

export const verify = createAsyncThunk("users/verify", async (data, thunkAPI) => {
    const body = JSON.stringify(data);
    console.log(body);
    try{
        const res = await authAPI.verify(body);
        return res;
    } catch(err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err.response.data);
    }
})

let initialState = {
    user: null,
    loading: false,
    registered: false,
    isAuth: false,
    // user: {
    //     userId: null,
    //     firstName: null,
    //     secondName: null,
    //     phoneNumber: null,
    //     email: null,
    //     birthday: null,
    //     region: null,
    //     city: null,
    //     isAdmin: false,
    //     certificated: null,
    //     hours: null,
    // }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetRegistered: state => {
            state.registered = false;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(register.pending, state => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                console.log(action);
                state.loading = false;
                state.registered = true;
            })
            .addCase(register.rejected, state => {
                state.loading = false;
            })
            .addCase(login.pending, state => {
                state.loading = true;
            })
            .addCase(login.fulfilled, state => {
                state.loading = false;
                state.isAuth = true;
            })
            .addCase(login.rejected, state => {
                state.loading = false;
            })
            .addCase(getUser.pending, state => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getUser.rejected, state => {
                state.loading = false;
            })
            .addCase(checkAuth.pending, state => {
                state.loading = true;
            })
            .addCase(checkAuth.fulfilled, state => {
                state.loading = false;
                state.isAuth = true;
            })
            .addCase(checkAuth.rejected, state => {
                state.loading = false;
            })
            .addCase(verify.pending, state => {
                state.loading = true;
            })
            .addCase(verify.fulfilled, state => {
                state.loading = true;
                state.isAuth = true;
            })
            .addCase(logout.pending, state => {
                state.loading = true;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = false;
                state.user = null;
            })
            .addCase(logout.rejected, state => {
                state.loading = false;
            });
    }
})

export const {resetRegistered} = userSlice.actions;
export default userSlice.reducer;