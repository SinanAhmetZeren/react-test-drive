import { useForm } from "react-hook-form";
import { addVoyage } from "./apiUsers";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function CreateVoyageForm() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addVoyage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["voyagesData"] });
    },
  });

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    mutate(data);
  }

  // name vehicleId ownerId
  return (
    <form
      className="mt-10 w-3/4 mx-auto p-8 bg-green-400 flex space-x-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="name"
          {...register("name")}
        ></input>
      </span>
      <span>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="vehicleId"
        >
          vehicleId
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="vehicleId"
          {...register("vehicleId")}
        ></input>
      </span>
      <span>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="ownerId"
        >
          ownerId
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="ownerId"
          {...register("ownerId")}
        ></input>
      </span>
      <button className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2">
        add button
      </button>
    </form>
  );
}

export default CreateVoyageForm;
