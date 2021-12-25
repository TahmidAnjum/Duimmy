import React,{Component} from "react";
import {Button} from '@mui/material';
//import Card from '@mui/material/Card';
//import Box from '@mui/material/Box';
//import Stack from '@mui/material/Stack';
//import TextField from '@mui/material/TextField';
//import {makeStyles} from '@mui/styles'
import axios from 'axios';
const sign = require('jwt-encode');
const secret = 'secret';
//const useStyle = makeStyles({
//    btn:{
//        fontSize : 60
//    }
//});

class Login extends Component {
    
    state = 
    {
        login : {
            email : '',
            pass : ''
        },
        register : {
            fullName: '',
            email : '',
            pass : ''
        }
    }

    constructor(props) {
        super(props);
        // Don't do this!
        //this.state = { color: props.color };
        localStorage.clear();
    }


    handleChangeLogin = e =>
    {
        const login = {...this.state.login};
        
        login[e.currentTarget.name] = e.currentTarget.value;
        this.setState({login});
    }
    handleChangeRegister = e =>
    {
        const register = {...this.state.register};
        
        register[e.currentTarget.name] = e.currentTarget.value;
        this.setState({register});
    }
    
    
    handleClickLogin = (e) =>{
        e.preventDefault();
        (async()=>{
            const {data,status} = await axios.post("http://localhost:5000/login", this.state.login);
            if(status!==201) window.alert(data.msg)
            else{
                const jwt = sign(data,secret);
                localStorage.setItem("user",jwt);
                console.log(data);   
                //this.props.history.push('/patientInfo')
            }
            //console.log(data)
        })().catch(e=>console.log(e));
        
    } 
    handleClick = (e) =>{
        e.preventDefault();
        (async()=>{
            const {data,status} = await axios.post("http://localhost:5000/reg", this.state.register);
            window.alert(data.msg)
            if(status===201)
            {
                const jwt = sign(data,secret);
                localStorage.setItem("user",jwt); 
                this.handleResetRegister();  
                //this.props.history.push('/patientInfo')
            }
            //const jwt = sign(data,secret);
            //localStorage.setItem("user",jwt);   
            //this.props.history.push('/patientInfo')
            //console.log(data)
        })().catch(e=>console.log(e));
    }

    handleResetLogin = (e) =>
    {
        e.preventDefault();
        const login = {...this.state.login};
        login["email"] = "";
        login["pass"] = "";
        this.setState({login});
    }
    handleResetRegister = (e) =>
    {
        e.preventDefault();
        const register = {...this.state.register};
        register["fullName"] = "";
        register["email"] = "";
        register["pass"] = "";
        this.setState({register});
    }

    render() { 
        //const{login, register} = this.state;
        //const classes = useStyle();
        return (
            <div>
                <Button variant='contained'></Button>
            </div>
        );
    }
}
 
export default Login;

// <div>
//                 <Input>hello</Input>
//                 <Button variant="contained">Contained</Button>
//                 <Button variant="outlined" color="warning">Contained</Button>
//                 <Card variant="elevation">example</Card>
//             </div>
/* 
<Box
            justifyContent="center"
            alignItems="center"
            >
                <Stack spacing={12} direction="row" sx={{ml:10}}>
                <Card  sx={{ p: 2, width: '65ch'}}> 
                
                <h1>Sign In</h1>
                <p>E-mail</p>
                <TextField
                    required
                    sx={{ m: 1, ml : 0, width: '100%' }}
                    name='email'
                    onChange={this.handleChangeLogin}
                    value={login.email}
                    id="outlined-required1"
                />
                <p>Password</p>
                <TextField
                    sx={{ m: 1, ml : 0, width: '100%' }}
                    name='pass'
                    onChange={this.handleChangeLogin}
                    value={login.pass}
                    id="outlined-password-input1"
                    type="password"
                />
                <Button sx={{ m:5}} variant="contained" onClick={this.handleClickLogin}>Login</Button>
                <Button sx={{ m:5}} variant="contained" color="error" onClick={this.handleResetLogin}>Reset</Button>
                
            
            
                </Card>
                <Card sx={{ p: 2, width: '65ch'}}> 
                
                    <h1>Register</h1>
                    <p>Full Name</p>
                    <TextField
                        required
                        sx={{ m: 1, ml : 0, width: '100%' }}
                        name='fullName'
                        value={register.fullName}
                        onChange={this.handleChangeRegister}
                        id="outlined-required21"
                    />
                    <p>E-mail</p>
                    <TextField
                        required
                        sx={{ m: 1, ml : 0, width: '100%' }}
                        name='email'
                        value={register.email}
                        onChange={this.handleChangeRegister}
                        id="outlined-required22"
                    />
                    <p>Password</p>
                    <TextField
                        sx={{ m: 1, ml : 0, width: '100%' }}
                        name='pass'
                        value={register.pass}
                        onChange={this.handleChangeRegister}
                        id="outlined-password-input2"
                        type="password"
                        autoComplete="current-password"
                    />                       
                        
                            <Button sx={{ m:5}} variant="contained" onClick={this.handleClick}>Register</Button>
                            <Button sx={{ m:5}} variant="contained" color="error" onClick={this.handleResetRegister}>Reset</Button>
                    
                
                </Card>
            </Stack>
            
            </Box> */