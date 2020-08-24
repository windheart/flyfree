import React, {useState} from 'react';
import {Typography} from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';

const items = [
    ['borders', 'Границы'],
    ['logo', 'Логотип'],
    ['link', 'Ссылка на пример'],
    ['pics', 'Иллюстрации'],
]

function Components() {
    const [value, setValue] = useState([items[0][0]])
    const valueSet = new Set(value)

    const handleChange = ({ target }) => {
        valueSet.has(target.value) ? valueSet.delete(target.value) : valueSet.add(target.value)
        setValue(Array.from(valueSet))
    }

    return (
        <Box mt={3}>
            <Typography variant="h6">Компоненты</Typography>
            <FormGroup>
                {items.map(([itemValue, label]) =>
                    <FormControlLabel
                        key={itemValue}
                        control={<Checkbox size="small" value={itemValue} checked={valueSet.has(itemValue)} onChange={handleChange} color="primary"/>}
                        label={label}
                    />
                )}
            </FormGroup>
        </Box>
    );
}

export default Components;