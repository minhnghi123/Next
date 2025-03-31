const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = await params;
  return (
    <div>
      <h1 className="3xl">THE PROFILE DETAIL OF USER : {id} </h1>
    </div>
  );
};

export default page;
