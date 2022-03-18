import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import { tailwindTheme } from '../../../pages/_app'

type Option = {
  value: string,
  text: string
}

interface MuiSelectProps {
  withEmpty?: boolean
  placeholder: string
  // message?: string
  options: Array<Option>
  value: string
  onSelect (value: string): void
}

const StyledSelect = styled(Select)<SelectProps>(({ theme }) => ({
  '& .MuiInputBase-input': {
    border: 'none',
    color: theme.palette.primary.light,
    // @ts-ignore
    fontSize: tailwindTheme.fontSize.xs,
    padding: '10px 26px 10px 12px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '& .MuiSelect-icon': {
    // @ts-ignore
    color: tailwindTheme.colors.alternate
  },
}))

export const MuiSelect = ({
  withEmpty = false,
  options,
  onSelect,
  placeholder,
  value
}: MuiSelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    // setAge(event.target.value as string)
    // console.log(event.target)
    onSelect(event.target.value as string)
  }

  return (
    <div >
      <FormControl fullWidth>
        <InputLabel>
          {placeholder}
        </InputLabel>
        <StyledSelect
          value={value === '' ? undefined : value}
          label={placeholder}
          onChange={handleChange}
        >
          {withEmpty && <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          }
          {options.map(option =>
            <MenuItem key={option.value} value={option.value} sx={{
              // @ts-ignore
              fontSize: tailwindTheme.fontSize.xs,
              // '&.Mui-selected': {
              //   backgroundColor: 'red',
              //   ":hover": {
              //     backgroundColor: 'green',
              //   }
              // }
            }}>
              {option.text}
            </MenuItem>)}
        </StyledSelect>
      </FormControl>
    </div>

  )
}
