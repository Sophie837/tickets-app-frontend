import { TicketCard } from "./ticketCard";
import { Heading } from "./heading";

export const Tickets = ({ ticketData }: {ticketData: TicketData}) => {   
    const {userOwnedTickets, userAssignedTickets} = ticketData 
    const ownTickets = userOwnedTickets.length > 0
    const haveAssignedTickets = userAssignedTickets.length> 0
    return (
        <section className="bg-white">
            {ownTickets && (
                <div>
                    <Heading text="Tickets you own"></Heading>
                    <div>
                        {userOwnedTickets.map((ticket,index) => {
                            return (
                                <TicketCard index={index} key={ticket!!.id} ticketData={ticket}></TicketCard>
                            )
                        })}
                    </div>
                </div>
            )}
            {haveAssignedTickets && (
                <div>
                    <Heading text="Tickets assigned to you"></Heading>
                    <div>
                        {userAssignedTickets.map((ticket,index) => {
                            return (
                                <TicketCard index={index} key={ticket!!.id} ticketData={ticket}></TicketCard>
                            )
                        })}
                    </div>
                </div>
            )}

        </section>
    )
}
