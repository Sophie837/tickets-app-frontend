import { format } from 'date-fns'
import { Tickets } from './tickets'

export const EventCard = ({eventData}: {eventData: EventData}) => {
    // const formattedDate = event.eventInfo.date.toLocaleString('en-UK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    const formattedDate = format(eventData.eventInfo.date, "dd/mm/yy")
    const ticketData = {
        userOwnedTickets: eventData.userOwnedTickets, 
        userAssignedTickets: eventData.userAssignedTickets
    }
    return (
        <div className="mb-4 ">
            <h3 className="text-4xl text-center bg-purple-300 py-4 ">{eventData.eventInfo.eventName}</h3>
            <div className="grid grid-cols-3 text-2xl text-center bg-purple-200 py-2">
                <h4 className="">{eventData.eventInfo.location}</h4>
                <h4>{formattedDate}</h4>
                <h4>{`£${eventData.eventInfo.price}`}</h4>
            </div>
            <Tickets ticketData={ticketData}></Tickets>
        </div>
    )
}