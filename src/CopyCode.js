import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function CopyCode({ onClick }) {
    return (
        <Box mt={3}>
            <Button disableElevation color="secondary" variant="contained" onClick={onClick}>Скопировать код</Button>
        </Box>
    );
}

export default CopyCode;