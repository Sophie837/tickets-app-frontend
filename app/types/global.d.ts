import { XOR } from 'ts-essentials';
export {}

declare global {
    interface EventInfo {
        id: number, 
        eventName: string,
        location: string,
        date: Date,
        price: number,
    }
    type TicketInfo = XOR<
        { 
            id: number, 
            assigneeId: number; 
        },
        { 
            id: number, 
            ownerId: number; 
        }
    >;
    interface TicketData {
        userOwnedTickets: Array<TicketInfo | null>
        userAssignedTickets: Array<TicketInfo | null>
    }
    interface EventData extends TicketData {
        eventInfo: EventInfo,
    }
    type EventsData = Array<EventData>
    enum TicketTypes {
        userOwned = OWNED,
        userAssigned = ASSIGNED
    }
}