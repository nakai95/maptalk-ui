import { FetchUsersApiClient, UsersRepository } from "@/repositories";
import { CustomMap } from "./components";

interface Props {
  userId: string;
  repository?: UsersRepository; // テスト時の依存性注入用
}

export async function MapContents({
  userId,
  repository = new UsersRepository(new FetchUsersApiClient()),
}: Props) {
  const user = await repository.getUser(userId);

  return (
    <div data-testid="mapContents">
      <CustomMap user={user} />
    </div>
  );
}
