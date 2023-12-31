
  //Api service
  export const setCookieApi = async (key, value) => {
    return await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/set-cookie/`,
      {
        method: 'POST',
        // next: { validate: 1 } 
        //{key: value}
        body: JSON.stringify({[key]: value}),
      }
    )
      .then((res) => res.json())
      .catch(
        (error) => console.log(error)
        //   Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "Error en la pagina, por favor intenta luego",
        //   })
      );
  };

  export const setCookieService = (keyValue) => {


  }