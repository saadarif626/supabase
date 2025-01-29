async function checkSession() {
  try {
    const { data, error } = await supabase.auth.getSession();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

checkSession();
