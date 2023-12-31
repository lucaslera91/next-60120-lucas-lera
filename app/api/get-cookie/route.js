export default async function handler(req, res) {
    // Get the value of the "user" cookie from the request headers
    const userCookie = req.headers.cookie
      ? req.headers.cookie.split('; ').find((c) => c.startsWith('user='))
      : null;
  
    const userId = userCookie ? userCookie.split('=')[1] : null;
  
    // Respond with the user ID or a message
    res.status(200).json({ userId });
  }