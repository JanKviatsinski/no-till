import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { ButtonBoorger } from '../../buttons/ButtonBoorger/ButtonBoorger'
import Link from 'next/link'
import { routes } from '../../../routes'

export const MobNav = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return <>
    <ButtonBoorger
      onClick={handleClick}
    />

    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem>
        <Link href={`/${routes.articles}`}><a className='text-xs font-monser'>Статьи</a></Link>
      </MenuItem>

      <MenuItem>
        <Link href={`/${routes.news}`}><a className='text-xs font-monser'>Новости</a></Link>
      </MenuItem>

      <MenuItem>
        <Link href={`/${routes.experts}`}><a className='text-xs font-monser'>Эксперты</a></Link>
      </MenuItem>

      <MenuItem>
        <Link href={`/${routes.contacts}`}><a className='text-xs font-monser'>Контакты</a></Link>
      </MenuItem>
    </Menu>
  </>
}