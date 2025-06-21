import { Header } from "../../../components";
import { cn, formatDate } from "~/lib/utils";
import { getAllUsers } from "~/appwrite/auth";
import type { Route } from "./+types/all-users";

export const loader = async () => {
  const { users, total } = await getAllUsers(10, 0);
  return { users, total };
};

const AllUsers = ({ loaderData }: Route.ComponentProps) => {
  const { users } = loaderData;

  return (
    <main className="all-users wrapper">
      <Header
        title="Manage Users"
        description="Filter, sort, and access detailed user profiles"
      />

      <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-3 px-4 font-medium text-black">
                Name
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Email Address
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Date Joined
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user: any) => (
              <tr key={user.id} className="hover:bg-neutral-300">
                <td className="py-3 px-4 flex items-center gap-2">
                  <img
                    src={user.imageUrl}
                    alt="user"
                    className="rounded-full size-8 aspect-square object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span>{user.name}</span>
                </td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{formatDate(user.joinedAt)}</td>
                <td className="py-3 px-4">
                  <article
                    className={cn(
                      "inline-flex items-center gap-1 px-2 py-0.5 rounded-md",
                      user.status === "user"
                        ? "bg-success-50 text-success-700"
                        : "bg-light-300 text-primary-500"
                    )}
                  >
                    <div
                      className={cn(
                        "size-1.5 rounded-full",
                        user.status === "user"
                          ? "bg-success-500"
                          : "bg-primary-500"
                      )}
                    />
                    <h3 className="text-xs font-semibold font-inter">
                      {user.status}
                    </h3>
                  </article>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AllUsers;
