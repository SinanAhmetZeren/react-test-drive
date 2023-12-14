import { deleteVoyage, getUsers, getVehicles, getVoyages } from "./apiUsers";
// import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import CreateVoyageForm from "./createVoyageForm";

function UserVehicleVoyage() {
  const queryClient = useQueryClient();

  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: getUsers,
  });

  const { data: vehiclesData } = useQuery({
    queryKey: ["vehiclesData"],
    queryFn: getVehicles,
  });

  const { data: voyagesData } = useQuery({
    queryKey: ["voyagesData"],
    queryFn: getVoyages,
  });

  const { mutate } = useMutation({
    mutationFn: (id) => deleteVoyage(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["voyagesData"],
      });
    },
  });

  return (
    <>
      <div className="">USES REACT QUERY</div>
      <div id="user-data-table" className="w-2/3 mx-auto mt-10">
        <strong className="bg-green-800 text-white p-2">User Data</strong>
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="bg-cyan-200 hover:bg-green-900 py-2 px-4 border-b">
                ID
              </th>
              <th className="bg-cyan-200 hover:bg-cyan-800 py-2 px-4 border-b">
                Created At
              </th>
              <th className="bg-cyan-200 hover:bg-cyan-700 py-2 px-4 border-b">
                Username
              </th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="bg-cyan-50 hover:bg-cyan-100  py-2 px-4 border-b">
                  {user.id}
                </td>
                <td className="bg-cyan-50 hover:bg-cyan-100 py-2 px-4 border-b">
                  {user.created_at}
                </td>
                <td className="bg-cyan-50 hover:bg-cyan-100 py-2 px-4 border-b">
                  {user.username}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div id="user-data-table" className="w-2/3 mx-auto mt-10">
        <strong className="bg-green-800 text-white p-2">Vehicles Data</strong>

        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="bg-cyan-200 hover:bg-green-900 py-2 px-4 border-b">
                ID
              </th>
              <th className="bg-cyan-200 hover:bg-cyan-800 py-2 px-4 border-b">
                Created At
              </th>
              <th className="bg-cyan-200 hover:bg-cyan-700 py-2 px-4 border-b">
                name
              </th>
            </tr>
          </thead>
          <tbody>
            {vehiclesData?.map((v) => (
              <tr key={v.id} className="hover:bg-gray-100">
                <td className="bg-cyan-50 hover:bg-cyan-100  py-2 px-4 border-b">
                  {v.id}
                </td>
                <td className="bg-cyan-50 hover:bg-cyan-100 py-2 px-4 border-b">
                  {v.created_at}
                </td>
                <td className="bg-cyan-50 hover:bg-cyan-100 py-2 px-4 border-b">
                  {v.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div id="user-data-table" className="w-2/3 mx-auto mt-10">
        <strong className="bg-green-800 text-white p-2">Voyages Data</strong>

        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="bg-cyan-200 hover:bg-green-900 py-2 px-4 border-b">
                ID
              </th>
              <th className="bg-cyan-200 hover:bg-cyan-800 py-2 px-4 border-b">
                Created At
              </th>
              <th className="bg-cyan-200 hover:bg-cyan-700 py-2 px-4 border-b">
                name
              </th>
            </tr>
          </thead>
          <tbody>
            {voyagesData?.map((v) => (
              <tr key={v.id} className="hover:bg-gray-100">
                <td className="bg-cyan-50 hover:bg-cyan-100  py-2 px-4 border-b">
                  {v.id}
                </td>
                <td className="bg-cyan-50 hover:bg-cyan-100 py-2 px-4 border-b">
                  {v.created_at}
                </td>
                <td className="bg-cyan-50 hover:bg-cyan-100 py-2 px-4 border-b">
                  {v.name}
                </td>
                <td>
                  <button
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
                    onClick={() => {
                      mutate(v.id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <CreateVoyageForm />
      </div>
    </>
  );
}

export default UserVehicleVoyage;
