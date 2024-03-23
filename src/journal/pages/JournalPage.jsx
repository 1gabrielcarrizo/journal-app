import React from 'react'
import JournalLayout from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { startNewNote } from '../../store/journal'

const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus rerum sapiente assumenda asperiores. Voluptatum nobis numquam ratione quibusdam minus voluptatibus et quidem culpa! Error amet maiores sequi. Recusandae, odit itaque.</Typography> */}
      <NothingSelectedView />
      {/* <NoteView/> */}

      <IconButton
      onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}

export default JournalPage