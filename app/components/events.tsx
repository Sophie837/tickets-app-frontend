import { EventCard } from "./eventCard";

export const Events = ({ eventsData }: {eventsData: EventsData}) => {    
    return (
        <section className="mt-20 w-[1000px]">
            <h2 className="text-6xl text-center uppercase bg-purple-800 text-white py-8">Events</h2>
            <div className="w-full flex-col">
                {eventsData.map(event => {
                    return (
                        <EventCard key={`${event.eventInfo.eventName}`} eventData={event}></EventCard>
                    );
                })}
            </div>
        </section>
    )
}