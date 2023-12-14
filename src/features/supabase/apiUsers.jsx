import supabase from "./supabase";

export async function getUsers() {
  const { data, error } = await supabase.from("userData").select("*");
  if (error) {
    console.error(error);
    throw new Error("Us could not be loaded");
  }
  return data;
}

export async function getVehicles() {
  const { data, error } = await supabase.from("vehicles").select("*");
  if (error) {
    console.error(error);
    throw new Error("Vs could not be loaded");
  }

  return data;
}

export async function getVoyages() {
  const { data, error } = await supabase.from("voyages").select("*");
  if (error) {
    console.error(error);
    throw new Error("Vs could not be loaded");
  }

  return data;
}

export async function addVoyage(newVoyage) {
  const { data, error } = await supabase
    .from("voyages")
    .insert(newVoyage)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Vs could not be added");
  }

  return data;
}

export async function deleteVoyage(id) {
  const { error } = await supabase.from("voyages").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Vs could not be loaded");
  }

  return error;
}

// We expect a newSetting object that looks like {setting: newValue}
export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }
  return data;
}
