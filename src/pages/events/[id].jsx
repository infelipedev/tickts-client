import { Error, Layout, Loading } from "components";
import { Event } from "components/Events/Event";
import { useEvent } from "hooks";
import { fetcher } from "utils";

const EventPage = ({ initialData }) => {
	const event = useEvent(initialData.event);

	if (event.error) {
		return <Error message={event.error.message} />;
	}

	if (event.isLoading) {
		return <Loading message="Carregando evento. Por favor, aguarde..." />;
	}

	const {
		banner = "/event-banner-placeholder.svg",
		maximumAttendeeCapacity,
		name,
	} = event.data;

	return (
		<Layout title={name}>
			<Event
				attendeeCapacity={maximumAttendeeCapacity}
				banner={banner}
				name={name}
			/>
		</Layout>
	);
};

export const getServerSideProps = async ({ query }) => {
	const { id } = query;
	const event = await fetcher(`${process.env.API_ROUTE_HOST}/api/events/${id}`);

	return { props: { initialData: { event } } };
};

export default EventPage;
