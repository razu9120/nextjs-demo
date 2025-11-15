import ServerAction from "./components/ServerAction";

type Props = {
  searchParams: Promise<{
    success?: string;
    error?: string;
  }>;
};

const ServerActionPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  return <ServerAction success={params.success} error={params.error} />;
};

export default ServerActionPage;
