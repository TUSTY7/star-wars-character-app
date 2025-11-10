export const loginUser = (username, password) => {
  if (username === "admin" && password === "1234") {
    const token = "fake-jwt-token-" + Date.now();
    localStorage.setItem("jwtToken", token);
    return { success: true, token };
  }
  return { success: false, message: "Invalid credentials" };
};

export const logoutUser = () => {
  localStorage.removeItem("jwtToken");
};

export const getToken = () => localStorage.getItem("jwtToken");
