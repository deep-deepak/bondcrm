// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import AvatarGroup from '@mui/material/AvatarGroup'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import LinearProgress from '@mui/material/LinearProgress'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'
import { ProjectTableRowType } from 'src/@fake-db/types'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

interface CellType {
  row: ProjectTableRowType
}

// ** renders name column
const renderName = (row: ProjectTableRowType) => {
  if (row.avatar) {
    return <CustomAvatar src={row.avatar} sx={{ mr: 2, width: 35, height: 35 }} />
  } else {
    return (
      <CustomAvatar
        skin='light'
        sx={{ mr: 2, width: 35, height: 35, fontSize: '0.875rem' }}
        color={(row.avatarColor as ThemeColor) || ('primary' as ThemeColor)}
      >
        {getInitials(row.name || 'John Doe')}
      </CustomAvatar>
    )
  }
}

const columns: GridColDef[] = [
  {
    flex: 0.1,
    field: 'name',
    minWidth: 220,
    headerName: 'Name',
    renderCell: ({ row }: CellType) => {
      const { name, date } = row

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderName(row)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap sx={{ color: 'text.secondary', fontWeight: 700 }}>
              {name}
            </Typography>
            <Typography noWrap variant='body2' sx={{ color: 'text.disabled', textTransform: 'capitalize' }}>
              {date}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 105,
    field: 'leader',
    headerName: 'Representative',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.leader}</Typography>
  },
  {
    flex: 0.1,
    field: 'team',
    minWidth: 120,
    sortable: false,
    headerName: 'Team',
    renderCell: ({ row }: CellType) => (
      <AvatarGroup className='pull-up'>
        {row.avatarGroup.map((src, index) => (
          <CustomAvatar key={index} src={src} sx={{ height: 26, width: 26 }} />
        ))}
      </AvatarGroup>
    )
  },
  {
    flex: 0.1,
    minWidth: 150,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }: CellType) => (
      <>
        <LinearProgress
          color='primary'
          value={row.status}
          variant='determinate'
          sx={{
            mr: 4,
            height: 6,
            width: '100%',
            borderRadius: 8,
            backgroundColor: 'background.default',
            '& .MuiLinearProgress-bar': {
              borderRadius: 8
            }
          }}
        />
        <Typography sx={{ color: 'text.secondary' }}>{`${row.status}%`}</Typography>
      </>
    )
  },

  {
    flex: 0.1,
    minWidth: 100,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: () => (
      <OptionsMenu
        iconButtonProps={{ size: 'small' }}
        options={[
          'Details',
          'Archive',
          { divider: true, dividerProps: { sx: { my: theme => `${theme.spacing(2)} !important` } } },
          {
            text: 'Delete',
            menuItemProps: {
              sx: {
                color: 'error.main',
                '&:not(.Mui-focusVisible):hover': {
                  color: 'error.main',
                  backgroundColor: theme => hexToRGBA(theme.palette.error.main, 0.08)
                }
              }
            }
          }
        ]}
      />
    )
  }
]

const projectTable: ProjectTableRowType[] = [
  {
    id: 1,
    status: 38,
    leader: 'Eileen',
    name: 'Website SEO',
    date: '10 may 2021',
    avatarColor: 'success',
    avatarGroup: ['/images/avatars/1.png', '/images/avatars/4.png', '/images/avatars/3.png', '/images/avatars/2.png']
  },
  {
    id: 2,
    status: 45,
    leader: 'Owen',
    date: '03 Jan 2021',
    name: 'Social Banners',
    avatar: '/images/icons/project-icons/social-label.png',
    avatarGroup: ['/images/avatars/5.png', '/images/avatars/6.png']
  },
  {
    id: 3,
    status: 92,
    leader: 'Keith',
    date: '12 Aug 2021',
    name: 'Logo Designs',
    avatar: '/images/icons/project-icons/sketch-label.png',
    avatarGroup: ['/images/avatars/2.png', '/images/avatars/1.png', '/images/avatars/7.png', '/images/avatars/8.png']
  },
  {
    id: 4,
    status: 56,
    leader: 'Merline',
    date: '19 Apr 2021',
    name: 'IOS App Design',
    avatar: '/images/icons/project-icons/sketch-label.png',
    avatarGroup: ['/images/avatars/5.png', '/images/avatars/3.png', '/images/avatars/6.png', '/images/avatars/7.png']
  },
  {
    id: 5,
    status: 25,
    leader: 'Harmonia',
    date: '08 Apr 2021',
    name: 'Figma Dashboards',
    avatar: '/images/icons/project-icons/figma-label.png',
    avatarGroup: ['/images/avatars/7.png', '/images/avatars/6.png', '/images/avatars/8.png']
  },
  {
    id: 6,
    status: 36,
    leader: 'Allyson',
    date: '29 Sept 2021',
    name: 'Crypto Admin',
    avatar: '/images/icons/project-icons/html-label.png',
    avatarGroup: ['/images/avatars/2.png', '/images/avatars/5.png']
  },
  {
    id: 7,
    status: 72,
    leader: 'Georgie',
    date: '20 Mar 2021',
    name: 'Create Website',
    avatar: '/images/icons/project-icons/react-label.png',
    avatarGroup: ['/images/avatars/3.png', '/images/avatars/1.png', '/images/avatars/6.png']
  },
  {
    id: 8,
    status: 89,
    leader: 'Fred',
    date: '09 Feb 2021',
    name: 'App Design',
    avatar: '/images/icons/project-icons/xd-label.png',
    avatarGroup: ['/images/avatars/7.png', '/images/avatars/6.png']
  },
  {
    id: 9,
    status: 77,
    leader: 'Richardo',
    date: '17 June 2021',
    name: 'Angular APIs',
    avatar: '/images/icons/project-icons/figma-label.png',
    avatarGroup: ['/images/avatars/5.png', '/images/avatars/8.png', '/images/avatars/1.png']
  },
  {
    id: 10,
    status: 100,
    leader: 'Genevra',
    date: '06 Oct 2021',
    name: 'Admin Template',
    avatar: '/images/icons/project-icons/vue-label.png',
    avatarGroup: ['/images/avatars/2.png', '/images/avatars/3.png', '/images/avatars/4.png', '/images/avatars/5.png']
  }
]

const LatestEstimate = () => {
  // ** State
  const [data, setData] = useState(projectTable)
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 })

  // useEffect(() => {
  //   axios.get('/api/pages/profile-table', { params: { q: value } }).then(response => {
  //     setData(response.data)
  //   })
  // }, [value])

  const handleFilter = (val: string) => {
    setValue(val)
  }

  return data ? (
    <Card>
      <CardHeader
        title='Latest Estimates'
        titleTypographyProps={{ sx: { mb: [2, 0] } }}
        sx={{ flexDirection: ['column', 'row'], alignItems: ['flex-start', 'center'] }}
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body2' sx={{ mr: 2 }}>
              Search:
            </Typography>
            <TextField size='small' value={value} onChange={e => handleFilter(e.target.value)} />
          </Box>
        }
      />
      <DataGrid
        autoHeight
        pagination
        rows={data}
        columns={columns}
        // checkboxSelection
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </Card>
  ) : null
}

export default LatestEstimate
