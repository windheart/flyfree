import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {FormHelperText, Typography} from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';

const items = [
    ['line', 'В одну линию', 'Выстраивает формы в одну горизонтальную линию, если ширина контейнера больше 1024px'],
]

function FormLayout() {
    const [value, setValue] = useState([])
    const valueSet = new Set(value)

    const handleChange = ({ target }) => {
        valueSet.has(target.value) ? valueSet.delete(target.value) : valueSet.add(target.value)
        setValue(Array.from(valueSet))
    }

    return (
        <Box mt={3}>
            <Typography variant="h6">Расположение формы</Typography>
            <FormGroup>
                {items.map(([itemValue, label, helperText]) =>
                    <>
                        <FormControlLabel
                            key={itemValue}
                            control={<Checkbox size="small" checked={valueSet.has(itemValue)} value={itemValue} onChange={handleChange} color="primary"/>}
                            label={label}
                        />
                        {helperText && (
                            <FormHelperText>{helperText}</FormHelperText>
                        )}
                    </>
                )}
            </FormGroup>
        </Box>
    );
}

export default FormLayout;