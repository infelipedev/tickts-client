import { Error, Layout, Loading, Events } from "components";
import { useEvents } from "hooks";
import { fetcher } from "utils";

const EventsPage = ({ initialData }) => {
  const events = useEvents(initialData.events);

  if (events.error) {
    return <Error message={events.error.message} />;
  }

  if (events.isLoading) {
    return <Loading message="Carregando eventos. Por favor, aguarde..." />;
  }

  return (
    <Layout title="Eventos">
      <Events events={events.data} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const events = await fetcher("http://localhost:3000/api/events");

  return { props: { initialData: { events } } };
};

export default EventsPage;
