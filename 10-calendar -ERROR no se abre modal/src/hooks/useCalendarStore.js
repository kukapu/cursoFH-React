import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent } from "../store"

export const useCalendarStore = () => {
    
    const dispatch = useDispatch()
    const { events, activeEvent } = useSelector( state => state.calendar )

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }

    const startSavingEvent = async( calenmdarEvent ) => {
        // TODO: llegar al backend
        // Todo bien
        if( calendarEvent._id ) {
            // Actualizar
            dispatch( onUpdateEvent( {...calendarEvent}) )
        } else {
            // Crear
            dispatch( onAddNewEvent({ ...calenmdarEvent, _id: new Date().getTime() }) )
        }
    }

    const startDeletingEvent = () => {
        // TODO: llegar al backend
        dispatch( onDeleteEvent() )
    }

    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //* Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    }
}