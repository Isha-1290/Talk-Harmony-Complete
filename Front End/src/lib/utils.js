export const doesTokenExist = (navigate) => {
  // Check if token exists
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/LoginPage");
  }
  // Add any other token validation logic here
  return token;
};
