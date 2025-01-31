async function checkSession() {
  try {
    const { data, error} = await supabase.auth.getSession();
    if (data) {
      console.log(data)
      
    }
    const authPages = ["/index.html", "/login.html", "/"];
    const currentPath = window.location.pathname;
    const isAuthPage = authPages.some((page) => page.includes(currentPath));

    const { session } = data;

    if (session) {
      if (isAuthPage) {
        window.location.href = "/dashboard.html";
      }
    } else {
      if (!isAuthPage) {
        window.location.href = "/login.html";
      }
    }
let sessioncurrent=localStorage.setItem(sessioncurrent)
    console.log(session);
  } catch (error) {
    console.log(error);
  }
}

window.getSession= checkSession

window.onload= getSession()