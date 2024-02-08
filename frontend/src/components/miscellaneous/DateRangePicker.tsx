// ** React Imports
import { useState, forwardRef, useEffect } from 'react'

// ** MUI Imports
import TextField from '@mui/material/TextField'

// ** Third Party Imports
import addDays from 'date-fns/addDays'
import DatePicker from 'react-datepicker'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import moment from 'moment'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

interface PickerProps {
    label?: string
    end: Date | number
    start: Date | number
}

type DatePickerRangeProps = {
    defaultValue?: string | [string, string]
    handleChange?: Function
    format?: string
    label?: string
    isRemoved?: boolean
}

const DateRangePicker = ({ defaultValue, label, format, handleChange, isRemoved }: DatePickerRangeProps) => {
    // ** States
    let dates: [DateType, DateType] = [null, null];
    if(typeof defaultValue == "string") {
        const [startDate, endDate]: any = defaultValue.replace(' ', '').split('-');
        dates = [startDate ? new Date(startDate) : startDate, endDate ? new Date(endDate) : endDate]
    } else {
        const [startDate, endDate]: any = typeof defaultValue !== 'undefined' ? defaultValue : dates;
        dates = [startDate ? new Date(startDate) : startDate, endDate ? new Date(endDate) : endDate]
    }
    const [startDateRange, setStartDateRange] = useState<DateType>(dates[0])
    const [endDateRange, setEndDateRange] = useState<DateType>(dates[1]);

    const handleOnChangeRange = (dates: any) => {
        const [start, end] = dates
        setStartDateRange(start)
        setEndDateRange(end)
        if(typeof handleChange == "function") {
            handleChange(dates, { start, end });
        }
    }

    useEffect(() => {
        if(isRemoved) {
            setStartDateRange(null)
            setEndDateRange(null)
        }
    }, [isRemoved]);

    const CustomInput = forwardRef((props: PickerProps, ref) => {
        return <TextField fullWidth inputRef={ref} label={props.label || ''} {...props} value={getDateRange(props.start, props.end)} />
    })

    const getDateRange = (startDate: Date | number, endDate: Date | number) => {
        const start_date = startDate ? moment(startDate).format(format ? format : 'YYYY-MM-DD') : "";
        const end_date = endDate ? ` - ${moment(endDate).format(format ? format : 'YYYY-MM-DD')}` : ""
       return `${start_date}${end_date}`
    }

    return (
        <DatePickerWrapper>
            <DatePicker
                selectsRange
                monthsShown={2}
                endDate={endDateRange}
                selected={startDateRange}
                startDate={startDateRange}
                shouldCloseOnSelect={false}
                id='date-range-picker-months'
                onChange={handleOnChangeRange}
                customInput={
                    <CustomInput
                        label={label ? label : 'Date Range'}
                        end={endDateRange as Date | number}
                        start={startDateRange as Date | number}
                    />
                }
            />
        </DatePickerWrapper>
    )
}

export default DateRangePicker
