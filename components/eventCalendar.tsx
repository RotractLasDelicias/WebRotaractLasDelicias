'use client'

import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

interface CalendarEvent {
  id: string
  title: string
  startDate: string
  endDate?: string
  description?: string
  location?: string
}

export default function EventCalendar({ eventsData }: { eventsData: CalendarEvent[] }) {
  // Estado para controlar el evento seleccionado y mostrarlo en un Modal
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)

  // 1. Mapeamos la data de Decap CMS al formato estricto de FullCalendar
  const formattedEvents = eventsData.map((ev) => ({
    id: ev.id,
    title: ev.title,
    start: ev.startDate, // Formato "YYYY-MM-DD" o ISO string
    end: ev.endDate || ev.startDate, // Si abarca varios días, la fecha fin los raya todos
    extendedProps: {
      description: ev.description || 'Sin descripción',
      location: ev.location || 'Por definir',
    },
  }))

  // Callback cuando se toca un evento en el calendario
  const handleEventClick = (info: any) => {
    setSelectedEvent({
      id: info.event.id,
      title: info.event.title,
      startDate: info.event.startStr,
      endDate: info.event.endStr,
      description: info.event.extendedProps.description,
      location: info.event.extendedProps.location,
    })
  }

  return (
    <div className="w-[85%] bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={formattedEvents}
        locale="es"
        
        // --- OPCIONES Y PROPS CLAVE ---
        selectable={true} // Permite seleccionar/marcar días
        editable={false}   // True si quisieras arrastrar para mover eventos
        
        // --- INTERACCIÓN Y MODALES ---
        eventClick={handleEventClick} // Al tocar un evento rayado
        
        // --- BARRA SUPERIOR DE NAVEGACIÓN ---
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth',
        }}
        buttonText={{
          today: 'Hoy',
          month: 'Mes',
        }}
      />

      {/* --- MODAL FLOTANTE AL HACER CLIC EN UN EVENTO --- */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative animate-in fade-in zoom-in duration-150">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedEvent.title}
            </h3>
            
            <div className="space-y-3 my-4 text-sm text-gray-600">
              <p>
                <strong className="text-gray-800">Fecha:</strong> {selectedEvent.startDate} 
                {selectedEvent.endDate && selectedEvent.endDate !== selectedEvent.startDate && ` hasta ${selectedEvent.endDate}`}
              </p>
              <p>
                <strong className="text-gray-800">Ubicación:</strong> {selectedEvent.location}
              </p>
              <p className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-gray-700">
                {selectedEvent.description}
              </p>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-5 py-2 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}