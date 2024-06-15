import React from 'react';
import { Button, Typography } from "@mui/material";
import { OrangeLogoShort } from "./Orange";

function TopAppbar (){
    return (<>
        <div style={{
            display:"flex",
            justifyContent:"space-between",
            backgroundColor:"#ba8137"
        }}>
            <div>
                <OrangeLogoShort></OrangeLogoShort>
            </div>
            <div>
                <Typography variant="h3">A Huge Orange</Typography>
            </div>
            <div>
                <Button>Search</Button>
            </div>
        </div>
    </>);
}

export default TopAppbar;