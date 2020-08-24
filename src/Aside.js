import React from 'react';
import {Typography} from '@material-ui/core';
import ColorScheme from './ColorScheme';
import Components from './Components';
import FormSize from './FormSize';
import FormLayout from './FormLayout';
import CopyCode from './CopyCode';

function Aside() {
    const handleCopyToClipboard = () => {
        console.log('copied!')
    }

    return (
        <>
            <Typography variant="h5">Настройки</Typography>
            <ColorScheme/>
            <Components/>
            <FormSize/>
            <FormLayout/>
            <CopyCode onClick={handleCopyToClipboard}/>
        </>
    );
}

export default Aside;