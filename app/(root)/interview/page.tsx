import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName={'you'}
        userId={user?.id}
        profileImage={''}
        type="generate"
      />
    </>
  );
};

export default Page;