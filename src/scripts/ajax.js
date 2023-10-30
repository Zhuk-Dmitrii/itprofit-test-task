export async function sendFormData(formData) {
   const response = await fetch('http://localhost:9090/api/registration', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
   })

   return await response.json()
}