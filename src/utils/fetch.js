export const signup = async (username, email, password) => {
  const response = await fetch("http://localhost:5001/users/signup", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });

  const data = await response.json();
  console.log("data in fetch signup", data);
  return data;
};

export const login = async (username, password) => {
  try {
    const response = await fetch("http://localhost:5001/users/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// export const getAllUsers = async () => {
//   const response = await fetch("http://localhost:5001/users/getAllUsers", {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const data = await response.json();

//   console.log("data in fetch users", data);
//   return data;
// };

export const fetchRandomPhoto = async () => {
  try {
    const response = await fetch("https://api.unsplash.com/photos/", {
      headers: {
        Authorization: "Client-ID Nnrsm1NkbZ0-rRr2iCCwSTy9kBjhQKteSm38BtgVYaI",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching random photo:", error);
  }
};

export const getUserDetails = async (userId) => {
  const response = await (`http://localhost:5001/users/${userId}`,
  {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  console.log("data in fetch user details", data);
  return data;
};

export const updateUserDetails = async (userId, userData) => {
  const response = await fetch(`http://localhost:5001/users/${userId}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  console.log("data in update user details", data);
  return data;
};

export const getAllUsers = async () => {
  const response = await fetch("http://localhost:5001/users/getAllUsers", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  console.log("data in fetch users", data);
  return data;
};

const handleApply = () => {
  fetch("api/applyForJob", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ jobId: selectedJob.id }),
  })
    .then((response) => {
      if (response.ok) {
        setApplied(true);
      } else {
        console.error("Failed to apply for the job.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
