import React from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import Button from '@mui/material/Button';

function ButtonInfo ({setVisible}) {
    return (
        <>
            <Button onClick={()=>setVisible(true)}>
                <InfoCircleOutlined />
            </Button>
        </>
    )
}

export default ButtonInfo;