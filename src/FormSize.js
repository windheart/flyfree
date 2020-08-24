import React, {useState} from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Box from '@material-ui/core/Box';
import {Typography} from '@material-ui/core';

const items = [
    ['normal', 'Нормальный'],
    ['compact', 'Компактный'],
]

function FormSize() {
    const [value, setValue] = useState(items[0][0])

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <Box mt={3}>
            <Typography variant="h6">Размер формы</Typography>
            <RadioGroup aria-label="layout" value={value} onChange={handleChange}>
                {items.map(([itemValue, label]) =>
                    <FormControlLabel key={itemValue} value={itemValue} control={<Radio size="small" color="primary" />} label={label} />
                )}
            </RadioGroup>
        </Box>
    );
}

export default FormSize;