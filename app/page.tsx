import UserProfile from "./multi-props/page";
import Header from "./props/page";
import DropdownList from "./ui/dropdownlist";

export default function Home() {
  return (
    <div>
      <Header title="kob" />
      <UserProfile name="Kob" age={40} email="kob@mail.com" isAdmin={true} />
      <DropdownList />
    </div>
  );
}
