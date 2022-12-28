import { AppBar,Toolbar ,Typography,styled, Tab} from "@mui/material";
const Header =styled(AppBar)`
background:#111111;
`
const Tabs = styled(Typography)`
font-size:20px;
margin-right :20px;
display:flex;
justify-content:right;
align-item:center;
`


const Navbar=()=>{
    return(
        <Header >
            <Toolbar sx={{marginLeft: "auto"}}>
                   
                <Tabs>Users</Tabs>
                <Tabs>Fonts</Tabs>
                <Tabs>Voices</Tabs>
                <Tabs>Settings</Tabs>
                <Tabs>Logout</Tabs>

            </Toolbar>

        </Header>
    )
}
export default Navbar;