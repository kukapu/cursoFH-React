import { useState } from 'react'

import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from "../"

import { localizer, getMessagesES } from '../../helpers'
import { useUiStore } from '../../hooks/useUiStore'
import { useCalendarStore } from '../../hooks'


export const CalendarPage = () => {

    const { openDateModal } = useUiStore()

    const { events, setActiveEvent } = useCalendarStore()

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        // console.log({ event, start, end, isSelected })

        const style = {
            backgroudColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }

        return {
            style
        }
    }

    const onDoubleClick = ( event ) => {
        // console.log({ doubleClick: event })
        console.log(event)
        // openDateModal( event )
    } 

    const onSelect = ( event ) => {
        // console.log({ click: event })
        setActiveEvent( event )
    }

    const onViewChanged = ( event ) => {
        // console.log({ viewChanged: event })
        localStorage.setItem( 'lastView', event )
        setLastView( event )
    }

    return (
        <>
            <Navbar />

            <Calendar
                culture='es'
                messages={ getMessagesES() }
                localizer={ localizer }
                events={ events }
                defaultView={ lastView }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc( 100vh - 80px )' }}
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChanged }
            />

            <CalendarModal />

            <FabAddNew />
            <FabDelete />


        </>
    )
}
