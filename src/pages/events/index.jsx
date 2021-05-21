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

export const getServerSideProps = async ({ req }) => {
  const { host } = req.headers;
  const protocol = host.startsWith("localhost") ? "http" : "https";

  const events = await fetcher(`${protocol}://${host}/api/events`);

  return { props: { initialData: { events } } };
};

export default EventsPage;
