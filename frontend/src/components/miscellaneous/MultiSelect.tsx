// ** MUI Imports
// import TextField from '@mui/material/TextField'
// import Autocomplete from '@mui/material/Autocomplete'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

type MultiSelectType = {
    options?: any[],
    placeholder?: string
    id?: string
    labelId?: string
    label?: string
    defaultValue?: any[]
    onChange?: Function,
    name?: string
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            width: 250,
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
        }
    }
}

const MultiSelect = (props: MultiSelectType) => {
    const {
        options = [],
        id = "",
        labelId = "",
        defaultValue = [],
        label = "",
        onChange = () => { },
        name = ""
    } = props;

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        if (typeof onChange != 'undefined') {
            onChange(name, event.target.value as string[]);
        }
    }

    return (
        <FormControl fullWidth>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
                multiple
                label={label}
                value={defaultValue}
                MenuProps={MenuProps}
                id={id}
                onChange={handleChange}
                labelId={labelId}
            >
                {options.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default MultiSelect

